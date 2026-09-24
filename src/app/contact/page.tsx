import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BrightLeads.AI in San Francisco at 14 Precita Ave. Suite J. Phone (415) 741-2648. For care home, RCFE, ARF, and senior community operators.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Contact
      </p>
      <h1 className="mt-3 max-w-2xl font-heading text-4xl text-foreground sm:text-5xl">
        San Francisco office. Conversations with operators.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
        This is for care homes, senior communities, RCFEs, ARFs, and similar
        operators who want a marketing system that finds residents, including
        AI visibility. If you are a family looking for a home, call a community
        in your market. This site is for the operators who run the home.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Phone
          </p>
          <a
            href={site.phoneHref}
            className="mt-3 block text-lg font-medium text-foreground"
          >
            {site.phone}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Weekdays, Pacific time.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Email
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 block text-lg font-medium text-foreground"
          >
            {site.email}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Community and operator conversations.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Office
          </p>
          <p className="mt-3 text-lg font-medium text-foreground">
            {site.addressLine}
            <br />
            {site.cityLine}
          </p>
        </article>
      </div>
      <Link
        href="/start"
        className={cn(buttonVariants({ size: "lg" }), "mt-10 h-11 px-5")}
      >
        Prefer a structured conversation? Start here
      </Link>
    </div>
  );
}
