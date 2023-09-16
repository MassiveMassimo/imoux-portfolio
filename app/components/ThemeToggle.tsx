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
    <div className="highlight relative flex rounded-full bg-base-50 p-1 outline outline-1 outline-offset-0 outline-slate-300 dark:outline-none">
      <div
        className={`absolute left-1/2 top-1/2 aspect-square h-10 -translate-y-1/2 rounded-full bg-indigo-500 duration-1000 ease-elastic ${
          theme === "light"
            ? "-translate-x-[150%]"
            : theme === "dark"
            ? "translate-x-1/2"
            : "-translate-x-1/2"
        }`}
      />
      <Iconify
        icon="solar:sun-bold-duotone"
        className={`z-10 h-10 w-10 cursor-pointer rounded-full p-2.5 ${
          theme === "light"
            ? "text-white"
            : "text-sky-500 hover:bg-base-200 dark:hover:bg-base-100"
        }`}
        onClick={() => setTheme("light")}
      />
      <Iconify
        icon="solar:laptop-minimalistic-bold-duotone"
        className={`z-10 h-10 w-10 cursor-pointer rounded-full p-2.5 ${
          theme === "system"
            ? "text-white"
            : "text-base-content-100 hover:bg-base-200 dark:hover:bg-base-100"
        }`}
        onClick={() => setTheme("system")}
      />
      <Iconify
        icon="solar:moon-stars-bold-duotone"
        className={`z-10 h-10 w-10 cursor-pointer rounded-full p-2.5 ${
          theme === "dark"
            ? "text-white"
            : "text-indigo-400 hover:bg-base-200 dark:hover:bg-base-100"
        }`}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
}
