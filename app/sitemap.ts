import type { MetadataRoute } from "next";
import { SITE_URL, sitemapEntries } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: entry.path === "/" ? SITE_URL : `${SITE_URL}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
