type BrandMarkProps = {
  variant?: "stacked" | "compact" | "icon";
  className?: string;
};

export function BrandMark({ variant = "stacked", className = "" }: BrandMarkProps) {
  const isIcon = variant === "icon";

  return (
    <div className={"inline-flex flex-col items-center text-center text-[#f3d39b] " + className}>
      <svg
        viewBox="0 0 220 98"
        aria-hidden="true"
        className={isIcon ? "h-12 w-28" : "h-20 w-44 md:h-24 md:w-56"}
      >
        <path
          d="M48 55c20-16 43-16 70-2 27 13 55 14 82-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M67 67c31-7 61-6 91 4 16 5 31 3 45-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.82"
        />
        <path
          d="M115 37c17-24 49-24 67-3 7 8 5 20-4 26-16 11-44 4-54-14"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M132 39c9 6 20 8 32 4M171 31c8-4 16-4 25 2M176 38c9-2 17 0 24 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="144" cy="40" r="3" fill="currentColor" />
        <path
          d="M102 32c18-15 34-18 50-10M96 25c18-17 42-21 63-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="89" cy="75" r="2" fill="currentColor" opacity="0.75" />
        <circle cx="102" cy="72" r="2" fill="currentColor" opacity="0.75" />
        <circle cx="116" cy="75" r="2" fill="currentColor" opacity="0.75" />
      </svg>

      {!isIcon ? (
        <>
          <span className="font-display block text-3xl uppercase tracking-[0.28em] text-[#f3d39b] md:text-5xl">
            Boccatadimare
          </span>
          <span className="mt-3 block text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-[#f7dfb6]/70 md:text-xs">
            Sapori di mare, emozioni italiane
          </span>
        </>
      ) : null}
    </div>
  );
}
