import { Button } from "@/components/interactive";
import { PageContainer } from "@/components/primitives/layout";
import {
  BodyLarge,
  Display,
  Label,
} from "@/components/primitives/typography";
import { HeroStagger, HeroStaggerItem } from "./HeroReveal";
import { HeroVisual } from "./HeroVisual";
import { ScrollIndicator } from "./ScrollIndicator";

const TRUST = ["Premium Design", "Performance Focused", "Built for Growth"];

/** Hero section. Server-composed; motion isolated in client shells. Locked v1
 *  copy from the Copy Bible / Content Blueprint. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background layers (decorative, behind content) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(120% 120% at 72% -10%, var(--color-bg-secondary), transparent 55%)",
          }}
        />
        <div
          className="absolute right-[-8%] top-[-6%] h-[70%] w-[62%] blur-[var(--blur-heavy)]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%)",
          }}
        />
      </div>

      <PageContainer className="relative flex min-h-[92svh] items-center py-24 xl:py-0">
        <div className="grid w-full grid-cols-1 items-center gap-12 xl:grid-cols-[9fr_11fr] xl:gap-16">
          {/* content */}
          <HeroStagger className="flex min-w-0 flex-col gap-6 sm:gap-8">
            <HeroStaggerItem>
              <span className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                <Label className="uppercase text-text-muted">
                  Design with Purpose
                </Label>
              </span>
            </HeroStaggerItem>

            <HeroStaggerItem>
              <Display as="h1" className="text-balance text-text-primary">
                Websites that earn trust before your first conversation.
              </Display>
            </HeroStaggerItem>

            <HeroStaggerItem>
              <BodyLarge className="max-w-[42ch] text-text-secondary">
                We combine strategy, design and engineering to create digital
                experiences that strengthen credibility, elevate perception and
                help ambitious brands stand apart in competitive markets.
              </BodyLarge>
            </HeroStaggerItem>

            <HeroStaggerItem>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary">
                  Start Your Project
                </Button>
                <Button href="/work" variant="secondary">
                  View Selected Work
                </Button>
              </div>
            </HeroStaggerItem>

            <HeroStaggerItem>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-caption text-text-muted">
                {TRUST.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="size-1 rounded-round bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </HeroStaggerItem>
          </HeroStagger>

          {/* visual (content-first on mobile via natural DOM order) */}
          <HeroVisual className="min-w-0" />
        </div>
      </PageContainer>

      <ScrollIndicator />
    </section>
  );
}
