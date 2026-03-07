# SEO Audit — Blue Flame Gas Services
**Site:** https://www.blueflameworcester.com
**Audited:** 2026-03-07
**Stack:** React 19 SPA (Vite + Tailwind) hosted on Netlify

---

## Summary Scores

| Aspect | Score |
|---|---|
| Title Tags | 9/10 |
| Meta Descriptions | 8/10 |
| Structured Data / JSON-LD | 9/10 |
| Open Graph & Social Meta | 8/10 |
| Analytics & Tracking | 9/10 |
| Mobile Friendliness | 8/10 |
| Local SEO | 8/10 |
| Image Optimisation | 7/10 |
| Robots.txt | 7/10 |
| Keyword Targeting | 7/10 |
| Sitemap | 5/10 |
| Page Speed / Core Web Vitals | 5/10 |
| Crawlability (SPA / JS rendering) | 4/10 |
| URL Structure | 3/10 |
| Canonical URLs | 3/10 |
| Internal Linking | 3/10 |
| Content Depth & Blog | 2/10 |
| Review Volume in Schema | 2/10 |

**Overall SEO Score: 6/10**

---

## Detailed Ratings

### 1. Title Tags — 9/10
**What's good:**
- Homepage title is well-crafted: `Blue Flame | Gas Safe Engineers in Worcester | Boiler Servicing & Repairs`
- Includes brand, location, and primary services — exactly what a local business needs
- Dynamic per-page titles update correctly on navigation (Services, About, Reviews, Contact)
- Titles are concise and within the ~60-65 character sweet spot

**Issues:**
- `&` in title (`Boiler Servicing & Repairs`) should be encoded as `&amp;` in HTML but browsers handle this fine
- Minor: no year or price hook in sub-page titles

---

### 2. Meta Descriptions — 8/10
**What's good:**
- Homepage description hits ~155 characters — near ideal length
- Includes a clear CTA with the phone number (`Call 07480 561 846`)
- Per-page descriptions are unique and relevant
- Naturally incorporates keywords without stuffing

**Issues:**
- Services page description starts with "Boiler servicing from £60" — good, but could lead with a stronger user-benefit hook
- Reviews page description is generic; no specific mention of review count or platform (Google)
- The `meta[name="keywords"]` tag is included but ignored by all major search engines — not harmful, just redundant

---

### 3. Structured Data / JSON-LD — 9/10
**What's good:**
- Uses dual `@type: ["HVACBusiness", "LocalBusiness"]` — correct and specific
- Full address, geo coordinates, telephone, URL, and logo all present
- `areaServed` is comprehensive: 7 named cities plus Worcestershire and West Midlands
- `hasOfferCatalog` with named services and GBP pricing — strong for rich results
- `openingHoursSpecification` covers all 7 days (24/7 implied)
- `aggregateRating` present with `bestRating`/`worstRating`/`reviewCount`
- Payment and currency fields populated

**Issues:**
- `reviewCount: "6"` is very low — Google may suppress star ratings in SERPs below ~10 reviews
- `postalCode: "WR1"` is a district code, not a full postcode — partially inaccurate
- No `@type: FAQPage` schema even though the homepage has 4 FAQs — missed opportunity for FAQ rich results
- No `BreadcrumbList` schema

---

### 4. Open Graph & Social Meta — 8/10
**What's good:**
- Full OG set: `og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`, `og:url`
- Twitter Card is `summary_large_image` — correct for a business site
- Twitter `image:alt` provided (good for accessibility)
- `og:locale` correctly set to `en_GB`

**Issues:**
- OG image URL contains a raw UUID filename (`6055dc03-8124-4f67-9ac4-f1933b1bdd44.JPG`) — not descriptive, and `.JPG` not `.webp`; ideally use a purpose-built 1200×630 optimised image
- No `twitter:site` handle (fine if business has no Twitter account, but worth adding if they do)
- `og:url` is static in the HTML — does not update when navigating between pages. Only title/description update dynamically in App.tsx

---

### 5. Analytics & Tracking — 9/10
**What's good:**
- GA4 properly loaded with `async` attribute — non-blocking
- `anonymize_ip: true` set — GDPR-conscious
- Per-page `page_view` events fired on SPA navigation with correct `page_path`, `page_title`, and `page_location`
- Preconnect to `googletagmanager.com` in `<head>` reduces connection latency

