import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import { Header, Footer, Loader } from "@/components/shell";
import { OrganizationJsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import "./globals.css";

/* Self-hosted at build time by next/font (no runtime third-party CDN). If
   fully-local woff2 subsets are preferred later, swap to next/font/local. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-dvh antialiased">
        <OrganizationJsonLd />
        <a
          href="#main"
          className="sr-only rounded-sm bg-surface-elevated px-4 py-2 text-text-primary focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200]"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Loader />
        </MotionProvider>
      </body>
    </html>
  );
}
