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
      <Head>
        <meta
          name="author"
          content="Imo, Imo Madjid, Muhammad Hannan Massimo Madjid"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link
          rel="icon"
          href="/logo-light.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/logo-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <ThemeProvider attribute="class" >
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Component {...pageProps} className=""/>
        </Suspense>
      </ThemeProvider>
    </>
  );
}
