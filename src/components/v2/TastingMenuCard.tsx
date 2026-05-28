import { ArrowRight } from "lucide-react";

export type TastingMenuCardProps = {
  title: string;
  description: string;
  courses: string[];
  accent?: string;
  href?: string;
};

export function TastingMenuCard({
  title,
  description,
  courses,
  accent = "Seasonal tasting",
  href,
}: TastingMenuCardProps) {
  const content = (
    <article className="group rounded-[2rem] border border-[#d7b46a]/20 bg-[#fff8ec] p-7 text-[#071512] shadow-[0_24px_80px_rgba(7,21,18,0.12)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(7,21,18,0.18)]">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9f7937]">{accent}</p>
      <h3 className="font-display mt-5 text-4xl leading-none">{title}</h3>
      <p className="mt-5 leading-7 text-[#071512]/64">{description}</p>
      <ul className="mt-7 space-y-3 text-sm text-[#071512]/70">
        {courses.map((course) => <li key={course} className="border-t border-[#071512]/10 pt-3">{course}</li>)}
      </ul>
      {href ? <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9f7937]">Explore menu<ArrowRight className="h-4 w-4" aria-hidden="true" /></span> : null}
    </article>
  );

  return href ? <a href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b46a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071512]">{content}</a> : content;
}
