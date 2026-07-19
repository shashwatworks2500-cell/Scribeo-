"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { useScrolled } from "@/lib/hooks/use-scrolled";

/** Client shell for the header bar: transparent at the top, frosted-solid once
 *  scrolled. Border width stays constant (transparent -> subtle) so there is no
 *  layout shift. Server-rendered nav content is passed through as children. */
export function HeaderScrollShell({ children }: { children: ReactNode }) {
  const scrolled = useScrolled();

  return (
    <header
      data-scrolled={scrolled || undefined}
      className={cn(
        "sticky top-0 z-40 border-b",
        "transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)]",
        scrolled
          ? "border-border-subtle bg-bg-primary/80 backdrop-blur-[var(--blur-medium)]"
          : "border-transparent bg-transparent",
      )}
    >
      {children}
    </header>
  );
}
