import { CtaBand, PageHero, Section } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta } from "@/lib/site";

const TERMS: [string, string][] = [
  ["Activities of daily living (ADLs)", "Basic self-care tasks such as bathing, dressing, eating, toileting, transferring, and continence. The level of help a person needs with ADLs often determines the right care setting."],
  ["A2P 10DLC", "Application-to-person messaging over standard 10-digit long code phone numbers. US carriers require businesses to register brands and campaigns before sending marketing or notification texts."],
  ["Adult Residential Facility (ARF)", "A California license for non-medical residential care for adults aged 18 to 59 who need care and supervision."],
  ["AI Overviews", "AI-generated summaries that appear at the top of some Google search results and cite web sources."],
  ["AI visibility", "How often and how accurately AI assistants mention and cite a business when people ask relevant questions. Also called generative engine optimization (GEO) or answer engine optimization (AEO)."],
  ["Answer engine optimization (AEO)", "Structuring content so search features and AI assistants can extract a direct answer from it."],
  ["Assisted living", "Residential senior living that provides housing, meals, and help with activities of daily living, without the round-the-clock medical care of a skilled nursing facility."],
  ["Board and care home", "A small residential care home, often a converted house with six or fewer residents, that provides meals, supervision, and help with daily activities."],
  ["Census", "The number of residents currently living in a community. Occupancy is census divided by capacity."],
  ["Citation rate", "In AI visibility measurement, the share of test questions where an AI assistant links to or cites a given website or profile."],
  ["Continuing care retirement community (CCRC)", "See life plan community."],
  ["Cost per move-in", "Total marketing cost for a period divided by the number of move-ins attributed to it. The most meaningful efficiency metric in senior living marketing."],
  ["Entity", "A distinct, identifiable thing, such as a company or a community, that search engines and AI models track with a set of facts."],
  ["Generative engine optimization (GEO)", "The practice of improving how a brand appears in AI-generated answers from assistants such as ChatGPT, Gemini, Perplexity, and Claude."],
  ["Google Business Profile", "Google's free business listing that appears in Maps and local search results, including hours, photos, reviews, and contact details."],
  ["Inquiry", "A first contact from a prospect or family member, such as a call, form, or chat, asking about a community."],
  ["JSON-LD", "A format for adding schema.org structured data to a web page in a script block that machines can read."],
  ["Lead scoring", "Assigning points to leads based on fit and behavior so sales teams contact the most likely movers first."],
  ["Lease-up", "The period after a new community opens, or before it opens, when marketing and sales work to reach stabilized occupancy."],
  ["Life plan community", "A campus offering independent living plus access to assisted living, memory care, and skilled nursing, usually under a residency contract. Also called a CCRC."],
  ["llms.txt", "A proposed standard: a plain-text Markdown file at a website's root that summarizes the site for large language models and links to key pages."],
  ["Local pack", "The map and list of three local businesses that Google shows for many location-based searches. Also called the map pack."],
  ["Memory care", "Specialized residential care for people living with Alzheimer's disease or other forms of dementia, usually in a secured setting with trained staff."],
  ["Mention rate", "In AI visibility measurement, the share of test questions where an AI assistant names a given business."],
  ["Move-in", "A new resident moving into a community. The outcome senior living marketing is ultimately measured by."],
  ["Occupancy", "The percentage of a community's units or beds that are filled."],
  ["Placement agent", "A professional or referral service that helps families find senior living, usually paid a referral fee by the community."],
  ["Prompt panel", "A fixed set of realistic questions run against AI assistants on a schedule to measure AI visibility over time."],
  ["Residential Care Facility for the Elderly (RCFE)", "California's license for non-medical residential care for people 60 and older, from six-bed homes to large assisted living and memory care communities."],
  ["Respite care", "A short-term stay in a senior living community, often used while a family caregiver rests or travels, or after a hospital stay."],
  ["Schema.org", "A shared vocabulary for structured data that search engines and AI systems use to understand web pages."],
  ["Share of answer", "A business's share of mentions or citations in AI answers compared with its competitors for the same set of questions."],
  ["Special ad category (housing)", "A Meta advertising designation required for many housing-related ads, which limits targeting by age, gender, and ZIP code to support fair housing."],
  ["Speed to lead", "The time between an inquiry and the first meaningful response from the community."],
  ["TCPA", "The Telephone Consumer Protection Act, a US law governing marketing calls and text messages, including consent requirements."],
  ["Tour", "An in-person or virtual visit to a community by a prospect or family. A key step between inquiry and move-in."],
  ["WCAG", "Web Content Accessibility Guidelines, the standard for making websites usable by people with disabilities, including many older adults."],
];

function slug(term: string) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const LETTERS = [...new Set(TERMS.map(([t]) => t[0].toUpperCase()))].sort();

const TITLE = "Senior Living Marketing & AI Visibility Glossary | BrightLeads.AI";
const DESCRIPTION =
  "Plain-language definitions of senior living and marketing terms: RCFE, ARF, memory care, census, cost per move-in, GEO, AEO, AI visibility, llms.txt, schema, and more.";
const ANSWER =
  "This glossary defines common senior living terms such as RCFE, ARF, assisted living, memory care, census, and lease-up, marketing terms such as cost per move-in and speed to lead, and AI visibility terms such as GEO, AEO, llms.txt, schema.org, mention rate, and share of answer.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/glossary",
});

export default function GlossaryPage() {
  const seen = new Set<string>();
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/glossary",
          title: TITLE,
          description: DESCRIPTION,
          answer: ANSWER,
          crumbs: [
            ["Home", ""],
            ["Glossary", "/glossary"],
          ],
          extra: [
            {
              "@type": "DefinedTermSet",
              "@id": "https://brightleads.ai/glossary#terms",
              name: "Senior living marketing and AI visibility glossary",
              hasDefinedTerm: TERMS.map(([name, description]) => ({
                "@type": "DefinedTerm",
                name,
                description,
                url: `https://brightleads.ai/glossary#${slug(name)}`,
              })),
            },
          ],
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Glossary", "/glossary"],
        ]}
        eyebrow="Glossary"
        h1="Senior living marketing and AI visibility glossary."
        lead="Plain definitions for the care, marketing, and AI terms operators run into."
        answer={ANSWER}
      />
      <Section>
        <nav className="az" aria-label="Jump to letter">
          {LETTERS.map((letter) => (
            <a key={letter} href={`#letter-${letter.toLowerCase()}`}>
              {letter}
            </a>
          ))}
        </nav>
        <dl className="terms">
          {TERMS.map(([term, def]) => {
            const letter = term[0].toUpperCase();
            const first = !seen.has(letter);
            seen.add(letter);
            return (
              <div key={term} id={first ? `letter-${letter.toLowerCase()}` : undefined}>
                <dt id={slug(term)}>{term}</dt>
                <dd>{def}</dd>
              </div>
            );
          })}
        </dl>
      </Section>
      <CtaBand />
    </>
  );
}
