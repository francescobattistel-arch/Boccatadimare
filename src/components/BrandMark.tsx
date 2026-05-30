type BrandMarkProps = {
  variant?: "stacked" | "compact" | "icon";
  className?: string;
};

export function BrandMark({ variant = "stacked", className = "" }: BrandMarkProps) {
  const isIcon = variant === "icon";
  const isCompact = variant === "compact";

  return (
    <div className={"inline-flex max-w-full flex-col items-center text-center text-[#f1c982] " + className} aria-label="Boccatadimare">
      <svg
        viewBox="0 0 520 180"
        aria-hidden="true"
        className={isIcon ? "h-10 w-28 sm:h-12 sm:w-36" : isCompact ? "h-16 w-56 max-w-full sm:h-20 sm:w-72" : "h-20 w-full max-w-[17rem] sm:h-28 sm:max-w-[25rem] md:h-36 md:max-w-[34rem]"}
      >
        <path d="M119 82c52-28 100-28 151 1 56 31 101 26 151-13" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M157 107c55-16 112-12 170 9 36 13 69 8 99-15" fill="none" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" opacity="0.82" />
        <path d="M267 56c25-37 78-40 109-11 16 15 16 37 0 51-27 24-80 13-98-22" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M292 62c19 12 42 14 67 6M364 38c18-9 36-8 55 4M373 52c20-4 38 0 54 12" fill="none" stroke="currentColor" strokeWidth="4.4" strokeLinecap="round" />
        <circle cx="322" cy="61" r="5.2" fill="currentColor" />
        <path d="M236 48c34-31 74-39 119-24M222 34c41-39 93-47 146-22" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" opacity="0.42" />
        <circle cx="219" cy="128" r="3.2" fill="currentColor" opacity="0.75" />
        <circle cx="240" cy="123" r="3.2" fill="currentColor" opacity="0.75" />
        <circle cx="263" cy="128" r="3.2" fill="currentColor" opacity="0.75" />
        <circle cx="286" cy="124" r="3.2" fill="currentColor" opacity="0.75" />
      </svg>

      {!isIcon ? (
        <>
          <span className="font-display block max-w-full text-[1.85rem] uppercase leading-none tracking-[0.13em] text-[#f1c982] sm:text-[2.6rem] sm:tracking-[0.18em] md:text-[4.35rem] md:tracking-[0.24em]">
            BOCCATADIMARE
          </span>
          <span className="mt-3 flex max-w-full flex-col items-center justify-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[#f7dfb6]/76 sm:mt-4 sm:flex-row sm:gap-4 sm:text-[0.64rem] sm:tracking-[0.34em] md:gap-5 md:text-xs md:tracking-[0.46em]">
            <span className="hidden h-px w-10 bg-[#d7a25b]/70 sm:block md:w-14" />
            <span className="max-w-[15rem] leading-5 sm:max-w-none">Sapori di mare, emozioni italiane</span>
            <span className="hidden h-px w-10 bg-[#d7a25b]/70 sm:block md:w-14" />
          </span>
          {!isCompact ? <span className="mt-4 block h-px w-20 bg-[#d7a25b]/55 sm:mt-5 sm:w-28" /> : null}
        </>
      ) : null}
    </div>
  );
}
