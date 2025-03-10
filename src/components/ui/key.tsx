"use client";

import { useEffect, useState } from "react";

import { useAnimate } from "motion/react";

export default function Key({ label }: Readonly<{ label: string }>) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === label.toLowerCase()) {
        // Animate key press down
        await animate(scope.current, { height: "28px" }, { duration: 0.05 });
        // Animate key press up
        await animate(
          scope.current,
          { height: "32px" },
          { duration: 0.05, delay: 0.05 },
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [label, animate, scope]);

  return (
    <div ref={scope} className="rounded-md bg-slate-300 pb-1 dark:bg-slate-800">
      <div className="flex size-7 items-center justify-center rounded-md border border-slate-300 bg-slate-100 inset-shadow-2xs inset-shadow-white dark:border-slate-800 dark:bg-slate-700 dark:inset-shadow-slate-500">
        {label}
      </div>
    </div>
  );
}
