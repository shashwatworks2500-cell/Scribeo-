"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";
import { fieldBase } from "./field-styles";

export const Select = forwardRef<
  HTMLSelectElement,
  ComponentPropsWithoutRef<"select">
>(function Select({ className, children, ...rest }, ref) {
  return (
    <select
      ref={ref}
      className={cn(fieldBase, "h-[60px] appearance-none pr-10", className)}
      {...rest}
    >
      {children}
    </select>
  );
});
