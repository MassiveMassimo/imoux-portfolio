import Head from "next/head";

import { useTheme } from "next-themes";
import Hero from "../components/Hero";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white py-16  dark:bg-slate-900">
      <Head>
        <title>Imo UX</title>
        <meta
          name="description"
          content="Welcome to my portfolio where I showcase my projects, interests, and overall taste in design!"
        />
      </Head>

      <main className="container mx-auto">
        <Hero />
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>

        <p className="my-6 mx-auto max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
          The quick brown fox jumps over the lazy dog.
        </p>

        <button className="btn-primary">Save changes</button>
      </main>
    </div>
  );
}
