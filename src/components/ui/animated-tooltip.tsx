"use client";

import type { CursorsState } from "../Multiplayer";

import React, { useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRouter } from "next/navigation";

import { cn, getColor } from "@/lib/utils";

export const AnimatedTooltip = ({ cursors }: { cursors: CursorsState }) => {
  const router = useRouter();

  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]), // Can adjust range here
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div className="flex -space-x-3">
      <AnimatePresence mode="popLayout">
        {Object.entries(cursors).map(([userId, cursor]) => (
          <motion.div
            className="group relative"
            key={userId}
            onMouseEnter={() => setHoveredIndex(userId)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ y: 56, opacity: 0 }} // Start outside the view
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            }}
            exit={{
              y: 30,
              opacity: 0,
              transition: { ease: "easeIn", duration: 0.3 },
            }} // Slight upward movement and opacity fade
            layout
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === userId && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX, // Controls horizontal movement of the tooltip
                    rotate: rotate, // Controls the tilt based on x value
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                >
                  <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                  <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                  <div className="relative z-30 text-base font-bold capitalize text-white">
                    {cursor.username}
                  </div>
                  <div className="text-xs text-white/70">{cursor.location}</div>
                </motion.div>
              )}
            </AnimatePresence>
            <div
              onMouseMove={handleMouseMove}
              onClick={() => cursor.location && router.push(cursor.location)}
              className={cn(
                "relative !m-0 size-10 shrink-0 cursor-pointer rounded-full border-2 object-cover object-top !p-0 shadow-lg transition duration-500 group-hover:z-30 group-hover:scale-105",
                `bg-${getColor(cursor.username)}-500 border-${getColor(cursor.username)}-600`,
                "before:absolute before:inset-0 before:rounded-full before:shadow-inner before:shadow-white/30",
              )}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
