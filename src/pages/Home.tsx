import MainLayout from "../layouts/MainLayout";

import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

import { projects } from "../data/projects";
import { skills } from "../data/skills";

function Home() {
  return (
    <MainLayout>
      <Hero />

      <About />

      <Skills skills={skills} />

      <Projects projects={projects} />

      <Experience />

      <Contact />
    </MainLayout>
  );
}

export default Home;
