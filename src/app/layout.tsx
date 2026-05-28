import { PlausibleEvents } from "@/components/PlausibleEvents";
import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: { default: siteConfig.name + " | Luxury Private Chef Experiences", template: "%s | " + siteConfig.name },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    siteConfig.shortName,
    "private chef",
    "luxury private dining",
    "Mediterranean chef",
    siteConfig.founder,
    "private chef Italy",
  ],
  authors: [{ name: siteConfig.founder }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteConfig.name + " | Luxury Private Chef Experiences",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.images.og, width: 1600, height: 1067, alt: "Elegant Mediterranean seafood table" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " | Luxury Private Chef Experiences",
    description: "Bespoke Mediterranean private dining by " + siteConfig.founder + ".",
    images: [siteConfig.images.og],
  },
};

export const viewport: Viewport = { themeColor: "#071512", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const plausibleDomain = siteConfig.analytics.plausibleDomain;

  return (
    <html lang="en">
      <body className={cormorant.variable + " " + inter.variable + " antialiased"}>
        {plausibleDomain ? (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        ) : null}
        <PlausibleEvents />
        {children}
      </body>
    </html>
  );
}
