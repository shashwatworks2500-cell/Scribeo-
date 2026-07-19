import { cn } from "@/lib/utils/cn";

/** Shared field surface. Height 60px, radius 16px, 1px border, gold focus
 *  border, no glow. */
export const fieldBase = cn(
  "w-full rounded-md bg-surface-base px-4",
  "border border-border-default text-text-primary",
  "placeholder:text-text-muted",
  "transition-colors duration-[var(--duration-standard)]",
  "focus:border-accent focus:outline-none",
  "disabled:pointer-events-none disabled:opacity-50",
);
