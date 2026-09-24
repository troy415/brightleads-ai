import { notFound } from "next/navigation";

import { AudienceView } from "@/components/audience-view";
import { AUDIENCE_DOCS, audienceBySlug } from "@/lib/content/audiences";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return AUDIENCE_DOCS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = audienceBySlug(slug);
  if (!doc) return {};
  return pageMeta({ title: doc.title, description: doc.description, path: doc.path });
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = audienceBySlug(slug);
  if (!doc) notFound();
  return <AudienceView doc={doc} />;
}
