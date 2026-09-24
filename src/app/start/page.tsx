import type { Metadata } from "next";

import { StartForm } from "@/components/start-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a conversation",
  description:
    "Talk with BrightLeads.AI about web design, campaigns, technical systems, and AI visibility for your care home, senior community, RCFE, or ARF.",
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Start a conversation
        </p>
        <h1 className="mt-3 font-heading text-4xl text-foreground sm:text-5xl">
          Tell us about the community. We will map the system.
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          These conversations are for operators: owners, administrators, and
          marketing leads at care homes and senior communities. Bring the
          website you have now, how inquiries reach the team, where occupancy
          is tight, and whether families can find you in AI answers. This is
          not a family intake form.
        </p>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
          <li>
            Typically 30 to 40 minutes with someone who knows community
            marketing operations.
          </li>
          <li>
            Call{" "}
            <a href={site.phoneHref} className="font-medium text-foreground underline">
              {site.phone}
            </a>{" "}
            if you would rather talk live.
          </li>
          <li>
            Or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-foreground underline"
            >
              {site.email}
            </a>
            .
          </li>
        </ul>
      </div>
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
        <StartForm />
      </div>
    </div>
  );
}
