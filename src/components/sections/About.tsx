import { about } from "@/data/about";
import { t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const paragraphs = t(about.paragraphs, locale);
  const focusAreas = t(about.focusAreas, locale);

  return (
    <Section id="about">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={dict.about.eyebrow}
              title={dict.about.title}
              className="mb-6"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>

          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {focusAreas.map((area, i) => (
              <div key={i} className="border-l-2 border-border pl-4">
                <dt className="font-medium">{area.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">
                  {area.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
