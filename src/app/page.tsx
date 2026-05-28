import { BookingForm } from "@/components/BookingForm";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteNav } from "@/components/SiteNav";
import { siteConfig } from "@/config/site";
import { ArrowRight, Check, Fish, Gem, MapPin, Shell, Wine } from "lucide-react";
import Image from "next/image";

const menuCards = [
  { title: "Coastal tasting", copy: "Crudo, handmade pasta, market fish, citrus, herbs, and elegant tableside finishing." },
  { title: "Villa celebration", copy: "A generous Mediterranean feast for birthdays, retreats, anniversaries, and family gatherings." },
  { title: "Quiet luxury dinner", copy: "A composed, intimate service with paired wines, refined pacing, and discreet hospitality." },
];
const processSteps = [
  "Share the date, guest count, occasion, location, and dietary notes.",
  "Receive a bespoke menu proposal and service plan.",
  "Francesco sources, cooks, plates, serves, and leaves the kitchen immaculate.",
];
const gallery = [
  { src: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80", alt: "Elegant seafood table with Mediterranean dishes" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80", alt: "Premium plated private dining dish" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80", alt: "Chef-prepared dinner with warm luxury ambience" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: siteConfig.name,
  url: siteConfig.url,
  image: siteConfig.images.og,
  description: siteConfig.description,
  founder: { "@type": "Person", name: siteConfig.founder },
  servesCuisine: ["Mediterranean", "Seafood", "Italian"],
  priceRange: "Premium",
  sameAs: [siteConfig.social.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Private dining inquiries",
    email: siteConfig.contact.email,
    availableLanguage: ["English", "Italian"],
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Luxury private chef experience",
      serviceType: "Private chef and bespoke Mediterranean dining",
    },
  },
};

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#071512] text-[#fff8ec]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteNav />
      <Hero />
      <Experience />
      <Menus />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="noise-overlay relative min-h-screen px-5 pt-32 lg:px-8" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,rgba(12,58,53,0.2),rgba(7,21,18,0.92)_70%)]" />
      <div className="absolute inset-x-0 top-0 -z-0 h-[82vh] opacity-35" style={{ backgroundImage: "url('" + siteConfig.images.hero + "')", backgroundPosition: "center", backgroundSize: "cover" }} />
      <div className="absolute inset-x-0 top-0 -z-0 h-[82vh] bg-gradient-to-b from-[#071512]/35 via-[#071512]/72 to-[#071512]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-14 pb-20 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:pb-28">
        <MotionReveal>
          <p className="mb-6 inline-flex rounded-full border border-[#d7b46a]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#d7b46a]">Luxury private chef by {siteConfig.founder}</p>
          <h1 id="hero-title" className="font-display max-w-5xl text-6xl leading-[0.86] tracking-[-0.04em] text-balance md:text-8xl lg:text-9xl">A refined taste of the sea, served privately.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#fff8ec]/72 md:text-xl">{siteConfig.name} creates bespoke Mediterranean dining for villas, yachts, retreats, and intimate celebrations with the polish of a luxury restaurant and the warmth of home.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#booking" data-plausible-event="Hero CTA Click" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d7b46a] px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-[#071512] transition hover:bg-[#f1d893]">Request quote<ArrowRight className="h-5 w-5" aria-hidden="true" /></a>
            <a href="#menus" data-plausible-event="Menu Interest Click" data-plausible-prop-menu="hero-explore" className="inline-flex items-center justify-center rounded-full border border-[#fff8ec]/18 px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-[#fff8ec] transition hover:border-[#d7b46a] hover:text-[#d7b46a]">Explore menus</a>
          </div>
        </MotionReveal>
        <MotionReveal className="glass-panel rounded-[2.5rem] p-5 md:p-7">
          <div className="rounded-[2rem] bg-[#fff8ec] p-4 text-[#071512]">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[1.5rem]">
              <Image src={siteConfig.images.chefTable} alt="Private chef preparing a premium Mediterranean dish" fill priority sizes="(min-width: 1024px) 44vw, 90vw" className="object-cover" />
            </div>
            <div className="grid gap-4 px-2 py-6 sm:grid-cols-3">
              {["Seasonal", "Coastal", "Bespoke"].map((item) => <div key={item} className="rounded-2xl border border-[#071512]/10 p-4 text-center"><p className="font-display text-2xl">{item}</p><p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#071512]/55">Private dining</p></div>)}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <MotionReveal><SectionHeading eyebrow="The experience" title="Mediterranean elegance with quietly precise service." copy="Every event is designed around season, setting, and guest rhythm: seafood from the market, handmade details, and service that feels effortless." /></MotionReveal>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Fish, title: "Sea-led menus", copy: "Crudo, shellfish, grilled fish, bright vegetables, olive oil, and coastal herbs." },
            { icon: Wine, title: "Curated service", copy: "Wine-friendly pacing, plated courses, shared feasts, and discreet hospitality." },
            { icon: Gem, title: "Luxury finish", copy: "Elegant tables, polished plating, and a kitchen reset before Francesco leaves." },
          ].map((item) => <MotionReveal key={item.title} className="glass-panel rounded-[2rem] p-6"><item.icon className="h-8 w-8 text-[#d7b46a]" aria-hidden="true" /><h3 className="font-display mt-8 text-3xl text-[#fff8ec]">{item.title}</h3><p className="mt-4 leading-7 text-[#fff8ec]/64">{item.copy}</p></MotionReveal>)}
        </div>
      </div>
    </section>
  );
}

