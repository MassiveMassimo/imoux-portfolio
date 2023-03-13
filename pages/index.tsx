import Head from "next/head";

import Hero from "../components/landing/Hero";
import Logos from "../components/landing/Logos";
import Experience from "../components/landing/experience/Experience";
import PixelPerfect from "../components/landing/PixelPerfect";
import Editor from "../components/landing/Editor";
import Projects from "../components/landing/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imo UX</title>
        <meta
          name="description"
          content="Welcome to my portfolio where I showcase my projects, interests, and overall taste in design!"
        />
      </Head>

      <div className="mx-auto space-y-40 pb-40 overflow-hidden">
        <Hero />
        <Logos />
        <Experience />
        <PixelPerfect />
        {/* <Editor /> */}
        <Projects />
      </div>
    </>
  );
}
