import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/brandon-grotesque-regular"
        />
        <meta
          name="author"
          content="Imo, Imo Madjid, Muhammad Hannan Massimo Madjid"
        />
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
      <body className="bg-slate-100 bg-gradient bg-contain bg-no-repeat dark:bg-slate-900 selection:bg-cyan-300/30 selection:underline selection:decoration-cyan-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
