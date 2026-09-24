import Link from "next/link";

import { PageHero, Section } from "@/components/chrome";

export default function NotFound() {
  return (
    <>
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Not found", ""],
        ]}
        h1="We could not find that page."
        lead="Try the services overview, the FAQ, or start a conversation."
      />
      <Section>
        <div className="btns">
          <Link className="btn btn-brand" href="/services">
            See services
          </Link>
          <Link className="btn btn-ghost" href="/faq">
            Read the FAQ
          </Link>
        </div>
      </Section>
    </>
  );
}
