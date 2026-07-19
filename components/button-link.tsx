import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  className?: string;
  showArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
  className = "",
  showArrow = true,
}: ButtonLinkProps) {
  const variants = {
    dark: "border-ink bg-ink text-ivory hover:bg-transparent hover:text-ink",
    light: "border-ivory bg-ivory text-ink hover:bg-transparent hover:text-ivory",
    outline: "border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  };

  return (
    <Link
      className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-6 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${variants[variant]} ${className}`}
      href={href}
    >
      {children}
      {showArrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
