import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * Every page lives under `/<locale>`. This sends anything without a locale
 * prefix to the default one, so `/` → `/en` and older unprefixed links like
 * `/projects` → `/en/projects` keep working.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, and any path with a file extension so sitemap.xml,
  // robots.txt, and static assets are served as-is.
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
