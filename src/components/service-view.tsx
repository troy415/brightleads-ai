import Link from "next/link";

import {
  Cards,
  Checks,
  CompareTable,
  CtaBand,
  FaqList,
  HeadBlock,
  PageHero,
  Section,
  Steps,
} from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, serviceByHref } from "@/lib/catalog";
import { SERVICE_DOCS, type ServiceDoc } from "@/lib/content/services";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta } from "@/lib/site";

const AIV_STACK_ROWS = [
  [
    "Entity",
    "One canonical fact set: legal and brand name, address, license numbers, care types, capacity, phone, hours, leadership.",
    "Models cross-check facts. Conflicting names or addresses lower confidence and you get left out.",
  ],
  [
    "Structured data",
    "JSON-LD for Organization, each location (LocalBusiness), services, FAQPage, reviews, breadcrumbs, and articles.",
    "Machine-readable facts are easier to extract and attribute than prose.",
  ],
  [
    "Answer-ready content",
    "Pages that answer the exact questions families ask: cost, care levels, differences between care types, availability, touring.",
    "Assistants quote passages that answer a question directly and completely.",
  ],
  [
    "Crawl access",
    "Robots rules for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and others, an llms.txt file, and fast static HTML.",
    "If a crawler cannot fetch or render the page, nothing else matters.",
  ],
  [
    "Corroboration",
    "Google Business Profile, directories, licensing records, reviews, local press, and partner mentions kept consistent.",
    "Models trust facts confirmed by several independent sources.",
  ],
  [
    "Measurement",
    "A monthly prompt panel across major assistants, tracking mentions, citations, accuracy, and share of answer against nearby communities.",
    "You cannot improve what you do not measure, and AI answers change often.",
  ],
];

const AIV_VS_ROWS = [
  ["Goal", "Rank a page in the list of results", "Be named and cited inside the answer"],
  ["Unit of competition", "Keywords and pages", "Entities, facts, and passages"],
  [
    "Where families see you",
    "Google results and the map pack",
    "ChatGPT, Gemini, Perplexity, Claude, Copilot, Google AI Overviews and AI Mode",
  ],
  [
    "Main signals",
    "Relevance, links, technical health, local signals",
    "Clear entity, structured data, answer-quality passages, corroboration, crawl access",
  ],
  [
    "How it is measured",
    "Rankings, clicks, traffic",
    "Mention rate, citation rate, answer accuracy, share of answer",
  ],
  ["Relationship", "Still the foundation", "Built on top of strong SEO, not instead of it"],
];

export function serviceMetadata(doc: ServiceDoc) {
  return pageMeta({ title: doc.title, description: doc.description, path: doc.path });
}

export function ServiceView({ doc }: { doc: ServiceDoc }) {
  const crumbs: [string, string][] = doc.path.startsWith("/services/")
    ? [
        ["Home", ""],
        ["Services", "/services"],
        [doc.name, doc.path],
      ]
    : [
        ["Home", ""],
        [doc.name, doc.path],
      ];

  const h1 =
    doc.extra === "ai" ? (
      <>
        Show up when families ask AI,{" "}
        <span className="text-gradient">not only Google.</span>
      </>
    ) : (
      doc.h1
    );

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: doc.path,
          title: doc.title,
          description: doc.description,
          answer: doc.answer,
          crumbs,
          faqs: doc.faqs,
          service: {
            name: doc.name,
            type: doc.stype,
            includes: doc.includes.map(([t]) => t),
          },
        })}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow={doc.eyebrow}
        h1={h1}
        lead={doc.lead}
        answer={doc.answer}
      />
      <Section labelledBy="includes">
        <HeadBlock
          eyebrow="What's included"
          heading={doc.incH}
          lead={doc.incLead}
          id="includes"
        />
        <Cards
          cols="g3"
          items={doc.includes.map(([t, d]) => ({ t, d }))}
        />
      </Section>
      {doc.extra === "ai" ? (
        <>
          <Section labelledBy="stack">
            <HeadBlock
              eyebrow="The stack"
              heading="Six layers, built in order."
              id="stack"
            />
            <CompareTable
              caption="The AI visibility stack we build for every community"
              headers={["Layer", "What we do", "Why it matters to AI assistants"]}
              rows={AIV_STACK_ROWS}
            />
          </Section>
          <Section band="band-tint" labelledBy="vs">
            <HeadBlock
              eyebrow="SEO vs AI visibility"
              heading="How AI visibility relates to SEO."
              lead="You need both. AI visibility builds on a healthy SEO foundation and adds the layers assistants depend on."
              id="vs"
            />
            <CompareTable
              caption="SEO and AI visibility compared"
              headers={["", "Classic SEO", "AI visibility (GEO / AEO)"]}
              usCol={2}
              rows={AIV_VS_ROWS}
            />
          </Section>
          <Section labelledBy="proof">
            <div className="split">
              <div className="stack">
                <HeadBlock
                  eyebrow="Proof on our own site"
                  heading="We practice this here first."
                  lead="Everything on this website is built the way we build client sites, so you can inspect it."
                  id="proof"
                />
              </div>
              <Checks
                items={[
                  "Every page is static HTML. The words are in the page source, with no script required to read them.",
                  "Each page opens with a short answer written to be quoted.",
                  "JSON-LD on every page: Organization, Service, BreadcrumbList, FAQPage, Article, and DefinedTermSet on the glossary.",
                  <>
                    A public <Link href="/llms.txt">llms.txt</Link> and a full-text{" "}
                    <Link href="/llms-full.txt">llms-full.txt</Link>.
                  </>,
                  "robots.txt that explicitly allows search and AI crawlers, and an XML sitemap with update dates.",
                  "No invented reviews, awards, client counts, or years in business. Assistants and families both punish claims they cannot verify.",
                ]}
              />
            </div>
          </Section>
        </>
      ) : null}
      <Section band="band" labelledBy="how">
        <div className="split">
          <div className="stack">
            <HeadBlock eyebrow="How we work" heading={doc.howH} id="how" />
          </div>
          <Steps items={doc.how} />
        </div>
      </Section>
      <Section labelledBy="report">
        <div className="split">
          <div className="stack">
            <HeadBlock
              eyebrow="Reporting"
              heading={doc.repH}
              id="report"
            />
          </div>
          <Checks items={doc.report} />
        </div>
      </Section>
      <Section band="band-tint" labelledBy="connects">
        <HeadBlock
          eyebrow="Connected services"
          heading="These services make this one stronger."
          id="connects"
        />
        <Cards
          cols="g3"
          items={doc.connects.map(([href, d]) => {
            const svc = serviceByHref(href) ?? SERVICES.find((s) => s.href === href);
            return {
              href,
              icon: svc?.icon,
              t: svc?.name ?? href,
              d,
            };
          })}
        />
      </Section>
      <FaqList
        faqs={doc.faqs}
        eyebrow="Questions operators ask"
        title="Frequently asked questions"
      />
      <CtaBand />
    </>
  );
}

export function serviceDocBySlug(slug: string) {
  return SERVICE_DOCS.find((s) => s.slug === slug);
}

export function aiVisibilityDoc() {
  return SERVICE_DOCS.find((s) => s.path === "/ai-visibility")!;
}
