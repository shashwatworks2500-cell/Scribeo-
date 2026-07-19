import { cn } from "@/lib/utils/cn";

const SIZE: Record<number, string> = {
  4: "h-1",
  8: "h-2",
  12: "h-3",
  16: "h-4",
  24: "h-6",
  32: "h-8",
  40: "h-10",
  48: "h-12",
  64: "h-16",
  80: "h-20",
  96: "h-24",
  128: "h-32",
  160: "h-40",
};

/** Explicit vertical space. Narrow use only — prefer <Stack> gap. */
export function Spacer({
  size = 16,
  className,
}: {
  size?: keyof typeof SIZE;
  className?: string;
}) {
  return <div aria-hidden="true" className={cn(SIZE[size], className)} />;
}
