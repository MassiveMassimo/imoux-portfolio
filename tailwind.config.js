/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-josefin-slab)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--font-reem-kufi)', defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient': "url('/gradient.png')",
        'pixelperfect': "url('/pixelperfect.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  darkMode: 'class',
}
