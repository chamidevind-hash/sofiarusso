import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build a Capsule Wardrobe: 8 Steps + 12 Outfit Formulas",
  description:
    "Build a practical capsule wardrobe with an 8-step system, suggested clothing quantities, color guidance and 12 repeatable outfit formulas.",
  alternates: {
    canonical: "/blog/build-a-simple-capsule-wardrobe",
  },
  openGraph: {
    title: "How to Build a Capsule Wardrobe: 8 Steps + 12 Outfit Formulas",
    description:
      "A practical guide to building a smaller wardrobe with flexible basics, layers, shoes and repeatable outfit formulas.",
    type: "article",
    images: [
      {
        url: "/images/blog/capsule-wardrobe-guide/01-wardrobe-audit.webp",
      },
    ],
  },
};

const steps = [
  {
    number: "01",
    title: "Audit what you already own",
    image: "/images/blog/capsule-wardrobe-guide/01-wardrobe-audit.webp",
    alt: "Reviewing clothes before building a capsule wardrobe",
    text:
      "Start by taking stock of the clothes you already wear regularly. Separate dependable favorites from pieces that are uncomfortable, difficult to combine or rarely used.",
    tip:
      "Do not buy anything during the first stage. The goal is to understand your real wardrobe before creating a shopping list.",
  },
  {
    number: "02",
    title: "Build a foundation of useful tops",
    image: "/images/blog/capsule-wardrobe-guide/02-neutral-basics.webp",
    alt: "Neutral basic tops for a capsule wardrobe",
    text:
      "Choose simple tops that work with several bottoms and layers. Neutral colors are useful because they are easier to repeat without making every outfit look identical.",
    tip:
      "A white tee, dark tee, cream knit and simple button-up can already support many combinations.",
  },
  {
    number: "03",
    title: "Choose versatile bottoms",
    image: "/images/blog/capsule-wardrobe-guide/03-bottoms.webp",
    alt: "Jeans trousers and skirt in a capsule wardrobe",
    text:
      "Your bottoms should cover the situations you encounter most often. For many wardrobes, jeans, tailored trousers and one lighter neutral option provide a strong base.",
    tip:
      "Avoid keeping several nearly identical pairs unless you genuinely wear all of them.",
  },
  {
    number: "04",
    title: "Add a small set of layers",
    image: "/images/blog/capsule-wardrobe-guide/04-layering-pieces.webp",
    alt: "Blazer cardigan denim jacket and coat capsule wardrobe layers",
    text:
      "Layers change the character of basic outfits. A blazer can make jeans look polished, while a cardigan or denim jacket makes the same base feel more relaxed.",
    tip:
      "Choose layers that work with at least three outfits you already own.",
  },
  {
    number: "05",
    title: "Limit shoes and accessories to useful options",
    image: "/images/blog/capsule-wardrobe-guide/05-shoes-accessories.webp",
    alt: "Capsule wardrobe shoes bags and accessories",
    text:
      "Shoes and bags can multiply outfit options without taking up as much wardrobe space as additional clothing. Prioritize pieces that work across several categories.",
    tip:
      "One casual shoe, one flat or smart everyday shoe, one dressier option and one weather-specific option may be enough for many people.",
  },
  {
    number: "06",
    title: "Create one dependable casual formula",
    image: "/images/blog/capsule-wardrobe-guide/06-casual-formula.webp",
    alt: "Casual capsule wardrobe outfit with white shirt jeans and sneakers",
    text:
      "A capsule becomes easier to use when you stop inventing every outfit from scratch. Create a few formulas you know already work.",
    tip:
      "Example: white tee + straight jeans + white sneakers + tan bag.",
  },
  {
    number: "07",
    title: "Create one polished formula",
    image: "/images/blog/capsule-wardrobe-guide/07-smart-formula.webp",
    alt: "Smart casual capsule wardrobe outfit with blazer and trousers",
    text:
      "Use the same wardrobe basics for smarter situations by changing the outer layer, shoes and bag rather than replacing the whole outfit.",
    tip:
      "Example: cream knit + black trousers + beige blazer + flats + structured bag.",
  },
  {
    number: "08",
    title: "Keep one easy evening formula",
    image: "/images/blog/capsule-wardrobe-guide/08-evening-formula.webp",
    alt: "Simple evening capsule wardrobe outfit with navy midi dress",
    text:
      "A capsule wardrobe does not need to be limited to casual clothing. One simple dress or polished combination can cover dinners and similar occasions.",
    tip:
      "Choose an evening piece that also works with at least one daytime layer such as a cardigan, blazer or coat.",
  },
];

