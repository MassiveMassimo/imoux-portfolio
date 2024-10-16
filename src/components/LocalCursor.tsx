"use client";

import type { RealtimeChannel } from "@supabase/supabase-js";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { useAtomValue } from "jotai";
import { debounce, throttle } from "lodash";

import { joinedAtom, usernameAtom, UUIDAtom } from "@/app/atoms";
import { getColor } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import CursorBubble from "./CursorBubble";

gsap.registerPlugin(useGSAP);

export default function LocalCursor({
  channel,
}: Readonly<{
  channel: RealtimeChannel | null;
}>) {
  const joined = useAtomValue(joinedAtom);
  const username = useAtomValue(usernameAtom);
  const id = useAtomValue(UUIDAtom);

  const cursorRef = useRef(null);
  const xToCursor = useRef<Function>();
  const yToCursor = useRef<Function>();
  const xToUsername = useRef<Function>();
  const yToUsername = useRef<Function>();
  const lastPosition = useRef({ x: 0, y: 0 });
  const throttledSend = useRef<((relX: number, relY: number) => void) | null>(
    null,
  );
  const debouncedSend = useRef<((relX: number, relY: number) => void) | null>(
    null,
  );

  const { contextSafe } = useGSAP(
    () => {
      xToCursor.current = gsap.quickSetter(".cursor", "x", "px");
      yToCursor.current = gsap.quickSetter(".cursor", "y", "px");

      xToUsername.current = gsap.quickTo(".username", "x", {
        duration: 0.1,
        ease: "power3",
      });
      yToUsername.current = gsap.quickTo(".username", "y", {
        duration: 0.1,
        ease: "power3",
      });

      const sendPosition = (relX: number, relY: number) => {
        if (joined && channel) {
          channel.send({
            type: "broadcast",
            event: "cursor",
            payload: {
              id: id,
              username: username,
              x: relX,
              y: relY,
            },
          });
        }
      };

      throttledSend.current = throttle(sendPosition, 200);
      debouncedSend.current = debounce(sendPosition, 250);

      const moveCursor = contextSafe((e: MouseEvent) => {
        if (
          xToCursor.current &&
          yToCursor.current &&
          xToUsername.current &&
          yToUsername.current
        ) {
          // Viewport-relative positioning for the cursor
          const absoluteX = e.clientX;
          const absoluteY = e.clientY;

          // Adjust for the webpage (document) relative positioning
          const pageX = e.clientX + window.scrollX;
          const pageY = e.clientY + window.scrollY;

          const documentWidth = document.documentElement.scrollWidth;
          const documentHeight = document.documentElement.scrollHeight;

          // Calculate relative position based on the entire webpage (not just viewport)
          const relativeX = pageX / documentWidth;
          const relativeY = pageY / documentHeight;

          // Update cursor position relative to the viewport
          xToCursor.current(absoluteX - 12);
          yToCursor.current(absoluteY - 12);

          // Update username position relative to the viewport
          xToUsername.current(absoluteX + 12);
          yToUsername.current(absoluteY + 4);

          // Store the relative position for broadcast
          lastPosition.current = { x: relativeX, y: relativeY };

          // Throttled and debounced sending of relative position (for the entire webpage)
          throttledSend.current?.(relativeX, relativeY);
          debouncedSend.current?.(relativeX, relativeY);
        }
      });

      const hideCursor = contextSafe(() => {
        gsap.to([cursorRef.current, ".username"], {
          scale: 0.8,
          filter: "blur(20px)",
          opacity: 0,
          duration: 0.3,
        });
      });

      const showCursor = contextSafe(() => {
        gsap.to([cursorRef.current, ".username"], {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.3,
        });
      });

      document.addEventListener("mousemove", moveCursor);
      document.addEventListener("mouseleave", hideCursor);
      document.addEventListener("mouseenter", showCursor);

      return () => {
        document.removeEventListener("mousemove", moveCursor);
        document.removeEventListener("mouseleave", hideCursor);
        document.removeEventListener("mouseenter", showCursor);
      };
    },
    { scope: cursorRef, dependencies: [username, channel, joined] },
  );

  // Effect to handle channel changes
  useEffect(() => {
    if (channel) {
      // Channel is available, you can set up any necessary listeners here
      console.log("Channel is available in LocalCursor");
    } else {
      // Channel is null, perform any cleanup if necessary
      console.log("Channel is not available in LocalCursor");
    }
  }, [channel]);

  return (
    <div ref={cursorRef} className="pointer-events-none select-none">
      <svg
        className="fixed left-0 top-0 z-50"
        width="33"
        height="33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)" opacity="1">
          <path
            d="M9.63 6.9a1 1 0 011.27-1.27l11.25 3.75a1 1 0 010 1.9l-4.68 1.56a1 1 0 00-.63.63l-1.56 4.68a1 1 0 01-1.9 0L9.63 6.9z"
            className={`fill-${getColor(username)}-500`}
          ></path>
          <path
            d="M11.13 4.92a1.75 1.75 0 00-2.2 2.21l3.74 11.26a1.75 1.75 0 003.32 0l1.56-4.68a.25.25 0 01.16-.16L22.4 12a1.75 1.75 0 000-3.32L11.13 4.92z"
            stroke="#fff"
            strokeWidth="1.5"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x=".08"
            y=".08"
            width="32.26"
            height="32.26"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
      {username && <CursorBubble username={username} channel={channel} />}
    </div>
  );
}
