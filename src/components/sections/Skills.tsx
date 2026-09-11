import { skillGroups } from "@/data/skills";
import type { SkillGroup as SkillGroupData } from "@/lib/types";
import { t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

export function Skills({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section id="skills" tone="card">
      <Reveal>
        <SectionHeader
          eyebrow={dict.skills.eyebrow}
          title={dict.skills.title}
          description={dict.skills.description}
        />
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillGroup key={i} group={group} locale={locale} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function SkillGroup({ group, locale }: { group: SkillGroupData; locale: Locale }) {
  return (
    <div className="rounded-lg border border-border bg-background p-5">
      <h3 className="mb-3 text-sm font-semibold">{t(group.name, locale)}</h3>
      <TechBadgeList items={group.skills} />
    </div>
  );
}
