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

const membershipPackages = [
  {
    name: "Sofia Insider",
    price: "$9.99",
    cadence: "/month",
    features: ["All members-only photo collections", "HD wallpapers", "New monthly drops", "Member voting"],
    buttonLabel: "Join Insider",
    paypalUrl: process.env.NEXT_PUBLIC_PAYPAL_INSIDER_URL,
  },
  {
    name: "Sofia VIP",
    price: "$19.99",
    cadence: "/month",
    badge: "Most Popular",
    features: [
      "Everything in Sofia Insider",
      "Extra exclusive collections",
      "Early access to new drops",
      "Priority member requests",
      "Bonus wallpapers",
    ],
    buttonLabel: "Join VIP",
    paypalUrl: process.env.NEXT_PUBLIC_PAYPAL_VIP_URL,
    featured: true,
  },
  {
    name: "Lifetime Access",
    price: "$59",
    cadence: "one-time",
    features: ["Permanent access to current collections", "Future wallpaper collections", "No monthly payment", "One-time purchase"],
    buttonLabel: "Get Lifetime Access",
    paypalUrl: process.env.NEXT_PUBLIC_PAYPAL_LIFETIME_URL,
  },
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

        <section className="mt-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">Membership</p>
            <h2 className="mt-2 text-[30px] font-black leading-9 sm:text-[42px] sm:leading-[1]">Choose Your Access</h2>
            <p className="mt-3 text-[15px] leading-6 text-white/66">
              Unlock Sofia's private collections, exclusive wallpapers and new member-only drops.
            </p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {membershipPackages.map((membershipPackage) => (
              <article
                className={`relative flex min-h-full flex-col rounded-[24px] border p-5 shadow-[0_22px_60px_rgba(0,0,0,0.26)] ${
                  membershipPackage.featured
                    ? "border-[#ff4f91]/60 bg-gradient-to-b from-[#24151d] to-[#17171a] ring-1 ring-[#ff4f91]/35"
                    : "border-white/10 bg-[#17171a]"
                }`}
                key={membershipPackage.name}
              >
                {membershipPackage.badge ? (
                  <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-normal text-[#101012]">
                    {membershipPackage.badge}
                  </span>
                ) : null}

                <div>
                  <h3 className="pr-24 text-[21px] font-black">{membershipPackage.name}</h3>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-[38px] font-black leading-none tracking-tight">{membershipPackage.price}</span>
                    <span className="pb-1 text-[13px] font-bold text-white/54">{membershipPackage.cadence}</span>
                  </div>
                </div>

                <ul className="mt-5 grid gap-3 text-[13px] leading-5 text-white/68">
                  {membershipPackage.features.map((feature) => (
                    <li className="flex gap-2" key={feature}>
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4f91]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-2">
                  {membershipPackage.paypalUrl ? (
                    <a
                      className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[13px] font-black transition hover:-translate-y-0.5 ${
                        membershipPackage.featured ? "bg-white text-[#101012]" : "border border-white/12 bg-white/8 text-white hover:bg-white/12"
                      }`}
                      href={membershipPackage.paypalUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {membershipPackage.buttonLabel}
                    </a>
                  ) : (
                    <button
                      className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[13px] font-black text-white/42"
                      disabled
                      type="button"
                    >
                      Payment link unavailable
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-[12px] leading-5 text-white/58">
            Payments are processed securely through PayPal. Access instructions will be sent after payment.
          </p>
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
          <p className="mt-3 text-[11px] text-white/68">Sofia is a virtual creator. Support is voluntary.</p>
        </section>
      </main>
    </div>
  );
}
