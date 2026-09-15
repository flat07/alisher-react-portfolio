// src/data/projects.ts
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Hotel Reservation Dashboard",
    slug: "hotelboard",
    description:
      "A hotel service request dashboard built with React and Django.",
    technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/hotelboard",
  },
  {
    title: "IELTS Vocabulary App",
    slug: "ielts-vocabulary",
    description:
      "A Django application for learning and practising IELTS vocabulary.",
    technologies: ["Python", "Django", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ielts-vocabulary",
  },
  {
    title: "React Portfolio",
    slug: "react-portfolio",
    description:
      "My personal developer portfolio built with React and TypeScript.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/alisher-react-portfolio",
    liveUrl: "https://example.com",
  },
];
