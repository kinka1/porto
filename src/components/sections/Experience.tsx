import { experience } from "@/data/experience";
import { t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

export function Experience({ locale }: { locale: Locale }) {
  if (experience.length === 0) return null;
  const dict = getDictionary(locale);

  return (
    <Section id="experience" tone="card">
      <Reveal>
        <SectionHeader eyebrow={dict.experience.eyebrow} title={dict.experience.title} />
        <ol className="relative border-l border-border">
          {experience.map((item, i) => {
            const responsibilities = t(item.responsibilities, locale);
            const highlights = item.highlights ? t(item.highlights, locale) : [];

            return (
              <li key={i} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
                <span
                  className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-background bg-accent"
                  aria-hidden
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-lg font-semibold">
                    {t(item.position, locale)}
                    <span className="font-normal text-muted"> · {item.company}</span>
                  </h3>
                  <p className="shrink-0 font-mono text-sm text-muted">
                    {t(item.period, locale)}
                  </p>
                </div>
                {item.location && (
                  <p className="mt-1 text-sm text-muted">{t(item.location, locale)}</p>
                )}
                {item.summary && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t(item.summary, locale)}
                  </p>
                )}
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                  {responsibilities.map((r, ri) => (
                    <li key={ri}>{r}</li>
                  ))}
                </ul>
                {highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-2">
                        <span className="text-accent" aria-hidden>
                          ↗
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <TechBadgeList items={item.technologies} className="mt-4" />
              </li>
            );
          })}
        </ol>
      </Reveal>
    </Section>
  );
}
