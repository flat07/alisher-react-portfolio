// src/components/Button.tsx
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
};

function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] text-white shadow-lg shadow-indigo-500/25 hover:opacity-95"
      : "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/10";

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2.5
        rounded-xl
        px-6
        py-3
        text-sm
        font-medium
        transition-all
        duration-200
        hover:-translate-y-0.5
        active:translate-y-0
        disabled:pointer-events-none
        disabled:opacity-50
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-400
        ${styles}
        ${className}
      `}
    >
      {icon && <span className="h-4 w-4 shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
