import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const navbar = React.useRef<HTMLDivElement>(null);

  // Keep track of the last scroll position
  let lastScrollPos = 0;

  useEffect(() => {
    // Listen for scroll events on the page
    window.addEventListener("scroll", () => {
      // Get the current scroll position
      const scrollPos = window.scrollY;

      // If the user is scrolling up, add the "hidden" class to the navbar
      if (navbar.current && scrollPos < lastScrollPos) {
        navbar.current.classList.add("hidden");
      } else if (navbar.current) {
        navbar.current.classList.remove("hidden");
      }

      // Update the last scroll position
      lastScrollPos = scrollPos;
    });
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 z-20 h-16 w-full bg-white/75 backdrop-blur dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:z-50 lg:border-b lg:border-slate-900/10"
    >
      <div className="container mx-auto flex h-full flex-wrap items-center justify-between">
        <Link href="/" className="flex h-full w-fit py-4 items-center">
          <svg
            className="fill-none stroke-black dark:stroke-white h-full"
            viewBox="0 0 320 144"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="8"
              width="64"
              height="128"
              rx="32"
              strokeWidth="16"
            />
            <rect
              x="72"
              y="8"
              width="112"
              height="128"
              rx="32"
              strokeWidth="16"
            />
            <circle cx="248" cy="72" r="64" stroke-width="16" />
          </svg>
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
