/**
 * STAGE 4 — WRITE
 *
 * Takes the draft and expands every section to maximum depth and detail.
 * This is where the article becomes truly comprehensive:
 *  - Every claim is supported with specific data
 *  - Every process step is fully explained
 *  - Local Worcester context is woven throughout
 *  - Tables, checklists, callouts, and warnings are added
 *  - External and internal links are mapped to exact anchor text
 *  - Rich media placements are finalised
 */

import { streamOpus } from '../utils/claude.js';

const SYSTEM = `You are an expert heating engineer and senior content writer for Blue Flame Gas Services in Worcester, UK.

You write deeply detailed, genuinely helpful content for homeowners and landlords. You:
- Know UK building regulations, Gas Safe requirements, and CORGI history inside-out
- Cite real UK organisations: Gas Safe Register, Energy Saving Trust, OFGEM, HHIC, Which?, Citizens Advice, MoneySavingExpert
- Price everything accurately in British pounds (£), including VAT where relevant
- Reference Worcester, Worcestershire, the Midlands, and nearby areas (Redditch, Kidderminster, Bromsgrove, Pershore, Malvern, Evesham, Droitwich)
- Write UK English exclusively
- Never pad — every sentence adds value

You produce content at the standard of BBC Good Food's recipe guides or Martin Lewis's MoneySavingExpert articles — thorough, clear, trustworthy.`;

export async function runWrite(state) {
  const { topic, research, plan, draft } = state;

  console.log('\n╔════════════════════════════════════════╗');
  console.log('║  STAGE 4 — WRITE                      ║');
  console.log('╚════════════════════════════════════════╝');

  const enrichedSections = [];

  for (let i = 0; i < draft.sections.length; i++) {
    const section = draft.sections[i];
    const planSection = plan.outline[i] || {};
    console.log(`  Enriching section ${i + 1}/${draft.sections.length}: "${section.h2}"...`);

    const prompt = `Expand and enrich this article section to maximum quality and depth.

ARTICLE: "${plan.title}"
PRIMARY KEYWORD: "${plan.primaryKeyword}"
SECTION: "${section.h2}"

CURRENT DRAFT CONTENT:
${section.content}

${section.subsections?.length ? `CURRENT SUBSECTIONS:\n${section.subsections.map((s) => `### ${s.h3}\n${s.content}`).join('\n\n')}` : ''}

CONTENT DIRECTION FROM PLAN:
${planSection.contentDirection || ''}

RELEVANT RESEARCH FACTS:
${research.keyFacts?.slice(i * 2, i * 2 + 5).join('\n') || ''}

RELEVANT STATISTICS:
${research.statistics?.slice(i, i + 3).map((s) => `${s.stat} (${s.source})`).join('\n') || ''}

WORCESTER LOCAL DATA:
${research.localData?.worcesterContext || ''}

YOUR TASK:
Produce an enriched version of this section that:
1. Expands every point with specific, actionable detail
2. Adds concrete UK examples, prices (in £), and timelines
3. Includes Worcester/Worcestershire references where natural
4. Determines the best format for the content:
   - Does it need a TABLE? (comparisons, pricing, specs)
   - Does it need a CHECKLIST? (steps, requirements, things to check)
   - Does it need a CALLOUT BOX? (tip, important fact, Blue Flame offer)
   - Does it need a WARNING BOX? (safety issue, regulation, danger)
   - Does it need EXTERNAL LINKS? (authoritative resources)
5. Ensures subsections are properly developed (not thin)
6. Keeps UK English throughout

Return a JSON object:
{
  "h2": "${section.h2}",
  "content": "Main section content (before any subsections). Write in full paragraphs. Newline between paragraphs.",
  "subsections": [
    {
      "h3": "Subsection heading",
      "content": "Detailed subsection content in full paragraphs.",
      "checklist": ["item 1", "item 2"] // optional — for step-by-step or requirement lists
    }
  ],
  "table": {
    "headers": ["Column 1", "Column 2", "Column 3"],
    "rows": [["row1col1", "row1col2", "row1col3"]]
  },
  "checklist": ["Step or item 1", "Step or item 2"],
  "callout": {
    "title": "Callout title",
    "text": "Callout content",
    "link": { "text": "Link text", "to": "/internal-path" }
  },
  "warning": {
    "title": "Warning title",
    "text": "Warning content"
  },
  "externalLinks": [
    { "text": "Anchor text", "href": "https://authoritative-url.com" }
  ]
}

Only include properties that are genuinely needed. Do NOT include table, checklist, callout, warning, or externalLinks if they don't improve the section.`;

    const result = await streamOpus(
      [{ role: 'user', content: prompt }],
      { system: SYSTEM, maxTokens: 4000, effort: 'high' },
    );

    let enrichedSection;
    try {
      const jsonMatch = result.text.match(/\{[\s\S]*\}/);
      enrichedSection = jsonMatch ? JSON.parse(jsonMatch[0]) : section;
    } catch {
      enrichedSection = section;
    }

    enrichedSections.push(enrichedSection);
  }

  // Re-enrich FAQs with more detail
  console.log('  Enriching FAQ answers...');
  const faqPrompt = `Expand these FAQ answers to be more detailed and specific (3-5 sentences each).
Include specific prices in £, regulations, and Worcester references where relevant. UK English throughout.

Current FAQs:
${JSON.stringify(draft.faqs, null, 2)}

Return as JSON array: [{ "q": "...", "a": "..." }]`;

  const faqResult = await streamOpus(
    [{ role: 'user', content: faqPrompt }],
    { system: SYSTEM, maxTokens: 4000, thinking: false },
  );

  let enrichedFaqs = draft.faqs;
  try {
    const jsonMatch = faqResult.text.match(/\[[\s\S]*\]/);
    enrichedFaqs = jsonMatch ? JSON.parse(jsonMatch[0]) : draft.faqs;
  } catch {
    enrichedFaqs = draft.faqs;
  }

  const written = {
    intro: draft.intro,
    sections: enrichedSections,
    faqs: enrichedFaqs,
  };

  const wordCount = JSON.stringify(written).split(/\s+/).length;
  console.log(`  ✓ Write stage complete:`);
  console.log(`    - ~${wordCount} approx words in JSON`);
  console.log(`    - ${enrichedSections.length} enriched sections`);
  console.log(`    - ${enrichedFaqs.length} detailed FAQs`);

  return { ...state, written };
}
