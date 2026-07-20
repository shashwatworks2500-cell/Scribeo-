"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionContext } from "@/components/motion/MotionProvider";
import { heroContainer, heroItem } from "./hero-motion";

export function HeroStagger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotionContext();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <m.div
      className={className}
      variants={heroContainer}
      initial="hidden"
      animate="visible"
    >
      {children}
    </m.div>
  );
}

export function HeroStaggerItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotionContext();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <m.div className={className} variants={heroItem}>
      {children}
    </m.div>
  );
}
