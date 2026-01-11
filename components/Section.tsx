import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string; // 섹션 전체(outer) 커스텀
  innerClassName?: string; // 안쪽 컨테이너 커스텀
  title?: string; // 필요하면 섹션 제목도 옵션으로
};

export default function Section({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`w-full scroll-mt-[72px] ${className}`}>
      <div
        className={`
          mx-auto w-full max-w-7xl px-6
          py-12 sm:py-14 md:py-16
          ${innerClassName}
        `}
      >
        {children}
      </div>
    </section>
  );
}
