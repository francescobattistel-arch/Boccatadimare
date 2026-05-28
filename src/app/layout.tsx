import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://boccatadimare.com"),
  title: { default: "Boccata di Mare | Luxury Private Chef Experiences", template: "%s | Boccata di Mare" },
  description: "Luxury private chef experiences by Francesco Battistel: Mediterranean tasting menus, intimate dinners, and bespoke coastal dining.",
  keywords: ["Boccata di Mare", "private chef", "luxury private dining", "Mediterranean chef", "Francesco Battistel", "private chef Italy"],
  authors: [{ name: "Francesco Battistel" }],
  openGraph: {
    title: "Boccata di Mare | Luxury Private Chef Experiences",
    description: "A refined private chef experience inspired by the sea, crafted for private villas, retreats, and celebrations.",
    url: "https://boccatadimare.com",
    siteName: "Boccata di Mare",
    images: [{ url: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=80", width: 1600, height: 1067, alt: "Elegant Mediterranean seafood table" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boccata di Mare | Luxury Private Chef Experiences",
    description: "Bespoke Mediterranean private dining by Francesco Battistel.",
    images: ["https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=80"],
  },
};

export const viewport: Viewport = { themeColor: "#071512", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en">
      <body className={cormorant.variable + " " + inter.variable + " antialiased"}>
        {plausibleDomain ? <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" /> : null}
        {children}
      </body>
    </html>
  );
}
