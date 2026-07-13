import type { MetadataRoute } from "next";

const BASE_URL = "https://all-pack.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/product`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // If individual product pages exist as separate routes (e.g. /product/5kg-fertilizer-bag),
    // add them here — ideally generated dynamically from your product data instead of
    // hardcoded, e.g.:
    //
    // ...products.map((p) => ({
    //   url: `${BASE_URL}/product/${p.slug}`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.8,
    // })),
  ];
}
