import type { NavItem } from "@/types";
import { cn } from "@/lib/utils/cn";
import { Link } from "@/components/interactive";

type NavigationProps = {
  items: readonly NavItem[];
  className?: string;
};

/** Primary navigation links (presentation-agnostic; used by Header + Footer). */
export function Navigation({ items, className }: NavigationProps) {
  return (
    <nav aria-label="Primary" className={cn("items-center gap-8", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
