import { BrandMark } from "@/components/BrandMark";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/navigation/site-nav";
import { Camera, Mail, MessageCircle } from "lucide-react";

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d7a25b]/20 bg-[#090604]/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="group inline-flex items-center gap-3" aria-label={siteConfig.name + " home"}>
          <BrandMark variant="icon" className="transition group-hover:text-[#fff4dd]" />
          <span className="hidden md:block">
            <span className="block font-display text-xl uppercase leading-none tracking-[0.24em] text-[#f3d39b]">
              {siteConfig.wordmark}
            </span>
            <span className="mt-1 block text-[0.55rem] uppercase tracking-[0.34em] text-[#f7dfb6]/55">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f7dfb6]/68 transition hover:text-[#f3d39b]">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {siteConfig.social.instagram ? (
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label={siteConfig.name + " on Instagram"} data-plausible-event="Instagram Click" data-plausible-prop-placement="navigation" className="hidden rounded-full border border-[#d7a25b]/30 p-3 text-[#f7dfb6]/70 transition hover:border-[#f3d39b] hover:text-[#f3d39b] sm:inline-flex"><Camera className="h-4 w-4" aria-hidden="true" /></a>
          ) : null}
          {siteConfig.social.whatsapp ? (
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" data-plausible-event="WhatsApp Click" data-plausible-prop-placement="navigation" className="inline-flex items-center gap-2 rounded-full bg-[#f3d39b] px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#120906] transition hover:bg-[#fff4dd]"><MessageCircle className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">WhatsApp</span></a>
          ) : (
            <a href={"mailto:" + siteConfig.contact.email} data-plausible-event="Email Click" data-plausible-prop-placement="navigation" className="inline-flex items-center gap-2 rounded-full bg-[#f3d39b] px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#120906] transition hover:bg-[#fff4dd]"><Mail className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">Email</span></a>
          )}
        </div>
      </nav>
    </header>
  );
}
