import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { buttonStyles } from "./button-styles";

type IconButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "aria-label" | "children"
> & {
  /** Required accessible name for the icon-only control. */
  label: string;
  children: ReactNode;
  className?: string;
};

export function IconButton({
  label,
  children,
  className,
  type,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type ?? "button"}
      aria-label={label}
      className={cn(buttonStyles("icon"), "size-11", className)}
      {...rest}
    >
      {children}
    </button>
  );
}
