"use client";

import * as React from "react";

import { motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export default function ThemeToggle() {
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
      className="h-full p-1"
      defaultValue={theme ?? "system"}
      orientation="vertical"
      onValueChange={(value: string) => {
        setTheme(value);
      }}
    >
      <TabsPrimitive.List
        className={cn(
          "inline-flex flex-col items-center justify-center text-slate-500 dark:text-slate-400",
          "group/toggle size-full self-stretch overflow-hidden transition-[width] duration-300",
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
              "relative inline-flex w-full grow flex-col items-center justify-center whitespace-nowrap rounded-xl px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "data-[state=active]:text-white data-[state=inactive]:hover:bg-gradient-to-b data-[state=inactive]:hover:from-slate-200/0 data-[state=inactive]:hover:to-slate-300/60 data-[state=inactive]:dark:hover:from-slate-800 data-[state=inactive]:dark:hover:to-slate-900",
              value === "light" && "rounded-t-[calc(7.5svh-4px)]",
              value === "system" && "",
              value === "dark" && "rounded-b-[calc(7.5svh-4px)]",
            )}
          >
            {theme === value && (
              <motion.div
                layoutId="toggleActive"
                className={cn(
                  "absolute inset-0 top-0 rounded-xl border border-indigo-700 bg-gradient-to-b from-indigo-500 to-indigo-600 shadow transition-[border-radius]",
                  value === "light" && "rounded-t-[calc(7.5svh-4px)]",
                  value === "system" && "",
                  value === "dark" && "rounded-b-[calc(7.5svh-4px)]",
                )}
              ></motion.div>
            )}
            <Icon className="z-10 size-4 flex-none" />
            <div className="flex h-0 items-end text-xs opacity-0 transition-[height,opacity] duration-300 group-hover/toggle:h-5 group-hover/toggle:opacity-80">
              <p>{label}</p>
            </div>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  );
}
