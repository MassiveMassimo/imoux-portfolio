"use client";

import type {
  RealtimeChannel,
  RealtimePresenceState,
} from "@supabase/supabase-js";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useAtomValue } from "jotai";
import { usePathname } from "next/navigation";

import { joinedAtom, usernameAtom, UUIDAtom } from "@/app/atoms";
import { createClient } from "@/utils/supabase/client";
import LocalCursor from "./LocalCursor";
import MultiplayerControls from "./MultiplayerControls";
import MultiplayerCursor from "./MultiplayerCursor";

const client = createClient();

interface CursorData {
  username: string;
  x?: number;
  y?: number;
  presence_ref?: string;
}

interface CursorsState {
  [userId: string]: CursorData;
}

interface BroadcastPayload {
  id: string;
  username: string;
  x: number;
  y: number;
}

export default function Multiplayer() {
  const [cursorsVersion, setCursorsVersion] = useState(0); // Triggers re-renders
  const cursorsRef = useRef<CursorsState>({});
  const joined = useAtomValue(joinedAtom);
  const id = useAtomValue(UUIDAtom);
  const username = useAtomValue(usernameAtom);
  const pathname = usePathname();
  const channelRef = useRef<RealtimeChannel | null>(null);

  useEffect(() => {
    const setupChannel = async () => {
      if (joined) {
        channelRef.current = client.channel(pathname, {
          config: {
            presence: { key: id },
          },
        });

        const channel = channelRef.current;

        try {
          channel
            .on("broadcast", { event: "cursor" }, messageReceived)
            .on("presence", { event: "sync" }, presenceChanged)
            .subscribe();

          await channel.track({ username: username, x: 0, y: 0 });
        } catch (error) {
          console.error("Error setting up channel:", error);
        }
      } else if (channelRef.current) {
        await untrackPresence();
        await channelRef.current.unsubscribe();
        channelRef.current = null;
      }
    };

    setupChannel();

    return () => {
      if (channelRef.current) {
        channelRef.current.unsubscribe();
        channelRef.current = null;
      }
    };
  }, [joined, pathname, id, username]);

  const presenceChanged = useCallback(() => {
    if (channelRef.current) {
      const newState =
        channelRef.current.presenceState() as RealtimePresenceState;

      console.log(newState);
      cursorsRef.current = Object.entries(newState).reduce(
        (acc, [userId, userList]) => {
          if (userList.length > 0) {
            acc[userId] = userList[0] as CursorData;
          }
          return acc;
        },
        {} as CursorsState,
      );

      setCursorsVersion((prev) => prev + 1); // Trigger re-render
    }
  }, []);

  const messageReceived = useCallback(
    (payload: {
      type: "broadcast";
      event: string;
      payload: BroadcastPayload;
    }) => {
      console.log(payload);
      const { id: userId, username, x, y } = payload.payload;
      if (cursorsRef.current[userId]) {
        cursorsRef.current[userId] = {
          ...cursorsRef.current[userId],
          username,
          x,
          y,
        };
        setCursorsVersion((prev) => prev + 1); // Trigger re-render
      }
    },
    [],
  );

  const untrackPresence = async () => {
    if (channelRef.current) {
      try {
        const presenceUntrackStatus = await channelRef.current.untrack();
        console.log(presenceUntrackStatus);
      } catch (error) {
        console.error("Error untracking presence:", error);
      }
    }
  };

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  const renderedCursors = useMemo(() => {
    console.log(cursorsRef.current);
    return Object.entries(cursorsRef.current).map(
      ([userId, cursor]) =>
        userId !== id && (
          <MultiplayerCursor
            key={userId}
            x={cursor.x ?? 0}
            y={cursor.y ?? -80}
            username={cursor.username}
          />
        ),
    );
  }, [cursorsVersion, id]);

  return (
    <>
      <LocalCursor channel={channelRef.current} />
      {joined && renderedCursors}
      <MultiplayerControls />
    </>
  );
}
