import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrivatePoolDayMemberGallery } from "@/components/private-pool-day/private-pool-day-member-gallery";
import { SofiaIcon } from "@/components/sofia-icon";
import { privatePoolDayCollection, privatePoolDayPublicPreviews } from "@/data/private-pool-day";

export const dynamic = "force-dynamic";

const isMember = false;

export const metadata: Metadata = {
  title: "Sofia's Private Pool Day - Sofia Russo",
  description: "Preview Sofia's relaxed private-pool collection featuring swimwear photos, casual selfies and quiet summer moments.",
  alternates: { canonical: "/collections/private-pool-day" },
  openGraph: {
    title: "Sofia's Private Pool Day - Sofia Russo",
    description: "Preview Sofia's relaxed private-pool collection featuring swimwear photos, casual selfies and quiet summer moments.",
    images: [{ url: privatePoolDayCollection.coverImage, width: 1024, height: 1536, alt: privatePoolDayCollection.coverAlt }],
  },
};

async function getMemberImagesIfAllowed() {
  if (!isMember) {
    return null;
  }

  const { privatePoolDayMemberImages } = await import("@/data/private-pool-day-member");
  return privatePoolDayMemberImages;
}

export default async function PrivatePoolDayPage() {
  const memberImages = await getMemberImagesIfAllowed();
  const hasMemberAccess = Boolean(memberImages);
  const visiblePreviews = privatePoolDayPublicPreviews.slice(0, 2);
  const lockedPreviews = privatePoolDayPublicPreviews.slice(2, 5);

  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-8">
        <section className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/10 bg-[#17171a] shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
            <Image
              alt={privatePoolDayCollection.coverAlt}
              className="object-cover object-[50%_30%]"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 440px"
              src={privatePoolDayCollection.coverImage}
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-black/24 to-black/8" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-normal text-[#101012] shadow-[0_8px_22px_rgba(0,0,0,0.2)]">
              <SofiaIcon className="h-3.5 w-3.5" name="lock" />
              {privatePoolDayCollection.badge}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">{privatePoolDayCollection.badge}</p>
              <h1 className="mt-3 text-[36px] font-black leading-10 sm:text-[56px] sm:leading-[1]">{privatePoolDayCollection.title}</h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/68 sm:text-[16px]">{privatePoolDayCollection.description}</p>
              <p className="mt-4 text-[13px] font-bold text-white/72">{privatePoolDayCollection.countLabel}</p>
            </div>

            {hasMemberAccess && memberImages ? (
              <div className="mt-7">
                <h2 className="text-[22px] font-black">Full Collection</h2>
                <p className="mt-1 text-[13px] text-white/54">{memberImages.length} photos</p>
              </div>
            ) : (
              <div className="mt-7">
                <div className="grid grid-cols-2 gap-3">
                  {visiblePreviews.map((image) => (
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 bg-[#202024]" key={image.src}>
                      <Image alt={image.alt} className="object-cover" fill sizes="(max-width: 1024px) 50vw, 300px" src={image.src} unoptimized />
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {lockedPreviews.map((image) => (
                    <Link
                      aria-label={`Unlock ${privatePoolDayCollection.title}`}
                      className="group relative aspect-[4/5] overflow-hidden rounded-[18px] border border-white/10 bg-[#202024] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
                      href={privatePoolDayCollection.joinHref}
                      key={image.src}
                    >
                      <Image alt={image.alt} className="scale-110 object-cover blur-md transition duration-500 group-hover:scale-[1.16]" fill sizes="(max-width: 1024px) 33vw, 180px" src={image.src} unoptimized />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/48 to-black/20" />
                      <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#101012] shadow-[0_10px_28px_rgba(0,0,0,0.32)]">
                        <SofiaIcon className="h-5 w-5" name="lock" />
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="mt-3 text-center text-[12px] font-bold text-white/62">{privatePoolDayCollection.lockedCountLabel}</p>
                <div className="mt-6 flex flex-col gap-3 min-[390px]:flex-row">
                  <Link className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]" href={privatePoolDayCollection.joinHref}>
                    {privatePoolDayCollection.unlockText}
                  </Link>
                  <Link className="inline-flex flex-1 items-center justify-center rounded-full border border-white/12 bg-white/8 px-5 py-3 text-[13px] font-black text-white" href={privatePoolDayCollection.joinHref}>
                    {privatePoolDayCollection.signInText}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {hasMemberAccess && memberImages ? (
          <section className="mt-8">
            <PrivatePoolDayMemberGallery images={memberImages} />
          </section>
        ) : null}
      </main>
    </div>
  );
}
