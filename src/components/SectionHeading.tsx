type SectionHeadingProps = { eyebrow: string; title: string; copy?: string; align?: "left" | "center" };

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d7b46a]">{eyebrow}</p>
      <h2 className="font-display mt-4 text-4xl leading-[0.95] text-[#fff8ec] md:text-6xl">{title}</h2>
      {copy ? <p className="mt-6 text-base leading-8 text-[#fff8ec]/68 md:text-lg">{copy}</p> : null}
    </div>
  );
}
