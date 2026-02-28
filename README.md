# Siva Sankar Portfolio

Production-ready portfolio showcasing backend-focused full stack development experience.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Incremental Static Regeneration (ISR)
- API caching with s-maxage & stale-while-revalidate

## Architecture Highlights

- UI split into reusable sections and UI primitives (`components/sections`, `components/ui`)
- Content separated from views (`content/`) for maintainability
- Page-level ISR (`revalidate = 3600`)
- API caching strategy implemented
- Long-lived immutable caching for static assets under `public/images`

## Project Structure

- `app/` → routes, layout, page, API routes
- `components/` → section components and UI primitives
- `content/` → portfolio data
- `lib/` → shared config and cache constants
- `public/images/` → optimized image assets

## Run Locally

```bash
npm install
npm run dev