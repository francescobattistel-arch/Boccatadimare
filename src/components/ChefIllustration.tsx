export function ChefIllustration() {
  return (
    <svg viewBox="0 0 360 520" role="img" aria-label="Illustrated private chef portrait" className="h-full w-full text-[#f3d39b]">
      <defs>
        <linearGradient id="chefGlow" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#f3d39b" stopOpacity="0.28" />
          <stop offset="1" stopColor="#f3d39b" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect x="26" y="26" width="308" height="468" rx="32" fill="url(#chefGlow)" stroke="currentColor" strokeOpacity="0.22" />
      <path d="M63 428c28-73 68-111 119-114 56-3 96 35 120 114" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M116 339c26 35 89 38 126 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M131 322v-38M226 322v-39" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M111 210c-4 58 29 94 69 94s73-36 69-94" fill="#160c07" stroke="currentColor" strokeWidth="5" />
      <path d="M118 186c12-42 46-69 83-62 35 7 55 33 61 66" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {[82,103,128,154,184,213,241,265].map((cx, index) => (
        <circle key={cx} cx={cx} cy={150 + (index % 3) * 12} r={24 - (index % 2) * 3} fill="#160c07" stroke="currentColor" strokeWidth="4" />
      ))}
      <circle cx="146" cy="221" r="5" fill="currentColor" />
      <circle cx="212" cy="221" r="5" fill="currentColor" />
      <path d="M160 258c14 9 29 9 43 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M178 230c-3 14-7 24-12 31h25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
      <path d="M84 424c62-14 126-14 193 0M111 379c45 18 91 18 138 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M138 371c-9 31-9 65 0 101M222 371c10 31 10 65 0 101" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      <circle cx="171" cy="390" r="5" fill="currentColor" opacity="0.8" />
      <circle cx="171" cy="432" r="5" fill="currentColor" opacity="0.8" />
      <path d="M232 403c23-7 43-19 60-36M129 403c-22-7-43-19-61-36" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M246 386c25 12 47 12 66 0M114 386c-25 12-47 12-66 0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M236 345c18-7 34-16 48-28M123 345c-18-7-34-16-48-28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
