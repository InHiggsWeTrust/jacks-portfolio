# Jack Higglesden — Portfolio

Personal portfolio and blog for Jack Higglesden, Senior Software Engineer. Built with a focus on performance, accessibility, and clean code — the same standards applied to production work.

---

## Tech Stack

| Concern | Choice |
| :--- | :--- |
| Framework | [Astro 6](https://astro.build) — static output, zero client JS by default |
| Language | TypeScript (strict mode) |
| Styling | Vanilla CSS with custom properties — no utility framework |
| Content | Astro Content Collections with Zod schemas (experience, projects, blog) |
| Accessibility | WCAG 2.1 AA — semantic HTML, `aria-label`, `:focus-visible`, tested contrast ratios |
| Theme | Flash-free dark/light mode via `localStorage` + `data-theme` attribute |

## Project Structure

```
src/
├── assets/             # Static images (processed by Astro's Image pipeline)
├── components/         # UI components (Nav, Footer, HeroSection, TagList, …)
├── content/            # Markdown content collections
│   ├── blog/
│   ├── experience/
│   └── projects/
├── layouts/
│   └── Layout.astro    # HTML shell — nav, footer, theme script
├── pages/
│   ├── index.astro     # Single-page portfolio (Hero → Experience → Projects → Blog)
│   └── blog/           # Blog archive + individual post pages
├── styles/
│   └── global.css      # Design tokens, reset, shared utilities
└── content.config.ts   # Content collection schemas (Zod)
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Design Decisions

- **No framework CSS** — all styles use CSS custom properties for full control over the design language and zero unused CSS in the output bundle.
- **Self-hosted fonts** — fonts are bundled at build time via `@fontsource`, eliminating third-party network requests and GDPR concerns.
- **Content Collections** — Zod schemas enforce frontmatter shape at build time; any malformed content file fails the build rather than silently rendering incorrectly.
- **Static output** — no server runtime required. The built site is a folder of HTML, CSS, and assets that can be hosted anywhere.
