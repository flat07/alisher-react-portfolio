import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { projects } from "../data/projects";
import Skills from "../components/Skills";
import { skills } from "../data/skills";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience />
      <Contact />
    </main>
  );
}

export default Home;
