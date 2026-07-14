import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"; return ["","/release-notes","/privacy","/terms","/support","/installation","/about"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
