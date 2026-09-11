import { certifications } from "@/data/certifications";
import { t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLinkIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications({ locale }: { locale: Locale }) {
  if (certifications.length === 0) return null;
  const dict = getDictionary(locale);

  return (
    <Section id="certifications" tone="card">
      <Reveal>
        <SectionHeader
          eyebrow={dict.certifications.eyebrow}
          title={dict.certifications.title}
        />
        <ul className="divide-y divide-border rounded-lg border border-border bg-background">
          {certifications.map((cert, i) => (
            <li
              key={i}
              className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="font-medium">{t(cert.name, locale)}</h3>
                <p className="text-sm text-muted">
                  {t(cert.issuer, locale)} · {t(cert.date, locale)}
                </p>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  {dict.certifications.viewCredential}
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
