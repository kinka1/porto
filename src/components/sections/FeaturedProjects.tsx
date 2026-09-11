import { getFeaturedProjects } from "@/lib/projects";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedProjects({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featured = getFeaturedProjects();

  return (
    <Section id="projects">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow={dict.featured.eyebrow}
            title={dict.featured.title}
            description={dict.featured.description}
            className="mb-0"
          />
          <Button
            href={localePath(locale, "/projects")}
            variant="secondary"
            className="shrink-0 self-start sm:self-auto"
          >
            {dict.featured.allProjects}
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <li key={i}>
              <ProjectCard project={project} locale={locale} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
