import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="w-full">
        <h2 className="font-nav tracking-tight text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#444444] mb-12 sm:mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              imageSrc={project.imageSrc}
              href={project.href}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
