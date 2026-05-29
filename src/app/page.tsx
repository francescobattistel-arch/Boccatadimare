import { BookingForm } from "@/components/BookingForm";
import { BrandMark } from "@/components/BrandMark";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteNav } from "@/components/SiteNav";
import { siteConfig } from "@/config/site";
import { ArrowRight, Check, Fish, Gem, MapPin, Shell, Wine } from "lucide-react";
import Image from "next/image";

const menuCards = [
  { title: "Sapori di mare", copy: "Crudo, handmade pasta, market fish, citrus, herbs, and refined coastal finishing." },
  { title: "Emozioni italiane", copy: "A generous Italian celebration for birthdays, retreats, anniversaries, and family gatherings." },
  { title: "Cena su misura", copy: "A composed, intimate service with paired wines, soft pacing, and discreet hospitality." },
];

const processSteps = [
  "Share the date, guest count, occasion, location, and dietary notes.",
  "Receive a bespoke menu proposal with a polished Italian coastal direction.",
  "Francesco sources, cooks, plates, serves, and leaves the kitchen immaculate.",
];

const gallery = [
  { src: "/images/gambero-rosso.png", alt: "Red prawn crudo with olive oil and herbs" },
  { src: "/images/tagliolino-gambero-rosso.jpg", alt: "Fresh tagliolino pasta with red prawn in a blue ceramic bowl" },
  { src: "/images/gambero-carpaccio.jpg", alt: "Gambero rosso carpaccio with colored sauces" },
  { src: "/images/tartare-gambero.png", alt: "Red prawn tartare with delicate dots of sauce" },
  { src: "/images/spaghetti-crab.jpg", alt: "Minimal spaghetti with crab and seafood sauce" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: siteConfig.name,
  alternateName: siteConfig.wordmark,
  slogan: siteConfig.tagline,
  url: siteConfig.url,
  image: siteConfig.images.og,
  description: siteConfig.description,
  founder: { "@type": "Person", name: siteConfig.founder },
  servesCuisine: ["Mediterranean", "Seafood", "Italian"],
  priceRange: "Premium",
  sameAs: [siteConfig.social.instagram].filter(Boolean),
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
      serviceType: "Private chef and bespoke Italian coastal dining",
    },
  },
};

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#120906] text-[#fff4dd]">
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
    <section className="noise-overlay relative min-h-screen px-5 pt-28 lg:px-8" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_8%,rgba(241,201,130,0.14),rgba(18,9,6,0.9)_54%,#090604_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl pb-20 pt-12 lg:pb-28">
        <MotionReveal className="brand-frame overflow-hidden rounded-[2rem] bg-[#100804]/94 p-5 md:rounded-[2.75rem] md:p-8">
          <div className="grid items-stretch gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center rounded-[1.5rem] border border-[#d7a25b]/24 bg-[#0b0604]/70 px-5 py-10 text-center md:px-10">
              <BrandMark className="mx-auto" />
              <p className="mx-auto mt-9 max-w-xl text-base leading-8 text-[#f7dfb6]/72 md:text-lg">
                Refined seafood, handmade pasta, and quiet Italian luxury for private dinners, villas, retreats, and intimate celebrations.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="#booking" data-plausible-event="Hero CTA Click" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f1c982] px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#120906] transition hover:bg-[#fff4dd]">
                  Request quote<ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href="#menus" data-plausible-event="Menu Interest Click" data-plausible-prop-menu="hero-explore" className="inline-flex items-center justify-center rounded-full border border-[#d7a25b]/42 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#f1c982] transition hover:border-[#fff4dd] hover:text-[#fff4dd]">
                  Explore menus
                </a>
              </div>
            </div>

            <div className="grid min-h-[38rem] gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <div className="brand-frame relative overflow-hidden rounded-[1.5rem] bg-[#170d08]">
                <Image src="/images/tagliolino-gambero-rosso.jpg" alt="Fresh tagliolino pasta with red prawn in a blue ceramic bowl" fill priority sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090604]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#f1c982]/24 bg-[#090604]/70 p-4 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f1c982]">Signature plate</p>
                  <p className="font-display mt-2 text-3xl text-[#fff4dd]">Tagliolino al gambero rosso</p>
                </div>
              </div>
              <div className="grid gap-4">
                {[{src:"/images/gambero-rosso.png",alt:"Red prawn crudo with olive oil and herbs"},{src:"/images/tartare-gambero.png",alt:"Red prawn tartare with delicate dots of sauce"}].map((image) => (
                  <div key={image.src} className="brand-frame relative min-h-64 overflow-hidden rounded-[1.5rem] bg-[#170d08]">
                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
                  </div>
                ))}
              </div>
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
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1.22fr]">
        <MotionReveal>
          <SectionHeading eyebrow="The experience" title="Gold-line elegance, Italian warmth, coastal precision." copy="The visual language follows the references: cinematic black and bronze tones, a clean shrimp-and-wave mark, refined typography, and a polished Italian seafood mood." />
        </MotionReveal>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Fish, title: "Sapori di mare", copy: "Crudo, shellfish, grilled fish, bright vegetables, olive oil, and coastal herbs." },
            { icon: Wine, title: "Emozioni italiane", copy: "Warm service, elegant pacing, and the generosity of an Italian table." },
            { icon: Gem, title: "Luxury finish", copy: "Gold accents, polished plating, and a kitchen reset before Francesco leaves." },
          ].map((item) => <MotionReveal key={item.title} className="glass-panel rounded-[2rem] p-6"><item.icon className="h-8 w-8 text-[#f3d39b]" aria-hidden="true" /><h3 className="font-display mt-8 text-3xl text-[#fff4dd]">{item.title}</h3><p className="mt-4 leading-7 text-[#f7dfb6]/64">{item.copy}</p></MotionReveal>)}
        </div>
      </div>
    </section>
  );
}

