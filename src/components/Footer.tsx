"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import FooterLinks from "./FooterLinks";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/button";
import ContainerGlow from "./ui/container-glow";

export default function Footer() {
  const growTo = useRef<gsap.QuickToFunc | null>(null);

  const { contextSafe } = useGSAP(() => {
    growTo.current = gsap.quickTo(".gsap-growing", "width", {
      duration: 0.8,
      ease: "power3",
    });
  }, {});

  const moveCursor = contextSafe((e: MouseEvent) => {
    if (!growTo.current) return;

    // Get viewport dimensions
    const windowWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Add 10% padding on each side
    const padding = windowWidth * 0.1;
    const effectiveWidth = windowWidth - padding * 2;

    // Convert svh units to pixels
    const minWidthPx = (viewportHeight * 15) / 100;
    const maxWidthPx = windowWidth * 0.5 - (viewportHeight * 30) / 100;

    // Calculate mouse percentage with padding
    const mousePercentage = Math.max(
      0,
      Math.min(1, (e.clientX - padding) / effectiveWidth),
    );

    // Interpolate between min and max width in pixels
    const widthPx = minWidthPx + mousePercentage * (maxWidthPx - minWidthPx);

    growTo.current(widthPx);
  });

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);

    const handleResize = () => {
      growTo.current?.((window.innerHeight * 15) / 100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", handleResize);
    };
  }, [moveCursor]);

  return (
    <footer className="group mb-28 flex h-[30svh] *:relative *:overflow-clip *:bg-gradient-to-b *:from-slate-100 *:*:opacity-0 *:*:transition-opacity *:*:duration-500 *:dark:from-slate-950">
      <div className="gsap-growing min-w-[15svh] rounded-[7.5svh] @container *:group-hover:opacity-100">
        <ContainerGlow className="fill-slate-600 dark:fill-white/50" />
        <ThemeToggle />
      </div>
      <div className="flex w-1/2 shrink-0 items-center justify-center rounded-[7.5svh] *:group-hover:opacity-100">
        <ContainerGlow className="fill-slate-600 dark:fill-white/50" />
        <div className="flex flex-col gap-1 font-300">
          <p className="text-slate-500 dark:text-slate-400">
            Frontend powered by{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 font-serif text-base italic",
              )}
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 font-serif text-base italic",
              )}
            >
              Tailwind CSS
            </Link>
            , and{" "}
            <Link
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 font-serif text-base italic",
              )}
            >
              Vercel
            </Link>
            .
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Backened supercharged by{" "}
            <Link
              href="https://supabase.com/realtime"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 font-serif text-base italic",
              )}
            >
              Supabase Realtime
            </Link>
            .
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Content managed by{" "}
            <Link
              href="https://www.sanity.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 font-serif text-base italic",
              )}
            >
              Sanity
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex min-w-[30svh] grow flex-col items-stretch justify-stretch rounded-full p-1 *:group-hover:opacity-100">
        <ContainerGlow className="fill-slate-600 dark:fill-white/50" />
        <FooterLinks />
      </div>
    </footer>
  );
}
