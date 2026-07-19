import type { ReactNode } from "react";
import { SparkleIcon } from "@/components/icons";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between ${
        align === "center" ? "mx-auto max-w-3xl text-center md:block" : ""
      }`}
    >
      <div className={align === "center" ? "mx-auto" : "max-w-2xl"}>
        <div
          className={`mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-taupe ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <SparkleIcon className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
        <h2 className="font-display text-4xl leading-[0.95] text-ink sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-xl text-sm leading-7 text-taupe sm:text-base">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
