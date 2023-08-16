import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 transition-colors fixed px-10">
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
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        <Link href="/" className="btn btn-ghost group">
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
              className="group-hover:-translate-y-3 duration-500 ease-elastic"
            />
            <rect
              x="72"
              y="8"
              width="112"
              height="128"
              rx="32"
              strokeWidth="16"
              className="group-hover:-translate-y-3 delay-100 duration-500 ease-elastic"
            />
            <circle
              cx="248"
              cy="72"
              r="64"
              strokeWidth="16"
              className="group-hover:-translate-y-3 delay-200 duration-500 ease-elastic"
            />
          </svg>
        </Link>

        <ul className="menu menu-horizontal px-1 hidden lg:flex">
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
        <Link
          href="https://mail.google.com/mail/u/0/?source=mailto&to=mhmmadjid@gmail.com&fs=1&tf=cm"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch!
        </Link>
        <div className="hidden lg:flex">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
