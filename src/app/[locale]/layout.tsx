import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import {
  isLocale,
  languageAlternates,
  locales,
  ogLocales,
  t,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;

  const title = `${site.name} — ${t(site.role, locale)}`;
  const description = t(site.statement, locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s — ${site.name}`,
    },
    description,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocales[locale],
      title,
      description,
      url: `/${locale}`,
    },
    twitter: { card: "summary" },
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          {dict.a11y.skipToContent}
        </a>
        <Navbar locale={locale} nav={dict.nav} a11y={dict.a11y} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
