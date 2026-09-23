# BrightLeads.AI marketing site

Sales site for **BrightLeads.AI**, a marketing agency for care homes, senior communities, RCFEs, ARFs, and similar operators. The offer: build systems where web design, marketing campaigns, and technical systems interact to drive leads. Buyers are communities and operators. Families are the residents those homes want, not the customer of this site.

White marketing page (`#ffffff`) with BrightBridge app color pop (sky `#0ea5e9`, indigo `#6366f1`, purple `#8b5cf6`). Dark navy is reserved for the product mock and the footer. Headlines use **Inter** at heavy weights (same face as body).

Stack matches a modern app scaffold (Next.js, TypeScript, Tailwind, shadcn/ui) and the same GitHub → Netlify pattern as the other Desktop sites.

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
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata and sitemap |
| `DEMO_WEBHOOK_URL` | Optional. If set, inquiry form requests POST JSON here (Make, Zapier, n8n, or your inbox bridge). If unset, the form still succeeds and logs on the server. |

## Deploy (same pattern as the other Desktop sites)

1. Push to GitHub: `https://github.com/troy415/brightleads-ai`
2. Netlify team **Bright Leads Dev Team** (`troyafarol`) builds from that repo
3. Build command: `npm run build` · Node 22 · Next.js runtime via `@netlify/plugin-nextjs`
4. After the first deploy, set `NEXT_PUBLIC_SITE_URL` and `DEMO_WEBHOOK_URL` in Netlify → Environment variables, then trigger a rebuild

Production domain: `brightleads.ai` / `www.brightleads.ai` on the Bright Leads Dev Team Netlify site (`brightleads-ai`). Preview: [https://brightleads-ai.netlify.app](https://brightleads-ai.netlify.app).

## Pages

- `/` Home: agency offer for operators; web, campaigns, and systems
- `/work` What we build and how the pieces interact
- `/communities` Buyer page for care homes, senior communities, RCFEs, and ARFs
- `/start` Conversation form (empty, loading, error, success)
- `/contact` Phone, email, San Francisco office (not a family directory)

Old routes redirect: `/platform` → `/work`, `/agencies` and `/partners` → `/communities`, `/demo` → `/start`.

## Contact (from the current public site)

- (415) 741-2648
- info@brightleads.ai
- 14 Precita Ave. Suite J, San Francisco, CA 94110
