import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Nufus Akmalul",
  role: {
    en: "Software Developer",
    id: "Software Developer",
  },
  headline: {
    en: "Full-Stack & Mobile Developer",
    id: "Full-Stack & Mobile Developer",
  },
  statement: {
    en: "I build reliable web, backend, and mobile applications with a focus on maintainable architecture and real-world business solutions.",
    id: "Saya membangun aplikasi web, backend, dan mobile yang andal, dengan fokus pada arsitektur yang mudah dirawat dan solusi bisnis yang nyata.",
  },
  keyTechnologies: [
    "Laravel",
    "ASP.NET Core",
    "Flutter",
    "React",
    "TypeScript",
    "SQL Server",
    "MySQL",
  ],
  url: "https://example.com", // TODO: production URL (used for canonical + Open Graph + sitemap)
  email: "nufusnam@gmail.com",
  location: undefined, // TODO: e.g. { en: "Surabaya, Indonesia", id: "Surabaya, Indonesia" }
  cvUrl: undefined, // TODO: e.g. "/cv.pdf" (place the file in /public)
  socials: {
    github: "https://github.com/kinka1",
    linkedin: undefined, // TODO: "https://www.linkedin.com/in/<handle>"
  },
};
