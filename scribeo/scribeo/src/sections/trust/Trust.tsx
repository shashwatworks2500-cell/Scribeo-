import { Gauge, Gem, TrendingUp } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { PageContainer, Section } from "@/components/primitives/layout";
import { Body, H2, H4, Label } from "@/components/primitives/typography";

const PILLARS = [
  {
    icon: Gem,
    title: "Premium Design",
    body: "Every decision is intentional — spacing, typography and motion working together to feel considered, never decorated.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    body: "Speed is part of the experience. Interfaces load fast, respond instantly and stay smooth on every device.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    body: "Foundations that scale — architected to support new pages, products and ambitions without a rebuild.",
  },
];

/** Trust / credibility section. Scroll-triggered reveals matching the Hero's
 *  motion language. Credibility is communicated through the brand's approach —
 *  no fabricated metrics, logos or testimonials. */
export function Trust() {
  return (
    <Section>
      <PageContainer>
        <Stagger className="flex max-w-[52ch] flex-col gap-5">
          <StaggerItem>
            <span className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              <Label className="uppercase text-text-muted">How we work</Label>
            </span>
          </StaggerItem>
          <StaggerItem>
            <H2 className="text-balance text-text-primary">
              Credibility, built into every detail.
            </H2>
          </StaggerItem>
          <StaggerItem>
            <Body className="text-text-secondary">
              We don’t ask for trust. We design for it — through strategy, craft
              and engineering that make quality visible from the first moment.
            </Body>
          </StaggerItem>
        </Stagger>

        <Stagger className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:mt-24 lg:gap-12">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <StaggerItem
              key={title}
              className="flex flex-col gap-4 border-t border-border-subtle pt-8"
            >
              <Icon
                aria-hidden="true"
                strokeWidth={2}
                className="size-6 text-text-secondary"
              />
              <H4 className="text-text-primary">{title}</H4>
              <Body className="text-text-secondary">{body}</Body>
            </StaggerItem>
          ))}
        </Stagger>
      </PageContainer>
    </Section>
  );
}
