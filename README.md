# Sourav — Portfolio

A personal portfolio for a backend & systems engineer. Built as one restrained,
editorial page: a narrow reading column, mono section indexing, real project
links, a command palette (`⌘K`), and a light/dark theme.

Design is an original implementation inspired by the layout language of
[xevrion.dev](https://xevrion.dev) and the personal, lowercase tone of
[ryanaque.com](https://www.ryanaque.com). No assets, branding or copy were copied.

## Stack

| Layer      | Choice                                      |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 16 (App Router)                     |
| UI         | React 19 + Tailwind CSS v4                  |
| Language   | TypeScript 5 (strict)                       |
| Fonts      | Geist, Geist Mono, Instrument Serif (local) |
| Icons      | Lucide React + two custom brand SVGs        |
| Theme      | next-themes (dark default, light toggle)    |
| Animation  | CSS only — no animation runtime             |

No database, no CMS, no client-side data fetching. The whole site is static.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npx tsc --noEmit   # type check
```

## Editing content

Everything lives in **`src/content/portfolio.ts`**:

- `site` — name, role, location, email, GitHub/LinkedIn, résumé path, canonical URL
- `intro`, `facts`, `focus` — hero copy and the three fact cards
- `skillGroups` — the stack rows
- `projects` — project cards (title, description, tags, repo URL, glow colour)
- `hackathon` — the “now” card
- `timeline`, `highlights` — experience/education and achievements
- `contact` — contact heading and body

Section order and markup live in `src/app/page.tsx` and `src/components/sections/`.

## Information still to fill in

These are placeholders on purpose. Do not deploy with them unchanged.

| Field | Where | Notes |
| --- | --- | --- |
| Email | `site.email` | Currently `souravsemwal1@gmail.com`. Update if it changes. |
| Phone | `site.phone` | Empty by default and stays hidden. Add only if you want it public. |
| Full name | `site.fullName` | Currently “Sourav”. Used in structured data. |
| Canonical URL | `site.url` | Currently the old Vercel URL. Point it at your real domain. |
| Résumé | `public/cv.pdf` | Replace with your latest CV. Set `site.resume` to `null` to hide the links. |
| Avatar | `public/avatar.png` | Square image, 256×256 is enough for the 64 px hero avatar. |
| Hackathon details | `hackathon` | Confirm the event name/status/copy for GitKitty. |
| Awards / internships | `timeline`, `highlights` | Add real entries only. Nothing was invented. |

The contact form from the previous version was removed: it was a simulated
server action that always reported success. This version uses `mailto:` and a
copy-to-clipboard action instead, so nothing pretends to send.

## Project links

All project URLs point at public repositories that were verified during the
build:

- `DPI-Engine---Deep-Packet-Inspection-System`
- `filedrop` (PeerLink)
- `Crime-Hotspot-Prediction-and-Patrol-Optimization-System` (OptiPatrol)
- `khoji`

## Structure

```
src/
  app/                 layout, page, metadata, icon, OG image, sitemap, robots
  components/          header, hero, sections, command menu, UI primitives
  content/portfolio.ts all editable content
  lib/                 cn() helper + command-menu event helper
public/                avatar + CV
```

## Accessibility & performance notes

- Semantic landmarks, skip link, labelled sections and a focus-trapped dialog.
- Every interactive control has a visible focus style and a real label.
- Motion is CSS-only and disabled under `prefers-reduced-motion`.
- Fonts are self-hosted at build time via `next/font`; no runtime font requests.
- No third-party scripts or analytics.
