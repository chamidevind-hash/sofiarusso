"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";
import { SofiaIcon } from "@/components/sofia-icon";
import { privatePoolDayCollection, privatePoolDayPublicPreviews } from "@/data/private-pool-day";

const unlockedImages = [
  {
    src: privatePoolDayCollection.coverImage,
    alt: privatePoolDayCollection.coverAlt,
  },
  ...privatePoolDayPublicPreviews.slice(0, 2),
];

const lockedPreviews = privatePoolDayPublicPreviews.slice(2, 5);

export function PrivatePoolDayPublicView() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : unlockedImages[activeIndex];
  const currentIndex = activeIndex ?? 0;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyOverflowY = document.body.style.overflowY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlOverflowY = document.documentElement.style.overflowY;

    document.body.style.overflow = "hidden";
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overflowY = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % unlockedImages.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? index : (index - 1 + unlockedImages.length) % unlockedImages.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overflowY = previousBodyOverflowY;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overflowY = previousHtmlOverflowY;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <section className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
        <button
          aria-label={`Open preview: ${privatePoolDayCollection.coverAlt}`}
          className="group relative min-h-[520px] cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-[#17171a] text-left shadow-[0_24px_70px_rgba(0,0,0,0.32)] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
          onClick={() => setActiveIndex(0)}
          type="button"
        >
          <Image
            alt={privatePoolDayCollection.coverAlt}
            className="object-cover object-[50%_30%] transition duration-500 group-hover:scale-[1.025]"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 440px"
            src={privatePoolDayCollection.coverImage}
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-black/24 to-black/8" />
          <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-normal text-[#101012] shadow-[0_8px_22px_rgba(0,0,0,0.2)]">
            <SofiaIcon className="h-3.5 w-3.5" name="lock" />
            {privatePoolDayCollection.badge}
          </div>
        </button>

        <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">{privatePoolDayCollection.badge}</p>
            <h1 className="mt-3 text-[36px] font-black leading-10 sm:text-[56px] sm:leading-[1]">{privatePoolDayCollection.title}</h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/68 sm:text-[16px]">{privatePoolDayCollection.description}</p>
            <p className="mt-4 text-[13px] font-bold text-white/72">{privatePoolDayCollection.countLabel}</p>
          </div>

          <div className="mt-7">
            <div className="grid grid-cols-2 gap-3">
              {privatePoolDayPublicPreviews.slice(0, 2).map((image, index) => (
                <button
                  aria-label={`Open preview: ${image.alt}`}
                  className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#202024] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
                  key={image.src}
                  onClick={() => setActiveIndex(index + 1)}
                  type="button"
                >
                  <Image
                    alt={image.alt}
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    src={image.src}
                    unoptimized
                  />
                </button>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {lockedPreviews.map((image) => (
                <div
                  aria-label={`Locked preview: ${image.alt}`}
                  className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-white/10 bg-[#202024]"
                  key={image.src}
                >
                  <Image
                    alt={image.alt}
                    className="scale-110 object-cover blur-md"
                    fill
                    sizes="(max-width: 1024px) 33vw, 180px"
                    src={image.src}
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/78 via-black/48 to-black/20" />
                  <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#101012] shadow-[0_10px_28px_rgba(0,0,0,0.32)]">
                    <SofiaIcon className="h-5 w-5" name="lock" />
                  </span>
                </div>
              ))}
            </div>
            <div className="relative z-20">
              <p className="mt-3 text-center text-[12px] font-bold text-white/62">{privatePoolDayCollection.lockedCountLabel}</p>
              <p className="mt-2 text-center text-[12px] leading-5 text-white/54">
                Choose a membership package to unlock the complete collection.
              </p>
              <div className="mt-6 flex flex-col gap-3 min-[390px]:flex-row">
                <Link className="relative z-20 inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]" href={privatePoolDayCollection.joinHref}>
                  {privatePoolDayCollection.unlockText}
                </Link>
                <Link className="relative z-20 inline-flex flex-1 items-center justify-center rounded-full border border-white/12 bg-white/8 px-5 py-3 text-[13px] font-black text-white" href={privatePoolDayCollection.joinHref}>
                  {privatePoolDayCollection.signInText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeImage ? (
        <div aria-modal="true" className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4" role="dialog">
          <button
            aria-label="Close image viewer"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#101012] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
            onClick={() => setActiveIndex(null)}
            type="button"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous image"
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
            onClick={() => setActiveIndex((currentIndex - 1 + unlockedImages.length) % unlockedImages.length)}
            type="button"
          >
            &lt;
          </button>
          <div className="relative h-[78svh] w-full max-w-5xl">
            <Image alt={activeImage.alt} className="object-contain" fill sizes="100vw" src={activeImage.src} unoptimized />
          </div>
          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
            onClick={() => setActiveIndex((currentIndex + 1) % unlockedImages.length)}
            type="button"
          >
            &gt;
          </button>
        </div>
      ) : null}
    </>
  );
}
