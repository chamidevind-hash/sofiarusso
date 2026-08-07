import type { Metadata } from "next";
import Image from "next/image";
import { TrackedLink } from "@/components/analytics-events";
import { SofiaFooter } from "@/components/sofia-footer";
import { SofiaLinkCard } from "@/components/sofia-link-card";
import { SofiaMerchSection } from "@/components/sofia-merch-section";
import { SofiaProfileInfo, SofiaStatsRow } from "@/components/sofia-profile-info";
import { SofiaSocialIcons } from "@/components/sofia-social-icons";
import { SofiaSupportCard } from "@/components/sofia-support-card";
import { SofiaIcon } from "@/components/sofia-icon";
import { sofiaLinks } from "@/data/sofia-links";

export const metadata: Metadata = {
  title: "SofiaHub - Sofia's Official Links",
  description:
    "Explore Sofia's exclusive virtual creator collections, wallpapers, social profiles and latest updates.",
  openGraph: {
    title: "SofiaHub - Sofia's Official Links",
    description:
      "Explore Sofia's exclusive virtual creator collections, wallpapers, social profiles and latest updates.",
    images: [
      {
        url: "/images/sofia-wallpaper-preview.webp",
        width: 2048,
        height: 1024,
        alt: "SofiaHub official links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SofiaHub - Sofia's Official Links",
    description:
      "Explore Sofia's exclusive virtual creator collections, wallpapers, social profiles and latest updates.",
    images: ["/images/sofia-wallpaper-preview.webp"],
  },
};

const sofiaAtHomeImages = [
  {
    alt: "Sofia At Home private preview 1",
    locked: true,
    src: "/images/members/sofia-at-home-set-01/previews/sofia-at-home-back-01.webp",
  },
  {
    alt: "Sofia At Home private preview 2",
    locked: true,
    src: "/images/members/sofia-at-home-set-01/previews/sofia-at-home-back-02.webp",
  },
  {
    alt: "Sofia At Home private preview 3",
    locked: true,
    src: "/images/members/sofia-at-home-set-01/previews/sofia-at-home-back-03.webp",
  },
  {
    alt: "Sofia At Home private preview 4",
    locked: true,
    src: "/images/members/sofia-at-home-set-01/previews/sofia-at-home-back-04.webp",
  },
] as const;

const wallpaperImages = [
  {
    alt: "Sofia city lights phone wallpaper",
    src: "/downloads/wallpapers/sofia-city-lights-wallpaper.webp",
  },
  {
    alt: "Sofia Los Angeles night phone wallpaper",
    src: "/downloads/wallpapers/sofia-los-angeles-night-wallpaper.webp",
  },
  {
    alt: "Sofia mirror moment phone wallpaper",
    src: "/downloads/wallpapers/sofia-mirror-moment-wallpaper.webp",
  },
  {
    alt: "Sofia white satin phone wallpaper",
    src: "/downloads/wallpapers/sofia-white-satin-wallpaper.webp",
  },
] as const;

export default function HomePage() {
  const primaryLinks = sofiaLinks.slice(0, 4);
  const secondaryLinks = sofiaLinks.slice(4);

  return (
    <section className="sofia-bio-page relative isolate min-h-screen overflow-x-hidden overflow-y-visible bg-[var(--page-bg)] text-[var(--text-primary)]">
      <div
        className="pointer-events-none fixed inset-0 hidden overflow-hidden sm:block"
        aria-hidden="true"
      >
        <Image
          alt=""
          className="scale-110 object-cover opacity-[0.12] blur-md"
          fill
          priority
          sizes="100vw"
          src="/images/sofia-wallpaper-preview.webp"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,79,145,0.18),transparent_34%),linear-gradient(180deg,rgba(11,11,13,0.72),#0b0b0d_68%)]" />
      </div>

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[520px] bg-[var(--page-bg)] shadow-none sm:my-6 sm:min-h-[calc(100svh-48px)] sm:rounded-[30px] sm:border sm:border-white/10 sm:shadow-[0_28px_90px_rgba(0,0,0,0.52)]">
        <div className="px-4 pt-5">
          <section className="rounded-[24px] border border-white/10 bg-[#17171a] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.28)] sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[26px] font-black leading-8 text-white">
                  Sofia At Home
                </h2>

                <p className="mt-2 text-[14px] leading-6 text-white/66">
                  Natural everyday moments, casual outfits and private lifestyle photos.
                </p>
              </div>

              <span className="mt-1 hidden rounded-full bg-white/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/64 min-[420px]:inline-flex">
                Preview
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {sofiaAtHomeImages.map((image, index) => (
                <TrackedLink
                  aria-label="Explore Sofia At Home"
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[18px] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
                  eventName="sofia_at_home_click"
                  eventParams={{
                    section_name: "sofia_at_home",
                    source_page: "homepage",
                  }}
                  href="/collections/sofia-at-home"
                  key={image.src}
                >
                  <Image
                    alt={image.alt}
                    className={`object-cover object-[50%_30%] transition duration-500 group-hover:scale-[1.035] ${
                      image.locked ? "scale-110 blur-[7px]" : ""
                    }`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 560px) calc((100vw - 58px) / 2), 223px"
                    src={image.src}
                    unoptimized
                  />

                  {image.locked ? (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/52 to-black/24" />

                      <div className="pointer-events-none absolute inset-0 grid place-items-center p-3 text-center">
                        <div>
                          <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white/92 text-[#121214] shadow-[0_12px_28px_rgba(0,0,0,0.32)]">
                            <SofiaIcon className="h-5 w-5" name="lock" />
                          </span>

                          <p className="mt-2 text-[11px] font-black uppercase tracking-[0.12em] text-white">
                            Members Only
                          </p>

                          <p className="mt-1 text-[12px] font-bold leading-4 text-white/78">
                            View the full collection
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />
                  )}

                  {index === 2 ? (
                    <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/58 px-2.5 py-1 text-[10px] font-black text-white backdrop-blur">
                      New
                    </span>
                  ) : null}
                </TrackedLink>
              ))}
            </div>

            <TrackedLink
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-4 py-3 text-center text-[12px] font-black text-[#101012] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
              eventName="sofia_at_home_click"
              eventParams={{
                section_name: "sofia_at_home",
                source_page: "homepage",
              }}
              href="/collections/sofia-at-home"
            >
              Explore Sofia At Home
            </TrackedLink>
          </section>

          <section className="mt-5 rounded-[24px] border border-white/10 bg-[#17171a] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.28)] sm:p-5">
            <div>
              <h2 className="text-[26px] font-black leading-8 text-white">
                HD Wallpapers
              </h2>

              <p className="mt-2 text-[14px] leading-6 text-white/66">
                Phone-ready Sofia wallpapers made for crisp lock screens and home screens.
              </p>
            </div>

            <TrackedLink
              aria-label="Download Sofia HD wallpapers"
              className="mt-4 grid grid-cols-4 gap-2.5 rounded-[20px] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
              eventName="wallpaper_section_click"
              eventParams={{
                section_name: "hd_wallpapers",
                source_page: "homepage",
              }}
              href="/downloads"
            >
              {wallpaperImages.map((image) => (
                <span
                  className="relative block aspect-[9/16] overflow-hidden rounded-[14px] bg-[#202024]"
                  key={image.src}
                >
                  <Image
                    alt={image.alt}
                    className="object-cover transition duration-500 hover:scale-[1.035]"
                    fill
                    loading="lazy"
                    sizes="(max-width: 560px) calc((100vw - 70px) / 4), 105px"
                    src={image.src}
                    unoptimized
                  />

                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
                </span>
              ))}
            </TrackedLink>

            <TrackedLink
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/12 bg-white/8 px-4 py-3 text-center text-[12px] font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
              eventName="wallpaper_section_click"
              eventParams={{
                section_name: "hd_wallpapers",
                source_page: "homepage",
              }}
              href="/downloads"
            >
              Download Wallpapers
            </TrackedLink>
          </section>

          <section className="mt-5 grid gap-2.5 min-[430px]:grid-cols-3">
            {[
              ["Exclusive Collections", "Access member-only photo drops."],
              ["HD Wallpapers", "Download high-quality phone wallpapers."],
              ["New Monthly Drops", "Discover new collections added regularly."],
            ].map(([title, description]) => (
              <div
                className="rounded-[18px] border border-white/10 bg-white/[0.055] p-4"
                key={title}
              >
                <h3 className="text-[14px] font-black leading-5 text-white">
                  {title}
                </h3>

                <p className="mt-1.5 text-[12.5px] font-medium leading-5 text-white/62">
                  {description}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-5 rounded-[24px] border border-white/10 bg-[#f7f2e9] p-5 text-center text-[#121214]">
            <h2 className="text-[26px] font-black leading-8">
              Ready to see the full collection?
            </h2>

            <p className="mx-auto mt-2 max-w-[380px] text-[14px] font-semibold leading-6 text-[#4f4a46]">
              Choose your access and unlock Sofia&apos;s member-only drops.
            </p>

            <TrackedLink
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#121214] px-5 py-3 text-center text-[12px] font-black text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
              eventName="bottom_membership_click"
              eventParams={{ source_page: "homepage" }}
              href="/join"
              preserveUtm
            >
              View Membership Packages
            </TrackedLink>
          </section>

          <div className="mt-7">
            <SofiaProfileInfo />
            <SofiaSocialIcons />
          </div>

          <SofiaStatsRow />

          <div className="mt-6 flex items-center justify-between sm:mt-7">
            <h2 className="text-[17px] font-extrabold leading-6 text-[var(--text-primary)]">
              Explore Sofia&apos;s world
            </h2>

            <span className="text-[12px] font-bold leading-5 text-[var(--text-secondary)]">
              Latest
            </span>
          </div>

          <div className="mt-3 grid gap-2.5 sm:gap-3">
            {primaryLinks.map((link) => (
              <SofiaLinkCard key={link.title} link={link} />
            ))}

            {secondaryLinks.map((link) => (
              <SofiaLinkCard key={link.title} link={link} />
            ))}
          </div>

          <SofiaMerchSection />
          <SofiaSupportCard />
          <SofiaFooter />
        </div>
      </div>
    </section>
  );
}