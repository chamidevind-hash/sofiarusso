import type { Metadata } from "next";
import { MemberLoginForm } from "@/components/member-login-form";

export const metadata: Metadata = {
  title: "Member Sign In - Sofia Russo",
  description: "Sign in using the email connected to your Sofia membership.",
  alternates: { canonical: "/member-login" },
  openGraph: {
    title: "Member Sign In - Sofia Russo",
    description: "Sign in using the email connected to your Sofia membership.",
  },
};

export default function MemberLoginPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] pt-14 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="mx-auto max-w-2xl rounded-[28px] border border-white/10 bg-[#17171a] p-5 text-center shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-7">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff4f91]">Members</p>
          <h1 className="mt-3 text-[34px] font-black leading-9 sm:text-[48px] sm:leading-[1]">Member Sign In</h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-6 text-white/66">
            Sign in using the email connected to your Sofia membership.
          </p>
          <MemberLoginForm />
        </section>
      </main>
    </div>
  );
}
