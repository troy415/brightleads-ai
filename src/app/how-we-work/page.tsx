import {
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
import { STEPS } from "@/lib/catalog";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta } from "@/lib/site";

const TITLE = "How We Work: Process, Reporting & Month-to-Month Terms | BrightLeads.AI";
const DESCRIPTION =
  "How BrightLeads.AI works with senior living operators: a 90-day onboarding sequence, monthly reporting to move-ins, month-to-month terms, and full client ownership of every account.";
const ANSWER =
  "BrightLeads.AI engagements are month to month with no long-term contract. Each one starts with an audit tied to census goals, fixes tracking, entity data, and profiles in the first 30 days, builds pages and campaigns by day 60, and is running and optimizing by day 90. Clients own all accounts and assets and receive a monthly report that ties spend to inquiries, tours, move-ins, and AI visibility.";

const FAQS = [
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
  {
    q: "How often will we meet?",
    a: "Most clients have a working session every two weeks and a monthly performance review. Portfolio clients often add weekly pacing calls during lease-up or occupancy pushes.",
  },
  {
    q: "Who will we work with?",
    a: "A dedicated strategist who owns your plan, supported by specialists in search, paid media, web, content, and CRM.",
  },
];

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/how-we-work",
          title: TITLE,
          description: DESCRIPTION,
          answer: ANSWER,
          crumbs: [
            ["Home", ""],
            ["How we work", "/how-we-work"],
          ],
          faqs: FAQS,
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["How we work", "/how-we-work"],
        ]}
        eyebrow="How we work"
        h1="Clear process. Plain terms. Reporting you can act on."
        lead="We fix the foundation first, then add demand, then improve every month. You own everything, and you can leave any month."
        answer={ANSWER}
      />
      <Section band="band" labelledBy="process">
        <div className="split">
          <div className="stack">
            <HeadBlock eyebrow="The process" heading="Five steps, in order." id="process" />
          </div>
          <Steps items={STEPS} />
        </div>
      </Section>
      <Section labelledBy="ninety">
        <HeadBlock
          eyebrow="First 90 days"
          heading="What happens in your first three months."
          id="ninety"
        />
        <CompareTable
          caption="Onboarding timeline"
          headers={["Window", "Focus", "What you get"]}
          rows={[
            [
              "Days 1 to 30",
              "Audit and foundation",
              "Full audit, AI visibility baseline, tracking and call tracking, Google Business Profile cleanup, entity fact sheet, CRM routing review",
            ],
            [
              "Days 31 to 60",
              "Build",
              "Priority pages written and published, schema and llms.txt live, campaigns and landing pages built, review requests running",
            ],
            [
              "Days 61 to 90",
              "Run and tune",
              "Campaigns optimized weekly, nurture sequences live, first full monthly report with inquiries, tours, move-ins, and AI answer share",
            ],
          ]}
        />
      </Section>
      <Section band="band-tint" labelledBy="terms">
        <div className="split">
          <div className="stack">
            <HeadBlock eyebrow="Terms" heading="Plain terms, written down." id="terms" />
          </div>
          <Checks
            items={[
              <span key="m">
                <b>Month to month.</b> No long-term contracts. 30 days&apos; notice to
                pause or leave.
              </span>,
              <span key="o">
                <b>You own everything.</b> Site, domains, content, ad accounts,
                analytics, CRM, and creative are in your name.
              </span>,
              <span key="f">
                <b>Flat monthly fee.</b> Quoted up front for the scope you choose.
              </span>,
              <span key="a">
                <b>Ad spend goes direct.</b> Platforms bill you directly in your
                own accounts.
              </span>,
              <span key="n">
                <b>No fake anything.</b> No purchased reviews, invented
                statistics, or misleading claims about your community.
              </span>,
            ]}
          />
        </div>
      </Section>
      <Section labelledBy="reporting">
        <div className="split">
          <div className="stack">
            <HeadBlock
              eyebrow="Reporting"
              heading="One monthly report, tied to move-ins."
              id="reporting"
            />
          </div>
          <Checks
            items={[
              "Inquiries, tours, and move-ins by source and community",
              "Cost per inquiry, tour, and move-in",
              "AI visibility: mention rate, citation rate, and accuracy across assistants",
              "Search and map pack rankings for priority terms",
              "Reviews: count, rating, velocity, and reply rate",
              "What we changed, what we learned, and what is next",
            ]}
          />
        </div>
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
