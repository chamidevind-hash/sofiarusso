import { SofiaIcon } from "@/components/sofia-icon";
import { sofiaMerch } from "@/data/sofia-links";

export function SofiaMerchSection() {
  return (
    <section className="mt-6 sm:mt-7">
      <h2 className="text-[17px] font-extrabold leading-6 text-[var(--text-primary)]">Shop Sofia</h2>

      <a
        aria-label={`${sofiaMerch.cta}: ${sofiaMerch.title}`}
        className="group relative mt-3 block min-h-[158px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#8b5cf6] via-[#ff4f91] to-[#ff6a5f] p-4 text-white shadow-[0_22px_56px_rgba(255,79,145,0.18)] outline-none transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white active:scale-[0.985] sm:min-h-[168px] sm:p-5"
        href={sofiaMerch.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_18px_18px,rgba(255,255,255,0.32)_1.5px,transparent_1.5px)] [background-size:28px_28px]"
        />
        <span aria-hidden="true" className="absolute -right-10 -top-12 h-28 w-28 rounded-full border border-white/22 sm:h-32 sm:w-32" />
        <span className="relative grid h-10 w-10 place-items-center rounded-[13px] bg-white/18 text-white ring-1 ring-white/24 sm:h-11 sm:w-11 sm:rounded-[14px]">
          <SofiaIcon className="h-5 w-5" name="bag" />
        </span>
        <span className="relative mt-3 block text-[20px] font-extrabold leading-6 tracking-normal sm:mt-4 sm:text-[21px]">{sofiaMerch.title}</span>
        <span className="relative mt-1.5 block max-w-[20rem] text-[13px] font-medium leading-5 text-white/82 sm:mt-2 sm:text-[14px] sm:leading-6">{sofiaMerch.subtitle}</span>
        <span className="relative mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-white px-5 text-[13px] font-black text-[#101012] shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition group-hover:translate-x-0.5 sm:mt-5 sm:min-h-11">
          {sofiaMerch.cta}
        </span>
      </a>

      <div className="mt-3 flex items-center gap-3 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] px-3.5 py-3 sm:px-4 sm:py-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#fff7ed] text-[#17120f] shadow-[inset_0_-3px_0_rgba(255,106,95,0.22)]">
          <SofiaIcon className="h-5 w-5" name="gift" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[15px] font-extrabold leading-5 text-white">{sofiaMerch.wishlistTitle}</span>
          <span className="mt-1 block text-[12.5px] font-medium leading-4 text-[var(--text-secondary)]">{sofiaMerch.wishlistText}</span>
        </span>
        <a
          className="shrink-0 rounded-full bg-white px-3 py-2 text-[11px] font-black text-[#101012] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-pink)] active:scale-[0.985]"
          href={sofiaMerch.wishlistHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          {sofiaMerch.wishlistCta}
        </a>
      </div>
    </section>
  );
}
