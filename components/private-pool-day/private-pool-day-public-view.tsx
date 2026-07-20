import Image from "next/image";
import Link from "next/link";
import { SofiaIcon } from "@/components/sofia-icon";
import { privatePoolDayCollection, privatePoolDayPublicPreviews } from "@/data/private-pool-day";

const visiblePreviews = [
  {
    src: privatePoolDayCollection.coverImage,
    alt: privatePoolDayCollection.coverAlt,
  },
  ...privatePoolDayPublicPreviews.slice(0, 2),
];

const lockedPreviews = privatePoolDayPublicPreviews.slice(2, 5);

export function PrivatePoolDayPublicView() {
  return (
    <section className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
      <Link
        aria-label="Unlock this collection"
        className="group relative z-10 min-h-[520px] cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-[#17171a] text-left shadow-[0_24px_70px_rgba(0,0,0,0.32)] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
        href={privatePoolDayCollection.joinHref}
      >
        <Image
          alt={visiblePreviews[0].alt}
          className="object-cover object-[50%_30%] transition duration-500 group-hover:scale-[1.025]"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 440px"
          src={visiblePreviews[0].src}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-black/24 to-black/8 transition duration-300 group-hover:bg-black/20" />
        <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-normal text-[#101012] shadow-[0_8px_22px_rgba(0,0,0,0.2)]">
          <SofiaIcon className="h-3.5 w-3.5" name="lock" />
          {privatePoolDayCollection.badge}
        </div>
        <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full bg-black/58 px-4 py-2 text-center text-[12px] font-black text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
          Join to view the full collection
        </span>
      </Link>

      <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#17171a] p-5 sm:p-7">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">{privatePoolDayCollection.badge}</p>
          <h1 className="mt-3 text-[36px] font-black leading-10 sm:text-[56px] sm:leading-[1]">{privatePoolDayCollection.title}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/68 sm:text-[16px]">{privatePoolDayCollection.description}</p>
          <p className="mt-4 text-[13px] font-bold text-white/72">{privatePoolDayCollection.countLabel}</p>
        </div>

        <div className="mt-7">
          <div className="grid grid-cols-2 gap-3">
            {visiblePreviews.slice(1, 3).map((image) => (
              <Link
                aria-label="Unlock this collection"
                className="group relative z-10 aspect-[4/5] cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#202024] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
                href={privatePoolDayCollection.joinHref}
                key={image.src}
              >
                <Image
                  alt={image.alt}
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  src={image.src}
                  unoptimized
                />
                <span className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/28" />
                <span className="pointer-events-none absolute inset-x-2 bottom-2 rounded-full bg-black/62 px-3 py-1.5 text-center text-[10px] font-black text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  Join to view the full collection
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {lockedPreviews.map((image) => (
              <Link
                aria-label="Unlock this collection"
                className="group relative z-10 aspect-[4/5] cursor-pointer overflow-hidden rounded-[18px] border border-white/10 bg-[#202024] outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f91]"
                href={privatePoolDayCollection.joinHref}
                key={image.src}
              >
                <Image
                  alt={image.alt}
                  className="scale-110 object-cover blur-md transition duration-500 group-hover:scale-[1.14]"
                  fill
                  sizes="(max-width: 1024px) 33vw, 180px"
                  src={image.src}
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/82 via-black/52 to-black/24 transition duration-300 group-hover:bg-black/20" />
                <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#101012] shadow-[0_10px_28px_rgba(0,0,0,0.32)]">
                  <SofiaIcon className="h-5 w-5" name="lock" />
                </span>
                <span className="pointer-events-none absolute inset-x-1.5 bottom-1.5 rounded-full bg-black/64 px-2 py-1 text-center text-[9px] font-black text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  Join to view the full collection
                </span>
              </Link>
            ))}
          </div>
          <div className="relative z-20">
            <p className="mt-3 text-center text-[12px] font-bold text-white/62">{privatePoolDayCollection.lockedCountLabel}</p>
            <p className="mt-2 text-center text-[12px] leading-5 text-white/54">
              Choose a membership package to unlock the complete collection.
            </p>
            <div className="mt-6 flex flex-col gap-3 min-[390px]:flex-row">
              <Link className="relative z-20 inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012]" href={privatePoolDayCollection.joinHref}>
                {privatePoolDayCollection.unlockText}
              </Link>
              <Link className="relative z-20 inline-flex flex-1 items-center justify-center rounded-full border border-white/12 bg-white/8 px-5 py-3 text-[13px] font-black text-white" href={privatePoolDayCollection.joinHref}>
                {privatePoolDayCollection.signInText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
