import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex w-full flex-col overflow-hidden px-8 lg:px-16"
    >
      <h2 className="mb-16 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
        Featured works
      </h2>
      <div className="flex flex-row">
        <Link
          href="/projects/silicon"
          className="group basis-1/3"
          // scroll={false}
          passHref
        >
          <div className="relative mb-2 aspect-[18/9] w-full origin-bottom overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
            <motion.figure
            layoutId="image-silicon"
            >
              <Image
                className="pointer-events-none object-cover"
                src="/silicon/siliconheader.webp"
                fill
                alt=""
              />
            </motion.figure>
          </div>
          <motion.h1
          layoutId="title-silicon"
          >
            Crafting a Scalable and Cohesive Design System for COMPFEST
          </motion.h1>
        </Link>
      </div>
    </section>
  );
}
