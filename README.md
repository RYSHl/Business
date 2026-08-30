# Business Plan 2026 — Event Website

Official event website for **Business Plan 2026**, the pre-qualifier event of IIC-BIT's flagship annual event **BIT-NISHAN** — a startup innovation contest held at BIT Mesra, Ranchi.

- **Dates:** 28th & 29th October 2026
- **Time:** 10:00 AM — 6:00 PM
- **Venue:** BIT Mesra, Ranchi, Jharkhand
- **Team size:** 4 people
- **Prizes:** ₹31,000 · ₹21,000 · ₹11,000

## Tech stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run typecheck  # TypeScript type check
npm run lint       # ESLint
```

## Editing event content

All editable event information lives in two places:

1. **`src/App.tsx`** — the `event`, `topics`, and `timeline` objects near the top of the file hold the date/time, registration URL, challenge topics, and schedule stages. Update these in place.
2. **`src/App.tsx`** section JSX — the Prizes, Location, Organizers, Contact, and Registration sections contain clearly-labeled placeholder text (e.g. "To be updated", "To be announced"). Replace these placeholders with real details as they become available.

The registration URL is currently an in-page anchor (`#registration`). When the real form is ready, update `event.registrationUrl` in `src/App.tsx`.

## Deployment (GitHub Pages)

This project is GitHub Pages-ready. The build outputs static assets to `dist/`.

### Option A — using `gh-pages`

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

### Option B — GitHub Actions

1. Push the repository to GitHub.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Add a workflow at `.github/workflows/deploy.yml` that runs `npm ci && npm run build` and uploads the `dist/` folder.

### Base path note

If deploying to a project subpath (e.g. `https://user.github.io/business-plan-2026`), set `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/business-plan-2026/',
  // ...
});
```

For a root domain (e.g. a custom domain or `user.github.io`), leave `base` unset.

## Accessibility & responsiveness

- Semantic HTML with ARIA labels on interactive controls.
- Responsive navigation with a mobile menu.
- `prefers-reduced-motion` is respected — animations are disabled for users who request reduced motion.
- Layout is intentionally designed for mobile, tablet, laptop, and desktop.

---

© 2026 Business Plan · BIT Mesra. Organized by IIC BIT Mesra in collaboration with Madan Mohan Mahanka Centre for Innovation & Entrepreneurship, Finance Club, and EDC Cell, BIT Mesra.
