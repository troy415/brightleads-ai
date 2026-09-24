import { Cards, CtaBand, FaqList, HeadBlock, PageHero, Section } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { AUDIENCES } from "@/lib/catalog";
import { WHO_WE_SERVE } from "@/lib/content/audiences";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: WHO_WE_SERVE.title,
  description: WHO_WE_SERVE.description,
  path: "/who-we-serve",
});

export default function WhoWeServePage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/who-we-serve",
          title: WHO_WE_SERVE.title,
          description: WHO_WE_SERVE.description,
          type: "CollectionPage",
          answer: WHO_WE_SERVE.answer,
          crumbs: [
            ["Home", ""],
            ["Who we serve", "/who-we-serve"],
          ],
          faqs: WHO_WE_SERVE.faqs,
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Who we serve", "/who-we-serve"],
        ]}
        eyebrow="Who we serve"
        h1={WHO_WE_SERVE.h1}
        lead={WHO_WE_SERVE.lead}
        answer={WHO_WE_SERVE.answer}
      />
      <Section>
        <Cards
          cols="g3"
          items={AUDIENCES.map((a) => ({
            href: a.href,
            icon: a.icon,
            t: a.name,
            d: a.blurb ?? "",
            more: "See how we help",
          }))}
        />
      </Section>
      <Section band="band" labelledBy="for">
        <div className="split">
          <div className="stack">
            <HeadBlock
              eyebrow="Who this site is for"
              heading="For operators, not families."
              id="for"
            />
          </div>
          <div className="prose">
            <p>
              This website is written for the people who run senior living:
              owners, operators, administrators, and sales and marketing
              leaders. We market communities so families can find them. We do
              not operate a family directory or a placement service.
            </p>
            <p>
              If you are looking for care for a family member, start with the
              community you are considering.
            </p>
          </div>
        </div>
      </Section>
      <FaqList
        faqs={WHO_WE_SERVE.faqs}
        eyebrow="Questions operators ask"
        title="Frequently asked questions"
      />
      <CtaBand />
    </>
  );
}
