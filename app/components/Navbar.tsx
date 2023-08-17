import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="navbar fixed border-b border-slate-900/10 bg-base-100 px-10 transition-colors dark:border-white/5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li className="hover:none lg:hidden">
              <ThemeToggle />
            </li>
          </ul>
        </div>
        <Link href="/" className="group btn btn-ghost">
          <svg
            className="h-6 overflow-visible fill-none stroke-slate-900 dark:stroke-white"
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
              className="duration-500 ease-elastic group-hover:-translate-y-3"
            />
            <rect
              x="72"
              y="8"
              width="112"
              height="128"
              rx="32"
              strokeWidth="16"
              className="delay-100 duration-500 ease-elastic group-hover:-translate-y-3"
            />
            <circle
              cx="248"
              cy="72"
              r="64"
              strokeWidth="16"
              className="delay-200 duration-500 ease-elastic group-hover:-translate-y-3"
            />
          </svg>
        </Link>

        <ul className="menu menu-horizontal hidden px-1 lg:flex">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details className="dropdown">
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <Button
          href="https://mail.google.com/mail/u/0/?source=mailto&to=mhmmadjid@gmail.com&fs=1&tf=cm"
          type="primary"
        >
          Get in touch!
        </Button>
        <div className="hidden lg:flex">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
