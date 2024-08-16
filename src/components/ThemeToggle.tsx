"use client";

import * as React from "react";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Tabs
      defaultValue="system"
      onValueChange={(value: string) => {
        setTheme(value);
      }}
    >
      <TabsList className="group/toggle w-full rounded-full p-0.5 transition-[height] duration-300 hover:h-14">
        <TabsTrigger
          value="light"
          className="aspect-square h-full flex-col justify-start overflow-hidden rounded-full p-2.5 *:pointer-events-none"
        >
          <Sun className="size-4 flex-none" />
          <p className="absolute bottom-4 text-xs opacity-0 transition-[bottom,opacity] duration-300 group-hover/toggle:bottom-5 group-hover/toggle:opacity-80">
            light
          </p>
        </TabsTrigger>
        <TabsTrigger
          value="system"
          className="aspect-square h-full flex-col justify-start overflow-hidden rounded-full p-2.5 *:pointer-events-none"
        >
          <Monitor className="size-4 flex-none" />
          <p className="absolute bottom-4 text-xs opacity-0 transition-[bottom,opacity] duration-300 group-hover/toggle:bottom-5 group-hover/toggle:opacity-80">
            auto
          </p>
        </TabsTrigger>
        <TabsTrigger
          value="dark"
          className="aspect-square h-full flex-col justify-start overflow-hidden rounded-full p-2.5 *:pointer-events-none"
        >
          <Moon className="size-4 flex-none" />
          <p className="absolute bottom-4 text-xs opacity-0 transition-[bottom,opacity] duration-300 group-hover/toggle:bottom-5 group-hover/toggle:opacity-80">
            dark
          </p>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
