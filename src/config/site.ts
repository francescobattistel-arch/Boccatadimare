export const siteConfig = {
  name: "Boccata di Mare",
  shortName: "Bocca di Mare",
  founder: "Francesco Battistel",
  url: "https://boccatadimare.com",
  description:
    "Luxury private chef experiences by Francesco Battistel: Mediterranean tasting menus, intimate dinners, and bespoke coastal dining.",
  contact: {
    email: "hello@boccatadimare.com",
    location: "Private villas, homes, yachts, and retreats",
  },
  social: {
    instagram: "https://www.instagram.com/boccatadimare",
    whatsapp:
      "https://wa.me/390000000000?text=Hello%20Francesco%2C%20I%20would%20like%20to%20request%20a%20Boccata%20di%20Mare%20quote.",
  },
  analytics: {
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  },
  images: {
    og: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1514517220035-925954f2ba72?auto=format&fit=crop&w=1800&q=80",
    chefTable: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
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
