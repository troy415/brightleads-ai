import Link from "next/link";

import { PageHero, Section } from "@/components/chrome";
import { pageMeta, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Thank You | BrightLeads.AI",
  description: "Thanks for contacting BrightLeads.AI.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Thank you", "/thank-you"],
        ]}
        eyebrow="Thank you"
        h1="Thanks. We will be in touch within one business day."
        lead={`If it is urgent, call ${site.phone}.`}
      />
      <Section>
        <div className="btns">
          <a className="btn btn-brand" href={site.phoneHref}>
            Call {site.phone}
          </a>
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            Email {site.email}
          </a>
          <Link className="btn btn-ghost" href="/">
            Back to home
          </Link>
        </div>
      </Section>
    </>
  );
}
