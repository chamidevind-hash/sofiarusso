import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SofiaIcon } from "@/components/sofia-icon";

const sofiaAtHomeImages = Array.from({ length: 12 }, (_, index) => ({
  alt: `Sofia At Home private photo ${index + 1}`,
  src: `/images/members/sofia-at-home-set-01/previews/sofia-at-home-back-${String(
    index + 1
  ).padStart(2, "0")}.webp`,
}));

export const metadata: Metadata = {
  title: "Sofia At Home - Sofia Russo",
  description:
    "Private at-home photo collection featuring unseen back-view and natural underwear photos from Sofia.",
  alternates: { canonical: "/collections/sofia-at-home" },
  openGraph: {
    title: "Sofia At Home - Sofia Russo",
    description:
      "Private at-home photo collection featuring unseen back-view and natural underwear photos from Sofia.",
    images: [
      {
        url: sofiaAtHomeImages[0].src,
        width: 1024,
        height: 1536,
        alt: sofiaAtHomeImages[0].alt,
      },
    ],
  },
};

export default function SofiaAtHomePage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <section className="rounded-[28px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">
            Private Collection
          </p>

          <h1 className="mt-3 text-[36px] font-black leading-10 sm:text-[56px] sm:leading-[1]">
            Sofia At Home
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/68 sm:text-[16px]">
            12 private at-home photos. Join to unlock the full collection.
          </p>

          <div className="mt-6 flex flex-col gap-3 min-[390px]:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]"
              href="/join"
            >
              Become a Member
            </Link>

            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/8 px-5 py-3 text-[13px] font-black text-white"
              href="/collections"
            >
              View Collections
            </Link>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {sofiaAtHomeImages.map((image, index) => (
            <Link
              href="/join"
              className="group relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 bg-[#202024]"
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                fill
                loading={index < 2 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                src={image.src}
                unoptimized
              />

              <div className="pointer-events-none absolute inset-0 bg-black/25" />

              <div className="pointer-events-none absolute inset-0 grid place-items-center p-3 text-center">
                <div>
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-white text-[#101012] shadow-lg">
                    <SofiaIcon className="h-5 w-5" name="lock" />
                  </span>

                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.12em] text-white">
                    Members Only
                  </p>

                  <p className="mt-1 text-[10px] text-white/70">
                    Tap to unlock
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-8 rounded-[24px] border border-white/10 bg-[#17171a] p-5 text-center sm:p-7">
          <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#ff4f91]">
            Members Only
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Unlock all 12 private photos
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/65">
            Join Sofia&apos;s private members area to view the complete
            collection and future exclusive releases.
          </p>

          <Link
            href="/join"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] font-black text-[#101012]"
          >
            Unlock This Collection
          </Link>
        </section>
      </main>
    </div>
  );
}