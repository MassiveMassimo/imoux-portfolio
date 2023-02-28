import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Imo UX | Case Studies</title>
        <meta
          name="description"
          content="Welcome to my portfolio where I showcase my projects, interests, and overall taste in design!"
        />
      </Head>
      <div className="w-full space-y-40 overflow-hidden py-40">
        <div className="relative w-full px-8 lg:px-16 flex flex-row space-x-5">
          <Link href="/#projects" className="group basis-1/3">
            <div className="relative mb-2 aspect-[18/9] w-full origin-bottom overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
              <motion.figure layoutId="image-silicon">
                <Image
                  className="pointer-events-none object-cover"
                  src="/silicon/siliconheader.webp"
                  fill
                  alt=""
                />
              </motion.figure>
            </div>
            <motion.h3 layoutId="title-silicon">
              Developing a Sustainable and Comprehensive Design System for
              COMPFEST
            </motion.h3>
          </Link>
          <Link href="#" className="group basis-1/3">
            <div className="relative mb-2 aspect-[18/9] w-full origin-bottom overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
              <motion.figure layoutId="image-1">
                <Image
                  className="pointer-events-none object-cover"
                  src="/silicon/siliconheader.webp"
                  fill
                  alt=""
                />
              </motion.figure>
            </div>
            <motion.h3 layoutId="title-1">
              Developing a Sustainable and Comprehensive Design System for
              COMPFEST
            </motion.h3>
          </Link>
          <Link href="#" className="group basis-1/3">
            <div className="relative mb-2 aspect-[18/9] w-full origin-bottom overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
              <motion.figure layoutId="image-2">
                <Image
                  className="pointer-events-none object-cover"
                  src="/silicon/siliconheader.webp"
                  fill
                  alt=""
                />
              </motion.figure>
            </div>
            <motion.h3 layoutId="title-2">
              Developing a Sustainable and Comprehensive Design System for
              COMPFEST
            </motion.h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
