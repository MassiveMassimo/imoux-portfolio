import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

export default function Navbar() {
  let previousScroll = 0;

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (currentScroll > previousScroll) {
        // User is scrolling down, hide the navbar
        document.querySelector("nav")!.classList.add("-translate-y-full");
      } else {
        // User is scrolling up, show the navbar
        document.querySelector("nav")!.classList.remove("-translate-y-full");
      }
      previousScroll = currentScroll;
    });
  }

  return (
    <nav
      id="navbar"
      className="transition-all fixed top-0 left-0 z-20 h-16 w-full border-b border-slate-900/10 bg-white/30 backdrop-blur-2xl dark:border-slate-50/5 dark:bg-slate-900/75"
    >
      <div className="mx-auto flex h-full flex-wrap items-center justify-between px-8 lg:px-16">
        <Link href="/" className="group flex h-full w-fit items-center py-4 cursor-pointer">
          <svg
            className="h-full overflow-visible fill-none stroke-slate-900 dark:stroke-white"
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
        <div className="flex h-full items-center space-x-2 py-2">
          <button
            className="h-full items-center rounded-lg hover:shadow-xl hover:ring-slate-300 dark:hover:bg-slate-700"
            onClick={() => {
              window.open("https://github.com/MassiveMassimo/imoux-portfolio", "_blank");
            }}
          >
            <svg
              className="h-full fill-slate-900 p-3 dark:fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.9989 2.01416C6.4761 2.01416 1.9989 6.49116 1.9989 12.0142C1.9989 16.8302 5.5503 20.9542 10.0002 21.8002L9.9989 18.6392C9.5428 18.8572 9.0379 19.0142 8.4989 19.0142C8.029 19.0142 7.5958 18.9322 7.1864 18.7642C6.913 18.6522 6.4739 18.1872 6.3114 17.8582C5.9623 17.1512 5.98 16.3892 5.3739 16.3892C5.0885 16.3892 4.6528 16.2712 4.6551 15.9832C4.657 15.7462 5.0176 15.6602 5.3114 15.6392C6.2531 15.5712 7.0024 16.4742 7.0614 16.6082C7.1114 16.7212 7.2263 16.9192 7.3114 17.0142C7.5847 17.3212 8.0055 17.5142 8.4989 17.5142C9.0876 17.5142 9.5971 17.2382 9.8427 16.8262C9.9426 16.6592 10.104 16.2272 10.2489 16.0142C7.7645 15.8262 5.9989 14.5062 5.9989 11.5142C5.9989 10.6362 6.2944 9.76815 6.7801 9.10815C6.6633 8.43115 6.5632 7.29616 6.9989 6.01416C8.1788 6.01416 9.2191 6.64016 9.9051 7.13916C10.2503 7.07116 10.6312 7.01416 10.9989 7.01416H12.9989C13.3389 7.01416 13.7405 7.06816 14.0614 7.13916C14.7815 6.60616 15.7763 6.01416 16.9989 6.01416C17.4977 7.48116 17.2511 8.83815 17.1551 9.35815C17.6207 10.0702 18.0199 11.0562 17.9904 11.9022C17.8998 14.4932 16.2185 15.8932 13.7911 16.0162C13.9532 16.3522 13.9989 16.6292 13.9989 17.0142L14.0018 21.7881C18.5168 20.8681 21.9989 16.8292 21.9989 12.0142C21.9989 6.49116 17.5217 2.01416 11.9989 2.01416Z" />
            </svg>
          </button>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
