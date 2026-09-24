import { Cards, CtaBand, FaqList, HeadBlock, PageHero, Section } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta, site } from "@/lib/site";

const TITLE = "About BrightLeads.AI: Senior Living Marketing Built by an Operator";
const DESCRIPTION =
  "About BrightLeads.AI, a San Francisco senior living marketing agency founded by an operator with RCFE operations, senior placement, and enterprise project management experience.";
const ANSWER = `${site.name} is a full-service digital marketing agency for senior living, based at ${site.addressLine}, ${site.cityLine}, and serving operators across the United States. Its founder's background includes RCFE operations, senior placement, enterprise project management (PMP certified), technical support management, and creative design.`;

const FAQS = [
  {
    q: "Where is BrightLeads.AI located?",
    a: `${site.addressLine}, ${site.cityLine}. We work with operators across the United States.`,
  },
  {
    q: "What experience is behind BrightLeads.AI?",
    a: "The agency was founded by an operator whose background includes RCFE operations, senior placement, enterprise project management (PMP certified), technical support management, and creative design.",
  },
];

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/about",
          title: TITLE,
          description: DESCRIPTION,
          type: "AboutPage",
          answer: ANSWER,
          crumbs: [
            ["Home", ""],
            ["About", "/about"],
          ],
          faqs: FAQS,
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["About", "/about"],
        ]}
        eyebrow="About"
        h1="Senior living marketing, built by someone who has run the home."
        lead={`${site.name} is a San Francisco agency that markets senior living with one connected system and makes communities visible in AI answers.`}
        answer={ANSWER}
      />
      <Section band="band" labelledBy="story">
        <div className="split">
          <div className="prose">
            <h2 id="story">Why we started</h2>
            <p>
              BrightLeads.AI was started by an operator after years inside
              senior living: running residential care operations and helping
              families through placement. From that side of the table, the
              problem was obvious. Good communities were losing families because
              their marketing was disconnected. The website did not match the
              ads. Inquiries sat in inboxes. Listings had the wrong phone
              number. And as families started asking AI assistants for help,
              many communities were not in the answer at all.
            </p>
            <p>
              We built the agency around fixing that: one system, run by one
              team, measured by move-ins, and built for the way families search
              now.
            </p>
            <h2>How we think</h2>
            <p>
              We market for what happens after the form is submitted. That means
              speed to lead, honest pricing guidance, tours that answer real
              questions, and follow-up that respects a hard family decision.
            </p>
          </div>
          <dl className="facts" aria-label="Company facts">
            <dt>Name</dt>
            <dd>{site.name}</dd>
            <dt>Type</dt>
            <dd>Digital marketing agency for senior living</dd>
            <dt>Office</dt>
            <dd>
              {site.addressLine}, {site.cityLine}
            </dd>
            <dt>Phone</dt>
            <dd>{site.phone}</dd>
            <dt>Email</dt>
            <dd>{site.email}</dd>
            <dt>Service area</dt>
            <dd>United States</dd>
            <dt>Terms</dt>
            <dd>Month to month</dd>
            <dt>Founder background</dt>
            <dd>
              RCFE operations, senior placement, enterprise project management
              (PMP), technical support management, creative design
            </dd>
          </dl>
        </div>
      </Section>
      <Section labelledBy="principles">
        <HeadBlock
          eyebrow="Principles"
          heading="What we will and will not do."
          id="principles"
        />
        <Cards
          cols="g4"
          items={[
            {
              icon: "shield",
              t: "No invented claims",
              d: "No fake reviews, made-up statistics, stock-photo residents presented as real, or awards we did not earn. On our site or yours.",
            },
            {
              icon: "key",
              t: "No lock-in",
              d: "Month to month, and your accounts stay yours. We keep clients by producing move-ins.",
            },
            {
              icon: "heart",
              t: "Respect for families",
              d: "Clear information, honest pricing guidance, privacy-aware tracking, and accessible design for older readers.",
            },
            {
              icon: "link",
              t: "One system",
              d: "Every channel shares one plan and one set of numbers.",
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
