import type { Metadata } from "next";
import { PrivatePoolDayMemberGallery } from "@/components/private-pool-day/private-pool-day-member-gallery";
import { PrivatePoolDayPublicView } from "@/components/private-pool-day/private-pool-day-public-view";
import { privatePoolDayCollection } from "@/data/private-pool-day";

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

  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-8">
        {hasMemberAccess && memberImages ? (
          <>
            <section className="rounded-[28px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
              <div className="mt-7">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">{privatePoolDayCollection.badge}</p>
                <h1 className="mt-3 text-[36px] font-black leading-10 sm:text-[56px] sm:leading-[1]">{privatePoolDayCollection.title}</h1>
                <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/68 sm:text-[16px]">{privatePoolDayCollection.description}</p>
                <h2 className="text-[22px] font-black">Full Collection</h2>
                <p className="mt-1 text-[13px] text-white/54">{memberImages.length} photos</p>
              </div>
            </section>
            <section className="mt-8">
              <PrivatePoolDayMemberGallery images={memberImages} />
            </section>
          </>
        ) : (
          <PrivatePoolDayPublicView />
        )}
      </main>
    </div>
  );
}
