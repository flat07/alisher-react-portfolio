import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background px-6 py-24 text-foreground">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-muted-foreground">My work</p>

          <h1 className="mt-2 text-4xl font-bold text-foreground">
            All Projects
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
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
                  <h2 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h2>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    View Project
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProjectsPage;
