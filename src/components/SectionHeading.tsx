type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-[#071512]" : "text-[#fff8ec]";
  const copyClass = tone === "dark" ? "text-[#071512]/64" : "text-[#fff8ec]/68";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d7b46a]">
        {eyebrow}
      </p>
      <h2 className={"font-display mt-4 text-4xl leading-[0.95] md:text-6xl " + titleClass}>
        {title}
      </h2>
      {copy ? <p className={"mt-6 text-base leading-8 md:text-lg " + copyClass}>{copy}</p> : null}
    </div>
  );
}
