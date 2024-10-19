"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col items-center ~px-5/96">
      <motion.p
        className="text-balance text-slate-500 dark:text-slate-400"
        initial={{ filter: "blur(20px)", scale: 1.1, y: 80, opacity: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.5, 0, 0.2, 1], delay: 0.6 }}
      >
        I started as a product designer, but my{" "}
        <i className="font-serif text-indigo-500 dark:text-indigo-400">
          passion for building
        </i>{" "}
        the experiences I envisioned led me to become a design engineer. While I
        still{" "}
        <i className="font-serif text-indigo-500 dark:text-indigo-400">
          love creating user-centered designs
        </i>
        , bringing them to life as working solutions has become just as
        fulfilling.{" "}
        <span className="font-500 text-slate-900 dark:text-slate-200">
          It’s about turning ideas into real, impactful products.
        </span>
      </motion.p>
    </section>
  );
}
