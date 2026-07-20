import Image from "next/image";
import { SofiaIcon } from "@/components/sofia-icon";
import { sofiaProfile, sofiaStats } from "@/data/sofia-links";

export function SofiaProfileInfo() {
  return (
    <section className="-mt-12 flex flex-col items-center text-center sm:-mt-10">
      <div className="relative">
        <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border-[3px] border-[var(--page-bg)] bg-[var(--surface)] shadow-[0_12px_28px_rgba(0,0,0,0.32)] sm:h-[84px] sm:w-[84px]">
          <Image
            alt="Sofia profile photo"
            className="object-cover object-[50%_32%]"
            fill
            priority
            sizes="(max-width: 640px) 72px, 84px"
            src={sofiaProfile.avatarImage}
          />
        </div>
        <span
          aria-label="Sofia creator badge"
          className="absolute bottom-0 right-0 grid h-6 w-6 place-items-center rounded-full border-2 border-[var(--page-bg)] bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-violet)] text-white shadow-[0_8px_18px_rgba(255,79,145,0.3)] sm:h-7 sm:w-7"
        >
          <SofiaIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" name="sparkles" />
        </span>
      </div>

      <div className="mt-1 flex items-center justify-center gap-2">
        <h1 className="text-[22px] font-bold leading-6 tracking-normal text-[var(--text-primary)]">{sofiaProfile.name}</h1>
        <span className="rounded-full border border-white/10 bg-white/8 px-2 py-0.5 text-[10px] font-extrabold leading-4 text-white/78">
          Virtual Creator
        </span>
      </div>
      <p className="text-[14px] font-semibold leading-[18px] text-[var(--text-secondary)]">{sofiaProfile.meta}</p>
      <p className="mx-auto mt-0.5 line-clamp-2 max-w-[280px] text-[13px] leading-[1.3] text-[var(--text-secondary)]">
        {sofiaProfile.bio}
      </p>
    </section>
  );
}

export function SofiaStatsRow() {
  return (
    <dl className="mt-4 grid w-full grid-cols-3 overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)]/74 sm:mt-5 sm:rounded-[20px]">
      {sofiaStats.map((stat, index) => (
        <div className="relative flex min-h-[64px] items-center justify-center px-2 sm:min-h-[72px]" key={stat}>
          {index > 0 ? <span className="absolute left-0 top-3 h-[38px] w-px bg-white/10 sm:top-4 sm:h-10" /> : null}
          <dt className="sr-only">Sofia profile detail</dt>
          <dd className="text-center text-[11.5px] font-bold leading-4 text-white/82 sm:text-[12.5px]">{stat}</dd>
        </div>
      ))}
    </dl>
  );
}
