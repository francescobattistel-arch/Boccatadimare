import { siteConfig } from "@/config/site";
import { navigationItems } from "@/navigation/site-nav";
import { Camera, Mail, MessageCircle } from "lucide-react";

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#fff8ec]/10 bg-[#071512]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7b46a]/50 font-display text-xl text-[#d7b46a] transition group-hover:bg-[#d7b46a] group-hover:text-[#071512]">B</span>
          <span>
            <span className="block font-display text-xl leading-none tracking-wide text-[#fff8ec]">{siteConfig.name}</span>
            <span className="hidden text-[0.62rem] uppercase tracking-[0.35em] text-[#fff8ec]/55 sm:block">Private chef</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fff8ec]/70 transition hover:text-[#d7b46a]">{item.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {siteConfig.social.instagram ? (
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label={siteConfig.name + " on Instagram"} data-plausible-event="Instagram Click" data-plausible-prop-placement="navigation" className="hidden rounded-full border border-[#fff8ec]/15 p-3 text-[#fff8ec]/70 transition hover:border-[#d7b46a] hover:text-[#d7b46a] sm:inline-flex"><Camera className="h-4 w-4" aria-hidden="true" /></a>
          ) : null}
          {siteConfig.social.whatsapp ? (
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" data-plausible-event="WhatsApp Click" data-plausible-prop-placement="navigation" className="inline-flex items-center gap-2 rounded-full bg-[#fff8ec] px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#071512] transition hover:bg-[#d7b46a]"><MessageCircle className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">WhatsApp</span></a>
          ) : (
            <a href={"mailto:" + siteConfig.contact.email} data-plausible-event="Email Click" data-plausible-prop-placement="navigation" className="inline-flex items-center gap-2 rounded-full bg-[#fff8ec] px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#071512] transition hover:bg-[#d7b46a]"><Mail className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">Email</span></a>
          )}
        </div>
      </nav>
    </header>
  );
}
