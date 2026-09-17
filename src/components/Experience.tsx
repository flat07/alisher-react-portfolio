import type { Experience as ExperienceType } from "../types/experience";
import ExperienceCard from "./ExperienceCard";

const experiences: ExperienceType[] = [
  {
    company: "JA The Resorts",
    position: "IT Engineer",
    location: "Dubai, UAE",
    startDate: "2018",
    endDate: "2026",
    description:
      "Worked with IT systems, technical support, infrastructure and business applications in a multicultural environment.",
    technologies: ["Linux", "SQL", "Networking", "IT Support"],
  },
  {
    company: "Rumayso Ziyo Language Center",
    position: "English Teacher",
    location: "Uzbekistan",
    startDate: "2015",
    endDate: "2017",
    description:
      "Taught General English to children and prepared lessons covering grammar, vocabulary, reading, writing, listening and speaking.",
    technologies: ["English", "Lesson Planning", "Classroom Management"],
  },
];

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 mx-auto flex flex-col items-center text-center">
        <p className="text-sm font-medium text-white/60">My experience</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white/60 sm:text-4xl">
          Professional Experience
        </h2>

        <p className="mt-4 max-w-2xl text-white/60">
          My professional background and experience.
        </p>
      </div>

      <div className="space-y-10">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.position}`}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
