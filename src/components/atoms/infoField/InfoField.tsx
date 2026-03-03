type InfoFieldProps = {
  label: string;
  value?: string | null;
  className?: string;
};

export const InfoField = ({
  label,
  value,
  className = "w-[25%]",
}: InfoFieldProps) => {
  return (
    <div className={`${className} flex flex-col gap-y-0.5`}>
      <span className="text-sm text-secondary-text">{label}</span>
      <span className="text-base text-black">{value || "-"}</span>
    </div>
  );
};