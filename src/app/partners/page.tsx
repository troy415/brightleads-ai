import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Assisted living and memory care communities can join the BrightLeads.AI ecosystem and work with placement agencies as true partners.",
};

const benefits = [
  {
    title: "Show up where agencies already work",
    copy: "Instead of another PDF and a once-a-year lunch, your home lives in the same system agents use when a family is ready this week.",
  },
  {
    title: "Keep openings and care truthful",
    copy: "Agencies stop guessing whether you have a studio, whether you take two-person transfers, or whether marketing is still quoting last quarter’s availability.",
  },
  {
    title: "Get referrals with context",
    copy: "A partner inquiry should arrive with the care picture, the decision-makers, and why this family is looking — not a one-line email that burns a tour slot.",
  },
];

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Partners
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-navy sm:text-5xl">
        Join the BrightLeads.AI world as a community, not a listing.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        Placement agencies already sit between families and communities. The
        ecosystem makes that relationship operational: preferred partners,
        current inventory, and a cleaner path from referral to move-in.
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
          Who should apply
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
          Licensed assisted living, memory care, and residential care
          communities that already work with placement professionals — or want
          to — and are willing to keep their profile honest. This is not a
          consumer directory. It is a partner layer for the agencies using
          BrightLeads.AI.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/demo"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
          >
            Talk about partnership
            <ArrowRight />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 px-5"
            )}
          >
            Contact the team
          </Link>
        </div>
      </section>
    </div>
  );
}
