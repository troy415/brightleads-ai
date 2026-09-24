import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/communities",
    "/ai-visibility",
    "/start",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/ai-visibility" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/ai-visibility" ? 0.9 : 0.8,
  }));
}
