import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { projects } from "@/data/projects";
import { pageUrl } from "@/config/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projekty", "/o-nas", "/kontakt", "/landing-page", "/opieka-i-rozwoj-strony", "/blog", "/polityka-prywatnosci"].map((route) => ({
    url: pageUrl(route),
  }));

  const projectRoutes = projects.map((project) => ({
    url: pageUrl(`/projekty/${project.slug}`),
  }));

  const articleRoutes = articles.map((article) => ({
    url: pageUrl(`/blog/${article.slug}`),
    lastModified: article.date,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
