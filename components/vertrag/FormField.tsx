export function FormField({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      {children}
      <span className="text-[10px] uppercase tracking-[0.26em] text-stone-500">
        {label}
      </span>
    </label>
  );
}

export const fieldClassName =
  "w-full border border-stone bg-paper px-[13px] py-[11px] text-[14px] text-navy focus:border-brass";
