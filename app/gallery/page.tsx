import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PhotoCard } from "@/components/photo-card";
import { categories, gallery } from "@/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore Sofia Hub fashion, lifestyle, and photography collections.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        description="A visual diary of refined looks, quiet moments, and beautiful light—curated across Sofia's signature collections."
        eyebrow="The visual journal"
        title="Gallery"
      />
      <section className="section-space bg-ivory">
        <div className="page-shell">
          <div className="mb-10 flex min-w-0 flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                className="min-w-0 border border-ink/15 px-3 py-3 text-[9px] font-bold uppercase tracking-editorial text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory sm:px-4"
                href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
                key={category}
              >
                {category}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] items-start gap-3 min-[390px]:gap-4 lg:grid-cols-3" data-gallery-grid>
            {gallery.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
