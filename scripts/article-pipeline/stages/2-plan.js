/**
 * STAGE 2 — PLAN
 *
 * Uses the Stage 1 research to create a comprehensive article blueprint:
 *  - SEO-optimised title, excerpt, meta
 *  - Full H2/H3 outline with content direction per section
 *  - Infographic concepts (bar charts, process flows, comparisons, pie charts)
 *  - FAQ questions (8–12)
 *  - Internal link map (to existing Blue Flame pages)
 *  - External link plan
 *  - Related articles selection
 *  - YouTube placement plan
 *  - Screenshot placement plan
 *  - Estimated read time
 */

import { streamOpus } from '../utils/claude.js';

// Existing Blue Flame pages that can be internally linked
const INTERNAL_PAGES = [
  { path: '/services', title: 'Services & Prices', keywords: ['service', 'book', 'quote', 'price', 'cost'] },
  { path: '/gas-safety-guide', title: 'Landlord Gas Safety Guide', keywords: ['landlord', 'gas safety', 'CP12', 'certificate'] },
  { path: '/blog/boiler-cost-worcester', title: 'Boiler Cost Guide', keywords: ['boiler cost', 'boiler price', 'new boiler'] },
  { path: '/blog/signs-boiler-needs-replacing', title: '7 Signs Your Boiler Needs Replacing', keywords: ['replacing', 'old boiler', 'breakdown', 'failing'] },
  { path: '/blog/carbon-monoxide-safety', title: 'Carbon Monoxide Safety', keywords: ['carbon monoxide', 'CO alarm', 'gas leak'] },
  { path: '/blog/worcester-bosch-vs-ideal-boilers', title: 'Worcester Bosch vs Ideal', keywords: ['worcester bosch', 'ideal boiler', 'brand', 'compare'] },
  { path: '/blog/how-to-bleed-a-radiator', title: 'How to Bleed a Radiator', keywords: ['bleed', 'radiator', 'cold spot'] },
  { path: '/blog/how-to-repressurise-a-boiler', title: 'How to Repressurise a Boiler', keywords: ['pressure', 'repressurise', 'low pressure'] },
  { path: '/blog/what-is-a-power-flush', title: 'What Is a Power Flush', keywords: ['power flush', 'sludge', 'system clean'] },
  { path: '/blog/annual-boiler-service-worcester', title: 'Annual Boiler Service', keywords: ['service', 'annual', 'boiler check'] },
  { path: '/blog/combi-vs-system-boiler', title: 'Combi vs System Boiler', keywords: ['combi', 'system boiler', 'boiler type'] },
  { path: '/blog/boiler-losing-pressure', title: 'Boiler Losing Pressure', keywords: ['pressure', 'losing pressure', 'dropping'] },
  { path: '/blog/radiator-not-heating-up', title: 'Radiator Not Heating', keywords: ['radiator', 'cold', 'not heating'] },
  { path: '/blog/smart-thermostat-guide', title: 'Smart Thermostat Guide', keywords: ['thermostat', 'hive', 'nest', 'smart', 'tado'] },
  { path: '/blog/frozen-condensate-pipe', title: 'Frozen Condensate Pipe', keywords: ['condensate', 'frozen', 'winter'] },
  { path: '/blog/central-heating-noises', title: 'Central Heating Noises', keywords: ['noise', 'banging', 'gurgling', 'kettling'] },
];

const CATEGORY_OPTIONS = [
  'Boiler Installation', 'Boiler Advice', 'Boiler Troubleshooting', 'Boiler Comparison',
  'Boiler Servicing', 'Gas Safety', 'DIY Heating Tips', 'Radiator Advice',
  'Energy Saving', 'Emergency Advice', 'Heat Pumps', 'Smart Home', 'Landlord Guide',
];

const SYSTEM = `You are a senior SEO content strategist for Blue Flame Gas Services, a Gas Safe registered heating company in Worcester, UK.

Your job is to create a detailed, immaculate article blueprint that will guide the writing of a world-class piece of content that:
- Ranks on page 1 of Google for Worcester/Worcestershire heating searches
- Comprehensively answers every question a homeowner could have
- Naturally includes videos, infographics, screenshots, and rich media
- Links intelligently to authoritative external sources and internal Blue Flame pages
- Includes structured data opportunities (FAQ schema, HowTo schema)
- Builds topical authority for Blue Flame's website

ALWAYS think like an expert Gas Safe engineer writing for real homeowners, not like a marketer.
ALWAYS use UK English spelling (realise, colour, licence, specialise, etc.)
ALWAYS price things in British pounds (£)
ALWAYS reference Worcester and Worcestershire specifically`;

