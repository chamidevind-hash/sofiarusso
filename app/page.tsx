import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SofiaFooter } from "@/components/sofia-footer";
import { SofiaSocialIcons } from "@/components/sofia-social-icons";
import { posts } from "@/data";

export const metadata: Metadata = {
  title: "Sofia Russo | Lifestyle, Fashion & Photography",
  description:
    "Fashion inspiration, photography tips, lifestyle stories and free phone wallpapers from Sofia Russo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sofia Russo | Lifestyle, Fashion & Photography",
    description:
      "Explore fashion inspiration, photography tips, lifestyle stories and wallpapers.",
    type: "website",
  },
};

const categories = [
  {
    title: "Fashion",
    description:
      "Everyday outfit ideas, styling notes and simple ways to build better looks.",
    href: "/blog/everyday-outfit-ideas",
  },
  {
    title: "Photography",
    description:
      "Lighting, composition and practical phone photography ideas.",
    href: "/blog/mirror-selfie-lighting-tips",
  },
  {
    title: "Lifestyle",
    description:
      "Home inspiration, everyday creativity and visual ideas.",
    href: "/blog/home-photo-background-ideas",
  },
  {
    title: "Wallpapers",
    description:
      "Phone-ready backgrounds and digital style inspiration.",
    href: "/downloads",
  },
];

export default function HomePage() {
  const latestPosts = posts.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-20 sm:px-6 sm:pt-24">
        <section className="rounded-[30px] border border-white/10 bg-[#17171a] px-5 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">
            Lifestyle · Fashion · Photography
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            Sofia Russo
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/68 sm:text-[17px]">
            Everyday fashion inspiration, practical photography ideas,
            lifestyle stories and digital wallpapers.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row">
            <Link
              href="/blog"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] font-black text-[#101012] transition hover:-translate-y-0.5"
            >
              Read Latest Stories
            </Link>

            <Link
              href="/downloads"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-black text-white transition hover:bg-white/10"
            >
              Browse Wallpapers
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
                Latest
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Stories & ideas
              </h2>

              <p className="mt-3 max-w-2xl text-[14px] leading-6 text-white/60">
                Fashion, photography and lifestyle articles with practical
                ideas you can actually use.
              </p>
            </div>

            <Link
              href="/blog"
              className="hidden text-[12px] font-black text-[#ff79aa] sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#202024]">
                  <Image
                    alt={post.title}
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={post.image}
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#ff79aa]">
                    <span>{post.category}</span>
                    <span className="text-white/25">•</span>
                    <span className="text-white/40">{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-[20px] font-black leading-6 text-white">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-[13.5px] leading-6 text-white/60">
                    {post.excerpt}
                  </p>

                  <span className="mt-5 inline-flex text-[12px] font-black text-white">
                    Read article →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/blog"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-5 text-[12px] font-black text-white sm:hidden"
          >
            View All Stories
          </Link>
        </section>

        <section className="mt-14">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Find your inspiration
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                href={category.href}
                key={category.title}
                className="group rounded-[24px] border border-white/10 bg-[#17171a] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#1d1d21]"
              >
                <h3 className="text-[21px] font-black">
                  {category.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-white/62">
                  {category.description}
                </p>

                <span className="mt-5 inline-flex text-[12px] font-black text-[#ff79aa]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#17171a] md:grid-cols-2">
          {posts[0] ? (
            <div className="relative min-h-[340px]">
              <Image
                alt="Sofia lifestyle inspiration"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={posts[0].image}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          ) : null}

          <div className="flex flex-col justify-center p-6 sm:p-9">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
              About Sofia
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Everyday creativity
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-white/65">
              Sofia Russo is a virtual lifestyle creator focused on fashion,
              photography, everyday inspiration and digital creativity. The
              journal shares practical ideas for style, photos, home settings
              and personal digital spaces.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-white px-5 text-[12px] font-black text-[#101012]"
            >
              About Sofia
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-[28px] border border-white/10 bg-[#f7f2e9] p-6 text-[#151515] sm:p-9">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#a93d68]">
            Free Downloads
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Wallpapers for your phone
          </h2>

          <p className="mt-3 max-w-2xl text-[14px] font-medium leading-7 text-[#55504b]">
            Explore phone wallpapers designed for clean lock screens and home
            screens, including city, lifestyle and minimal visual styles.
          </p>

          <Link
            href="/downloads"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#151515] px-6 text-[12px] font-black text-white"
          >
            Browse Wallpapers
          </Link>
        </section>

        <section className="mt-14 rounded-[24px] border border-white/10 bg-[#17171a] p-6 text-center sm:p-8">
          <h2 className="text-2xl font-black">
            Follow Sofia
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-[14px] leading-6 text-white/62">
            Follow for new lifestyle images, fashion inspiration and new
            stories.
          </p>

          <div className="mt-5">
            <SofiaSocialIcons />
          </div>
        </section>

        <nav
          aria-label="Site information"
          className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[12px] font-bold text-white/55"
        >
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>

          <Link href="/about" className="hover:text-white">
            About
          </Link>

          <Link href="/downloads" className="hover:text-white">
            Wallpapers
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>

          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>

          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </nav>

        <SofiaFooter />
      </div>
    </main>
  );
}