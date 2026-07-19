import type { Metadata } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sofia Hub — Style & Digital Collections",
    template: "%s | Sofia Hub",
  },
  description: "Style, lifestyle, and exclusive digital collections from Sofia, a fictional AI lifestyle creator.",
  keywords: ["Sofia Hub", "AI creator", "fashion inspiration", "lifestyle", "wallpapers", "digital collections"],
  authors: [{ name: "Sofia Hub" }],
  creator: "Sofia Hub",
  openGraph: {
    title: "Sofia Hub",
    description: "Style, lifestyle, and exclusive digital collections.",
    type: "website",
    locale: "en_US",
    siteName: "Sofia Hub",
    images: [{ url: "/images/sofia-hero.webp", width: 1024, height: 1536, alt: "Sofia Hub editorial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofia Hub",
    description: "Style, lifestyle, and exclusive digital collections.",
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
