import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

/* Each component maps to a --text-* token (size + weight baked in via @theme)
   plus letter-spacing. TODO(T2): responsive/clamp sizes. TODO(T3): line-heights
   (only Display = 1.0 given). TODO(T4): heading font role — all use --font-sans
   (Inter) for now. */

type Variant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "bodyLarge"
  | "body"
  | "small"
  | "caption"
  | "label";

const VARIANT_CLASS: Record<Variant, string> = {
  display: "text-display font-bold font-sans tracking-heading",
  h1: "text-h1 font-bold font-sans tracking-heading",
  h2: "text-h2 font-bold font-sans tracking-heading",
  h3: "text-h3 font-semibold font-sans tracking-heading",
  h4: "text-h4 font-semibold font-sans tracking-heading",
  bodyLarge: "text-body-lg font-normal font-sans tracking-body",
  body: "text-body font-normal font-sans tracking-body",
  small: "text-sm font-normal font-sans tracking-body",
  caption: "text-caption font-normal font-sans tracking-body",
  label: "text-caption font-medium font-sans tracking-button",
};

const DEFAULT_AS: Record<Variant, ElementType> = {
  display: "p", // visual; set as="h1" for the hero headline
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  bodyLarge: "p",
  body: "p",
  small: "p",
  caption: "p",
  label: "span", // eyebrows are labels, never headings
};

type TextProps = {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"p">, "className" | "children">;

function makeText(variant: Variant) {
  return function TextComponent({ as, className, children, ...rest }: TextProps) {
    const Component = (as ?? DEFAULT_AS[variant]) as ElementType;
    return (
      <Component className={cn(VARIANT_CLASS[variant], className)} {...rest}>
        {children}
      </Component>
    );
  };
}

export const Display = makeText("display");
export const H1 = makeText("h1");
export const H2 = makeText("h2");
export const H3 = makeText("h3");
export const H4 = makeText("h4");
export const BodyLarge = makeText("bodyLarge");
export const Body = makeText("body");
export const Small = makeText("small");
export const Caption = makeText("caption");
export const Label = makeText("label");
