"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const supportEmail = "hello@sofiahub.com";

export function MemberLoginForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setMessage("Member login is being prepared. For current access assistance, please contact support.");
  }

  return (
    <form className="mx-auto mt-8 grid w-full max-w-md gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-left text-[13px] font-bold text-white/70" htmlFor="member-email">
        Email address
        <input
          autoComplete="email"
          className="h-12 rounded-[16px] border border-white/10 bg-white/7 px-4 text-[15px] font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#ff4f91]/70"
          id="member-email"
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
      </label>

      <label className="grid gap-2 text-left text-[13px] font-bold text-white/70" htmlFor="member-password">
        Password
        <input
          autoComplete="current-password"
          className="h-12 rounded-[16px] border border-white/10 bg-white/7 px-4 text-[15px] font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#ff4f91]/70"
          id="member-password"
          name="password"
          placeholder="Your password"
          required
          type="password"
        />
      </label>

      <button
        className="relative z-20 mt-2 rounded-full bg-white px-5 py-3 text-[13px] font-black text-[#101012] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
        type="submit"
      >
        Sign In
      </button>

      <button
        className="rounded-full border border-white/12 bg-white/8 px-5 py-3 text-[13px] font-black text-white transition hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4f91]"
        onClick={() => setMessage("Member login is being prepared. For current access assistance, please contact support.")}
        type="button"
      >
        Forgot Password?
      </button>

      {message ? (
        <p className="rounded-[18px] border border-[#ff4f91]/25 bg-[#ff4f91]/10 px-4 py-3 text-[12px] leading-5 text-white/72">
          {message}{" "}
          <a className="font-black text-white underline decoration-white/25 underline-offset-4" href={`mailto:${supportEmail}`}>
            Contact support
          </a>
        </p>
      ) : null}

      <p className="text-center text-[13px] leading-5 text-white/54">
        Not a member yet?{" "}
        <Link className="font-black text-white underline decoration-white/25 underline-offset-4 hover:text-[#ff9abe]" href="/join">
          View Membership Packages
        </Link>
      </p>
    </form>
  );
}
