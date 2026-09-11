import type { Project } from "@/lib/types";
import { t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Button } from "@/components/ui/Button";
import { ExternalLinkIcon, GitHubIcon } from "@/components/ui/Icons";

interface ProjectLink {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

/** Renders only the links a project actually has; private repos simply omit githubUrl. */
export function ProjectLinks({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const links: ProjectLink[] = [];

  if (project.demoUrl) {
    links.push({
      label: dict.projectLinks.liveDemo,
      href: project.demoUrl,
      Icon: ExternalLinkIcon,
    });
  }

  const repos =
    project.repositories ??
    (project.githubUrl
      ? [{ label: { en: "", id: "" }, url: project.githubUrl }]
      : []);
  for (const repo of repos) {
    const label = t(repo.label, locale) || dict.projectLinks.sourceCode;
    links.push({ label, href: repo.url, Icon: GitHubIcon });
  }

  if (project.apiDocsUrl) {
    links.push({
      label: dict.projectLinks.apiDocs,
      href: project.apiDocsUrl,
      Icon: ExternalLinkIcon,
    });
  }

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ label, href, Icon }, i) => (
        <Button key={i} href={href} external variant={i === 0 ? "primary" : "secondary"}>
          <Icon className="h-4 w-4" />
          {label}
        </Button>
      ))}
    </div>
  );
}
