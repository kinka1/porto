import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Alternate background to separate adjacent sections. */
  tone?: "default" | "card";
}

export function Section({ id, children, className, tone = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-border py-16 sm:py-24",
        tone === "card" && "bg-card",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
