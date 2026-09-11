import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getProjectSlugs } from "@/lib/projects";
import { locales } from "@/i18n/config";

/** Every page exists in every language; each entry declares the others via hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/projects", priority: 0.9 },
    ...getProjectSlugs().map((slug) => ({
      path: `/projects/${slug}`,
      priority: 0.8,
    })),
  ];

  return paths.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
