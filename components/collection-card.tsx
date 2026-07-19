import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Collection } from "@/data/types";

type CollectionCardProps = {
  collection: Collection;
};

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <article className="group">
      <Link href={`/gallery#${collection.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            alt={`${collection.title} by Sofia`}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={collection.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-75" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-ivory sm:p-6">
            <p className="text-[9px] font-bold uppercase tracking-editorial text-ivory/75">
              {collection.itemCount} photos
            </p>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-ivory/35 bg-ink/10 backdrop-blur transition-colors group-hover:bg-ivory group-hover:text-ink">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-ink/15 py-5">
          <div>
            <h3 className="font-display text-3xl leading-none text-ink">{collection.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-taupe">{collection.description}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
