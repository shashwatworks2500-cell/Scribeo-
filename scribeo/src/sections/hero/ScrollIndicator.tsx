"use client";

import { m } from "framer-motion";
import { useReducedMotionContext } from "@/components/motion/MotionProvider";

/** Minimal "there is more" cue. Absolutely positioned — never affects layout.
 *  Static under reduced motion. */
export function ScrollIndicator({ className }: { className?: string }) {
  const reduced = useReducedMotionContext();
  return (
    <div
      aria-hidden="true"
      className={
        "pointer-events-none absolute inset-x-0 bottom-8 flex justify-center " +
        (className ?? "")
      }
    >
      <div className="relative h-12 w-px overflow-hidden bg-border-default">
        {reduced ? null : (
          <m.div
            className="absolute inset-x-0 top-0 h-4 bg-accent"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}
