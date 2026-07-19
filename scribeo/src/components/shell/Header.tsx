import { navItems } from "@/config/navigation";
import { SITE } from "@/config/site";
import { Link } from "@/components/interactive";
import { PageContainer } from "@/components/primitives/layout";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

/** Header foundation. Desktop nav / mobile menu switch at an INTERIM breakpoint
 *  (lg) — TODO(T1): replace with the design breakpoint once pixels are supplied. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-[var(--blur-medium)]">
      <PageContainer className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className="text-h4 tracking-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {SITE.name}
        </Link>
        <Navigation items={navItems} className="hidden lg:flex" />
        <MobileMenu items={navItems} className="lg:hidden" />
      </PageContainer>
    </header>
  );
}
