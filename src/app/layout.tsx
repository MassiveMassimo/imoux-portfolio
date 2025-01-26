import "./globals.css";

import type { Metadata } from "next";

import localFont from "next/font/local";

import Footer from "@/components/Footer";
import Multiplayer from "@/components/Multiplayer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { isMobileDevice } from "./actions";
import Providers from "./providers";

const marlin = localFont({
  src: [
    {
      path: "./fonts/Marlin Soft SQ Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Marlin Soft SQ ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ BoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ BlackItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Marlin Soft SQ ExtraBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

const fraunces = localFont({
  src: [
    {
      path: "./fonts/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Fraunces-Italic-VariableFont_SOFT,WONK,opsz,wght.ttf",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Imo UX",
  description:
    "Portfolio website of Imo Madjid; a designer who can engineer and an engineer who can design.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = await isMobileDevice();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative cursor-none overflow-x-hidden bg-white selection:bg-indigo-100 selection:underline selection:decoration-indigo-500 dark:bg-slate-900 dark:selection:bg-indigo-800 dark:selection:decoration-indigo-400">
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            {!isMobile && <Multiplayer />}
            <Footer />
            <>
              <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-24 bg-linear-to-t from-slate-200 via-60% dark:from-slate-950" />
              <div className="gradient-mask-t-90 pointer-events-none fixed inset-x-0 bottom-0 z-20 h-24 backdrop-blur-[1px]" />
              <div className="gradient-mask-t-70 pointer-events-none fixed inset-x-0 bottom-0 z-20 h-24 backdrop-blur-[1px]" />
              <div className="gradient-mask-t-50 pointer-events-none fixed inset-x-0 bottom-0 z-20 h-24 backdrop-blur-[1px]" />
              <div className="gradient-mask-t-30 pointer-events-none fixed inset-x-0 bottom-0 z-20 h-24 backdrop-blur-xs" />
              <div className="gradient-mask-t-10 pointer-events-none fixed inset-x-0 bottom-0 z-20 h-24 backdrop-blur-md" />
            </>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
