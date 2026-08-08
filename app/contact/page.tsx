import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Sofia Russo",
  description: "Contact SofiaRusso.vip.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] pt-16 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Get in touch
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/68">
          For website questions, collaborations, content inquiries or privacy
          requests, you can contact the SofiaRusso.vip team by email.
        </p>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-[#17171a] p-6">
          <p className="text-[12px] font-black uppercase tracking-[0.14em] text-white/45">
            Email
          </p>

          <a
            href="mailto:contact@sofiarusso.vip"
            className="mt-3 block break-all text-xl font-black text-[#ff79aa]"
          >
            contact@sofiarusso.vip
          </a>

          <p className="mt-4 text-[13px] leading-6 text-white/55">
            Please include a clear subject line so your message can be handled
            correctly.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-white px-5 py-3 text-[12px] font-black text-[#101012]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}