# Mega Punch Vending — Landing Page

A responsive, single-page B2B landing site for Mega Punch Vending, built with
React 19, Vite, and Tailwind CSS v4.

## Stack

- **React** — the whole page is composed of small components inside
  `src/App.jsx` (`Header`, `Hero`, `ValueProposition`, `HowItWorks`,
  `AboutFooter`), rendered by the default-exported `<App />`.
- **Tailwind CSS v4** — wired in via `@tailwindcss/vite`. Custom design
  tokens (colors, fonts) live in `src/index.css`.
- **Vite** — dev server and build tooling.

## Design

High-contrast dark theme with magenta (`--color-magenta`) and electric blue
(`--color-electric`) accents, directional gradients on buttons and section
dividers, and a subtle grid/glow background in the hero. Headings use
Space Grotesk; body copy uses Inter (loaded via Google Fonts in
`index.html`).

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```
