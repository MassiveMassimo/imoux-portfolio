"use client";

import type {
  RealtimeChannel,
  RealtimePresenceState,
} from "@supabase/supabase-js";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useAtomValue } from "jotai";
import { throttle } from "lodash";
import { usePathname } from "next/navigation";

import { joinedAtom, usernameAtom, UUIDAtom } from "@/app/atoms";
import { createClient } from "@/utils/supabase/client";
import LocalCursor from "./LocalCursor";
import MultiplayerControls from "./MultiplayerControls";
import MultiplayerCursor from "./MultiplayerCursor";

const client = createClient();

// Moved interfaces outside component
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

// Memoized cursor component
const MemoizedMultiplayerCursor = memo(MultiplayerCursor);

export default function Multiplayer() {
  const [cursorsState, setCursorsState] = useState<CursorsState>({});
  const channelRef = useRef<RealtimeChannel | null>(null);

  const joined = useAtomValue(joinedAtom);
  const id = useAtomValue(UUIDAtom);
  const username = useAtomValue(usernameAtom);
  const pathname = usePathname();

  // Memoized channel setup
  const setupChannel = useCallback(async () => {
    if (!joined) {
      if (channelRef.current) {
        await channelRef.current.untrack();
        await channelRef.current.unsubscribe();
        channelRef.current = null;
      }
      return;
    }

    channelRef.current = client.channel(pathname, {
      config: { presence: { key: id } },
    });

    try {
      await channelRef.current
        .on("broadcast", { event: "cursor" }, cursorMoved)
        .on("broadcast", { event: "message" }, messageReceived)
        .on("presence", { event: "sync" }, presenceChanged)
        .subscribe();

      await channelRef.current.track({
        username,
        x: 0,
        y: 0,
        location: pathname,
      });
    } catch (error) {
      console.error("Error setting up channel:", error);
    }
  }, [joined, pathname, id, username]);

  useEffect(() => {
    setupChannel();
    return () => {
      if (channelRef.current) {
        channelRef.current.unsubscribe();
        channelRef.current = null;
      }
    };
  }, [setupChannel]);

  const presenceChanged = useCallback(() => {
    if (!channelRef.current) return;

    const newState =
      channelRef.current.presenceState() as RealtimePresenceState;
    setCursorsState(
      Object.entries(newState).reduce((acc, [userId, userList]) => {
        if (userList.length > 0) {
          acc[userId] = userList[0] as CursorData;
        }
        return acc;
      }, {} as CursorsState),
    );
  }, []);

  const cursorMoved = useCallback((payload: { payload: CursorPayload }) => {
    const { id: userId, username, x, y } = payload.payload;
    setCursorsState((prev) => {
      if (!prev[userId]) return prev;
      return {
        ...prev,
        [userId]: { ...prev[userId], username, x, y },
      };
    });
  }, []);

  const messageReceived = useCallback(
    (payload: { payload: MessagePayload }) => {
      const { id: userId, message } = payload.payload;
      setCursorsState((prev) => {
        if (!prev[userId]) return prev;
        return {
          ...prev,
          [userId]: { ...prev[userId], message },
        };
      });
    },
    [],
  );

  // Memoized cursors rendering
  const renderedCursors = useMemo(() => {
    return Object.entries(cursorsState).map(
      ([userId, cursor]) =>
        userId !== id && (
          <MemoizedMultiplayerCursor
            key={userId}
            x={cursor.x ?? 0}
            y={cursor.y ?? -80}
            username={cursor.username}
            message={cursor.message}
          />
        ),
    );
  }, [cursorsState, id]);

  // Memoized cursors prop for MultiplayerControls
  const memoizedCursors = useMemo(
    () => ({ current: cursorsState }),
    [cursorsState],
  );

  // Early return for touch devices
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
      <MultiplayerControls cursors={memoizedCursors} />
    </>
  );
}
