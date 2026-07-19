import type { Metadata } from "next";
import { SITE } from "@/config/site";

/** Base metadata factory. Routes call this with overrides. metadataBase makes
 *  OG/canonical URLs absolute. TODO(T7): CD-approved description. */
export function createMetadata(overrides: Metadata = {}): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: SITE.name,
      template: `%s — ${SITE.name}`,
    },
    description: SITE.description,
    applicationName: SITE.name,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_US",
      url: SITE.url,
      title: SITE.name,
      description: SITE.description,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.name,
      description: SITE.description,
    },
    robots: { index: true, follow: true },
    ...overrides,
  };
}
