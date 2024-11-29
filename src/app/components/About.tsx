"use client";

import { useAtomValue } from "jotai/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import Key from "@/components/ui/key";
import { cn } from "@/lib/utils";
import { joinedAtom } from "../atoms";

export default function About() {
  const joined = useAtomValue(joinedAtom);

  return (
    <section className="flex flex-col gap-20 px-5 pb-40">
      <motion.p
        className="text-balance font-300 text-slate-600 dark:text-slate-300"
        initial={{ filter: "blur(20px)", scale: 1.1, y: 80, opacity: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.5, 0, 0.2, 1], delay: 0.6 }}
      >
        I started as a product designer, but my{" "}
        <i className="font-serif font-400 text-indigo-500 dark:text-indigo-400">
          passion for building
        </i>{" "}
        the experiences I envisioned led me to become a design engineer. While I
        still{" "}
        <i className="font-serif font-400 text-indigo-500 dark:text-indigo-400">
          love creating user-centered designs
        </i>
        , bringing them to life as working solutions has become just as
        fulfilling.{" "}
        <span className="font-500 text-slate-900 dark:text-slate-100">
          It’s about turning ideas into real, impactful products.
        </span>
      </motion.p>
      <motion.div
        className="flex items-center gap-4"
        initial={{ filter: "blur(20px)", scale: 1.1, y: 80, opacity: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.5, 0, 0.2, 1], delay: 0.8 }}
      >
        <Link
          href="https://www.linkedin.com/in/imomadjid/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "secondary" }), "")}
        >
          Let&apos;s connect!
        </Link>
        <AnimatePresence>
          {joined && (
            <motion.div
              className="hidden items-end gap-2 self-stretch py-1 sm:flex"
              initial={{ filter: "blur(20px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              exit={{ filter: "blur(8px)", opacity: 0 }}
            >
              <Key label="/" />
              <p className="self-center text-slate-400 dark:text-slate-500">
                to chat
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
