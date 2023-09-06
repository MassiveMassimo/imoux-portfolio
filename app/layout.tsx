import "./globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Martian_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const satoshi_italic = localFont({
  src: "./fonts/Satoshi-VariableItalic.ttf",
  variable: "--font-satoshi-italic",
});

const martian_mono = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-martian-mono",
});

export const metadata: Metadata = {
  title: "Imo UX",
  description:
    "Welcome to my product design portfolio where I showcase my work, projects, and overall taste in design.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/icon-light.ico",
        sizes: "any",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/icon-dark.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/icon-apple-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/icon-apple-dark.png",
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={`${satoshi.variable} ${satoshi_italic.variable} ${satoshi_italic.variable} ${martian_mono.variable} bg-base-100 font-sans text-slate-900 transition-colors dark:text-slate-100`}
      >
        <header>
          <Navbar />
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
