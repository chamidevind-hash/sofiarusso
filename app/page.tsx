import type { Metadata } from "next";
import Image from "next/image";
import { SofiaFeaturedCard } from "@/components/sofia-featured-card";
import { SofiaFooter } from "@/components/sofia-footer";
import { SofiaImageGrid } from "@/components/sofia-image-grid";
import { SofiaLinkCard } from "@/components/sofia-link-card";
import { SofiaMerchSection } from "@/components/sofia-merch-section";
import { SofiaProfileCover } from "@/components/sofia-profile-cover";
import { SofiaProfileInfo, SofiaStatsRow } from "@/components/sofia-profile-info";
import { SofiaSocialIcons } from "@/components/sofia-social-icons";
import { SofiaSupportCard } from "@/components/sofia-support-card";
import { sofiaLinks } from "@/data/sofia-links";

export const metadata: Metadata = {
  title: "SofiaHub - Sofia's Official Links",
  description: "Explore Sofia's exclusive virtual creator collections, wallpapers, social profiles and latest updates.",
  openGraph: {
    title: "SofiaHub - Sofia's Official Links",
    description: "Explore Sofia's exclusive virtual creator collections, wallpapers, social profiles and latest updates.",
    images: [{ url: "/images/sofia-wallpaper-preview.webp", width: 2048, height: 1024, alt: "SofiaHub official links" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SofiaHub - Sofia's Official Links",
    description: "Explore Sofia's exclusive virtual creator collections, wallpapers, social profiles and latest updates.",
    images: ["/images/sofia-wallpaper-preview.webp"],
  },
};

export default function HomePage() {
  const primaryLinks = sofiaLinks.slice(0, 4);
  const secondaryLinks = sofiaLinks.slice(4);

  return (
    <section className="sofia-bio-page relative isolate min-h-screen overflow-x-hidden overflow-y-visible bg-[var(--page-bg)] text-[var(--text-primary)]">
      <div className="pointer-events-none fixed inset-0 hidden overflow-hidden sm:block" aria-hidden="true">
        <Image
          alt=""
          className="scale-110 object-cover opacity-[0.12] blur-md"
          fill
          priority
          sizes="100vw"
          src="/images/sofia-wallpaper-preview.webp"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,79,145,0.18),transparent_34%),linear-gradient(180deg,rgba(11,11,13,0.72),#0b0b0d_68%)]" />
      </div>

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[520px] bg-[var(--page-bg)] shadow-none sm:my-6 sm:min-h-[calc(100svh-48px)] sm:rounded-[30px] sm:border sm:border-white/10 sm:shadow-[0_28px_90px_rgba(0,0,0,0.52)]">
        <SofiaProfileCover />

        <div className="px-4">
          <SofiaProfileInfo />
          <SofiaSocialIcons />

          <div className="mt-1.5 grid gap-2.5 sm:mt-3.5 sm:gap-3">
            {primaryLinks.map((link) => (
              <SofiaLinkCard key={link.title} link={link} />
            ))}
          </div>

          <SofiaStatsRow />

          <div className="mt-6 sm:mt-7">
            <SofiaFeaturedCard />
          </div>

          <div className="mt-6 flex items-center justify-between sm:mt-7">
            <h2 className="text-[17px] font-extrabold leading-6 text-[var(--text-primary)]">Explore Sofia's world</h2>
            <span className="text-[12px] font-bold leading-5 text-[var(--text-secondary)]">Latest</span>
          </div>

          <div className="mt-3 grid gap-2.5 sm:gap-3">
            {secondaryLinks.map((link) => (
              <SofiaLinkCard key={link.title} link={link} />
            ))}
          </div>

          <SofiaMerchSection />
          <SofiaImageGrid />
          <SofiaSupportCard />
          <SofiaFooter />
        </div>
      </div>
    </section>
  );
}
