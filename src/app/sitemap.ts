import type { MetadataRoute } from "next";

import { AUDIENCES, SERVICES } from "@/lib/catalog";
import { site } from "@/lib/site";

const EXTRA = [
  "",
  "/services",
  "/who-we-serve",
  "/how-we-work",
  "/choosing-an-agency",
  "/about",
  "/guides",
  "/guides/ai-search-senior-living",
  "/guides/senior-living-seo-ai-checklist",
  "/guides/inquiry-to-move-in",
  "/faq",
  "/glossary",
  "/start",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...new Set([
      ...EXTRA,
      ...SERVICES.map((s) => s.href),
      ...AUDIENCES.map((s) => s.href),
    ]),
  ];
  return paths.map((route) => ({
    url: route ? `${site.url}${route}` : `${site.url}/`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/ai-visibility" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/ai-visibility" || route === "/services"
          ? 0.9
          : route.startsWith("/services/") || route.startsWith("/who-we-serve")
            ? 0.8
            : 0.6,
  }));
}