**Issues:**
- No cookie consent banner visible in the codebase — GA4 may still fire before user consent (potential GDPR issue in UK/EU)
- GA4 script is loaded in `<head>` which could marginally delay initial parse; moving below the fold or using GTM would be more flexible

---

### 6. Mobile Friendliness — 8/10
**What's good:**
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` correctly set
- Tailwind CSS used throughout — utility-first responsive design
- `theme-color` meta set (`#005C9E`) for browser chrome on mobile

**Issues:**
- No `apple-touch-icon` defined — iPhones show a blank/default icon when site is added to home screen
- No `manifest.json` — not PWA-capable; missed opportunity for "Add to Home Screen" prompt
- Cannot verify touch target sizes or text sizes without runtime testing

---

### 7. Local SEO — 8/10
**What's good:**
- Schema includes full local business data (address, geo, phone, area served)
- Service area clearly defined across both Worcestershire and West Midlands
- Business name, phone, and location consistently used across title, description, and schema
- `HVACBusiness` type is the correct, specific category

**Issues:**
- No Google Business Profile verification visible or linked — GBP is the most important local ranking factor and is separate from on-page SEO
- NAP (Name, Address, Phone) consistency cannot be fully verified without checking GBP listing
- Only a partial postcode in schema (`WR1`) — ideally include full postcode

---

### 8. Image Optimisation — 7/10
**What's good:**
- All local images use `.webp` format — modern, compressed
- Hero image uses `fetchpriority="high"` and `<link rel="preload">` — reduces Largest Contentful Paint (LCP)
- Boiler model images and service images all webp

**Issues:**
- Hero image is loaded from **Unsplash** (`images.unsplash.com`) — external dependency adds DNS lookup latency and is outside your control (image could change or disappear)
- OG image is a `.JPG` not `.webp` and has no meaningful filename
- Favicon is `favicon.jpg` — should be `.ico` or `.png`; JPEG favicons can behave unexpectedly in some browsers
- Cannot confirm all `<img>` tags have descriptive `alt` attributes without reading every page component

---

### 9. Robots.txt — 7/10
**What's good:**
- Allows all crawlers to index the entire site (`Allow: /`)
- Correct `Sitemap` reference pointing to the XML sitemap URL

**Issues:**
- Extremely minimal — no `Disallow` rules to protect non-public paths (e.g. Netlify function endpoints at `/.netlify/`)
- No crawl-delay consideration (not critical but could be refined)
- A single `User-agent: *` rule is functional but basic

---

### 10. Keyword Targeting — 7/10
**What's good:**
- Strong local intent keywords used: `gas safe engineers Worcester`, `boiler service Worcester`, `CP12 Worcester`
- Keywords appear naturally in titles, descriptions, and schema
- Geographic targeting covers multiple relevant cities

**Issues:**
- No content targeting long-tail queries like "how often should I service my boiler" or "what is a CP12 certificate" — FAQs exist but are not optimised for featured snippets
- No FAQ schema to capture featured snippet / PAA (People Also Ask) positions
- West Midlands cities (Birmingham, Wolverhampton etc.) are listed in the frontend but **not** in the JSON-LD `areaServed` — inconsistency

---

### 11. Sitemap — 5/10
**What's good:**
- XML sitemap exists at `/sitemap.xml`
- Includes `lastmod`, `changefreq`, and `priority` for all URLs
- Referenced correctly in robots.txt

**Critical Issues:**
- **Hash-based URLs** (`#services`, `#about`, `#reviews`, `#contact`) are included — search engines treat everything after `#` as a fragment identifier and **do not index these as separate pages**. The sitemap effectively only helps Google discover the homepage
- The sitemap has 5 entries but only 1 is meaningful from a crawl perspective
- Should either switch to real URL paths or remove hash-fragment entries from the sitemap entirely

---

### 12. Page Speed / Core Web Vitals — 5/10
**What's good:**
- `vite-plugin-singlefile` bundles the app — reduces HTTP round trips
- Lazy loading implemented for page components (`React.lazy`)
- Preconnect hints for Google Fonts and GTM reduce connection overhead
- WebP images reduce payload size

**Issues:**
- `vite-plugin-singlefile` inlines **all JS and CSS into a single HTML file** — this prevents browser caching of individual assets between visits. Every return visit re-downloads everything
- Google Fonts loaded via `<link>` from external CDN — font file requests add render-blocking risk; self-hosting fonts would eliminate this
- Hero background image comes from **Unsplash** (external CDN) — adds DNS lookup + TLS handshake on first load
- No evidence of image lazy loading for below-the-fold images
- Cannot score LCP, FID/INP, or CLS without runtime Lighthouse testing

