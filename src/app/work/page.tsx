import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Work",
  description:
    "BrightLeads.AI work for care homes and senior communities: web design, marketing campaigns, technical systems, and AI visibility that interact to drive resident leads.",
  alternates: { canonical: "/work" },
};

const modules = [
  {
    title: "Web design",
    points: [
      "A community site written for the families you want: care type, rooms, neighborhood, and how to inquire.",
      "Pages that match how people search, including memory care, respite, RCFE, and ARF when those are the real offer.",
      "Forms that send a usable inquiry to your team instead of a dead mailbox.",
      "Layout and speed that work on a phone in a parking lot, not only on a desktop in an office.",
    ],
  },
  {
    title: "Marketing campaigns",
    points: [
      "Search and ads aimed at families looking for a home or community, not at other agencies.",
      "Landing paths that match the campaign so traffic does not bounce off a generic homepage.",
      "Creative and copy that sound like the community, not like a national franchise template.",
      "Tracking that shows which work produced an inquiry, not only which ad got a click.",
    ],
  },
  {
    title: "Technical systems",
    points: [
      "Routing so a new lead reaches the person who answers the phone or email.",
      "Follow-up that does not depend on one staff member remembering to check a form inbox.",
      "The website, campaign, and lead record talking to each other instead of living in three tools.",
      "A setup operators can actually run after launch, without a second IT project.",
    ],
  },
  {
    title: "AI visibility",
    points: [
      "Pages and facts structured so AI systems can cite the community by name, location, care type, and how to inquire.",
      "Answer-ready copy for the questions families actually ask assistants, not only keyword lists for Google.",
      "Technical signals on the community site: schema, semantic headings, crawl access, and an llms.txt overview.",
      "The same discipline we use on brightleads.ai. No invented reviews, years in business, or client counts.",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Work
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-foreground sm:text-5xl">
        Web, campaigns, systems, and AI visibility built to interact.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        Occupancy does not come from a prettier homepage or a one-off ad buy.
        BrightLeads.AI designs the website, runs the campaigns, wires the
        technical layer, and makes the community citable in AI answers so those
        pieces feed each other and drive leads.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {modules.map((mod) => (
          <article
            key={mod.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="font-heading text-2xl text-foreground">{mod.title}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {mod.points.map((point) => (
                <li key={point} className="relative pl-4">
                  <span className="absolute top-2.5 left-0 size-1.5 rounded-full bg-teal" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-16 rounded-3xl bg-navy px-6 py-10 text-primary-foreground sm:px-10">
        <h2 className="font-heading text-3xl">
          Bring the site you have and the occupancy you need.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-primary-foreground/70">
          We will look at how families find you today, where inquiries stall,
          and which pieces of the system are missing, including whether
          assistants can name the community. No invented case studies. Just the
          work in front of your community.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/start"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
          >
            Start a conversation
            <ArrowRight />
          </Link>
          <Link
            href="/ai-visibility"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 px-5 border-white/20 bg-transparent text-white hover:bg-white/10"
            )}
          >
            AI visibility
          </Link>
        </div>
      </div>
    </div>
  );
}
