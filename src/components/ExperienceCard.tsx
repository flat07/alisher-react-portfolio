import type { Experience } from "../types/experience";

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
          <h3 className="text-xl font-semibold text-foreground">{position}</h3>

          <p className="mt-1 text-muted-foreground">
            {company} · {location}
          </p>
        </div>

        <p className="text-sm text-muted-foreground/70">
          {startDate} — {endDate || "Present"}
        </p>
      </div>

      <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;
