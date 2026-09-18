import { Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AK from "../assets/ak-icon.png";

import { useTheme } from "../context/ThemeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navbarRef = useRef<HTMLElement>(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function changeTheme(newTheme: "light" | "dark" | "system") {
    setTheme(newTheme);
    setIsThemeMenuOpen(false);
  }

  function getThemeIcon() {
    if (theme === "light") {
      return <Sun className="h-4 w-4" />;
    }

    if (theme === "dark") {
      return <Moon className="h-4 w-4" />;
    }

    return <Monitor className="h-4 w-4" />;
  }

  // Close mobile menus when clicking outside the navbar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsThemeMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when navigating to another route
  useEffect(() => {
    setIsMenuOpen(false);
    setIsThemeMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      ref={navbarRef}
      className="absolute inset-x-0 top-0 z-50 bg-transparent text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight"
            onClick={closeMenu}
          >
            <img
              src={AK}
              alt="AK Logo"
              className="h-9 w-auto rounded-lg object-contain"
            />
          </Link>

          {/* ============================= */}
          {/* DESKTOP NAVIGATION             */}
          {/* ============================= */}

          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-8 text-sm">
              <a
                href="/#about"
                className="text-white/80 transition hover:text-white"
              >
                About
              </a>

              <a
                href="/#skills"
                className="text-white/80 transition hover:text-white"
              >
                Skills
              </a>

              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-white/95 transition hover:text-white"
                    : "text-white/80 transition hover:text-white"
                }
              >
                Projects
              </NavLink>

              <a
                href="/#experience"
                className="text-white/80 transition hover:text-white"
              >
                Experience
              </a>

              <a
                href="/#contact"
                className="text-white/80 transition hover:text-white"
              >
                Contact
              </a>

              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive
                    ? "text-white/95 transition hover:text-white"
                    : "text-white/80 transition hover:text-white"
                }
              >
                Posts
              </NavLink>
            </div>

            {/* Desktop theme selector */}
            <Select
              value={theme}
              onValueChange={(value) =>
                setTheme(value as "light" | "dark" | "system")
              }
            >
              <SelectTrigger className="h-11 w-[158px] rounded-full border-white/20 bg-white/5 px-4 text-white backdrop-blur-sm hover:bg-white/10">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="system">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                    System
                  </div>
                </SelectItem>

                <SelectItem value="light">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4" />
                    Light
                  </div>
                </SelectItem>

                <SelectItem value="dark">
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4" />
                    Dark
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* ============================= */}
          {/* MOBILE CONTROLS                */}
          {/* ============================= */}

          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile theme button */}
            <div className="relative">
              <button
                type="button"
                aria-label="Change theme"
                aria-expanded={isThemeMenuOpen}
                onClick={() => setIsThemeMenuOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                {getThemeIcon()}
              </button>

              {/* Mobile theme dropdown */}
              {isThemeMenuOpen && (
                <div className="absolute right-0 top-12 z-50 w-36 rounded-xl border border-white/10 bg-black/80 p-1 text-sm text-white shadow-xl backdrop-blur-xl">
                  <button
                    type="button"
                    onClick={() => changeTheme("system")}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition hover:bg-white/10"
                  >
                    <Monitor className="h-4 w-4" />
                    System
                  </button>

                  <button
                    type="button"
                    onClick={() => changeTheme("light")}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition hover:bg-white/10"
                  >
                    <Sun className="h-4 w-4" />
                    Light
                  </button>

                  <button
                    type="button"
                    onClick={() => changeTheme("dark")}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition hover:bg-white/10"
                  >
                    <Moon className="h-4 w-4" />
                    Dark
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ============================= */}
        {/* MOBILE MENU                    */}
        {/* ============================= */}

        {isMenuOpen && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-white backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-5">
              <a href="/#about" onClick={closeMenu}>
                About
              </a>

              <a href="/#skills" onClick={closeMenu}>
                Skills
              </a>

              <NavLink to="/projects" onClick={closeMenu}>
                Projects
              </NavLink>

              <a href="/#experience" onClick={closeMenu}>
                Experience
              </a>

              <a href="/#contact" onClick={closeMenu}>
                Contact
              </a>

              <NavLink to="/posts" onClick={closeMenu}>
                Posts
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
