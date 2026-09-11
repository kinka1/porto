import { site } from "@/data/site";
import { t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  external: boolean;
}

/** Strip protocol and www. so the URL reads cleanly as a label. */
const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export function Contact({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const methods: ContactMethod[] = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      Icon: MailIcon,
      external: false,
    },
  ];
  if (site.socials.linkedin) {
    methods.push({
      label: "LinkedIn",
      value: displayUrl(site.socials.linkedin),
      href: site.socials.linkedin,
      Icon: LinkedInIcon,
      external: true,
    });
  }
  if (site.socials.github) {
    methods.push({
      label: "GitHub",
      value: displayUrl(site.socials.github),
      href: site.socials.github,
      Icon: GitHubIcon,
      external: true,
    });
  }

  return (
    <Section id="contact" className="border-b-0">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={dict.contact.eyebrow}
              title={dict.contact.title}
              description={dict.contact.description}
              className="mb-6"
            />
            <Button href={`mailto:${site.email}`} size="lg">
              <MailIcon className="h-4 w-4" />
              {dict.contact.sendEmail}
            </Button>
            {site.location && (
              <p className="mt-6 text-sm text-muted">
                {dict.contact.basedIn} {t(site.location, locale)}.
              </p>
            )}
          </div>

          <ul className="flex flex-col gap-3">
            {methods.map(({ label, value, href, Icon, external }, i) => (
              <li key={i}>
                <a
                  href={href}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/30"
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
