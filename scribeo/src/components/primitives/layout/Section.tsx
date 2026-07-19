import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "className" | "children">;

/** Section wrapper providing vertical rhythm.
 *  Section gap: mobile 96px (base). TODO(T1): tablet (120px) / desktop (160px)
 *  breakpoint-gated spacing once breakpoint pixels are supplied. */
export function Section<T extends ElementType = "section">({
  as,
  className,
  children,
  ...rest
}: SectionProps<T>) {
  const Component = (as ?? "section") as ElementType;
  return (
    <Component className={cn("py-24", className)} {...rest}>
      {children}
    </Component>
  );
}
