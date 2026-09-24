import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { faqPageJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "AI visibility for care homes and senior communities",
  description:
    "BrightLeads.AI builds AI visibility for care homes, RCFEs, ARFs, and senior communities: how the community shows up in AI answers, not only in Google. San Francisco marketing agency.",
  alternates: { canonical: "/ai-visibility" },
};

const signals = [
  {
    title: "A clear entity",
    copy: "Name, location, care type, who you serve, and how to inquire, stated the same way on the page, in schema, and in files assistants retrieve. Models cite facts they can verify.",
  },
  {
    title: "Answer-ready pages",
    copy: "Semantic headings and FAQ copy that match the questions families actually ask: who the home is for, what care is offered, where it is, how to start a tour. Not a slogan on a slide.",
  },
  {
    title: "Machine-readable structure",
    copy: "JSON-LD for Organization, ProfessionalService, and FAQPage where it fits. An llms.txt overview. A sitemap and robots file that allow search and AI crawlers instead of blocking them.",
  },
  {
    title: "Connected to the rest of the system",
    copy: "Visibility without a site that can take a lead is wasted. AI visibility sits with web design, campaigns, and technical follow-up so a cited answer can become an inquiry.",
  },
];

export default function AiVisibilityPage() {
  const pageUrl = `${site.url}/ai-visibility`;

  return (
    <div>
      <JsonLd data={faqPageJsonLd(pageUrl)} />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          AI visibility
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-4xl text-foreground sm:text-5xl">
          How the community shows up in AI answers, not only in Google.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          BrightLeads.AI is a San Francisco marketing agency for care homes,
          senior communities, RCFEs, and ARFs. AI visibility is a service, not
          a buzzword: the work of making a community findable and citable when a
          family asks ChatGPT, Gemini, Perplexity, or a similar assistant where
          to look.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          This site is for the operators who run the home. We apply the same
          discipline to brightleads.ai so models can cite who we are, who we
          serve, and how we differ.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/start"
            className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-sm")}
          >
            Start a conversation
            <ArrowRight />
          </Link>
          <Link
            href="/llms.txt"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 px-6 text-sm"
            )}
          >
            Read llms.txt
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {signals.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="font-heading text-2xl text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
            What we will not invent
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl text-foreground sm:text-4xl">
            Citable facts beat fake social proof.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            Some senior living shops lead with review volume and decades in
            business. BrightLeads.AI will not invent reviews, years in
            business, or client counts to look like that list. Operators get
            a connected system and AI visibility they can inspect on this site:
            schema, llms.txt, FAQ, entity, sitemap, and robots.
          </p>
        </div>
      </section>
      <FaqSection heading="Who BrightLeads.AI is, who it is for, and how AI visibility fits." />
    </div>
  );
}
