"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

interface ContainerGlowProps extends React.SVGAttributes<SVGSVGElement> {}

export default function ContainerGlow({
  className,
  ...props
}: ContainerGlowProps) {
  const glowRef = useRef<SVGSVGElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  const { contextSafe } = useGSAP(() => {
    if (!glowRef.current) return;

    xTo.current = gsap.quickTo(glowRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });

    yTo.current = gsap.quickTo(glowRef.current, "y", {
      duration: 0.5,
      ease: "power3",
    });
  }, {});

  const moveCursor = contextSafe((e: MouseEvent) => {
    if (!xTo.current || !yTo.current || !glowRef.current) return;

    const parentRect = glowRef.current.parentElement?.getBoundingClientRect();
    if (!parentRect) return;

    const glowRect = glowRef.current.getBoundingClientRect();
    const glowWidth = glowRect.width;
    const glowHeight = glowRect.height;

    const relativeX = e.clientX - parentRect.left - glowWidth / 2;
    const relativeY = e.clientY - parentRect.top - glowHeight / 2;

    xTo.current(relativeX);
    yTo.current(relativeY);
  });

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [moveCursor]);

  return (
    <svg
      ref={glowRef}
      className="pointer-events-none absolute left-0 top-0 z-10 -translate-y-full !opacity-100"
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_70_2)">
        <circle cx="250" cy="250" r="50" className={className} />
      </g>
      <defs>
        <filter
          id="filter0_f_70_2"
          x="0"
          y="0"
          width="500"
          height="500"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_70_2"
          />
        </filter>
      </defs>
    </svg>
  );
}
