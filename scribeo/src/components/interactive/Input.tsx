"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";
import { fieldBase } from "./field-styles";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(function Input({ className, ...rest }, ref) {
  return (
    <input ref={ref} className={cn(fieldBase, "h-[60px]", className)} {...rest} />
  );
});
