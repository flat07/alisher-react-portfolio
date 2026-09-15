import LinkButton from "./LinkButton";

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-30 sm:py-40 lg:py-46">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-sm font-medium text-muted-foreground sm:text-base">
          Hi, I'm Alisher
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
          Backend & React Developer
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          I build modern web applications using Python, Django, React,
          TypeScript, and PostgreSQL.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#projects">View Projects</LinkButton>

          <LinkButton href="#contact" variant="secondary">
            Contact Me
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
