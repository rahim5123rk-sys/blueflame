# Blue Flame Article Creation Pipeline

A 7-stage LLM-powered pipeline that generates immaculate, publish-ready blog articles for Blue Flame Gas Services — complete with infographics, YouTube embeds, screenshots, internal/external links, FAQ sections, and full SEO optimisation.

## Quick Start

```bash
cd scripts/article-pipeline
npm install
export ANTHROPIC_API_KEY="sk-ant-..."
node pipeline.js --topic "heat pump installation worcester"
```

The pipeline runs for ~15-30 minutes and produces:
- A complete TSX React component in `src/pages/blog/`
- Automatic updates to `src/pages/Blog.tsx` (BLOG_POSTS)
- Automatic updates to `src/App.tsx` (imports, routes, PAGE_META)
- Screenshots of referenced websites in `public/screenshots/`
- A backlink action checklist (`backlinks-[slug].md`)

---

## The 7 Stages

### Stage 1 — Research
Claude searches the web comprehensively using `web_search` and `web_fetch` tools.

Finds:
- UK statistics, regulations, official guidance
- Worcester/Worcestershire local data and pricing
- Relevant YouTube videos to embed
- Authority websites to link and screenshot
- Common homeowner questions (Reddit, Mumsnet, Google PAA)
- Backlink opportunities (directories, forums, local media)
- Competitor content gaps

### Stage 2 — Plan
Creates a detailed article blueprint:
- SEO-optimised title, slug, meta description
- Full H2/H3 outline with content direction per section
- Infographic concepts (bar charts, pie charts, process flows, comparisons)
- 8-12 FAQ questions targeting long-tail search queries
- Internal link map to existing Blue Flame pages
- External link plan with specific anchor text
- YouTube and screenshot placement plan
- Related articles selection

### Stage 3 — Draft
Writes the full article section-by-section:
- 80-120 word hook intro
- Each section follows the plan's content direction
- Weaves in research facts and statistics
- Places media markers (infographic, video, screenshot)
- Writes concise FAQ answers

### Stage 4 — Write
Expands everything to maximum depth:
- Every claim backed with specific UK data
- Concrete prices in £, timelines, regulations
- Tables for comparisons and pricing
- Checklists for processes and requirements
- Callout boxes for tips and Blue Flame offers
- Warning boxes for safety information
- External resource links

### Stage 5 — Humanize
Transforms AI-generated content into authentic prose:
- Reads like a real Gas Safe engineer wrote it
- Varied sentence rhythm (short + long)
- British idioms and contractions
- Realistic local anecdotes ("We visited a house in Droitwich where...")
- Removes all AI patterns ("delve into", "Furthermore", "It's worth noting")

### Stage 6 — Enhance
SEO and quality optimisation:
- Final meta title (under 60 chars) and meta description (under 160 chars)
- Natural keyword density check and adjustment
- Featured snippet opportunities identified
- Internal links woven to exact anchor text positions
- Content gap identification and fill
- Infographics enriched with real research data

### Stage 7 — Publish
Assembles everything into deployed files:
- Puppeteer screenshots of referenced websites (saved as WebP)
- Complete TSX React component generated
- Claude validates and polishes the JSX
- `src/pages/blog/[ComponentName].tsx` written
- `src/pages/Blog.tsx` BLOG_POSTS updated
- `src/App.tsx` imports, routes, and PAGE_META updated
- Backlink checklist saved

---

## What Each Article Includes

| Feature | Detail |
|---|---|
| **Word count** | 2,500–4,000 words |
| **Sections** | 6–10 H2 sections, each with H3 subsections |
| **Infographics** | 2–5 inline SVG components (bar charts, pie charts, process flows, comparisons) |
| **YouTube videos** | 2–4 embedded videos in proper 16:9 aspect-ratio containers |
| **Screenshots** | 2–4 Puppeteer screenshots of referenced websites |
| **Internal links** | 4–8 links to other Blue Flame pages |
| **External links** | 5–10 links to authority sources (Gas Safe Register, Energy Saving Trust, etc.) |
| **FAQ** | 8–12 questions with detailed answers |
| **Table of contents** | Clickable anchor links to all sections |
| **Tables** | Comparison/pricing tables where relevant |
| **Checklists** | Step-by-step lists with CheckCircle icons |
| **Callout boxes** | Tips, offers, important facts |
| **Warning boxes** | Safety alerts, regulatory requirements |
| **Related articles** | 3 links to existing Blue Flame blog posts |
| **CTA** | Blue Flame quote request + phone number |

---

## Usage Examples

```bash
# Generate a new article (all 7 stages)
node pipeline.js --topic "heat pump installation worcester 2026"

# Preview without writing files
node pipeline.js --topic "boiler grants ecoflex scheme" --dry-run

# Resume from a specific stage (useful after fixing an issue)
node pipeline.js --topic "gas safety checks landlord" --from-stage 4

# Resume from a saved state file
node pipeline.js --resume .pipeline-state/heat-pump-installation-worcester/state.json

# Run only one stage (for development/debugging)
node pipeline.js --topic "underfloor heating worcester" --only-stage 2

# Run from stage 5 to re-humanize already-written content
node pipeline.js --topic "smart thermostat benefits" --from-stage 5
```

---

## Article Topic Ideas

Great topics for Blue Flame Gas Services:

- "heat pump installation worcester cost 2026"
- "boiler upgrade scheme ECO4 grant worcestershire"
- "underfloor heating installation worcester"
- "gas boiler vs heat pump running costs uk"
- "worcester landlord boiler obligations 2026"
- "hydrogen boiler future uk homes"
- "best boiler brands uk reliability 2026"
- "gas safety inspection what to expect"
- "heating system for new build house worcester"
- "emergency boiler repair worcester 24 hour"
- "condensing boiler efficiency tips save money"
- "legionella risk assessment worcestershire landlords"

---

## File Structure

```
scripts/article-pipeline/
├── pipeline.js              # Main CLI orchestrator
├── package.json             # Dependencies
├── README.md                # This file
├── stages/
│   ├── 1-research.js        # Web search, YouTube, sources
│   ├── 2-plan.js            # Outline, infographics, FAQ
│   ├── 3-draft.js           # Full article draft
│   ├── 4-write.js           # Expand to max detail
│   ├── 5-humanize.js        # Natural voice pass
│   ├── 6-enhance.js         # SEO + quality pass
│   └── 7-publish.js         # TSX generation + file updates
└── utils/
    ├── claude.js             # Claude API (streaming, web search)
    ├── media.js              # Puppeteer screenshots + sharp optimisation
    ├── template.js           # TSX component generator with SVG infographics
    └── updater.js            # Blog.tsx + App.tsx auto-updater
```

---

## State Persistence

Every stage saves progress to `.pipeline-state/[slug]/state.json`. If the pipeline fails at any stage, you can resume without re-running earlier stages.

The state file contains everything: research data, plan, draft content, written sections, humanized text, and SEO enhancements.

---

## Dependencies

| Package | Purpose |
|---|---|
| `@anthropic-ai/sdk` | Claude Opus 4.6 API (adaptive thinking, web search) |
| `puppeteer` | Chromium browser for website screenshots |
| `sharp` | WebP image optimisation (optional, falls back gracefully) |

---

## Cost Estimate

Each article uses Claude Opus 4.6 across all 7 stages:
- Estimated input tokens: ~50,000–100,000
- Estimated output tokens: ~15,000–30,000
- Approximate cost: **£3–£8 per article** (at $5/1M input, $25/1M output)

The research stage uses web_search which has additional costs — see Anthropic's pricing page for current web tool rates.
