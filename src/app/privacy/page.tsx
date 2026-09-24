import { PageHero, Section } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta, site } from "@/lib/site";

const TITLE = "Privacy Policy | BrightLeads.AI";
const DESCRIPTION =
  "How BrightLeads.AI collects and uses information submitted through this website.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/privacy",
          title: TITLE,
          description: DESCRIPTION,
          crumbs: [
            ["Home", ""],
            ["Privacy", "/privacy"],
          ],
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Privacy", "/privacy"],
        ]}
        eyebrow="Legal"
        h1="Privacy policy."
        lead="How we handle information you share with us through this website."
      />
      <Section>
        <div className="prose">
          <p>
            Last updated September 23, 2026. This policy covers information
            collected through brightleads.ai.
          </p>
          <h2>What we collect</h2>
          <p>
            When you submit a form, we collect the details you enter, such as
            your name, organization, email, phone number, and message. We also
            collect basic website analytics, such as pages visited and device
            type.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your information to respond to your inquiry, provide our
            services, and improve this website. We do not sell your personal
            information.
          </p>
          <h2>Sharing</h2>
          <p>
            We share information only with service providers that help us
            operate this website and our business, such as hosting, email, and
            CRM providers, under appropriate agreements.
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask us to access, correct, or delete your information by
            emailing {site.email}. California residents have additional rights
            under the CCPA and CPRA.
          </p>
          <h2>Contact</h2>
          <p>
            {site.name}, {site.addressLine}, {site.cityLine}. {site.email}.
          </p>
        </div>
      </Section>
    </>
  );
}
