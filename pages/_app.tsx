import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Josefin_Slab, Reem_Kufi } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "../components/navbar/Navbar";

const inter = localFont({
  src: "./Inter.ttf",
  variable: "--font-inter",
  display: "optional",
});

const josefin_slab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
  display: "optional",
});

const reem_kufi = Reem_Kufi({
  subsets: ["latin"],
  variable: "--font-reem-kufi",
  display: "optional",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar />
        <main
          className={`${inter.variable} ${josefin_slab.variable} ${reem_kufi.variable} font-sans`}
        >
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
