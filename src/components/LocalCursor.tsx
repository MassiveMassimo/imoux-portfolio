"use client";

import { UUIDAtom } from "@/app/atoms";
import { useGSAP } from "@gsap/react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import gsap from "gsap";
import { useAtomValue } from "jotai";
import { throttle } from "lodash";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function LocalCursor({
  username,
  room,
}: Readonly<{
  username: string;
  room: RealtimeChannel;
}>) {
  const cursorRef = useRef(null);
  const xTo = useRef<Function>();
  const yTo = useRef<Function>();

  const UUID = useAtomValue(UUIDAtom);

  // Check if it's a touch device
  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickSetter(".cursor", "x", "px");
      yTo.current = gsap.quickSetter(".cursor", "y", "px");

      const moveCursor = contextSafe((e: MouseEvent) => {
        if (xTo.current && yTo.current) {
          xTo.current(e.clientX - 12);
          yTo.current(e.clientY - 4);

          throttledSend({
            id: UUID,
            username: username,
            x: e.clientX,
            y: e.clientY,
          });
        }
      });

      const throttledSend = throttle((payload: any) => {
        room.send({
          type: "broadcast",
          event: "test",
          payload: payload,
        });
      }, 100);

      const hideCursor = contextSafe(() => {
        gsap.to(".cursor", {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        });
      });

      const showCursor = contextSafe(() => {
        gsap.to(".cursor", {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1,0.75)",
        });
      });

      document.addEventListener("mousemove", moveCursor);
      document.addEventListener("mouseleave", hideCursor);
      document.addEventListener("mouseenter", showCursor);

      return () => {
        // <-- cleanup
        document.removeEventListener("mousemove", moveCursor);
        document.removeEventListener("mouseleave", hideCursor);
        document.removeEventListener("mouseenter", showCursor);
      };
    },
    { scope: cursorRef },
  );

  if (isTouchDevice) {
    return null;
  }

  return (
    <div ref={cursorRef}>
      <div className="cursor pointer-events-none fixed left-0 top-0 z-50 flex select-none">
        <svg
          width="33"
          height="33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)" opacity="1">
            <path
              d="M9.63 6.9a1 1 0 011.27-1.27l11.25 3.75a1 1 0 010 1.9l-4.68 1.56a1 1 0 00-.63.63l-1.56 4.68a1 1 0 01-1.9 0L9.63 6.9z"
              fill="#ff0080"
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
        <div>
          {username && (
            <div className="username relative max-w-40 -translate-x-3 translate-y-4 truncate rounded-full border-2 border-rose-600 bg-rose-500 px-3 py-2 text-sm font-500 text-white shadow-lg before:absolute before:inset-0 before:rounded-full before:shadow-inner before:shadow-white/30">
              {username}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
