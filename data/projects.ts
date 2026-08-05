// data/projects.ts
export type Project = {
  id: string;
  title: string;
  imageSrc: string;
  href?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "bus-log",
    title: "Bus Log Project",
    imageSrc: "/images/bus-log.png",
    href: "https://github.com/win401/bus-log-project",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "Supabase"],
  },
  {
    id: "fitnote-trainer",
    title: "FitNote Trainer",
    imageSrc: "/images/fitnote-trainer.png",
    href: "https://github.com/win401/health_care_coachBack",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python", "OpenAI"],
  },
  {
    id: "seller-detail-page-automation",
    title: "Seller DetailPage Automation",
    imageSrc: "/images/seller-detail-page-automation.png",
    href: "https://github.com/win401/seller_detailPage_automation",
    tags: ["Next.js", "TypeScript", "Supabase", "AI SDK"],
  },
  {
    id: "helinox",
    title: "Helinox",
    imageSrc: "/images/helinox.png",
    href: "https://helinox-pf.vercel.app/",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "GSAP"],
  },
  {
    id: "universal",
    title: "Universal",
    imageSrc: "/images/universal.png",
    href: "https://win401.github.io/SungWoo-s-Portfolio/project3/project3.html",
    tags: ["HTML", "CSS", "JS"],
  },
];
