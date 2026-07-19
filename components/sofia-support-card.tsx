import { SofiaIcon } from "@/components/sofia-icon";
import { sofiaSupport } from "@/data/sofia-links";

export function SofiaSupportCard() {
  return (
    <section className="mt-7 rounded-[24px] bg-gradient-to-br from-[#8b5cf6] via-[#ff4f91] to-[#ff6a5f] p-5 text-white shadow-[0_22px_56px_rgba(255,79,145,0.2)]">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-white/18 text-white ring-1 ring-white/24">
        <SofiaIcon className="h-5 w-5" name="coffee" />
      </div>
      <h2 className="mt-4 text-[21px] font-extrabold leading-6 tracking-normal">{sofiaSupport.title}</h2>
      <p className="mt-2 text-[14px] font-medium leading-6 text-white/82">{sofiaSupport.text}</p>
      <a
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-[13px] font-black text-[#101012] shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.985]"
        href={sofiaSupport.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {sofiaSupport.buttonText}
      </a>
      <p className="mt-3 text-[11px] font-medium leading-5 text-white/68">{sofiaSupport.note}</p>
    </section>
  );
}
