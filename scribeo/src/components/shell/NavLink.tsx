"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

/** Nav link with active state (current route) + a restrained gold underline
 *  that scales in on hover/focus (CSS transform — GPU-friendly, no per-event
 *  JS). Active route gets aria-current and a persistent underline. */
export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative inline-flex w-fit text-sm transition-colors duration-[var(--duration-standard)]",
        "after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-accent after:content-['']",
        "after:scale-x-0 after:transition-transform after:duration-[var(--duration-standard)] after:ease-[var(--ease-standard)]",
        "hover:after:scale-x-100 focus-visible:after:scale-x-100",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        isActive
          ? "text-text-primary after:scale-x-100"
          : "text-text-secondary hover:text-text-primary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
