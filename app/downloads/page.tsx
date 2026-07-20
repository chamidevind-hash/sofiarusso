import type { Metadata } from "next";
import Image from "next/image";
import { sofiaWallpapers } from "@/data/sofia-wallpapers";

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

        <section className="mt-7 grid min-w-0 gap-4 min-[380px]:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-3">
          {sofiaWallpapers.map((wallpaper, index) => (
            <article className="rounded-[22px] border border-white/10 bg-[#17171a] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.24)]" key={wallpaper.id}>
              <div className="mx-auto max-w-[210px] rounded-[30px] border border-white/10 bg-black p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[24px] bg-[#202024]">
                  <Image
                    alt={`${wallpaper.title} Sofia phone wallpaper preview`}
                    className="object-cover"
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 45vw, 280px"
                    src={wallpaper.preview}
                  />
                </div>
              </div>
              <div className="pt-4">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="truncate text-[16px] font-black">{wallpaper.title}</h2>
                  <span className="shrink-0 rounded-full bg-white/8 px-2 py-1 text-[10px] font-bold text-white/60">{wallpaper.category}</span>
                </div>
                {wallpaper.dimensions ? <p className="mt-1 text-[12px] text-white/48">{wallpaper.dimensions}</p> : null}
                <div className="mt-4 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-2">
                  <a className="rounded-full bg-white px-3 py-2 text-center text-[12px] font-black text-[#101012]" download href={wallpaper.download}>
                    Download
                  </a>
                  <a className="rounded-full border border-white/10 bg-white/8 px-2 py-2 text-center text-[12px] font-black text-white min-[390px]:px-3" href={wallpaper.download} rel="noopener noreferrer" target="_blank">
                    Open Full Size
                  </a>
                </div>
              </div>
            </article>
          ))}
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
