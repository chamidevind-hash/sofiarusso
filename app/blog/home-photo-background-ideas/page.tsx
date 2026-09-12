import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Photo Background Ideas: 8 Apartment Setups Compared",
  description:
    "Compare eight practical apartment photo backgrounds including plain walls, curtains, bedrooms, shelves, kitchens, hallways and bright window areas.",
  alternates: {
    canonical: "/blog/home-photo-background-ideas",
  },
  openGraph: {
    title: "Home Photo Background Ideas: 8 Apartment Setups Compared",
    description:
      "A practical visual guide to choosing cleaner, more useful backgrounds for smartphone photos at home.",
    type: "article",
    images: [
      {
        url: "/images/blog/home-photo-background-guide/01-plain-wall.webp",
      },
    ],
  },
};

const backgrounds = [
  {
    number: "01",
    title: "Plain wall",
    label: "Cleanest",
    image: "/images/blog/home-photo-background-guide/01-plain-wall.webp",
    alt: "Simple plain wall background for a home smartphone portrait",
    summary:
      "A plain wall gives you the least visual competition and makes it easier to control composition, light and subject placement.",
    bestFor: "Outfit photos, portraits and simple profile images",
    watchFor:
      "Standing directly against the wall can create harsh shadows and make the image feel flat.",
    fix:
      "Move the subject forward and keep enough distance to soften the wall shadow.",
  },
  {
    number: "02",
    title: "Curtain background",
    label: "Soft texture",
    image: "/images/blog/home-photo-background-guide/02-curtain-background.webp",
    alt: "Beige curtain background for an indoor portrait",
    summary:
      "Curtains add texture without introducing many distracting objects. Their folds can also make a plain room feel more intentional.",
    bestFor: "Portraits, fashion photos and softer lifestyle images",
    watchFor:
      "Strong backlight through the curtain can make the subject too dark.",
    fix:
      "Turn slightly toward the window or reduce the brightness difference between subject and background.",
  },
  {
    number: "03",
    title: "Bedroom corner",
    label: "Lifestyle",
    image: "/images/blog/home-photo-background-guide/03-bed-corner.webp",
    alt: "Bedroom corner used as a lifestyle photography background",
    summary:
      "A neatly styled bed can make a photo feel relaxed and natural while still giving the scene a clear visual structure.",
    bestFor: "Lifestyle posts and casual portraits",
    watchFor:
      "Too many pillows, clothes or bedside objects can quickly make the frame look cluttered.",
    fix:
      "Keep only a few visible objects and simplify the bedding before taking the photo.",
  },
  {
    number: "04",
    title: "Wooden door",
    label: "Simple contrast",
    image: "/images/blog/home-photo-background-guide/04-wooden-door.webp",
    alt: "Wooden apartment door used as a simple photo background",
    summary:
      "A wooden door adds quiet color and texture while remaining simple enough for the subject to stay dominant.",
    bestFor: "Outfit photos and quick full-body portraits",
    watchFor:
      "Strong vertical edges can look awkward if they line up directly with the subject's head or shoulders.",
    fix:
      "Shift the camera or subject slightly so major lines sit beside the body instead of cutting through it.",
  },
  {
    number: "05",
    title: "Simple shelf",
    label: "Controlled detail",
    image: "/images/blog/home-photo-background-guide/05-simple-shelf.webp",
    alt: "Minimal shelf used as an apartment photo background",
    summary:
      "A lightly styled shelf adds personality to the scene while still allowing the subject to remain the main focus.",
    bestFor: "Lifestyle portraits and home-content photos",
    watchFor:
      "Too many decorative objects can make the image feel busy and reduce separation from the subject.",
    fix:
      "Remove about half the visible objects and leave intentional empty space.",
  },
  {
    number: "06",
    title: "Kitchen background",
    label: "Everyday context",
    image: "/images/blog/home-photo-background-guide/06-kitchen-background.webp",
    alt: "Simple apartment kitchen used as a lifestyle photo background",
    summary:
      "A kitchen can work well when counters are relatively clear and the background lines are kept simple.",
    bestFor: "Everyday lifestyle content and casual storytelling",
    watchFor:
      "Small appliances, bottles and utensils can create unexpected distractions around the subject.",
    fix:
      "Clear the immediate area behind the subject and check the frame edges before shooting.",
  },
  {
    number: "07",
    title: "Hallway background",
    label: "Best depth",
    image: "/images/blog/home-photo-background-guide/07-hallway-background.webp",
    alt: "Apartment hallway creating depth in a smartphone portrait",
    summary:
      "Hallways naturally create depth through leading lines and repeated doorways, which can make a small apartment feel more spacious.",
    bestFor: "Full-body portraits and fashion photos",
    watchFor:
      "Busy doorways or crooked vertical lines can make the composition feel unstable.",
    fix:
      "Keep the phone level and simplify visible rooms or doorways when possible.",
  },
  {
    number: "08",
    title: "Window or balcony area",
    label: "Brightest",
    image: "/images/blog/home-photo-background-guide/08-window-balcony.webp",
    alt: "Bright apartment window and balcony area used as a photo background",
    summary:
      "Large windows and balcony doors can create a bright, open look and provide natural environmental context.",
    bestFor: "Daytime lifestyle photos and airy portraits",
    watchFor:
      "The outdoor view may become extremely bright while the subject becomes too dark.",
    fix:
      "Expose for the subject while keeping enough window detail, or change the shooting angle to reduce the brightness difference.",
  },
];

