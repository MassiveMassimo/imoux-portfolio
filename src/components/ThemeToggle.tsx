"use client";

import * as React from "react";

import { motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by mounting after first render
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <TabsPrimitive.Root
      defaultValue={theme || "system"}
      onValueChange={(value: string) => {
        setTheme(value);
      }}
    >
      <TabsPrimitive.List
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-b from-slate-200 to-slate-200/0 p-1 text-slate-500 dark:from-slate-950 dark:to-slate-950/0 dark:text-slate-400",
          "group/toggle w-full overflow-hidden rounded-full p-0.5 transition-[height] duration-300 *:*:pointer-events-none *:aspect-square *:h-full *:flex-col *:justify-start *:rounded-full *:p-2.5 hover:h-14",
        )}
      >
        {[
          { value: "light", icon: Sun, label: "light" },
          { value: "system", icon: Monitor, label: "auto" },
          { value: "dark", icon: Moon, label: "dark" },
        ].map(({ value, icon: Icon, label }) => (
          <TabsPrimitive.Trigger
            key={value}
            value={value}
            className={cn(
              "relative inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "data-[state=active]:text-white data-[state=inactive]:hover:bg-gradient-to-b data-[state=inactive]:hover:from-slate-200 data-[state=inactive]:hover:to-slate-300/60 data-[state=inactive]:dark:hover:from-slate-800 data-[state=inactive]:dark:hover:to-slate-900",
            )}
          >
            <Icon className="z-10 size-4 flex-none" />
            <p className="absolute -bottom-2.5 z-10 text-xs opacity-0 transition-[bottom,opacity] duration-300 group-hover/toggle:bottom-2 group-hover/toggle:opacity-80">
              {label}
            </p>
            {theme === value && (
              <motion.div
                layoutId="toggleActive"
                className="absolute top-0 aspect-square h-full rounded-full border border-indigo-700 bg-gradient-to-b from-indigo-500 to-indigo-600 shadow"
              ></motion.div>
            )}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  );
}
