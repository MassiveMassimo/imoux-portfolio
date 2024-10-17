import type { VariantProps } from "class-variance-authority";

import * as React from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "relative inline-flex flex-none grow-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition before:absolute before:rounded-[inherit] hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 active:scale-95 active:shadow-none disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "border border-indigo-700 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white shadow before:inset-0 before:shadow-inner-sm before:shadow-white/20 hover:scale-105 hover:shadow-lg active:scale-95",
        destructive:
          "border border-red-700 bg-red-500 text-white shadow before:inset-0 before:right-0 before:w-[500px] before:bg-striped hover:before:animate-translate-x",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 active:shadow-inner-sm dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 decoration-indigo-500 decoration-wavy decoration-[1.5px] underline-offset-4 hover:underline hover:decoration-indigo-500 hover:shadow-none dark:text-slate-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
