import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" as="style"></link>
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
        <script
          defer
          src="https://unpkg.com/tailwindcss-intersect@1.x.x/dist/observer.min.js"
        ></script>
      </Head>
      <body className="bg-white dark:bg-slate-900 bg-gradient bg-contain bg-no-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
