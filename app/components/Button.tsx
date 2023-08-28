import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    type?: string;
  };

export default function Button({
  children,
  type,
  href,
  ...props
}: ButtonProps) {
  let className = [];
  switch (type) {
    case "primary":
      className[0] =
        "from-indigo-300 dark:from-indigo-950 dark:to-indigo-950/0 to-indigo-300/0";
      className[1] =
        "border-indigo-800 dark:border-indigo-950 from-indigo-600 to-indigo-700 ";
      className[2] = "from-indigo-700 to-indigo-600 text-indigo-200";
      break;
    case "secondary":
      className[0] = "from-base-200/50 to-base-200/0";
      className[1] =
        "dark:bg-gradient-to-t border-slate-300 dark:border-slate-950/40 from-base-100 to-base-200";
      className[2] =
        "dark:bg-gradient-to-t from-base-200 to-base-100 text-[var(--base-content-300)]";
      break;
  }

  const isExternalLink =
    href && (href.startsWith("http://") || href.startsWith("https://"));

  const linkProps = isExternalLink
    ? {
        ...props,
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {
        ...props,
        href,
      };

  return (
    <Link
      {...linkProps}
      className={`${className[0]} h-12 rounded-full bg-gradient-to-b p-1`}
    >
      <div
        className={`${className[1]} h-full rounded-full border bg-gradient-to-b p-1 shadow-md transition-transform hover:scale-105 active:scale-90`}
      >
        <div
          className={`${className[2]} inline-flex h-full items-center justify-center rounded-full bg-gradient-to-b px-4 font-medium normal-case`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
