import { navItems } from "@/config/navigation";
import { SITE } from "@/config/site";
import { Link } from "@/components/interactive";
import { PageContainer } from "@/components/primitives/layout";
import { Navigation } from "./Navigation";

/** Footer foundation. INTERIM breakpoint (lg) — TODO(T1): design breakpoint. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-subtle py-16">
      <PageContainer>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            aria-label={`${SITE.name} home`}
            className="text-h4 tracking-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {SITE.name}
          </Link>
          <Navigation items={navItems} className="flex flex-wrap gap-6" />
        </div>
        <p className="mt-12 text-caption text-text-muted">
          &copy; {year} {SITE.name}.
        </p>
        {/* TODO(copy/assets): tagline, legal links, social profiles. */}
      </PageContainer>
    </footer>
  );
}
