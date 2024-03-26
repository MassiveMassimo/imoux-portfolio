import "./globals.css";
import Providers from "./providers";
import MultiplayerControls from "@/components/MultiplayerControls";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";

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
  variable: "--font-marlin",
});

export const metadata: Metadata = {
  title: "Imo UX",
  description:
    "Portfolio website of Imo Madjid; a designer who can engineer and an engineer who can design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative cursor-none overflow-x-hidden font-sans",
          `${marlin.variable}`,
        )}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <MultiplayerControls />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
