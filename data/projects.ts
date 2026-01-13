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
    id: "universal",
    title: "Universal",
    imageSrc: "/images/universal.png",
    href: "https://win401.github.io/SungWoo-s-Portfolio/project3/project3.html",
    tags: ["HTML", "CSS", "JS"],
  },
];
