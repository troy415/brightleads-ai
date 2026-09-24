import Link from "next/link";
import type { ReactNode } from "react";

import { Arrow, Icon } from "@/components/icons";
import type { Faq, IconName, NavItem } from "@/lib/catalog";
import { site } from "@/lib/site";

export function HeadBlock({
  eyebrow,
  heading,
  lead,
  id,
}: {
  eyebrow: string;
  heading: ReactNode;
  lead?: ReactNode;
  id?: string;
}) {
  return (
    <div className="head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{heading}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

export function Section({
  children,
  band,
  labelledBy,
}: {
  children: ReactNode;
  band?: "" | "band" | "band-tint" | "band-navy";
  labelledBy?: string;
}) {
  return (
    <section className={band || undefined} aria-labelledby={labelledBy}>
      <div className="wrap section">{children}</div>
    </section>
  );
}

export function Cards({
  items,
  cols = "g3",
}: {
  items: {
    href?: string;
    icon?: IconName;
    k?: string;
    t: string;
    d: string;
    more?: string;
  }[];
  cols?: "g2" | "g3" | "g4";
}) {
  return (
    <div className={`cards ${cols}`}>
      {items.map((item) => {
        const inner = (
          <>
            {item.icon ? <Icon name={item.icon} /> : null}
            {item.k ? <p className="k">{item.k}</p> : null}
            <h3>{item.t}</h3>
            <p>{item.d}</p>
            {item.href ? (
              <span className="more">{item.more ?? "Learn more"} →</span>
            ) : null}
          </>
        );
        if (item.href) {
          return (
            <Link key={item.t} className="bl-card" href={item.href}>
              {inner}
            </Link>
          );
        }
        return (
          <div key={item.t} className="bl-card">
            {inner}
          </div>
        );
      })}
    </div>
  );
}

export function ServiceCards(items: NavItem[], cols: "g2" | "g3" = "g3") {
  return (
    <Cards
      cols={cols}
      items={items.map((s) => ({
        href: s.href,
        icon: s.icon,
        t: s.name,
        d: s.blurb ?? "",
      }))}
    />
  );
}

export function Checks({ items }: { items: ReactNode[] }) {
  return (
    <ul className="checks">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: [string, string][] }) {
  return (
    <ol className="steps">
      {items.map(([t, d]) => (
        <li key={t}>
          <div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CompareTable({
  caption,
  headers,
  rows,
  usCol,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
  usCol?: number;
}) {
  return (
    <div className="table-wrap">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={h} scope="col" className={i === usCol ? "us" : undefined}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <th scope="row">{row[0]}</th>
              {row.slice(1).map((c, i) => (
                <td key={i} className={i + 1 === usCol ? "us" : undefined}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FaqList({
  faqs,
  eyebrow = "FAQ",
  title = "Questions operators and AI assistants ask about us",
  id = "faq",
}: {
  faqs: Faq[];
  eyebrow?: string;
  title?: string;
  id?: string;
}) {
  return (
    <Section band="band-tint" labelledBy={id}>
      <HeadBlock eyebrow={eyebrow} heading={title} id={id} />
      <div className="faq">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <div className="ans">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function CtaBand({
  heading = "Ready to fill rooms with a system that works together?",
  copy = "Tell us about your community, your current website, and how inquiries reach your team. We will map the system, including how you show up in AI answers today. Month to month, no long-term contract.",
}: {
  heading?: string;
  copy?: string;
}) {
  return (
    <section aria-label="Start a conversation">
      <div className="wrap section">
        <div className="cta">
          <p className="eyebrow">Start a conversation</p>
          <h2>{heading}</h2>
          <p>{copy}</p>
          <div className="btns">
            <Link className="btn btn-brand" href="/start">
              Get a free AI visibility check <Arrow />
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              Call {site.phone}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AnswerBox({ text }: { text: string }) {
  return (
    <div className="answer" role="note">
      <p className="label">Short answer</p>
      <p>{text}</p>
    </div>
  );
}

export function Crumbs({ items }: { items: [string, string][] }) {
  if (items.length < 2) return null;
  return (
    <nav className="crumbs wrap" aria-label="Breadcrumb">
      <ol>
        {items.map(([name, href], i) => (
          <li key={href + name} aria-current={i === items.length - 1 ? "page" : undefined}>
            {i === items.length - 1 ? name : <Link href={href || "/"}>{name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  h1,
  lead,
  answer,
}: {
  crumbs: [string, string][];
  eyebrow?: string;
  h1: ReactNode;
  lead?: ReactNode;
  answer?: string;
}) {
  return (
    <section className="hero">
      <div className="glow" />
      <Crumbs items={crumbs} />
      <div className="wrap">
        <div className="page-hero">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{h1}</h1>
          {lead ? <p className="lead">{lead}</p> : null}
          {answer ? <AnswerBox text={answer} /> : null}
        </div>
      </div>
    </section>
  );
}
