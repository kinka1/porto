import type { ProjectStatus } from "@/lib/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

const dotColor: Record<ProjectStatus, string> = {
  Production: "bg-emerald-500",
  Completed: "bg-sky-500",
  "In Development": "bg-amber-500",
  Archived: "bg-neutral-400",
};

export function ProjectStatusBadge({
  status,
  locale,
}: {
  status: ProjectStatus;
  locale: Locale;
}) {
  const dict = getDictionary(locale);

  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-background px-2 py-0.5 text-xs text-muted">
      <span className={cn("h-1.5 w-1.5 rounded-full", dotColor[status])} aria-hidden />
      {dict.status[status]}
    </span>
  );
}
