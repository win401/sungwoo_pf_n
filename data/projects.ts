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
    id: "pizza-ui",
    title: "Pizza UI",
    imageSrc: "/images/pizza.png",
    href: "#",
    tags: ["HTML", "CSS"],
  },
  {
    id: "universal",
    title: "Universal",
    imageSrc: "/images/universal.png",
    href: "#",
    tags: ["HTML", "CSS", "JS"],
  },
];
