import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

function Button({ children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground";

  return (
    <button
      className={`
        rounded-lg
        px-5
        py-3
        font-medium
        transition
        duration-200
        hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none
        focus:ring-2
        focus:ring-ring
        ${styles}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
