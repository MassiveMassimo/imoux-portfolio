"use client";

import { useEffect, useRef, useState } from "react";

import { useAtomValue, useSetAtom } from "jotai";
import { AnimatePresence, motion } from "motion/react";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import { newSpeakerAtom, Speaker, speakersAtom } from "../atoms";
import SpeakerSquare from "./SpeakerSquare";

export default function Top() {
  const newSpeaker = useAtomValue(newSpeakerAtom);
  const speakers = useAtomValue(speakersAtom);
  const setSpeakers = useSetAtom(speakersAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (newSpeaker) {
      setShowOverlay(true);
      const timer = setTimeout(() => {
        setShowOverlay(false);
        // Add new speaker to speakers
        setSpeakers((prev) => ({
          ...prev,
          [newSpeaker.id]: newSpeaker,
        }));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [newSpeaker, setSpeakers]);

  useEffect(() => {
    if (containerRef.current && Object.keys(speakers).length > 0) {
      const container = containerRef.current;
      // Get the actual viewport element which is what we need to scroll
      const viewport = container.querySelector(
        "[data-radix-scroll-area-viewport]",
      );

      if (viewport) {
        const targetScroll = viewport.scrollHeight - viewport.clientHeight;
        const startScroll = viewport.scrollTop;
        const startTime = performance.now();
        const duration = 1500; // 1.5 seconds in milliseconds

        function scrollAnimation(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);

          if (viewport) {
            viewport.scrollTop =
              startScroll + (targetScroll - startScroll) * easeOutCubic;

            if (progress < 1) {
              requestAnimationFrame(scrollAnimation);
            }
          }
        }

        requestAnimationFrame(scrollAnimation);
      }
    }
  }, [speakers]);

  return (
    <ScrollArea.Root
      ref={containerRef}
      className="relative flex aspect-square w-full"
    >
      <AnimatePresence>
        {showOverlay && newSpeaker && (
          <NewSpeakerOverlay speaker={newSpeaker} />
        )}
      </AnimatePresence>
      <ScrollArea.Viewport className="w-full rounded-xl">
        <AnimatePresence></AnimatePresence>
        <div className="flex w-full flex-wrap gap-2">
          {Object.entries(speakers).map(([id, speaker]) => (
            <SpeakerSquare key={id} speaker={speaker} />
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="bg-blackA3 hover:bg-blackA5 flex touch-none p-0.5 transition-colors duration-[160ms] ease-out select-none data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-2.5"
        orientation="vertical"
      ></ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

function NewSpeakerOverlay({ speaker }: { speaker: Speaker }) {
  return (
    <motion.div
      initial={{ backdropFilter: "blur(0px)" }}
      animate={{ backdropFilter: "blur(24px)" }}
      exit={{ backdropFilter: "blur(0px)" }}
      transition={{ duration: 1 }}
      className="absolute -inset-5 z-10 flex items-center justify-center p-5"
    >
      <SpeakerSquare speaker={speaker} />
    </motion.div>
  );
}
