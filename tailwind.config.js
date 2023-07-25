/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

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
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          ".bg-base-50": {
            "background-color": "#f8fafc",
          },
          "base-100": "#f1f5f9",
          "base-200": "#e2e8f0",
          "base-300": "#cbd5e1",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          ".bg-base-50": {
            "background-color": "#020617",
          },
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
        },
      },
    ],
  },
};
