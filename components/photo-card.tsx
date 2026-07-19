import Image from "next/image";
import type { GalleryPhoto } from "@/data/types";

type PhotoCardProps = {
  photo: GalleryPhoto;
};

export function PhotoCard({ photo }: PhotoCardProps) {
  const slug = photo.category.toLowerCase().replaceAll(" ", "-");

  return (
    <figure className="group scroll-mt-32" id={slug}>
      <div
        className={`relative overflow-hidden bg-cream ${
          photo.orientation === "tall" ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <Image
          alt={`${photo.title}, ${photo.category}`}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={photo.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-ivory sm:p-6">
          <p className="text-[9px] font-bold uppercase tracking-editorial text-ivory/70">{photo.category}</p>
          <h3 className="mt-2 font-display text-3xl leading-none">{photo.title}</h3>
        </figcaption>
      </div>
    </figure>
  );
}
