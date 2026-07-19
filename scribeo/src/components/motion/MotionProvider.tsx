"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { createContext, useContext, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { useLenis } from "@/lib/motion/use-lenis";

const ReducedMotionContext = createContext(false);

export function useReducedMotionContext(): boolean {
  return useContext(ReducedMotionContext);
}

/** App-level motion infrastructure:
 *  - LazyMotion (strict) with domAnimation only -> minimal Framer bundle.
 *  - MotionConfig reducedMotion="user" -> Framer respects the OS preference.
 *  - Lenis smooth scroll, gated off under reduced motion (and on touch inside). */
export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  useLenis({ enabled: !reduced });

  return (
    <ReducedMotionContext.Provider value={reduced}>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </ReducedMotionContext.Provider>
  );
}
