import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type PageContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">;

/** Centered page container. Max content width 1320px.
 *  Container padding: 24 / 48 / 96 at base / md / lg (Tailwind breakpoints). */
export function PageContainer<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: PageContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1320px] px-6 md:px-12 lg:px-24",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
