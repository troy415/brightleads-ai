import { aiVisibilityDoc, ServiceView, serviceMetadata } from "@/components/service-view";

const doc = aiVisibilityDoc();

export const metadata = serviceMetadata(doc);

export default function AiVisibilityPage() {
  return <ServiceView doc={doc} />;
}
