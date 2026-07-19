import type { NavItem } from "@/types";
import { cn } from "@/lib/utils/cn";
import { NavLink } from "./NavLink";

type NavigationProps = {
  items: readonly NavItem[];
  className?: string;
};

/** Primary navigation links (used by Header + Footer). Links carry active state
 *  and the hover underline via NavLink. Stays a Server Component. */
export function Navigation({ items, className }: NavigationProps) {
  return (
    <nav aria-label="Primary" className={cn("items-center gap-8", className)}>
      {items.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
