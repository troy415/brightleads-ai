import Link from "next/link";

import { AssistantPreview } from "@/components/assistant-preview";
import {
  Cards,
  Checks,
  CompareTable,
  CtaBand,
  FaqList,
  HeadBlock,
  Section,
  Steps,
} from "@/components/chrome";
import { Arrow } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { AUDIENCES, HOME_FAQS, STEPS } from "@/lib/catalog";
import { pageGraph } from "@/lib/json-ld";
import { site } from "@/lib/site";

const WHY = [
  {
    icon: "spark" as const,
    t: "Built for AI answers from day one",
    d: "Families ask assistants before they call. We engineer your entity, content, and schema so models can find, trust, and cite you. It is part of every plan, not an upsell.",
  },
  {
    icon: "link" as const,
    t: "One connected system",
    d: "Website, search, ads, reviews, CRM, and sales follow-up share one plan, one tracking setup, and one report. Nothing is handed off between vendors who never talk.",
  },
  {
    icon: "chart" as const,
    t: "Measured by move-ins",
    d: "We report cost per inquiry, tour, and move-in by source. Traffic and impressions are supporting numbers, not the goal.",
  },
  {
    icon: "key" as const,
    t: "Month to month. You own everything.",
    d: "No long-term contracts. Your website, domains, ad accounts, analytics, CRM, and content are in your name from the first day.",
  },
  {
    icon: "home" as const,
    t: "Built by an operator",
    d: "Our founder has run RCFE operations and worked in senior placement. We know what happens after the form is submitted, and we market for that.",
  },
  {
    icon: "shield" as const,
    t: "Compliance-aware by default",
    d: "Housing ad category rules, HIPAA-aware tracking, TCPA and A2P 10DLC for texting, and WCAG accessibility for older readers are handled from the start.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/",
          title: `${site.tagline} | BrightLeads.AI`,
          description: site.description,
          answer: HOME_FAQS[0].a,
          crumbs: [["Home", ""]],
          faqs: HOME_FAQS,
        })}
      />
      <section className="hero">
        <div className="glow" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Senior living marketing agency</p>
            <h1>
              Fill rooms with a system that{" "}
              <span className="text-gradient">works together.</span>
            </h1>
            <p className="hero-line">{site.heroLine}</p>
            <p className="lead">
              BrightLeads.AI is a full-service senior living marketing agency. We
              run your website, SEO, local search, paid media, reputation, CRM
              follow-up, and sales enablement as one system, and we make sure
              your community shows up when families ask ChatGPT, Gemini,
              Perplexity, or Google AI Overviews where to look.
            </p>
            <div className="btns">
              <Link className="btn btn-brand" href="/start">
                Get a free AI visibility check <Arrow />
              </Link>
              <Link className="btn btn-ghost" href="/services">
                See all services
              </Link>
            </div>
            <p className="hero-note">
              Assisted living, memory care, independent living, life plan
              communities, RCFEs, board and care, ARFs, and home care. Based in
              San Francisco, working with operators nationwide. Month to month,
              no long-term contracts.
            </p>
          </div>
          <AssistantPreview />
        </div>
      </section>

      <Section band="band" labelledBy="who">
        <div className="split wide-left">
          <div className="stack">
            <HeadBlock
              eyebrow="Who we are"
              heading="A senior living marketing agency built for how families search now."
              id="who"
            />
            <div className="prose">
              <p>
                Families still search Google. More and more of them also ask an
                AI assistant to shortlist communities, explain the difference
                between assisted living and memory care, or check what a
                community costs. The communities those assistants name are the
                ones with clear facts, strong reviews, and pages written as
                answers.
              </p>
              <p>
                We build that foundation and then run every channel on top of
                it: search, local, paid, reviews, content, CRM, and sales
                follow-up. One team, one plan, one report, measured by move-ins.
              </p>
            </div>
          </div>
          <dl className="facts" aria-label="BrightLeads.AI at a glance">
            <dt>Company</dt>
            <dd>BrightLeads.AI</dd>
            <dt>What we do</dt>
            <dd>Full-service digital marketing for senior living</dd>
            <dt>Based in</dt>
            <dd>San Francisco, California</dd>
            <dt>Serves</dt>
            <dd>Operators across the United States</dd>
            <dt>Care types</dt>
            <dd>
              Assisted living, memory care, independent living, life plan
              communities, RCFEs, board and care, ARFs, home care
            </dd>
            <dt>Terms</dt>
            <dd>Month to month. No long-term contracts.</dd>
            <dt>Specialty</dt>
            <dd>AI visibility plus a connected lead system</dd>
          </dl>
        </div>
      </Section>

      <Section labelledBy="services">
        <HeadBlock
          eyebrow="Services"
          heading="Everything a senior living marketing department does, in one connected system."
          lead="Pick one service or run all of them together. Each one is built to feed the others."
          id="services"
        />
        <Cards
          cols="g3"
          items={[
            {
              href: "/ai-visibility",
              icon: "spark" as const,
              t: "AI visibility",
              d: "Entity facts, schema, answer-ready pages, and crawl access so AI assistants name and cite your community.",
            },
            {
              href: "/services/senior-living-seo",
              icon: "search" as const,
              t: "Senior living SEO",
              d: "Care-type and city pages, technical SEO, and content that ranks for the searches families actually run.",
            },
            {
              href: "/services/local-seo",
              icon: "pin" as const,
              t: "Local SEO & Google Business Profile",
              d: "Map pack visibility, accurate listings, and directory cleanup for every location.",
            },
            {
              href: "/services/paid-media",
              icon: "target" as const,
              t: "Paid media & PPC",
              d: "Google Ads, Meta, YouTube, and retargeting that land on pages built to convert, with housing ad rules handled.",
            },
            {
              href: "/services/websites",
              icon: "layout" as const,
              t: "Websites & conversion",
              d: "Fast, accessible community websites written for adult children and built to take an inquiry.",
            },
            {
              href: "/services/reputation-management",
              icon: "star" as const,
              t: "Reputation & PR",
              d: "Review generation, response, monitoring, and earned media that builds trust with families and models.",
            },
            {
              href: "/services/branding",
              icon: "brush" as const,
              t: "Branding & creative",
              d: "Positioning, naming, identity, photography direction, and storytelling that sets you apart locally.",
            },
            {
              href: "/services/content-social",
              icon: "pen" as const,
              t: "Content & social",
              d: "Answer-first articles, guides, resident stories, and social that feed search, AI answers, and nurture.",
            },
            {
              href: "/services/crm-automation",
              icon: "flow" as const,
              t: "CRM & lead nurturing",
              d: "Routing, lead scoring, and email and SMS nurture in HubSpot, Salesforce, GoHighLevel, or your senior-living CRM.",
            },
            {
              href: "/services/sales-enablement",
              icon: "phone" as const,
              t: "Sales enablement",
              d: "Speed to lead, inquiry scripts, tour playbooks, and coaching that turn inquiries into move-ins.",
            },
            {
              href: "/services/market-research",
              icon: "chart" as const,
              t: "Market research & data",
              d: "Market studies, competitor audits, pricing surveys, and audience research.",
            },
            {
              href: "/services/lease-up",
              icon: "key" as const,
              t: "Lease-up & repositioning",
              d: "Pre-opening demand generation and occupancy recovery programs with weekly pacing.",
            },
          ]}
        />
      </Section>

      <section className="band-navy" aria-labelledby="ai">
        <div className="wrap section">
          <div className="split">
            <div className="stack">
              <HeadBlock
                eyebrow="AI visibility"
                heading="Families now ask AI where to look. Is your community in the answer?"
                lead="Classic SEO still matters, but it is no longer enough. Assistants summarize, recommend, and cite. We make your community easy to understand, easy to verify, and easy to cite."
                id="ai"
              />
              <div className="btns">
                <Link className="btn btn-brand" href="/ai-visibility">
                  How AI visibility works <Arrow />
                </Link>
                <Link className="btn btn-ghost" href="/start">
                  Check my community
                </Link>
              </div>
            </div>
            <Checks
              items={[
                <span key="1">
                  <b>Entity clarity.</b> One consistent set of facts about your
                  community: name, address, license, care types, capacity, and
                  contact details.
                </span>,
                <span key="2">
                  <b>Structured data.</b> Schema.org markup for your
                  organization, each location, services, FAQs, and reviews so
                  machines can parse what you offer.
                </span>,
                <span key="3">
                  <b>Answer-ready pages.</b> Pages that answer the questions
                  families ask assistants, including cost, care levels,
                  availability, and how to tour.
                </span>,
                <span key="4">
                  <b>Crawl access.</b> Robots rules that welcome AI crawlers, an
                  llms.txt file, fast static pages, and clean sitemaps.
                </span>,
                <span key="5">
                  <b>Corroboration.</b> Accurate listings, reviews, and
                  third-party mentions that let models confirm what your site
                  says.
                </span>,
                <span key="6">
                  <b>Measurement.</b> A monthly prompt panel that tracks how
                  often assistants mention and cite you versus nearby
                  communities.
                </span>,
              ]}
            />
          </div>
        </div>
      </section>

      <Section labelledBy="why">
        <HeadBlock
          eyebrow="Why operators choose us"
          heading="What makes BrightLeads.AI different."
          id="why"
        />
        <Cards items={WHY} />
      </Section>

      <Section band="band-tint" labelledBy="compare">
        <HeadBlock
          eyebrow="How we compare"
          heading="How we compare with the usual agency models."
          lead={
            <>
              A fair summary of common patterns in senior living marketing.
              Individual agencies vary.{" "}
              <Link href="/choosing-an-agency">Read the full buyer&apos;s guide</Link>.
            </>
          }
          id="compare"
        />
        <CompareTable
          caption="Senior living agency models compared"
          headers={[
            "What you get",
            "Typical SEO and PPC retainer",
            "Traditional occupancy consultancy",
            "BrightLeads.AI",
          ]}
          usCol={3}
          rows={[
            [
              "AI visibility (ChatGPT, Gemini, AI Overviews)",
              "Often an add-on to an SEO retainer",
              "Rarely in scope",
              "Included in every plan, measured monthly",
            ],
            [
              "Contract terms",
              "Commonly 6 to 12 month minimums",
              "Project or annual retainers",
              "Month to month, 30 days' notice",
            ],
            [
              "Who owns the website, ad accounts, and data",
              "Varies. Sometimes the agency.",
              "Varies",
              "You do, from day one",
            ],
            [
              "What gets reported",
              "Rankings, traffic, clicks",
              "Research findings and plans",
              "Inquiries, tours, and move-ins by source",
            ],
            [
              "Small homes (6 to 49 beds)",
              "Often below the minimum",
              "Rarely",
              "Supported with right-sized plans",
            ],
            [
              "Sales follow-up and CRM",
              "Usually out of scope",
              "Consulting only",
              "Built and run as part of the system",
            ],
          ]}
        />
      </Section>

      <Section labelledBy="serve">
        <HeadBlock
          eyebrow="Who we serve"
          heading="Built for every kind of senior living operator."
          id="serve"
        />
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

      <Section band="band" labelledBy="process">
        <div className="split">
          <div className="stack">
            <HeadBlock
              eyebrow="How we work"
              heading="From census goals to a system that produces move-ins."
              lead="A clear sequence, so the fundamentals are in place before we spend a dollar on ads."
              id="process"
            />
            <Link className="btn btn-ghost" href="/how-we-work" style={{ justifySelf: "start" }}>
              See our process and terms
            </Link>
          </div>
          <Steps items={STEPS} />
        </div>
      </Section>

      <FaqList faqs={HOME_FAQS} />
      <CtaBand />
    </>
  );
}
