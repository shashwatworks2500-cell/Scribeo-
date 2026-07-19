import NextLink from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type LinkProps = ComponentPropsWithoutRef<typeof NextLink> & {
  external?: boolean;
};

/** Thin routing wrapper over next/link. Handles external links safely. No
 *  visual styling of its own (use TextLink for styled inline links). */
export function Link({ external, href, children, ...rest }: LinkProps) {
  const isExternal =
    external || (typeof href === "string" && /^https?:\/\//.test(href));

  if (isExternal) {
    return (
      <a
        href={typeof href === "string" ? href : "#"}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  );
}
