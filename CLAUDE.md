# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page B2B marketing landing site for Mega Punch Vending (automated
retail/vending kiosks), built with React 19, Vite, and Tailwind CSS v4.
There is no backend — the entire site is one static bundle plus a
client-side form POST to a third-party service.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint (rules: react/rules-of-hooks, react/only-export-components)
```

There is no test suite configured in this repo.

## Architecture

- **Everything renders from one file**: `src/App.jsx` contains the entire
  page as a sequence of small components — `Header`, `Hero`,
  `ValueProposition`, `KioskShowcase`, `HowItWorks`, `EvaluationForm`
  (inside `AboutFooter`) — composed by the default-exported `<App />` and
  mounted in `src/main.jsx`. When adding a new page section, add a
  component function in this file following the existing pattern rather
  than reaching for a components directory.
- **Shared primitives** live at the top of `App.jsx`: `GlowDivider`,
  `PrimaryButton`, `Eyebrow`, and the inline `Icon` component (icons are
  raw SVG path data in the `icons` object — no icon library dependency).
  Reuse these instead of duplicating markup.
- **Styling is Tailwind v4 utility classes only**, wired in via the
  `@tailwindcss/vite` plugin (no `tailwind.config.js` — v4 is
  CSS-config-based). Design tokens (brand colors `magenta`/`electric`,
  the `ink`/`charcoal`/`slate` background scale, and the `sans`/`display`
  font families) are declared with `@theme` in `src/index.css` and consumed
  as Tailwind classes like `bg-ink`, `text-magenta`, `font-display`.
  Fonts (Inter, Space Grotesk) are loaded via Google Fonts `<link>` tags in
  `index.html`, not npm packages.
- **Lead capture form** (`EvaluationForm` in `App.jsx`) posts `FormData`
  directly to Web3Forms (`https://api.web3forms.com/submit`) using a
  public access key constant (`WEB3FORMS_ACCESS_KEY`) — there is no server
  route in this project. Local component state (`idle | submitting |
  success | error`) drives the UI; no form library or client-side
  validation library is used.
- **Assets**: photos referenced from JS live in `src/assets/` and are
  imported as ES modules (processed/hashed by Vite). Files that need a
  stable, unprocessed URL (favicon, sprite) live in `public/` and are
  referenced by absolute path (e.g. `/favicon.svg`).
- **Deployment base path**: `vite.config.js` sets `base:
  '/Charm.meter/'` only when the `GITHUB_PAGES` env var is set, because
  GitHub Pages serves the project from a `/Charm.meter/` subpath while
  Vercel/Netlify serve it from the domain root. Don't hardcode absolute
  asset paths that assume root, and don't remove this conditional.
- **CI/CD**: `.github/workflows/deploy.yml` builds with `GITHUB_PAGES=true`
  and deploys `dist/` to GitHub Pages on every push to
  `claude/mega-punch-vending-landing-dh6djl` (the branch this workflow is
  currently pinned to — update the `branches:` filter if the deploy branch
  changes).
