import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";

import Navbar from "../components/navbar/Navbar";
import Trailer from "../components/Trailer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
