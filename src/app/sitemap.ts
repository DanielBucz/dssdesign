import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { pageUrl } from "@/config/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projekty", "/o-nas", "/kontakt"].map((route) => ({
    url: pageUrl(route),
  }));

  const projectRoutes = projects.map((project) => ({
    url: pageUrl(`/projekty/${project.slug}`),
  }));

  return [...staticRoutes, ...projectRoutes];
}
