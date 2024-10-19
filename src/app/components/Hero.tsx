"use client";

import { motion } from "framer-motion";

import Spline from "@splinetool/react-spline/next";

export default function Hero() {
  return (
    <section className="flex h-[90svh] flex-col justify-center gap-2 self-center py-20 ~px-5/96">
      {/* <motion.div
        className="w-20 overflow-clip"
        initial={{ filter: "blur(20px)", scale: 1.1, y: 80, opacity: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.5, 0, 0.2, 1] }}
      >
        <Spline
          scene="https://prod.spline.design/MZv9alrhk2ry8L3k/scene.splinecode"
          className="!h-28 !w-[400px] -translate-x-[160px]"
        />
      </motion.div> */}
      <motion.p
        className="font-serif text-3xl font-300 italic text-indigo-500 dark:text-indigo-400"
        initial={{ filter: "blur(20px)", scale: 1.1, y: 80, opacity: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.5, 0, 0.2, 1] }}
      >
        Hello there!
      </motion.p>
      <motion.p
        className="text-balance text-3xl/relaxed"
        initial={{ filter: "blur(20px)", scale: 1.1, y: 80, opacity: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.5, 0, 0.2, 1], delay: 0.2 }}
      >
        I&apos;m Imo. I craft experiences that impact millions through
        thoughtful design and engineering.
      </motion.p>
    </section>
  );
}
