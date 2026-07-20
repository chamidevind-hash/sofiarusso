import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy - SofiaRusso",
  description: "Privacy information for SofiaRusso and SofiaHub.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-[34px] font-black">Privacy</h1>
        <p className="mt-4 text-[14px] leading-6 text-white/66">
          SofiaRusso uses external services only when you choose to open social, merch, wishlist or support links. Those websites may have their own privacy practices.
        </p>
        <Link className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]" href="/">
          Home
        </Link>
      </main>
    </div>
  );
}
