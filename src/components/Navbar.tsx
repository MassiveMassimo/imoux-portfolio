"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <>
        <div className="fixed inset-x-0 top-0 z-20 h-24 backdrop-blur-[1px] gradient-mask-b-90" />
        <div className="fixed inset-x-0 top-0 z-20 h-24 backdrop-blur-sm gradient-mask-b-70" />
        <div className="fixed inset-x-0 top-0 z-20 h-24 backdrop-blur-sm gradient-mask-b-50" />
        <div className="fixed inset-x-0 top-0 z-20 h-24 backdrop-blur-md gradient-mask-b-30" />
        <div className="fixed inset-x-0 top-0 z-20 h-24 backdrop-blur-lg gradient-mask-b-10" />
      </>
      <motion.nav
        className="group fixed inset-x-0 top-0 z-20 flex h-16 origin-top items-center justify-between bg-gradient-to-b from-white ~px-5/20 dark:from-slate-900"
        initial={{ filter: "blur(20px)", scale: 1.1, y: -80, opacity: 0 }}
        animate={{ filter: "blur(0px)", scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.5, 0, 0.2, 1] }}
      >
        <Link href="/">
          <Logo className="~h-5/7" />
        </Link>
        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <Link
            href="https://mail.google.com/mail/u/0/?source=mailto&to=mhmmadjid@gmail.com&fs=1&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "link" }),
              "group/button gap-1",
            )}
          >
            Get in touch
            <ArrowUpRight className="size-4 w-0 stroke-[3px] blur transition-all duration-300 group-hover/button:w-4 group-hover/button:blur-none" />
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
