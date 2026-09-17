import { ArrowUpRight, Mail } from "lucide-react";
import LinkButton from "./LinkButton";

function Hero() {
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="max-w-3xl">
          {/* Availability */}
          <div className="hero-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm text-white/90 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for frontend opportunities
          </div>

          {/* Greeting */}
          <p className="hero-fade-up text-base font-medium text-white/70 sm:text-lg [animation-delay:100ms]">
            Hi, I'm Alisher 👋
          </p>

          {/* Heading */}
          <h1 className="hero-fade-up mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl [animation-delay:200ms]">
            I build modern
            <br />
            <span className="hero-gradient-text">web experiences.</span>
          </h1>

          {/* Description */}
          <p className="hero-fade-up mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7 [animation-delay:300ms]">
            Backend engineer turned frontend developer. I enjoy building clean,
            responsive interfaces with React and TypeScript, backed by powerful
            Python and Django applications.
          </p>

          {/* Buttons */}
          <div className="hero-fade-up mt-6 flex flex-col gap-3 sm:flex-row [animation-delay:400ms]">
            <LinkButton
              href="#projects"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              View Projects
            </LinkButton>

            <LinkButton
              href="#contact"
              variant="secondary"
              icon={<Mail className="h-4 w-4" />}
            >
              Contact Me
            </LinkButton>
          </div>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            {technologies.map((technology, index) => (
              <div
                key={technology.name}
                className="hero-fade-up flex flex-col items-center gap-1.5 text-center"
                style={{
                  animationDelay: `${500 + index * 100}ms`,
                }}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain transition-transform duration-300 hover:scale-110"
                />

                <span className="text-[11px] font-medium text-white/70">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
