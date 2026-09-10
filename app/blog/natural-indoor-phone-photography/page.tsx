import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indoor Phone Photography: 8 Real-World Setups Compared",
  description:
    "Compare eight indoor smartphone photography setups including window light, mixed lighting, overhead light, background distance, 1x camera use and low light.",
  alternates: {
    canonical: "/blog/natural-indoor-phone-photography",
  },
  openGraph: {
    title: "Indoor Phone Photography: 8 Real-World Setups Compared",
    description:
      "A practical visual guide to better indoor smartphone photos using controlled real-world examples.",
    type: "article",
    images: [
      {
        url: "/images/blog/indoor-phone-guide/01-soft-side-window.webp",
      },
    ],
  },
};

const setups = [
  {
    number: "01",
    title: "Soft side-window light",
    label: "Best starting point",
    image: "/images/blog/indoor-phone-guide/01-soft-side-window.webp",
    alt: "Indoor smartphone portrait using soft side window light",
    summary:
      "Soft daylight from one side gives the face and clothing shape while keeping shadows gentle and natural.",
    bestFor: "Everyday indoor portraits",
    problem:
      "If the window is much brighter than the room, highlights can wash out while the shadow side becomes too dark.",
    fix:
      "Move slightly farther from the window or reduce exposure until bright areas retain detail.",
  },
  {
    number: "02",
    title: "Front window light",
    label: "Most even",
    image: "/images/blog/indoor-phone-guide/02-front-window.webp",
    alt: "Indoor smartphone portrait using even front window light",
    summary:
      "Front-facing window light reduces strong shadows and creates a cleaner, flatter look.",
    bestFor: "Simple portraits and outfit photos",
    problem:
      "The image can feel flat because there is less shadow defining the face and clothing.",
    fix:
      "Turn the body slightly or move a little to one side to restore natural depth.",
  },
  {
    number: "03",
    title: "Mixed daylight and room light",
    label: "Color challenge",
    image: "/images/blog/indoor-phone-guide/03-mixed-light.webp",
    alt: "Indoor smartphone photo using mixed daylight and warm room lighting",
    summary:
      "Cool daylight and warm household lights can produce different colors across the same photo.",
    bestFor: "Situations where mixed color is intentional",
    problem:
      "Automatic white balance may struggle to keep skin, clothing and walls looking consistent.",
    fix:
      "Choose one main light source and turn off unnecessary lamps or ceiling lights.",
  },
  {
    number: "04",
    title: "Overhead light only",
    label: "Usually difficult",
    image: "/images/blog/indoor-phone-guide/04-overhead-light.webp",
    alt: "Indoor smartphone portrait using only overhead lighting",
    summary:
      "A ceiling light illuminates from above and often creates darker shadows around the eyes, nose and chin.",
    bestFor: "Quick photos when no other light is available",
    problem:
      "The top of the face can be bright while the eye area looks comparatively dark.",
    fix:
      "Move toward softer reflected light or switch to a window or lamp positioned closer to face level.",
  },
  {
    number: "05",
    title: "Too close to the background",
    label: "Flat result",
    image: "/images/blog/indoor-phone-guide/05-close-to-background.webp",
    alt: "Indoor portrait with subject standing too close to the background",
    summary:
      "Standing very close to a wall can create stronger shadows and make the photo feel visually flat.",
    bestFor: "Only when space is very limited",
    problem:
      "The wall competes with the subject and the background may look crowded or harsh.",
    fix:
      "Create more distance between the subject and the wall whenever the room allows.",
  },
  {
    number: "06",
    title: "Move away from the background",
    label: "More depth",
    image: "/images/blog/indoor-phone-guide/06-away-from-background.webp",
    alt: "Indoor smartphone portrait with more distance from the background",
    summary:
      "Increasing the distance from the background reduces wall shadows and creates a stronger sense of depth.",
    bestFor: "Cleaner indoor portraits",
    problem:
      "In a very small room, you may not have enough space to create separation.",
    fix:
      "Even moving half a meter forward can improve the relationship between the subject and background.",
  },
  {
    number: "07",
    title: "Use the regular 1x camera",
    label: "Reliable choice",
    image: "/images/blog/indoor-phone-guide/07-one-x-camera.webp",
    alt: "Indoor smartphone portrait using the normal 1x rear camera",
    summary:
      "Using the regular 1x camera and physically changing your position usually preserves more detail than relying on heavy digital zoom.",
    bestFor: "Most everyday indoor photos",
    problem:
      "Standing in one place and zooming heavily can reduce detail and make the image look softer.",
    fix:
      "Move the photographer or subject when possible instead of using large amounts of digital zoom.",
  },
  {
    number: "08",
    title: "Low-light indoor photo",
    label: "Hardest",
    image: "/images/blog/indoor-phone-guide/08-low-light.webp",
    alt: "Indoor smartphone portrait taken in low light",
    summary:
      "When the room is dark, the phone has less light to work with and may use slower exposure, stronger processing or higher sensitivity.",
    bestFor: "Evening photos when brighter light is unavailable",
    problem:
      "Noise, softer detail and motion blur become more likely.",
    fix:
      "Use the brightest practical lamp, keep the phone steady and avoid unnecessary movement while the photo is captured.",
  },
];

