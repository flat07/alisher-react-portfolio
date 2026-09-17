import type { Project } from "../types/project";
import LinkButton from "./LinkButton";
import Span from "./Span";

type ProjectCardProps = Project;

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-border p-6 transition duration-200 hover:-translate-y-1 hover:border-ring">
      <div className="flex items-center justify-center">
        <h3 className="text-xl font-semibold text-white/60">{title}</h3>

        <span
          className="
            text-white/40
            transition
            duration-200
            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:text-white
          "
        >
          ↗
        </span>
      </div>

      <p className="mt-3 leading-7 text-white/60">{description}</p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {technologies.map((technology) => (
          <Span key={technology}>{technology}</Span>
        ))}
      </div>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <LinkButton href={githubUrl} variant="secondary">
          GitHub
        </LinkButton>

        {liveUrl && <LinkButton href={liveUrl}>Live Demo</LinkButton>}
      </div>
    </article>
  );
}

export default ProjectCard;
