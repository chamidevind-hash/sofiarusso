import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sofia Russo, the virtual lifestyle creator behind SofiaRusso.vip.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  [
    "01",
    "Useful ideas",
    "Practical fashion and photography guidance designed to be clear, simple and easy to apply.",
  ],
  [
    "02",
    "Visual creativity",
    "Original visual concepts exploring natural light, personal style, interiors and everyday photography.",
  ],
  [
    "03",
    "Clear transparency",
    "Sofia is a fictional virtual creator, and digitally created imagery is presented transparently as part of the project.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="A virtual lifestyle creator exploring fashion, smartphone photography and everyday visual creativity."
        eyebrow="About the project"
        title="About Sofia"
      />

      <section className="section-space bg-ivory">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <Image
              alt="Sofia Russo lifestyle portrait"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              src="/images/blog/indoor-phone-photography.webp"
            />
          </div>

          <div className="lg:pr-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">
              Meet Sofia
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.95] text-ink sm:text-6xl">
              Style, light and
              <span className="block italic text-champagne">
                everyday creativity.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-ink/75">
              Sofia Russo is a fictional virtual lifestyle creator focused on
              fashion, smartphone photography, visual inspiration and digital
              creativity.
            </p>

            <p className="mt-5 text-sm leading-7 text-taupe sm:text-base">
              SofiaRusso.vip is built around useful articles and visual
              resources rather than presenting Sofia as a real person.
              Digitally created imagery may be used to illustrate ideas,
              outfits, lighting situations and creative concepts.
            </p>

            <Link
              href="/blog"
              className="mt-8 inline-flex min-h-12 items-center justify-center bg-ink px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-ivory"
            >
              Read the Journal
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#efe6d8]">
        <div className="page-shell">
          <div className="grid border-y border-ink/15 lg:grid-cols-3">
            {values.map(([number, title, description], index) => (
              <article
                className={`py-8 lg:px-8 lg:py-12 ${
                  index > 0
                    ? "border-t border-ink/15 lg:border-l lg:border-t-0"
                    : ""
                }`}
                key={number}
              >
                <p className="text-[9px] font-bold uppercase tracking-editorial text-taupe">
                  {number}
                </p>

                <h3 className="mt-8 font-display text-4xl text-ink">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-taupe">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-ivory">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">
              How content is created
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.95] text-ink sm:text-6xl">
              Useful first.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-taupe sm:text-base">
            <p>
              Articles on SofiaRusso.vip are developed around practical topics
              such as smartphone photography, lighting, styling and everyday
              visual creativity.
            </p>

            <p>
              Content is reviewed for clarity and usefulness before
              publication. When a topic benefits from comparison, the goal is
              to provide examples, explanations and visual references instead
              of repeating general advice.
            </p>

            <p>
              Sofia is a virtual character. Images featuring Sofia may be
              digitally created or AI-assisted and are used as visual
              illustrations. They should not be interpreted as documentary
              photographs of a real person or real-world event.
            </p>

            <p>
              The site continues to improve existing guides as better examples,
              clearer explanations and new visual resources become available.
            </p>

            <div className="pt-3">
              <Link
                href="/contact"
                className="font-bold text-ink underline underline-offset-4"
              >
                Contact SofiaRusso
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}