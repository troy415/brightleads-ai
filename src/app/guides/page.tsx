import { Cards, CtaBand, PageHero, Section } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { GUIDE_DOCS, GUIDES_HUB } from "@/lib/content/guides";
import { pageGraph } from "@/lib/json-ld";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: GUIDES_HUB.title,
  description: GUIDES_HUB.description,
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/guides",
          title: GUIDES_HUB.title,
          description: GUIDES_HUB.description,
          type: "CollectionPage",
          answer: GUIDES_HUB.answer,
          crumbs: [
            ["Home", ""],
            ["Guides", "/guides"],
          ],
        })}
      />
      <PageHero
        crumbs={[
          ["Home", ""],
          ["Guides", "/guides"],
        ]}
        eyebrow="Guides"
        h1={GUIDES_HUB.h1}
        lead={GUIDES_HUB.lead}
        answer={GUIDES_HUB.answer}
      />
      <Section>
        <Cards
          cols="g2"
          items={[
            ...GUIDE_DOCS.map((g) => ({
              href: g.path,
              icon: "doc" as const,
              t: g.h1,
              d: g.description,
              more: "Read the guide",
            })),
            {
              href: "/choosing-an-agency",
              icon: "doc" as const,
              t: "How to choose a senior living marketing agency.",
              d: "The eight common agency models, what each is best at, and 15 questions to ask.",
              more: "Read the guide",
            },
            {
              href: "/glossary",
              icon: "doc" as const,
              t: "Senior living marketing glossary.",
              d: "Plain definitions of care, marketing, and AI visibility terms.",
              more: "Browse terms",
            },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
