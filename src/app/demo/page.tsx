import type { Metadata } from "next";

import { DemoForm } from "@/components/demo-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a demo",
  description:
    "Request a BrightLeads.AI demo for your placement agency. We’ll walk through inquiries, community relationships, and the partner ecosystem.",
};

export default function DemoPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Request a demo
        </p>
        <h1 className="mt-3 font-heading text-4xl text-navy sm:text-5xl">
          Bring your pipeline. We’ll map it.
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          Demos are working sessions, not slide decks. Tell us how you take
          inquiries today and which communities you rely on. We’ll show how
          that work looks inside BrightLeads.AI.
        </p>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
          <li>Typically 30–40 minutes with someone who knows placement operations.</li>
          <li>
            Call{" "}
            <a href={site.phoneHref} className="font-medium text-navy underline">
              {site.phone}
            </a>{" "}
            if you would rather book live.
          </li>
          <li>
            Or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-navy underline"
            >
              {site.email}
            </a>
            .
          </li>
        </ul>
      </div>
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
        <DemoForm />
      </div>
    </div>
  );
}
