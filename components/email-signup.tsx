"use client";

import { FormEvent, useState } from "react";
import { CheckIcon, MailIcon } from "@/components/icons";

type EmailSignupProps = {
  theme?: "light" | "dark";
  compact?: boolean;
};

export function EmailSignup({ theme = "light", compact = false }: EmailSignupProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`flex min-h-14 items-center gap-3 border px-5 text-sm ${
          theme === "dark" ? "border-ivory/25 text-ivory" : "border-ink/20 text-ink"
        }`}
        role="status"
      >
        <CheckIcon className="h-5 w-5 text-champagne" />
        You&apos;re on the list. Welcome to Sofia Hub.
      </div>
    );
  }

  return (
    <form
      className={`flex w-full flex-col gap-3 ${compact ? "max-w-xl sm:flex-row" : "max-w-2xl sm:flex-row"}`}
      onSubmit={handleSubmit}
    >
      <label className="relative flex-1" htmlFor={`email-${theme}-${compact}`}>
        <span className="sr-only">Email address</span>
        <MailIcon
          className={`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${
            theme === "dark" ? "text-ivory/50" : "text-taupe"
          }`}
        />
        <input
          className={`h-14 w-full border bg-transparent pl-12 pr-4 text-sm outline-none transition-colors placeholder:text-current placeholder:opacity-45 focus:border-champagne ${
            theme === "dark" ? "border-ivory/20 text-ivory" : "border-ink/20 text-ink"
          }`}
          id={`email-${theme}-${compact}`}
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
      </label>
      <button
        className={`h-14 shrink-0 border px-7 text-[10px] font-bold uppercase tracking-editorial transition-colors ${
          theme === "dark"
            ? "border-ivory bg-ivory text-ink hover:bg-transparent hover:text-ivory"
            : "border-ink bg-ink text-ivory hover:bg-transparent hover:text-ink"
        }`}
        type="submit"
      >
        Join the list
      </button>
    </form>
  );
}
