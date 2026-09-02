/**
 * Central site configuration.
 *
 * Change brand name, tagline, CTA destination, and contact details here —
 * every component reads from this single source instead of hardcoding copy.
 */
export const siteConfig = {
  name: "Maverick.wit",
  tagline: "For those who dare to change their life.",
  description:
    "1:1 entrepreneurship coaching for corporate professionals building a business on the side. Mindset coaching, trending business ideas, and a personalized strategy built around your skills, interests, and hobbies.",
  url: "https://maverickwit.com",
  ogImage: "/og-image.png",
  locale: "en_US",
  keywords: [
    "entrepreneurship coach",
    "side business coaching",
    "corporate professionals",
    "business idea generator",
    "start a business while working",
    "side hustle mentor",
    "business strategy coaching",
  ],
  contactEmail: "hello@maverickwit.com",
  social: {
    instagram: "https://www.instagram.com/maverick.wit/",
    linkedin: "https://linkedin.com/company/maverickwit",
    x: "https://x.com/maverickwit",
  },
  /**
   * TODO: replace with your live booking link (e.g. Calendly, Cal.com).
   * Until then, primary CTAs scroll to the on-page contact form at #contact.
   */
  bookingUrl: "#contact",
} as const;

export const navLinks = [
  { label: "How it works", href: "#process" },
  { label: "What you get", href: "#pillars" },
  { label: "About", href: "#about" },
  { label: "Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
] as const;
