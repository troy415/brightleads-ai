import {
  Cards,
  Checks,
  CtaBand,
  FaqList,
  HeadBlock,
  PageHero,
  Section,
} from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, serviceByHref } from "@/lib/catalog";
import type { AudienceDoc } from "@/lib/content/audiences";
import { pageGraph } from "@/lib/json-ld";

export function AudienceView({ doc }: { doc: AudienceDoc }) {
  const crumbs: [string, string][] = [
    ["Home", ""],
    ["Who we serve", "/who-we-serve"],
    [doc.name, doc.path],
  ];

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
            name: doc.svcName,
            type: "Marketing services",
            audience: doc.name,
          },
        })}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Who we serve"
        h1={doc.h1}
        lead={doc.lead}
        answer={doc.answer}
      />
      <Section band="band" labelledBy="challenge">
        <div className="split">
          <div className="stack">
            <HeadBlock eyebrow="The challenge" heading={doc.chalH} id="challenge" />
          </div>
          <div className="prose">
            {doc.challenge.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </Section>
      <Section labelledBy="what">
        <div className="split">
          <div className="stack">
            <HeadBlock eyebrow="What we do" heading={doc.doH} id="what" />
          </div>
          <Checks items={doc.do} />
        </div>
      </Section>
      <Section band="band-tint" labelledBy="services">
        <HeadBlock
          eyebrow="Recommended services"
          heading="Where we usually start."
          id="services"
        />
        <Cards
          cols="g3"
          items={doc.svcs.map(([href, d]) => {
            const svc = serviceByHref(href) ?? SERVICES.find((s) => s.href === href);
            return { href, icon: svc?.icon, t: svc?.name ?? href, d };
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
