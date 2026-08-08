import type { Metadata } from "next";
import Link from "next/link";
import { SofiaFooter } from "@/components/sofia-footer";
import { SofiaSocialIcons } from "@/components/sofia-social-icons";

export const metadata: Metadata = {
  title: "Sofia Russo | Lifestyle, Fashion & Wallpapers",
  description:
    "Explore Sofia Russo's lifestyle updates, fashion inspiration, wallpapers and creator stories.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sofia Russo | Lifestyle, Fashion & Wallpapers",
    description:
      "Lifestyle updates, fashion inspiration, wallpapers and creator stories from Sofia Russo.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofia Russo | Lifestyle, Fashion & Wallpapers",
    description:
      "Lifestyle updates, fashion inspiration, wallpapers and creator stories from Sofia Russo.",
  },
};

const categories = [
  {
    title: "Fashion & Outfits",
    description:
      "Everyday outfits, evening looks and simple styling inspiration.",
    href: "/collections",
  },
  {
    title: "At Home",
    description:
      "Casual lifestyle moments, home inspiration and everyday routines.",
    href: "/collections/sofia-at-home",
  },
  {
    title: "Travel & City Life",
    description:
      "City evenings, cafés, travel moments and places that inspire Sofia.",
    href: "/collections",
  },
  {
    title: "HD Wallpapers",
    description:
      "Phone-ready wallpapers designed for lock screens and home screens.",
    href: "/downloads",
  },
];

const stories = [
  {
    title: "Simple Outfit Ideas for an Easy Everyday Look",
    description:
      "A few easy ways to put together a polished outfit without overthinking it.",
    href: "/collections",
  },
  {
    title: "How I Choose a Mirror Selfie Setup at Home",
    description:
      "Lighting, backgrounds and small details that make casual photos feel more natural.",
    href: "/collections",
  },
  {
    title: "My Favorite Phone Wallpaper Styles",
    description:
      "Minimal, city-inspired and lifestyle wallpaper ideas for a clean phone setup.",
    href: "/downloads",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pt-24">
        <section className="rounded-[28px] border border-white/10 bg-[#17171a] px-5 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">
            Virtual Creator
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            Sofia Russo
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[17px]">
            Lifestyle, fashion, everyday inspiration and downloadable wallpapers.
            Explore new stories, looks and updates from Sofia.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row">
            <Link
              href="/collections"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-[13px] font-black text-[#101012] transition hover:-translate-y-0.5"
            >
              Explore Lifestyle
            </Link>

            <Link
              href="/downloads"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-black text-white transition hover:bg-white/10"
            >
              Browse Wallpapers
            </Link>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Sofia&apos;s world
              </h2>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                href={category.href}
                key={category.title}
                className="group rounded-[24px] border border-white/10 bg-[#17171a] p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#1d1d21]"
              >
                <h3 className="text-xl font-black text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-white/65">
                  {category.description}
                </p>

                <span className="mt-5 inline-flex text-[12px] font-black text-[#ff79aa]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
              Latest Stories
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Lifestyle & inspiration
            </h2>

            <p className="mt-3 max-w-2xl text-[14px] leading-6 text-white/65">
              Short reads about outfits, photography, home life and everyday
              creator inspiration.
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {stories.map((story) => (
              <Link
                href={story.href}
                key={story.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
              >
                <h3 className="text-[18px] font-black leading-6">
                  {story.title}
                </h3>

                <p className="mt-2 text-[13.5px] leading-6 text-white/62">
                  {story.description}
                </p>

                <span className="mt-4 inline-flex text-[12px] font-black text-[#ff79aa]">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-[#f7f2e9] p-6 text-[#151515] sm:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#a93d68]">
            About Sofia
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Everyday lifestyle inspiration
          </h2>

          <p className="mt-4 max-w-3xl text-[14px] font-medium leading-7 text-[#55504b]">
            Sofia Russo is a virtual creator focused on fashion, everyday
            lifestyle inspiration, travel moments, photography ideas and digital
            wallpapers. This site brings together Sofia&apos;s latest updates,
            useful lifestyle content and downloadable creative resources.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/collections"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#151515] px-5 text-[12px] font-black text-white"
            >
              Browse Collections
            </Link>

            <Link
              href="/downloads"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/15 px-5 text-[12px] font-black text-[#151515]"
            >
              View Wallpapers
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-[24px] border border-white/10 bg-[#17171a] p-5 text-center sm:p-7">
          <h2 className="text-2xl font-black">
            Follow Sofia
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-[14px] leading-6 text-white/65">
            Follow along for new lifestyle photos, fashion ideas and creator updates.
          </p>

          <div className="mt-5">
            <SofiaSocialIcons />
          </div>
        </section>

        <nav
          aria-label="Site information"
          className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[12px] font-bold text-white/60"
        >
          <Link href="/collections" className="hover:text-white">
            Collections
          </Link>

          <Link href="/downloads" className="hover:text-white">
            Wallpapers
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