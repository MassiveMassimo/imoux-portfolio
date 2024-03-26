import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        className,
        "overflow-visible fill-none stroke-slate-900 dark:stroke-white",
      )}
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
  );
}
