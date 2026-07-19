import type { NavItem } from "@/types";

/** Route-structural navigation. Target routes are created in later phases.
 *  TODO(CD): confirm final nav labels and order. */
export const navItems: readonly NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
