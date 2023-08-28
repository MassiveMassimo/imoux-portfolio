/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)"],
        italic: ["var(--font-satoshi-italic)"],
        mono: ["var(--font-space-mono)"],
      },
      transitionTimingFunction: {
        elastic:
          "linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)",
      },
      opacity: {
        0: "0",
        25: "0.25",
        50: "0.5",
        75: "0.75",
        100: "1",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "--base-50": "#f8fafc",
          "base-100": "#f1f5f9",
          "base-200": "#e2e8f0",
          "base-300": "#cbd5e1",
          "--base-400": "#94a3b8",
          "--base-content-100": "#020617",
          "--base-content-200": "#0f172a",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "--base-50": "#020617",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "base-400": "#475569",
          "--base-content-100": "#ffffff",
          "--base-content-200": "#f1f5f9",
        },
      },
    ],
  },
};
