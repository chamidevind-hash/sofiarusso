import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Style a Satin Midi Dress: 7 Outfit Formulas Compared",
  description:
    "Seven practical ways to style the same satin midi dress for casual days, work, dinner, cool weather and simple neutral outfits.",
  alternates: {
    canonical: "/blog/how-to-style-a-satin-dress",
  },
  openGraph: {
    title: "How to Style a Satin Midi Dress: 7 Outfit Formulas Compared",
    description:
      "See how shoes, jackets, bags and accessories change the same satin midi dress across seven practical outfit formulas.",
    type: "article",
    images: [
      {
        url: "/images/blog/satin-dress-style/01-minimal-neutral.webp",
      },
    ],
  },
};

const outfits = [
  {
    number: "01",
    title: "Minimal neutral",
    label: "Simplest",
    image: "/images/blog/satin-dress-style/01-minimal-neutral.webp",
    alt: "Ivory satin midi dress styled with simple neutral accessories",
    formula: "Satin midi dress + beige flats + tan structured bag",
    bestFor: "Lunch, daytime plans and simple smart-casual outfits",
    why:
      "Keeping the shoes and bag neutral allows the satin fabric to remain the main visual feature without making the outfit feel over-styled.",
    avoid:
      "Adding several statement accessories at the same time can compete with the shine and movement of satin.",
  },
  {
    number: "02",
    title: "Add a tailored blazer",
    label: "Most polished",
    image: "/images/blog/satin-dress-style/02-blazer-layer.webp",
    alt: "Satin midi dress styled with a beige tailored blazer",
    formula: "Satin midi dress + beige blazer + brown low heels",
    bestFor: "Dinner, office events and smarter occasions",
    why:
      "The structured blazer contrasts with the softer drape of satin and makes the outfit feel more deliberate.",
    avoid:
      "A heavily embellished or oversized jacket can hide too much of the dress and make the outfit visually busy.",
  },
  {
    number: "03",
    title: "Cardigan and sneakers",
    label: "Most casual",
    image: "/images/blog/satin-dress-style/03-cardigan-casual.webp",
    alt: "Satin midi dress styled casually with cardigan and sneakers",
    formula: "Satin midi dress + cream cardigan + white sneakers",
    bestFor: "Coffee, errands, travel and relaxed daytime plans",
    why:
      "Soft knitwear and simple sneakers reduce the formal feeling of satin and make the dress easier to wear during the day.",
    avoid:
      "Very bulky knitwear can overwhelm the smoother shape of the dress.",
  },
  {
    number: "04",
    title: "Denim jacket contrast",
    label: "Easy weekend",
    image: "/images/blog/satin-dress-style/04-denim-jacket.webp",
    alt: "Satin midi dress styled with denim jacket and sneakers",
    formula: "Satin midi dress + denim jacket + white sneakers",
    bestFor: "Weekends, casual evenings and transitional weather",
    why:
      "Denim provides a matte, casual texture that contrasts naturally with reflective satin.",
    avoid:
      "Too many additional casual layers can make the outfit feel disconnected rather than intentionally mixed.",
  },
  {
    number: "05",
    title: "Simple evening look",
    label: "Dinner",
    image: "/images/blog/satin-dress-style/05-evening-look.webp",
    alt: "Satin midi dress styled for evening with black accessories",
    formula: "Satin midi dress + black low heels + black structured bag",
    bestFor: "Dinner, evening events and dressed-up occasions",
    why:
      "Black accessories create clear contrast while keeping the overall palette controlled and easy to repeat.",
    avoid:
      "Using statement shoes, a statement bag and large jewelry together can make a simple satin dress feel unnecessarily complicated.",
  },
  {
    number: "06",
    title: "Monochrome neutrals",
    label: "Most cohesive",
    image: "/images/blog/satin-dress-style/06-monochrome-look.webp",
    alt: "Satin midi dress styled in an ivory and cream monochrome palette",
    formula: "Satin midi dress + cream shoes + ivory bag",
    bestFor: "Day events, dinners and minimalist outfits",
    why:
      "Using closely related neutral shades creates continuity while the different textures keep the outfit from looking completely flat.",
    avoid:
      "Trying to match every item to exactly the same shade is unnecessary; small tonal differences usually look more natural.",
  },
  {
    number: "07",
    title: "Cool-weather layering",
    label: "Autumn",
    image: "/images/blog/satin-dress-style/07-cool-weather-layer.webp",
    alt: "Satin midi dress styled with camel coat and ankle boots",
    formula: "Satin midi dress + camel coat + ankle boots",
    bestFor: "Cooler days, autumn dinners and transitional weather",
    why:
      "A longer coat adds warmth and structure while still allowing part of the satin dress to remain visible.",
    avoid:
      "A coat that ends at an awkward point directly across the widest part of the dress can make the proportions feel less balanced.",
  },
];

