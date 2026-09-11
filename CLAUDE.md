# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server on :3000, Turbopack enabled
npm run build   # production build — also the type check (tsconfig has noEmit)
npm run start   # serve the production build
npm run lint    # next lint (eslint-config-next: core-web-vitals + typescript)
```

There is no test runner. `npm run build` must pass before work is considered done; it runs type checking and prerenders every route, so a bad data entry (e.g. a missing required `Project` field) fails there.

**Do not run `npm run build` while `npm run dev` is running.** They share `.next`, and on Windows the build corrupts the dev server's state — it starts returning 500 and the build itself can hang. Stop the dev server first, or use `npx tsc --noEmit` (type check only, touches nothing) to verify while dev is up. To recover: stop both, `rm -rf .next`, restart.

If `next` is "not recognized", `node_modules/.bin` is missing — run `npm install`.

## Dependencies

Next 15.5.x, React 19 stable, Tailwind v3. `npm audit` is clean (0 vulnerabilities) — keep it that way.

Two things here are deliberate and should not be "tidied up":

- **`overrides.postcss`** in `package.json` forces Next's nested `postcss` (which Next pins at a vulnerable 8.4.31) up to a patched 8.5.x. Without it `npm audit` reports 2 high/moderate advisories whose only other fix is a Next 16 major bump. The direct `postcss` devDependency range must stay in sync with the override, or npm fails with `EOVERRIDE`.
- **`next lint`** is deprecated in 15.5 and removed in Next 16. It still works and passes; migrating means `npx @next/codemod@canary next-lint-to-eslint-cli .` plus a move to ESLint 9 flat config. Do that as part of a Next 16 upgrade, not before.

## Architecture

A personal software-developer portfolio: Next.js 15 App Router, React 19, Tailwind v3, no other runtime dependencies (icons are inline SVGs in `src/components/ui/Icons.tsx`; class joining is the 3-line `cn` in `src/lib/utils.ts`). Everything is statically prerendered, in two languages.

### Internationalization (English + Indonesian)

Hand-rolled, no i18n library. `src/i18n/config.ts` owns `locales`, `Locale`, `Localized<T>` (= `Record<Locale, T>`), the `t(value, locale)` reader, and the `localePath` / `languageAlternates` href helpers.

Every page lives under `src/app/[locale]/`, and **`src/app/[locale]/layout.tsx` is the root layout** — there is deliberately no `src/app/layout.tsx`, because the `<html lang>` attribute has to follow the locale and only a layout inside `[locale]` can read it. `src/middleware.ts` prefixes anything unprefixed (`/` → `/en`, `/projects` → `/en/projects`), so old unprefixed links keep working. Adding a locale = adding it to `locales` and fixing the type errors that follow.

Two kinds of text, kept apart:

- **Content** (`src/data/`) carries both languages inline as `{ en, id }`, so a project stays one object in one file. **Prose is localized; names are not** — people, companies, schools, products, and technology names are plain strings, as are industry terms written in English in Indonesian workplaces too ("Manual Testing", "Database Design").
- **UI strings** (`src/i18n/dictionary.ts`) are labels, headings, and button text. `en` defines the shape and `id` is typed `Dictionary`, so a missing key is a type error. `ProjectCategory` and `ProjectStatus` stay English union keys in the data and get their visible labels from `dict.category` / `dict.status` (both `satisfies Record<…>`, so a new variant must be translated).

Server components take a `locale: Locale` prop and call `getDictionary(locale)` themselves. `Navbar` and `LanguageSwitcher` are client components, so they receive only the dictionary slices they need as props rather than importing the whole thing into the client bundle. The switcher rewrites only the locale segment, so it holds the reader's place on deep pages.

SEO: each page sets `alternates.canonical` plus `languages` hreflang, `openGraph.locale`, and the sitemap emits every path in both languages with cross-referencing hreflang.

**Content is data, not JSX.** All portfolio content lives in `src/data/`, is typed by `src/lib/types.ts`, and carries both languages (see Internationalization above):

- `site.ts` — name, role, statement, URL, email, socials, CV path, hero key technologies
- `projects.ts` — the `Project[]` array; `src/lib/projects.ts` exposes sorted/featured/by-slug helpers
- `about.ts`, `skills.ts`, `experience.ts`, `education.ts`, `certifications.ts`

Adding a project means adding one object to `projects.ts`. The home page (featured), `/projects` listing, `/projects/[slug]` case study, and `sitemap.ts` all derive from that array via `generateStaticParams`. Sections whose data array is empty (experience, education, certifications) render nothing. Optional fields (`githubUrl`, `demoUrl`, `cvUrl`, socials) hide their UI when unset — private repos simply omit `githubUrl`.

**Content rules from the brief (binding):** never invent companies, metrics, dates, technologies, or responsibilities. Unknown values are literal `TODO:` strings in the data files, and they render as-is on purpose.

Projects in `projects.ts` were seeded in Sep 2026 from the user's public repos at github.com/kinka1; each description is grounded in that repo's code and docs (e.g. the Gram-classifier `results` come from its `models/metrics_summary.json`). A project split across repos (mobile + web, backend + frontend) uses `repositories: [{label, url}]` instead of `githubUrl`; `ProjectLinks` renders whichever is set. Remaining `TODO:` markers are the only unverified fields — see the comments next to them for what needs confirming.

**Component layers** (`src/components/`):

- `ui/` — primitives: `Container`, `Section` (id + padding + optional `tone="card"` alternating background), `SectionHeader`, `Button` (always a link — every CTA navigates), `TechBadge`/`TechBadgeList`, `Icons`, `Reveal` (IntersectionObserver fade-in, gated on `motion-safe:`)
- `layout/` — `Navbar` (client; sticky, mobile menu, `aria-current` for `/projects`), `Footer`, `SocialLinks`
- `projects/` — `ProjectCard` (whole card is one link via `after:absolute after:inset-0`; renders a generated placeholder when `thumbnail` is unset), `ProjectGallery`, `ProjectLinks`, `ProjectStatusBadge`
- `sections/` — one component per home-page section, composed in `src/app/page.tsx`

Only `Navbar` and `Reveal` are client components; keep it that way unless interaction genuinely requires state.

**React keys: never key a list on its own content.** Lists rendered from `src/data/` use the array index. Content strings are not unique — two features, paragraphs, or `TODO:` placeholders can legitimately read the same, which throws "Encountered two children with the same key". These lists are static (never reordered, filtered, or mutated at runtime) and contain no stateful children, so the index is the correct key. Content-derived keys (`key={feature}`, `key={item.name}`) must not be reintroduced. Keys on hardcoded in-code arrays (`Navbar`'s `navLinks`, the link/label lists in `SocialLinks`, `ProjectLinks`, `Contact`) and on `project.id` are fine — those are identifiers, not content.

## Design system

Extend, don't replace. Tokens are CSS variables in `src/app/globals.css` mapped to Tailwind colors in `tailwind.config.ts`: `background`, `foreground`, `muted`, `border`, `card`, `accent`. Dark mode is driven by `prefers-color-scheme` on those variables — there is no `dark:` class strategy and no toggle, so use the semantic utilities (`bg-card`, `text-muted`, `border-border`) rather than raw palette colors. `accent` is tuned for text on the page background, not as a button fill; primary buttons use `bg-foreground text-background`.

Fonts: Geist Sans/Mono are self-hosted via `next/font/local` in `layout.tsx` and registered as `font-sans`/`font-mono` in the Tailwind theme.

Nav links to home sections use `/#id` so they work from any route; `section[id]` has `scroll-margin-top` to clear the sticky navbar.

SEO: `metadataBase` comes from `site.url`; per-page `alternates.canonical` and Open Graph are set in each route's `metadata`/`generateMetadata`.
