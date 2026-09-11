import { defaultLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * `notFound()` renders outside the dynamic-params context, so the locale is
 * not readable here. This falls back to the default language.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <Container className="flex flex-col items-start gap-4 py-24 sm:py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {dict.notFound.title}
      </h1>
      <p className="max-w-md text-muted">{dict.notFound.description}</p>
      <Button href={localePath(defaultLocale)} className="mt-2">
        {dict.notFound.backHome}
      </Button>
    </Container>
  );
}
