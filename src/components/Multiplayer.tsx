"use client";

import type {
  RealtimeChannel,
  RealtimePresenceState,
} from "@supabase/supabase-js";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";
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
  x: number;
  y: number;
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
  const [cursorsVersion, setCursorsVersion] = useState(0);
  const [isWindowFocused, setIsWindowFocused] = useState(false);
  const cursorsRef = useRef<CursorsState>({});
  const joined = useAtomValue(joinedAtom);
  const id = useAtomValue(UUIDAtom);
  const username = useAtomValue(usernameAtom);
  const pathname = usePathname();
  const channelRef = useRef<RealtimeChannel | null>(null);

  // Initialize window focus state after mount
  useEffect(() => {
    setIsWindowFocused(document.hasFocus());
  }, []);

  const untrackPresence = async () => {
    if (channelRef.current) {
      try {
        await channelRef.current.untrack();
      } catch (error) {
        console.error("Error untracking presence:", error);
      }
    }
  };

  const trackPresence = async () => {
    if (channelRef.current && joined) {
      try {
        await channelRef.current.track({
          username: username,
          location: pathname,
        });
      } catch (error) {
        console.error("Error tracking presence:", error);
      }
    }
  };

  // Handle window focus events
  useEffect(() => {
    const handleFocus = async () => {
      setIsWindowFocused(true);
      await trackPresence();
    };

    const handleBlur = async () => {
      setIsWindowFocused(false);
      await untrackPresence();
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, [joined, pathname, username]);

  useEffect(() => {
    const setupChannel = async () => {
      if (joined) {
        channelRef.current = client.channel("prod", {
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

          // Only track presence if window is focused
          if (isWindowFocused) {
            await trackPresence();
          }
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
  }, [joined, pathname, id, username, isWindowFocused]);

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

      setCursorsVersion((prev) => prev + 1);
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
        setCursorsVersion((prev) => prev + 1);
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
      if (cursorsRef.current[userId]) {
        cursorsRef.current[userId] = {
          ...cursorsRef.current[userId],
          message,
        };
        setCursorsVersion((prev) => prev + 1);
      }
    },
    [],
  );

  const renderThrottledCursors = useCallback(
    throttle(() => {
      return (
        <AnimatePresence>
          {Object.entries(cursorsRef.current)
            .filter(
              ([userId, cursor]) =>
                userId !== id &&
                cursor.location !== undefined &&
                cursor.location === pathname,
            )
            .map(([userId, cursor]) => (
              <MultiplayerCursor
                key={userId}
                x={cursor.x}
                y={cursor.y}
                username={cursor.username}
                message={cursor.message}
              />
            ))}
        </AnimatePresence>
      );
    }, 50),
    [id, pathname], // Added pathname to dependencies since we're using it in the filter
  );

  const renderedCursors = useMemo(() => {
    return renderThrottledCursors();
  }, [cursorsVersion, id, renderThrottledCursors]);

  const stableCursors = useMemo(() => cursorsRef, [cursorsVersion]);

  const memoizedChannel = useMemo(
    () => channelRef.current,
    [channelRef.current],
  );

  if (typeof window !== "undefined" && window.innerWidth < 640) {
    // 640px is the default sm breakpoint in Tailwind
    return null; // Return null for mobile/touch devices (below the sm breakpoint)
  }
  return (
    <>
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <LocalCursor channel={memoizedChannel} />
        {joined && renderedCursors}
      </div>
      <MultiplayerControls cursors={stableCursors} />
    </>
  );
}
