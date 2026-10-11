import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
const staticPages = [
"",
"/about",
"/services",
"/work",
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

return [...staticPages, ...blogPages];
}
