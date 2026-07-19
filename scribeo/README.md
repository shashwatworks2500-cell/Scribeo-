# Scribeo — Website (Phase 1: Foundation & Architecture)

Production foundation implemented per **IMPLEMENTATION_PLAN_V2**. No homepage,
Hero, or content sections are built (Phase 2+). No placeholder UI. No invented
design values — gaps are marked `TODO` in-code.

## Stack (locked)

Next.js (App Router) · TypeScript (strict) · Tailwind CSS v4 (CSS-first) ·
Framer Motion (LazyMotion, `m` only) · Lenis (desktop/pointer-fine, off under
reduced motion) · Lucide React · next/font · next/image · Vercel.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # next lint (ESLint)
npm run build      # production build
```

> Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) — used for canonical URLs,
> sitemap, robots and OG metadata.

## What Phase 1 delivers

- **Design tokens** in `src/app/globals.css` (`@theme`) — colors, radius, blur,
  type scale, tracking, motion durations/easing/scale, all wired verbatim.
- **Layout primitives** — `PageContainer`, `Section`, `ContentWrapper`, `Grid`,
  `Stack`, `Spacer`, `Divider`.
- **Typography** — `Display`, `H1`–`H4`, `BodyLarge`, `Body`, `Small`,
  `Caption`, `Label` (token-driven; eyebrows use `Label`, never a heading).
- **Interactive primitives** — `Button` (server, polymorphic link/button, CSS
  interactions), `Link`, `TextLink`, `IconButton`, and form fields (`FormField`,
  `Input`, `Textarea`, `Select`, `Checkbox`) with accessible labelling.
- **Motion infrastructure** — `MotionProvider` (LazyMotion strict + Lenis +
  reduced-motion context), `Reveal`, `Stagger`.
- **Shell** — `Header`, `Navigation`, `MobileMenu` (dialog semantics, focus
  trap, scroll lock, Lenis opt-out), `Footer`, `Loader` (hydration-safe intro).
- **SEO/metadata** — `createMetadata` factory (`metadataBase`, title template,
  OG/Twitter), `Organization` JSON-LD, `sitemap.ts`, `robots.ts`, `manifest.ts`,
  `viewport`/theme-color.
- **App shell** — root `layout.tsx`, skip link, error boundaries
  (`error.tsx`, `global-error.tsx`), `not-found.tsx`.

## Notes for the Creative Director

**Fonts.** Both locked families (Inter + Manrope) are loaded via
`next/font/google`, which self-hosts at build time (no runtime third-party CDN,
satisfying the engineering rule). If fully-local `woff2` subsets are preferred,
swapping to `next/font/local` is a drop-in once the files are provided.

**Open items (`TODO`) — awaiting approved values, not invented:**

| Ref | Item |
| --- | --- |
| T1 | Breakpoint pixel boundaries. Shell uses an **interim** `lg` switch, clearly marked. Container padding / section gap / grid columns implement the mobile base; breakpoint steps are deferred. |
| T2 | Mobile/tablet type sizes (or `clamp()` ramp). Desktop sizes are wired. |
| T3 | Line-heights for H1–Caption (only Display = 1.0 given). |
| T4 | Inter vs Manrope role mapping. Both loaded; all type uses Inter interim. |
| T5 | Card ambient-shadow value (Phase 3). |
| T6 | Hero rendering approach + ribbon asset (Phase 2). |
| T7 | Copy: meta description, and all section copy (Phase 2). |
| T8 | `Button` `size` variants (prop accepted, no visual effect yet). |
| — | Nav labels (route-structural, confirm); footer tagline/legal/social; icon assets; production `NEXT_PUBLIC_SITE_URL`. |

**Verification.** This environment has no network access, so `npm install` /
`tsc` / `eslint` / `next build` could not be executed here. The code is written
to pass strict TypeScript and the Next ESLint config and has been reviewed by
hand. Please run `npm install && npm run typecheck && npm run lint && npm run
build` to confirm on your machine.
