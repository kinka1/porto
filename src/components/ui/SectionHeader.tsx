import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Small mono label above the title, e.g. "02 — Skills". */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Use "h1" on pages where this header is the primary topic. */
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 flex max-w-2xl flex-col gap-3 sm:mb-12",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "font-semibold tracking-tight",
          Heading === "h1" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
