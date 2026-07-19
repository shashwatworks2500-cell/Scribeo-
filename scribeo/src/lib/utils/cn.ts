import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Compose class names with conflict-resolution (Tailwind-aware). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
