import type { Skill } from "../types/skill";

type SkillsProps = {
  skills: Skill[];
};

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 mx-auto flex flex-col items-center text-center">
        <p className="text-sm font-medium text-muted-foreground">My skills</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technologies I work with
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="rounded-xl border border-border p-6"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {skillGroup.category}
            </h3>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {skillGroup.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
