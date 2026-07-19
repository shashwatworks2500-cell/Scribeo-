import { navItems } from "@/config/navigation";
import { SITE } from "@/config/site";
import { Link } from "@/components/interactive";
import { PageContainer } from "@/components/primitives/layout";
import { HeaderScrollShell } from "./HeaderScrollShell";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

/** Header: transparent at the top, frosted-solid on scroll (HeaderScrollShell).
 *  Logo + Navigation are Server-rendered and passed through the client shell.
 *  Desktop nav / mobile menu switch at an INTERIM breakpoint (lg) —
 *  TODO(T1): replace with the design breakpoint once pixels are supplied. */
export function Header() {
  return (
    <HeaderScrollShell>
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
    </HeaderScrollShell>
  );
}
