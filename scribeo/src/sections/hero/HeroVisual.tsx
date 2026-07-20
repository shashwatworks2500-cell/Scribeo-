"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { useReducedMotionContext } from "@/components/motion/MotionProvider";
import { HeroRibbon } from "./HeroRibbon";

/** Hero visual: ambient float, cursor tilt (pointer-fine only, <=4deg /
 *  <=12px), scroll-linked scale-down, and a drifting specular sheen. Fully
 *  static under reduced motion. No WebGL. */
export function HeroVisual({ className }: { className?: string }) {
  const reduced = useReducedMotionContext();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.9]), {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  const rotateX = useSpring(0, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 18 });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced) return;
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(nx * 8);
    rotateX.set(ny * -8);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        <div className="mx-auto w-full max-w-md xl:max-w-none">
          <HeroRibbon />
        </div>
      </div>
    );
  }

  return (
    <m.div ref={ref} className={className} style={{ scale, opacity }}>
      <m.div
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="mx-auto w-full max-w-md xl:max-w-none"
      >
        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative"
        >
          <m.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeroRibbon />
          </m.div>
          <m.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 40% 30%, color-mix(in srgb, var(--color-text-primary) 14%, transparent), transparent 70%)",
              mixBlendMode: "screen",
            }}
            animate={{ opacity: [0.2, 0.45, 0.2], x: [-8, 8, -8] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </m.div>
      </m.div>
    </m.div>
  );
}
