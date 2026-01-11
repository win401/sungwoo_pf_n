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
      <h2 className="font-nav text-[40px] tracking-tight text-[#444444]">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="
          mx-auto max-w-[720px]
          rounded-xl bg-white p-5
          shadow-[0_8px_20px_rgba(0,0,0,0.08)]
        "
      >
        {/* Name */}
        <div className="mt-[30px]">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10"
            placeholder="you@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="mt-4">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="mt-2 w-full resize-none rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10"
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
            mt-5 inline-flex w-full items-center justify-center
            rounded-lg bg-black px-4 py-2 text-sm font-medium text-white
            transition
            hover:bg-black/90
            disabled:cursor-not-allowed disabled:opacity-60
          "
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {state.succeeded && (
          <p className="mt-3 text-sm text-emerald-600">
            💌전송완료! 📱연락처는 010-2675-9686 입니다!
          </p>
        )}
      </form>
    </Section>
  );
}
