import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { PageHero } from "@/components/page-hero";
import { posts } from "@/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical fashion, smartphone photography and everyday lifestyle guides from SofiaRusso.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        description="Practical guides for personal style, smartphone photography and everyday visual creativity."
        eyebrow="The Sofia journal"
        title="Blog"
      />

      <section className="section-space bg-ivory">
        <div className="page-shell">
          <BlogCard featured post={posts[0]} />

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {posts.slice(1).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ivory sm:py-24">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne">
              Explore more
            </p>

            <h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl">
              Practical ideas, without the clutter.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/70 sm:text-base">
              Browse visual collections, photography guides and free phone
              wallpapers created around the SofiaRusso world.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/collections"
                className="inline-flex min-h-12 items-center justify-center bg-ivory px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-ink"
              >
                Explore Collections
              </Link>

              <Link
                href="/downloads"
                className="inline-flex min-h-12 items-center justify-center border border-ivory/30 px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-ivory"
              >
                Free Wallpapers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}