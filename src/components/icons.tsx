import {
  BarChart3,
  Building2,
  Calendar,
  FileText,
  Heart,
  Home,
  KeyRound,
  LayoutTemplate,
  Link2,
  Mail,
  MapPin,
  Paintbrush,
  PenLine,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trees,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/lib/catalog";

const MAP: Record<IconName, LucideIcon> = {
  spark: Sparkles,
  search: Search,
  pin: MapPin,
  target: Target,
  layout: LayoutTemplate,
  star: Star,
  brush: Paintbrush,
  pen: PenLine,
  flow: Workflow,
  phone: Phone,
  chart: BarChart3,
  key: KeyRound,
  home: Home,
  heart: Heart,
  tree: Trees,
  building: Building2,
  users: Users,
  shield: ShieldCheck,
  link: Link2,
  doc: FileText,
  mail: Mail,
  calendar: Calendar,
};

export function Icon({ name }: { name: IconName }) {
  const Cmp = MAP[name];
  return (
    <span className="ico" aria-hidden="true">
      <Cmp />
    </span>
  );
}

export function Arrow() {
  return (
    <svg
      className="arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
