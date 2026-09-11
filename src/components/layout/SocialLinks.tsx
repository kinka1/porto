import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  /** Show text labels next to icons. */
  withLabels?: boolean;
}

interface SocialLink {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export function SocialLinks({ className, withLabels = false }: SocialLinksProps) {
  const links: SocialLink[] = [];
  if (site.socials.github) {
    links.push({ label: "GitHub", href: site.socials.github, Icon: GitHubIcon });
  }
  if (site.socials.linkedin) {
    links.push({ label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon });
  }
  links.push({ label: "Email", href: `mailto:${site.email}`, Icon: MailIcon });

  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {links.map(({ label, href, Icon }) => {
        const isExternal = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              className="inline-flex h-10 items-center gap-2 rounded-md px-2.5 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
              {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={withLabels ? undefined : label}
            >
              <Icon className="h-5 w-5" />
              {withLabels && <span>{label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
