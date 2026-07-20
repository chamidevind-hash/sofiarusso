import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms - SofiaRusso",
  description: "Terms for using SofiaRusso and SofiaHub downloads.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-[34px] font-black">Terms</h1>
        <p className="mt-4 text-[14px] leading-6 text-white/66">
          Sofia is an AI virtual creator. Wallpaper downloads are for personal use only and may not be resold, redistributed or claimed as your own artwork.
        </p>
        <Link className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]" href="/">
          Home
        </Link>
      </main>
    </div>
  );
}
