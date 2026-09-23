"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";

type Status = "empty" | "loading" | "error" | "success";

const fieldClass = "h-11 bg-card text-base md:text-sm";

export function StartForm() {
  const [status, setStatus] = useState<Status>("empty");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as {
        error?: string;
        fields?: Record<string, string>;
      };

      if (!response.ok) {
        setStatus("error");
        setError(payload.error ?? "We could not send that request.");
        setFieldErrors(payload.fields ?? {});
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("The network dropped before we could send your request. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/25 bg-teal-soft p-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
          Request received
        </p>
        <h2 className="mt-2 font-heading text-3xl text-foreground">
          We will be in touch shortly.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          A BrightLeads.AI teammate will follow up to talk through your
          community, the website you have now, and how inquiries reach the
          team. If it is urgent, call us at{" "}
          <a href="tel:+14157412648" className="font-medium text-foreground underline">
            (415) 741-2648
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 h-10"
          onClick={() => setStatus("empty")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      {status === "error" && error ? (
        <div
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {error}
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Your name"
          error={fieldErrors.name}
          required
        >
          <Input
            id="name"
            name="name"
            className={fieldClass}
            autoComplete="name"
            disabled={status === "loading"}
            aria-invalid={Boolean(fieldErrors.name)}
          />
        </Field>
        <Field
          id="email"
          label="Work email"
          error={fieldErrors.email}
          required
        >
          <Input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            disabled={status === "loading"}
            aria-invalid={Boolean(fieldErrors.email)}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="community"
          label="Community or home"
          error={fieldErrors.community}
          required
        >
          <Input
            id="community"
            name="community"
            className={fieldClass}
            disabled={status === "loading"}
            aria-invalid={Boolean(fieldErrors.community)}
          />
        </Field>
        <Field id="role" label="Role" error={fieldErrors.role}>
          <Input
            id="role"
            name="role"
            placeholder="Owner, administrator, marketing"
            className={fieldClass}
            disabled={status === "loading"}
          />
        </Field>
      </div>
      <Field id="markets" label="Where you operate" error={fieldErrors.markets}>
        <Input
          id="markets"
          name="markets"
          placeholder="City, county, or region"
          className={fieldClass}
          disabled={status === "loading"}
        />
      </Field>
      <Field
        id="message"
        label="What should we talk through?"
        error={fieldErrors.message}
      >
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Website, campaigns, occupancy, how inquiries reach the team."
          className="min-h-28 bg-card"
          disabled={status === "loading"}
        />
      </Field>
      <Button
        type="submit"
        size="lg"
        className="h-11 w-full sm:w-auto px-6"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" />
            Sending request...
          </>
        ) : (
          "Start a conversation"
        )}
      </Button>
      <p className="text-xs leading-5 text-muted-foreground">
        We will only use this to follow up about your community. No newsletter,
        no shared lists.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required ? <span className="text-teal"> *</span> : null}
      </Label>
      {children}
      {error ? (
        <p className={cn("text-xs text-destructive")} role="status">
          {error}
        </p>
      ) : null}
    </div>
  );
}
