"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Arrow } from "@/components/icons";

type Status = "empty" | "loading" | "error";

const CARE = [
  "Assisted living",
  "Memory care",
  "Independent living",
  "Life plan / CCRC",
  "RCFE / board and care",
  "ARF",
  "Home care",
];

const NEEDS = [
  "AI visibility",
  "SEO / local SEO",
  "Paid media",
  "Website",
  "Reputation",
  "CRM / nurture",
  "Sales enablement",
  "Lease-up",
  "Everything",
];

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function StartForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("empty");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      role: String(data.get("role") ?? ""),
      organization: String(data.get("organization") ?? ""),
      website: String(data.get("website") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      location: String(data.get("location") ?? ""),
      communities: String(data.get("communities") ?? ""),
      care: data.getAll("care"),
      needs: data.getAll("needs"),
      message: String(data.get("message") ?? ""),
      company_site: String(data.get("company_site") ?? ""),
    };

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(body.error ?? "Check the form and try again.");
        return;
      }
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setError("The network dropped before we could send your request. Try again.");
    }
  }

  return (
    <form className="form" name="start" onSubmit={onSubmit} data-bl>
      <p hidden>
        <label>
          Leave this empty <input name="company_site" id="company_site" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="row">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="f-role">Role</label>
          <input id="f-role" name="role" placeholder="Owner, ED, VP Sales and Marketing" />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="f-org">Community or company</label>
          <input id="f-org" name="organization" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="f-web">Website</label>
          <input id="f-web" name="website" type="url" placeholder="https://" />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="f-loc">City and state</label>
          <input id="f-loc" name="location" placeholder="San Mateo, CA" />
        </div>
        <div className="field">
          <label htmlFor="f-count">Number of communities</label>
          <select id="f-count" name="communities" defaultValue="1">
            <option>1</option>
            <option>2 to 5</option>
            <option>6 to 20</option>
            <option>More than 20</option>
          </select>
        </div>
      </div>
      <fieldset className="field">
        <legend>Care types</legend>
        <div className="opts">
          {CARE.map((item) => (
            <label key={item}>
              <input type="checkbox" name="care" value={item} id={`care-${slug(item)}`} /> {item}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="field">
        <legend>What do you need help with?</legend>
        <div className="opts">
          {NEEDS.map((item) => (
            <label key={item}>
              <input type="checkbox" name="needs" value={item} id={`needs-${slug(item)}`} /> {item}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="f-msg">What is happening with occupancy and leads right now?</label>
        <textarea id="f-msg" name="message" />
      </div>
      {error ? (
        <p className="small" role="alert">
          {error}
        </p>
      ) : null}
      <button className="btn btn-brand" type="submit" disabled={status === "loading"} style={{ justifySelf: "start" }}>
        {status === "loading" ? "Sending…" : "Request my free AI visibility check"} <Arrow />
      </button>
      <p className="small">We reply within one business day. We never share your information.</p>
    </form>
  );
}
