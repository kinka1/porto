import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects } from "@/lib/projects";
import {
  isLocale,
  languageAlternates,
  locales,
  ogLocales,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const path = "/projects";

  return {
    title: dict.projectsPage.eyebrow,
    description: dict.projectsPage.metaDescription,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: dict.projectsPage.eyebrow,
      description: dict.projectsPage.metaDescription,
      locale: ogLocales[locale],
      url: `/${locale}${path}`,
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const projects = getProjects();

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow={dict.projectsPage.eyebrow}
        title={dict.projectsPage.title}
        description={dict.projectsPage.description}
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={i}>
            <ProjectCard project={project} locale={locale} detailed />
          </li>
        ))}
      </ul>
    </Container>
  );
}
