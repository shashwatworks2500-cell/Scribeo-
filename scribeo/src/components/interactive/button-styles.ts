import { cn } from "@/lib/utils/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "text"
  | "icon";

const BASE = cn(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
  "font-sans font-medium tracking-button rounded-round",
  "transition-[transform,background-color,border-color,color,opacity]",
  "duration-[var(--duration-standard)] ease-[var(--ease-standard)]",
  "min-h-11", // 44px minimum touch target
  "focus-visible:outline-2 focus-visible:outline-offset-2",
  "active:scale-[var(--scale-active)]",
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
);

/* Focus ring color set per-variant for guaranteed contrast: a gold ring on the
   gold primary button would be invisible, so primary uses a light ring. */
const VARIANT: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-accent text-bg-primary border border-transparent",
    "hover:bg-accent-hover hover:scale-[var(--scale-hover)]",
    "focus-visible:outline-text-primary",
  ),
  secondary: cn(
    "bg-transparent text-text-primary border border-border-default",
    "hover:border-border-strong hover:scale-[var(--scale-hover)]",
    "focus-visible:outline-accent",
  ),
  ghost: cn(
    "bg-transparent text-text-secondary border border-transparent",
    "hover:text-text-primary hover:bg-surface-base",
    "focus-visible:outline-accent",
  ),
  text: cn(
    "bg-transparent text-text-primary border-0 px-0 min-h-0",
    "hover:text-accent",
    "focus-visible:outline-accent",
  ),
  icon: cn(
    "bg-transparent text-text-secondary border border-transparent aspect-square p-0",
    "hover:text-text-primary hover:bg-surface-base",
    "focus-visible:outline-accent",
  ),
};

/* Height 52px (mobile base) + 32px horizontal padding.
   TODO(T1): tablet (54px) / desktop (56px) heights at breakpoints. */
const SIZING = "h-[52px] px-8";

export function buttonStyles(
  variant: ButtonVariant = "primary",
  className?: string,
): string {
  const sizing = variant === "text" || variant === "icon" ? "" : SIZING;
  return cn(BASE, VARIANT[variant], sizing, className);
}
