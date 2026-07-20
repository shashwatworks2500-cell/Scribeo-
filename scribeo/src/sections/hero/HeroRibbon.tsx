/** Pre-rendered premium ribbon (vector, brushed-metal with a restrained gold
 *  rim). Scales crisply to 4K; swappable for a rendered raster later. Motion is
 *  applied by HeroVisual. Decorative — the headline carries meaning. */
export function HeroRibbon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 600"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="scribeo-metal"
          x1="0"
          y1="0"
          x2="480"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#464d59" />
          <stop offset="0.35" stopColor="#242830" />
          <stop offset="0.62" stopColor="#343944" />
          <stop offset="1" stopColor="#15171b" />
        </linearGradient>
        <linearGradient
          id="scribeo-sheen"
          x1="0"
          y1="0"
          x2="360"
          y2="560"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#c9cdd6" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#c9cdd6" stopOpacity="0" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient
          id="scribeo-gold"
          x1="0"
          y1="0"
          x2="480"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e4c35a" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#b89225" />
        </linearGradient>
      </defs>

      {/* depth */}
      <path
        d="M150 80 C 330 130 360 280 220 330 C 90 380 150 500 320 540"
        stroke="#0b0b0d"
        strokeOpacity="0.55"
        strokeWidth="92"
        strokeLinecap="round"
        transform="translate(0 12)"
      />
      {/* metal body */}
      <path
        d="M150 80 C 330 130 360 280 220 330 C 90 380 150 500 320 540"
        stroke="url(#scribeo-metal)"
        strokeWidth="84"
        strokeLinecap="round"
      />
      {/* gold rim light */}
      <path
        d="M150 80 C 330 130 360 280 220 330 C 90 380 150 500 320 540"
        stroke="url(#scribeo-gold)"
        strokeWidth="3"
        strokeOpacity="0.7"
        strokeLinecap="round"
        transform="translate(-11 -11)"
      />
      {/* specular sheen */}
      <path
        d="M150 80 C 330 130 360 280 220 330 C 90 380 150 500 320 540"
        stroke="url(#scribeo-sheen)"
        strokeWidth="24"
        strokeLinecap="round"
        transform="translate(-9 -9)"
      />
    </svg>
  );
}
