import Image from "next/image";
import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const tagMetaMap = {
  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3Alt, color: "#1572B6" },

  // ✅ JS
  JS: { icon: SiJavascript, color: "#F7DF1E" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },

  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: FaReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
  Git: { icon: FaGitAlt, color: "#F05032" },
} as const;

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  href?: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  imageSrc,
  href = "#",
  tags = [],
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="
        group block
        rounded-[5px] bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.08)]
        transition-transform duration-200
        hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-black/30
        overflow-hidden
      "
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-4 py-3">
        <p className="font-nav text-[16px] md:text-[18px]">{title}</p>

        {!!tags.length && (
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {tags.map((t) => {
              const meta = tagMetaMap[t];

              if (meta) {
                const Icon = meta.icon;
                return (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-md bg-black/5 px-2 py-1 text-xs text-black/70"
                    title={t}
                  >
                    <Icon
                      className="text-[14px] transition-transform group-hover:scale-110"
                      style={{ color: meta.color }}
                      aria-hidden
                    />
                    {t}
                  </span>
                );
              }

              // 매핑 없는 태그는 텍스트로만 표시
              return (
                <span
                  key={t}
                  className="rounded-md bg-black/5 px-2 py-1 text-xs text-black/70"
                >
                  {t}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </a>
  );
}
