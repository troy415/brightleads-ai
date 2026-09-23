import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Megaphone,
  Settings2,
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
              For care homes and senior communities
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-4xl leading-[1.12] font-extrabold text-foreground sm:text-5xl lg:text-[3.4rem]">
              Find residents with a system that{" "}
              <span className="text-gradient">works together.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              BrightLeads.AI is a marketing agency for care homes, senior
              communities, RCFEs, ARFs, and similar operators. We build systems
              where web design, marketing campaigns, and technical systems
              interact to drive leads. Families are the residents you want.
              They are not the customer of this site.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-6 text-sm"
                )}
              >
                Start a conversation
                <ArrowRight />
              </Link>
              <Link
                href="/work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-6 text-sm"
                )}
              >
                See the work
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Built in San Francisco. Made for operators who need occupancy,
              not another disconnected vendor.
            </p>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          {[
            {
              label: "Web design",
              copy: "A site families can actually inquire from, written for your care type, rooms, and neighborhood, not a template that could belong to anyone.",
            },
            {
              label: "Campaigns",
              copy: "Search, ads, and outreach that send people to a page that converts, instead of dumping traffic on a brochure that goes nowhere.",
            },
            {
              label: "Technical systems",
              copy: "Forms, routing, tracking, and follow-up so a lead reaches your team instead of dying in an inbox nobody checks.",
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
          How the pieces connect
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl text-foreground sm:text-4xl">
          Leads come from the interaction, not from one tactic in isolation.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Globe,
              title: "The website has a job",
              copy: "It has to explain the community, answer the questions families actually ask, and capture an inquiry. Pretty pages that cannot take a lead do not fill rooms.",
            },
            {
              icon: Megaphone,
              title: "Campaigns feed that site",
              copy: "Paid and organic work only pays off if the destination matches the search. We send people to the right page for memory care, respite, or a specific community, not a generic homepage.",
            },
            {
              icon: Settings2,
              title: "Systems keep the lead alive",
              copy: "When someone inquires, the form, notification, and follow-up have to fire. We wire the technical layer so marketing and operations see the same lead.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-[0_12px_40px_rgba(14,165,233,0.08)]"
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
              How we work with operators
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
              From occupancy pressure to a system that can take a lead.
            </h2>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/70">
              This is not a family directory and not a placement-agent product.
              It is marketing built for the people who run the home.
            </p>
          </div>
          <ol className="space-y-6">
            {[
              {
                n: "01",
                title: "Start with who you want",
                copy: "Care type, rooms, neighborhood, and the families you can actually serve. Occupancy is the goal. Vanity traffic is not.",
              },
              {
                n: "02",
                title: "Build the website around inquiry",
                copy: "Copy, layout, and forms that match how families search for a community, an RCFE, or an ARF.",
              },
              {
                n: "03",
                title: "Run campaigns into that site",
                copy: "Search and ads that land on the right page, with tracking that tells you what produced a real inquiry.",
              },
              {
                n: "04",
                title: "Wire follow-up so nothing sits",
                copy: "The technical system routes the lead to your team and keeps the next step visible.",
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
          <article className="rounded-3xl border border-teal/20 bg-teal-soft p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              Care homes and RCFEs
            </p>
            <h2 className="mt-3 font-heading text-3xl text-foreground">
              For homes that need the right families to find them.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Residential care, board and care, and RCFEs often lose inquiries
              to a weak website or a campaign that never reaches a real form.
              We build the path from search to a conversation with your staff.
            </p>
            <Link
              href="/communities"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Built for operators <ArrowRight className="size-4" />
            </Link>
          </article>
          <article className="rounded-3xl border border-border bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              Communities and ARFs
            </p>
            <h2 className="mt-3 font-heading text-3xl text-foreground">
              For communities that cannot live on walk-ins and word of mouth.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Senior communities and adult residential facilities need a
              repeatable way to show up when families search. Website,
              campaigns, and follow-up have to work as one system.
            </p>
            <Link
              href="/communities"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              See who we work with <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2 text-teal">
              <ShieldCheck className="size-4" />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase">
                Agency work, not a brochure
              </span>
            </div>
            <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
              Ready to talk about occupancy and leads?
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Tell us about the community, the website you have now, and how
              inquiries reach the team. We will map a system that can take a
              lead.
            </p>
          </div>
          <Link
            href="/start"
            className={cn(buttonVariants({ size: "lg" }), "h-12 px-6")}
          >
            Talk with us
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
