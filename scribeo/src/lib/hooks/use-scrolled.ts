"use client";

import { useEffect, useState } from "react";

/** True once the page is scrolled past `threshold` px. Passive + rAF-throttled;
 *  reads only window.scrollY (no layout thrash). SSR snapshot = false, resolved
 *  after mount. Works whether or not Lenis is active (Lenis emits native scroll
 *  events). */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update(); // sync initial state (e.g. a restored scroll position)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
