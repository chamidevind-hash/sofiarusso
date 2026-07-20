import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sofiarusso.vip";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SofiaRusso - SofiaHub",
    template: "%s | SofiaRusso",
  },
  description: "Virtual Sofia Russo collections, HD phone wallpapers, official merchandise and creator updates.",
  keywords: ["Sofia Russo", "SofiaHub", "AI creator", "wallpapers", "digital collections"],
  authors: [{ name: "SofiaRusso" }],
  creator: "SofiaRusso",
  openGraph: {
    title: "SofiaRusso",
    description: "Virtual Sofia Russo collections, HD phone wallpapers and creator updates.",
    type: "website",
    locale: "en_US",
    siteName: "SofiaRusso",
    images: [{ url: "/images/sofia-hero.webp", width: 1024, height: 1536, alt: "SofiaRusso editorial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SofiaRusso",
    description: "Virtual Sofia Russo collections, HD phone wallpapers and creator updates.",
    images: ["/images/sofia-hero.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
