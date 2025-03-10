"use client";

import { useSetAtom } from "jotai";
import { motion } from "motion/react";

import { cn, getColor } from "@/lib/utils";
import { editingSpeakerAtom, Speaker } from "../atoms";

export default function SpeakerSquare({ speaker }: { speaker: Speaker }) {
  const setEditingSpeaker = useSetAtom(editingSpeakerAtom);
  const color = speaker ? getColor(speaker.id) : "";

  const initials = speaker.recognized
    ? `${speaker.firstName[0]}${speaker.lastName[0]}`
    : "?";

  const handleClick = () => {
    if (speaker) {
      setEditingSpeaker(speaker);
    }
  };

  return (
    <motion.div
      layoutId={speaker.id}
      transition={{
        duration: 1,
        ease: [0.5, 0, 0.2, 1],
      }}
      onClick={handleClick}
      className="group flex aspect-square grow basis-1/3 cursor-pointer items-center justify-center rounded-xl border border-slate-300 bg-gradient-to-b from-slate-100 to-white inset-shadow-2xs inset-shadow-white last:aspect-[2/1] dark:border-slate-900 dark:from-slate-900 dark:to-slate-800 dark:inset-shadow-white/20"
    >
      <motion.div
        layoutId={`${speaker.id}-initials`}
        transition={{
          duration: 1,
          ease: [0.5, 0, 0.2, 1],
        }}
        className={cn(
          "font-500 flex size-12 items-center justify-center rounded-full bg-gradient-to-b transition-transform group-hover:scale-105",
          speaker.recognized && `from-${color}-500 to-${color}-600 text-white`,
          !speaker.recognized && "border-2 border-dotted border-slate-300",
        )}
      >
        {initials}
      </motion.div>
    </motion.div>
  );
}
