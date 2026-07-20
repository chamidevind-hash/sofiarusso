import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SofiaIcon } from "@/components/sofia-icon";

const fourthwallUrl = process.env.NEXT_PUBLIC_FOURTHWALL_URL ?? "https://fourthwall.com/";
const coffeeUrl = process.env.NEXT_PUBLIC_PAYPAL_COFFEE_URL ?? "https://www.paypal.me/SofiaRusso/5USD";

export const metadata: Metadata = {
  title: "Enter SofiaHub - Sofia Russo",
  description: "Explore Sofia's latest virtual collections, HD wallpapers, official merchandise and exclusive creator updates.",
  alternates: { canonical: "/join" },
  openGraph: {
    title: "Enter SofiaHub - Sofia Russo",
    description: "Explore Sofia's latest virtual collections, HD wallpapers, official merchandise and exclusive creator updates.",
    images: [{ url: "/images/sofia-wallpaper-preview.webp", width: 2048, height: 1024, alt: "SofiaHub entrance" }],
  },
};

const features = [
  {
    title: "Exclusive Collections",
    text: "Explore curated Sofia photo stories and themed virtual collections.",
    icon: "images" as const,
    href: "/collections",
  },
  {
    title: "Latest Drops",
    text: "Discover Sofia's newest images and recently released collections.",
    icon: "sparkles" as const,
    href: "/collections/los-angeles-after-dark",
  },
  {
    title: "HD Phone Wallpapers",
    text: "Download Sofia wallpapers created for modern iPhone and Android screens.",
    icon: "phone" as const,
    href: "/downloads",
  },
  {
    title: "Official Merch",
    text: "Shop Sofia apparel, accessories, mugs, caps and collectible designs.",
    icon: "bag" as const,
    href: fourthwallUrl,
    external: true,
  },
];

const previewImages = [
  "/images/sofia-wallpaper-preview.webp",
  "/images/sofia-collection-hotel.webp",
  "/images/sofia-collection-mirror.webp",
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-8">
        <section className="relative min-h-[340px] overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] sm:min-h-[380px]">
          <Image
            alt="Sofia overlooking city lights at night"
            className="object-cover object-[58%_42%]"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            src="/images/sofia-wallpaper-preview.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-black/50 to-black/18" />
          <div className="absolute inset-x-0 bottom-0 max-w-2xl p-5 sm:p-7">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">Welcome to SofiaHub</p>
            <h1 className="mt-2 text-[34px] font-black leading-9 tracking-normal sm:text-[48px] sm:leading-[1]">Enter Sofia's World</h1>
            <p className="mt-3 max-w-xl text-[14px] leading-6 text-white/74 sm:text-[16px]">
              Explore exclusive virtual collections, new weekly drops, HD phone wallpapers and Sofia's official merchandise.
            </p>
            <div className="mt-5 flex min-w-0 flex-wrap gap-3">
              <Link className="rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]" href="/collections/los-angeles-after-dark">
                View Latest Collection
              </Link>
              <Link className="rounded-full border border-white/12 bg-white/8 px-5 py-3 text-[13px] font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]" href="/downloads">
                Download Wallpapers
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[24px] font-black">Inside SofiaHub</h2>
          <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const card = (
                <>
                  <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-gradient-to-br from-[#ff4f91]/24 to-[#8b5cf6]/28 text-[#ff79aa]">
                    <SofiaIcon className="h-5 w-5" name={feature.icon} />
                  </span>
                  <span className="mt-4 block text-[16px] font-black">{feature.title}</span>
                  <span className="mt-2 block text-[13px] leading-5 text-white/62">{feature.text}</span>
                </>
              );

              return feature.external ? (
                <a className="rounded-[20px] border border-white/10 bg-[#17171a] p-4 transition hover:-translate-y-0.5 hover:bg-[#202024]" href={feature.href} key={feature.title} rel="noopener noreferrer" target="_blank">
                  {card}
                </a>
              ) : (
                <Link className="rounded-[20px] border border-white/10 bg-[#17171a] p-4 transition hover:-translate-y-0.5 hover:bg-[#202024]" href={feature.href} key={feature.title}>
                  {card}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-4 rounded-[24px] border border-white/10 bg-[#17171a] p-4 sm:grid-cols-[1fr_1.1fr] sm:p-5">
          <div className="self-center">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff6a5f]">Latest Drop</p>
            <h2 className="mt-2 text-[25px] font-black">Los Angeles After Dark</h2>
            <p className="mt-2 text-[14px] leading-6 text-white/66">
              A cinematic virtual collection inspired by luxury nights, city lights and Sofia's signature style.
            </p>
            <Link className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]" href="/collections/los-angeles-after-dark">
              Explore the Collection
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-2">
            {previewImages.map((src, index) => (
              <div className={`relative overflow-hidden rounded-[18px] ${index === 0 ? "col-span-2 aspect-[4/5]" : "aspect-[4/5]"}`} key={src}>
                <Image alt="Sofia latest drop preview" className="object-cover" fill sizes="(max-width: 640px) 33vw, 220px" src={src} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[24px] bg-gradient-to-br from-[#8b5cf6] via-[#ff4f91] to-[#ff6a5f] p-5 text-white">
          <h2 className="text-[22px] font-black">Support Sofia's next collection</h2>
          <p className="mt-2 text-[14px] leading-6 text-white/78">Help create new virtual locations, outfits and visual stories.</p>
          <a className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]" href={coffeeUrl} rel="noopener noreferrer" target="_blank">
            Buy Sofia a Coffee - $5
          </a>
          <p className="mt-3 text-[11px] text-white/68">Sofia is an AI virtual creator. Support is voluntary.</p>
        </section>
      </main>
    </div>
  );
}
