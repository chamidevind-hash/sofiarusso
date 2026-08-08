import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Sofia Russo`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0b0d] pt-16 text-white">
      <article className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/blog"
          className="text-[12px] font-bold text-white/60 transition hover:text-white"
        >
          ← Back to Blog
        </Link>

        <header className="mt-6">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
            {post.category}
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-3xl text-[16px] leading-7 text-white/68">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-[12px] font-semibold text-white/45">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[26px] border border-white/10 bg-[#17171a]">
          <Image
            alt={post.title}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            src={post.image}
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-[17px] leading-8 text-white/78">
            {post.intro}
          </p>

          {post.sections.map((section) => (
            <section className="mt-10" key={section.heading}>
              <h2 className="text-2xl font-black leading-8">
                {section.heading}
              </h2>

              <div className="mt-4 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p
                    className="text-[16px] leading-8 text-white/72"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-12 rounded-[24px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
            <h2 className="text-xl font-black">
              More from Sofia
            </h2>

            <p className="mt-2 text-[14px] leading-6 text-white/62">
              Explore more lifestyle, fashion and photography stories.
            </p>

            <Link
              href="/blog"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-[12px] font-black text-[#101012]"
            >
              Browse All Stories
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}