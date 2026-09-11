import Image from "next/image";
import type { Screenshot } from "@/lib/types";
import { t, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

export function ProjectGallery({
  screenshots,
  locale,
}: {
  screenshots: Screenshot[];
  locale: Locale;
}) {
  const dict = getDictionary(locale);

  if (screenshots.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border p-6 text-sm text-muted">
        {dict.caseStudy.noScreenshots}
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {screenshots.map((shot, i) => (
        <li key={i}>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="relative aspect-[16/10]">
              <Image
                src={shot.src}
                alt={t(shot.alt, locale)}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {shot.caption && (
              <figcaption className="border-t border-border px-4 py-2 text-sm text-muted">
                {t(shot.caption, locale)}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
