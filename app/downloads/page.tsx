import type { Metadata } from "next";
import Image from "next/image";
import { sofiaAtHomeDescription, sofiaAtHomeWallpapers, sofiaWallpapers } from "@/data/sofia-wallpapers";
import type { SofiaWallpaper } from "@/data/sofia-wallpapers";

export const metadata: Metadata = {
  title: "HD Sofia Phone Wallpapers - Sofia Russo",
  description: "Download Sofia Russo HD phone wallpapers for iPhone and Android devices.",
  alternates: { canonical: "/downloads" },
  openGraph: {
    title: "HD Sofia Phone Wallpapers - Sofia Russo",
    description: "Download Sofia Russo HD phone wallpapers for iPhone and Android devices.",
    images: [{ url: "/downloads/wallpapers/sofia-los-angeles-night-wallpaper.webp", width: 2048, height: 1024, alt: "Sofia phone wallpapers" }],
  },
};

type WallpaperCardProps = {
  wallpaper: SofiaWallpaper;
  featured?: boolean;
};

function WallpaperCard({ wallpaper, featured = false }: WallpaperCardProps) {
  return (
    <article className="min-w-0 rounded-[22px] border border-white/10 bg-[#17171a] p-2.5 shadow-[0_18px_48px_rgba(0,0,0,0.24)] min-[380px]:p-3">
      <div className="mx-auto max-w-[210px] rounded-[28px] border border-white/10 bg-black p-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] min-[380px]:p-2">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-[#202024]">
          <Image
            alt={wallpaper.alt}
            className="object-contain"
            fill
            loading="lazy"
            sizes={featured ? "(max-width: 640px) 46vw, (max-width: 1024px) 23vw, 240px" : "(max-width: 640px) 46vw, 260px"}
            src={wallpaper.preview}
          />
        </div>
      </div>
      <div className="pt-3 min-[380px]:pt-4">
        <div className="flex min-w-0 flex-col gap-1.5 min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between min-[390px]:gap-2">
          <h2 className="truncate text-[14px] font-black min-[380px]:text-[16px]">{wallpaper.title}</h2>
          <span className="w-fit shrink-0 rounded-full bg-white/8 px-2 py-1 text-[9px] font-bold text-white/60 min-[380px]:text-[10px]">
            {wallpaper.category}
          </span>
        </div>
        {wallpaper.dimensions ? <p className="mt-1 text-[11px] text-white/48 min-[380px]:text-[12px]">{wallpaper.dimensions}</p> : null}
        <a
          className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-2 py-2 text-center text-[11px] font-black text-[#101012] transition hover:-translate-y-0.5 min-[380px]:px-3 min-[380px]:text-[12px]"
          download
          href={wallpaper.download}
        >
          Download HD
        </a>
      </div>
    </article>
  );
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <header className="max-w-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#4f8cff]">Free Downloads</p>
          <h1 className="mt-2 text-[36px] font-black leading-10 sm:text-[52px] sm:leading-[1]">HD Phone Wallpapers</h1>
          <p className="mt-3 text-[15px] leading-6 text-white/66">Sofia wallpapers created for modern iPhone and Android screens.</p>
          <p className="mt-3 rounded-[16px] border border-white/10 bg-white/6 px-4 py-3 text-[12px] leading-5 text-white/58">
            For personal use only. Do not resell, redistribute or claim the artwork as your own.
          </p>
        </header>

        <section className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-[#ff4f91]/24 to-[#8b5cf6]/24 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#ff8cbd]">
                Sofia at Home
              </span>
              <h2 className="mt-3 text-[26px] font-black leading-8 sm:text-[34px]">Sofia at Home</h2>
              <p className="mt-2 text-[14px] leading-6 text-white/64">{sofiaAtHomeDescription}</p>
            </div>
          </div>

          <div className="mt-5 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {sofiaAtHomeWallpapers.map((wallpaper) => (
              <WallpaperCard featured key={wallpaper.id} wallpaper={wallpaper} />
            ))}
          </div>
        </section>

        <section className="mt-9">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-[22px] font-black">More Phone Wallpapers</h2>
              <p className="mt-1 text-[13px] text-white/54">Additional Sofia wallpapers for your lock screen.</p>
            </div>
          </div>

          <div className="mt-5 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {sofiaWallpapers.map((wallpaper) => (
              <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-white/10 bg-[#17171a] p-5">
          <h2 className="text-[22px] font-black">How to use your wallpaper</h2>
          <ol className="mt-4 grid gap-3 text-[13px] leading-5 text-white/66 sm:grid-cols-3">
            <li className="rounded-[16px] bg-white/6 p-4">
              <span className="mb-2 block text-[12px] font-black text-white">1.</span>
              Download the full-size image.
            </li>
            <li className="rounded-[16px] bg-white/6 p-4">
              <span className="mb-2 block text-[12px] font-black text-white">2.</span>
              Save it to your phone.
            </li>
            <li className="rounded-[16px] bg-white/6 p-4">
              <span className="mb-2 block text-[12px] font-black text-white">3.</span>
              Set it as your lock screen or home screen.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
