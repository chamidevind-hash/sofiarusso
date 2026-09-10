import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mirror Selfie Lighting Tips: 7 Lighting Setups Compared",
  description:
    "Compare seven mirror selfie lighting setups and see how window light, backlight, overhead light, vanity light and mixed lighting change the final photo.",
  alternates: {
    canonical: "/blog/mirror-selfie-lighting-tips",
  },
  openGraph: {
    title: "Mirror Selfie Lighting Tips: 7 Lighting Setups Compared",
    description:
      "A practical side-by-side guide to better mirror selfie lighting using seven controlled visual examples.",
    type: "article",
    images: [
      {
        url: "/images/blog/mirror-selfie-lighting/01-soft-side-window.webp",
      },
    ],
  },
};

const setups = [
  {
    number: "01",
    title: "Soft side-window light",
    label: "Best starting point",
    image: "/images/blog/mirror-selfie-lighting/01-soft-side-window.webp",
    alt: "Mirror selfie using soft side window lighting",
    summary:
      "Soft daylight coming from one side gives the face and clothing gentle shape without creating very hard shadows.",
    bestFor: "Natural everyday mirror selfies",
    problem:
      "If the window is much brighter than the room, the phone may darken the subject to protect the highlights.",
    fix:
      "Move slightly farther from the window or lower the exposure until bright areas keep their detail.",
  },
  {
    number: "02",
    title: "Front window light",
    label: "Most even",
    image: "/images/blog/mirror-selfie-lighting/02-front-window-light.webp",
    alt: "Mirror selfie using even front window lighting",
    summary:
      "When soft daylight reaches you from roughly the same direction as the mirror, shadows become lighter and the face is illuminated more evenly.",
    bestFor: "Bright, simple outfit photos",
    problem:
      "Very even front light can make the image look flatter because there is less shadow defining the face and clothing.",
    fix:
      "Turn slightly away from the light or move a little to one side to bring back some natural shape.",
  },
  {
    number: "03",
    title: "Strong side-window light",
    label: "Higher contrast",
    image: "/images/blog/mirror-selfie-lighting/03-strong-side-window.webp",
    alt: "Mirror selfie using strong side window lighting",
    summary:
      "Stronger directional daylight creates a clearly brighter side and a darker side, which can add depth and stronger fabric texture.",
    bestFor: "More dramatic photos",
    problem:
      "Very strong light can create blown highlights while the shadow side becomes too dark.",
    fix:
      "Use a sheer curtain, step farther into the room, or change your angle until the transition between light and shadow is softer.",
  },
  {
    number: "04",
    title: "Backlit window",
    label: "Hardest to balance",
    image: "/images/blog/mirror-selfie-lighting/04-backlit-window.webp",
    alt: "Mirror selfie with a bright window behind the subject",
    summary:
      "A bright window behind you creates a large difference between the background brightness and the light reaching your face.",
    bestFor: "Intentional silhouettes or bright atmospheric backgrounds",
    problem:
      "The phone may expose for the window, leaving the face and outfit too dark.",
    fix:
      "Move so the window is beside you instead, or raise exposure carefully while checking that the background is not completely blown out.",
  },
  {
    number: "05",
    title: "Overhead light only",
    label: "Usually difficult",
    image: "/images/blog/mirror-selfie-lighting/05-overhead-light.webp",
    alt: "Mirror selfie using only overhead bathroom lighting",
    summary:
      "A ceiling light illuminates from above, which often creates stronger downward shadows under the eyes, glasses, nose and chin.",
    bestFor: "Quick photos when no other light is available",
    problem:
      "The top of the face may be bright while the eye area becomes darker.",
    fix:
      "If possible, use vanity lighting instead or move toward a softer reflected light source.",
  },
  {
    number: "06",
    title: "Vanity light only",
    label: "Good indoor option",
    image: "/images/blog/mirror-selfie-lighting/06-vanity-light.webp",
    alt: "Mirror selfie using warm vanity lighting",
    summary:
      "Lights positioned beside or around the mirror illuminate the face from a more useful direction than a single ceiling fixture.",
    bestFor: "Evening mirror selfies",
    problem:
      "Warm bulbs can make skin, white clothing and neutral walls appear yellow or orange.",
    fix:
      "Avoid mixing several different light colors and keep the exposure moderate so the highlights stay controlled.",
  },
  {
    number: "07",
    title: "Mixed daylight and warm light",
    label: "Color challenge",
    image: "/images/blog/mirror-selfie-lighting/07-mixed-light.webp",
    alt: "Mirror selfie combining daylight and warm indoor lighting",
    summary:
      "Cool daylight and warm household bulbs can illuminate different parts of the same scene with noticeably different colors.",
    bestFor: "Situations where mixed color is intentional",
    problem:
      "Automatic white balance may struggle to make the face, dress and room all look natural at the same time.",
    fix:
      "Choose one main light source. Often, simply turning off unnecessary lamps produces a cleaner result.",
  },
];

