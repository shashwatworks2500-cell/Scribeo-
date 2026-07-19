import type { Variants } from "framer-motion";
import { DURATION, EASE, STAGGER_MAX } from "./tokens";

/** Standard section/element reveal: fade + short rise. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.sectionReveal, ease: EASE.outExpo },
  },
};

/** Container that staggers its children (clamped to the max stagger token). */
export const staggerContainer = (stagger = 0.06): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: Math.min(stagger, STAGGER_MAX) },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.standard, ease: EASE.outExpo },
  },
};