---

### 13. Crawlability (SPA / JS Rendering) — 4/10
**What's good:**
- Googlebot does execute JavaScript and can render React SPAs
- Per-page meta tags update correctly after JS hydration

**Issues:**
- Content only renders after JavaScript execution — Googlebot must render the page to see content, which is slower and less reliable than static HTML
- No Server-Side Rendering (SSR) or Static Site Generation (SSG) — all pages are JS-only
- Hash-based navigation means Googlebot sees all pages as the **same URL** — `blueflameworcester.com/#services` is not a separate crawlable page
- The Suspense fallback (`<div className="min-h-screen bg-white"></div>`) renders an empty white div — if Googlebot hits the page before JS loads it sees nothing
- No `<noscript>` fallback content

---

### 14. URL Structure — 3/10
**Critical Issue — hash routing:**
- All navigation uses hash fragments: `/#services`, `/#about`, `/#reviews`, `/#contact`
- Hash URLs are **not crawlable as separate pages** by search engines — they're treated as in-page anchors on the same document
- This means the site effectively has **one indexable URL** (the homepage) from Google's perspective
- Each service (Boiler Service, CP12, Emergency Repair) deserves its own indexable URL like `/services/boiler-service`

**Fix Required:** Migrate to proper path-based routing (`/services`, `/about`, `/contact`) using React Router's `BrowserRouter` with Netlify's `_redirects` catch-all already in place

---

### 15. Canonical URLs — 3/10
**Issues:**
- The static `<link rel="canonical">` in HTML correctly points to the homepage
- However, `App.tsx` dynamically updates the canonical to **hash-based paths** like `https://www.blueflameworcester.com#services` — search engines ignore the fragment portion of canonical URLs, making this update effectively useless
- Every page's canonical resolves to `https://www.blueflameworcester.com` which is technically correct for a SPA but means no per-page canonical signals
- Should be updated to use real paths when URL structure is fixed

---

### 16. Internal Linking — 3/10
**Issues:**
- Hash-based navigation means no traditional `<a href="/services">` links exist — all navigation is JavaScript-driven
- Search engines follow `<a>` tags with `href` attributes; JavaScript click handlers are less reliable for link equity passing
- No blog or content hub to create topical depth and internal linking opportunities
- Footer and header navigation use JS handlers rather than proper anchor tags with real hrefs

---

### 17. Content Depth & Blog — 2/10
**Issues:**
- No blog or content section exists — content marketing is the primary way to capture informational queries
- Existing pages are service/conversion focused with minimal word count
- No guides (e.g. "What is a CP12 Certificate?", "When should I replace my boiler?") to capture top-of-funnel searches
- FAQs on homepage are good but not structured with schema and not extensive enough
- Competitors with content hubs will consistently outrank on informational queries

---

### 18. Review Volume in Schema — 2/10
**Issues:**
- `aggregateRating.reviewCount: "6"` is extremely low
- Google generally requires **a minimum of ~10+ reviews** before displaying star ratings in SERPs
- Only 3 testimonials are hardcoded on the homepage — not linked to a live review platform
- No Google Reviews widget or live review feed integrated
- **Action needed:** Actively request Google reviews from every customer; aim for 50+ to unlock consistent SERP star ratings

---

## Top 5 Priority Fixes

1. **Switch to path-based routing** — Replace hash routing (`/#services`) with real paths (`/services`). This is the single highest-impact change; it unlocks proper per-page indexing. Netlify's `_redirects` already exists to handle SPA routing.

2. **Add FAQPage JSON-LD schema** — The homepage already has 4 FAQs. Adding FAQ schema costs 10 minutes and can win a featured snippet or PAA box — high-value SERP real estate for a local business.

3. **Self-host the hero image** — Move the Unsplash hero image into `/public/images/` as a WebP. Removes external dependency and improves LCP.

4. **Add apple-touch-icon and web manifest** — Quick win for mobile UX and PWA capability.

5. **Launch a Google review campaign** — Off-page but critical. With only 6 reviews in schema and 3 testimonials on-site, star ratings won't show in SERPs. Request reviews from every satisfied customer via a direct Google Review link.
