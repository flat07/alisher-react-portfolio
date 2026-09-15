import type { ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

function LinkButton({ children, href, variant = "primary" }: LinkButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block
        rounded-lg
        px-5
        py-3
        font-medium
        transition
        duration-200
        hover:-translate-y-0.5
        focus:outline-none
        focus:ring-2
        focus:ring-ring
        ${styles}
      `}
    >
      {children}
    </a>
  );
}

export default LinkButton;