export default function MirrorSelfieLightingPage() {
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
            Smartphone Photography
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Mirror Selfie Lighting Tips: 7 Lighting Setups Compared
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/70">
            The same mirror selfie can look completely different when the
            direction, softness or color of the light changes. This guide uses
            seven controlled visual examples to show what each setup does, what
            usually goes wrong, and how to improve the result without buying
            photography equipment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white/45">
            <span>September 2026</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>7 visual examples</span>
          </div>
        </header>

        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
          <Image
            alt="Soft side window lighting used for a mirror selfie"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            src="/images/blog/mirror-selfie-lighting/01-soft-side-window.webp"
          />
        </div>

        <section className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#ff79aa]/20 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Quick answer
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Start with soft window light slightly to one side.
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            For a natural mirror selfie, turn off unnecessary room lights and
            position yourself where soft daylight reaches you from the
            front-side rather than directly from behind. This creates enough
            shadow to give the face and clothing shape without making the image
            look harsh.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            If the brightest part of the image looks washed out, reduce the
            phone exposure slightly before taking the photo.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Side-by-side summary
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Which lighting setup works best?
          </h2>

          <div className="mt-7 overflow-x-auto rounded-[22px] border border-white/10">
            <table className="min-w-[760px] w-full text-left">
              <thead className="bg-white/[0.05]">
                <tr className="text-[11px] uppercase tracking-[0.12em] text-white/50">
                  <th className="px-5 py-4">Setup</th>
                  <th className="px-5 py-4">Look</th>
                  <th className="px-5 py-4">Difficulty</th>
                  <th className="px-5 py-4">Best use</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 text-[14px]">
                <tr>
                  <td className="px-5 py-4 font-bold">Soft side window</td>
                  <td className="px-5 py-4 text-white/65">Natural + dimensional</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Best overall starting point</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Front window</td>
                  <td className="px-5 py-4 text-white/65">Bright + even</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Clean outfit photos</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Strong side window</td>
                  <td className="px-5 py-4 text-white/65">High contrast</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                  <td className="px-5 py-4 text-white/65">More dramatic images</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Backlit window</td>
                  <td className="px-5 py-4 text-white/65">Bright background</td>
                  <td className="px-5 py-4 text-white/65">Hard</td>
                  <td className="px-5 py-4 text-white/65">Intentional backlight</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Overhead light</td>
                  <td className="px-5 py-4 text-white/65">Top-heavy shadows</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                  <td className="px-5 py-4 text-white/65">Last-resort indoor light</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Vanity light</td>
                  <td className="px-5 py-4 text-white/65">Warm + even</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Evening selfies</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">Mixed light</td>
                  <td className="px-5 py-4 text-white/65">Uneven color</td>
                  <td className="px-5 py-4 text-white/65">Hard</td>
                  <td className="px-5 py-4 text-white/65">Creative use only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            The comparison
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Seven lighting setups explained
          </h2>

          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/65">
            The subject, outfit, framing and room remain intentionally similar
            across the examples. The main variable is the lighting direction
            and color, making it easier to compare the effect of each setup.
          </p>

          <div className="mt-12 space-y-20">
            {setups.map((setup) => (
              <section key={setup.number}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-black text-[#ff79aa]">
                    {setup.number}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                    {setup.label}
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-black">{setup.title}</h3>

                <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
                  <Image
                    alt={setup.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    src={setup.image}
                  />
                </div>

                <p className="mt-6 max-w-3xl text-[16px] leading-8 text-white/72">
                  {setup.summary}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Best for
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {setup.bestFor}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Common problem
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {setup.problem}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Quick fix
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {setup.fix}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            How to adjust exposure on your phone
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Before taking the photo, tap the part of the image you want the
            camera to prioritize. On many phones you can then drag the exposure
            control slightly brighter or darker.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Avoid automatically making every photo brighter. If a white wall,
            window or light-colored dress is already close to pure white,
            increasing exposure can remove texture and highlight detail.
          </p>

          <div className="mt-7 rounded-[22px] border border-white/10 bg-[#17171a] p-6">
            <p className="font-black">Simple exposure check</p>

            <p className="mt-3 text-[14px] leading-7 text-white/65">
              Look at the brightest meaningful area in the photo. If the
              fabric, skin or wall has become a flat white patch with no
              visible detail, lower the exposure slightly.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            5 common mirror selfie lighting mistakes
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="font-black">1. Standing directly in front of a bright window</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                A very bright background makes it harder for the phone to keep
                both the subject and the window properly exposed.
              </p>
            </div>

            <div>
              <h3 className="font-black">2. Mixing several light colors</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Daylight, warm lamps and cool bathroom bulbs can produce
                inconsistent colors across the same image.
              </p>
            </div>

            <div>
              <h3 className="font-black">3. Using only a ceiling light</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Light coming only from above often creates darker shadows
                around the eyes and underneath facial features.
              </p>
            </div>

            <div>
              <h3 className="font-black">4. Standing too close to the mirror</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Moving slightly farther back gives you more control over the
                composition and makes it easier to keep the phone from
                dominating the frame.
              </p>
            </div>

            <div>
              <h3 className="font-black">5. Ignoring mirror glare</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Small changes to the phone angle can reduce bright reflections
                from vanity bulbs and windows without requiring any editing.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
            30-second checklist
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Before taking the photo
          </h2>

          <div className="mt-6 space-y-3 text-[15px] leading-7 text-white/70">
            <p>✓ Clean the mirror.</p>
            <p>✓ Turn off unnecessary lights.</p>
            <p>✓ Start with soft window light from one side.</p>
            <p>✓ Check the brightest highlights before increasing exposure.</p>
            <p>✓ Step slightly farther from the mirror.</p>
            <p>✓ Check the background edges for distracting objects.</p>
            <p>✓ Take several frames before changing the lighting.</p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            The easiest setup to repeat
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            If you only remember one setup from this guide, use a window as
            your main source, move slightly to the side rather than standing
            directly in front of it, and turn off unnecessary indoor lights.
            That combination is simple, repeatable and works in many ordinary
            rooms.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Once you understand how that setup looks, experiment with stronger
            side light, vanity lighting and other positions. Comparing small
            changes one at a time is more useful than changing the room,
            clothing, pose and lighting all at once.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-10">
          <h2 className="text-xl font-black">
            About the visual examples
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-white/58">
            Sofia is a fictional virtual creator. The comparison images in
            this guide are digitally created illustrative examples. They are
            designed to demonstrate differences in lighting direction,
            contrast and color rather than document a real photography test.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <h2 className="text-xl font-black">Continue reading</h2>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/blog/natural-indoor-phone-photography"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              How to Take Natural-Looking Indoor Photos With Your Phone →
            </Link>

            <Link
              href="/blog/home-photo-background-ideas"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              6 Easy Background Ideas for Better Photos at Home →
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