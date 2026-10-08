import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/lib/blog";
import { landingPageConcepts } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/landing-pages",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const blogPages = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  const landingPages = landingPageConcepts.map((page) => ({
    url: `${site.url}/landing-pages/${page.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...landingPages, ...blogPages];
}