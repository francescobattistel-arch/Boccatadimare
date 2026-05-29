export const siteConfig = {
  name: "Boccata di Mare",
  wordmark: "Boccatadimare",
  shortName: "Boccata di Mare",
  tagline: "Sapori di mare, emozioni italiane",
  founder: "Francesco Battistel",
  url: "https://boccatadimare.com",
  description:
    "Luxury private chef experiences by Francesco Battistel: Mediterranean tasting menus, intimate dinners, and bespoke coastal dining.",
  contact: {
    email: "hello@boccatadimare.com",
    location: "Private villas, homes, yachts, and retreats",
  },
  social: {
    instagram: "",
    whatsapp: "",
  },
  analytics: {
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  },
  images: {
    og: "https://boccatadimare.uk/images/gambero-rosso.png",
    hero: "/images/tagliolino-gambero-rosso.jpg",
    chefTable: "/images/gambero-carpaccio.jpg",
  },
  booking: {
    menuExperiences: [
      "Coastal tasting menu",
      "Villa celebration feast",
      "Quiet luxury dinner",
      "Bespoke seasonal menu",
    ],
    contactMethods: ["Email", "WhatsApp", "Phone call"],
    occasions: ["Private dinner", "Birthday", "Anniversary", "Retreat", "Yacht dining", "Other"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
