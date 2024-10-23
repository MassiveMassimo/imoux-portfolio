import Link from "next/link";

import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 pb-28 pt-10 ~px-5/20 dark:border-slate-800">
      <div className="flex flex-col justify-between gap-10 sm:flex-row">
        <div className="flex flex-col gap-1 font-300">
          <p className="text-slate-500 dark:text-slate-400">
            Designed and developed by Imo.
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Frontend powered by{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 text-base !font-400",
              )}
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 text-base !font-400",
              )}
            >
              Tailwind CSS
            </Link>
            , and{" "}
            <Link
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 text-base !font-400",
              )}
            >
              Vercel
            </Link>
            .
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Backened supercharged by{" "}
            <Link
              href="https://supabase.com/realtime"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-6 overflow-visible p-0 text-base !font-400",
              )}
            >
              Supabase Realtime
            </Link>
            .
          </p>
        </div>
        <div className="h-10 self-start">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
