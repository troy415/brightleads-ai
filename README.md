# BrightLeads.AI marketing site

Sales site for **BrightLeads.AI**, a San Francisco marketing agency for care homes, senior communities, RCFEs, ARFs, and similar operators.

The offer: web design, marketing campaigns, and technical systems interact to drive resident leads. **AI visibility** is part of that system (how the community shows up in AI answers, not only in Google). Buyers are operators. This site is for the operators who run the home.

White marketing page (`#ffffff`) with app color pop (sky `#0ea5e9`, indigo `#6366f1`, purple `#8b5cf6`). Dark navy is reserved for the product mock and the footer. Headlines use **Inter**. Copy does not use em dashes.

Stack: Next.js, TypeScript, Tailwind, shadcn/ui. GitHub `troy415/brightleads-ai` → Netlify production (`brightleads.ai`).

## Local

```bash
cd ~/Desktop/Website\ for\ BrightLeads.AI
cp .env.example .env.local   # optional
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

Copy `.env.example` to `.env.local`. Nothing is required to run locally.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, JSON-LD, and llms.txt |
| `DEMO_WEBHOOK_URL` | Optional. If set, inquiry form requests POST JSON here (Make, Zapier, n8n, or your inbox bridge). If unset, the form still succeeds and logs on the server. |

## Deploy

1. Push to GitHub: `https://github.com/troy415/brightleads-ai`
2. Netlify team **Bright Leads Dev Team** (`troyafarol`) builds from `main`
3. Build command: `npm run build` · Node 22 · Next.js runtime via `@netlify/plugin-nextjs`
4. Production env: `NEXT_PUBLIC_SITE_URL=https://brightleads.ai`

Production: [https://brightleads.ai](https://brightleads.ai). Preview: [https://brightleads-ai.netlify.app](https://brightleads-ai.netlify.app).

## Pages

- `/` Home: agency offer; connected systems plus AI visibility; FAQ
- `/work` Web design, campaigns, technical systems, AI visibility
- `/communities` Buyer page for care homes, senior communities, RCFEs, and ARFs
- `/ai-visibility` How communities show up in AI answers
- `/start` Conversation form for operators
- `/contact` Phone, email, San Francisco office
- `/llms.txt` Machine-readable overview for AI systems
- `/sitemap.xml` and `/robots.txt`

Old routes redirect: `/platform` → `/work`, `/agencies` and `/partners` → `/communities`, `/demo` → `/start`.

## AI visibility on this site

- JSON-LD: Organization + ProfessionalService + WebSite on every page; FAQPage on home and `/ai-visibility`
- `/llms.txt` with entity, buyers, services, and page list
- Semantic headings and a FAQ that answers who BrightLeads is, who it is for, and how it differs
- Titles and descriptions written so models can cite name, San Francisco location, services, and buyers
- Robots allow search and AI crawlers; sitemap includes `/ai-visibility`

No invented reviews, years in business, or client counts.

## Contact

- (415) 741-2648
- info@brightleads.ai
- 14 Precita Ave. Suite J, San Francisco, CA 94110
