export function Eyebrow({
  children,
  tone = "muted",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "accent" | "muted";
  className?: string;
}) {
  const color = tone === "accent" ? "text-brass-deep" : "text-stone-500";
  return (
    <span
      className={`text-[10px] uppercase tracking-[0.24em] ${color} ${className}`}
    >
      {children}
    </span>
  );
}
