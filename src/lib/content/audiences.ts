import type { Faq, IconName } from "@/lib/catalog";

export type AudienceDoc = {
  slug: string;
  path: string;
  name: string;
  svcName: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  answer: string;
  chalH: string;
  challenge: string[];
  doH: string;
  do: string[];
  svcs: [string, string][];
  faqs: Faq[];
};

export const AUDIENCE_DOCS: AudienceDoc[] = [
  {
    slug: "residential-care-homes",
    path: "/who-we-serve/residential-care-homes",
    name: "Residential care homes & RCFEs",
    svcName: "Marketing for residential care homes and RCFEs",
    title:
      "Marketing for Residential Care Homes, RCFEs & Board and Care | BrightLeads.AI",
    description:
      "Digital marketing for residential care homes, RCFEs, board and care homes, and ARFs: right-sized websites, Google Business Profile, reviews, referral tracking, and AI visibility.",
    h1: "Marketing for residential care homes, RCFEs, and board and care.",
    lead: "Small homes deliver some of the most personal care in senior living, and they are often invisible online. We give them a right-sized marketing system built for how families and referrers find them.",
    answer:
      "BrightLeads.AI markets residential care homes, including Residential Care Facilities for the Elderly (RCFEs), board and care homes, and Adult Residential Facilities (ARFs). For homes with six to about fifty beds, we build a clear website, a strong Google Business Profile, a steady flow of reviews, referral partner tracking, and AI visibility, with plans sized for a small home's budget.",
    chalH: "Why small homes lose families to bigger communities.",
    challenge: [
      "Many residential care homes rely on placement agents and word of mouth. When a family searches directly or asks an AI assistant, the home often has no website, an outdated Google listing, or a name that does not match its license.",
      "Families then default to the larger communities with polished websites, even when a six-bed home would be a better fit for their parent.",
      "Our founder has run RCFE operations and worked in senior placement, so we build around how these homes actually fill beds: referrals, local search, and trust.",
    ],
    doH: "A complete system, sized for a small home.",
    do: [
      "A simple, fast website that explains your care, your caregivers, your home, and how to arrange a visit",
      "Google Business Profile setup with the right categories, photos, and services",
      "Name, license, and address consistency so assistants and directories agree",
      "Review requests from families, with replies that protect resident privacy",
      "Referral partner tracking for placement agents, hospitals, and case managers",
      "AI visibility so assistants can recommend small homes when they fit what a family asks for",
    ],
    svcs: [
      ["/ai-visibility", "Get named when families ask assistants about smaller, home-like care."],
      ["/services/local-seo", "Most small-home inquiries start with a local search."],
      ["/services/websites", "A right-sized site that makes it easy to call or visit."],
      ["/services/reputation-management", "Reviews carry extra weight for small homes."],
    ],
    faqs: [
      {
        q: "Do you work with six-bed care homes?",
        a: "Yes. We build plans sized for small residential care homes, including single RCFEs and board and care homes.",
      },
      {
        q: "Can you help us rely less on placement agencies?",
        a: "Yes. We build direct demand through local search, reviews, and AI visibility, and we track referral partners so you can see which relationships are worth the fee.",
      },
      {
        q: "What is an RCFE?",
        a: "A Residential Care Facility for the Elderly is California's license for non-medical residential care for people 60 and older, ranging from six-bed homes to large assisted living communities.",
      },
    ],
  },
  {
    slug: "assisted-living-memory-care",
    path: "/who-we-serve/assisted-living-memory-care",
    name: "Assisted living & memory care",
    svcName: "Assisted living and memory care marketing",
    title: "Assisted Living & Memory Care Marketing Agency | BrightLeads.AI",
    description:
      "Assisted living and memory care marketing: care-type SEO, local search, paid media, reputation, CRM nurture, sales enablement, and AI visibility for single and regional communities.",
    h1: "Assisted living and memory care marketing that fills units.",
    lead: "Families looking for assisted living or memory care are often under pressure and moving fast. We make sure they find you, understand you, and reach your team quickly.",
    answer:
      "BrightLeads.AI provides full-service marketing for assisted living and memory care communities. We build care-type pages and SEO, run local search and paid media, grow reviews, set up CRM nurture and speed-to-lead, coach sales teams, and make each community visible in AI answers, all reported against tours and move-ins.",
    chalH: "Urgent decisions, long research.",
    challenge: [
      "Memory care searches often start after a hospital stay or a hard conversation. Families want clear answers about security, staffing, cost, and availability, and they want them now.",
      "At the same time, many assisted living decisions take months of research. Communities need to win the urgent inquiry and stay present through a long consideration period.",
      "We build for both: fast, clear answers for urgent searches, and nurture that stays helpful for families who are not ready yet.",
    ],
    doH: "What we do for assisted living and memory care.",
    do: [
      "Separate, detailed pages for assisted living, memory care, and respite",
      "Cost and care-level guidance that answers questions before the call",
      "Paid search by care type with call tracking",
      "Speed-to-lead routing and nurture sequences by care type",
      "Tour playbooks for memory care families",
      "AI visibility so assistants describe your care levels accurately",
    ],
    svcs: [
      ["/services/senior-living-seo", "Rank for each care type in each city you serve."],
      ["/services/paid-media", "Capture urgent memory care searches."],
      ["/services/crm-automation", "Nurture long assisted living decisions."],
      ["/services/sales-enablement", "Convert more tours into move-ins."],
    ],
    faqs: [
      {
        q: "Should memory care have its own page?",
        a: "Yes. Families search for memory care specifically, and assistants need a clear page describing your secure environment, programming, and staffing.",
      },
      {
        q: "Do you work with regional operators?",
        a: "Yes. We work with single communities and regional operators with several locations.",
      },
    ],
  },
  {
    slug: "independent-living-life-plan",
    path: "/who-we-serve/independent-living-life-plan",
    name: "Independent living & life plan communities",
    svcName: "Independent living and life plan community marketing",
    title:
      "Independent Living, CCRC & Life Plan Community Marketing | BrightLeads.AI",
    description:
      "Marketing for independent living, life plan communities (CCRCs), and 55+ rentals: brand, content, events, long-cycle nurture, paid media, and AI visibility for proactive movers.",
    h1: "Marketing for independent living and life plan communities.",
    lead: "Independent living prospects plan ahead, compare carefully, and talk to their friends. We build brands, content, events, and long-cycle nurture that keep your community on the shortlist.",
    answer:
      "BrightLeads.AI markets independent living communities, life plan communities (also called continuing care retirement communities or CCRCs), and 55+ rental communities. For these longer, lifestyle-driven decisions, we combine branding, content, events, paid media, and multi-month nurture with AI visibility so prospects and their assistants understand contract types, fees, and lifestyle.",
    chalH: "A long decision driven by lifestyle and finances.",
    challenge: [
      "Independent living and life plan prospects often research for a year or more. They compare entrance fees, contract types, dining, and amenities, and they ask assistants to explain the difference between contract options.",
      "Communities that explain these clearly and stay in touch without pressure earn the move-in.",
    ],
    doH: "What we do for IL and life plan communities.",
    do: [
      "Brand and lifestyle storytelling with real residents",
      "Clear pages explaining contract types, entrance fees, and monthly fees",
      "Event marketing for seminars, dining events, and open houses",
      "Long-cycle email nurture and newsletters",
      "Digital ads to adult children and prospects",
      "AI visibility so assistants explain your contract and amenities correctly",
    ],
    svcs: [
      ["/services/branding", "Stand out in a lifestyle-driven decision."],
      ["/services/content-social", "Stories and guides for a long research period."],
      ["/services/crm-automation", "Stay in touch for months without pressure."],
      ["/ai-visibility", "Help assistants explain your contract options."],
    ],
    faqs: [
      {
        q: "What is a life plan community?",
        a: "A life plan community, also called a continuing care retirement community (CCRC), offers independent living plus access to higher levels of care on one campus, usually under a residency contract.",
      },
      {
        q: "Do you market 55+ rental communities?",
        a: "Yes. We market active adult and 55+ rental communities as well as full life plan campuses.",
      },
    ],
  },
  {
    slug: "multi-community-operators",
    path: "/who-we-serve/multi-community-operators",
    name: "Multi-community operators",
    svcName: "Marketing for multi-community senior living operators",
    title:
      "Marketing for Multi-Community Senior Living Operators & Portfolios | BrightLeads.AI",
    description:
      "Senior living marketing for operators, management companies, and owners with multiple communities: portfolio SEO, local SEO at scale, centralized paid media, CRM, and AI visibility.",
    h1: "One marketing system across every community you operate.",
    lead: "Portfolios need consistency and local relevance at the same time. We build shared systems and templates, then tune each community to its own market.",
    answer:
      "BrightLeads.AI works with multi-community senior living operators, management companies, and owners to run marketing across a portfolio. We build scalable website and schema templates, manage Google Business Profiles and local SEO for every location, centralize paid media and CRM, and report occupancy performance and AI visibility by community and region.",
    chalH: "Scale without losing local relevance.",
    challenge: [
      "Operators often inherit different websites, CRMs, and agencies with every acquisition. Data does not line up and reporting is manual.",
      "Meanwhile each community competes in its own local market and needs its own pages, profiles, and reviews.",
    ],
    doH: "What we do for portfolios.",
    do: [
      "Portfolio website architecture with community-level pages and schema",
      "Google Business Profile and listings management at scale",
      "Centralized paid media with budget shifted to census need",
      "CRM standardization and source attribution across communities",
      "Portfolio dashboards by community, region, and care type",
      "Onboarding playbooks for acquisitions and new openings",
    ],
    svcs: [
      ["/services/local-seo", "Every location, managed with one process."],
      ["/services/crm-automation", "One source of truth across the portfolio."],
      ["/services/paid-media", "Budget follows census need."],
      ["/ai-visibility", "Consistent entity data across every community."],
    ],
    faqs: [
      {
        q: "Can you onboard communities after an acquisition?",
        a: "Yes. We have a playbook for transferring domains, profiles, ad accounts, and CRM data so marketing keeps running through the transition.",
      },
      {
        q: "Do you replace our in-house marketing team?",
        a: "No. Many operators use us alongside an in-house team to add specialist skills and capacity.",
      },
    ],
  },
  {
    slug: "home-care-franchises",
    path: "/who-we-serve/home-care-franchises",
    name: "Home care & franchises",
    svcName: "Home care and franchise marketing",
    title: "Home Care Marketing & Senior Care Franchise Marketing | BrightLeads.AI",
    description:
      "Digital marketing for home care agencies and senior care franchises: local SEO for every territory, PPC, Google Business Profile, reviews, caregiver recruiting, and AI visibility.",
    h1: "Local marketing for home care agencies and franchise territories.",
    lead: "Home care is won territory by territory. We build local visibility, lead generation, and reviews for every location, and keep the brand consistent across the system.",
    answer:
      "BrightLeads.AI markets home care agencies and senior care franchises. We build territory-level local SEO and Google Business Profiles, run PPC and paid social for client and caregiver leads, grow reviews, route leads to the right location, and make each territory visible in AI answers, with brand standards the franchisor can govern.",
    chalH: "Many territories, one brand.",
    challenge: [
      "Franchise systems need every territory to show up locally while staying on brand. Franchisees vary in budget and experience.",
      "Home care agencies also compete for caregivers, so recruiting marketing matters as much as client acquisition.",
    ],
    doH: "What we do for home care.",
    do: [
      "Territory pages and Google Business Profiles for every location",
      "Local PPC with lead routing to the right franchisee",
      "Review generation and response by territory",
      "Caregiver recruiting campaigns and career pages",
      "Brand-compliant templates franchisees can use",
      "AI visibility so assistants name the right local office",
    ],
    svcs: [
      ["/services/local-seo", "Territory-level map visibility."],
      ["/services/paid-media", "Client and caregiver lead generation."],
      ["/services/reputation-management", "Reviews for every location."],
      ["/services/crm-automation", "Route leads to the right territory."],
    ],
    faqs: [
      {
        q: "Do you work with franchisors or franchisees?",
        a: "Both. We can run a system-wide program for the franchisor or support individual franchisees within brand standards.",
      },
      {
        q: "Can you help with caregiver recruiting?",
        a: "Yes. We run recruiting campaigns and career pages alongside client marketing.",
      },
    ],
  },
];

