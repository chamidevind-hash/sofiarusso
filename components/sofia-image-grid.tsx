import Image from "next/image";
import Link from "next/link";
import { sofiaPreviewImages } from "@/data/sofia-links";

export function SofiaImageGrid() {
  return (
    <section className="mt-7">
      <h2 className="text-[17px] font-extrabold leading-6 text-[var(--text-primary)]">Latest from Sofia</h2>
      <div className="mt-3 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-2.5">
        {sofiaPreviewImages.map((item, index) => (
          <Link
            aria-label={`Open ${item.alt}`}
            className={`group relative overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-pink)] ${
              item.featured ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
            }`}
            href={item.href}
            key={item.image}
          >
            <Image
              alt={item.alt}
              className="object-cover transition duration-500 group-hover:scale-[1.025]"
              fill
              loading="lazy"
              sizes={item.featured ? "(max-width: 560px) calc(100vw - 32px), 488px" : "(max-width: 560px) calc((100vw - 42px) / 2), 239px"}
              src={item.image}
            />
            {index === 0 ? <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
