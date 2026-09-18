import LinkButton from "../components/LinkButton";
import Span from "../components/Span";
import { projects } from "../data/projects";
import MainLayout from "../layouts/MainLayout";

function ProjectsPage() {
  return (
    <MainLayout>
      <main className="min-h-screen px-6 py-24 ">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-white/60">My work</p>

          <h1 className="mt-2 text-4xl font-bold text-white/60">
            All Projects
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            Here you can find the projects I have built while learning and
            developing my skills.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => {
              return (
                <article
                  key={project.title}
                  className="rounded-xl border border-border p-6"
                >
                  <h2 className="text-xl font-semibold text-white/60">
                    {project.title}
                  </h2>

                  <p className="mt-3 leading-7 text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Span
                        key={technology}
                        className="rounded-md bg-muted px-3 py-1 text-sm text-white/60"
                      >
                        {technology}
                      </Span>
                    ))}
                  </div>
                  <div className="my-4">
                    <LinkButton href={`/projects/${project.slug}`}>
                      View Project
                    </LinkButton>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default ProjectsPage;
