import { notFound } from "next/navigation";

import { GuideView } from "@/components/guide-view";
import { GUIDE_DOCS, guideBySlug } from "@/lib/content/guides";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return GUIDE_DOCS.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = guideBySlug(slug);
  if (!doc) return {};
  return pageMeta({ title: doc.title, description: doc.description, path: doc.path });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = guideBySlug(slug);
  if (!doc) notFound();
  return <GuideView doc={doc} />;
}
