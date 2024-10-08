import Link from "next/link";

import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="group fixed inset-x-0 top-0 z-20 mx-20 flex h-16 origin-top items-center justify-between rounded-b-2xl border border-t-0 border-slate-300 bg-white/30 px-10 py-4 backdrop-blur-xl transition-[height] duration-300 hover:h-20 dark:border-slate-700 dark:bg-slate-900/50">
      <Link href="/">
        <Logo className="h-7" />
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Link
          href="https://mail.google.com/mail/u/0/?source=mailto&to=mhmmadjid@gmail.com&fs=1&tf=cm"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "default" })}
        >
          Get in touch
        </Link>
      </div>
    </nav>
  );
}
