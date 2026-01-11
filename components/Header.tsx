export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex h-[72px] items-center justify-between px-6 bg-[#d9d9d9] w-full">
        <a
          href="#top"
          className="tracking-tight font-title font-normal text-1xl md:text-2xl lg:text-2xl"
        >
          SUNGWOO
        </a>
        <ul className="flex gap-6 font-nav text-[15px] sm:text-[16px] md:text-[22px]">
          <li>
            <a href="#about" className="nav-underline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
