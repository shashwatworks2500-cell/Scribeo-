import { cn } from "@/lib/utils/cn";

/** Subtle separator. Use sparingly — whitespace separates by default. */
export function Divider({
  orientation = "horizontal",
  className,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  return (
    <hr
      className={cn(
        "border-0 bg-border-subtle",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
    />
  );
}
