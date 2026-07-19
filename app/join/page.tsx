import type { Metadata } from "next";
import Image from "next/image";
import { EmailSignup } from "@/components/email-signup";
import { CheckIcon, SparkleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Join",
  description: "Join Sofia Hub for weekly updates, wallpapers, and new collections.",
};

const benefits = ["Weekly style updates", "New wallpaper releases", "First look at collections"];

export default function JoinPage() {
  return (
    <section className="min-h-screen bg-ink pt-[76px] text-ivory lg:pt-[84px]">
      <div className="grid min-h-[calc(100svh-76px)] lg:min-h-[calc(100svh-84px)] lg:grid-cols-2">
        <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 xl:px-24">
          <div className="w-full max-w-xl">
            <div className="mb-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-champagne">
              <SparkleIcon className="h-3.5 w-3.5" />
              The Sofia list
            </div>
            <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
              Join
              <span className="block italic text-champagne">Sofia Hub.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-ivory/65 sm:text-lg">
              Join Sofia Hub for weekly updates, wallpapers, and new collections.
            </p>
            <div className="mt-9">
              <EmailSignup theme="dark" />
            </div>
            <p className="mt-4 text-[10px] leading-5 text-ivory/35">
              Email preview only—no account or payment is created. You can connect this form to your email platform later.
            </p>
            <div className="mt-10 grid gap-3 border-t border-ivory/15 pt-7 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div className="flex items-center gap-2 text-xs text-ivory/65" key={benefit}>
                  <CheckIcon className="h-4 w-4 shrink-0 text-champagne" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[65svh] bg-cream lg:min-h-0">
          <Image
            alt="Sofia in an elegant city night look"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/images/sofia-gallery-3.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 text-[9px] font-bold uppercase tracking-editorial text-ivory/70 sm:bottom-10 sm:left-10">
            New stories, once a week
          </p>
        </div>
      </div>
    </section>
  );
}
