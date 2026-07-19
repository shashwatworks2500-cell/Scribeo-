import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";
import { Link } from "./Link";

type TextLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  className?: string;
};

/** Styled inline text link. */
export function TextLink({ className, children, ...rest }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "text-accent underline-offset-4 transition-colors hover:underline",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
