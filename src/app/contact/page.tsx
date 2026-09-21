import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BrightLeads.AI in San Francisco — phone, email, and office for placement agents and agencies.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Contact
      </p>
      <h1 className="mt-3 max-w-2xl font-heading text-4xl text-navy sm:text-5xl">
        San Francisco office. Nationwide conversations with agents.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
        This is for placement agents and agencies who want to run the practice
        on BrightLeads.AI. If you are a family looking for a home, call a
        placement professional in your market — this site is not a consumer
        directory.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Phone
          </p>
          <a
            href={site.phoneHref}
            className="mt-3 block text-lg font-medium text-navy"
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
            className="mt-3 block text-lg font-medium text-navy"
          >
            {site.email}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Demos and agency conversations.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Office
          </p>
          <p className="mt-3 text-lg font-medium text-navy">
            {site.addressLine}
            <br />
            {site.cityLine}
          </p>
        </article>
      </div>
      <Link
        href="/demo"
        className={cn(buttonVariants({ size: "lg" }), "mt-10 h-11 px-5")}
      >
        Prefer a structured demo? Request one
      </Link>
    </div>
  );
}
