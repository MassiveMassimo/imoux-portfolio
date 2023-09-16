import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        "base-50": "rgb(var(--base-50) / <alpha-value>)",
        "base-100": "rgb(var(--base-100) / <alpha-value>)",
        "base-200": "rgb(var(--base-200) / <alpha-value>)",
        "base-300": "rgb(var(--base-300) / <alpha-value>)",
        "base-400": "rgb(var(--base-400) / <alpha-value>)",
        "base-content-100": "rgb(var(--base-content-100) / <alpha-value>)",
        "base-content-200": "rgb(var(--base-content-200) / <alpha-value>)",
        "base-content-300": "rgb(var(--base-content-300) / <alpha-value>)",
        "base-content-400": "rgb(var(--base-content-400) / <alpha-value>)",
        "base-content-500": "rgb(var(--base-content-500) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)"],
        italic: ["var(--font-satoshi-italic)"],
        mono: ["var(--font-martian-mono)"],
      },
      transitionTimingFunction: {
        elastic:
          "linear(0 0.01%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"), require("@headlessui/tailwindcss")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "--base-50": "248 250 252", // slate-50
          "--base-100": "241 245 249", // slate-100
          "--base-200": "226 232 240", // slate-200
          "--base-300": "203 213 225", // slate-300
          "--base-400": "148 163 184", // slate-400
          "--base-content-100": "2 6 23", // slate-950
          "--base-content-200": "15 23 42", // slate-900
          "--base-content-300": "30 41 59", // slate-800
          "--base-content-400": "51 65 85", // slate-700
          "--base-content-500": "71 85 105", // slate-600
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "--base-50": "2 6 23", // slate-950
          "--base-100": "15 23 42", // slate-900
          "--base-200": "30 41 59", // slate-800
          "--base-300": "51 65 85", // slate-700
          "--base-400": "71 85 105", // slate-600
          "--base-content-100": "255 255 255", // white
          "--base-content-200": "241 245 249", // slate-100
          "--base-content-300": "226 232 240", // slate-200
          "--base-content-400": "203 213 225", // slate-300
          "--base-content-500": "148 163 184", // slate-400
        },
      },
    ],
  },
};
export default config;
