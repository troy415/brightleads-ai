import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FaqSection } from "@/components/faq-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Communities",
  description:
    "BrightLeads.AI works with care homes, senior communities, RCFEs, and ARFs. This site is for the operators who run the home, not a family directory.",
  alternates: { canonical: "/communities" },
};

const pains = [
  {
    title: "The website cannot take a real inquiry",
    copy: "Families find a pretty page and no clear way to reach you, or a form that emails an address nobody checks. We design the site around the conversation you need to have.",
  },
  {
    title: "Campaigns spend money on the wrong destination",
    copy: "Ads and search work fail when they dump people on a generic homepage. Campaigns have to land on the page that matches the care type and can capture a lead.",
  },
  {
    title: "Leads never become tours",
    copy: "An inquiry that sits overnight is often gone. The technical system has to route the lead and keep follow-up visible so staff can act.",
  },
  {
    title: "AI answers skip the community",
    copy: "Families ask assistants which home to call. If the community is not a clear entity with citable facts, those answers name someone else. AI visibility is part of the system.",
  },
];

export default function CommunitiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Communities
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-foreground sm:text-5xl">
        Built for the people who run the home.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        Care homes, senior communities, RCFEs, ARFs, and similar operators hire
        BrightLeads.AI to find residents. Families are the people those homes
        want to reach. This site is for the operators who run the home. It is
        not a consumer directory.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {pains.map((pain) => (
          <article
            key={pain.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="font-heading text-2xl text-foreground">{pain.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {pain.copy}
            </p>
          </article>
        ))}
      </div>
      <section className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-heading text-3xl text-foreground">
            Who this is for
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Owners, administrators, and marketing leads at communities and
            homes who need occupancy. If you are a family looking for a
            placement, call a community in your market. If you are a placement
            agency looking for software, this site is not that product.
          </p>
          <Link
            href="/start"
            className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 px-5")}
          >
            Talk with us
            <ArrowRight />
          </Link>
        </div>
        <Accordion
          className="rounded-2xl border border-border bg-card px-5"
          defaultValue={["homes"]}
        >
          <AccordionItem value="homes">
            <AccordionTrigger>Care homes and board and care</AccordionTrigger>
            <AccordionContent>
              Smaller homes still need to show up when a family searches or
              asks an assistant. A clear site, a campaign that points at the
              right page, and a form that reaches staff can fill rooms without
              a large in-house team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rcfe">
            <AccordionTrigger>RCFEs and senior communities</AccordionTrigger>
            <AccordionContent>
              Residential Care Facilities for the Elderly and larger communities
              need the website, ads, follow-up, and AI visibility to agree. We
              connect those pieces so inquiries are not lost between marketing
              and the front desk.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="arf">
            <AccordionTrigger>ARFs and similar operators</AccordionTrigger>
            <AccordionContent>
              Adult Residential Facilities and related operators have a
              different searcher and a different care story. The system still
              has the same job: a site that explains the offer, campaigns that
              find the right families, technical follow-up that holds the lead,
              and pages assistants can cite.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <FaqSection
        heading="Who BrightLeads.AI is, and who this page is for."
      />
    </div>
  );
}
