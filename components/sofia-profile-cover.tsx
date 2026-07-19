import Image from "next/image";
import Link from "next/link";
import { SofiaIcon } from "@/components/sofia-icon";
import { sofiaProfile } from "@/data/sofia-links";

export function SofiaProfileCover() {
  return (
    <header
      className="relative h-[120px] overflow-hidden rounded-b-[22px] bg-[var(--surface)] sm:h-[170px] sm:rounded-b-[26px]"
      data-sofia-cover
    >
      <Image
        alt="Sofia on a luxury city balcony at night"
        className="object-cover object-[58%_42%]"
        fill
        priority
        sizes="(max-width: 560px) 100vw, 520px"
        src={sofiaProfile.coverImage}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/14 to-[var(--page-bg)]" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3.5 pt-[calc(10px+env(safe-area-inset-top))] sm:px-4">
        <Link
          aria-label="SofiaHub home"
          className="grid h-9 min-w-9 place-items-center rounded-full border border-white/15 bg-black/35 px-2.5 text-[0.68rem] font-black tracking-normal text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:bg-black/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.96] sm:h-10 sm:min-w-10 sm:px-3"
          href="/"
        >
          SH
        </Link>
        <a
          aria-label="Share SofiaHub"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/35 text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:bg-black/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.96] sm:h-10 sm:w-10"
          href="mailto:?subject=SofiaHub&body=https://sofiahub.com"
        >
          <SofiaIcon className="h-[18px] w-[18px] sm:h-5 sm:w-5" name="share" />
        </a>
      </div>
    </header>
  );
}
