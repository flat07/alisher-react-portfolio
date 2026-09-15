// src/data/skills.ts
import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    category: "Backend",
    technologies: ["Python", "Django", "Django REST Framework", "Celery"],
  },
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "SQLite"],
  },
  {
    category: "Tools",
    technologies: ["Git", "Docker", "Linux"],
  },
];
