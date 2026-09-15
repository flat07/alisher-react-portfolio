const skills = ["Python", "Django", "React", "TypeScript"];

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto flex flex-col items-center text-center">
        <div>
          <p className="text-sm font-medium text-muted-foreground">About me</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building useful web applications
          </h2>
        </div>

        <div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              I'm a developer focused on building modern web applications with
              Python, Django, React and TypeScript.
            </p>

            <p>
              I enjoy working on backend systems, REST APIs, databases and user
              interfaces, while continuously improving my full-stack development
              skills.
            </p>

            <p>
              My goal is to build reliable applications that solve real problems
              and provide a good user experience.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
