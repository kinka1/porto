import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-start gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span className="font-medium text-foreground">{site.name}</span>
          {" · "}© {new Date().getFullYear()}
        </p>
        <SocialLinks withLabels className="-ml-2.5 sm:ml-0" />
      </Container>
    </footer>
  );
}
