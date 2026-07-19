"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { revealVariants } from "@/lib/motion/variants";
import { useReducedMotionContext } from "./MotionProvider";

type RevealProps = {
  as?: "div" | "section";
  className?: string;
  children: ReactNode;
};

/** Scroll-reveal wrapper (IntersectionObserver via whileInView, plays once).
 *  Under reduced motion, renders the content statically (no animation, nothing
 *  hidden). Content passed as children stays server-rendered. */
export function Reveal({ as = "div", className, children }: RevealProps) {
  const reduced = useReducedMotionContext();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const Component = as === "section" ? m.section : m.div;
  return (
    <Component
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </Component>
  );
}
