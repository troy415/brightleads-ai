export const site = {
  name: "BrightLeads.AI",
  tagline: "The operating system for senior living placement.",
  description:
    "BrightLeads.AI helps placement agents and agencies manage family inquiries, community relationships, and a partner ecosystem — so referrals move, and nothing slips.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightleads.ai",
  phone: "(415) 741-2648",
  phoneHref: "tel:+14157412648",
  email: "info@brightleads.ai",
  addressLine: "14 Precita Ave. Suite J",
  cityLine: "San Francisco, CA 94110",
};

export const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/agencies", label: "For agencies" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;
