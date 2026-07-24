import Image from "next/image";
import { TrackedLink } from "@/components/analytics-events";
import { SofiaIcon } from "@/components/sofia-icon";
import { privatePoolDayCollection } from "@/data/private-pool-day";

type PrivatePoolDayCardProps = {
  compact?: boolean;
};

export function PrivatePoolDayCard({ compact = false }: PrivatePoolDayCardProps) {
  return (
    <TrackedLink
      aria-label={`${privatePoolDayCollection.buttonText}: ${privatePoolDayCollection.title}`}
      className={`group relative block overflow-hidden rounded-[24px] border border-white/10 bg-[#17171a] shadow-[0_20px_55px_rgba(0,0,0,0.34)] outline-none transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#ff4f91] active:scale-[0.985] ${
        compact ? "min-h-[260px]" : "h-[190px] sm:h-[220px]"
      }`}
      eventName="private_pool_preview_click"
      eventParams={{ collection_name: "private_pool_day" }}
      href={privatePoolDayCollection.href}
    >
      <Image
        alt={privatePoolDayCollection.coverAlt}
        className="object-cover object-[50%_30%] transition duration-500 group-hover:scale-[1.035]"
        fill
        sizes={compact ? "(max-width: 640px) 100vw, 260px" : "(max-width: 560px) calc(100vw - 32px), 488px"}
        src={privatePoolDayCollection.coverImage}
        unoptimized
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/18 to-black/82" />
      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-normal text-[#101012] shadow-[0_8px_22px_rgba(0,0,0,0.2)]">
        <SofiaIcon className="h-3.5 w-3.5" name="lock" />
        {privatePoolDayCollection.badge}
      </span>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
        <div>
          <p className="text-[12.5px] font-semibold leading-5 text-white/74 sm:text-[13px]">{privatePoolDayCollection.subtitle}</p>
          <h2 className="mt-0.5 text-[22px] font-extrabold leading-6 tracking-normal text-white sm:mt-1 sm:text-[25px] sm:leading-7">
            {privatePoolDayCollection.title}
          </h2>
          <p className="mt-2 text-[13px] font-bold text-white sm:mt-3">{privatePoolDayCollection.buttonText}</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#111111] shadow-[0_10px_26px_rgba(0,0,0,0.28)] transition group-hover:translate-x-0.5 sm:h-11 sm:w-11">
          <SofiaIcon className="h-5 w-5" name="arrow" />
        </span>
      </div>
    </TrackedLink>
  );
}
