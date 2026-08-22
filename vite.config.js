import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages serves this project from a /Charm.meter/ subpath, while
// Vercel/Netlify serve it from their own root domain — only prefix asset
// paths when building for GitHub Pages.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/Charm.meter/' : '/',
  plugins: [react(), tailwindcss()],
})
