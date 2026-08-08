import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Sofia Russo",
  description: "Privacy Policy for SofiaRusso.vip.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] pt-16 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ff4f91]">
          Legal
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Privacy Policy
        </h1>

        <p className="mt-3 text-[13px] text-white/45">
          Last updated: August 8, 2026
        </p>

        <div className="mt-8 space-y-9 text-[15px] leading-7 text-white/72">
          <section>
            <h2 className="text-xl font-black text-white">
              Information we collect
            </h2>

            <p className="mt-3">
              SofiaRusso.vip may collect limited technical information when you
              visit the website, including browser type, device type, pages
              visited, approximate location, referral source and general usage
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Analytics
            </h2>

            <p className="mt-3">
              We may use analytics services such as Google Analytics to
              understand how visitors use the website. These services may use
              cookies or similar technologies to measure visits, page views and
              interactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Advertising
            </h2>

            <p className="mt-3">
              This website may display advertising provided by third-party
              advertising services, including Google AdSense. Advertising
              providers may use cookies or similar technologies to show and
              measure advertisements.
            </p>

            <p className="mt-3">
              Google and its advertising partners may use cookies to serve ads
              based on a visitor&apos;s previous visits to this website or other
              websites, where permitted by applicable law and consent choices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Cookies
            </h2>

            <p className="mt-3">
              Cookies may be used for analytics, website functionality,
              advertising measurement and personalization where applicable.
              Visitors may be offered controls to accept or reject optional
              cookies depending on their location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              External links
            </h2>

            <p className="mt-3">
              SofiaRusso.vip may contain links to social networks, download
              services, merchandise providers or other third-party websites.
              Those services operate under their own privacy policies and
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Data retention
            </h2>

            <p className="mt-3">
              Information collected through analytics or website services may
              be retained only for as long as reasonably necessary for
              analytics, security, legal or operational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Changes to this policy
            </h2>

            <p className="mt-3">
              This Privacy Policy may be updated from time to time. The latest
              version will always be published on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white">
              Contact
            </h2>

            <p className="mt-3">
              Questions about this Privacy Policy can be submitted through the
              website&apos;s contact page.
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
            href="/contact"
            className="inline-flex rounded-full border border-white/15 px-5 py-3 text-[12px] font-black text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}