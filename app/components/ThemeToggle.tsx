"use client";

import { useEffect, useState } from "react";

import Iconify from "./Iconify";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    let htmlElement = document.querySelector("html");
    if (htmlElement) {
      const currentTheme = getCurrentTheme();
      htmlElement.setAttribute(
        "data-theme",
        theme === "system" ? currentTheme : theme,
      );

      if (htmlElement.getAttribute("data-theme") === "dark") {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [theme]);

  function getCurrentTheme() {
    if (typeof window !== "undefined" && window.matchMedia) {
      // Check if the browser prefers dark mode
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      // Return "dark" if the browser prefers dark mode, otherwise return "light"
      return prefersDark ? "dark" : "light";
    }

    // Default to "light" if unable to determine the theme (e.g., SSR or non-browser environment)
    return "light";
  }

  return (
    <div className="relative flex rounded-full bg-gradient-to-b from-base-200 to-base-100 p-1 dark:from-base-50/60">
      <div
        className={`absolute left-1/2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 p-1 shadow-md duration-1000 ease-elastic ${
          theme === "light"
            ? "-translate-x-[150%]"
            : theme === "dark"
            ? "translate-x-1/2"
            : "-translate-x-1/2"
        }`}
      >
        <div className="h-full w-full rounded-full bg-gradient-to-b from-indigo-600 to-indigo-500" />
      </div>
      <Iconify
        icon="solar:sun-bold-duotone"
        className={`z-10 h-10 w-10 cursor-pointer overflow-visible rounded-full p-2.5 ${
          theme === "light" ? "text-white" : "text-sky-500 hover:bg-base-300"
        }`}
        onClick={() => setTheme("light")}
      />
      <Iconify
        icon="solar:display-bold-duotone"
        className={`z-10 h-10 w-10 cursor-pointer overflow-visible rounded-full p-2.5 ${
          theme === "system"
            ? "text-white"
            : "text-base-content-300 hover:bg-base-300"
        }`}
        onClick={() => setTheme("system")}
      />
      <Iconify
        icon="solar:moon-stars-bold-duotone"
        className={`z-10 h-10 w-10 cursor-pointer overflow-visible rounded-full p-2.5 ${
          theme === "dark" ? "text-white" : "text-indigo-500 hover:bg-base-300"
        }`}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
}
