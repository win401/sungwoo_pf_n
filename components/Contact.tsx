"use client";

import { useForm, ValidationError } from "@formspree/react";
import Section from "@/components/Section";

type ContactSectionProps = {
  formId: string;
};

export default function ContactSection({ formId }: ContactSectionProps) {
  const [state, handleSubmit] = useForm(formId);

  return (
    <Section id="contact">
      <div className="w-full">
        <h2 className="font-nav tracking-tight text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#444444] mb-12 sm:mb-16">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="
            mx-auto max-w-[680px]
            rounded-xl bg-white
            p-6 sm:p-8
            shadow-[0_8px_20px_rgba(0,0,0,0.08)]
          "
        >
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#444444]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-[#2F6F4E] focus:ring-2 focus:ring-[#2F6F4E]/20"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className="mt-6 space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#444444]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-[#2F6F4E] focus:ring-2 focus:ring-[#2F6F4E]/20"
              placeholder="you@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div className="mt-6 space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#444444]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full resize-none rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-[#2F6F4E] focus:ring-2 focus:ring-[#2F6F4E]/20"
              placeholder="Write your message..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="
              mt-8 inline-flex w-full items-center justify-center
              rounded-lg bg-[#2F6F4E] px-6 py-3
              text-sm font-medium text-white
              transition-all duration-200
              hover:bg-[#1E4F3A]
              focus:outline-none focus:ring-2 focus:ring-[#2F6F4E] focus:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-60
            "
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

          {state.succeeded && (
            <div
              className="
                mt-6
                rounded-lg bg-emerald-50 p-4
                border border-emerald-200
                animate-[fadeIn_0.5s_ease-out]
              "
            >
              <p className="text-sm text-emerald-700 font-medium">
                💌 전송완료! 📱 연락처는 010-2675-9686 입니다!
              </p>
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}
