"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    let htmlElement = document.querySelector("html");
    if (htmlElement) {
      const currentTheme = getCurrentTheme();
      htmlElement.setAttribute(
        "data-theme",
        theme === "system" ? currentTheme : theme
      );

      if (currentTheme === "dark") {
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
        "(prefers-color-scheme: dark)"
      ).matches;

      // Return "dark" if the browser prefers dark mode, otherwise return "light"
      return prefersDark ? "dark" : "light";
    }

    // Default to "light" if unable to determine the theme (e.g., SSR or non-browser environment)
    return "light";
  }

  return (
    <div className="tabs tabs-boxed bg-base-50 rounded-full">
      <a
        onClick={() => setTheme("light")}
        className={`tab !rounded-full ${theme === "light" && "tab-active"}`}
      >
        Light
      </a>
      <a
        onClick={() => setTheme("system")}
        className={`tab !rounded-full ${theme === "system" && "tab-active"}`}
      >
        System
      </a>
      <a
        onClick={() => setTheme("dark")}
        className={`tab !rounded-full ${theme === "dark" && "tab-active"}`}
      >
        Dark
      </a>
    </div>
  );
}
