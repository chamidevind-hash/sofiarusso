import Link from "next/link";
import { SofiaIcon } from "@/components/sofia-icon";
import type { SofiaLink, SofiaLinkVariant } from "@/data/sofia-links";

type SofiaLinkCardProps = {
  link: SofiaLink;
};

const tileClassByVariant: Record<SofiaLinkVariant, string> = {
  blue: "bg-gradient-to-br from-[#4f8cff]/24 to-[#8b5cf6]/28 text-[#7ea8ff]",
  coral: "bg-gradient-to-br from-[#ff6a5f]/24 to-[#ff4f91]/24 text-[#ff8c84]",
  facebook: "bg-white text-[#1877F2]",
  instagram: "bg-gradient-to-br from-[#ff6a5f] via-[#ff4f91] to-[#8b5cf6] text-white",
  pink: "bg-gradient-to-br from-[#ff4f91]/26 to-[#8b5cf6]/26 text-[#ff79aa]",
  primary: "bg-gradient-to-br from-[#ff4f91] to-[#ff6a5f] text-white",
  wishlist: "bg-[#fff7ed] text-[#17120f] shadow-[inset_0_-3px_0_rgba(255,106,95,0.24)]",
};

export function SofiaLinkCard({ link }: SofiaLinkCardProps) {
  const isPrimary = link.variant === "primary";
  const className = isPrimary
    ? "group grid min-h-[72px] grid-cols-[44px_minmax(0,1fr)_36px] items-center gap-3 rounded-[20px] border border-white/85 bg-white px-3.5 py-3 text-left text-[#101012] shadow-[0_18px_44px_rgba(255,79,145,0.18)] transition duration-250 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.985] sm:min-h-[80px] sm:grid-cols-[48px_minmax(0,1fr)_38px] sm:px-4 sm:py-4"
    : "group grid min-h-[72px] grid-cols-[44px_minmax(0,1fr)_36px] items-center gap-3 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] px-3.5 py-3 text-left text-[var(--text-primary)] shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition duration-250 hover:-translate-y-0.5 hover:border-white/18 hover:bg-[var(--surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-pink)] active:scale-[0.985] sm:min-h-[80px] sm:grid-cols-[48px_minmax(0,1fr)_38px] sm:px-4 sm:py-4";

  const content = (
    <>
      <span className={`grid h-11 w-11 place-items-center rounded-[13px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:h-12 sm:w-12 sm:rounded-[14px] ${tileClassByVariant[link.variant]}`}>
        <SofiaIcon className="h-[21px] w-[21px] sm:h-[23px] sm:w-[23px]" name={link.icon} />
      </span>
      <span className="min-w-0">
        <span className="flex min-w-0 items-center gap-2">
          <span className="truncate text-[15px] font-extrabold leading-5 tracking-normal">{link.title}</span>
          {link.label ? (
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-black leading-4 tracking-normal ${
                isPrimary ? "bg-[#111111] text-white" : "bg-white/8 text-white/70"
              }`}
            >
              {link.label}
            </span>
          ) : null}
        </span>
        <span className={`mt-1 block truncate text-[12.5px] font-medium leading-4 ${isPrimary ? "text-[#101012]/62" : "text-[var(--text-secondary)]"}`}>
          {link.subtitle}
        </span>
      </span>
      <span
        className={`grid h-9 w-9 place-items-center rounded-full transition group-hover:translate-x-0.5 sm:h-[38px] sm:w-[38px] ${
          isPrimary ? "bg-[#101012] text-white" : "bg-white/8 text-white"
        }`}
      >
        <SofiaIcon className="h-[18px] w-[18px]" name="arrow" />
      </span>
    </>
  );

  if (link.external) {
    return (
      <a aria-label={link.ariaLabel ?? link.title} className={className} data-sofia-link-card href={link.href} rel="noopener noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link aria-label={link.ariaLabel ?? link.title} className={className} data-sofia-link-card href={link.href}>
      {content}
    </Link>
  );
}
