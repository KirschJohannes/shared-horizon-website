import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "uppercase tracking-[0.18em] transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40";
  const sizes = size === "lg" ? "px-6 py-4 text-[12px]" : "px-5 py-3 text-[11px]";
  const variants =
    variant === "primary"
      ? "bg-navy text-paper hover:bg-navy-800 border border-navy"
      : "bg-transparent text-navy border border-stone hover:border-brass";
  return (
    <button
      className={`${base} ${sizes} ${variants} ${className}`}
      {...props}
    />
  );
}
