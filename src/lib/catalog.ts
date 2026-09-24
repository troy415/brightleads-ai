export type IconName =
  | "spark"
  | "search"
  | "pin"
  | "target"
  | "layout"
  | "star"
  | "brush"
  | "pen"
  | "flow"
  | "phone"
  | "chart"
  | "key"
  | "home"
  | "heart"
  | "tree"
  | "building"
  | "users"
  | "shield"
  | "link"
  | "doc"
  | "mail"
  | "calendar";

export type Faq = { q: string; a: string };

export type NavItem = {
  href: string;
  name: string;
  blurb?: string;
  icon?: IconName;
};

export const SERVICES: NavItem[] = [
  {
    href: "/ai-visibility",
    name: "AI visibility",
    blurb: "Get cited in ChatGPT, Gemini, Perplexity and AI Overviews",
    icon: "spark",
  },
  {
    href: "/services/senior-living-seo",
    name: "Senior living SEO",
    blurb: "Organic search built around care types and cities",
    icon: "search",
  },
  {
    href: "/services/local-seo",
    name: "Local SEO & Google Business Profile",
    blurb: "Map pack, listings, and directory accuracy",
    icon: "pin",
  },
  {
    href: "/services/paid-media",
    name: "Paid media & PPC",
    blurb: "Google Ads, Meta, YouTube, and retargeting",
    icon: "target",
  },
  {
    href: "/services/websites",
    name: "Websites & conversion",
    blurb: "Community sites built to take an inquiry",
    icon: "layout",
  },
  {
    href: "/services/reputation-management",
    name: "Reputation & PR",
    blurb: "Reviews, review response, and earned media",
    icon: "star",
  },
  {
    href: "/services/branding",
    name: "Branding & creative",
    blurb: "Positioning, naming, identity, and storytelling",
    icon: "brush",
  },
  {
    href: "/services/content-social",
    name: "Content & social",
    blurb: "Answer-first content families and models use",
    icon: "pen",
  },
  {
    href: "/services/crm-automation",
    name: "CRM & lead nurturing",
    blurb: "HubSpot, Salesforce, GoHighLevel, and senior-living CRMs",
    icon: "flow",
  },
  {
    href: "/services/sales-enablement",
    name: "Sales enablement",
    blurb: "Inquiry handling, tours, and follow-up that close",
    icon: "phone",
  },
  {
    href: "/services/market-research",
    name: "Market research & data",
    blurb: "Market studies, competitor audits, audience research",
    icon: "chart",
  },
  {
    href: "/services/lease-up",
    name: "Lease-up & repositioning",
    blurb: "Pre-opening demand and occupancy recovery",
    icon: "key",
  },
];

export const AUDIENCES: NavItem[] = [
  {
    href: "/who-we-serve/residential-care-homes",
    name: "Residential care homes & RCFEs",
    blurb: "Board and care, RCFEs, and ARFs",
    icon: "home",
  },
  {
    href: "/who-we-serve/assisted-living-memory-care",
    name: "Assisted living & memory care",
    blurb: "Single-site and regional communities",
    icon: "heart",
  },
  {
    href: "/who-we-serve/independent-living-life-plan",
    name: "Independent living & life plan communities",
    blurb: "IL, CCRCs, and 55+ rental",
    icon: "tree",
  },
  {
    href: "/who-we-serve/multi-community-operators",
    name: "Multi-community operators",
    blurb: "Portfolios, management companies, owners",
    icon: "building",
  },
  {
    href: "/who-we-serve/home-care-franchises",
    name: "Home care & franchises",
    blurb: "Multi-location and franchised home care",
    icon: "users",
  },
];

export const NAV = [
  { href: "/services", label: "Services", dropdown: "services" as const },
  { href: "/who-we-serve", label: "Who we serve", dropdown: "audiences" as const },
  { href: "/guides", label: "Guides" },
  { href: "/ai-visibility", label: "AI visibility" },
];

export const STEPS: [string, string][] = [
  [
    "Audit and census goals",
    "We start with your occupancy targets by care type, then audit your website, search, AI answers, listings, reviews, ads, CRM, and inquiry handling.",
  ],
  [
    "Fix the foundation",
    "Entity facts, tracking, Google Business Profile, site speed, schema, and lead routing. Nothing else works well until these do.",
  ],
  [
    "Build the pages families and models need",
    "Care-type, city, pricing, and FAQ pages written as clear answers, plus a site that converts on a phone.",
  ],
  [
    "Turn on demand",
    "Search, local, paid media, reviews, content, and nurture, each aimed at the page that matches the question.",
  ],
  [
    "Report and improve monthly",
    "One report ties spend to tours and move-ins, plus your share of AI answers. We change what is not working.",
  ],
];

export const HOME_FAQS: Faq[] = [
  {
    q: "What is BrightLeads.AI?",
    a: "BrightLeads.AI is a full-service digital marketing agency for senior living, based in San Francisco and serving operators across the United States. We connect strategy, branding, websites, SEO, local SEO, paid media, reputation management, CRM automation, sales enablement, and AI visibility into one system measured by move-ins.",
  },
  {
    q: "Who does BrightLeads.AI work with?",
    a: "Owners, operators, executive directors, and sales and marketing leaders at assisted living and memory care communities, independent living and life plan communities (CCRCs), residential care homes (RCFEs and board and care), adult residential facilities (ARFs), multi-community operators, and home care franchises. We work with single six-bed homes and with multi-state portfolios.",
  },
  {
    q: "How is BrightLeads.AI different from other senior living marketing agencies?",
    a: "Three things. First, AI visibility is built into every engagement, so your community is structured to be cited by AI assistants as well as ranked by Google. Second, every channel runs as one system and is reported against tours and move-ins, not clicks. Third, engagements are month to month and you own your website, ad accounts, content, and data. The agency was founded by an operator with hands-on RCFE operations and senior placement experience.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. Engagements are month to month. You can pause or leave with 30 days' notice, and everything we build for you, including your website, ad accounts, analytics, CRM configuration, and content, stays yours.",
  },
  {
    q: "What is AI visibility for senior living?",
    a: "AI visibility is how often, and how accurately, AI assistants such as ChatGPT, Gemini, Perplexity, Claude, Copilot, and Google AI Overviews mention and cite your community when families ask about senior care. It is also called generative engine optimization (GEO) or answer engine optimization (AEO).",
  },
  {
    q: "How much does senior living marketing cost?",
    a: "It depends on the number of communities, the channels you need, and your ad budget. We scope every engagement to your census goals and quote a flat monthly fee, with ad spend paid directly to the platforms in your own accounts.",
  },
];

export function serviceByHref(href: string) {
  return SERVICES.find((s) => s.href === href);
}
