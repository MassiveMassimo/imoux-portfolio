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
        "(prefers-color-scheme: dark)"
      ).matches;

      // Return "dark" if the browser prefers dark mode, otherwise return "light"
      return prefersDark ? "dark" : "light";
    }

    // Default to "light" if unable to determine the theme (e.g., SSR or non-browser environment)
    return "light";
  }

  return (
    <div className="tabs tabs-boxed bg-base-50 rounded-full outline outline-1 outline-offset-0 outline-slate-300 dark:outline-none highlight">
      <a
        onClick={() => setTheme("light")}
        className={`tab tab-lg h-10 !px-0 !rounded-full ${
          theme === "light" && "tab-active"
        }`}
      >
        <svg
          className={`h-full p-2.5 ${
            theme === "light" ? "fill-white" : "fill-sky-500"
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M12 2C11.448 2 11 2.448 11 3V5C11 5.552 11.448 6 12 6C12.552 6 13 5.552 13 5V3C13 2.448 12.552 2 12 2ZM5.625 4.625C5.369 4.625 5.133 4.74201 4.938 4.93801C4.547 5.32801 4.547 5.954 4.938 6.344L6.281 7.719C6.672 8.109 7.32899 8.11 7.71899 7.719C8.10899 7.328 8.10999 6.67101 7.71899 6.28101L6.34399 4.93801C6.14799 4.74201 5.881 4.625 5.625 4.625ZM18.344 4.65601C18.088 4.65601 17.852 4.74201 17.656 4.93801L16.281 6.28101C15.891 6.67201 15.891 7.328 16.281 7.719C16.672 8.109 17.328 8.109 17.719 7.719L19.062 6.344C19.453 5.953 19.453 5.32801 19.062 4.93801C18.867 4.74201 18.6 4.65601 18.344 4.65601ZM3 11C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H5C5.552 13 6 12.552 6 12C6 11.448 5.552 11 5 11H3ZM19 11C18.448 11 18 11.448 18 12C18 12.552 18.448 13 19 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11H19ZM7 16C6.744 15.999 6.477 16.086 6.281 16.281L4.906 17.656C4.515 18.046 4.517 18.671 4.906 19.062C5.296 19.454 5.95199 19.452 6.34399 19.062L7.71899 17.719C8.10999 17.329 8.10799 16.673 7.71899 16.281C7.52399 16.086 7.256 16.001 7 16ZM17 16C16.744 16 16.476 16.086 16.281 16.281C15.891 16.672 15.89 17.329 16.281 17.719L17.688 19.094C18.078 19.484 18.704 19.485 19.094 19.094C19.484 18.703 19.485 18.046 19.094 17.656L17.719 16.281C17.523 16.086 17.256 16 17 16ZM12 18C11.448 18 11 18.448 11 19V21C11 21.552 11.448 22 12 22C12.552 22 13 21.552 13 21V19C13 18.448 12.552 18 12 18Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
          />
        </svg>
      </a>
      <a
        onClick={() => setTheme("system")}
        className={`tab tab-lg h-10 !px-0 !rounded-full ${
          theme === "system" && "tab-active"
        }`}
      >
        <svg
          className={`h-full p-2.5 ${
            theme === "system" ? "fill-white" : "fill-base-content"
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3.9978C3.343 3.9978 2 5.3409 2 6.9978V13.9978C2 15.6547 3.343 16.9978 5 16.9978C6.98584 16.9978 17.9858 16.9978 19 16.9978C20.657 16.9978 22 15.6547 22 13.9978V6.9978C22 5.3409 20.657 3.9978 19 3.9978H5ZM5 5.9978H19C19.552 5.9978 20 6.4455 20 6.9978V13.9978C20 14.5501 19.552 14.9978 19 14.9978H5C4.448 14.9978 4 14.5501 4 13.9978V6.9978C4 6.4455 4.448 5.9978 5 5.9978Z" />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 19V17H11V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13Z"
          />
        </svg>
      </a>
      <a
        onClick={() => setTheme("dark")}
        className={`tab tab-lg h-10 !px-0 !rounded-full ${
          theme === "dark" && "tab-active"
        }`}
      >
        <svg
          className={`h-full p-2.5 ${
            theme === "dark" ? "fill-white" : "fill-indigo-400"
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M15.0325 2.48972C14.1595 2.21472 13.4135 3.16871 13.8765 3.95871C14.6075 5.20471 15.0015 6.61072 15.0015 8.02072C15.0015 12.4387 11.4195 16.0207 7.00146 16.0207C6.16946 16.0207 5.32845 15.8867 4.56345 15.6457C3.69145 15.3707 2.91345 16.3247 3.37645 17.1147C5.15345 20.1467 8.40246 22.0207 12.0015 22.0207C17.5245 22.0207 22.0015 17.5437 22.0015 12.0207C22.0015 7.61972 19.1605 3.78772 15.0325 2.48972Z"
          />
          <path d="M9.00374 4C8.50433 4 8.00491 4.33266 8.00491 4.99896C8.00491 5.4465 7.45355 5.99793 7.00607 5.99793C5.67463 5.99793 5.67463 7.99586 7.00607 7.99586C7.45355 7.99586 8.00491 8.54728 8.00491 8.99482C8.00491 10.3264 10.0026 10.3264 10.0026 8.99482C10.0026 8.54728 10.5539 7.99586 11.0014 7.99586C12.3329 7.99586 12.3329 5.99793 11.0014 5.99793C10.5539 5.99793 10.0026 5.4465 10.0026 4.99896C10.0026 4.33266 9.50316 4 9.00374 4ZM5.0084 9.99378C4.67579 9.99378 4.35316 10.2056 4.35316 10.6491C4.35316 10.9478 3.96463 11.3364 3.66597 11.3364C2.77801 11.3364 2.77801 12.647 3.66597 12.647C3.96463 12.647 4.35316 13.0356 4.35316 13.3343C4.35316 14.2224 5.66364 14.2214 5.66364 13.3343C5.66364 13.0356 6.05218 12.647 6.35083 12.647C7.2388 12.647 7.2388 11.3364 6.35083 11.3364C6.05218 11.3364 5.66364 10.9478 5.66364 10.6491C5.66364 10.2056 5.34101 9.99378 5.0084 9.99378Z" />
        </svg>
      </a>
    </div>
  );
}
