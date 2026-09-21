import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Network,
  ShieldCheck,
} from "lucide-react";

import { ProductPreview } from "@/components/product-preview";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "cn";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_-10%,#d7eeec,transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              For placement agents and agencies
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-[3.4rem]">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              BrightLeads.AI is becoming the system placement professionals use
              to take family inquiries, keep assisted living relationships
              current, and operate inside a partner network — without losing
              work in inboxes and spreadsheets.
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
              Built in San Francisco. Sold to agencies throughout the United
              States.
            </p>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          {[
            {
              label: "Inquiries",
              copy: "Every family conversation lives in one record — from first call to move-in.",
            },
            {
              label: "Relationships",
              copy: "Your community roster, openings, and referral terms stay as current as the last tour.",
            },
            {
              label: "Ecosystem",
              copy: "Agencies and communities work as partners in the BrightLeads.AI network.",
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
          What the system does
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl text-navy sm:text-4xl">
          Placement is a relationship business. Treat it like one.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ClipboardList,
              title: "Family inquiries",
              copy: "Capture seniors and adult children the moment they reach out. Qualify care needs, budget, geography, and urgency — then keep follow-up on a clock instead of a sticky note.",
            },
            {
              icon: Building2,
              title: "Community relationships",
              copy: "Manage the living map of assisted living, memory care, and board-and-care homes you work with: who has openings, who takes which care levels, and who actually returns your calls.",
            },
            {
              icon: Network,
              title: "Partner ecosystem",
              copy: "Communities, agencies, and operators can join the BrightLeads.AI world as partners — so referrals are not one-off emails, they are a shared operating layer.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[0_1px_0_rgba(12,27,51,0.04)]"
            >
              <item.icon className="size-5 text-teal" />
              <h3 className="mt-4 font-heading text-2xl text-navy">
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
              How agencies run it
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
              Four steps from first call to a placed resident.
            </h2>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/70">
              BrightLeads.AI is not another marketing funnel. It is the work
              after the lead arrives — the part that actually places people.
            </p>
          </div>
          <ol className="space-y-6">
            {[
              {
                n: "01",
                title: "Intake the inquiry",
                copy: "Log the family, the senior, care needs, and how they found you. Nothing sits in voicemail.",
              },
              {
                n: "02",
                title: "Match communities",
                copy: "Work from your own roster and from partners in the ecosystem. See fit before you burn a tour.",
              },
              {
                n: "03",
                title: "Coordinate the path",
                copy: "Tours, notes, family updates, and community feedback live on the same inquiry.",
              },
              {
                n: "04",
                title: "Keep the network warm",
                copy: "When a community’s inventory or terms change, your next referral already knows.",
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
              Agencies
            </p>
            <h2 className="mt-3 font-heading text-3xl text-navy">
              For agents who still do this in email.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Independent agents and multi-office agencies get one place to run
              the book of business: inquiries, tours, community contacts, and
              the status of every family in motion.
            </p>
            <Link
              href="/agencies"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy"
            >
              Built for agencies <ArrowRight className="size-4" />
            </Link>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              Communities
            </p>
            <h2 className="mt-3 font-heading text-3xl text-navy">
              For homes that want better partners, not more cold calls.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Assisted living and memory care communities can join the
              BrightLeads.AI ecosystem so agencies they trust already know
              openings, care capability, and how you prefer to work.
            </p>
            <Link
              href="/partners"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy"
            >
              Become a partner <ArrowRight className="size-4" />
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
                Operator-grade, not brochure-ware
              </span>
            </div>
            <h2 className="font-heading text-3xl text-navy sm:text-4xl">
              Ready to run placement on a real system?
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              We’ll walk your team through inquiry intake, community
              relationships, and how partners show up in the workspace.
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
