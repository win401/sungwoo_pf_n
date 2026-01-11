import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="font-nav text-[40px] tracking-tight text-[#444444]">
        Projects
      </h2>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
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
    </Section>
  );
}
