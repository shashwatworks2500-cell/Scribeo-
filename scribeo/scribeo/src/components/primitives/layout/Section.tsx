import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "className" | "children">;

/** Section wrapper providing vertical rhythm.
 *  Section gap: 96 / 120 / 160 at base / md / lg (Tailwind breakpoints). */
export function Section<T extends ElementType = "section">({
  as,
  className,
  children,
  ...rest
}: SectionProps<T>) {
  const Component = (as ?? "section") as ElementType;
  return (
    <Component className={cn("py-24 md:py-30 lg:py-40", className)} {...rest}>
      {children}
    </Component>
  );
}
