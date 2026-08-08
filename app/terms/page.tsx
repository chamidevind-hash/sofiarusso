import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Sofia Russo",
  description: "Terms of Use for SofiaRusso.vip.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] pt-16 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
          Legal
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Terms of Use
        </h1>

        <p className="mt-3 text-[13px] text-white/45">
          Last updated: August 8, 2026
        </p>

        <div className="mt-8 space-y-9 text-[15px] leading-7 text-white/72">
          <section>
            <h2 className="text-xl font-black text-white">
              About this website
            </h2>

            <p className="mt-3">
              Sofia Russo is a virtual creator. SofiaRusso.vip provides
              lifestyle content, fashion inspiration, photography articles,
              digital wallpapers and related creative content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Use of content
            </h2>

            <p className="mt-3">
              Content published on this website is provided for personal and
              informational use unless otherwise stated.
            </p>

            <p className="mt-3">
              Images, articles, graphics, wallpapers and other website content
              may not be copied, resold, redistributed or presented as your own
              work without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Wallpaper downloads
            </h2>

            <p className="mt-3">
              Free wallpapers are intended for personal use on your own
              devices. Commercial redistribution, resale or inclusion in other
              downloadable collections is not permitted without written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Third-party services
            </h2>

            <p className="mt-3">
              Some links may direct visitors to third-party websites or
              services. SofiaRusso.vip is not responsible for the availability,
              content, privacy practices or terms of those external services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Advertising
            </h2>

            <p className="mt-3">
              The website may contain advertisements or sponsored content.
              Advertising does not necessarily represent an endorsement of the
              advertised product, service or company.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Availability
            </h2>

            <p className="mt-3">
              We may update, remove or change website content, features and
              downloads at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Changes to these terms
            </h2>

            <p className="mt-3">
              These Terms may be revised occasionally. Continued use of the
              website after changes are published means that you accept the
              updated terms.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full bg-white px-5 py-3 text-[12px] font-black text-[#101012]"
          >
            Home
          </Link>

          <Link
            href="/privacy"
            className="inline-flex rounded-full border border-white/15 px-5 py-3 text-[12px] font-black text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
}