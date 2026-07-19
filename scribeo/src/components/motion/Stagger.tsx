"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import { useReducedMotionContext } from "./MotionProvider";

type StaggerProps = {
  className?: string;
  stagger?: number;
  children: ReactNode;
};

/** Container that reveals children in sequence. Under reduced motion, renders
 *  children statically. Wrap each child in <StaggerItem>. */
export function Stagger({ className, stagger, children }: StaggerProps) {
  const reduced = useReducedMotionContext();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotionContext();
  if (reduced) {
    return <div className={className}>{children}</div>;
  }
  return (
    <m.div className={className} variants={staggerItem}>
      {children}
    </m.div>
  );
}
