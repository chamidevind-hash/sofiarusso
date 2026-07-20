"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";
import type { SofiaCollectionImage } from "@/data/sofia-collection";

type SofiaCollectionGalleryProps = {
  images: SofiaCollectionImage[];
};

export function SofiaCollectionGallery({ images }: SofiaCollectionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const currentIndex = activeIndex ?? 0;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? index : (index - 1 + images.length) % images.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-2.5 sm:gap-3 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            aria-label={`Open image ${index + 1}: ${image.alt}`}
            className={`group relative overflow-hidden rounded-[18px] border border-white/10 bg-[#17171a] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91] ${
              image.aspect === "landscape" ? "col-span-2 aspect-[16/10] lg:col-span-2" : "aspect-[4/5]"
            }`}
            key={image.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <Image
              alt={image.alt}
              className="object-cover transition duration-500 group-hover:scale-[1.025]"
              fill
              loading={index < 2 ? "eager" : "lazy"}
              sizes={image.aspect === "landscape" ? "(max-width: 1024px) 100vw, 760px" : "(max-width: 640px) 50vw, 360px"}
              src={image.src}
            />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div aria-modal="true" className="fixed inset-0 z-[80] grid place-items-center bg-black/88 p-4" role="dialog">
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
            onClick={() => setActiveIndex((currentIndex - 1 + images.length) % images.length)}
            type="button"
          >
            &lt;
          </button>
          <div className="relative h-[78svh] w-full max-w-5xl">
            <Image alt={activeImage.alt} className="object-contain" fill sizes="100vw" src={activeImage.src} />
          </div>
          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
            onClick={() => setActiveIndex((currentIndex + 1) % images.length)}
            type="button"
          >
            &gt;
          </button>
        </div>
      ) : null}
    </>
  );
}
