"use client";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import Button from "@/components/Button";
import Iconify from "@/components/Iconify";

export default function ButtonSection() {
  const code = `
<Button 
  href=""
  type="primary" {/* try changing to "secondary" */}
  scroll={false}
  className="" {/* try changing to "text-2xl px-4 py-2" */}
>
  <Iconify icon="" />  {/* try changing to "solar:bolt-bold" */}
  Button
</Button>
  `;

  return (
    <section className="flex h-screen">
      <LiveProvider code={code} scope={{ Button, Iconify }}>
        <div className="flex w-1/2 flex-col justify-center gap-4 px-20">
          <h2 className="font-mono text-3xl">Buttons</h2>
          <div className="mockup-code border border-base-200 bg-[#011627] ">
            <LiveEditor className="mx-4 font-mono text-sm/6 font-light" />
          </div>
          <p className="font-mono text-[var(--base-content-500)]">
            You can edit props like the type and className to change the styling
            and size of the button.
          </p>
        </div>
        <div className="flex w-1/2 items-center px-10">
          <div className="magicpattern flex aspect-video w-full items-center justify-center rounded-2xl border border-base-200 bg-base-200/30">
            <LiveError />
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
      <div className="hidden text-xs text-sm text-base text-lg text-2xl text-3xl text-4xl text-5xl text-6xl text-7xl text-8xl text-9xl px-1 px-2 px-3 px-4 px-5 px-6 px-7 px-8 px-9 px-10 px-11 px-12 py-1 py-2 py-3 py-4 py-5 py-6 py-7 py-8 py-9 py-10 py-11 py-12" />
    </section>
  );
}
