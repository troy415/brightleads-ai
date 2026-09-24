export const site = {
  name: "BrightLeads.AI",
  legalName: "BrightLeads.AI",
  tagline: "Find residents with a system that works together.",
  description:
    "BrightLeads.AI is a San Francisco marketing agency for care homes, senior communities, RCFEs, and ARFs. We connect web design, campaigns, technical systems, and AI visibility so operators can find residents.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightleads.ai",
  phone: "(415) 741-2648",
  phoneHref: "tel:+14157412648",
  email: "info@brightleads.ai",
  addressLine: "14 Precita Ave. Suite J",
  city: "San Francisco",
  region: "CA",
  postalCode: "94110",
  cityLine: "San Francisco, CA 94110",
  country: "US",
  buyers:
    "Owners, administrators, and marketing leads at care homes, senior communities, RCFEs, ARFs, and similar operators",
  services: [
    "Web design",
    "Marketing campaigns",
    "Technical systems",
    "AI visibility",
  ] as const,
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/communities", label: "Communities" },
  { href: "/ai-visibility", label: "AI visibility" },
  { href: "/contact", label: "Contact" },
] as const;

export const faqs = [
  {
    id: "who",
    question: "Who is BrightLeads.AI?",
    answer:
      "BrightLeads.AI is a marketing agency in San Francisco for care homes, senior communities, Residential Care Facilities for the Elderly (RCFEs), Adult Residential Facilities (ARFs), and similar operators. We build systems where web design, marketing campaigns, technical systems, and AI visibility interact to drive resident leads.",
  },
  {
    id: "for",
    question: "Who is BrightLeads.AI for?",
    answer:
      "This site is for the operators who run the home: owners, administrators, and marketing leads. Families are the residents those homes want. BrightLeads.AI is not a consumer directory and not a placement-agent product.",
  },
  {
    id: "differ",
    question: "How does BrightLeads.AI differ from other senior living marketing agencies?",
    answer:
      "We are not a generic SEO shop and not a decades-old occupancy consultancy. The wedge is a connected system plus AI visibility: a website that can take an inquiry, campaigns that land on the right page, technical follow-up that keeps the lead alive, and work so the community shows up in AI answers, not only in Google.",
  },
  {
    id: "ai",
    question: "What is AI visibility for a care home or senior community?",
    answer:
      "AI visibility is the work of making a community findable and citable when a family asks an assistant where to look for memory care, an RCFE, or a community in a neighborhood. It includes clear entity facts, structured data, answer-ready pages, and crawl access. It is not the same as classic SEO, though the two support each other.",
  },
  {
    id: "where",
    question: "Where is BrightLeads.AI located?",
    answer:
      "The office is at 14 Precita Ave. Suite J, San Francisco, CA 94110. Call (415) 741-2648 or email info@brightleads.ai. Conversations are for operators, not family intake.",
  },
] as const;

export function llmsTxt(): string {
  const { url } = site;
  return `# BrightLeads.AI

> BrightLeads.AI is a San Francisco marketing agency for care homes, senior communities, RCFEs, and ARFs. Web design, marketing campaigns, and technical systems interact to drive resident leads. AI visibility is how the community shows up in AI answers, not only in Google.

BrightLeads.AI is not a family directory, not a placement-agent product, and not a generic SEO shop. Buyers are operators (owners, administrators, marketing leads). Families are the residents those homes want. This site is for the operators who run the home.

## Entity

- Name: BrightLeads.AI
- Type: Marketing agency / professional service
- Location: 14 Precita Ave. Suite J, San Francisco, CA 94110, United States
- Phone: ${site.phone}
- Email: ${site.email}
- Site: ${url}

## Who it is for

Care homes, senior communities, RCFEs, ARFs, and similar operators who need occupancy. Not for families looking for a placement. Not a software product for placement agencies.

## How it differs

Connected systems plus AI visibility. A website that can take an inquiry, campaigns that send families to the right page, technical follow-up that keeps the lead alive, and structured, answer-ready pages so AI systems can cite the community. Not a standalone SEO retainer. Not a 40-year occupancy consultancy.

## Services

- Web design: community sites written for care type, rooms, neighborhood, and inquiry
- Marketing campaigns: search and ads that land on a page that can convert
- Technical systems: forms, routing, tracking, and follow-up
- AI visibility: entity facts, schema, semantic pages, and crawl access so assistants can cite the community

## Pages

- [Home](${url}/): Agency offer for operators
- [Work](${url}/work): Web design, campaigns, technical systems, AI visibility
- [Communities](${url}/communities): Buyer page for care homes, RCFEs, ARFs, and senior communities
- [AI visibility](${url}/ai-visibility): How communities show up in AI answers
- [Contact](${url}/contact): San Francisco office
- [Start a conversation](${url}/start): Operator inquiry form

## Optional

- [llms.txt](${url}/llms.txt): this file
- [sitemap.xml](${url}/sitemap.xml)
`;
}
