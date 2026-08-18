import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lifestyle Collections | Sofia Russo",
  description:
    "Explore Sofia Russo's fashion, photography and lifestyle inspiration collections.",
  alternates: {
    canonical: "/collections",
  },
};

const collections = [
  {
    title: "Everyday Style",
    description:
      "Simple outfit ideas, wardrobe basics and practical ways to create polished everyday looks.",
    image: "/images/blog/capsule-wardrobe.webp",
    href: "/blog/build-a-simple-capsule-wardrobe",
    label: "Fashion",
  },
  {
    title: "Indoor Photography",
    description:
      "Natural lighting, simple backgrounds and practical ideas for better phone photos at home.",
    image: "/images/blog/indoor-phone-photography.webp",
    href: "/blog/natural-indoor-phone-photography",
    label: "Photography",
  },
  {
    title: "Color & Style",
    description:
      "Explore clothing colors, neutral combinations and simple styling ideas that photograph well.",
    image: "/images/blog/colors-photograph-well.webp",
    href: "/blog/colors-that-look-good-in-photos",
    label: "Style",
  },
  {
    title: "Apartment Inspiration",
    description:
      "Creative ways to use ordinary apartment spaces for clean and natural lifestyle photography.",
    image: "/images/blog/apartment-photo-spots.webp",
    href: "/blog/small-apartment-photo-spots",
    label: "Lifestyle",
  },
  {
    title: "Natural Photo Editing",
    description:
      "Simple editing techniques for keeping smartphone photographs clean, balanced and realistic.",
    image: "/images/blog/natural-photo-editing.webp",
    href: "/blog/edit-phone-photos-naturally",
    label: "Photography",
  },
  {
    title: "City Photo Walks",
    description:
      "Ideas for finding better light, interesting backgrounds and natural compositions around the city.",
    image: "/images/blog/city-photo-walk.webp",
    href: "/blog/plan-a-city-photo-walk",
    label: "City Life",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">
            Explore
          </p>

          <h1 className="mt-3 text-[38px] font-black leading-tight sm:text-[54px]">
            Lifestyle Collections
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/64">
            Explore fashion, photography, home inspiration and everyday
            creative ideas from the Sofia Russo journal.
          </p>
        </header>

        <section className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <Link
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] transition hover:-translate-y-1 hover:border-white/20"
              href={collection.href}
              key={collection.title}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#202024]">
                <Image
                  alt={collection.title}
                  className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={collection.image}
                />
              </div>

              <div className="p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                  {collection.label}
                </p>

                <h2 className="mt-2 text-[21px] font-black leading-7">
                  {collection.title}
                </h2>

                <p className="mt-3 text-[13.5px] leading-6 text-white/60">
                  {collection.description}
                </p>

                <span className="mt-5 inline-flex text-[12px] font-black text-white">
                  Explore collection →
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-[26px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Sofia Journal
          </p>

          <h2 className="mt-3 text-3xl font-black">
            More stories every week
          </h2>

          <p className="mt-3 max-w-2xl text-[14px] leading-7 text-white/60">
            Read practical guides covering everyday style, smartphone
            photography, home photo ideas and digital creativity.
          </p>

          <Link
            href="/blog"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-[12px] font-black text-[#101012]"
          >
            Browse All Articles
          </Link>
        </section>
      </div>
    </main>
  );
}