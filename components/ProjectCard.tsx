import Image from "next/image";
import Link from "next/link";
import { projectCategoryLabels, type Project } from "@/data/projects";
import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiVite,
  SiLeaflet,
  SiSpringboot,
  SiSupabase,
  SiFastapi,
  SiPython,
  SiOpenai,
  SiGithubactions,
  SiDocker,
} from "react-icons/si";

type TagMeta = {
  icon: IconType;
  color: string;
};

const tagMetaMap: Record<string, TagMeta> = {
  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3Alt, color: "#1572B6" },
  JS: { icon: SiJavascript, color: "#F7DF1E" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: FaReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
  GSAP: { icon: SiGreensock, color: "#88CE02" },
  Git: { icon: FaGitAlt, color: "#F05032" },
  Vite: { icon: SiVite, color: "#646CFF" },
  Leaflet: { icon: SiLeaflet, color: "#199900" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  Supabase: { icon: SiSupabase, color: "#3FCF8E" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Python: { icon: SiPython, color: "#3776AB" },
  OpenAI: { icon: SiOpenai, color: "#111111" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Docker: { icon: SiDocker, color: "#2496ED" },
};

type ProjectCardProps = {
  id: string;
  title: string;
  imageSrc: string;
  imageFit?: "cover" | "contain";
  category?: Project["category"];
  tags: string[];
};

export default function ProjectCard({
  id,
  title,
  imageSrc,
  imageFit = "cover",
  category,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${id}`}
      className="
        group flex h-full flex-col
        rounded-[5px] bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.08)]
        transition-transform duration-200
        hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-black/30
        overflow-hidden
      "
    >
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-[#f4f4f5]">
        <Image
          src={imageSrc}
          alt={`${title} thumbnail`}
          fill
          className={`${imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-[1.03]`}
        />
      </div>

      <div className="flex min-h-[88px] flex-1 flex-col justify-center px-4 py-3">
        <p className="mb-1 text-xs font-semibold text-[#2F6F4E]">
          {projectCategoryLabels[category ?? "personal"]}
        </p>
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
                    className="inline-flex items-center gap-1 rounded-md bg-black/5 px-2 py-1 text-xs text-black/70 font-medium"
                    title={t}
                  >
                    <Icon
                      className="shrink-0 text-[14px] transition-transform group-hover:scale-110"
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
    </Link>
  );
}