export default function HomePhotoBackgroundIdeasPage() {
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
            Photography Guide
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Home Photo Background Ideas: 8 Apartment Setups Compared
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/70">
            You do not need a studio or expensive interior to get a cleaner
            background. Ordinary walls, curtains, doors, bedrooms, kitchens and
            hallways can work well when you control clutter, distance and light.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white/45">
            <span>September 2026</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>8 apartment setups</span>
          </div>
        </header>

        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
          <Image
            alt="Simple plain wall background for a home smartphone portrait"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            src="/images/blog/home-photo-background-guide/01-plain-wall.webp"
          />
        </div>

        <section className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#ff79aa]/20 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Quick answer
          </p>

          <h2 className="mt-3 text-2xl font-black">
            The best background is usually the simplest usable part of the room.
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-white/68">
            Start with a clean wall, curtain or quiet corner near good light.
            Then create some distance between the subject and background,
            remove distracting objects and check the edges of the frame.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff79aa]">
            Comparison
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Which home background works best?
          </h2>

          <div className="mt-7 overflow-x-auto rounded-[22px] border border-white/10">
            <table className="w-full min-w-[820px] text-left">
              <thead className="bg-white/[0.05]">
                <tr className="text-[11px] uppercase tracking-[0.12em] text-white/50">
                  <th className="px-5 py-4">Background</th>
                  <th className="px-5 py-4">Look</th>
                  <th className="px-5 py-4">Difficulty</th>
                  <th className="px-5 py-4">Best use</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 text-[14px]">
                <tr>
                  <td className="px-5 py-4 font-bold">Plain wall</td>
                  <td className="px-5 py-4 text-white/65">Very clean</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Portraits + outfits</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Curtains</td>
                  <td className="px-5 py-4 text-white/65">Soft texture</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Portraits</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Bedroom corner</td>
                  <td className="px-5 py-4 text-white/65">Relaxed lifestyle</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                  <td className="px-5 py-4 text-white/65">Lifestyle photos</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Wooden door</td>
                  <td className="px-5 py-4 text-white/65">Simple contrast</td>
                  <td className="px-5 py-4 text-white/65">Easy</td>
                  <td className="px-5 py-4 text-white/65">Full-body photos</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Simple shelf</td>
                  <td className="px-5 py-4 text-white/65">Controlled detail</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                  <td className="px-5 py-4 text-white/65">Lifestyle portraits</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Kitchen</td>
                  <td className="px-5 py-4 text-white/65">Everyday context</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                  <td className="px-5 py-4 text-white/65">Casual storytelling</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Hallway</td>
                  <td className="px-5 py-4 text-white/65">Strong depth</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                  <td className="px-5 py-4 text-white/65">Fashion + full body</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold">Window / balcony</td>
                  <td className="px-5 py-4 text-white/65">Bright + open</td>
                  <td className="px-5 py-4 text-white/65">Medium</td>
                  <td className="px-5 py-4 text-white/65">Daytime lifestyle</td>
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
            What changes with each background
          </h2>

          <div className="mt-12 space-y-20">
            {backgrounds.map((item) => (
              <section key={item.number}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-black text-[#ff79aa]">
                    {item.number}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                    {item.label}
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-black">
                  {item.title}
                </h3>

                <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] sm:aspect-[16/10]">
                  <Image
                    alt={item.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    src={item.image}
                  />
                </div>

                <p className="mt-6 max-w-3xl text-[16px] leading-8 text-white/72">
                  {item.summary}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Best for
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {item.bestFor}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Watch for
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {item.watchFor}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-[#17171a] p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
                      Quick fix
                    </p>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      {item.fix}
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
            Distance helps separate the subject from the room. If you stand
            directly against a wall, curtain or piece of furniture, shadows and
            background details often become more noticeable.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            If space allows, try moving roughly one to two meters forward and
            compare the result. In a smaller room, even half a meter can help.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            A simple clutter test
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Before taking the photo, look only at the background and ignore the
            subject for a few seconds. Anything that immediately attracts your
            eye may become distracting in the final image.
          </p>

          <div className="mt-7 rounded-[22px] border border-white/10 bg-[#17171a] p-6">
            <div className="space-y-3 text-[15px] leading-7 text-white/70">
              <p>✓ Remove loose clothing and cables.</p>
              <p>✓ Clear bottles, cups and small packaging.</p>
              <p>✓ Simplify crowded shelves.</p>
              <p>✓ Check doorways into other rooms.</p>
              <p>✓ Look for objects behind the head and shoulders.</p>
              <p>✓ Check both edges of the frame.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            Background color matters less than contrast
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            You do not need a specific wall color. What matters more is whether
            the subject separates clearly from the background.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Dark clothing against a dark wall can merge together, while a very
            pale outfit against a bright wall can lose definition. Changing
            position, light direction or clothing contrast can solve this
            without repainting anything.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            5 common background mistakes
          </h2>

          <div className="mt-7 space-y-7">
            <div>
              <h3 className="font-black">1. Using too many decorative objects</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                A visually interesting room can still be a poor photo
                background if too many objects compete for attention.
              </p>
            </div>

            <div>
              <h3 className="font-black">2. Standing directly against the wall</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                This often creates stronger shadows and removes depth.
              </p>
            </div>

            <div>
              <h3 className="font-black">3. Ignoring lines behind the subject</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Door frames, shelves and furniture edges can appear to cut
                through the head or shoulders.
              </p>
            </div>

            <div>
              <h3 className="font-black">4. Shooting toward an extremely bright window</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                The phone may darken the subject or completely lose outdoor
                detail.
              </p>
            </div>

            <div>
              <h3 className="font-black">5. Looking only at the center of the frame</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/68">
                Small distractions usually hide near the edges, so scan the
                entire preview before taking the final photo.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff79aa]">
            30-second setup
          </p>

          <h2 className="mt-3 text-2xl font-black">
            Before you take the photo
          </h2>

          <div className="mt-6 space-y-3 text-[15px] leading-7 text-white/70">
            <p>✓ Find the cleanest usable area near good light.</p>
            <p>✓ Remove obvious clutter.</p>
            <p>✓ Move away from the background.</p>
            <p>✓ Check vertical and horizontal lines.</p>
            <p>✓ Keep objects away from the head and shoulders.</p>
            <p>✓ Check the frame edges.</p>
            <p>✓ Take one test photo before changing anything else.</p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-black">
            The easiest background to repeat
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            If you want one dependable home setup, use a plain wall or simple
            curtain near soft window light. Stand away from the background,
            remove anything distracting and keep the camera level.
          </p>

          <p className="mt-5 text-[16px] leading-8 text-white/70">
            Once that works, experiment with more contextual backgrounds such
            as a bedroom, kitchen or hallway.
          </p>
        </section>

        <section className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-10">
          <h2 className="text-xl font-black">
            About the visual examples
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-white/58">
            Sofia is a fictional virtual creator. The images in this guide are
            digitally created illustrative examples designed to demonstrate
            common apartment-background choices and composition principles.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-[24px] border border-white/10 bg-[#17171a] p-6 sm:p-8">
          <h2 className="text-xl font-black">Continue reading</h2>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/blog/natural-indoor-phone-photography"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              Indoor Phone Photography: 8 Real-World Setups Compared →
            </Link>

            <Link
              href="/blog/mirror-selfie-lighting-tips"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              Mirror Selfie Lighting Tips: 7 Lighting Setups Compared →
            </Link>

            <Link
              href="/blog/build-a-simple-capsule-wardrobe"
              className="font-bold text-[#ff79aa] hover:underline"
            >
              How to Build a Capsule Wardrobe →
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