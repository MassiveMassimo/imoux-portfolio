import type { Metadata } from "next";

import ButtonSection from "./components/ButtonSection";
import MeshGradient from "@/components/MeshGradient";

export const metadata: Metadata = {
  title: "Design System - Imo UX",
  description:
    "A showcase of the components crafted and used on this portfolio site.",
};

export default function DesignSystemPage() {
  return (
    <>
      <main className="">
        <section className="flex h-screen flex-col items-center justify-center gap-4 px-5 text-center md:px-10 lg:px-20">
          {/* <MeshGradient
            color1="#3b82f6"
            color2="#a5f3fc"
            color3="#a78bfa"
            color4="#bd7de8"
          /> */}
          <p className="p3 font-mono text-base-content-500">
            Oh hey, you found my
          </p>
          <h1 className="font-semibold text-base-content-100">
            Design System
          </h1>
          <p className="p3 max-w-2xl font-mono text-base-content-500">
            This is the space where I experiment and test the UI components I
            develop. Feel free to play around and explore!
          </p>
        </section>
        <ButtonSection />
      </main>
    </>
  );
}
