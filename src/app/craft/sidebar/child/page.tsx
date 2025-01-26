import { Link } from "next-view-transitions";

import { buttonVariants } from "@/components/ui/button";

export default function ChildPage() {
  return (
    <section
      className="mt-24 flex h-[200svh] max-w-7xl grow flex-col items-center gap-8 rounded-3xl bg-slate-100 py-10 dark:bg-slate-800"
      style={{ viewTransitionName: "content" }}
    >
      <h1 className="text-center text-3xl text-balance">
        This is the child route
      </h1>
      <Link
        href="/craft/sidebar"
        className={buttonVariants({ variant: "outline" })}
      >
        Back to parent
      </Link>
    </section>
  );
}
