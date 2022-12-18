import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 z-20 h-16 w-full bg-white/75 backdrop-blur dark:border-slate-50/[0.0625] dark:bg-slate-900/75 lg:z-50 lg:border-b lg:border-slate-900/10"
    >
      <div className="mx-auto flex h-full flex-wrap items-center justify-between px-8">
        <Link href="/" className="group flex h-full w-fit items-center py-4">
          <svg
            className="h-full overflow-visible fill-none stroke-black dark:stroke-white"
            viewBox="0 0 320 144"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="8"
              width="64"
              height="128"
              rx="32"
              strokeWidth="16"
              className="group-hover:-translate-y-3 group-hover:duration-200 group-hover:ease-in"
            />
            <rect
              x="72"
              y="8"
              width="112"
              height="128"
              rx="32"
              strokeWidth="16"
              className="group-hover:-translate-y-3 group-hover:delay-100 group-hover:duration-200 group-hover:ease-in"
            />
            <circle
              cx="248"
              cy="72"
              r="64"
              strokeWidth="16"
              className="group-hover:-translate-y-3 group-hover:delay-200 group-hover:duration-200 group-hover:ease-in"
            />
          </svg>
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
