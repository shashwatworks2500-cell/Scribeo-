"use client";

import { useEffect } from "react";
import { buttonStyles } from "@/components/interactive/button-styles";
import { PageContainer } from "@/components/primitives/layout";
import { BodyLarge, H2 } from "@/components/primitives/typography";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report to monitoring here; never surface raw errors to users.
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <PageContainer
      as="section"
      className="flex min-h-[70dvh] flex-col items-center justify-center gap-6 text-center"
    >
      <H2>Something went wrong.</H2>
      <BodyLarge className="text-text-secondary">
        Please try again in a moment.
      </BodyLarge>
      <button type="button" onClick={reset} className={buttonStyles("primary")}>
        Try again
      </button>
    </PageContainer>
  );
}