function Menus() {
  return (
    <section id="menus" className="bg-[#fff8ec] px-5 py-24 text-[#071512] lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tone="dark" align="center" eyebrow="Bespoke menus" title="Restaurant-level cooking, designed for the room you are in." copy="Choose a direction, then Francesco tailors the final proposal around seasonality, dietary needs, location logistics, and the mood of the occasion." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {menuCards.map((card) => <article key={card.title} className="rounded-[2rem] border border-[#071512]/10 bg-white p-8 shadow-[0_24px_80px_rgba(7,21,18,0.08)]"><Shell className="h-8 w-8 text-[#9f7937]" aria-hidden="true" /><h3 className="font-display mt-10 text-4xl">{card.title}</h3><p className="mt-5 leading-7 text-[#071512]/62">{card.copy}</p><a href="#booking" data-plausible-event="Menu Interest Click" data-plausible-prop-menu={card.title} className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#071512]/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#071512] transition hover:border-[#9f7937] hover:text-[#9f7937]">Discuss this menu<ArrowRight className="h-4 w-4" aria-hidden="true" /></a></article>)}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
          <SectionHeading eyebrow="Visual mood" title="A premium coastal language for private dining." copy="The site uses deep sea greens, warm ivory, gold accents, editorial spacing, and soft motion to create a luxury feeling similar to high-end private dining brands." />
          <div className="glass-panel rounded-[2rem] p-6"><p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d7b46a]">Ready for phase 2</p><ul className="mt-5 space-y-3 text-[#fff8ec]/72">{["Gallery CMS", "Seasonal menus", "Deposit payments", "Reviews", "Instagram feed", "EN / IT language switch"].map((item) => <li key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-[#d7b46a]" aria-hidden="true" />{item}</li>)}</ul></div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {gallery.map((image, index) => <div key={image.src} className={index === 1 ? "relative min-h-[28rem] overflow-hidden rounded-[2rem] md:mt-12" : "relative min-h-[28rem] overflow-hidden rounded-[2rem]"}><Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-cover" /></div>)}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-x-0 top-1/2 -z-0 h-px gold-line" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div><SectionHeading eyebrow="Booking flow" title="From first note to final course, every detail is handled." copy="Submit the essentials and receive a tailored menu, pricing, and service recommendation. Resend email notifications are wired for production once environment variables are set." />
          <div className="mt-10 space-y-5">{processSteps.map((step, index) => <div key={step} className="flex gap-4 rounded-3xl border border-[#fff8ec]/10 bg-[#fff8ec]/5 p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7b46a] text-sm font-bold text-[#071512]">{index + 1}</span><p className="leading-7 text-[#fff8ec]/72">{step}</p></div>)}</div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-[#fff8ec]/10 px-5 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div><p className="font-display text-3xl text-[#fff8ec]">{siteConfig.name}</p><p className="mt-2 flex items-center gap-2 text-sm text-[#fff8ec]/58"><MapPin className="h-4 w-4" aria-hidden="true" />{siteConfig.contact.location}</p></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a href={"mailto:" + siteConfig.contact.email} data-plausible-event="Email Click" className="rounded-full border border-[#fff8ec]/15 px-5 py-3 text-sm font-semibold text-[#fff8ec]/75 transition hover:border-[#d7b46a] hover:text-[#d7b46a]">{siteConfig.contact.email}</a><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" data-plausible-event="Instagram Click" data-plausible-prop-placement="footer" className="rounded-full border border-[#fff8ec]/15 px-5 py-3 text-sm font-semibold text-[#fff8ec]/75 transition hover:border-[#d7b46a] hover:text-[#d7b46a]">Instagram</a><a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" data-plausible-event="WhatsApp Click" data-plausible-prop-placement="footer" className="rounded-full border border-[#fff8ec]/15 px-5 py-3 text-sm font-semibold text-[#fff8ec]/75 transition hover:border-[#d7b46a] hover:text-[#d7b46a]">WhatsApp</a></div>
      </div>
    </footer>
  );
}
