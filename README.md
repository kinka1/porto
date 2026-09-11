# Portfolio

Personal software-developer portfolio built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. Fully static, available in English and Indonesian — no backend, no runtime dependencies beyond Next and React.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + type check
npm run lint
```

## Languages

The site is published in English (`/en/…`) and Indonesian (`/id/…`); visiting `/` or any unprefixed path redirects to English. A switcher in the navbar moves between them without leaving the current page.

- **Content** — every piece of prose in `src/data/` is written as `{ en: "…", id: "…" }`. Names (people, companies, schools, products) and technology names stay single strings.
- **Interface text** — buttons, headings, and labels live in `src/i18n/dictionary.ts`. The Indonesian dictionary is type-checked against the English one, so a forgotten translation fails the build rather than silently falling back.

## Editing content

All content lives in `src/data/` — no JSX changes are needed to update the site:

| File                | What it controls                                              |
| ------------------- | ------------------------------------------------------------- |
| `site.ts`           | Name, role, statement, site URL, email, socials, CV link      |
| `projects.ts`       | Projects — powers the home page, `/projects`, and case studies |
| `about.ts`          | About section copy and focus areas                            |
| `skills.ts`         | Skill groups                                                  |
| `experience.ts`     | Experience timeline                                           |
| `education.ts`      | Education                                                     |
| `certifications.ts` | Certifications                                                |

Fields marked `TODO:` are placeholders and render as-is — replace them with real information. Leave `results` empty rather than inventing metrics; sections with an empty data array are hidden automatically.

### Adding a project

Append an object to the `projects` array in `src/data/projects.ts` (see the `Project` type in `src/lib/types.ts`). Case-study pages are generated at `/en/projects/<slug>` and `/id/projects/<slug>`, and both are added to the sitemap. Put screenshots in `public/projects/<slug>/` and reference them from `screenshots` / `thumbnail`. Omit `githubUrl` for private repositories; for a project split across several repos, use `repositories: [{ label, url }]` instead.

## Before deploying

1. Set `site.url` to the production domain (used for canonical URLs, Open Graph, sitemap, robots).
2. Set `site.email` and the social links.
3. Optionally add `public/cv.pdf` and set `site.cvUrl`.
