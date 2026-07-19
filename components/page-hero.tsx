import { SparkleIcon } from "@/components/icons";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-ink/10 bg-ivory pt-32 sm:pt-36">
      <div className="page-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">
            <SparkleIcon className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.025em] text-ink sm:text-7xl lg:text-[7.4rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-taupe sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
