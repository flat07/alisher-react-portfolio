// src/components/Projects.tsx
import type { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  projects: Project[];
};

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 mx-auto flex flex-col items-center text-center">
        <p className="text-sm font-medium text-muted-foreground">My work</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          A selection of projects I've built while learning and working with
          modern web technologies.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
