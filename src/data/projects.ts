// src/data/projects.ts
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Enterprise CRM System",
    slug: "crm",
    description:
      "A full-stack CRM with React (TypeScript) and Django REST Framework. Features JWT auth with RBAC, dynamic dashboards, customer/company/contact management with search, filtering, and pagination, plus Celery/Redis for background tasks like email notifications and data exports.",
    technologies: [
      "React",
      "TypeScript",
      "Django REST Framework",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Celery",
      "Redis",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/flat07/crm",
  },
  {
    title: "Hotel Reservation Dashboard (HotelBoard)",
    slug: "hotelboard",
    description:
      "A guest-facing hotel service platform accessible via QR code in hotel rooms. Built interactive frontend for housekeeping, maintenance, and room service requests with real-time tracking via Django Channels and WebSockets. Containerized with Docker Compose (backend, PostgreSQL, Redis, Celery, Caddy).",
    technologies: [
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Django",
      "Django Channels",
      "WebSockets",
      "Docker",
      "Celery Beat",
      "Gunicorn",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/flat07/hotelboard",
  },
  {
    title: "Health Recommendation System",
    slug: "health-recommender",
    description:
      "A full-stack health recommendation app with a Django backend and React frontend. Integrates a machine learning model (Scikit-learn) for BMI prediction and uses Celery + Redis for asynchronous background task processing.",
    technologies: [
      "Django",
      "React",
      "Scikit-learn",
      "Celery",
      "Redis",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/Alisher007/health-recommender",
  },
  {
    title: "Checklist (Task Management API)",
    slug: "checklist",
    description:
      "A RESTful task management API built with Django REST Framework. Implements JWT-based authentication and role-based access control with clean API architecture, filtering, task tracking, and status management.",
    technologies: ["Django REST Framework", "JWT", "RBAC", "PostgreSQL"],
    githubUrl: "https://github.com/Alisher007/checklist",
  },
  {
    title: "Switch (Real-Time System)",
    slug: "switch",
    description:
      "A real-time application built with Django Channels and WebSockets for live updates without page reloads. Features real-time notifications, status changes, and Celery integration for background processing.",
    technologies: [
      "Django",
      "Django Channels",
      "WebSockets",
      "Celery",
      "Redis",
    ],
    githubUrl: "https://github.com/Alisher007/switch",
  },
  {
    title: "Blog Platform",
    slug: "blog",
    description:
      "A full-featured blogging platform with Django backend and React frontend. Implements authentication, CRUD operations, pagination, and Markdown support using class-based views and a responsive UI.",
    technologies: [
      "Django",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/Alisher007/blog",
  },
  {
    title: "E-Commerce Prototype (Shop)",
    slug: "shop",
    description:
      "A Django-based e-commerce backend with product catalog, cart, and checkout flow. Includes an admin panel for inventory management and is structured for future payment gateway integration.",
    technologies: ["Django", "PostgreSQL"],
    githubUrl: "https://github.com/Alisher007/shop",
  },
];
