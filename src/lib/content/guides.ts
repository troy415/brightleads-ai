import type { Faq } from "@/lib/catalog";

export type GuidePart = {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
};

export type GuideDoc = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  answer: string;
  parts: GuidePart[];
  faqs: Faq[];
  published: string;
};

export const GUIDE_DOCS: GuideDoc[] = [
  {
    slug: "ai-search-senior-living",
    path: "/guides/ai-search-senior-living",
    title:
      "How AI Assistants Recommend Senior Living Communities, and How to Get Cited | BrightLeads.AI",
    description:
      "How ChatGPT, Gemini, Perplexity, and Google AI Overviews decide which assisted living and memory care communities to recommend, and the steps operators can take to be cited.",
    h1: "How AI assistants recommend senior living, and how to get cited.",
    lead: "Families increasingly ask assistants for help choosing care. Here is how those answers get built, and what operators can do about it.",
    answer:
      "AI assistants recommend senior living communities by retrieving web pages, business profiles, reviews, and directory listings that match the question, then summarizing the sources they find clearest and most trustworthy. Communities get cited more often when their facts are consistent everywhere, their website answers common family questions directly, their pages carry schema.org structured data, AI crawlers are allowed to read the site, and independent sources such as reviews and listings confirm the same details.",
    published: "2026-09-23",
    parts: [
      {
        id: "how",
        heading: "How an AI answer about senior living is built",
        paragraphs: [
          'When a family asks an assistant something like "what are good memory care options near San Mateo," assistants that browse the web run searches, read a handful of pages, and write a summary. Some also draw on what the model learned in training. Google AI Overviews combine Google\'s index with a generated summary.',
          "Across these systems, the same pattern holds: the assistant can only recommend what it can find, read, and trust. That gives operators three levers: be findable, be readable, and be corroborated.",
        ],
      },
      {
        id: "findable",
        heading: "Be findable",
        list: [
          "Allow search and AI crawlers in robots.txt, including GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, and Google-Extended, unless you have a reason not to.",
          "Rank in regular search for your care types and city. Browsing assistants lean on search results.",
          "Keep Google Business Profile, Apple, and Bing listings complete and accurate.",
          "Publish an llms.txt file that summarizes your community and links to your key pages.",
        ],
      },
      {
        id: "readable",
        heading: "Be readable",
        paragraphs: [
          "Assistants quote passages that answer a question completely in a few sentences. Pages that bury the answer under slogans or load their text with scripts are hard to use.",
        ],
        list: [
          "Open each page with a two to four sentence answer.",
          "Use question-style headings that match what families ask.",
          "Serve text in the HTML itself so crawlers do not need to run scripts.",
          "Add JSON-LD structured data for your organization, each location, services, and FAQs.",
          "State specifics: care types, licensed capacity, neighborhoods served, how to tour, and a pricing range where you can.",
        ],
      },
      {
        id: "corroborated",
        heading: "Be corroborated",
        paragraphs: [
          "Models are more confident about facts that appear consistently across independent sources. A community listed under three slightly different names with two phone numbers is less likely to be named.",
        ],
        list: [
          "Use one exact name, address, and phone number everywhere.",
          "Keep directory and referral site profiles current.",
          "Grow authentic reviews and reply to them.",
          "Earn local mentions from news, partners, and associations.",
        ],
      },
      {
        id: "measure",
        heading: "Measure it",
        paragraphs: [
          "Build a fixed set of realistic family questions for your markets and care types, run it across assistants monthly, and record whether you are mentioned, whether you are cited, and whether the details are right. Track the same set over time so changes are meaningful.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do AI assistants take paid placements for senior living?",
        a: "The major assistants do not currently let communities pay to be named inside organic answers. Some platforms show ads alongside AI features. Organic inclusion depends on the quality and consistency of your information.",
      },
      {
        q: "Should we block AI crawlers?",
        a: "Most senior living operators benefit from allowing them, because families use assistants to research care. Blocking them makes it harder for assistants to describe your community accurately.",
      },
    ],
  },
  {
    slug: "senior-living-seo-ai-checklist",
    path: "/guides/senior-living-seo-ai-checklist",
    title: "Senior Living SEO & AI Visibility Checklist | BrightLeads.AI",
    description:
      "A practical SEO and AI visibility checklist for assisted living, memory care, independent living, and residential care home websites.",
    h1: "The senior living SEO and AI visibility checklist.",
    lead: "Use this list to audit your community's website and profiles. Most items take hours, not months.",
    answer:
      "A senior living SEO and AI visibility checklist covers five areas: technical access (fast, crawlable pages and open AI crawler rules), entity facts (one consistent name, address, phone, and license everywhere), page coverage (a page per care type, location, cost, and key question), structured data (Organization, LocalBusiness, Service, and FAQPage schema), and reputation (reviews, replies, and accurate listings).",
    published: "2026-09-23",
    parts: [
      {
        id: "technical",
        heading: "Technical access",
        ordered: true,
        list: [
          "Pages load quickly on a phone.",
          "Text is present in the HTML without running scripts.",
          "robots.txt allows search and AI crawlers.",
          "An XML sitemap lists every important page with update dates.",
          "An llms.txt file summarizes the site.",
          "Every page has a unique title, description, and canonical URL.",
        ],
      },
      {
        id: "entity",
        heading: "Entity facts",
        ordered: true,
        list: [
          "One exact community name used everywhere.",
          "Address and phone match on the site, Google, Apple, Bing, and directories.",
          "License type and number listed where appropriate.",
          "Care types described the same way in every place.",
          "Duplicate listings removed.",
        ],
      },
      {
        id: "pages",
        heading: "Page coverage",
        ordered: true,
        list: [
          "A dedicated page for each care type you offer.",
          "A page for each community location.",
          "A cost or pricing guidance page.",
          "A comparison page, such as assisted living vs memory care.",
          "An FAQ page with direct answers.",
          "A clear tour or visit page.",
        ],
      },
      {
        id: "schema",
        heading: "Structured data",
        ordered: true,
        list: [
          "Organization or LocalBusiness schema with address and contact details.",
          "A schema entry for each location.",
          "Service schema for each care type.",
          "FAQPage schema on FAQ content.",
          "BreadcrumbList on interior pages.",
          "Validated with a schema testing tool.",
        ],
      },
      {
        id: "reputation",
        heading: "Reputation and listings",
        ordered: true,
        list: [
          "A steady flow of new, authentic reviews.",
          "Replies to every review without disclosing resident information.",
          "Complete Google Business Profile with photos and services.",
          "Accurate senior living directory profiles.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should we review this checklist?",
        a: "Run it fully once a quarter, and check listings and reviews monthly.",
      },
    ],
  },
  {
    slug: "inquiry-to-move-in",
    path: "/guides/inquiry-to-move-in",
    title:
      "How to Improve Senior Living Inquiry-to-Move-In Conversion | BrightLeads.AI",
    description:
      "Practical ways senior living communities can convert more inquiries into tours and move-ins: speed to lead, discovery, tours, follow-up, CRM, and measurement.",
    h1: "How to turn more senior living inquiries into move-ins.",
    lead: "Most communities can grow move-ins without more leads by fixing what happens after the inquiry.",
    answer:
      "Senior living communities convert more inquiries into move-ins by responding within minutes, asking discovery questions about care needs, timing, and decision makers, personalizing tours to what they learned, following up on a defined schedule for weeks or months, tracking every step in a CRM, and measuring conversion by lead source so marketing budget moves toward the sources that produce move-ins.",
    published: "2026-09-23",
    parts: [
      {
        id: "speed",
        heading: "Respond in minutes",
        paragraphs: [
          "Families often contact several communities at once. Route every inquiry to a person immediately, with alerts and a backup if the first person does not respond. Track speed to lead as a core metric.",
        ],
      },
      {
        id: "discovery",
        heading: "Ask better discovery questions",
        list: [
          "What prompted the search now?",
          "What help does your loved one need day to day?",
          "Who else is involved in the decision?",
          "What timing are you working with?",
          "What matters most in a community?",
        ],
      },
      {
        id: "tours",
        heading: "Personalize the tour",
        paragraphs: [
          "Show what the family told you matters. If they asked about dementia care, spend time with the memory care team. If they worried about meals, have them eat there. Send a short recap afterward.",
        ],
      },
      {
        id: "followup",
        heading: "Follow up on a schedule",
        paragraphs: [
          "Decisions often take weeks. Use a defined cadence of calls, emails, and texts with consent, each adding something useful: an answer to a question from the tour, an event invitation, or a resident story.",
        ],
      },
      {
        id: "measure",
        heading: "Measure by source",
        paragraphs: [
          "Track inquiry-to-tour and tour-to-move-in by source. A cheaper lead source that rarely converts can cost more per move-in than an expensive one that does.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a good inquiry-to-move-in rate?",
        a: "It varies widely by care type, market, and lead source, so compare your own rates over time and across sources rather than against a single benchmark.",
      },
    ],
  },
];

export const GUIDES_HUB = {
  title: "Senior Living Marketing Guides | BrightLeads.AI",
  description:
    "Practical guides for senior living operators on AI visibility, SEO, conversion, and choosing a marketing agency.",
  h1: "Guides for senior living operators.",
  lead: "Practical, answer-first guides on AI search, SEO, conversion, and choosing an agency.",
  answer:
    "BrightLeads.AI publishes practical guides for senior living operators on how AI assistants recommend communities, an SEO and AI visibility checklist, improving inquiry-to-move-in conversion, and how to choose a senior living marketing agency.",
};

export function guideBySlug(slug: string) {
  return GUIDE_DOCS.find((g) => g.slug === slug);
}
