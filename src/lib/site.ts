export const site = {
  name: "BrightLeads.AI",
  tagline: "Find residents with a system that works together.",
  description:
    "BrightLeads.AI is a marketing agency for care homes, senior communities, RCFEs, ARFs, and similar operators. We build systems where web design, marketing campaigns, and technical systems interact to drive leads.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightleads.ai",
  phone: "(415) 741-2648",
  phoneHref: "tel:+14157412648",
  email: "info@brightleads.ai",
  addressLine: "14 Precita Ave. Suite J",
  cityLine: "San Francisco, CA 94110",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/communities", label: "Communities" },
  { href: "/contact", label: "Contact" },
] as const;
