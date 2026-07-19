import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

const footerLinks = [
  ["Gallery", "/gallery"],
  ["Collections", "/collections"],
  ["Downloads", "/downloads"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["Join", "/join"],
];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="page-shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 border-b border-ivory/15 pb-14 md:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <Link className="font-display text-4xl" href="/">
              Sofia Hub
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-ivory/60">
              Style, lifestyle, and exclusive digital collections from a fictional AI creator with a modern point of view.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {footerLinks.map(([label, href]) => (
              <Link
                className="group flex items-center justify-between border-b border-ivory/10 py-3 text-[10px] font-bold uppercase tracking-editorial text-ivory/75 transition-colors hover:text-ivory"
                href={href}
                key={href}
              >
                {label}
                <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[9px] uppercase tracking-[0.2em] text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sofia Hub. All rights reserved.</p>
          <p>AI-created lifestyle editorial</p>
        </div>
      </div>
    </footer>
  );
}
