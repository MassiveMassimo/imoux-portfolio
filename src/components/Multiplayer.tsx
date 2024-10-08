"use client";

import type {
  RealtimeChannel,
  RealtimePresenceState,
} from "@supabase/supabase-js";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useAtomValue } from "jotai";
import { throttle } from "lodash";
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
  location?: string;
  message?: string;
  presence_ref?: string;
}

export interface CursorsState {
  [userId: string]: CursorData;
}

interface CursorPayload {
  id: string;
  username: string;
  x: number;
  y: number;
}

interface MessagePayload {
  id: string;
  message: string;
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
            .on("broadcast", { event: "cursor" }, cursorMoved)
            .on("broadcast", { event: "message" }, messageReceived)
            .on("presence", { event: "sync" }, presenceChanged)
            .subscribe();

          await channel.track({
            username: username,
            x: 0,
            y: 0,
            location: pathname,
          });
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

  const cursorMoved = useCallback(
    (payload: { type: "broadcast"; event: string; payload: CursorPayload }) => {
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

  const messageReceived = useCallback(
    (payload: {
      type: "broadcast";
      event: string;
      payload: MessagePayload;
    }) => {
      const { id: userId, message } = payload.payload;
      console.log("Message received from", userId, ":", message);
      if (cursorsRef.current[userId]) {
        cursorsRef.current[userId] = {
          ...cursorsRef.current[userId],
          message,
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
      } catch (error) {
        console.error("Error untracking presence:", error);
      }
    }
  };

  const renderThrottledCursors = useCallback(
    throttle(() => {
      return Object.entries(cursorsRef.current).map(
        ([userId, cursor]) =>
          userId !== id && (
            <MultiplayerCursor
              key={userId}
              x={cursor.x ?? 0}
              y={cursor.y ?? -80}
              username={cursor.username}
              message={cursor.message}
            />
          ),
      );
    }, 50),
    [id],
  );

  const renderedCursors = useMemo(() => {
    return renderThrottledCursors();
  }, [cursorsVersion, id, renderThrottledCursors]);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <LocalCursor channel={channelRef.current} />
        {joined && renderedCursors}
      </div>
      <MultiplayerControls cursors={cursorsRef} />
    </>
  );
}
