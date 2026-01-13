"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // 모바일 메뉴 열릴 때 body 스크롤 방지
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

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
          mx-auto flex w-full items-center justify-between
          px-4 sm:px-6
          transition-all duration-200
          ${
            scrolled
              ? "h-[56px] sm:h-[64px]"
              : "h-[56px] sm:h-[72px] bg-[#EAF4EE]"
          }
        `}
      >
        <a
          href="#top"
          className="
            tracking-tight font-title font-normal
            text-lg sm:text-xl md:text-2xl
            text-[#2F6F4E]
          "
          onClick={handleNavClick}
        >
          SUNGWOO
        </a>

        {/* 데스크톱 네비게이션 */}
        <ul className="hidden sm:flex gap-4 md:gap-6 font-nav text-[15px] md:text-[22px]">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-underline text-[#2F6F4E] hover:text-[#1E4F3A]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="sm:hidden p-2 text-[#2F6F4E] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="메뉴 열기"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`
          sm:hidden
          fixed inset-0 top-[56px]
          bg-white/95 backdrop-blur-sm
          transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                font-nav text-2xl text-[#2F6F4E]
                hover:text-[#1E4F3A]
                transition-colors
              "
              onClick={handleNavClick}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
