import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0d] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-[12px] text-white/54 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-bold text-white">© 2026 SofiaRusso</p>
          <p className="mt-1">Sofia is an AI virtual creator.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <Link className="rounded-full px-2 py-1 font-semibold text-white/62 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
