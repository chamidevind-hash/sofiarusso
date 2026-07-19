import Image from "next/image";
import Link from "next/link";
import { SofiaIcon } from "@/components/sofia-icon";
import { sofiaFeaturedCollection } from "@/data/sofia-links";

export function SofiaFeaturedCard() {
  return (
    <Link
      aria-label={`${sofiaFeaturedCollection.cta}: ${sofiaFeaturedCollection.title}`}
      className="group relative block h-[180px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_55px_rgba(0,0,0,0.34)] outline-none transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--accent-pink)] active:scale-[0.985] sm:h-[210px]"
      href={sofiaFeaturedCollection.href}
    >
      <Image
        alt="Sofia standing on a city balcony at night"
        className="object-cover object-[58%_40%] transition duration-500 group-hover:scale-[1.035]"
        fill
        sizes="(max-width: 560px) calc(100vw - 32px), 488px"
        src={sofiaFeaturedCollection.image}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/14 via-black/8 to-black/78" />
      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-normal text-[#101012] shadow-[0_8px_22px_rgba(0,0,0,0.2)]">
        Featured
      </span>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
        <div>
          <p className="text-[12.5px] font-semibold leading-5 text-white/74 sm:text-[13px]">{sofiaFeaturedCollection.subtitle}</p>
          <h2 className="mt-0.5 text-[22px] font-extrabold leading-6 tracking-normal text-white sm:mt-1 sm:text-[25px] sm:leading-7">{sofiaFeaturedCollection.title}</h2>
          <p className="mt-2 text-[13px] font-bold text-white sm:mt-3">{sofiaFeaturedCollection.cta}</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#111111] shadow-[0_10px_26px_rgba(0,0,0,0.28)] transition group-hover:translate-x-0.5 sm:h-11 sm:w-11">
          <SofiaIcon className="h-5 w-5" name="arrow" />
        </span>
      </div>
    </Link>
  );
}
