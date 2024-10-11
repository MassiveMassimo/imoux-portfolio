"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { throttle } from "lodash";

import { usePerfectCursor } from "@/app/hooks/usePerfectCursor";
import { cn, getColor } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MultiplayerCursor({
  username,
  x,
  y,
  message,
}: Readonly<{
  username: string;
  x: number; // Relative position (0-1) of cursor in document
  y: number; // Relative position (0-1) of cursor in document
  message?: string;
}>) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [documentDimensions, setDocumentDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Update document dimensions when they change
  useLayoutEffect(() => {
    const updateDimensions = () => {
      const docElement = document.documentElement;
      setDocumentDimensions({
        width: Math.max(
          docElement.scrollWidth,
          docElement.offsetWidth,
          docElement.clientWidth,
        ),
        height: Math.max(
          docElement.scrollHeight,
          docElement.offsetHeight,
          docElement.clientHeight,
        ),
      });
    };

    updateDimensions();

    // Use ResizeObserver to detect document size changes
    const resizeObserver = new ResizeObserver(throttle(updateDimensions, 100));
    resizeObserver.observe(document.documentElement);

    return () => resizeObserver.disconnect();
  }, []);

  const animateCursor = useCallback((point: number[]) => {
    const elm = cursorRef.current;
    if (!elm) return;

    const [absoluteX, absoluteY] = point;

    // Calculate position relative to viewport
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const viewportX = absoluteX - scrollX;
    const viewportY = absoluteY - scrollY;

    // Only show cursor if it's within or near the viewport
    const padding = 100; // Show cursors slightly outside viewport
    const isNearViewport =
      viewportX >= -padding &&
      viewportX <= window.innerWidth + padding &&
      viewportY >= -padding &&
      viewportY <= window.innerHeight + padding;

    // Update visibility and position
    elm.style.visibility = isNearViewport ? "visible" : "hidden";
    elm.style.setProperty(
      "transform",
      `translate(${viewportX - 12}px, ${viewportY - 4}px)`,
    );
  }, []);

  const onPointMove = usePerfectCursor(animateCursor);

  useEffect(() => {
    if (documentDimensions.width === 0 || documentDimensions.height === 0)
      return;

    // Convert relative coordinates to absolute document coordinates
    const absoluteX = x * documentDimensions.width;
    const absoluteY = y * documentDimensions.height;
    onPointMove([absoluteX, absoluteY]);
  }, [onPointMove, x, y, documentDimensions]);

  // Update cursor position on scroll
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (documentDimensions.width === 0 || documentDimensions.height === 0)
        return;
      const absoluteX = x * documentDimensions.width;
      const absoluteY = y * documentDimensions.height;
      onPointMove([absoluteX, absoluteY]);
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [x, y, documentDimensions, onPointMove]);

  const initialAnimation = useMemo(
    () => ({ opacity: 0, filter: "blur(20px)" }),
    [],
  );
  const animateAnimation = useMemo(
    () => ({ opacity: 1, filter: "blur(0px)" }),
    [],
  );
  const exitAnimation = useMemo(
    () => ({ opacity: 0, filter: "blur(20px)" }),
    [],
  );

  return (
      <motion.div
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
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
          <div
            className={cn(
              "pointer-events-none z-50 max-w-md -translate-x-2 translate-y-3 truncate rounded-[20px] px-3 py-2 text-sm font-500 capitalize text-white shadow-lg transition-[border-top-left-radius] before:transition-[border-top-left-radius]",
              `border-2 border-${getColor(username)}-600 bg-${getColor(username)}-500`,
              "before:absolute before:inset-0 before:rounded-[18px] before:shadow-inner before:shadow-white/30",
              message && "rounded-tl-md before:rounded-tl",
            )}
          >
            {username}
            <AnimatePresence>
              {message && (
                <motion.div
                  key="chat-box"
                  initial={{ width: 0, height: 0, filter: "blur(20px)" }} // Start hidden
                  animate={{
                    width: "auto",
                    height: "auto",
                    filter: "blur(0px)",
                  }} // Animate in
                  exit={{ width: 0, height: 0, filter: "blur(20px)" }} // Animate out
                  className="font-400 normal-case text-white"
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
  );
}
