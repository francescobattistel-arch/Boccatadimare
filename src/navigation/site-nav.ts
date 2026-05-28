import { siteConfig } from "@/config/site";

export const navigationItems = [
  { label: "Experience", href: "#experience" },
  { label: "Menus", href: "#menus" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = siteConfig.social;