function Menus() {
  return (
    <section id="menus" className="bg-[#f5dfb8] px-5 py-24 text-[#170d08] lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tone="dark" align="center" eyebrow="Bespoke menus" title="Italian coastal dining with a signature Boccatadimare look." copy="Choose a direction, then Francesco tailors the final proposal around seasonality, dietary needs, location logistics, and the atmosphere of the occasion." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {menuCards.map((card) => <article key={card.title} className="rounded-[2rem] border border-[#7b4b22]/18 bg-[#fff4dd] p-8 shadow-[0_24px_80px_rgba(23,13,8,0.12)]"><Shell className="h-8 w-8 text-[#9f642d]" aria-hidden="true" /><h3 className="font-display mt-10 text-4xl">{card.title}</h3><p className="mt-5 leading-7 text-[#170d08]/66">{card.copy}</p><a href="#booking" data-plausible-event="Menu Interest Click" data-plausible-prop-menu={card.title} className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#7b4b22]/18 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#7b4b22] transition hover:border-[#170d08] hover:text-[#170d08]">Discuss this menu<ArrowRight className="h-4 w-4" aria-hidden="true" /></a></article>)}
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
          <SectionHeading eyebrow="Visual mood" title="Signature seafood plates in the Boccatadimare world." copy="The visual story now pairs the black-and-gold brand world with Francesco's real seafood plates: red prawns, crudo, handmade pasta, and refined coastal sauces." />
          <div className="brand-frame rounded-[2rem] bg-[#100804]/80 p-6">
            <BrandMark className="mx-auto" />
            <ul className="mt-8 space-y-3 text-[#f7dfb6]/72">
              {["Shrimp-and-wave emblem", "Copper-gold frame language", "Italian tagline", "Dark restaurant ambience", "Premium private dining tone"].map((item) => <li key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-[#f3d39b]" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-14 grid auto-rows-[18rem] gap-5 md:grid-cols-6">
          {gallery.map((image, index) => <div key={image.src} className={index === 1 ? "brand-frame relative overflow-hidden rounded-[2rem] md:col-span-4 md:row-span-2" : index === 4 ? "brand-frame relative overflow-hidden rounded-[2rem] md:col-span-3" : "brand-frame relative overflow-hidden rounded-[2rem] md:col-span-3"}><Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 50vw, 92vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#120906]/35 via-transparent to-transparent" /></div>)}
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
        <div><SectionHeading eyebrow="Booking flow" title="From first note to final course, every detail is handled." copy="Submit the essentials and receive a tailored menu, pricing, and service recommendation. The experience stays visually aligned with the Boccatadimare black-and-gold brand world." />
          <div className="mt-10 space-y-5">{processSteps.map((step, index) => <div key={step} className="flex gap-4 rounded-3xl border border-[#d7a25b]/24 bg-[#100804]/70 p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3d39b] text-sm font-bold text-[#120906]">{index + 1}</span><p className="leading-7 text-[#f7dfb6]/72">{step}</p></div>)}</div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-[#d7a25b]/20 px-5 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div><BrandMark variant="compact" /><p className="mt-4 flex items-center gap-2 text-sm text-[#f7dfb6]/58"><MapPin className="h-4 w-4" aria-hidden="true" />{siteConfig.contact.location}</p></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a href={"mailto:" + siteConfig.contact.email} data-plausible-event="Email Click" data-plausible-prop-placement="footer" className="rounded-full border border-[#d7a25b]/26 px-5 py-3 text-sm font-semibold text-[#f7dfb6]/75 transition hover:border-[#f3d39b] hover:text-[#f3d39b]">{siteConfig.contact.email}</a>{siteConfig.social.instagram ? <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" data-plausible-event="Instagram Click" data-plausible-prop-placement="footer" className="rounded-full border border-[#d7a25b]/26 px-5 py-3 text-sm font-semibold text-[#f7dfb6]/75 transition hover:border-[#f3d39b] hover:text-[#f3d39b]">Instagram</a> : null}{siteConfig.social.whatsapp ? <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" data-plausible-event="WhatsApp Click" data-plausible-prop-placement="footer" className="rounded-full border border-[#d7a25b]/26 px-5 py-3 text-sm font-semibold text-[#f7dfb6]/75 transition hover:border-[#f3d39b] hover:text-[#f3d39b]">WhatsApp</a> : null}</div>
      </div>
    </footer>
  );
}
