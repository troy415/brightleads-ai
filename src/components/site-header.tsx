"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/logo";
import { AUDIENCES, NAV, SERVICES } from "@/lib/catalog";

function current(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap">
          <Link className="logo-link" href="/" aria-label="BrightLeads.AI home">
            <Logo />
          </Link>
          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => {
              if (item.dropdown === "services") {
                return (
                  <div className="dd" key={item.href}>
                    <Link
                      href="/services"
                      aria-current={current(pathname, "/services") ? "page" : undefined}
                    >
                      Services
                    </Link>
                    <div className="dd-panel">
                      <div className="dd-inner">
                        {SERVICES.map((s) => (
                          <Link key={s.href} href={s.href}>
                            {s.name}
                            <span>{s.blurb}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.dropdown === "audiences") {
                return (
                  <div className="dd" key={item.href}>
                    <Link
                      href="/who-we-serve"
                      aria-current={current(pathname, "/who-we-serve") ? "page" : undefined}
                    >
                      Who we serve
                    </Link>
                    <div className="dd-panel">
                      <div className="dd-inner" style={{ gridTemplateColumns: "1fr" }}>
                        {AUDIENCES.map((s) => (
                          <Link key={s.href} href={s.href}>
                            {s.name}
                            <span>{s.blurb}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="header-cta">
            <Link className="btn btn-brand btn-sm" href="/start">
              Start a conversation
            </Link>
            <details className="menu">
              <summary aria-label="Open menu">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </summary>
              <nav className="menu-panel" aria-label="Mobile">
                {NAV.map((item) => (
                  <span key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                    {item.dropdown === "services"
                      ? SERVICES.map((s) => (
                          <Link className="sub" key={s.href} href={s.href}>
                            {s.name}
                          </Link>
                        ))
                      : null}
                    {item.dropdown === "audiences"
                      ? AUDIENCES.map((s) => (
                          <Link className="sub" key={s.href} href={s.href}>
                            {s.name}
                          </Link>
                        ))
                      : null}
                  </span>
                ))}
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">Contact</Link>
                <Link className="btn btn-brand" href="/start">
                  Start a conversation
                </Link>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
