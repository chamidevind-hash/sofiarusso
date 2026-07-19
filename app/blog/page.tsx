import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { EmailSignup } from "@/components/email-signup";
import { PageHero } from "@/components/page-hero";
import { posts } from "@/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Sofia Hub style notes, photography ideas, and modern lifestyle inspiration.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        description="Notes on personal style, thoughtful photography, and the small choices that make an image feel beautifully composed."
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
        <div className="page-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne">New stories weekly</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl">Stay close to the journal.</h2>
          </div>
          <EmailSignup compact theme="dark" />
        </div>
      </section>
    </>
  );
}
