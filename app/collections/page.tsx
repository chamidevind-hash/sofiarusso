import type { Metadata } from "next";
import { CollectionCard } from "@/components/collection-card";
import { PageHero } from "@/components/page-hero";
import { collections } from "@/data";

export const metadata: Metadata = {
  title: "Collections",
  description: "Discover curated Sofia Hub fashion and lifestyle collections.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        description="Six distinct stories, each shaped by a mood, a place, and a considered approach to modern feminine style."
        eyebrow="Curated edits"
        title="Collections"
      />
      <section className="section-space bg-ivory">
        <div className="page-shell grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard collection={collection} key={collection.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
