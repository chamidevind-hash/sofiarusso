import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ServiceWorkerCleanup } from "@/components/service-worker-cleanup";

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
    default: "SofiaRusso",
    template: "%s | SofiaRusso",
  },
  description: "Fashion, photography, lifestyle inspiration and free phone wallpapers from Sofia Russo.",
  keywords: ["Sofia Russo", "virtual creator", "wallpapers", "digital collections"],
  authors: [{ name: "SofiaRusso" }],
  creator: "SofiaRusso",
  openGraph: {
    title: "SofiaRusso",
    description: "Fashion, photography, lifestyle inspiration and free phone wallpapers from Sofia Russo.",
    type: "website",
    locale: "en_US",
    siteName: "SofiaRusso",
    images: [{ url: "/images/blog/capsule-wardrobe.webp", width: 1024, height: 1536, alt: "SofiaRusso editorial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SofiaRusso",
    description: "Fashion, photography, lifestyle inspiration and free phone wallpapers from Sofia Russo.",
    images: ["/images/blog/capsule-wardrobe.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        // EEA + UK + Switzerland:
        // deny advertising/analytics storage until the CMP provides a choice.
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          wait_for_update: 500,
          region: [
            'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR',
            'DE','GR','HU','IE','IT','LV','LT','LU','MT','NL',
            'PL','PT','RO','SK','SI','ES','SE',
            'IS','LI','NO',
            'GB','CH'
          ]
        });

        // All other regions keep the current Analytics behavior.
        gtag('consent', 'default', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'granted'
        });

        gtag('js', new Date());
      `,
    }}
  />

  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-89XNQDN557"
  />

  <script
    dangerouslySetInnerHTML={{
      __html: `
        gtag('config', 'G-89XNQDN557');
      `,
    }}
  />
</head>
      <body>
        <ServiceWorkerCleanup />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

