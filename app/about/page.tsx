import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Sofia, the virtual lifestyle creator behind Sofia Hub.",
};

const values = [
  ["01", "Thoughtful style", "Timeless pieces, refined silhouettes, and a less-but-better approach to dressing."],
  ["02", "Beautiful light", "Photography shaped by natural warmth, quiet composition, and a sense of place."],
  ["03", "Modern creativity", "A virtual creator exploring how technology and taste can build a meaningful visual world."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="A fictional creator with a clear point of view, made to inspire thoughtful personal style and everyday creativity."
        eyebrow="The story"
        title="About Sofia"
      />
      <section className="section-space bg-ivory">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <Image
              alt="Sofia in a refined cream suit"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              src="/images/sofia-collection-hotel.webp"
            />
          </div>
          <div className="lg:pr-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">Meet the creator</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] text-ink sm:text-6xl">
              Softly feminine.
              <span className="block italic text-champagne">Confidently modern.</span>
            </h2>
            <p className="mt-7 text-lg leading-8 text-ink/75">
              Sofia is a digital lifestyle creator focused on fashion, photography, and modern feminine style.
            </p>
            <p className="mt-5 text-sm leading-7 text-taupe sm:text-base">
              Her visual world blends elegant tailoring, warm architecture, and uncomplicated moments. Sofia is a virtual creator; the ideas, mood, and creative direction of Sofia Hub are designed to offer inspiration with clarity and transparency.
            </p>
            <ButtonLink className="mt-8" href="/gallery">Explore her world</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#efe6d8]">
        <div className="page-shell">
          <div className="grid border-y border-ink/15 lg:grid-cols-3">
            {values.map(([number, title, description], index) => (
              <article
                className={`py-8 lg:px-8 lg:py-12 ${index > 0 ? "border-t border-ink/15 lg:border-l lg:border-t-0" : ""}`}
                key={number}
              >
                <p className="text-[9px] font-bold uppercase tracking-editorial text-taupe">{number}</p>
                <h3 className="mt-8 font-display text-4xl text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-taupe">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ivory">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">The next chapter</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] text-ink sm:text-6xl">Built to keep evolving.</h2>
            <p className="mt-6 text-sm leading-7 text-taupe sm:text-base">
              Sofia Hub begins as an open collection of imagery, writing, and digital releases. Future membership features will add richer collections and personal updates while keeping the experience calm and easy to use.
            </p>
            <ButtonLink className="mt-8" href="/join" variant="outline">Join the beginning</ButtonLink>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden bg-cream">
            <Image
              alt="Sofia in warm golden hour light"
              className="object-cover object-[center_38%]"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              src="/images/sofia-gallery-1.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
}