export async function runPlan(state) {
  const { topic, research } = state;

  console.log('\n╔════════════════════════════════════════╗');
  console.log('║  STAGE 2 — PLAN                       ║');
  console.log('╚════════════════════════════════════════╝');

  const internalPagesStr = INTERNAL_PAGES.map(
    (p) => `  - "${p.path}" → "${p.title}" (keywords: ${p.keywords.join(', ')})`,
  ).join('\n');

  const researchSummary = JSON.stringify(
    {
      keyFacts: research.keyFacts?.slice(0, 10),
      statistics: research.statistics?.slice(0, 8),
      commonQuestions: research.commonQuestions?.slice(0, 12),
      competitorGaps: research.competitorGaps?.slice(0, 8),
      youtubeVideos: research.youtubeVideos?.slice(0, 5),
      externalSources: research.externalSources?.slice(0, 6),
      screenshotTargets: research.screenshotTargets?.slice(0, 5),
      keyInsights: research.keyInsights,
    },
    null,
    2,
  );

  const prompt = `Create a comprehensive article plan for the following topic, using the research data provided.

TOPIC: "${topic}"

RESEARCH DATA:
${researchSummary}

AVAILABLE INTERNAL PAGES TO LINK:
${internalPagesStr}

AVAILABLE CATEGORIES: ${CATEGORY_OPTIONS.join(', ')}

---

Create the most comprehensive, immaculate article blueprint possible. Think about what the PERFECT article on this topic would look like — one that answers every question, provides real value, earns featured snippets, and keeps readers engaged.

The article should:
- Be 2,500–4,000 words (substantive, not padded)
- Have 6–10 major H2 sections, each with 1–3 H3 subsections
- Include at least 4 rich media embeds (videos, infographics, screenshots)
- Answer every question from the research (Common Questions + Competitor Gaps)
- Have 8–12 FAQ questions covering long-tail search queries
- Include a local Worcester/Worcestershire angle in multiple sections
- Have a clear conversion goal (get quote, call, or book service)

Return ONLY valid JSON in this exact structure:

{
  "slug": "url-safe-slug-for-the-article",
  "componentName": "PascalCaseComponentName",
  "title": "SEO-optimised article title (50-60 chars)",
  "excerpt": "Compelling meta description / excerpt (140-160 chars)",
  "metaTitle": "Full SEO page title with | Blue Flame at end (under 60 chars)",
  "metaDescription": "Full SEO meta description (under 160 chars)",
  "category": "One of the AVAILABLE CATEGORIES",
  "date": "${new Date().toISOString().slice(0, 10)}",
  "readTime": "X min read",
  "primaryKeyword": "main target keyword",
  "secondaryKeywords": ["keyword2", "keyword3", "keyword4"],
  "outline": [
    {
      "h2": "Section heading (contains keyword naturally)",
      "contentDirection": "Detailed description of what this section should cover, specific facts to include, angles to take",
      "wordTarget": 300,
      "subsections": [
        {
          "h3": "Subsection heading",
          "contentDirection": "What to cover in this subsection",
          "wordTarget": 150
        }
      ],
      "mediaItems": [
        {
          "type": "infographic|youtube|screenshot|table|callout|warning|checklist|external-links",
          "description": "Specific description of what this media item should contain or show"
        }
      ],
      "internalLinks": [
        { "text": "anchor text", "to": "/internal/path", "context": "where in the section to place it" }
      ],
      "externalLinks": [
        { "text": "anchor text", "href": "https://external-url.com", "context": "context for the link" }
      ]
    }
  ],
  "infographicConcepts": [
    {
      "type": "bar-chart|pie-chart|process-flow|comparison|generic",
      "title": "Infographic title",
      "description": "What this visualisation shows",
      "data": [
        { "label": "Label", "value": 42 }
      ],
      "labels": ["Left label", "Right label"],
      "steps": ["Step 1", "Step 2"],
      "source": "Data source name"
    }
  ],
  "youtubeVideos": ${JSON.stringify(research.youtubeVideos?.slice(0, 4) || [])},
  "screenshotTargets": ${JSON.stringify(research.screenshotTargets?.slice(0, 4) || [])},
  "faqQuestions": [
    "Question 1?",
    "Question 2?"
  ],
  "relatedArticles": [
    {
      "slug": "existing-blog-slug",
      "title": "Article title",
      "category": "Category name",
      "color": "blue|green|orange|red|purple|teal|amber|indigo|emerald|rose"
    }
  ],
  "externalLinksPool": [
    {
      "text": "Anchor text",
      "href": "https://url.com",
      "context": "Which section this supports"
    }
  ],
  "backlinkStrategy": [
    "Specific backlink action to take after publishing"
  ],
  "conversionGoal": "primary-cta-type (quote|call|service-page)",
  "seoNotes": "Key SEO observations and optimisation priorities for this article"
}`;

  const result = await streamOpus(
    [{ role: 'user', content: prompt }],
    { system: SYSTEM, maxTokens: 16000, effort: 'max' },
  );

  let plan;
  try {
    const jsonMatch = result.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON in plan response');
    plan = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.warn(`  [plan] JSON parse failed: ${err.message}`);
    // Build a minimal fallback plan
    plan = {
      slug: topic.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      componentName: toPascalCase(topic),
      title: topic,
      excerpt: `Expert guide to ${topic} for Worcester homeowners.`,
      metaTitle: `${topic} | Blue Flame Worcester`,
      metaDescription: `Expert guide to ${topic} for homeowners in Worcester and Worcestershire.`,
      category: 'Boiler Advice',
      date: new Date().toISOString().slice(0, 10),
      readTime: '8 min read',
      primaryKeyword: topic,
      secondaryKeywords: [],
      outline: [],
      infographicConcepts: [],
      youtubeVideos: research.youtubeVideos || [],
      screenshotTargets: research.screenshotTargets || [],
      faqQuestions: research.commonQuestions?.slice(0, 8) || [],
      relatedArticles: [],
      externalLinksPool: [],
      backlinkStrategy: [],
    };
  }

  // Merge YouTube videos from research if plan has none
  if (!plan.youtubeVideos || plan.youtubeVideos.length === 0) {
    plan.youtubeVideos = research.youtubeVideos || [];
  }

  console.log(`  ✓ Plan complete:`);
  console.log(`    - Title: "${plan.title}"`);
  console.log(`    - Slug: ${plan.slug}`);
  console.log(`    - ${plan.outline?.length || 0} H2 sections`);
  console.log(`    - ${plan.infographicConcepts?.length || 0} infographics planned`);
  console.log(`    - ${plan.faqQuestions?.length || 0} FAQ questions`);
  console.log(`    - ${plan.youtubeVideos?.length || 0} YouTube embeds`);

  return { ...state, plan };
}

function toPascalCase(str) {
  return str
    .split(/[\s-_]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}
