# Professional Portfolio Starter

Production-ready starter structure for a personal portfolio with strong UI architecture and caching defaults.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- API route with cache headers

## Why this structure

- UI is split into reusable sections and UI primitives (`components/sections`, `components/ui`)
- Content is separate from views (`content/`), so editing portfolio data is simple
- Page and API use incremental revalidation for fast and fresh content
- Static assets under `public/images` can be cached aggressively

## Project layout

- `app/`: routes, layout, page, API routes
- `components/`: section components and UI primitives
- `content/`: portfolio data
- `lib/`: shared config and cache constants
- `public/images/`: optimized image assets

## Run locally

```bash
npm install
npm run dev
```

## Production cache notes

- `app/page.tsx` uses `revalidate = 3600`
- `app/api/portfolio/route.ts` uses `s-maxage` and `stale-while-revalidate`
- `next.config.ts` sets immutable caching for `/images/*`
