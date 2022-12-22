import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Suspense } from "react";
import { ThemeProvider } from 'next-themes'

import Loader from "../components/Loader";
import Navbar from "../components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <ThemeProvider attribute="class" >
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Component {...pageProps} />
        </Suspense>
      </ThemeProvider>
    </>
  );
}
