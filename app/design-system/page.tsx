import type { Metadata } from "next";
import { Icon } from "@iconify-icon/react";
import verifiedCheckBoldDuotone from "@iconify/icons-solar/verified-check-bold-duotone";

import Button from "@/components/Button";
import Iconify from "@/components/Iconify";

export const metadata: Metadata = {
  title: "Design System - Imo UX",
  description:
    "A showcase of the components crafted and used on this portfolio site.",
};

export default function DesignSystemPage() {
  return (
    <main className="">
      <section className="flex h-screen flex-col items-center justify-center space-y-2">
        <p className="font-mono text-[var(--base-content-500)]">
          Oh hey, you found my
        </p>
        <h1 className="text-6xl font-semibold">Design System</h1>
      </section>
      <section className="p-20">
        <h2 className="text-4xl font-semibold">Buttons</h2>
        <Button href="" type="primary" scroll={false}>
          Primary
        </Button>
        <Button href="" type="secondary" scroll={false} className="text-xl/8">
          Secondary
        </Button>
        <Button href="" type="secondary" scroll={false}>
          Secondary
        </Button>
        <Button href="" type="secondary" scroll={false} className="text-sm">
          Secondary
        </Button>
        <Button href="" type="primary" scroll={false}>
          <Iconify icon="solar:info-circle-bold-duotone" />
          Primary
        </Button>
        <Button href="" type="secondary" scroll={false}>
          <Iconify icon="solar:info-circle-bold-duotone" />
          Secondary
        </Button>
      </section>
    </main>
  );
}
