# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **SonicJS headless CMS** for **Waterstreet Bookkeeping**, deployed on **Cloudflare Workers**. The CMS manages website content including pages, services, and pricing for a bookkeeping business.

## Commands

```bash
npm run dev              # Start local dev server at localhost:8787
npm run deploy           # Deploy to Cloudflare Workers
npm run db:migrate       # Apply D1 migrations locally
npm run db:migrate:prod  # Apply D1 migrations to production
```

## Collections

- **Pages** (`pages.collection.ts`) - Website pages (homepage, about, contact, etc.) with hero sections and rich content
- **Services** (`services.collection.ts`) - Bookkeeping services offered, with descriptions and features
- **Pricing** (`pricing.collection.ts`) - Pricing tiers with features, billing periods, and CTAs

## Architecture

### Entry Point
`src/index.ts` - Creates the SonicJS app using `createSonicJSApp()` and registers all collections via `registerCollections()`. Collections must be registered before app creation to enable auto-sync to the database.

### Adding a New Collection
1. Create `src/collections/my-collection.ts` with a `CollectionConfig` export
2. Import and add to `registerCollections([...])` in `src/index.ts`

### Cloudflare Bindings (wrangler.toml)
- `DB` - D1 SQLite database (waterstreet-db)
- `BUCKET` - R2 bucket for media storage (waterstreet-media)

## Users

Admin users are managed through the SonicJS admin interface:
- jamesg89 (admin)
- dilara (admin)

## Tech Stack
- **Runtime**: Cloudflare Workers
- **Framework**: Hono (via SonicJS)
- **Database**: Cloudflare D1 (SQLite)
- **ORM**: Drizzle
- **Storage**: Cloudflare R2
- **Validation**: Zod
