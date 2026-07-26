import Image from "next/image";
import { TrackedLink } from "@/components/analytics-events";
import { SofiaIcon } from "@/components/sofia-icon";

const teaserImages = [
  {
    alt: "Sofia checking her outfit in a bedroom mirror",
    eventName: "homepage_main_teaser_click" as const,
    position: "main" as const,
    src: "/images/homepage-teasers/homepage-teaser-01-mirror.webp",
  },
  {
    alt: "Sofia taking a poolside selfie",
    eventName: "homepage_clear_teaser_click" as const,
    position: "clear_1" as const,
    src: "/images/homepage-teasers/homepage-teaser-02-pool-selfie.webp",
  },
  {
    alt: "Sofia wrapped in a towel after swimming",
    eventName: "homepage_clear_teaser_click" as const,
    position: "clear_2" as const,
    src: "/images/homepage-teasers/homepage-teaser-03-towel.webp",
  },
  {
    alt: "Locked poolside collection preview",
    eventName: "homepage_locked_teaser_click" as const,
    locked: true,
    position: "locked_1" as const,
    src: "/images/homepage-teasers/homepage-teaser-04-pool-edge.webp",
  },
  {
    alt: "Locked bedroom collection preview",
    eventName: "homepage_locked_teaser_click" as const,
    locked: true,
    position: "locked_2" as const,
    src: "/images/homepage-teasers/homepage-teaser-05-bedroom.webp",
  },
];

const collectionHref = "/collections/private-pool-day";

export function PrivatePoolDayHomepageFeature() {
  const [mainTeaser, ...secondaryTeasers] = teaserImages;

  return (
    <section className="mt-4 rounded-[24px] border border-white/10 bg-[#17171a] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.28)] sm:p-4">
      <div className="grid gap-3 sm:grid-cols-[1.05fr_1fr]">
        <TrackedLink
          aria-label="Preview Sofia's Private Pool Day collection"
          className="group relative z-10 aspect-[4/5] cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#202024] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
          eventName={mainTeaser.eventName}
          eventParams={{
            collection_name: "private_pool_day",
            source_page: "homepage",
            teaser_position: mainTeaser.position,
          }}
          href={collectionHref}
        >
          <Image
            alt={mainTeaser.alt}
            className="object-cover object-[50%_34%] transition duration-500 group-hover:scale-[1.025]"
            fill
            priority
            sizes="(max-width: 640px) calc(100vw - 32px), 250px"
            src={mainTeaser.src}
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/46 via-black/8 to-transparent transition duration-300 group-hover:bg-black/16" />
        </TrackedLink>

        <div className="grid grid-cols-2 gap-3">
          {secondaryTeasers.map((teaser) => (
            <TrackedLink
              aria-label="Preview Sofia's Private Pool Day collection"
              className="group relative z-10 aspect-[4/5] cursor-pointer overflow-hidden rounded-[18px] border border-white/10 bg-[#202024] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
              eventName={teaser.eventName}
              eventParams={{
                collection_name: "private_pool_day",
                source_page: "homepage",
                teaser_position: teaser.position,
              }}
              href={collectionHref}
              key={teaser.src}
            >
              <Image
                alt={teaser.alt}
                className={`object-cover transition duration-500 group-hover:scale-[1.035] ${teaser.locked ? "scale-110 blur-md" : ""}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) calc((100vw - 44px) / 2), 122px"
                src={teaser.src}
                unoptimized
              />
              {teaser.locked ? (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/84 via-black/48 to-black/18 transition duration-300 group-hover:bg-black/18" />
                  <div className="pointer-events-none absolute inset-0 grid place-items-center p-2 text-center">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#101012] shadow-[0_10px_28px_rgba(0,0,0,0.32)]">
                      <SofiaIcon className="h-5 w-5" name="lock" />
                    </span>
                    <span className="absolute inset-x-2 bottom-2 rounded-[14px] bg-black/62 px-2 py-1.5 backdrop-blur">
                      <span className="block text-[9px] font-black uppercase tracking-[0.12em] text-white">Members Only</span>
                      <span className="mt-0.5 block text-[10px] font-bold leading-3 text-white/76">View the full collection</span>
                    </span>
                  </div>
                </>
              ) : (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent transition duration-300 group-hover:bg-black/16" />
              )}
            </TrackedLink>
          ))}
        </div>
      </div>

      <div className="px-2 py-4 sm:px-3 sm:py-5">
        <div className="relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">NEW COLLECTION</p>
          <h2 className="mt-2 text-[28px] font-black leading-8 text-white sm:text-[34px] sm:leading-9">Sofia's Private Pool Day</h2>
          <p className="mt-3 text-[14px] leading-6 text-white/66">
            Unseen poolside photos, casual selfies and private lifestyle moments.
          </p>
          <p className="mt-3 text-[12px] font-black text-white/58">9 more photos inside</p>
          <div className="mt-5 grid gap-2 min-[390px]:grid-cols-2">
            <TrackedLink
              className="relative z-20 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-center text-[12px] font-black text-[#101012] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
              eventName="private_pool_preview_click"
              eventParams={{ collection_name: "private_pool_day", source_page: "homepage" }}
              href={collectionHref}
            >
              Preview the Collection
            </TrackedLink>
            <TrackedLink
              className="relative z-20 inline-flex items-center justify-center rounded-full border border-white/12 bg-white/8 px-4 py-3 text-center text-[12px] font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
              eventName="homepage_membership_click"
              eventParams={{ source_page: "homepage" }}
              href="/join"
              preserveUtm
            >
              View Memberships
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
