// src/components/Footer.tsx
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-semibold text-white/60">Alisher Khalikulov</p>

            <p className="mt-1 text-sm text-white/40">
              Backend & React Developer
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/40">
            <a
              href="https://github.com/flat07"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-foreground"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/alisher-khalikulov"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-foreground"
            >
              LinkedIn
            </a>

            <a
              href="mailto:alisher.khalikulov@gmail.com"
              className="transition hover:text-foreground"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-white/40">
            © {year} Alisher Khalikulov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
