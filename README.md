# Sourav — Portfolio

A terminal-themed personal portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Live at [souravvoid.dev](https://souravvoid.dev) (if deployed).

## Stack

| Layer        | Technology                         |
| ------------ | ---------------------------------- |
| Framework    | Next.js 16 (App Router)            |
| UI Library   | React 19                           |
| Language     | TypeScript 5                       |
| Styling      | Tailwind CSS v4 + CSS custom props |
| Animation    | Framer Motion v12                  |
| Icons        | Lucide React + custom SVG          |
| Theme        | next-themes (dark-first)           |
| Linting      | ESLint 9 (next/core-web-vitals)    |

## Sections

| Tab         | Description                                                |
| ----------- | ---------------------------------------------------------- |
| About       | Bio + "What I'm Doing" service cards                       |
| Resume      | Education timeline + skill categories                      |
| Projects    | Project cards with architecture & engineering decisions    |
| Open Source | Live GitHub repos (fetched from API, with fallback data)   |
| Contact     | Server-action-powered contact form with validation         |

All sections are wrapped in a reusable `TerminalWindow` component (macOS-style dots, `.sh` suffix, dark terminal aesthetic). Navigation uses URL search params (`?tab=...`) for shareable deep links.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
npm run lint      # run ESLint
```

## Project Structure

```
src/
  app/            # App router: layout, pages, metadata, sitemap, actions
  components/     # PortfolioApp, Sidebar, Navbar, section components, UI primitives
  lib/            # Utilities (cn helper)
  data/           # (reserved)
public/           # Static assets (avatar, resume.pdf)
```

## License

MIT — originally forked from `codewithsadee 2022`.
