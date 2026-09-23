import Link from "next/link";

import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo className="text-white" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/70">
            A marketing agency for care homes, senior communities, RCFEs, ARFs,
            and similar operators. Web design, campaigns, and technical systems
            that interact to drive leads.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Agency
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/work" className="hover:text-teal">
                Work
              </Link>
            </li>
            <li>
              <Link href="/communities" className="hover:text-teal">
                Communities
              </Link>
            </li>
            <li>
              <Link href="/start" className="hover:text-teal">
                Start a conversation
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            San Francisco
          </p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href={site.phoneHref} className="hover:text-teal">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-teal"
              >
                {site.email}
              </a>
            </li>
            <li>
              {site.addressLine}
              <br />
              {site.cityLine}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/50 sm:px-6">
          © {new Date().getFullYear()} BrightLeads.AI. Marketing systems for
          care homes and senior communities.
        </p>
      </div>
    </footer>
  );
}
