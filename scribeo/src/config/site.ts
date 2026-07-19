/** Structural site config (not marketing copy). */
export const SITE = {
  name: "Scribeo",
  // Set NEXT_PUBLIC_SITE_URL in the environment (see .env.example).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://scribeo.example.com",
  // TODO(T7): CD-approved marketing description. Kept empty until supplied;
  // the metadata/JSON-LD/manifest structure is the Phase-1 deliverable.
  description: "",
} as const;
