export type ConciergeStepCardProps = {
  step: number | string;
  title: string;
  description: string;
};

export function ConciergeStepCard({ step, title, description }: ConciergeStepCardProps) {
  return (
    <article className="flex gap-5 rounded-[1.75rem] border border-[#fff8ec]/10 bg-[#fff8ec]/5 p-6 text-[#fff8ec]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7b46a] text-sm font-bold text-[#071512]">
        {step}
      </span>
      <div>
        <h3 className="font-display text-3xl leading-none">{title}</h3>
        <p className="mt-4 leading-7 text-[#fff8ec]/66">{description}</p>
      </div>
    </article>
  );
}
