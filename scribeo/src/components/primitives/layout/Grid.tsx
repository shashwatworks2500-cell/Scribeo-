import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type GridProps = {
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">;

/** Layout grid. Columns: mobile 4 (base), 24px gutter.
 *  TODO(T1): 8 (tablet) / 12 (desktop) column counts at breakpoints. */
export function Grid({ className, children, ...rest }: GridProps) {
  return (
    <div className={cn("grid grid-cols-4 gap-6", className)} {...rest}>
      {children}
    </div>
  );
}
