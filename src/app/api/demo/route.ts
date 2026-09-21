import { NextResponse } from "next/server";

type DemoBody = {
  name?: string;
  email?: string;
  agency?: string;
  role?: string;
  markets?: string;
  message?: string;
  company_url?: string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: DemoBody;

  try {
    body = (await request.json()) as DemoBody;
  } catch {
    return NextResponse.json(
      { error: "Send the form as JSON so we can read it." },
      { status: 400 }
    );
  }

  if (asString(body.company_url)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const agency = asString(body.agency);
  const role = asString(body.role);
  const markets = asString(body.markets);
  const message = asString(body.message);

  const fields: Record<string, string> = {};
  if (!name) fields.name = "Add your name.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fields.email = "Use a valid work email.";
  }
  if (!agency) fields.agency = "Add the agency or practice name.";

  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { error: "Check the highlighted fields and try again.", fields },
      { status: 400 }
    );
  }

  const payload = {
    name,
    email,
    agency,
    role,
    markets,
    message,
    submittedAt: new Date().toISOString(),
    source: "brightleads-ai-marketing",
  };

  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (webhook) {
    try {
      const forwarded = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!forwarded.ok) {
        return NextResponse.json(
          {
            error:
              "Your request looked good, but we could not deliver it. Call (415) 741-2648 or email info@brightleads.ai.",
          },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        {
          error:
            "Your request looked good, but we could not deliver it. Call (415) 741-2648 or email info@brightleads.ai.",
        },
        { status: 502 }
      );
    }
  }

  console.info("Demo request", payload);
  return NextResponse.json({ ok: true });
}
