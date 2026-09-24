# BrightLeads.AI marketing site

Sales site for **BrightLeads.AI**, a San Francisco marketing agency for care homes, senior communities, RCFEs, ARFs, and similar operators.

Hero: **Fill rooms with a system that works together.** SEO · Paid media · Websites · Reputation · CRM · AI visibility.

Buyers are operators. This site is for the operators who run the home. It is not a family directory and not a placement agency.

White marketing page (`#ffffff`) with app color pop (sky `#0ea5e9`, indigo `#6366f1`). Headlines use **Inter**. Copy does not use em dashes.

Stack: Next.js, TypeScript, Tailwind, shadcn/ui. GitHub `troy415/brightleads-ai` → Netlify production (`brightleads.ai`).

## Local

```bash
cd ~/Desktop/Website\ for\ BrightLeads.AI
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

| Script | What it does |
|---|---|
| `npm run dev` | Next.js on port **43123** |
| `npm run build` | Production build (what Netlify runs) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Env

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, JSON-LD, and llms.txt |
| `DEMO_WEBHOOK_URL` | Optional. If set, `/start` form requests POST JSON here. If unset, the form still succeeds and logs on the server. |

## Information architecture

Primary nav: **Services**, **Who we serve**, **Guides**, **AI visibility**, plus **Start a conversation**.

| Route | Role |
|---|---|
| `/` | Home. Fill rooms hero. Connected system plus AI visibility. FAQ. |
| `/services` | Twelve-service hub |
| `/services/*` | Nested service pages (SEO, local SEO, paid media, websites, reputation, branding, content, CRM, sales enablement, research, lease-up) |
| `/ai-visibility` | Flagship AI visibility / GEO / AEO service |
| `/who-we-serve` | Operator audiences hub |
| `/who-we-serve/*` | RCFEs, AL/MC, IL/life plan, portfolios, home care |
| `/guides` | Operator guides hub |
| `/guides/*` | AI search, SEO checklist, inquiry-to-move-in |
| `/how-we-work` | Process, 90-day plan, month-to-month terms |
| `/choosing-an-agency` | Buyer's guide |
| `/about` `/faq` `/glossary` `/contact` `/privacy` | Secondary pages (footer) |
| `/start` `/thank-you` | AI visibility check form |
| `/llms.txt` `/llms-full.txt` | Machine-readable overviews |

Old URLs redirect: `/work` → `/services`, `/communities` → `/who-we-serve`, `/platform` → `/services`, `/agencies` and `/partners` → `/who-we-serve`, `/demo` → `/start`. html+md source pairs are one Next.js route each, not two live URLs.

## AI visibility on this site

- JSON-LD Organization + ProfessionalService + WebSite on every page; FAQPage, Service, Article, DefinedTermSet where they fit
- `/llms.txt` and `/llms-full.txt`
- Semantic headings and a FAQ that answers who BrightLeads is, who it is for, and how it differs
- Robots allow search and AI crawlers

No invented reviews, years in business, or client counts.

## Contact

- (415) 741-2648
- info@brightleads.ai
- 14 Precita Ave. Suite J, San Francisco, CA 94110
