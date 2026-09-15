import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

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
      <Footer />
    </main>
  );
}

export default Home;
