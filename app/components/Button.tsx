import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    type?: string;
    className?: string;
  };

export default function Button({
  children,
  type,
  href,
  className,
  ...props
}: ButtonProps) {
  let buttonTypeClasses = [];
  switch (type) {
    case "primary":
      buttonTypeClasses[0] =
        "from-indigo-300 dark:from-indigo-950 dark:to-indigo-950/0 to-indigo-300/0";
      buttonTypeClasses[1] = "from-indigo-600 to-indigo-700 ";
      buttonTypeClasses[2] = "from-indigo-700 to-indigo-600 text-indigo-200";
      break;
    case "secondary":
      buttonTypeClasses[0] =
        "from-slate-200 to-base-100 dark:from-slate-950/30";
      buttonTypeClasses[1] = "dark:bg-gradient-to-t from-base-100 to-base-200";
      buttonTypeClasses[2] =
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
      className={`${buttonTypeClasses[0]} flex w-fit rounded-full bg-gradient-to-b p-1`}
    >
      <div
        className={`${buttonTypeClasses[1]} flex rounded-full bg-gradient-to-b p-1 shadow-md transition-transform hover:scale-105 active:scale-90`}
      >
        <div
          className={`${buttonTypeClasses[2]} inline-flex items-center justify-center gap-1 rounded-full bg-gradient-to-b px-4 font-medium ${className}`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
