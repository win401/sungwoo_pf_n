import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="w-full scroll-mt-[72px]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
