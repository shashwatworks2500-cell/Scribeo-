"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#0b0b0d",
          color: "#ffffff",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div style={{ display: "grid", gap: "16px", justifyItems: "center" }}>
          <h2 style={{ fontSize: "2rem", margin: 0 }}>Something went wrong.</h2>
          <p style={{ color: "#b8bdc7", margin: 0 }}>
            Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              height: 52,
              padding: "0 32px",
              borderRadius: 999,
              border: "none",
              background: "#d4af37",
              color: "#0b0b0d",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          {error.digest ? (
            <p style={{ color: "#646973", fontSize: "0.875rem", margin: 0 }}>
              Reference: {error.digest}
            </p>
          ) : null}
        </div>
      </body>
    </html>
  );
}
