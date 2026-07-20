import Link from "next/link";
import { SofiaIcon } from "@/components/sofia-icon";
import { sofiaSocialLinks } from "@/data/sofia-links";

const iconColorByName = {
  facebook: "text-[#1877F2]",
  globe: "text-[var(--accent-violet)]",
  instagram: "text-[var(--accent-pink)]",
  mail: "text-[#111111]",
  paypal: "text-[#0070BA]",
} as const;

export function SofiaSocialIcons() {
  return (
    <nav aria-label="Sofia social links" className="mt-1.5 flex min-w-0 items-center justify-center gap-2 sm:mt-2.5">
      {sofiaSocialLinks.map((link) => {
        const color = iconColorByName[link.icon as keyof typeof iconColorByName] ?? "text-[#111111]";
        const className = `grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-white ${color} shadow-[0_8px_20px_rgba(0,0,0,0.24)] ring-1 ring-black/5 transition duration-200 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--accent-pink)] active:scale-[0.94]`;
        const content = <SofiaIcon className="h-[19px] w-[19px]" name={link.icon} />;

        if (link.external) {
          return (
            <a aria-label={link.label} className={className} href={link.href} key={link.label} rel="noopener noreferrer" target="_blank">
              {content}
            </a>
          );
        }

        if (link.href.startsWith("mailto:")) {
          return (
            <a aria-label={link.label} className={className} href={link.href} key={link.label}>
              {content}
            </a>
          );
        }

        return (
          <Link aria-label={link.label} className={className} href={link.href} key={link.label}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
