"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/downloads", label: "Wallpapers" },
];

const merchUrl = process.env.NEXT_PUBLIC_FOURTHWALL_URL ?? "https://fourthwall.com/";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/92 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-6xl min-w-0 items-center justify-between gap-3 px-4 sm:px-6">
        <Link aria-label="SofiaRusso home" className="flex min-w-0 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4f91]" href="/">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#ff4f91] to-[#8b5cf6] text-[12px] font-black text-white">
            SR
          </span>
          <span className="truncate text-[15px] font-black tracking-normal">SofiaRusso</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 sm:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                className={`rounded-full px-3 py-2 text-[12px] font-bold transition hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91] ${
                  active ? "bg-white text-[#101012]" : "text-white/74"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            className="rounded-full px-3 py-2 text-[12px] font-bold text-white/74 transition hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
            href={merchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Merch
          </a>
        </nav>

        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/6 text-white sm:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-[#0f0f12] transition-[max-height] duration-300 sm:hidden ${open ? "max-h-72" : "max-h-0 border-t-transparent"}`}>
        <nav aria-label="Mobile navigation" className="mx-auto grid w-full max-w-6xl min-w-0 gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <Link className="rounded-[16px] px-4 py-3 text-[14px] font-bold text-white/82 hover:bg-white/8" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a className="rounded-[16px] px-4 py-3 text-[14px] font-bold text-white/82 hover:bg-white/8" href={merchUrl} rel="noopener noreferrer" target="_blank">
            Merch
          </a>
        </nav>
      </div>
    </header>
  );
}
