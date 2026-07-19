import { Button } from "@/components/interactive";
import { PageContainer } from "@/components/primitives/layout";
import { BodyLarge, Display } from "@/components/primitives/typography";

export default function NotFound() {
  return (
    <PageContainer
      as="section"
      className="flex min-h-[70dvh] flex-col items-center justify-center gap-6 text-center"
    >
      <Display>404</Display>
      <BodyLarge className="text-text-secondary">
        This page could not be found.
      </BodyLarge>
      <Button href="/">Return home</Button>
    </PageContainer>
  );
}
