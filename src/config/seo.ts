import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageUrl(path = "/") {
  return new URL(`${path.replace(/\/$/, "")}/`, siteConfig.url).href;
}

export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: pageUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl(path),
      siteName: siteConfig.name,
      locale: "pl_PL",
      type: "website",
      ...(image ? { images: [{ url: new URL(image, siteConfig.url).href, alt: title }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      ...(image ? { images: [new URL(image, siteConfig.url).href] } : {}),
    },
  };
}
