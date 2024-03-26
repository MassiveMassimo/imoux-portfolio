"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
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
