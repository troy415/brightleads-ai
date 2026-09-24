import {
  Checks,
  CompareTable,
  CtaBand,
  FaqList,
  HeadBlock,
  PageHero,
  Section,
} from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta } from "@/lib/site";

const TITLE =
  "How to Choose a Senior Living Marketing Agency (2026 Buyer's Guide) | BrightLeads.AI";
const DESCRIPTION =
  "A buyer's guide to senior living marketing agencies: the eight common agency models, what each is best at, what to watch for, and 15 questions to ask before you sign.";
const ANSWER =
  "To choose a senior living marketing agency, first decide what you need most: search and paid media, CRM and nurture, brand and creative, research, or a connected system. Then compare agencies on five things: whether AI visibility is included and measured, contract length, who owns your accounts and data, whether reporting goes to tours and move-ins, and whether the team understands senior living rules such as housing ad categories, privacy, and accessibility.";

const MODELS = [
  [
    "Full-service SEO and PPC agency with a senior living practice",
    "Search, paid media, and web at scale, with defined processes",
    "Senior living may be one vertical among many. Check who actually works on your account and whether AI visibility is included or extra.",
  ],
  [
    "Traditional senior living occupancy consultancy",
    "Deep industry experience, research, sales consulting, and integrated campaigns",
    "Can be slower and more expensive. Check how digital execution, including AI search, is handled.",
  ],
  [
    "Inbound and CRM-platform partner agency",
    "Marketing automation, CRM setup, and content-driven lead nurturing",
    "Tied to one platform. Check fit with the CRM your sales team already uses.",
  ],
  [
    "Creative-led brand studio",
    "Brand identity, design, and storytelling",
    "Check how performance is measured and who runs search and paid media.",
  ],
  [
    "Research and brand strategy firm",
    "Market studies, audience insight, and positioning",
    "Strong on strategy. Check who executes day-to-day channels.",
  ],
  [
    "Franchise and multi-location local marketing firm",
    "Local SEO, PPC, and lead generation across many territories",
    "Built for home care and franchises. Check fit for residential communities.",
  ],
  [
    "Performance marketing generalist",
    "Analytics, conversion optimization, and paid media efficiency",
    "May lack senior living context such as housing ad rules, privacy, and long decision cycles.",
  ],
  [
    "Data and direct mail firm",
    "Targeted lists, print, and multi-channel outreach",
    "Strong for mail and events. Check digital and AI search capabilities.",
  ],
];

const QUESTIONS = [
  "How will my community show up in ChatGPT, Gemini, Perplexity, and Google AI Overviews, and how will you measure it?",
  "What is the minimum contract length, and what happens if we leave?",
  "Who owns the website, domains, ad accounts, analytics, and CRM data?",
  "Will you report on tours and move-ins, or on traffic and clicks?",
  "Who will actually work on our account day to day?",
  "How do you handle Meta's special ad category for housing and other ad rules?",
  "How do you keep tracking HIPAA-aware and avoid sending health details to ad platforms?",
  "Is texting set up with consent and A2P 10DLC registration?",
  "Is our website built to WCAG accessibility standards for older readers?",
  "How do you get reviews, and do you ever write or buy them?",
  "How fast will inquiries reach our team, and how will you know?",
  "Which CRM do you work in, and can you use ours?",
  "What will the first 90 days look like, specifically?",
  "Can you show your own website's structured data and llms.txt?",
  "Where are you not a good fit?",
];

const FAQS = [
  {
    q: "What does a senior living marketing agency do?",
    a: "It helps senior living operators attract, convert, and retain residents through services such as websites, SEO, local search, paid media, reputation management, branding, content, CRM automation, sales enablement, and increasingly AI visibility.",
  },
  {
    q: "What should a senior living marketing agency report on?",
    a: "Inquiries, tours, and move-ins by source and community, cost per move-in, and, as AI assistants grow, how often the community is mentioned and cited in AI answers. Traffic and rankings are supporting metrics.",
  },
  {
    q: "Should I sign a 12-month contract with a marketing agency?",
    a: "You do not have to. Some agencies require six to twelve month terms. BrightLeads.AI works month to month.",
  },
];

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/choosing-an-agency",
});

export default function ChoosingPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/choosing-an-agency",
          title: TITLE,
          description: DESCRIPTION,
          answer: ANSWER,
          crumbs: [
            ["Home", ""],
            ["Choosing an agency", "/choosing-an-agency"],
          ],
          faqs: FAQS,
          article: {
            published: "2026-09-23",
            headline: "How to choose a senior living marketing agency.",
          },
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Choosing an agency", "/choosing-an-agency"],
        ]}
        eyebrow="Buyer's guide"
        h1="How to choose a senior living marketing agency."
        lead="There are several kinds of senior living marketing agencies, and each is good at different things. This guide explains the common models, what to watch for, and the questions to ask before you sign."
        answer={ANSWER}
      />
      <Section band="band" labelledBy="models">
        <HeadBlock
          eyebrow="Agency models"
          heading="The eight common types of senior living marketing agency."
          lead="Individual firms vary. This is a fair summary of each model's usual strengths and trade-offs."
          id="models"
        />
        <CompareTable
          caption="Senior living marketing agency models"
          headers={["Model", "Usually best at", "What to check"]}
          rows={MODELS}
        />
      </Section>
      <Section labelledBy="questions">
        <div className="split">
          <div className="stack">
            <HeadBlock
              eyebrow="Checklist"
              heading="15 questions to ask any agency."
              lead="Ask every agency you consider, including us."
              id="questions"
            />
          </div>
          <ol className="prose" style={{ paddingLeft: "1.25rem" }}>
            {QUESTIONS.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </div>
      </Section>
      <Section band="band-tint" labelledBy="fit">
        <HeadBlock
          eyebrow="Where we fit"
          heading="Where BrightLeads.AI fits, and where it does not."
          id="fit"
        />
        <div className="cards g2">
          <div className="bl-card">
            <h3>A strong fit if you want</h3>
            <Checks
              items={[
                "One team running the whole digital system, measured by move-ins",
                "AI visibility built in, not bolted on",
                "Month-to-month terms and full ownership of your accounts",
                "A partner who understands small care homes as well as larger communities",
              ]}
            />
          </div>
          <div className="bl-card">
            <h3>Probably not the best fit if you need</h3>
            <Checks
              items={[
                "Broadcast or connected TV, video production, or direct mail and mailing lists",
                "Only a one-time logo or brochure with no ongoing marketing",
                "A consumer placement service that refers families for a fee",
              ]}
            />
          </div>
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
