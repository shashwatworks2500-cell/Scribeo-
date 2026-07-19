"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/config/site";
import { DURATION, EASE } from "@/lib/motion/tokens";
import { useReducedMotionContext } from "@/components/motion/MotionProvider";

const FLAG = "scribeo:loaded";

/** Intro overlay. Rendered visible on SSR + initial client render (they match,
 *  so no hydration mismatch). After mount, it hides immediately for repeat
 *  visits (sessionStorage) and under reduced motion; otherwise it plays for
 *  ~1.4s then fades. It is a fixed overlay above already-painted content, so it
 *  causes no CLS and does not gate content in the DOM. */
export function Loader() {
  const reduced = useReducedMotionContext();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(FLAG) === "1";
    } catch {
      seen = false;
    }

    if (seen || reduced) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(FLAG, "1");
      } catch {
        /* storage unavailable — non-fatal */
      }
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible ? (
        <m.div
          key="loader"
          aria-hidden="true"
          className="fixed inset-0 z-[100] grid place-items-center bg-bg-primary"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: DURATION.large, ease: EASE.standard },
          }}
        >
          <span className="text-h3 tracking-heading text-text-primary">
            {SITE.name}
          </span>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
