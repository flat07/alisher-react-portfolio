import type { Experience } from "../types/experience";
import Span from "./Span";

type ExperienceCardProps = Experience;

function ExperienceCard({
  company,
  position,
  location,
  startDate,
  endDate,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <article>
      <div>
        <div>
          <h3 className="text-xl font-semibold text-white/60">{position}</h3>

          <p className="mt-1 text-white/60">
            {company} · {location}
          </p>
        </div>

        <p className="text-sm text-white/50">
          {startDate} — {endDate || "Present"}
        </p>
      </div>

      <p className="mt-5 max-w-3xl leading-7 text-white/60">{description}</p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {technologies.map((technology) => (
          <Span key={technology}>{technology}</Span>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;
