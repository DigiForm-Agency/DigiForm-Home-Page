# DigiForm - Local Marketing Agency Landing Page

## Overview

DigiForm is a landing page website for a local digital marketing agency based in North County San Diego. It targets small and medium local businesses, offering services like web design, website maintenance, local SEO, and on-site photography. The application is a full-stack TypeScript project with a React frontend and Express backend, using a single-page landing page format with sections for hero, services, portfolio, about, contact form, and footer.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework:** React 18 with TypeScript, bundled by Vite
- **Routing:** Wouter (lightweight client-side router) — currently only two routes: Home (`/`) and a 404 catch-all
- **UI Components:** shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling:** Tailwind CSS with CSS custom properties for theming (light mode defined, dark mode support via class strategy). Inter font from Google Fonts.
- **State/Data Fetching:** TanStack React Query for server state management
- **Forms:** React Hook Form with Zod validation (schemas shared with backend via `@shared/schema`)
- **Path Aliases:** `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Framework:** Express.js running on Node with TypeScript (compiled via tsx in dev, esbuild for production)
- **API Pattern:** RESTful routes prefixed with `/api` (registered in `server/routes.ts`)
- **Storage Layer:** Abstracted via `IStorage` interface in `server/storage.ts`. Currently uses in-memory storage (`MemStorage`). This can be swapped to a database-backed implementation.
- **Dev Server:** Vite dev server is integrated as Express middleware for HMR during development. In production, static files are served from `dist/public`.

### Shared Code
- **Schema:** `shared/schema.ts` defines database tables and Zod validation schemas using Drizzle ORM with drizzle-zod. Shared between frontend (form validation) and backend (data persistence).
- **Tables defined:**
  - `users` — id (UUID), username (unique), password
  - `inquiries` — id (UUID), name, email, phone (optional), businessName (optional), services (text array), message, createdAt

### Database
- **ORM:** Drizzle ORM configured for PostgreSQL dialect
- **Driver:** `@neondatabase/serverless` (Neon Postgres)
- **Connection:** Requires `DATABASE_URL` environment variable
- **Migrations:** Output to `./migrations` directory, schema push via `npm run db:push`
- **Note:** The contact form submits to `POST /api/inquiries` which persists data via in-memory storage (MemStorage). Can be swapped to database-backed storage.

### Build & Development
- `npm run dev` — Starts dev server with Vite HMR
- `npm run build` — Builds frontend with Vite, bundles server with esbuild
- `npm run start` — Runs production build
- `npm run db:push` — Pushes Drizzle schema to database

### Page Structure (Single Page)
The home page renders these sections in order:
1. **Header** — Sticky nav with smooth-scroll links to sections
2. **Hero** — Full-width background image with CTAs
3. **Services** — 4 service cards (Web Design & Development, Maintenance & Hosting, Local SEO, On-Site Photography) with pricing
4. **Portfolio** — Grid of 6 portfolio case study cards with images
5. **About** — Team photo and company description (North County San Diego focused)
6. **Contact Form** — Inquiry form with 4 service checkboxes, validated with Zod, submits to /api/inquiries
7. **Footer** — Contact info (phone, email), services list, quick links, Instagram

## External Dependencies

### Database
- **PostgreSQL** via Neon Serverless (`@neondatabase/serverless`) — requires `DATABASE_URL` environment variable

### Key NPM Packages
- **Frontend:** React, Wouter, TanStack React Query, React Hook Form, Zod, Tailwind CSS, shadcn/ui (Radix UI), Lucide Icons, Embla Carousel, Recharts, date-fns
- **Backend:** Express, Drizzle ORM, drizzle-zod, connect-pg-simple (session store, though sessions not currently implemented)
- **Build:** Vite, esbuild, tsx, TypeScript

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay in dev
- `@replit/vite-plugin-cartographer` — Dev tooling (non-production)
- `@replit/vite-plugin-dev-banner` — Dev banner (non-production)

### Assets
- Generated images stored in `attached_assets/` directory (hero background, portfolio screenshots, team photo)
- Accessed via `@assets` path alias