import type { Metadata } from "next";
import Image from "next/image";
import {
  sofiaWallpapers,
  type SofiaWallpaper,
} from "@/data/sofia-wallpapers";

export const metadata: Metadata = {
  title: "Free HD Phone Wallpapers | Sofia Russo",
  description:
    "Download free city, minimal and lifestyle phone wallpapers for iPhone and Android.",
  alternates: {
    canonical: "/downloads",
  },
  openGraph: {
    title: "Free HD Phone Wallpapers | Sofia Russo",
    description:
      "Free modern phone wallpapers for iPhone and Android.",
    images: [
      {
        url: "/downloads/wallpapers/sofia-city-lights-wallpaper-preview.webp",
        width: 1080,
        height: 1920,
        alt: "City lights phone wallpaper",
      },
    ],
  },
};

function WallpaperCard({ wallpaper }: { wallpaper: SofiaWallpaper }) {
  return (
    <article className="rounded-[22px] border border-white/10 bg-[#17171a] p-3">
      <div className="mx-auto max-w-[220px] rounded-[28px] border border-white/10 bg-black p-2">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-[#202024]">
          <Image
            alt={wallpaper.alt}
            className="object-cover"
            fill
            loading="lazy"
            sizes="(max-width: 640px) 46vw, 240px"
            src={wallpaper.preview}
          />
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-[16px] font-black">
            {wallpaper.title}
          </h2>

          <span className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] font-bold text-white/60">
            {wallpaper.category}
          </span>
        </div>

        {wallpaper.description ? (
          <p className="mt-2 text-[12.5px] leading-5 text-white/55">
            {wallpaper.description}
          </p>
        ) : null}

        <p className="mt-2 text-[11px] text-white/40">
          {wallpaper.dimensions}
        </p>

        <a
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-3 py-2.5 text-[12px] font-black text-[#101012] transition hover:-translate-y-0.5"
          download
          href={wallpaper.download}
        >
          Download Free HD
        </a>
      </div>
    </article>
  );
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <header className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#4f8cff]">
            Free Downloads
          </p>

          <h1 className="mt-2 text-[36px] font-black leading-10 sm:text-[52px] sm:leading-[1]">
            HD Phone Wallpapers
          </h1>

          <p className="mt-4 text-[15px] leading-7 text-white/66">
            A collection of clean city, interior and minimal wallpapers
            designed for modern iPhone and Android screens.
          </p>

          <p className="mt-4 rounded-[16px] border border-white/10 bg-white/6 px-4 py-3 text-[12px] leading-5 text-white/58">
            Wallpapers are free for personal use. Please do not resell,
            redistribute or claim the artwork as your own.
          </p>
        </header>

        <section className="mt-9">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
              Wallpaper Collection
            </p>

            <h2 className="mt-2 text-[26px] font-black">
              Choose your style
            </h2>

            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/58">
              Download a wallpaper and set it as your lock screen or home
              screen.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {sofiaWallpapers.map((wallpaper) => (
              <WallpaperCard
                key={wallpaper.id}
                wallpaper={wallpaper}
              />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[24px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
          <h2 className="text-[22px] font-black">
            How to use your wallpaper
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[16px] bg-white/6 p-4">
              <span className="text-[12px] font-black text-white">
                01
              </span>

              <h3 className="mt-2 font-bold">
                Download
              </h3>

              <p className="mt-1 text-[12.5px] leading-5 text-white/55">
                Choose a wallpaper and download the full-size image.
              </p>
            </div>

            <div className="rounded-[16px] bg-white/6 p-4">
              <span className="text-[12px] font-black text-white">
                02
              </span>

              <h3 className="mt-2 font-bold">
                Save
              </h3>

              <p className="mt-1 text-[12.5px] leading-5 text-white/55">
                Save the downloaded image to your phone photo library.
              </p>
            </div>

            <div className="rounded-[16px] bg-white/6 p-4">
              <span className="text-[12px] font-black text-white">
                03
              </span>

              <h3 className="mt-2 font-bold">
                Set
              </h3>

              <p className="mt-1 text-[12.5px] leading-5 text-white/55">
                Set the image as your lock screen, home screen or both.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
