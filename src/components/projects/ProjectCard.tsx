import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { localePath, t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { TechBadge } from "@/components/ui/TechBadge";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  /** Show the full technology list and feature bullets (projects listing). */
  detailed?: boolean;
}

const MAX_TECH_ON_CARD = 5;

export function ProjectCard({ project, locale, detailed = false }: ProjectCardProps) {
  const dict = getDictionary(locale);
  const href = localePath(locale, `/projects/${project.slug}`);
  const tech = detailed
    ? project.technologies
    : project.technologies.slice(0, MAX_TECH_ON_CARD);
  const hiddenTech = project.technologies.length - tech.length;
  const features = t(project.features, locale);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/30">
      <div className="relative aspect-[16/10] w-full border-b border-border bg-background">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail.src}
            alt={t(project.thumbnail.alt, locale)}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <ThumbnailPlaceholder
            name={project.name}
            category={dict.category[project.category]}
            altSuffix={dict.projectCard.placeholderAlt}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-xs text-muted">
              {dict.category[project.category]} · {project.year}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              <Link href={href} className="after:absolute after:inset-0">
                {project.name}
              </Link>
            </h3>
          </div>
          <ProjectStatusBadge status={project.status} locale={locale} />
        </div>

        <p className="text-sm leading-relaxed text-muted">{t(project.summary, locale)}</p>

        <dl className="text-sm">
          <dt className="sr-only">{dict.caseStudy.role}</dt>
          <dd>
            <span className="text-muted">{dict.projectCard.role} </span>
            <span className="font-medium">{t(project.role, locale)}</span>
          </dd>
        </dl>

        {detailed && features.length > 0 && (
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}

        <ul
          className="mt-auto flex flex-wrap gap-1.5 pt-1"
          aria-label={dict.projectCard.technologies}
        >
          {tech.map((item, i) => (
            <li key={i}>
              <TechBadge>{item}</TechBadge>
            </li>
          ))}
          {hiddenTech > 0 && (
            <li>
              <TechBadge className="text-muted">+{hiddenTech}</TechBadge>
            </li>
          )}
        </ul>

        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          {dict.projectCard.viewCaseStudy}
          <ArrowRightIcon className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}

function ThumbnailPlaceholder({
  name,
  category,
  altSuffix,
}: {
  name: string;
  category: string;
  altSuffix: string;
}) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div
      role="img"
      aria-label={`${name} — ${altSuffix}`}
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <span className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-lg font-semibold">
        {initials}
      </span>
      <span className="font-mono text-xs text-muted">{category}</span>
    </div>
  );
}
