import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Route,
  ShieldCheck,
} from "lucide-react";

import { ProductPreview } from "@/components/product-preview";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 glow-sky" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              For placement agents and agencies
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-4xl leading-[1.12] font-extrabold text-foreground sm:text-5xl lg:text-[3.4rem]">
              Do all of your placement work{" "}
              <span className="text-gradient">in one place.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              BrightLeads.AI is the professional system for senior assisted
              living placement. Agents and agencies run every inquiry, tour,
              community relationship, and follow-up from one workspace — so
              operations stay tight and more seniors move in.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-6 text-sm"
                )}
              >
                Request a demo
                <ArrowRight />
              </Link>
              <Link
                href="/platform"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-6 text-sm"
                )}
              >
                See the platform
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Built in San Francisco. Sold to placement agents and agencies
              throughout the United States.
            </p>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          {[
            {
              label: "One system",
              copy: "The whole placement practice lives in one workspace — not across inboxes, notes, and a spreadsheet you dread opening.",
            },
            {
              label: "Tighter operations",
              copy: "Every senior has a next step. Every community you use is current. Nothing waits on a voicemail you forgot to return.",
            },
            {
              label: "More move-ins",
              copy: "Match faster, tour with intent, and close more assisted living placements with the same hours in the day.",
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Inside the system
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl text-foreground sm:text-4xl">
          Placement work, all in one professional workspace.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ClipboardList,
              title: "Inquiries you take",
              copy: "Seniors and families are files you work — not a second product. Capture the call, qualify care needs, budget, geography, and urgency, then keep follow-up on a clock.",
            },
            {
              icon: Building2,
              title: "Communities you place with",
              copy: "Your roster of assisted living, memory care, and residential care homes sits next to the inquiry. Openings, care fit, and who to call are part of the placement, not a separate CRM.",
            },
            {
              icon: Route,
              title: "The path to move-in",
              copy: "Tours, notes, family updates, applications, and close-out live on the same record. The job is to get more seniors into the right community, without dropping the file.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[0_1px_0_rgba(12,27,51,0.04)]"
            >
              <item.icon className="size-5 text-teal" />
              <h3 className="mt-4 font-heading text-2xl text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              How agents run it
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
              First call to a placed resident — without leaving the system.
            </h2>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/70">
              BrightLeads.AI is not a marketing funnel and not a family-facing
              directory. It is the professional work of placement, start to
              finish.
            </p>
          </div>
          <ol className="space-y-6">
            {[
              {
                n: "01",
                title: "Intake the inquiry",
                copy: "Log the senior, the family decision-makers, care needs, and how they reached you. Nothing sits in voicemail.",
              },
              {
                n: "02",
                title: "Match from your book",
                copy: "Work the communities you already know. See openings and care fit before you burn a tour.",
              },
              {
                n: "03",
                title: "Coordinate the placement",
                copy: "Tours, notes, updates, and community feedback stay on the same file so the next step is obvious.",
              },
              {
                n: "04",
                title: "Close and keep moving",
                copy: "When a senior moves in, the file is complete — and the next inquiry is already in motion.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 border-t border-white/10 pt-6">
                <span className="font-mono text-sm text-gold">{step.n}</span>
                <div>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-primary-foreground/70">
                    {step.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl bg-teal-soft/70 p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              Independent agents
            </p>
            <h2 className="mt-3 font-heading text-3xl text-foreground">
              For agents who still run placement in email.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              One workspace for every active senior, every community you use,
              and every tour on the calendar. When you bring on help, they
              inherit the book — not a pile of forwarded threads.
            </p>
            <Link
              href="/agencies"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Built for agents <ArrowRight className="size-4" />
            </Link>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              Agencies
            </p>
            <h2 className="mt-3 font-heading text-3xl text-foreground">
              For shops that need the same system across the team.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Assign inquiries, see who is touring this week, and stop
              competing with yourselves for the same community slot. Leadership
              gets the pipeline without a Friday status hunt.
            </p>
            <Link
              href="/agencies"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Built for agencies <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2 text-teal">
              <ShieldCheck className="size-4" />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase">
                Professional system, not a brochure
              </span>
            </div>
            <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
              Ready to place more seniors from one system?
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              We’ll walk your placement workflow — inquiries, community roster,
              and the path to move-in — against the way you work today.
            </p>
          </div>
          <Link
            href="/demo"
            className={cn(buttonVariants({ size: "lg" }), "h-12 px-6")}
          >
            Book a demo
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
