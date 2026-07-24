import Image from "next/image";
import { TrackedLink } from "@/components/analytics-events";

export function PrivatePoolDayHomepageFeature() {
  return (
    <section className="mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
      <div className="grid gap-0 sm:grid-cols-[0.82fr_1fr]">
        <div className="relative aspect-[4/5] min-h-[280px] overflow-hidden sm:min-h-[320px]">
          <Image
            alt="Sofia's Private Pool Day collection preview"
            className="object-cover object-[50%_28%]"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 220px"
            src="/images/collections/private-pool-day/private-pool-day-01.webp"
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17171a] via-black/12 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#17171a]/55" />
        </div>

        <div className="relative z-10 flex flex-col justify-center p-5 sm:p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">NEW COLLECTION</p>
          <h2 className="mt-2 text-[28px] font-black leading-8 text-white sm:text-[34px] sm:leading-9">Sofia's Private Pool Day</h2>
          <p className="mt-3 text-[14px] leading-6 text-white/66">
            A private summer collection with unseen poolside photos, casual selfies and member-only moments.
          </p>
          <div className="mt-5 grid gap-2 min-[390px]:grid-cols-2">
            <TrackedLink
              className="relative z-20 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-center text-[12px] font-black text-[#101012] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
              eventName="private_pool_preview_click"
              eventParams={{ collection_name: "private_pool_day", source_page: "homepage" }}
              href="/collections/private-pool-day"
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
