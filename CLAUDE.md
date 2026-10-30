# Portfolio Website – Project Guide

Personal engineering portfolio for Duncan Rabenstein, an electrical engineering student. The site showcases projects, a resume/about section, and contact links. Hosted on Vercel.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS for styling
- Hosted on Vercel; every push to `main` deploys
- No CMS. Content lives in local data files.

Next.js changes often. Before using version-specific APIs, check the installed version in `package.json` and the docs bundled in `node_modules/next/dist/docs/` if present, or the official docs at nextjs.org/docs.

## Project structure

```
app/                  # Routes (App Router)
  layout.tsx          # Root layout, global nav and footer
  page.tsx            # Home / hero
  projects/
    page.tsx          # Project index
    [slug]/page.tsx   # Individual project pages
  about/page.tsx      # About + resume section
components/           # Reusable UI pieces (small, single-purpose)
data/
  projects.ts         # All project content (title, summary, images, tags, links)
  site.ts             # Name, email, social links, nav items
public/               # Static images, resume PDF, icons
lib/                  # Helpers and utilities
```

## Design tokens

Define these once and reuse them. Do not hardcode hex values or font names in components.

- Colors (dark navy theme with a cyan accent):
  - `--color-bg`: `#0B1D33` (page background)
  - `--color-text`: `#E6EEF7` (main text)
  - `--color-accent`: `#4FC3F7` (links, buttons, highlights)
  - `--color-muted`: `#8CA3BA` (secondary text, captions)
  - Text on an accent-colored button uses `--color-bg`.
- Fonts (load with `next/font/google`):
  - headings: Manrope, weights 500, 700, 800 (`--font-heading`)
  - body: Inter, weights 400, 500 (`--font-body`)
  - code and small labels: IBM Plex Mono, weights 400, 500 (`--font-mono`)
- Spacing scale: 4, 8, 16, 32, 64 px (`--space-1` to `--space-5`)
- Radius: 12 px (`--radius`)
- Content max width: 1100 px (`--max-width`)
- Breakpoints: mobile first, with 640px and 1024px as the main breakpoints unless the design says otherwise.

Define all tokens as CSS variables on `:root` in `app/globals.css` and reference them by name (`var(--color-accent)`). If Tailwind is used, map its theme values to these variables instead of repeating the values.

The tokens in this section are the source of truth. When implementing
from Figma, take layout, structure, and content from the design, but map
every color, font, radius, and spacing value to these tokens. Never copy
hex values or font names from Figma into components. If something has no
matching token, ask before adding one.

## Conventions

- Use TypeScript everywhere. Avoid `any`.
- Default to Server Components. Add `"use client"` only for components that need state, effects, or browser APIs.
- Keep components small and focused. If a file grows past about 150 lines, split it.
- Put project and page content in `data/`, not inline in JSX.
- Use `next/image` for all images. Provide `width`/`height` or `fill` with a sized container, and `alt` text on every image.
- Use `next/link` for internal navigation.
- Use semantic HTML (`header`, `main`, `section`, `nav`, `footer`) and one `h1` per page.
- Mobile first. Every page must work at 375px wide with no horizontal scrolling.
- Accessibility: visible focus states, sufficient color contrast, keyboard-navigable nav.
- Keep dependencies minimal. Ask before adding a new package.

## Content guidelines

- Each project entry includes: title, one-line summary, date range, tags (for example "embedded", "PCB", "RF", "power electronics"), key technologies, a short write-up, images or diagrams, and optional links to a repo or demo.
- Write project descriptions around the engineering problem, design decisions, and results. Keep them concise.
- Do not invent project details, metrics, or affiliations. If information is missing, leave a clearly marked placeholder such as `TODO:` and tell the user.

## Workflow

1. Before starting a new section, state the plan in a few bullets and wait for approval if the change is large.
2. After making changes, run `npm run dev` to check the page visually when relevant.
3. Before finishing any task that touches code, run `npm run lint` and `npm run build`, and fix errors. Vercel runs the same build, so a passing local build is required before pushing.
4. Do not commit or push unless asked.
5. Keep commits small and descriptive.

## Out of scope (for now)

- Authentication, user accounts, or a database
- Analytics or tracking beyond what Vercel provides by default
- Blog or CMS integration
