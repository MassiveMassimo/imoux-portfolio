import Head from "next/head";

import Hero from "../components/landing/Hero";
import Logos from "../components/landing/Logos";
import PixelPerfect from "../components/landing/PixelPerfect";
import Editor from "../components/landing/Editor";

export default function Home() {
  return (
    <div>
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
        <PixelPerfect />
        {/* <Editor /> */}
      </div>
    </div>
  );
}