const formulas = [
  "White T-shirt + dark jeans + white sneakers",
  "Black T-shirt + beige trousers + flats",
  "Cream knit + dark jeans + ankle boots",
  "White button-up + black trousers + flats",
  "White T-shirt + dark jeans + beige blazer",
  "Cream knit + black trousers + beige blazer",
  "White T-shirt + beige trousers + denim jacket",
  "Black T-shirt + dark jeans + cream cardigan",
  "White button-up + navy midi skirt + flats",
  "Cream knit + navy midi skirt + ankle boots",
  "Navy midi dress + beige flats + tan bag",
  "Navy midi dress + camel coat + black low heels",
];

export default function CapsuleWardrobePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] pt-16 text-white">
      <article className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/blog"
          className="text-[12px] font-bold text-white/55 transition hover:text-white"
        >
          ← Back to Blog
        </Link>

        <header className="mt-7 max-w-4xl">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
            Fashion Guide
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            How to Build a Capsule Wardrobe: 8 Steps + 12 Outfit Formulas
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/70">
            A capsule wardrobe is not about owning as little clothing as
            possible. It is about keeping enough versatile pieces to cover your
            normal life without creating a wardrobe full of items that rarely
            work together.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white/45">
            <span>September 2026</span>
            <span>•</span>
            <span>14 min read</span>
            <span>•</span>
            <span>8-step system</span>
          </div>
        </header>

        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
          <Image
            alt="Reviewing clothes before building a capsule wardrobe"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            src="/images/blog/capsule-wardrobe-guide/01-wardrobe-audit.webp"
          />
        </div>

        <section className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#ff79aa]/20 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Quick answer
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Build around what you actually wear.
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            Start with a few reliable tops, bottoms and layers in colors that
            work together. Then add shoes and accessories that can be reused
            across several outfits.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            The strongest capsule wardrobe is not necessarily the smallest one.
            It is the one where most pieces can be combined without much effort.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Starting point
          </p>

          <h2 className="mt-3 text-3xl font-black">
            How many pieces do you need?
          </h2>

          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/65">
            There is no universal number. Climate, work requirements, laundry
            frequency and personal style all change what makes sense. A useful
            starter structure might look like this:
          </p>

          <div className="mt-7 overflow-x-auto rounded-[22px] border border-white/10">
            <table className="w-full min-w-[680px] text-left">
              <thead className="bg-white/[0.05]">
                <tr className="text-[11px] uppercase tracking-[0.12em] text-white/50">
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Starter range</th>
                  <th className="px-5 py-4">Purpose</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 text-[14px]">
                <tr>
                  <td className="px-5 py-4 font-bold">Tops</td>
                  <td className="px-5 py-4 text-white/65">5–7</td>
                  <td className="px-5 py-4 text-white/65">
                    Everyday combinations
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Bottoms</td>
                  <td className="px-5 py-4 text-white/65">3–5</td>
                  <td className="px-5 py-4 text-white/65">
                    Casual + polished options
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Layers</td>
                  <td className="px-5 py-4 text-white/65">3–4</td>
                  <td className="px-5 py-4 text-white/65">
                    Change the same base outfit
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Dresses</td>
                  <td className="px-5 py-4 text-white/65">1–3</td>
                  <td className="px-5 py-4 text-white/65">
                    Simple one-piece outfits
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Shoes</td>
                  <td className="px-5 py-4 text-white/65">3–5</td>
                  <td className="px-5 py-4 text-white/65">
                    Casual, smart and weather needs
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Bags</td>
                  <td className="px-5 py-4 text-white/65">2–3</td>
                  <td className="px-5 py-4 text-white/65">
                    Everyday + polished use
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 max-w-3xl text-[13px] leading-6 text-white/50">
            Treat these as planning ranges, not rules. A wardrobe that works
            well for you matters more than hitting a specific number.
          </p>
        </section>

        <section className="mt-20">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Eight-step system
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Build the wardrobe in the right order
          </h2>

          <div className="mt-12 space-y-20">
            {steps.map((step) => (
              <section key={step.number}>
                <p className="text-[11px] font-black text-[#ff79aa]">
                  STEP {step.number}
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  {step.title}
                </h3>

                <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
                  <Image
                    alt={step.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    src={step.image}
                  />
                </div>

                <p className="mt-6 max-w-3xl text-[16px] leading-8 text-white/72">
                  {step.text}
                </p>

                <div className="mt-5 max-w-3xl rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                    Practical tip
                  </p>

                  <p className="mt-3 text-[14px] leading-6 text-white/68">
                    {step.tip}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            Build a simple color palette
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            A capsule wardrobe becomes easier to combine when most colors have
            some relationship to each other. You do not need to wear only
            beige, black and white.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                Base neutrals
              </p>

              <p className="mt-3 text-[14px] leading-6 text-white/68">
                Pick two or three such as black, navy, cream, grey, beige or
                brown.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                Supporting colors
              </p>

              <p className="mt-3 text-[14px] leading-6 text-white/68">
                Add two or three colors that work naturally with your chosen
                neutrals.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                Accent colors
              </p>

              <p className="mt-3 text-[14px] leading-6 text-white/68">
                Use brighter colors for a few pieces instead of forcing every
                item to match everything.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            12 repeatable outfit formulas
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Outfit formulas save time because they give you a structure while
            still allowing different colors and accessories.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {formulas.map((formula, index) => (
              <div
                key={formula}
                className="rounded-[18px] border border-white/10 bg-[#17171a] p-4"
              >
                <span className="text-[10px] font-black text-[#ff79aa]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-2 text-[14px] font-bold leading-6 text-white/75">
                  {formula}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            How to find real gaps before shopping
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Before buying something new, look for repeated problems in your
            current wardrobe. A useful purchase usually solves a problem more
            than once.
          </p>

          <div className="mt-7 rounded-[22px] border border-white/10 bg-[#17171a] p-6">
            <div className="space-y-3 text-[15px] leading-7 text-white/70">
              <p>✓ Is there an outfit I regularly struggle to complete?</p>
              <p>✓ Would this piece work with at least three things I own?</p>
              <p>✓ Do I already own something that serves the same purpose?</p>
              <p>✓ Is the fabric practical for my climate and routine?</p>
              <p>✓ Would I realistically wear it next month?</p>
              <p>✓ Am I buying it because I need it or because it is on sale?</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            5 common capsule wardrobe mistakes
          </h2>

          <div className="mt-7 space-y-7">
            <div>
              <h3 className="font-black">
                1. Buying a completely new wardrobe
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-white/68">
                A capsule should normally begin with useful pieces you already
                own. Replacing everything defeats much of the purpose.
              </p>
            </div>

            <div>
              <h3 className="font-black">
                2. Copying someone else's lifestyle
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-white/68">
                A wardrobe designed for office work will not automatically suit
                someone whose week is mostly casual or active.
              </p>
            </div>

            <div>
              <h3 className="font-black">
                3. Choosing only neutral colors
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Neutrals are useful, but removing every color you enjoy can
                make the wardrobe feel restrictive.
              </p>
            </div>

            <div>
              <h3 className="font-black">
                4. Keeping uncomfortable basics
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-white/68">
                A versatile item still has little value if you repeatedly avoid
                wearing it because the fit or fabric is uncomfortable.
              </p>
            </div>

            <div>
              <h3 className="font-black">
                5. Treating the capsule as permanent
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Your routine, climate and preferences change. Review the
                wardrobe occasionally instead of forcing an old system to keep
                working forever.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl rounded-[24px] border border-[#ff79aa]/20 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
            Simple rule
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Aim for combinations, not just individual pieces.
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            Before adding something to a capsule wardrobe, imagine at least
            three realistic outfits you could create with it. If you cannot,
            the item may be harder to use than it first appears.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-10">
          <h2 className="text-xl font-black">
            About the visual examples
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-white/58">
            Sofia is a fictional virtual creator. The fashion images in this
            guide are digitally created illustrative examples intended to make
            wardrobe combinations easier to visualize.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <h2 className="text-xl font-black">
            Continue reading
          </h2>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/blog/how-to-style-a-satin-dress"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              How to Style a Satin Midi Dress: 7 Outfit Formulas Compared →
            </Link>

            <Link
              href="/blog/everyday-outfit-ideas"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              Everyday Outfit Ideas →
            </Link>

            <Link
              href="/blog/natural-indoor-phone-photography"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              Indoor Phone Photography: 8 Real-World Setups Compared →
            </Link>

            <Link
              href="/blog"
              className="font-bold text-white/65 hover:text-white"
            >
              Browse all SofiaRusso articles →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}