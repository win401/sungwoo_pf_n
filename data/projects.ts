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
