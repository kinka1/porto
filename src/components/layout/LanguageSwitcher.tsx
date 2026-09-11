"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, stripLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  className?: string;
}

/**
 * Switches language while staying on the same page: `/en/projects/foo`
 * becomes `/id/projects/foo`. Renders real links so it works without JS
 * and so each language is crawlable from the other.
 */
export function LanguageSwitcher({ locale, label, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const rest = stripLocale(pathname);

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-md border border-border p-0.5",
        className,
      )}
      role="group"
      aria-label={label}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={`/${l}${rest}`}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded px-2 py-1 font-mono text-xs uppercase transition-colors",
              active
                ? "bg-foreground text-background"
                : "text-muted hover:bg-card hover:text-foreground",
            )}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
