import Image from "next/image";
import type { DownloadPack } from "@/data/types";

type DownloadCardProps = {
  download: DownloadPack;
  priority?: boolean;
};

export function DownloadCard({ download, priority = false }: DownloadCardProps) {
  return (
    <article className="group bg-[#f3ecdf] p-3">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Image
          alt={`${download.title} preview`}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={download.image}
        />
        <span className="absolute left-4 top-4 bg-ivory px-3 py-2 text-[8px] font-bold uppercase tracking-editorial text-ink">
          {download.format}
        </span>
      </div>
      <div className="px-2 pb-2 pt-6">
        <h2 className="font-display text-4xl leading-none text-ink">{download.title}</h2>
        <p className="mt-4 min-h-14 text-sm leading-6 text-taupe">{download.description}</p>
        <button
          className="mt-6 flex h-12 w-full cursor-not-allowed items-center justify-center border border-ink/20 text-[10px] font-bold uppercase tracking-editorial text-ink/55"
          disabled
          type="button"
        >
          Coming Soon
        </button>
      </div>
    </article>
  );
}
