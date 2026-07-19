import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type PageContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">;

/** Centered page container. Max content width 1320px.
 *  Container padding: mobile 24px (base). TODO(T1): tablet (48px) / desktop
 *  (96px) breakpoint-gated padding once breakpoint pixels are supplied. */
export function PageContainer<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: PageContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1320px] px-6", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
