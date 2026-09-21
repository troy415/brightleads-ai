import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "BrightLeads.AI is the professional system where placement agents and agencies run the full assisted living placement practice — inquiries, communities, and the path to move-in.",
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
    title: "Your community roster",
    points: [
      "The assisted living, memory care, and residential care homes you place with.",
      "Openings, waitlists, and care-level fit attached to the community — not buried in a text thread.",
      "Who to call when a family is ready this week, and on what terms.",
      "History of which homes you have placed with, and which still owe you a tour slot.",
    ],
  },
  {
    title: "Path to move-in",
    points: [
      "Tours, updates, and community feedback on the same inquiry you already opened.",
      "A clear next step so files do not stall between the second tour and the application.",
      "A complete close when the senior moves in — ready for the next placement.",
      "The point of the system: more seniors into assisted living, with less operational drag.",
    ],
  },
];

export default function PlatformPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Platform
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-foreground sm:text-5xl">
        The professional system for the whole placement practice.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        BrightLeads.AI is not a family website and not a generic CRM. It is the
        place agents and agencies do the work: take the inquiry, match the
        community, coordinate the tour, and get the senior moved in.
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
          See it against your own book of business.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-primary-foreground/70">
          Bring a real inquiry and the communities you actually use. We will map
          them into the workspace so you can tell whether this replaces the
          stack you are stitching together today.
        </p>
        <Link
          href="/demo"
          className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 px-5")}
        >
          Request a demo
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
