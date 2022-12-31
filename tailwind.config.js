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
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient': "url('/gradient.png')",
        'pixelperfect': "url('/pixelperfect.png')",
      },
    },
  },
  plugins: [
    // require("flowbite/plugin")
  ],
  darkMode: 'class',
}