export default function IndoorPhonePhotographyPage() {
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
            Indoor Phone Photography: 8 Real-World Setups Compared
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/70">
            Better indoor photos usually come from improving light, distance
            and camera position rather than buying extra equipment. This guide
            compares eight common indoor situations so you can see what changes
            and what to fix first.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white/45">
            <span>September 2026</span>
            <span>•</span>
            <span>13 min read</span>
            <span>•</span>
            <span>8 visual examples</span>
          </div>
        </header>

        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
          <Image
            alt="Indoor smartphone portrait using soft side window light"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            src="/images/blog/indoor-phone-guide/01-soft-side-window.webp"
          />
        </div>

        <section className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#ff79aa]/20 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Quick answer
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Start with light direction, then fix distance and exposure.
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            For a simple indoor portrait, use soft window light from slightly
            to one side, switch off unnecessary warm room lights, stand away
            from the background when possible, and use the phone&apos;s regular
            1x camera rather than heavy digital zoom.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            Those four changes solve many common indoor-photo problems before
            you need editing, extra lights or specialist camera apps.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Comparison
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Which indoor setup works best?
          </h2>

          <div className="mt-7 overflow-x-auto rounded-[22px] border border-white/10">
            <table className="w-full min-w-[780px] text-left">
              <thead className="bg-white/[0.05]">
                <tr className="text-[11px] uppercase tracking-[0.12em] text-white/50">
                  <th className="px-5 py-4">Setup</th>
                  <th className="px-5 py-4">Result</th>
                  <th className="px-5 py-4">Difficulty</th>
                  <th className="px-5 py-4">Best use</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 text-[14px]">
                <tr>
                  <td className="px-5 py-4 font-bold">Soft side window</td>
                  <td className="px-5 py-4 text-white/65">Natural depth</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Best overall starting point</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Front window</td>
                  <td className="px-5 py-4 text-white/65">Bright + even</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Simple portraits</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Mixed lighting</td>
                  <td className="px-5 py-4 text-white/65">Uneven color</td>
                  <td className="px-5 py-4 text-white/65">Hard</td>
                  <td className="px-5 py-4 text-white/65">Creative use only</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Overhead light</td>
                  <td className="px-5 py-4 text-white/65">Strong downward shadows</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                  <td className="px-5 py-4 text-white/65">Last resort</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Close to wall</td>
                  <td className="px-5 py-4 text-white/65">Flat background</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Small rooms only</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Away from wall</td>
                  <td className="px-5 py-4 text-white/65">More separation</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Cleaner portraits</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Regular 1x camera</td>
                  <td className="px-5 py-4 text-white/65">Natural detail</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Most indoor photos</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Low light</td>
                  <td className="px-5 py-4 text-white/65">More noise + softer detail</td>
                  <td className="px-5 py-4 text-white/65">Hard</td>
                  <td className="px-5 py-4 text-white/65">Nighttime situations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Eight setups
          </p>

          <h2 className="mt-3 text-3xl font-black">
            What changes in each situation
          </h2>

          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/65">
            The visual examples keep the subject and styling intentionally
            similar. That makes it easier to compare changes in lighting,
            background distance and camera use without changing everything at
            once.
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

                <h3 className="mt-3 text-3xl font-black">
                  {setup.title}
                </h3>

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
            How far should you stand from the background?
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            There is no single perfect distance because room size, lens choice
            and composition all matter. The useful principle is separation:
            if you are pressed directly against a wall, shadows and background
            texture become more noticeable.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            If the room allows it, move forward and compare the result. Even a
            modest increase in distance can soften wall shadows and make the
            scene feel less flat.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            1x camera vs digital zoom
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            For most everyday indoor photos, the regular rear camera is a good
            place to start. If you need a tighter composition, first try moving
            closer rather than immediately using large amounts of digital zoom.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Some phones have additional optical or high-quality crop options,
            so the exact result depends on the device. The main idea is to
            avoid unnecessary zoom when changing your physical position can
            produce the framing you want.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            How to handle indoor exposure
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Tap the subject on the camera preview before taking the photo. On
            many phones, you can then adjust exposure slightly brighter or
            darker.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Avoid increasing brightness until every shadow disappears. Indoor
            photos often look more natural when some shadow remains, especially
            when the main light comes from one side.
          </p>

          <div className="mt-7 rounded-[22px] border border-white/10 bg-[#17171a] p-6">
            <p className="font-black">Check the highlights first</p>

            <p className="mt-3 text-[14px] leading-7 text-white/65">
              If a pale wall, bright window or light-colored shirt has become a
              flat white area with no visible detail, reduce the exposure
              slightly before taking the photo.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            Why low light changes smartphone photos
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            In darker rooms, the camera has less light available. The phone may
            compensate by using a longer exposure, stronger processing or
            higher sensitivity.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            That can lead to more visible noise, softer fine detail and motion
            blur. Keeping both the subject and phone relatively still can make
            a noticeable difference.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            6 common indoor phone photography mistakes
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="font-black">1. Mixing every available light</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                More light is not always better. Warm bulbs and cool daylight
                can create inconsistent color across the same scene.
              </p>
            </div>

            <div>
              <h3 className="font-black">2. Standing directly against a wall</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                This can create strong shadows and reduce the feeling of depth
                in the image.
              </p>
            </div>

            <div>
              <h3 className="font-black">3. Using only a ceiling light</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Overhead lighting often creates less flattering downward
                shadows than a window or lower-positioned lamp.
              </p>
            </div>

            <div>
              <h3 className="font-black">4. Overusing digital zoom</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                If you can physically change your position, that is often a
                better first option for adjusting composition.
              </p>
            </div>

            <div>
              <h3 className="font-black">5. Making every photo too bright</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Brightening until all shadows disappear can remove natural
                depth and destroy highlight detail.
              </p>
            </div>

            <div>
              <h3 className="font-black">6. Ignoring the background edges</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Lamps, cables, clothing and small household objects near the
                frame edges can become unexpectedly distracting.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
            30-second checklist
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Before taking an indoor photo
          </h2>

          <div className="mt-6 space-y-3 text-[15px] leading-7 text-white/70">
            <p>✓ Find the largest useful window.</p>
            <p>✓ Turn off unnecessary lights.</p>
            <p>✓ Start with the subject slightly to the side of the window.</p>
            <p>✓ Create distance from the background when possible.</p>
            <p>✓ Use the regular camera before relying on heavy zoom.</p>
            <p>✓ Tap the subject and check exposure.</p>
            <p>✓ Keep the phone steadier in low light.</p>
            <p>✓ Check the frame edges before taking the final photo.</p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            The easiest indoor setup to repeat
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            If you want one dependable starting point, use soft window light
            from the front-side, turn off unnecessary indoor bulbs, move away
            from the background and shoot with the regular camera at a useful
            physical distance.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Once that looks good, change one variable at a time. Move the light,
            change the background distance or test a darker room separately.
            That makes it much easier to understand what actually improved the
            photo.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-10">
          <h2 className="text-xl font-black">
            About the visual examples
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-white/58">
            Sofia is a fictional virtual creator. The images in this guide are
            digitally created illustrative examples designed to demonstrate
            changes in lighting, background distance and camera use. They are
            not documentary photographs of a real photography experiment.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <h2 className="text-xl font-black">Continue reading</h2>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/blog/mirror-selfie-lighting-tips"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              Mirror Selfie Lighting: 7 Setups Compared →
            </Link>

            <Link
              href="/blog/home-photo-background-ideas"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              6 Easy Background Ideas for Better Photos at Home →
            </Link>

            <Link
              href="/blog/city-night-photo-tips"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              How to Take Better City Photos at Night With Your Phone →
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