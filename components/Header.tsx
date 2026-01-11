"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50
        transition-all duration-200
        ${scrolled ? "backdrop-blur bg-white/70 shadow-sm" : ""}
      `}
    >
      <div
        className={`
          mx-auto flex w-full items-center justify-between px-6
          transition-all duration-200
          ${scrolled ? "h-[64px]" : "h-[72px] bg-[#EAF4EE]"}
        `}
      >
        <a
          href="#top"
          className="
            tracking-tight font-title font-normal
            text-1xl md:text-2xl lg:text-2xl
            text-[#2F6F4E]
          "
        >
          SUNGWOO
        </a>

        <ul className="flex gap-6 font-nav text-[15px] sm:text-[16px] md:text-[22px]">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  nav-underline
                  text-[#2F6F4E]
                  hover:text-[#1E4F3A]
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
