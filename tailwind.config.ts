import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "translate-x": "translate-x 4s linear infinite",
        "pulse-slow": "pulse 5s linear infinite",
      },
      backgroundImage: {
        striped:
          "repeating-linear-gradient(45deg, #ffffff30, #ffffff30 12px, #00000000 12px, #00000000 24px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inner-sm": "inset 0 1px 0 0 rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: ["var(--font-marlin)"],
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "translate-x": {
          "0%": { transform: "translateX(-240px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
    require("tailwind-gradient-mask-image"),
  ],
  safelist: [
    {
      pattern:
        /(border|bg|fill|via)-(red|green|blue|yellow|indigo|purple|pink|amber|orange|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-(500|600)/,
    },
  ],
} satisfies Config;

export default config;
