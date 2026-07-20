import type { Variants } from "framer-motion";
import { DURATION, EASE } from "@/lib/motion/tokens";

/** Hero on-load reveal: ordered fade + rise, hero-reveal timing (plays on mount,
 *  above the fold — not scroll-triggered). */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.heroReveal, ease: EASE.outExpo },
  },
};
