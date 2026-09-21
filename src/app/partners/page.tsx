import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Inside BrightLeads.AI, placement agents keep the communities they place with — openings, care fit, and who to call — in the same system as the inquiry.",
};

const benefits = [
  {
    title: "Your roster, next to the inquiry",
    copy: "The homes you actually place with sit in the same workspace as the senior you are working. No hunting a sidebar spreadsheet while a daughter is on the line.",
  },
  {
    title: "Openings and care stay truthful",
    copy: "You stop guessing whether a community has a studio, takes two-person transfers, or is still quoting last quarter’s availability.",
  },
  {
    title: "Referrals go out with context",
    copy: "When you send a family to a home, the care picture, decision-makers, and why they are looking travel with the file — so the tour is worth everyone’s time.",
  },
];

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Partners
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-navy sm:text-5xl">
        Communities you place with, inside the same system.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        Partner homes are part of the agent’s book of business, not a second
        product and not a consumer directory. BrightLeads.AI keeps the
        communities you work with current so you can match faster and get more
        seniors moved in.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {benefits.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="font-heading text-2xl text-navy">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {item.copy}
            </p>
          </article>
        ))}
      </div>
      <section className="mt-16 rounded-3xl bg-teal-soft/70 px-6 py-10 sm:px-10">
        <h2 className="font-heading text-3xl text-navy">
          Built for the agent’s side of the relationship
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
          Independent agents and agencies use this to manage preferred homes,
          keep inventory honest, and send cleaner referrals. Communities are
          records you work — this page is not a signup for families or for
          community marketing teams.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/demo"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
          >
            See it in a demo
            <ArrowRight />
          </Link>
          <Link
            href="/platform"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 px-5"
            )}
          >
            Back to the platform
          </Link>
        </div>
      </section>
    </div>
  );
}
