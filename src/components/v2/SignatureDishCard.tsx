import Image from "next/image";

export type SignatureDishCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  detail?: string;
};

export function SignatureDishCard({
  title,
  description,
  imageSrc,
  imageAlt,
  detail,
}: SignatureDishCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#fff8ec]/12 bg-[#fff8ec]/5 text-[#fff8ec]">
      <div className="relative min-h-72">
        <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-cover" />
      </div>
      <div className="p-7">
        {detail ? <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7b46a]">{detail}</p> : null}
        <h3 className="font-display mt-4 text-4xl leading-none">{title}</h3>
        <p className="mt-5 leading-7 text-[#fff8ec]/66">{description}</p>
      </div>
    </article>
  );
}
