"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/collections", label: "Collections" },
  { href: "/downloads", label: "Downloads" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-ivory/95 backdrop-blur-xl">
      <div className="page-shell flex h-[76px] items-center justify-between lg:h-[84px]">
        <Link className="group inline-flex items-center gap-3" href="/" aria-label="Sofia Hub home">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-ink bg-ink font-display text-lg italic text-ivory transition-colors group-hover:bg-champagne group-hover:text-ink">
            S
          </span>
          <span className="font-display text-2xl tracking-[-0.02em] text-ink">Sofia Hub</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                className={`relative py-2 text-[10px] font-bold uppercase tracking-editorial transition-colors hover:text-taupe ${
                  active ? "text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-ink" : "text-ink/70"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            className="border border-ink bg-ink px-5 py-3 text-[10px] font-bold uppercase tracking-editorial text-ivory transition-colors hover:bg-transparent hover:text-ink"
            href="/join"
          >
            Join Free
          </Link>
        </nav>

        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center border border-ink/15 text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-ink/10 bg-ivory transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[520px]" : "max-h-0 border-t-transparent"
        }`}
      >
        <nav className="page-shell flex flex-col py-5" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link
              className="flex items-center justify-between border-b border-ink/10 py-4 font-display text-3xl text-ink"
              href={link.href}
              key={link.href}
            >
              {link.label}
              <span className="font-sans text-[10px] text-taupe">0{index + 1}</span>
            </Link>
          ))}
          <Link
            className="mt-5 flex min-h-12 items-center justify-center bg-ink text-[10px] font-bold uppercase tracking-editorial text-ivory"
            href="/join"
          >
            Join Free
          </Link>
        </nav>
      </div>
    </header>
  );
}
