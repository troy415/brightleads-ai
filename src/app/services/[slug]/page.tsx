import { notFound } from "next/navigation";

import { ServiceView, serviceDocBySlug, serviceMetadata } from "@/components/service-view";
import { SERVICE_DOCS } from "@/lib/content/services";

export function generateStaticParams() {
  return SERVICE_DOCS.filter((s) => s.slug).map((s) => ({ slug: s.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = serviceDocBySlug(slug);
  if (!doc) return {};
  return serviceMetadata(doc);
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = serviceDocBySlug(slug);
  if (!doc) notFound();
  return <ServiceView doc={doc} />;
}
