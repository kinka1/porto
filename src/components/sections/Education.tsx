import { education } from "@/data/education";
import { t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Education({ locale }: { locale: Locale }) {
  if (education.length === 0) return null;
  const dict = getDictionary(locale);

  return (
    <Section id="education">
      <Reveal>
        <SectionHeader eyebrow={dict.education.eyebrow} title={dict.education.title} />
        <ul className="grid gap-4 sm:grid-cols-2">
          {education.map((item, i) => {
            const notes = item.notes ? t(item.notes, locale) : [];

            return (
              <li key={i} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold">{t(item.program, locale)}</h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="mt-2 font-mono text-xs text-muted">
                  {t(item.period, locale)}
                </p>
                {notes.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                    {notes.map((n, ni) => (
                      <li key={ni}>{n}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
