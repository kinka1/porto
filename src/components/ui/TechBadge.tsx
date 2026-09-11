import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-card px-2 py-1 font-mono text-xs text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

interface TechBadgeListProps {
  items: string[];
  className?: string;
}

export function TechBadgeList({ items, className }: TechBadgeListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item, i) => (
        <li key={i}>
          <TechBadge>{item}</TechBadge>
        </li>
      ))}
    </ul>
  );
}
