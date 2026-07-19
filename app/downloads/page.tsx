import type { Metadata } from "next";
import { DownloadCard } from "@/components/download-card";
import { PageHero } from "@/components/page-hero";
import { downloads } from "@/data";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Discover upcoming Sofia Hub mobile, desktop, and weekly wallpaper packs.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        description="Premium wallpaper packs inspired by Sofia's latest editorials, designed for every screen in your day."
        eyebrow="Digital details"
        title="Downloads"
      />
      <section className="section-space bg-ivory">
        <div className="page-shell">
          <div className="mb-8 flex items-center justify-between border-y border-ink/10 py-4 text-[9px] font-bold uppercase tracking-editorial text-taupe">
            <span>Wallpaper library</span>
            <span>Launching soon</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {downloads.map((download, index) => (
              <DownloadCard download={download} key={download.slug} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
