# AI Agent Instructions for Blue Flame

## Project Overview
**Blue Flame** is a service booking website for a boiler/HVAC company built with **React 19 + TypeScript + Vite**. Deployed on Netlify with serverless functions for email handling. The site features a complex **BoilerTool** component for guiding customers through boiler recommendations based on property type and requirements.

## Architecture & Data Flow

### Frontend Structure (SPA with Hash Routing)
- **App.tsx**: Root component managing page state via `currentPage` and `window.location.hash`
- **Layout.tsx**: Sticky header with mobile menu, footer with CTA button, navigation that updates hash
- **Pages**: Home, Services, About, Reviews, Contact, NotFound
- **Navigation Pattern**: Hash-based routing (`#home`, `#services`, etc.) - NOT React Router. Use `window.location.hash` to navigate.

### State Management Pattern
- Lift state to App.tsx for cross-page communication: `preselectedService` (Home → Services flow)
- Props drill down setters: `setCurrentPage`, `setPreselectedService`
- Example: Clicking a boiler on homepage sets `preselectedService`, navigates to Services, auto-scrolls to booking form

### Key Components
- **BoilerTool.tsx** (433 lines): Multi-step form with price calculation logic. Uses `framer-motion` for slide animations. Stores selections in local state (`data` object). Pricing adds £350 for vertical flue type.
- **Layout.tsx**: Glassmorphism header, mobile hamburger menu, floating phone button (`tel:07480561846`)

## Critical Patterns

### Styling
- **Tailwind CSS 4** (via `@tailwindcss/vite` plugin)
- Brand colors: `#005C9E` (blue), `#D9232D` (red/accent)
- Use utility classes, no CSS modules
- Example: Contact button uses `bg-[#D9232D] text-white px-6 py-2.5 rounded-full hover:bg-red-700`

### Forms & Email Integration
- Forms submit via `/functions/send-email` endpoint (Netlify function)
- Request body structure: `{ service_name, customer_name, customer_email, customer_phone, contact_preference, message }`
- Backend uses **Brevo API** for email (API key stored in Cloudflare/Netlify env vars, NOT in code)
- See [send-email.js](send-email.js) for template structure
- Email is sent to `rahim.5123.rk@gmail.com` with `replyTo` set to customer

### Animation & Motion
- Import from `framer-motion`: `motion`, `AnimatePresence`
- Standard transition: `{ type: "spring", stiffness: 260, damping: 25 }`
- Example: BoilerTool uses `slideVariants` for step transitions

### File Imports
- **Use explicit `.tsx` extensions** in all imports (see App.tsx comment). This avoids resolution issues.
- Example: `import Home from './pages/home.tsx'` (note lowercase `home.tsx`)

## Build & Deployment

### Commands
```bash
npm run dev          # Vite dev server, HMR enabled
npm run build        # tsc type check + vite build → dist/
npm run lint         # ESLint check
npm run preview      # Preview production build locally
```

### Deployment
- **Netlify** with Cloudflare Workers integration for email
- `netlify.toml`: build command is `npm run build`, publish dir is `dist`, functions are in `netlify/functions`
- `wrangler.toml`: Cloudflare config (empty function, uses env vars for BREVO_API_KEY)
- Build outputs to `dist/` and deploys automatically

## Development Workflow
1. Make changes in `src/`
2. Run `npm run dev` to test locally on `http://localhost:5173`
3. Test forms: Mock the fetch or use real Brevo API key in `.env` (create locally only)
4. Run `npm run build` before committing to catch TypeScript errors
5. Deploy via git push (Netlify auto-deploys main branch)

## Common Tasks

### Adding a New Service/Feature
1. Add to relevant page component in `src/pages/`
2. If it needs navigation: update `navLinks` in Layout.tsx
3. If it crosses pages (like boiler selection → services): use App.tsx state + setters

### Updating Boiler Recommendations
- Edit `recommendations` object in **BoilerTool.tsx** (useMemo at line ~75)
- Pricing formula: `calculatePrice(baseMin, baseMax)` adds £350 for vertical flue
- Update `BOILER_IMGS` object to reference images in `/public/images/boilers/`

### Styling Updates
- No CSS files for components—all Tailwind utilities inline
- Brand colors are hardcoded (e.g., `#005C9E`); consider creating CSS vars in future
- Test responsive behavior: mobile breakpoint is `md:` (768px)

### Email/Form Issues
- Check browser console for fetch errors
- Verify Brevo API key is set in Netlify dashboard (`Settings > Build & Deploy > Environment`)
- Test locally by mocking response or setting env var
- Email template is in `send-email.js` around line 30

## Type Safety
- TypeScript strict mode enabled (tsconfig.app.json)
- Use `type` keyword for interface definitions (e.g., `type ReactNode`)
- Props interfaces are defined at component top (see LayoutProps in Layout.tsx)
- Avoid `any` types; use `unknown` if needed

## Gotchas & Notes
- **Hash routing is fragile**: Ensure `window.location.hash` is set before component re-renders. App.tsx handles this in useEffect.
- **Image fallback**: Logo in Layout uses onError handler for missing images
- **Flue cost logic**: Only applies in BoilerTool pricing, NOT across the site
- **No database**: All data flows client-side → email function. No persistence beyond email records.
- **Mobile first**: Most users on mobile; test hamburger menu collapse logic when adding nav items
