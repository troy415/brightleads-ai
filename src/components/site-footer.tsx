import Link from "next/link";

import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/70">
            The professional system for senior assisted living placement agents
            and agencies — all of the placement work, in one place.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Product
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/platform" className="hover:text-teal">
                Platform
              </Link>
            </li>
            <li>
              <Link href="/agencies" className="hover:text-teal">
                For agencies
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-teal">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/demo" className="hover:text-teal">
                Request a demo
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
          © {new Date().getFullYear()} BrightLeads.AI. Built for placement
          agents and agencies across the United States.
        </p>
      </div>
    </footer>
  );
}
