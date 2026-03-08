/**
 * STAGE 6 — ENHANCE
 *
 * SEO, schema, and quality enhancement pass:
 *  - Keyword optimisation (natural density, LSI keywords)
 *  - Final meta title and description
 *  - FAQ schema structured data annotations
 *  - Article schema metadata
 *  - Internal links woven into content at exact positions
 *  - External links added with proper anchor text
 *  - Content quality audit and gap-filling
 *  - Infographic data enrichment (actual numbers from research)
 *  - Readability check and final polish
 */

import { streamOpus } from '../utils/claude.js';

const SYSTEM = `You are a senior SEO specialist and content editor for Blue Flame Gas Services in Worcester, UK.

You optimise content to rank on page 1 of Google for local UK heating searches while remaining completely natural and helpful to real readers. You:
- Use UK English spelling
- Know Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals
- Understand local SEO signals for Worcester/Worcestershire
- Write meta titles under 60 chars and meta descriptions under 160 chars
- Know how to earn featured snippets (concise definitions, ordered steps, comparison tables)
- Place keywords naturally — never stuff them
- Ensure every external link is to a legitimate authoritative source`;

export async function runEnhance(state) {
  const { topic, plan, research, humanized } = state;

  console.log('\n╔════════════════════════════════════════╗');
  console.log('║  STAGE 6 — ENHANCE                    ║');
  console.log('╚════════════════════════════════════════╝');

  // Step 1: SEO audit + finalise meta
  console.log('  Running SEO audit...');
  const seoResult = await streamOpus(
    [
      {
        role: 'user',
        content: `Conduct a comprehensive SEO audit and enhancement of this article content.

ARTICLE TITLE: "${plan.title}"
PRIMARY KEYWORD: "${plan.primaryKeyword}"
SECONDARY KEYWORDS: ${plan.secondaryKeywords?.join(', ')}
TARGET AUDIENCE: Homeowners and landlords in Worcester, Worcestershire

CURRENT CONTENT SUMMARY:
- Intro: ${humanized.intro?.slice(0, 300)}...
- Sections: ${humanized.sections?.map((s) => s.h2).join(' | ')}
- FAQs: ${humanized.faqs?.map((f) => f.q).join(' | ')}

RESEARCH INSIGHTS:
${research.keyInsights}

EXTERNAL SOURCES AVAILABLE:
${research.externalSources?.slice(0, 5).map((s) => `- ${s.organisation}: ${s.url}`).join('\n')}

INTERNAL PAGES AVAILABLE:
- /services (Boiler quotes, booking)
- /gas-safety-guide (Landlord CP12)
- /blog/* (Related articles)

BACKLINK OPPORTUNITIES:
${research.backlinkOpportunities?.slice(0, 5).map((b) => `- ${b.site}: ${b.strategy}`).join('\n')}

---

Provide a full SEO enhancement plan as JSON:

{
  "metaTitle": "Final SEO page title (under 60 chars, keyword near front)",
  "metaDescription": "Final meta description (120-155 chars, includes keyword and CTA)",
  "seoScore": 85,
  "primaryKeywordDensity": "Recommended: X uses in ~Y words = Z%",
  "featuredSnippetOpportunities": [
    "The section H2 that could earn a featured snippet and how to format it"
  ],
  "internalLinkPlan": [
    {
      "anchorText": "exact anchor text to use",
      "to": "/internal/path",
      "placementHint": "In which section and context to place this link"
    }
  ],
  "externalLinkPlan": [
    {
      "anchorText": "exact anchor text",
      "href": "https://url.com",
      "placementHint": "In which section"
    }
  ],
  "contentGaps": [
    "Missing topic or angle that should be added"
  ],
  "backlinkActions": [
    "Specific post-publish backlink action"
  ],
  "schemaMarkup": {
    "articleType": "Article|HowTo|Guide",
    "faqCount": 8,
    "howToSteps": ["Step 1", "Step 2"]
  },
  "seoNotes": "Final SEO observations and priorities"
}`,
      },
    ],
    { system: SYSTEM, maxTokens: 4000, effort: 'high' },
  );

  let seoAudit;
  try {
    const jsonMatch = seoResult.text.match(/\{[\s\S]*\}/);
    seoAudit = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
  } catch {
    seoAudit = { metaTitle: plan.metaTitle, metaDescription: plan.metaDescription };
  }

  // Step 2: Enrich infographic data with real research numbers
  console.log('  Enriching infographics with research data...');
  const enrichedInfographics = await enrichInfographics(plan.infographicConcepts || [], research);

  // Step 3: Weave internal links into section content
  console.log('  Weaving internal and external links...');
  const enhancedSections = humanized.sections.map((section, i) => {
    const sectionLinks = seoAudit.internalLinkPlan?.filter((l) =>
      l.placementHint?.toLowerCase().includes(section.h2.toLowerCase().slice(0, 15)),
    );
    const sectionExtLinks = seoAudit.externalLinkPlan?.filter((l) =>
      l.placementHint?.toLowerCase().includes(section.h2.toLowerCase().slice(0, 15)),
    );

    return {
      ...section,
      internalLinks: [
        ...(section.internalLinks || []),
        ...(sectionLinks?.map((l) => ({ text: l.anchorText, to: l.to })) || []),
      ],
      externalLinks: [
        ...(section.externalLinks || []),
        ...(sectionExtLinks?.map((l) => ({ text: l.anchorText, href: l.href })) || []),
      ],
    };
  });

  // Step 4: Final content quality check and gap-fill
  if (seoAudit.contentGaps?.length > 0) {
    console.log(`  Filling ${seoAudit.contentGaps.length} content gaps...`);
    const gapResult = await streamOpus(
      [
        {
          role: 'user',
          content: `The following content gaps were identified in this article about "${plan.title}":

${seoAudit.contentGaps.map((g, i) => `${i + 1}. ${g}`).join('\n')}

For each gap, write a concise addition (2-4 sentences) that could be added to the most relevant existing section or as a new short section. UK English. Be specific with facts.

Return as JSON:
[
  {
    "gap": "The identified gap",
    "addTo": "Section H2 to add this to",
    "content": "The additional content to add"
  }
]`,
        },
      ],
      { system: SYSTEM, maxTokens: 2000, thinking: false },
    );

    let gapFills = [];
    try {
      const jsonMatch = gapResult.text.match(/\[[\s\S]*\]/);
      gapFills = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } catch {
      gapFills = [];
    }

    // Merge gap fills into sections
    for (const fill of gapFills) {
      const targetIdx = enhancedSections.findIndex((s) =>
        s.h2?.toLowerCase().includes(fill.addTo?.toLowerCase().slice(0, 15) || ''),
      );
      if (targetIdx >= 0 && fill.content) {
        enhancedSections[targetIdx].content =
          (enhancedSections[targetIdx].content || '') + '\n\n' + fill.content;
      }
    }
  }

  const enhanced = {
    metaTitle: seoAudit.metaTitle || plan.metaTitle,
    metaDescription: seoAudit.metaDescription || plan.metaDescription,
    seoAudit,
    infographics: enrichedInfographics,
    finalContent: {
      intro: humanized.intro,
      sections: enhancedSections,
      faqs: humanized.faqs,
      infographics: enrichedInfographics,
    },
  };

  console.log(`  ✓ Enhance complete:`);
  console.log(`    - Meta title: "${enhanced.metaTitle}"`);
  console.log(`    - ${enrichedInfographics.length} infographics enriched`);
  console.log(`    - ${seoAudit.internalLinkPlan?.length || 0} internal links placed`);
  console.log(`    - ${seoAudit.externalLinkPlan?.length || 0} external links placed`);
  console.log(`    - ${seoAudit.contentGaps?.length || 0} content gaps filled`);

  return { ...state, enhanced };
}

/**
 * Enrich infographic concepts with real data from research.
 */
async function enrichInfographics(concepts, research) {
  if (!concepts || concepts.length === 0) return [];

  const result = await streamOpus(
    [
      {
        role: 'user',
        content: `Enrich these infographic concepts with real, specific data from the research provided.

INFOGRAPHIC CONCEPTS:
${JSON.stringify(concepts, null, 2)}

RESEARCH DATA:
- Key facts: ${research.keyFacts?.slice(0, 8).join(' | ')}
- Statistics: ${research.statistics?.slice(0, 6).map((s) => `${s.stat} (${s.source})`).join(' | ')}
- Local data: ${JSON.stringify(research.localData)}

For each infographic, provide:
- Real numbers for bar charts / pie charts
- Actual steps for process flows (not generic placeholders)
- Real comparison points for comparison charts
- A credible source for the data

Return the SAME array structure but with all placeholder values replaced with real, specific data.
Ensure values are realistic UK figures in £ or percentages.

Return as JSON array of enriched infographic objects.`,
      },
    ],
    { system: SYSTEM, maxTokens: 3000, thinking: false },
  );

  try {
    const jsonMatch = result.text.match(/\[[\s\S]*\]/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : concepts;
  } catch {
    return concepts;
  }
}
