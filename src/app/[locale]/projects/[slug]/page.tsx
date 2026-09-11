import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import {
  isLocale,
  languageAlternates,
  localePath,
  locales,
  ogLocales,
  t,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjectSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;

  const project = getProjectBySlug(slug);
  if (!project) return {};

  const path = `/projects/${project.slug}`;
  const description = t(project.summary, locale);

  return {
    title: project.name,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "article",
      title: project.name,
      description,
      locale: ogLocales[locale],
      url: `/${locale}${path}`,
      ...(project.thumbnail && {
        images: [{ url: project.thumbnail.src, alt: t(project.thumbnail.alt, locale) }],
      }),
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const dict = getDictionary(locale);
  const features = t(project.features, locale);
  const architecture = t(project.architecture, locale);
  const challenges = t(project.challenges, locale);
  const results = t(project.results, locale);

  return (
    <article>
      <header className="border-b border-border bg-card">
        <Container className="py-12 sm:py-16">
          <Link
            href={localePath(locale, "/projects")}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {dict.caseStudy.allProjects}
          </Link>

          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">
            {dict.category[project.category]}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {t(project.summary, locale)}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-6 text-sm sm:grid-cols-4">
            <Fact label={dict.caseStudy.role} value={t(project.role, locale)} />
            <Fact label={dict.caseStudy.year} value={String(project.year)} />
            <Fact
              label={dict.caseStudy.status}
              value={<ProjectStatusBadge status={project.status} locale={locale} />}
            />
            <Fact
              label={dict.caseStudy.category}
              value={dict.category[project.category]}
            />
          </dl>

          <div className="mt-8">
            <ProjectLinks project={project} locale={locale} />
          </div>
        </Container>
      </header>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="min-w-0 space-y-14">
          <Block title={dict.caseStudy.overview}>
            <p>{t(project.description, locale)}</p>
          </Block>

          <div className="grid gap-8 sm:grid-cols-2">
            <Block title={dict.caseStudy.problem}>
              <p>{t(project.problem, locale)}</p>
            </Block>
            <Block title={dict.caseStudy.solution}>
              <p>{t(project.solution, locale)}</p>
            </Block>
          </div>

          <Block title={dict.caseStudy.myRole}>
            <p>
              <span className="font-medium text-foreground">
                {t(project.role, locale)}.
              </span>{" "}
              {t(project.contribution, locale)}
            </p>
          </Block>

          {architecture.length > 0 && (
            <Block title={dict.caseStudy.architecture}>
              <BulletList items={architecture} />
            </Block>
          )}

          {features.length > 0 && (
            <Block title={dict.caseStudy.keyFeatures}>
              <BulletList items={features} />
            </Block>
          )}

          {challenges.length > 0 && (
            <Block title={dict.caseStudy.challenges}>
              <dl className="space-y-6">
                {challenges.map((c, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-5">
                    <dt className="font-medium text-foreground">
                      {dict.caseStudy.challenge}
                    </dt>
                    <dd className="mt-1">{c.problem}</dd>
                    <dt className="mt-4 font-medium text-foreground">
                      {dict.caseStudy.engineeringDecision}
                    </dt>
                    <dd className="mt-1">{c.solution}</dd>
                  </div>
                ))}
              </dl>
            </Block>
          )}


          {results.length > 0 && (
            <Block title={dict.caseStudy.results}>
              <BulletList items={results} />
            </Block>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-sm font-semibold">{dict.caseStudy.techStack}</h2>
          <TechBadgeList items={project.technologies} className="mt-3" />
        </aside>
      </Container>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
