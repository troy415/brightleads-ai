import Link from "next/link";

import { PageHero, Section } from "@/components/chrome";
import { Arrow, Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta, site } from "@/lib/site";

const TITLE = "Contact BrightLeads.AI | San Francisco Senior Living Marketing Agency";
const DESCRIPTION = `Contact BrightLeads.AI: ${site.phone}, ${site.email}, ${site.addressLine}, ${site.cityLine}. Serving senior living operators across the United States.`;
const ANSWER = `You can reach ${site.name} by phone at ${site.phone}, by email at ${site.email}, or at ${site.addressLine}, ${site.cityLine}. The agency serves senior living operators across the United States.`;

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/contact",
          title: TITLE,
          description: DESCRIPTION,
          type: "ContactPage",
          answer: ANSWER,
          crumbs: [
            ["Home", ""],
            ["Contact", "/contact"],
          ],
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Contact", "/contact"],
        ]}
        eyebrow="Contact"
        h1="Contact BrightLeads.AI."
        lead="Call, email, or send us a note about your community."
        answer={ANSWER}
      />
      <Section>
        <div className="cards g3">
          <div className="bl-card">
            <Icon name="phone" />
            <h3>Phone</h3>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </div>
          <div className="bl-card">
            <Icon name="mail" />
            <h3>Email</h3>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div className="bl-card">
            <Icon name="pin" />
            <h3>Office</h3>
            <p>
              {site.addressLine}
              <br />
              {site.cityLine}
            </p>
          </div>
        </div>
        <div className="btns" style={{ marginTop: "2rem" }}>
          <Link className="btn btn-brand" href="/start">
            Request a free AI visibility check <Arrow />
          </Link>
        </div>
      </Section>
    </>
  );
}
