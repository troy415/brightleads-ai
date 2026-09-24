import { NextResponse } from "next/server";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asList(value: unknown) {
  if (Array.isArray(value)) return value.map(asString).filter(Boolean);
  return asString(value) ? [asString(value)] : [];
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Send the form as JSON so we can read it." },
      { status: 400 }
    );
  }

  if (asString(body.company_site) || asString(body.company_url)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const organization =
    asString(body.organization) || asString(body.community) || asString(body.agency);

  const fields: Record<string, string> = {};
  if (!name) fields.name = "Add your name.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fields.email = "Use a valid work email.";
  }
  if (!organization) fields.organization = "Add the community or company name.";

  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { error: "Check the highlighted fields and try again.", fields },
      { status: 400 }
    );
  }

  const payload = {
    name,
    email,
    organization,
    role: asString(body.role),
    website: asString(body.website),
    phone: asString(body.phone),
    location: asString(body.location) || asString(body.markets),
    communities: asString(body.communities),
    care: asList(body.care),
    needs: asList(body.needs),
    message: asString(body.message),
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

  console.info("Inquiry request", payload);
  return NextResponse.json({ ok: true });
}
