import { useEffect, useState, type ReactNode } from "react";

import heroDark from "../assets/hero-dark.jpeg";
import heroLight from "../assets/hero-light.jpeg";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

type MainLayoutProps = {
  children: ReactNode;
  background?: boolean;
};

function MainLayout({ children, background = true }: MainLayoutProps) {
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
    <main className="relative min-h-screen">
      {/* =========================================================
          WEBSITE BACKGROUND
      ========================================================= */}

      {background && (
        <>
          <div
            className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />

          {/* Dark blue overlay */}
          <div className="fixed inset-0 z-0 bg-[#06152e]/60" />
        </>
      )}

      {/* =========================================================
          WEBSITE CONTENT
      ========================================================= */}

      <div className="relative z-10">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </main>
  );
}

export default MainLayout;
