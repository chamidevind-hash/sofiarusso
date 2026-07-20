import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredCollection, losAngelesAfterDarkImages } from "@/data/sofia-collection";
import { collections } from "@/data";

export const metadata: Metadata = {
  title: "Sofia Collections - Sofia Russo",
  description: "Browse Sofia Russo's virtual photo collections, visual diaries and latest releases.",
  alternates: { canonical: "/collections" },
  openGraph: {
    title: "Sofia Collections - Sofia Russo",
    description: "Browse Sofia Russo's virtual photo collections, visual diaries and latest releases.",
    images: [{ url: featuredCollection.image, width: 2048, height: 1024, alt: "Sofia collections" }],
  },
};

export default function CollectionsPage() {
  const comingSoon = collections.filter((collection) => collection.image).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <header className="max-w-2xl">
          <h1 className="text-[34px] font-black leading-10 sm:text-[48px] sm:leading-[1]">Sofia Collections</h1>
          <p className="mt-3 text-[15px] leading-6 text-white/64">Curated virtual photo stories, luxury nights and new visual drops.</p>
        </header>

        <Link className="group mt-7 grid overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:grid-cols-[1.15fr_0.85fr]" href={featuredCollection.href}>
          <div className="relative min-h-[230px] sm:min-h-[360px]">
            <Image alt="Los Angeles After Dark Sofia collection" className="object-cover object-[58%_42%] transition duration-500 group-hover:scale-[1.025]" fill priority sizes="(max-width: 768px) 100vw, 700px" src={featuredCollection.image} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          </div>
          <div className="flex flex-col justify-end p-5 sm:p-7">
            <span className="w-fit rounded-full bg-white px-3 py-1 text-[10px] font-black text-[#101012]">LATEST</span>
            <h2 className="mt-4 text-[28px] font-black leading-8">{featuredCollection.title}</h2>
            <p className="mt-3 text-[14px] leading-6 text-white/66">{featuredCollection.description}</p>
            <p className="mt-4 text-[12px] font-bold text-white/74">{losAngelesAfterDarkImages.length} images</p>
          </div>
        </Link>

        <section className="mt-8">
          <h2 className="text-[20px] font-black">More Sofia stories</h2>
          <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {comingSoon.map((collection) => (
              <article className="overflow-hidden rounded-[20px] border border-white/10 bg-[#17171a]" key={collection.slug}>
                <div className="relative aspect-[4/5]">
                  <Image alt={`${collection.title} preview`} className="object-cover" fill sizes="(max-width: 640px) 50vw, 260px" src={collection.image} />
                  <div className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-black text-white backdrop-blur">Coming Soon</div>
                </div>
                <div className="p-4">
                  <h3 className="text-[15px] font-black">{collection.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[12.5px] leading-5 text-white/58">{collection.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
