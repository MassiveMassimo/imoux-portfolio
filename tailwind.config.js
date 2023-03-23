/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-josefin-slab)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--font-reem-kufi)', defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient': "url('/gradient.webp')",
        'pixelperfect': "url('/pixelperfect.webp')",
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.25, 0.75, 0.25, 1.4)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  darkMode: 'class',
}