export const WHO_WE_SERVE = {
  title: "Who We Serve: Senior Living Operators of Every Size | BrightLeads.AI",
  description:
    "BrightLeads.AI serves assisted living, memory care, independent living, life plan communities, RCFEs, board and care homes, ARFs, multi-community operators, and home care franchises.",
  h1: "Built for every kind of senior living operator.",
  lead: "From a six-bed board and care home to a multi-state portfolio, the system is the same: be easy to find, easy to trust, and easy to reach.",
  answer:
    "BrightLeads.AI works with owners, operators, executive directors, and sales and marketing leaders at assisted living and memory care communities, independent living and life plan communities, residential care homes (RCFEs, board and care, and ARFs), multi-community operators, and home care agencies and franchises across the United States.",
  faqs: [
    {
      q: "Do you work with communities outside California?",
      a: "Yes. We are based in San Francisco and work with operators across the United States.",
    },
    {
      q: "Are you a placement agency or a directory?",
      a: "No. BrightLeads.AI is a marketing agency for operators. We do not charge per referral and we do not list communities in a consumer directory.",
    },
  ] satisfies Faq[],
};

export function audienceBySlug(slug: string) {
  return AUDIENCE_DOCS.find((a) => a.slug === slug);
}

export const AUDIENCE_ICONS: Record<string, IconName> = {
  "residential-care-homes": "home",
  "assisted-living-memory-care": "heart",
  "independent-living-life-plan": "tree",
  "multi-community-operators": "building",
  "home-care-franchises": "users",
};
