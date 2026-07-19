import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { buttonStyles, type ButtonVariant } from "./button-styles";

type CommonProps = {
  variant?: ButtonVariant;
  /** TODO(T8): `size` is in the locked contract but no size variants are
   *  defined in tokens (only responsive height). Accepted for API stability;
   *  currently has no visual effect. */
  size?: "default";
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

/* Server component. Renders <a> (via next/link) when `href` is present, else a
   native <button>. Interactions are CSS-based; onClick is intentionally not
   supported — for click-driven buttons in Client Components, apply
   `buttonStyles()` to a native <button onClick>. */
type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps | "onClick"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", icon, className, children } = props;
  const classes = buttonStyles(variant, className);

  if (props.href !== undefined) {
    const {
      href,
      variant: _v,
      size: _s,
      icon: _i,
      className: _c,
      children: _ch,
      ...rest
    } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {icon}
        {children}
      </Link>
    );
  }

  const {
    variant: _v,
    size: _s,
    icon: _i,
    className: _c,
    children: _ch,
    type,
    ...rest
  } = props;
  return (
    <button type={type ?? "button"} className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
}
