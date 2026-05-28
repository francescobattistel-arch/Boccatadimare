export type TestimonialCardProps = {
  quote: string;
  name: string;
  context?: string;
};

export function TestimonialCard({ quote, name, context }: TestimonialCardProps) {
  return (
    <figure className="rounded-[2rem] border border-[#d7b46a]/20 bg-[#071512] p-8 text-[#fff8ec] shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
      <blockquote className="font-display text-3xl leading-tight text-balance">“{quote}”</blockquote>
      <figcaption className="mt-8 border-t border-[#fff8ec]/10 pt-5">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7b46a]">{name}</p>
        {context ? <p className="mt-2 text-sm text-[#fff8ec]/58">{context}</p> : null}
      </figcaption>
    </figure>
  );
}
