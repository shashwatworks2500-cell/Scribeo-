import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ContentWrapperProps = {
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">;

/** Constrains long-form content to a comfortable reading measure.
 *  Interim measure ~65ch (typographic norm). TODO: confirm exact measure if a
 *  brand-specific value is defined. */
export function ContentWrapper({
  className,
  children,
  ...rest
}: ContentWrapperProps) {
  return (
    <div className={cn("max-w-[65ch]", className)} {...rest}>
      {children}
    </div>
  );
}
