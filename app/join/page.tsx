import type { Metadata } from "next";

const insiderUrl = process.env.NEXT_PUBLIC_PAYPAL_INSIDER_URL;
const vipUrl = process.env.NEXT_PUBLIC_PAYPAL_VIP_URL;
const lifetimeUrl = process.env.NEXT_PUBLIC_PAYPAL_LIFETIME_URL;

console.log({
  insiderConfigured: Boolean(insiderUrl),
  vipConfigured: Boolean(vipUrl),
  lifetimeConfigured: Boolean(lifetimeUrl),
});

export const metadata: Metadata = {
  title: "Join SofiaHub - Sofia Russo",
  description: "Choose a SofiaRusso membership package for private collections, wallpapers and member-only drops.",
  alternates: { canonical: "/join" },
  openGraph: {
    title: "Join SofiaHub - Sofia Russo",
    description: "Choose a SofiaRusso membership package for private collections, wallpapers and member-only drops.",
  },
};

const membershipPackages = [
  {
    name: "Sofia Insider",
    price: "$9.99",
    cadence: "/month",
    features: ["All members-only photo collections", "HD wallpapers", "New monthly drops", "Member voting"],
    buttonLabel: "Join Insider",
    paypalUrl: insiderUrl,
  },
  {
    name: "Sofia VIP",
    price: "$19.99",
    cadence: "/month",
    badge: "Most Popular",
    features: [
      "Everything in Sofia Insider",
      "Extra exclusive collections",
      "Early access to new drops",
      "Priority member requests",
      "Bonus wallpapers",
    ],
    buttonLabel: "Join VIP",
    paypalUrl: vipUrl,
    featured: true,
  },
  {
    name: "Lifetime Access",
    price: "$59",
    cadence: "one-time",
    features: ["Permanent access to current collections", "Future wallpaper collections", "No monthly payment", "One-time purchase"],
    buttonLabel: "Get Lifetime Access",
    paypalUrl: lifetimeUrl,
  },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">Membership</p>
          <h1 className="mt-3 text-[34px] font-black leading-9 sm:text-[48px] sm:leading-[1]">Choose Your Access</h1>
          <p className="mt-4 text-[15px] leading-6 text-white/66 sm:text-[16px]">
            Unlock Sofia's private collections, exclusive wallpapers and new member-only drops.
          </p>
        </header>

        <section aria-label="Membership packages" className="mt-8 grid gap-4 lg:grid-cols-3">
          {membershipPackages.map((membershipPackage) => (
            <article
              className={`relative flex min-h-full flex-col rounded-[24px] border p-5 shadow-[0_22px_60px_rgba(0,0,0,0.26)] ${
                membershipPackage.featured
                  ? "border-[#ff4f91]/60 bg-gradient-to-b from-[#24151d] to-[#17171a] ring-1 ring-[#ff4f91]/35"
                  : "border-white/10 bg-[#17171a]"
              }`}
              key={membershipPackage.name}
            >
              {membershipPackage.badge ? (
                <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-normal text-[#101012]">
                  {membershipPackage.badge}
                </span>
              ) : null}

              <div>
                <h2 className="pr-24 text-[21px] font-black">{membershipPackage.name}</h2>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-[38px] font-black leading-none tracking-tight">{membershipPackage.price}</span>
                  <span className="pb-1 text-[13px] font-bold text-white/54">{membershipPackage.cadence}</span>
                </div>
              </div>

              <ul className="mt-5 grid gap-3 text-[13px] leading-5 text-white/68">
                {membershipPackage.features.map((feature) => (
                  <li className="flex gap-2" key={feature}>
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4f91]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-20 mt-auto pt-6">
                {membershipPackage.paypalUrl ? (
                  <a
                    className={`relative z-20 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[13px] font-black transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91] ${
                      membershipPackage.featured ? "bg-white text-[#101012]" : "border border-white/12 bg-white/8 text-white hover:bg-white/12"
                    }`}
                    href={membershipPackage.paypalUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {membershipPackage.buttonLabel}
                  </a>
                ) : (
                  <button
                    className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[13px] font-black text-white/42"
                    disabled
                    type="button"
                  >
                    Payment link unavailable
                  </button>
                )}
              </div>
            </article>
          ))}
        </section>

        <p className="mx-auto mt-5 max-w-3xl rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-center text-[12px] leading-5 text-white/58">
          Payments are processed securely through PayPal. Access instructions will be sent after payment.
        </p>
      </main>
    </div>
  );
}
