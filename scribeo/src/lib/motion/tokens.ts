/** JS mirror of the CSS motion tokens (globals.css @theme) for Framer Motion.
 *  Durations in seconds. Keep in sync with the CSS custom properties. */
export const DURATION = {
  micro: 0.15,
  standard: 0.3,
  large: 0.6,
  sectionReveal: 0.7,
  heroReveal: 0.9,
  pageTransition: 0.9,
} as const;

export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  standard: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const SCALE = { hover: 1.02, active: 0.98 } as const;

/** Maximum stagger between children (80ms). */
export const STAGGER_MAX = 0.08;
