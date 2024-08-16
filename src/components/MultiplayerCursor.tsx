"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { PerfectCursor } from "perfect-cursors";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MultiplayerCursor({
  username,
  x,
  y,
}: Readonly<{
  username: string;
  x: number;
  y: number;
}>) {

  console.log(x, y);
  const cursorRef = useRef<HTMLDivElement>(null);

  const animateCursor = useCallback((point: number[]) => {
    const elm = cursorRef.current;
    if (!elm) return;

    // Convert relative coordinates to absolute
    const absoluteX = point[0] * window.innerWidth;
    const absoluteY = point[1] * window.innerHeight;

    elm.style.setProperty(
      "transform",
      `translate(${absoluteX - 12}px, ${absoluteY - 4}px)`,
    );
  }, []);

  const onPointMove = usePerfectCursor(animateCursor);

  useEffect(() => {
    const handleResize = () => onPointMove([x, y]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onPointMove, x, y]);

  useEffect(() => onPointMove([x, y]), [onPointMove, x, y]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none absolute left-0 top-0 z-50 select-none"
    >
      <div className="flex">
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
        <div className="username relative max-w-40 -translate-x-3 translate-y-4 truncate rounded-full border-2 border-rose-600 bg-rose-500 px-3 py-2 text-sm font-500 capitalize text-white shadow-lg before:absolute before:inset-0 before:rounded-full before:shadow-inner before:shadow-white/30">
          {username}
        </div>
      </div>
    </div>
  );

  function usePerfectCursor(cb: (point: number[]) => void, point?: number[]) {
    const useIsomorphicLayoutEffect =
      typeof window !== "undefined" ? useLayoutEffect : useEffect;

    const [pc, setPc] = useState(() => new PerfectCursor(cb));

    useIsomorphicLayoutEffect(() => {
      if (point) {
        pc.addPoint(point);
      }
      return () => pc.dispose();
    }, [pc, point]);

    return useCallback((point: number[]) => pc.addPoint(point), [pc]);
  }
}
