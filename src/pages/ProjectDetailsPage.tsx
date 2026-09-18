import { Link, useParams } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import { projects } from "../data/projects";
import MainLayout from "../layouts/MainLayout";

function ProjectDetailsPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <MainLayout>
        <main className="min-h-screen bg-background px-6 py-24 text-foreground">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground">
              Project Not Found
            </h1>

            <p className="mt-4 text-white/60">
              The project you are looking for does not exist.
            </p>

            <Link
              to="/projects"
              className="mt-8 inline-block text-white/60 hover:text-foreground"
            >
              ← Back to projects
            </Link>
          </div>
        </main>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <main className="min-h-screen px-6 py-24 text-white/60">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/projects"
            className="text-sm text-white/60 hover:text-foreground"
          >
            ← Back to projects
          </Link>

          <div className="mt-10">
            <p className="text-sm font-medium text-white/60">Project</p>

            <h1 className="mt-2 text-4xl font-bold text-white/60">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/60">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <LinkButton href={project.githubUrl} variant="secondary">
                GitHub
              </LinkButton>

              {project.liveUrl && (
                <LinkButton href={project.liveUrl}>Live Demo</LinkButton>
              )}
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default ProjectDetailsPage;
