import Image from "next/image";
import type { GalleryPhoto } from "@/data/types";

type PhotoCardProps = {
  photo: GalleryPhoto;
};

export function PhotoCard({ photo }: PhotoCardProps) {
  const slug = photo.category.toLowerCase().replaceAll(" ", "-");

  return (
    <figure className="group min-w-0 scroll-mt-32" data-photo-card id={slug}>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-cream">
        <Image
          alt={`${photo.title}, ${photo.category}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 50vw, 33vw"
          src={photo.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <figcaption className="absolute inset-x-0 bottom-0 p-3 text-ivory sm:p-5">
          <p className="truncate text-[8px] font-bold uppercase tracking-editorial text-ivory/70 sm:text-[9px]">{photo.category}</p>
          <h3 className="mt-1 line-clamp-2 font-display text-xl leading-none sm:mt-2 sm:text-3xl">{photo.title}</h3>
        </figcaption>
      </div>
    </figure>
  );
}
