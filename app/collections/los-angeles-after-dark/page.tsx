import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SofiaCollectionGallery } from "@/components/sofia-collection-gallery";
import { featuredCollection, losAngelesAfterDarkImages } from "@/data/sofia-collection";

const fourthwallUrl = process.env.NEXT_PUBLIC_FOURTHWALL_URL ?? "https://fourthwall.com/";

export const metadata: Metadata = {
  title: "Los Angeles After Dark - Sofia Russo",
  description: "Explore Sofia Russo's Los Angeles After Dark virtual photo collection.",
  alternates: { canonical: "/collections/los-angeles-after-dark" },
  openGraph: {
    title: "Los Angeles After Dark - Sofia Russo",
    description: "Explore Sofia Russo's Los Angeles After Dark virtual photo collection.",
    images: [{ url: featuredCollection.image, width: 2048, height: 1024, alt: "Los Angeles After Dark" }],
  },
};

export default function LosAngelesAfterDarkPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-8">
        <section className="relative min-h-[400px] overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] sm:min-h-[520px]">
          <Image
            alt="Sofia Los Angeles After Dark collection hero"
            className="object-cover object-[58%_42%]"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            src={featuredCollection.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-black/48 to-black/18" />
          <div className="absolute inset-x-0 bottom-0 max-w-2xl p-5 sm:p-7">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">Latest Exclusive</p>
            <h1 className="mt-2 text-[36px] font-black leading-10 sm:text-[56px] sm:leading-[1]">Los Angeles After Dark</h1>
            <p className="mt-3 text-[14px] leading-6 text-white/72 sm:text-[16px]">
              A virtual night-time photo story inspired by Los Angeles views, elegant interiors and Sofia's signature style.
            </p>
            <p className="mt-3 w-fit rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-bold text-white/70">
              Sofia is a virtual creator.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-[24px] font-black">Collection Gallery</h2>
              <p className="mt-1 text-[13px] text-white/54">{losAngelesAfterDarkImages.length} images</p>
            </div>
          </div>
          <SofiaCollectionGallery images={losAngelesAfterDarkImages} />
        </section>

        <nav aria-label="Collection navigation" className="mt-8 grid gap-3 sm:grid-cols-3">
          <Link className="rounded-[18px] border border-white/10 bg-[#17171a] px-4 py-4 text-center text-[13px] font-black text-white transition hover:bg-[#202024]" href="/collections">
            Back to All Collections
          </Link>
          <Link className="rounded-[18px] border border-white/10 bg-[#17171a] px-4 py-4 text-center text-[13px] font-black text-white transition hover:bg-[#202024]" href="/downloads">
            Download Wallpapers
          </Link>
          <a className="rounded-[18px] bg-white px-4 py-4 text-center text-[13px] font-black text-[#101012] transition hover:-translate-y-0.5" href={fourthwallUrl} rel="noopener noreferrer" target="_blank">
            Shop Sofia Merch
          </a>
        </nav>
      </main>
    </div>
  );
}
