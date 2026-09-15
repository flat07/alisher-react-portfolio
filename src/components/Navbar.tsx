import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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

  const { theme, setTheme } = useTheme();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="border-b border-border bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-bold" onClick={closeMenu}>
            Alisher
          </Link>

          <div className="flex items-center gap-4">
            <Select
              value={theme}
              onValueChange={(value) =>
                setTheme(value as "light" | "dark" | "system")
              }
            >
              <SelectTrigger className="w-[110px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg border border-border px-3 py-2 text-sm md:hidden"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link to="/#about" className="hover:text-foreground">
              About
            </Link>

            <Link to="/#skills" className="hover:text-foreground">
              Skills
            </Link>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              Projects
            </NavLink>

            <Link to="/#experience" className="hover:text-foreground">
              Experience
            </Link>

            <Link to="/#contact" className="hover:text-foreground">
              Contact
            </Link>

            <NavLink to="/posts" className="hover:text-foreground">
              Posts
            </NavLink>
          </div>

          {isMenuOpen && (
            <div className="absolute left-0 right-0 top-[73px] border-b border-border bg-background px-6 py-6 text-sm text-muted-foreground md:hidden">
              <div className="mx-auto flex max-w-6xl flex-col gap-4">
                <Link
                  to="/#about"
                  className="hover:text-foreground"
                  onClick={closeMenu}
                >
                  About
                </Link>

                <Link
                  to="/#skills"
                  className="hover:text-foreground"
                  onClick={closeMenu}
                >
                  Skills
                </Link>

                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>

                <Link
                  to="/#experience"
                  className="hover:text-foreground"
                  onClick={closeMenu}
                >
                  Experience
                </Link>

                <Link
                  to="/#contact"
                  className="hover:text-foreground"
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                <NavLink to="/posts" onClick={closeMenu}>
                  Posts
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