export default function SatinDressStylePage() {
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
            Fashion
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            How to Style a Satin Midi Dress: 7 Outfit Formulas Compared
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/70">
            Satin already brings shine, movement and texture to an outfit, so
            styling it does not need to be complicated. This guide keeps the
            same satin midi dress and changes the layers, shoes and accessories
            to show seven practical ways to wear it.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white/45">
            <span>September 2026</span>
            <span>•</span>
            <span>11 min read</span>
            <span>•</span>
            <span>7 outfit examples</span>
          </div>
        </header>

        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
          <Image
            alt="Ivory satin midi dress styled with simple neutral accessories"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            src="/images/blog/satin-dress-style/01-minimal-neutral.webp"
          />
        </div>

        <section className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#ff79aa]/20 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Quick answer
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Let the satin be the interesting part.
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            The easiest way to style a satin midi dress is to keep most of the
            remaining outfit simple. Start with neutral shoes and one practical
            bag, then add either a structured jacket, soft cardigan or coat if
            the occasion or weather calls for another layer.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            You do not need to match every accessory perfectly. A small number
            of coordinated colors and textures usually creates a more wearable
            result than adding many decorative pieces.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Outfit comparison
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Which satin dress formula works for which occasion?
          </h2>

          <div className="mt-7 overflow-x-auto rounded-[22px] border border-white/10">
            <table className="w-full min-w-[780px] text-left">
              <thead className="bg-white/[0.05]">
                <tr className="text-[11px] uppercase tracking-[0.12em] text-white/50">
                  <th className="px-5 py-4">Formula</th>
                  <th className="px-5 py-4">Style</th>
                  <th className="px-5 py-4">Best for</th>
                  <th className="px-5 py-4">Effort</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 text-[14px]">
                <tr>
                  <td className="px-5 py-4 font-bold">Neutral accessories</td>
                  <td className="px-5 py-4 text-white/65">Minimal</td>
                  <td className="px-5 py-4 text-white/65">Daytime</td>
                  <td className="px-5 py-4 text-white/65">Very easy</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Tailored blazer</td>
                  <td className="px-5 py-4 text-white/65">Polished</td>
                  <td className="px-5 py-4 text-white/65">Smart occasions</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Cardigan + sneakers</td>
                  <td className="px-5 py-4 text-white/65">Relaxed</td>
                  <td className="px-5 py-4 text-white/65">Casual daytime</td>
                  <td className="px-5 py-4 text-white/65">Very easy</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Denim jacket</td>
                  <td className="px-5 py-4 text-white/65">Casual contrast</td>
                  <td className="px-5 py-4 text-white/65">Weekends</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Black accessories</td>
                  <td className="px-5 py-4 text-white/65">Evening</td>
                  <td className="px-5 py-4 text-white/65">Dinner</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Monochrome neutrals</td>
                  <td className="px-5 py-4 text-white/65">Refined</td>
                  <td className="px-5 py-4 text-white/65">Day or evening</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Long coat + boots</td>
                  <td className="px-5 py-4 text-white/65">Cool weather</td>
                  <td className="px-5 py-4 text-white/65">Autumn</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Seven formulas
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Style the same dress seven different ways
          </h2>

          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/65">
            The dress remains intentionally consistent across the examples.
            Changing only the outer layer, shoes, bag and small accessories
            makes it easier to see what each styling choice contributes.
          </p>

          <div className="mt-12 space-y-20">
            {outfits.map((outfit) => (
              <section key={outfit.number}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-black text-[#ff79aa]">
                    {outfit.number}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                    {outfit.label}
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-black">{outfit.title}</h3>

                <p className="mt-3 text-[14px] font-bold text-[#ff79aa]">
                  {outfit.formula}
                </p>

                <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
                  <Image
                    alt={outfit.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    src={outfit.image}
                  />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Best for
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {outfit.bestFor}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Why it works
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {outfit.why}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Watch for
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {outfit.avoid}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            What shoes work with a satin midi dress?
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="font-black">Flats</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Simple pointed or rounded flats keep the dress polished without
                making it feel overly formal. Neutral colors are especially
                easy to combine with champagne, ivory, navy or black satin.
              </p>
            </div>

            <div>
              <h3 className="font-black">Clean sneakers</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Minimal sneakers are useful when you want to reduce the formal
                feeling of the dress. Keep the rest of the outfit equally
                relaxed with a cardigan or denim jacket.
              </p>
            </div>

            <div>
              <h3 className="font-black">Low heels</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                A simple low heel works well for dinner or an event without
                requiring dramatic accessories elsewhere in the outfit.
              </p>
            </div>

            <div>
              <h3 className="font-black">Ankle boots</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Boots add visual weight and are useful when combining satin
                with heavier cool-weather layers such as wool coats.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            What jacket should you wear over satin?
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Choose the layer based on how formal you want the dress to feel.
            A blazer adds structure, a cardigan makes it softer and more
            casual, denim creates texture contrast, and a longer coat works
            when you need more warmth.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            The layer does not need to perfectly match the dress. In fact,
            combining satin with a different texture can make the outfit feel
            more balanced because every piece is not competing with the same
            shine.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            Keep accessories controlled
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Satin reflects light naturally, which already gives the outfit a
            visual focal point. A practical starting point is one bag, one pair
            of shoes and one or two small pieces of jewelry.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            If the dress is a strong color, neutral accessories are usually the
            easiest option. If the dress is ivory, champagne or another quiet
            neutral, you have more flexibility to introduce black, brown,
            denim or camel through the accessories and outer layers.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
            Simple formula
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Build the outfit in four steps
          </h2>

          <div className="mt-6 space-y-3 text-[15px] leading-7 text-white/70">
            <p>1. Start with the satin midi dress.</p>
            <p>2. Decide whether the occasion is casual, polished or evening.</p>
            <p>3. Choose one layer if the outfit needs it.</p>
            <p>4. Add simple shoes, one bag and minimal jewelry.</p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            Common satin styling mistakes
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="font-black">Using too many shiny accessories</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                When the dress already reflects light, several metallic or
                highly reflective accessories can make the outfit feel busy.
              </p>
            </div>

            <div>
              <h3 className="font-black">Adding too many focal points</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Statement shoes, a large bag, bold jewelry and a dramatic
                jacket do not all need to appear in the same outfit.
              </p>
            </div>

            <div>
              <h3 className="font-black">Ignoring texture</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Pairing satin with denim, knitwear, leather or wool can create
                useful contrast and make an outfit feel more grounded.
              </p>
            </div>

            <div>
              <h3 className="font-black">Styling for the photo instead of the occasion</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                The most useful outfit is one you can comfortably wear where
                you are actually going. Start with the occasion, then style
                around it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            Caring for satin clothing
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Satin describes a weave rather than one single fiber, so care
            requirements can vary depending on whether a garment is made from
            polyester, silk or another material.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Always check the care label on the specific garment before
            washing, steaming or ironing it. When storing satin, avoid rough
            surfaces or accessories that can snag the smooth fabric.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-10">
          <h2 className="text-xl font-black">
            About the visual examples
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-white/58">
            Sofia is a fictional virtual creator. The outfit images in this
            guide are digitally created illustrative examples designed to show
            styling combinations, color relationships and layering ideas. They
            are not documentary photographs of a real person or event.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <h2 className="text-xl font-black">Continue reading</h2>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/blog/build-a-simple-capsule-wardrobe"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              How to Build a Simple Capsule Wardrobe →
            </Link>

            <Link
              href="/blog/everyday-outfit-ideas"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              7 Simple Everyday Outfit Ideas →
            </Link>

            <Link
              href="/blog/mirror-selfie-lighting-tips"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              Mirror Selfie Lighting: 7 Setups Compared →
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