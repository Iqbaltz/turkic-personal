import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const title = "Muhammad Iqbal · Software Engineer";
const description =
  "Muhammad Iqbal is a software engineer in Jakarta, Indonesia, building web apps with React, Next.js, TypeScript and .NET.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  authors: [{ name: "Muhammad Iqbal" }],
  openGraph: { title, description, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#FBF7EF",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-sand-50 font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sand-50"
        >
          Skip to content
        </a>
        <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
          <defs>
            <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
              <path d="M0 1V0.42C0 0.22 0.25 0.1 0.5 0C0.75 0.1 1 0.22 1 0.42V1Z" />
            </clipPath>
          </defs>
        </svg>
        <Nav />
        {children}
      </body>
    </html>
  );
}
