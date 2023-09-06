"use client";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import Button from "@/components/Button";
import Iconify from "@/components/Iconify";

export default function ButtonSection() {
  const code = `
<Button 
  href=""
  type="primary"
  scroll={false}
  className=""
>
  <Iconify icon="solar:info-circle-bold-duotone" />
  Button
</Button>
  `;

  return (
    <section className="flex h-screen">
      <LiveProvider code={code} scope={{ Button, Iconify }}>
        <div className="flex w-1/2 flex-col justify-center gap-4 px-20">
          <h2 className="font-mono text-3xl">Buttons</h2>
          <div className="mockup-code border border-base-300 bg-[#011627] ">
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
    </section>
  );
}
