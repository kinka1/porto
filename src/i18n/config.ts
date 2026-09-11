export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Shown in the language switcher and the `lang` attribute tooling. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

/** Open Graph locale codes. */
export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  id: "id_ID",
};

/**
 * A value that exists in every language.
 *
 * Rule of thumb: prose is localized, names are not. Person, company, school,
 * product, and technology names stay plain strings — they read the same in
 * both languages, and duplicating them only invites drift.
 */
export type Localized<T> = Record<Locale, T>;

/** Reads the current language out of a localized value. */
export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Builds an in-site href for a locale: `localePath("id", "/projects")` → `/id/projects`. */
export function localePath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}

/** `hreflang` map for a path, used in each page's `alternates.languages`. */
export function languageAlternates(path = ""): Record<string, string> {
  return Object.fromEntries(locales.map((locale) => [locale, localePath(locale, path)]));
}

/** Strips a leading `/en` or `/id` from a pathname, keeping the rest. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname === "/" ? "" : pathname;
}
