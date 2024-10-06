import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "indigo",
  "purple",
  "pink",
  "gray",
  "slate",
  "zinc",
  "neutral",
  "stone",
  "amber",
  "orange",
  "lime",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "violet",
  "fuchsia",
  "rose",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
