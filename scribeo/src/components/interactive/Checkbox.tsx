"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

/** Native checkbox styled with accent-color (keeps built-in accessibility). */
export const Checkbox = forwardRef<
  HTMLInputElement,
  Omit<ComponentPropsWithoutRef<"input">, "type">
>(function Checkbox({ className, ...rest }, ref) {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={cn(
        "size-5 rounded-sm border border-border-default bg-surface-base",
        "[accent-color:var(--color-accent)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
      {...rest}
    />
  );
});
