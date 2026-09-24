import type { Metadata } from "next";

export const site = {
  name: "BrightLeads.AI",
  legalName: "BrightLeads.AI",
  tagline: "Fill rooms with a system that works together.",
  heroLine: "SEO · Paid media · Websites · Reputation · CRM · AI visibility",
  description:
    "Fill rooms with a system that works together. BrightLeads.AI is a senior living marketing agency: SEO, paid media, websites, reputation, CRM, and AI visibility so communities get cited by ChatGPT and Google. Month to month. Based in San Francisco.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightleads.ai",
  phone: "(415) 741-2648",
  phoneHref: "tel:+14157412648",
  phoneIntl: "+1-415-741-2648",
  email: "info@brightleads.ai",
  addressLine: "14 Precita Ave. Suite J",
  city: "San Francisco",
  region: "CA",
  postalCode: "94110",
  cityLine: "San Francisco, CA 94110",
  country: "US",
  buyers:
    "Senior living owners, operators, executive directors, and sales and marketing leaders",
  orgDescription:
    "BrightLeads.AI is a full-service digital marketing agency for senior living: assisted living, memory care, independent living, life plan communities, residential care homes (RCFEs and board and care), ARFs, and home care. Based in San Francisco and serving operators across the United States, it connects strategy, branding, websites, SEO, local SEO, paid media, reputation management, CRM automation, sales enablement, and AI visibility into one system measured by move-ins. Engagements are month to month with no long-term contracts.",
};

export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = `${site.url}${input.path || "/"}`;
  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: input.path || "/" },
    robots: input.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      type: "website",
    },
  };
}
