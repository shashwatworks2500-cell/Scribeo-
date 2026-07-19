"use client";

import { useEffect } from "react";

/** Lenis smooth scroll — desktop/pointer-fine only, disabled under reduced
 *  motion. Dynamically imported to keep it out of the initial bundle. Nested
 *  scrollable regions opt out with `data-lenis-prevent`. */
export function useLenis({ enabled }: { enabled: boolean }): void {
  useEffect(() => {
    if (!enabled) return;
    // Native scroll on touch; Lenis touch smoothing is off by default and not
    // recommended. Only enhance on precise pointers.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let rafId = 0;
    let cancelled = false;
    let instance: { raf: (t: number) => void; destroy: () => void } | null =
      null;

    void (async () => {
      const Lenis = (await import("lenis")).default;
      if (cancelled) return;
      instance = new Lenis();
      const raf = (time: number) => {
        instance?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      instance?.destroy();
    };
  }, [enabled]);
}
