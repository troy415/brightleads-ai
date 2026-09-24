import { HeadBlock, PageHero, Section, Steps } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { StartForm } from "@/components/start-form";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta, site } from "@/lib/site";

const TITLE = "Start a Conversation & Free AI Visibility Check | BrightLeads.AI";
const DESCRIPTION =
  "Request a free AI visibility check for your senior living community and start a conversation with BrightLeads.AI about occupancy, leads, and marketing.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/start",
});

export default function StartPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/start",
          title: TITLE,
          description: DESCRIPTION,
          type: "ContactPage",
          crumbs: [
            ["Home", ""],
            ["Start a conversation", "/start"],
          ],
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Start a conversation", "/start"],
        ]}
        eyebrow="Start a conversation"
        h1={
          <>
            Get a free <span className="text-gradient">AI visibility check.</span>
          </>
        }
        lead="Tell us about your community. We will run it through real family questions across ChatGPT, Gemini, Perplexity, and Google AI Overviews and show you what they say, who they recommend instead, and what to fix first."
      />
      <Section>
        <div className="split wide-left">
          <StartForm />
          <div className="stack">
            <HeadBlock
              eyebrow="What happens next"
              heading="Three steps, no pressure."
              id="next"
            />
            <Steps
              items={[
                [
                  "We run the check",
                  "Around 20 family questions for your care types and city, across major assistants.",
                ],
                [
                  "We send the findings",
                  "Who gets named, whether you are cited, and what assistants get wrong.",
                ],
                [
                  "We talk it through",
                  "A 30-minute call on what to fix first, whether or not you hire us.",
                ],
              ]}
            />
            <p className="muted">
              Prefer to talk now? Call <a href={site.phoneHref}>{site.phone}</a> or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
