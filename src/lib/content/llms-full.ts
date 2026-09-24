import { AUDIENCE_DOCS, WHO_WE_SERVE } from "@/lib/content/audiences";
import { GUIDE_DOCS, GUIDES_HUB } from "@/lib/content/guides";
import { SERVICE_DOCS } from "@/lib/content/services";
import { HOME_FAQS } from "@/lib/catalog";
import { site } from "@/lib/site";

function block(title: string, url: string, body: string) {
  return `# ${title}\n\nURL: ${url}\n\n${body.trim()}\n`;
}

export function llmsFullTxt(): string {
  const parts = [
    block("Home", `${site.url}/`, `${site.tagline}\n${site.heroLine}\n\n${site.orgDescription}\n\n${HOME_FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}`),
    ...SERVICE_DOCS.map((s) =>
      block(s.name, `${site.url}${s.path}`, `${s.answer}\n\n${s.includes.map(([t, d]) => `- ${t}: ${d}`).join("\n")}`)
    ),
    block("Services", `${site.url}/services`, SERVICE_DOCS.map((s) => `- ${s.name}: ${s.description}`).join("\n")),
    block("Who we serve", `${site.url}/who-we-serve`, WHO_WE_SERVE.answer),
    ...AUDIENCE_DOCS.map((a) => block(a.name, `${site.url}${a.path}`, a.answer)),
    block("Guides", `${site.url}/guides`, GUIDES_HUB.answer),
    ...GUIDE_DOCS.map((g) => block(g.h1, `${site.url}${g.path}`, g.answer)),
  ];
  return `# BrightLeads.AI full site text\n\n${site.tagline}\n${site.heroLine}\n\n${parts.join("\n---\n\n")}\n`;
}
