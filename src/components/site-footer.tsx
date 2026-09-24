import Link from "next/link";

import { Logo } from "@/components/logo";
import { AUDIENCES, SERVICES } from "@/lib/catalog";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap top">
        <div className="brandcol">
          <Link className="logo-link" href="/">
            <Logo className="text-white" />
          </Link>
          <p>
            A full-service digital marketing agency for senior living. Strategy,
            websites, SEO, paid media, reputation, CRM, sales enablement, and AI
            visibility, run as one system and measured by move-ins. Month to
            month. No long-term contracts.
          </p>
          <address>
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            {site.addressLine}
            <br />
            {site.cityLine}
          </address>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Who we serve</h2>
          <ul>
            {AUDIENCES.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.name}</Link>
              </li>
            ))}
          </ul>
          <h2 style={{ marginTop: "1.8rem" }}>Agency</h2>
          <ul>
            <li>
              <Link href="/how-we-work">How we work</Link>
            </li>
            <li>
              <Link href="/choosing-an-agency">Choosing an agency</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/guides">Guides</Link>
            </li>
            <li>
              <Link href="/glossary">Glossary</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. Digital marketing for senior
          living operators.
        </span>
        <span>
          <Link href="/privacy">Privacy</Link> ·{" "}
          <Link href="/llms.txt">llms.txt</Link> ·{" "}
          <Link href="/llms-full.txt">llms-full.txt</Link> ·{" "}
          <Link href="/sitemap.xml">Sitemap</Link>
        </span>
      </div>
    </footer>
  );
}
