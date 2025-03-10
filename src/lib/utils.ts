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

/**
 * This comment triggers Tailwind to generate all necessary color combinations
 * for gradient, border, background, and fill classes.
 *
 * Color Gradient Classes:
 * from-red-500 from-red-600 via-red-500 via-red-600 to-red-500 to-red-600
 * from-green-500 from-green-600 via-green-500 via-green-600 to-green-500 to-green-600
 * from-blue-500 from-blue-600 via-blue-500 via-blue-600 to-blue-500 to-blue-600
 * from-yellow-500 from-yellow-600 via-yellow-500 via-yellow-600 to-yellow-500 to-yellow-600
 * from-indigo-500 from-indigo-600 via-indigo-500 via-indigo-600 to-indigo-500 to-indigo-600
 * from-purple-500 from-purple-600 via-purple-500 via-purple-600 to-purple-500 to-purple-600
 * from-pink-500 from-pink-600 via-pink-500 via-pink-600 to-pink-500 to-pink-600
 * from-amber-500 from-amber-600 via-amber-500 via-amber-600 to-amber-500 to-amber-600
 * from-orange-500 from-orange-600 via-orange-500 via-orange-600 to-orange-500 to-orange-600
 * from-lime-500 from-lime-600 via-lime-500 via-lime-600 to-lime-500 to-lime-600
 * from-emerald-500 from-emerald-600 via-emerald-500 via-emerald-600 to-emerald-500 to-emerald-600
 * from-teal-500 from-teal-600 via-teal-500 via-teal-600 to-teal-500 to-teal-600
 * from-cyan-500 from-cyan-600 via-cyan-500 via-cyan-600 to-cyan-500 to-cyan-600
 * from-sky-500 from-sky-600 via-sky-500 via-sky-600 to-sky-500 to-sky-600
 * from-violet-500 from-violet-600 via-violet-500 via-violet-600 to-violet-500 to-violet-600
 * from-fuchsia-500 from-fuchsia-600 via-fuchsia-500 via-fuchsia-600 to-fuchsia-500 to-fuchsia-600
 * from-rose-500 from-rose-600 via-rose-500 via-rose-600 to-rose-500 to-rose-600
 * 
 * Background Classes:
 * bg-red-500 bg-red-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-green-500 bg-green-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-blue-500 bg-blue-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-yellow-500 bg-yellow-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-indigo-500 bg-indigo-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-purple-500 bg-purple-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-pink-500 bg-pink-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-amber-500 bg-amber-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-orange-500 bg-orange-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-lime-500 bg-lime-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-emerald-500 bg-emerald-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-teal-500 bg-teal-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-cyan-500 bg-cyan-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-sky-500 bg-sky-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-violet-500 bg-violet-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-fuchsia-500 bg-fuchsia-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * bg-rose-500 bg-rose-600 bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b
 * 
 * Border Classes:
 * border-red-500 border-red-600
 * border-green-500 border-green-600
 * border-blue-500 border-blue-600
 * border-yellow-500 border-yellow-600
 * border-indigo-500 border-indigo-600
 * border-purple-500 border-purple-600
 * border-pink-500 border-pink-600
 * border-amber-500 border-amber-600
 * border-orange-500 border-orange-600
 * border-lime-500 border-lime-600
 * border-emerald-500 border-emerald-600
 * border-teal-500 border-teal-600
 * border-cyan-500 border-cyan-600
 * border-sky-500 border-sky-600
 * border-violet-500 border-violet-600
 * border-fuchsia-500 border-fuchsia-600
 * border-rose-500 border-rose-600
 * 
 * Fill Classes (for SVG):
 * fill-red-500 fill-red-600
 * fill-green-500 fill-green-600
 * fill-blue-500 fill-blue-600
 * fill-yellow-500 fill-yellow-600
 * fill-indigo-500 fill-indigo-600
 * fill-purple-500 fill-purple-600
 * fill-pink-500 fill-pink-600
 * fill-amber-500 fill-amber-600
 * fill-orange-500 fill-orange-600
 * fill-lime-500 fill-lime-600
 * fill-emerald-500 fill-emerald-600
 * fill-teal-500 fill-teal-600
 * fill-cyan-500 fill-cyan-600
 * fill-sky-500 fill-sky-600
 * fill-violet-500 fill-violet-600
 * fill-fuchsia-500 fill-fuchsia-600
 * fill-rose-500 fill-rose-600
 * 
 * CSS Variable References:
 * --color-red-500 --color-red-600
 * --color-green-500 --color-green-600
 * --color-blue-500 --color-blue-600
 * --color-yellow-500 --color-yellow-600
 * --color-indigo-500 --color-indigo-600
 * --color-purple-500 --color-purple-600
 * --color-pink-500 --color-pink-600
 * --color-amber-500 --color-amber-600
 * --color-orange-500 --color-orange-600
 * --color-lime-500 --color-lime-600
 * --color-emerald-500 --color-emerald-600
 * --color-teal-500 --color-teal-600
 * --color-cyan-500 --color-cyan-600
 * --color-sky-500 --color-sky-600
 * --color-violet-500 --color-violet-600
 * --color-fuchsia-500 --color-fuchsia-600
 * --color-rose-500 --color-rose-600
 */