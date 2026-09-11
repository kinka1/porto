import { site } from "@/data/site";
import { localePath, t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { ArrowRightIcon, DownloadIcon } from "@/components/ui/Icons";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="border-b border-border">
      <Container className="flex flex-col gap-8 py-20 sm:py-28 lg:py-32">
        <div className="flex max-w-3xl flex-col gap-5">
          <p className="font-mono text-sm text-accent">{t(site.headline, locale)}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {site.name}
            <span className="block text-muted">{t(site.role, locale)}</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {t(site.statement, locale)}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={localePath(locale, "/projects")} size="lg">
            {dict.hero.viewProjects}
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button href={localePath(locale, "#contact")} size="lg" variant="secondary">
            {dict.hero.contactMe}
          </Button>
          {site.cvUrl && (
            <Button href={site.cvUrl} size="lg" variant="ghost" external>
              <DownloadIcon className="h-4 w-4" />
              {dict.hero.downloadCv}
            </Button>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {dict.hero.workingWith}
          </p>
          <TechBadgeList items={site.keyTechnologies} />
        </div>
      </Container>
    </section>
  );
}
