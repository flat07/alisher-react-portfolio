import { useEffect, useState } from "react";

import heroDark from "../assets/hero-dark.jpeg";
import heroLight from "../assets/hero-light.jpeg";

import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

function Home() {
  const { theme } = useTheme();

  const [isDark, setIsDark] = useState(() => {
    if (theme === "dark") {
      return true;
    }

    if (theme === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (theme === "dark") {
      setIsDark(true);
      return;
    }

    if (theme === "light") {
      setIsDark(false);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };

    setIsDark(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const backgroundImage = isDark ? heroDark : heroLight;

  return (
    <main className="relative min-h-screen text-foreground">
      {/* =========================================================
          FIXED WEBSITE BACKGROUND
      ========================================================= */}

      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Dark blue overlay */}
      <div className="fixed inset-0 z-0 bg-[#06152e]/60" />

      {/* =========================================================
          WEBSITE CONTENT
      ========================================================= */}

      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <Skills skills={skills} />

        <Projects projects={projects} />

        <Experience />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}

export default Home;
