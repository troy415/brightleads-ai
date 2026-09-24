import Link from "next/link";

import { PageHero, Section } from "@/components/chrome";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Not found", ""],
        ]}
        eyebrow="404"
        h1="We could not find that page."
        lead="Try the services overview, or start a conversation for a free AI visibility check."
      />
      <Section>
        <div className="btns">
          <Link className="btn btn-brand" href="/start">
            Get a free AI visibility check <Arrow />
          </Link>
          <Link className="btn btn-ghost" href="/services">
            See all services
          </Link>
        </div>
      </Section>
    </>
  );
}
