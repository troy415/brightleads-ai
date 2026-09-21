import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "BrightLeads.AI is the operating layer for family inquiries, community relationships, and the partner ecosystem around senior living placement.",
};

const modules = [
  {
    title: "Inquiry workspace",
    points: [
      "One record for the senior, the family decision-makers, and how they reached you.",
      "Care needs, budget band, geography, and timing without a second spreadsheet.",
      "Stages you actually use: new, qualifying, touring, application, placed, or closed.",
      "Notes and next actions so a colleague can pick up the file without a briefing.",
    ],
  },
  {
    title: "Community graph",
    points: [
      "A living roster of assisted living, memory care, and residential care homes.",
      "Openings, waitlists, and care-level fit attached to the community — not buried in a text thread.",
      "Referral terms and who to call when a family is ready this week.",
      "History of which homes you have placed with, and which still owe you a tour slot.",
    ],
  },
  {
    title: "Partner ecosystem",
    points: [
      "Communities join as partners instead of living only in an agency’s private list.",
      "Shared context on how a home wants to receive referrals.",
      "Room for the wider BrightLeads.AI world: operators who want to be easy to work with.",
      "A path for agencies to expand coverage without starting every market from scratch.",
    ],
  },
];

export default function PlatformPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Platform
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-navy sm:text-5xl">
        Three systems placement agencies already run — finally in one place.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        BrightLeads.AI is not a website builder and it is not a generic CRM.
        It is purpose-built for the work between a family’s first call and a
        signed residency agreement.
      </p>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {modules.map((mod) => (
          <article
            key={mod.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="font-heading text-2xl text-navy">{mod.title}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {mod.points.map((point) => (
                <li key={point} className="pl-4 relative">
                  <span className="absolute top-2.5 left-0 size-1.5 rounded-full bg-teal" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-16 rounded-3xl bg-navy px-6 py-10 text-primary-foreground sm:px-10">
        <h2 className="font-heading text-3xl">See it against your own book of business.</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-primary-foreground/70">
          Bring a real inquiry and a handful of communities. We will map them
          into the workspace so you can tell whether this replaces the stack
          you are stitching together today.
        </p>
        <Link
          href="/demo"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 h-11 bg-primary-foreground px-5 text-navy hover:bg-paper"
          )}
        >
          Request a demo
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
