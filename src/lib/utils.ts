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

export function getColor(id: string) {
  let hash = 0;
  for (let i = 0; i < id?.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
