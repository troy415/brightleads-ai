import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Work",
  description:
    "BrightLeads.AI builds systems for care homes and senior communities: web design, marketing campaigns, and technical systems that interact to drive leads.",
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
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Work
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-foreground sm:text-5xl">
        Web, campaigns, and systems built to interact.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        Occupancy does not come from a prettier homepage or a one-off ad buy.
        BrightLeads.AI designs the website, runs the campaigns, and wires the
        technical layer so they feed each other and drive leads for the
        community.
      </p>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
          and which pieces of the system are missing. No invented case studies.
          Just the work in front of your community.
        </p>
        <Link
          href="/start"
          className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 px-5")}
        >
          Start a conversation
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
