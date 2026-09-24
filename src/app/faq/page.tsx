import { CtaBand, PageHero, Section } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { HOME_FAQS } from "@/lib/catalog";
import { SERVICE_DOCS } from "@/lib/content/services";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta } from "@/lib/site";

const AI = SERVICE_DOCS.find((s) => s.path === "/ai-visibility")!.faqs;
const HUB = [
  {
    q: "Can I hire you for just one service?",
    a: "Yes. Many clients start with one service, often AI visibility, SEO, or paid media, and add more once they see results. AI visibility fundamentals are included in every plan.",
  },
  {
    q: "Do you work with our existing vendors?",
    a: "Yes. We can run alongside your current website host, CRM, or ad agency and share one set of reporting.",
  },
];
const TERMS = [
  {
    q: "Do you require a long-term contract?",
    a: "No. Every engagement is month to month. You can pause or leave with 30 days' notice.",
  },
  {
    q: "Who owns the work?",
    a: "You do. Websites, domains, content, ad accounts, analytics, CRM configuration, and creative are in your name from day one. If you leave, nothing has to be transferred back to you because it never left.",
  },
  {
    q: "How is pricing set?",
    a: "We quote a flat monthly fee based on the number of communities and the services in scope. Ad spend is separate and paid directly to the ad platforms in your accounts.",
  },
  HOME_FAQS[5],
];
const SERVICES_FAQ = [
  ...HUB,
  SERVICE_DOCS.find((s) => s.slug === "paid-media")!.faqs[1],
  SERVICE_DOCS.find((s) => s.slug === "crm-automation")!.faqs[0],
  SERVICE_DOCS.find((s) => s.slug === "reputation-management")!.faqs[0],
];

const GROUPS = [
  {
    id: "g0",
    title: "About BrightLeads.AI",
    faqs: [
      ...HOME_FAQS.slice(0, 3),
      {
        q: "Is BrightLeads.AI a placement agency or senior living directory?",
        a: "No. BrightLeads.AI is a marketing agency for operators. We do not refer families for a fee or run a consumer directory.",
      },
    ],
  },
  { id: "g1", title: "AI visibility", faqs: AI },
  { id: "g2", title: "Terms and pricing", faqs: TERMS },
  { id: "g3", title: "Services", faqs: SERVICES_FAQ },
];

const FLAT = GROUPS.flatMap((g) => g.faqs);

const TITLE = "Senior Living Marketing FAQ | BrightLeads.AI";
const DESCRIPTION =
  "Answers to common questions about BrightLeads.AI, senior living marketing, AI visibility, pricing, contracts, and services.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/faq",
          title: TITLE,
          description: DESCRIPTION,
          answer: HOME_FAQS[0].a,
          crumbs: [
            ["Home", ""],
            ["FAQ", "/faq"],
          ],
          faqs: FLAT,
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["FAQ", "/faq"],
        ]}
        eyebrow="FAQ"
        h1="Frequently asked questions."
        lead="Direct answers about who we are, how AI visibility works, our terms, and our services."
        answer={HOME_FAQS[0].a}
      />
      {GROUPS.map((group, i) => (
        <Section
          key={group.id}
          band={i % 2 === 0 ? "band" : ""}
          labelledBy={group.id}
        >
          <div className="head">
            <h2 id={group.id}>{group.title}</h2>
          </div>
          <div className="faq">
            {group.faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <div className="ans">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </Section>
      ))}
      <CtaBand />
    </>
  );
}
