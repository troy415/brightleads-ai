import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "For agencies",
  description:
    "BrightLeads.AI is the professional system for senior assisted living placement agents and agencies that need one place to run the practice and place more seniors.",
};

const pains = [
  {
    title: "The inquiry hits three inboxes",
    copy: "A daughter calls, emails, and fills out a form. Each one becomes a different thread. BrightLeads.AI gives that senior one file so nobody double-books a tour or drops the follow-up.",
  },
  {
    title: "Community knowledge lives in people’s heads",
    copy: "Who takes insulin management, who has a ground-floor studio this month, who you actually trust: none of that can sit in one agent’s Notes app if the agency is going to place more people.",
  },
  {
    title: "Growth stalls at another spreadsheet",
    copy: "Hiring a second or fifth agent should not mean copying a Google Sheet. The same professional system has to work for a solo practice and a regional shop.",
  },
];

export default function AgenciesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        For agencies
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-foreground sm:text-5xl">
        Streamline the practice. Place more seniors.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        Placement is still a human job: listening, knowing homes, walking
        hallways. BrightLeads.AI is the professional system around that craft:
        one place to run the work so files move, operations stay clean, and
        more seniors get into assisted living.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
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
            Independent placement agents, family-owned agencies, and regional
            operators across the United States. Families and communities are
            the work inside the system. They are not the buyers of this site.
          </p>
          <Link
            href="/demo"
            className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 px-5")}
          >
            Talk with us
            <ArrowRight />
          </Link>
        </div>
        <Accordion className="rounded-2xl border border-border bg-card px-5">
          <AccordionItem value="solo">
            <AccordionTrigger>Independent agents</AccordionTrigger>
            <AccordionContent>
              Keep every active senior and every community you use in a
              workspace you can open on a phone between tours. When you bring
              on help, they inherit the book, not a pile of forwarded emails.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="agency">
            <AccordionTrigger>Agencies with a team</AccordionTrigger>
            <AccordionContent>
              Assign inquiries, see who is touring this week, and stop
              competing with yourselves for the same community slot. Leadership
              gets a picture of the pipeline without asking each agent for a
              Friday update.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="us">
            <AccordionTrigger>Operators across the US</AccordionTrigger>
            <AccordionContent>
              Markets differ. The operating pattern should not. BrightLeads.AI
              is built to be sold nationwide so agents can run placement the
              same way in every metro they cover.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
