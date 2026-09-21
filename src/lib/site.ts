export const site = {
  name: "BrightLeads.AI",
  tagline: "Do all of your placement work in one place.",
  description:
    "BrightLeads.AI is the professional system for senior assisted living placement agents and agencies. Run the full placement practice from one workspace, streamline operations, and get more seniors into assisted living more efficiently.",
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
