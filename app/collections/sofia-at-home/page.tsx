import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SofiaIcon } from "@/components/sofia-icon";

const sofiaAtHomeImages = [
  {
    alt: "Sofia relaxing at home in a casual outfit",
    src: "/images/wallpapers/sofia-at-home/sofia-at-home-01.webp",
  },
  {
    alt: "Sofia in a natural at-home lifestyle moment",
    src: "/images/wallpapers/sofia-at-home/sofia-at-home-02.webp",
  },
  {
    alt: "Sofia taking a casual at-home photo",
    src: "/images/wallpapers/sofia-at-home/sofia-at-home-03.webp",
  },
  {
    alt: "Sofia in an everyday at-home moment",
    src: "/images/wallpapers/sofia-at-home/sofia-at-home-04.webp",
  },
  {
    alt: "Sofia in a private lifestyle photo at home",
    src: "/images/wallpapers/sofia-at-home/sofia-at-home-05.webp",
  },
  {
    alt: "Sofia in a relaxed at-home outfit",
    src: "/images/wallpapers/sofia-at-home/sofia-at-home-06.webp",
  },
  {
    alt: "Sofia in a quiet at-home lifestyle portrait",
    src: "/images/wallpapers/sofia-at-home/sofia-at-home-07.webp",
  },
];

export const metadata: Metadata = {
  title: "Sofia At Home - Sofia Russo",
  description: "Natural everyday moments, casual outfits and private lifestyle photos from Sofia At Home.",
  alternates: { canonical: "/collections/sofia-at-home" },
  openGraph: {
    title: "Sofia At Home - Sofia Russo",
    description: "Natural everyday moments, casual outfits and private lifestyle photos from Sofia At Home.",
    images: [{ url: sofiaAtHomeImages[0].src, width: 1024, height: 1536, alt: sofiaAtHomeImages[0].alt }],
  },
};

export default function SofiaAtHomePage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <section className="rounded-[28px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">Collection</p>
          <h1 className="mt-3 text-[36px] font-black leading-10 sm:text-[56px] sm:leading-[1]">Sofia At Home</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/68 sm:text-[16px]">
            Natural everyday moments, casual outfits and private lifestyle photos.
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[390px]:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]"
              href="/join"
            >
              Unlock More Collections
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/8 px-5 py-3 text-[13px] font-black text-white"
              href="/downloads"
            >
              Download Wallpapers
            </Link>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {sofiaAtHomeImages.map((image, index) => {
            const locked = index > 2;

            return (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 bg-[#202024]" key={image.src}>
                <Image
                  alt={image.alt}
                  className={`object-cover ${locked ? "scale-110 blur-md" : ""}`}
                  fill
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  src={image.src}
                  unoptimized
                />
                {locked ? (
                  <>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/86 via-black/52 to-black/24" />
                    <div className="pointer-events-none absolute inset-0 grid place-items-center p-3 text-center">
                      <div>
                        <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white text-[#101012]">
                          <SofiaIcon className="h-5 w-5" name="lock" />
                        </span>
                        <p className="mt-2 text-[11px] font-black uppercase tracking-[0.12em] text-white">Members Only</p>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
