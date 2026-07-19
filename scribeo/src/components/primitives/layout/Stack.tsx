import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/** Approved spacing scale (px) -> gap utility. Keeps spacing on-token. */
const GAP: Record<number, string> = {
  4: "gap-1",
  8: "gap-2",
  12: "gap-3",
  16: "gap-4",
  24: "gap-6",
  32: "gap-8",
  40: "gap-10",
  48: "gap-12",
  64: "gap-16",
  80: "gap-20",
  96: "gap-24",
  128: "gap-32",
  160: "gap-40",
};

type StackProps<T extends ElementType> = {
  as?: T;
  direction?: "row" | "column";
  gap?: keyof typeof GAP;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">;

const ALIGN = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

const JUSTIFY = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

/** Default spacing primitive (flex + gap). Prefer this over <Spacer>. */
export function Stack<T extends ElementType = "div">({
  as,
  direction = "column",
  gap = 16,
  align,
  justify,
  className,
  children,
  ...rest
}: StackProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={cn(
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        GAP[gap],
        align && ALIGN[align],
        justify && JUSTIFY[justify],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
