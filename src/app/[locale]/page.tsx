import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
      <FeaturedProjects locale={locale} />
      <Experience locale={locale} />
      <Education locale={locale} />
      <Certifications locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
