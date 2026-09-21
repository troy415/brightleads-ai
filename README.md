# BrightLeads.AI — marketing site

Sales site for **BrightLeads.AI**, the operating system for senior living placement agencies: family inquiries, community relationships, and a partner ecosystem.

This is the product site, not the current consulting brochure at [brightleads.ai](https://brightleads.ai). Keep that domain on the old site until you cut over.

Stack matches a modern app scaffold (Next.js, TypeScript, Tailwind, shadcn/ui) and the same GitHub → Netlify pattern as Sugar & Sound and BrightBridge Care.

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
| `DEMO_WEBHOOK_URL` | Optional. If set, demo requests POST JSON here (Make, Zapier, n8n, or your inbox bridge). If unset, the form still succeeds and logs on the server. |

## Deploy (same pattern as the other Desktop sites)

1. Push to GitHub: `https://github.com/troy415/brightleads-ai`
2. Netlify team **Bright Leads Dev Team** (`troyafarol`) builds from that repo
3. Build command: `npm run build` · Node 22 · Next.js runtime via `@netlify/plugin-nextjs`
4. After the first deploy, set `NEXT_PUBLIC_SITE_URL` and `DEMO_WEBHOOK_URL` in Netlify → Environment variables, then trigger a rebuild

Do **not** attach `brightleads.ai` until you are ready to replace the live consulting site.

## Pages

- `/` Home
- `/platform` Product
- `/agencies` Buyer page for placement agents and agencies
- `/partners` Community / ecosystem
- `/demo` Working demo form (empty, loading, error, success)
- `/contact` Phone, email, San Francisco office

## Contact (from the current public site)

- (415) 741-2648
- info@brightleads.ai
- 14 Precita Ave. Suite J, San Francisco, CA 94110
