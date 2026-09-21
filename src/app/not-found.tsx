import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl text-foreground sm:text-5xl">
        That page is not on the map.
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        The link may be old, or the page has moved. Head back to the product or
        request a demo.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>
          Back to home
        </Link>
        <Link
          href="/demo"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 px-5"
          )}
        >
          Request a demo
        </Link>
      </div>
    </div>
  );
}
