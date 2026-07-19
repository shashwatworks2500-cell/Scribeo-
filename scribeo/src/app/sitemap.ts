import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { ROUTES } from "@/lib/seo/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: new URL(route.path, SITE.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
