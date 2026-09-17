import type { ReactNode } from "react";

type SpanProps = {
  children: ReactNode;
  className?: string;
};

export function Span({ children, className = "" }: SpanProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        border
        border-white/20
        bg-white/5
        px-6
        py-3
        text-sm
        font-medium
        text-white/60
        backdrop-blur-md
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-white/40
        hover:bg-white/10
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default Span;
