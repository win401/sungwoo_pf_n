"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`w-full scroll-mt-[72px] ${className}`}
    >
      <div
        className={`
          mx-auto w-full max-w-7xl
          px-4 sm:px-6 lg:px-8
          py-16 sm:py-20 md:py-24 lg:py-28
          transition-opacity duration-700 ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}
          ${innerClassName}
        `}
      >
        {children}
      </div>
    </section>
  );
}
