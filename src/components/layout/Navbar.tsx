"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/utils";

interface NavbarProps {
  locale: Locale;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
}

export function Navbar({ locale, nav, a11y }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: nav.about, href: localePath(locale, "#about") },
    { label: nav.skills, href: localePath(locale, "#skills") },
    { label: nav.projects, href: localePath(locale, "/projects") },
    { label: nav.experience, href: localePath(locale, "#experience") },
    { label: nav.contact, href: localePath(locale, "#contact") },
  ];

  const projectsHref = localePath(locale, "/projects");
  const isActive = (href: string) =>
    href === projectsHref ? pathname.startsWith(projectsHref) : false;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={localePath(locale)}
          className="font-semibold tracking-tight"
          aria-label={`${site.name} — ${a11y.homeSuffix}`}
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label={a11y.primaryNav} className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                      isActive(link.href) ? "font-medium text-foreground" : "text-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher locale={locale} label={a11y.languageSwitcher} />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-card md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-nav"
        aria-label={a11y.primaryNav}
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <Container>
          <ul className="flex flex-col py-2">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base transition-colors hover:bg-card",
                    isActive(link.href) ? "font-medium text-foreground" : "text-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
