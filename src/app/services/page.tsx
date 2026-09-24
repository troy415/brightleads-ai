import { Cards, CtaBand, FaqList, HeadBlock, PageHero, Section } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { SERVICES } from "@/lib/catalog";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta } from "@/lib/site";

const TITLE = "Senior Living Marketing Services | BrightLeads.AI";
const DESCRIPTION =
  "Every senior living marketing service in one connected system: AI visibility, SEO, local SEO, PPC, websites, reputation, branding, content, CRM, sales enablement, research, and lease-up.";
const ANSWER =
  "AI visibility, senior living SEO, local SEO and Google Business Profile management, paid media and PPC, website design and conversion optimization, reputation management and PR, branding and creative, content and social media, CRM integration and lead nurturing, sales enablement, market research, and lease-up and repositioning programs.";

const FAQS = [
  {
    q: "What services does BrightLeads.AI offer?",
    a: ANSWER,
  },
  {
    q: "Can I hire you for just one service?",
    a: "Yes. Many clients start with one service, often AI visibility, SEO, or paid media, and add more once they see results. AI visibility fundamentals are included in every plan.",
  },
  {
    q: "Do you work with our existing vendors?",
    a: "Yes. We can run alongside your current website host, CRM, or ad agency and share one set of reporting.",
  },
];

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/services",
          title: TITLE,
          description: DESCRIPTION,
          type: "CollectionPage",
          answer: ANSWER,
          crumbs: [
            ["Home", ""],
            ["Services", "/services"],
          ],
          faqs: FAQS,
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Services", "/services"],
        ]}
        eyebrow="Services"
        h1={
          <>
            Full-service senior living marketing,{" "}
            <span className="text-gradient">connected.</span>
          </>
        }
        lead="Twelve services that share one plan, one tracking setup, and one report. Hire one, or let us run the whole system."
        answer={ANSWER}
      />
      <Section>
        <Cards
          cols="g3"
          items={SERVICES.map((s) => ({
            href: s.href,
            icon: s.icon,
            t: s.name,
            d: s.blurb ?? "",
          }))}
        />
      </Section>
      <Section band="band" labelledBy="plans">
        <HeadBlock
          eyebrow="Plans"
          heading="Three ways to work with us."
          lead="Every plan is month to month and includes AI visibility fundamentals."
          id="plans"
        />
        <Cards
          cols="g3"
          items={[
            {
              k: "Foundation",
              t: "Get found and get cited",
              d: "AI visibility, SEO, local SEO, Google Business Profile, reviews, and tracking. For communities that need a strong base.",
            },
            {
              k: "Growth",
              t: "Add demand and follow-up",
              d: "Everything in Foundation plus paid media, landing pages, CRM nurture, and content. For communities with open units to fill.",
            },
            {
              k: "Full system",
              t: "Your whole marketing department",
              d: "Everything in Growth plus brand, website, sales enablement, research, and a dedicated strategist. For operators and portfolios.",
            },
          ]}
        />
      </Section>
      <FaqList
        faqs={FAQS}
        eyebrow="Questions operators ask"
        title="Frequently asked questions"
      />
      <CtaBand />
    </>
  );
}
