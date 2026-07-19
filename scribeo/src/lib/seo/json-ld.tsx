import { SITE } from "@/config/site";

/** Organization structured data. Rendered as a JSON-LD script (the Metadata
 *  API has no JSON-LD field). Content is our own static data. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    // TODO(assets): logo URL and sameAs social profiles.
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
