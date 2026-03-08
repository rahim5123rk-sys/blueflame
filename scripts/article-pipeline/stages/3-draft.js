/**
 * STAGE 3 — DRAFT
 *
 * Creates the full article draft section-by-section following the plan.
 * Each section is generated with the full context of:
 *  - The research data
 *  - The plan's content direction for that section
 *  - Facts, statistics, and local data to weave in
 *
 * Output: state.draft — a structured draft with all sections written.
 */

import { streamOpus } from '../utils/claude.js';

const SYSTEM = `You are a senior content writer for Blue Flame Gas Services, a Gas Safe registered heating engineering company in Worcester, UK.

You write for homeowners and landlords in Worcestershire who need real, practical heating advice. Your writing is:
- Authoritative but accessible (expert knowledge explained plainly)
- UK English throughout (colour, realise, licence, specialise, organise)
- Local — referencing Worcester, Worcestershire, Midlands where relevant
- Honest — not salesy, but naturally includes Blue Flame's services
- Detailed — every claim backed by fact, every process fully explained
- 2026 current — all prices and regulations up to date

You NEVER write fluff or filler. Every sentence earns its place.`;

export async function runDraft(state) {
  const { topic, research, plan } = state;

  console.log('\n╔════════════════════════════════════════╗');
  console.log('║  STAGE 3 — DRAFT                      ║');
  console.log('╚════════════════════════════════════════╝');

  const draftSections = [];

  // Write intro paragraph
  console.log('  Writing intro...');
  const introResult = await streamOpus(
    [
      {
        role: 'user',
        content: `Write an engaging 80-120 word opening paragraph for an article titled:
"${plan.title}"

The intro should:
- Hook the reader immediately with the core problem or question
- Establish that this article fully answers their question
- Reference Worcester/Worcestershire homeowners
- NOT start with "Are you" or "Have you ever" or "In this article"
- NOT be salesy
- Be direct and confident

Key facts to weave in naturally:
${research.keyFacts?.slice(0, 3).join('\n')}

Return ONLY the paragraph text, no quotes, no heading.`,
      },
    ],
    { system: SYSTEM, maxTokens: 500, thinking: false },
  );

  const intro = introResult.text.trim();

  // Write each section
  for (let i = 0; i < plan.outline.length; i++) {
    const section = plan.outline[i];
    console.log(`  Writing section ${i + 1}/${plan.outline.length}: "${section.h2}"...`);

    const subsectionDirections =
      section.subsections?.map((s) => `  - H3: "${s.h3}"\n    Direction: ${s.contentDirection}`).join('\n') || '';

    const relevantFacts = research.keyFacts
      ?.slice(i * 2, i * 2 + 4)
      .join('\n');

    const relevantStats = research.statistics
      ?.slice(i, i + 2)
      .map((s) => `${s.stat} (${s.source}, ${s.year})`)
      .join('\n');

    const sectionResult = await streamOpus(
      [
        {
          role: 'user',
          content: `Write the content for this article section. Aim for ~${section.wordTarget || 300} words total.

ARTICLE TITLE: "${plan.title}"
PRIMARY KEYWORD: "${plan.primaryKeyword}"

SECTION H2: "${section.h2}"
CONTENT DIRECTION: ${section.contentDirection}

${subsectionDirections ? `SUBSECTIONS TO INCLUDE:\n${subsectionDirections}` : ''}

RELEVANT FACTS TO INCLUDE:
${relevantFacts || ''}

${relevantStats ? `STATISTICS TO CITE:\n${relevantStats}` : ''}

${section.mediaItems?.length ? `MEDIA MARKERS (use placeholder text like [INFOGRAPHIC: description] or [VIDEO: description] or [SCREENSHOT: url]):
${section.mediaItems.map((m) => `- [${m.type.toUpperCase()}: ${m.description}]`).join('\n')}` : ''}

${research.localData?.worcesterContext ? `WORCESTER LOCAL CONTEXT: ${research.localData.worcesterContext}` : ''}

WRITING RULES:
- Use UK English spelling
- Be specific with numbers, prices (in £), timelines
- Write H3 headings as plain text prefixed with "### "
- Every H3 must have substantive content (not just 1-2 lines)
- Include the section keyword naturally, not forced
- End with a smooth transition or summary sentence
- Do NOT include the H2 heading (it will be added separately)
- Do NOT add a conclusion or CTA at the end of each section

Return ONLY the section content (with ### subheadings if needed), no extra formatting or JSON.`,
        },
      ],
      { system: SYSTEM, maxTokens: 2000, thinking: false },
    );

    // Parse subsections from the draft text
    const rawContent = sectionResult.text.trim();
    const { mainContent, subsections } = parseSubsections(rawContent);

    draftSections.push({
      h2: section.h2,
      content: mainContent,
      subsections,
      mediaItems: section.mediaItems || [],
      internalLinks: section.internalLinks || [],
      externalLinks: section.externalLinks || [],
    });
  }

  // Write FAQ answers
  console.log('  Writing FAQ answers...');
  const faqResult = await streamOpus(
    [
      {
        role: 'user',
        content: `Write concise, accurate answers (2-4 sentences each) for these FAQ questions about "${plan.title}".
Use UK English. Be specific with facts and prices (£). Reference Worcester/Worcestershire where natural.

FAQ Questions:
${plan.faqQuestions?.map((q, i) => `${i + 1}. ${q}`).join('\n')}

Relevant facts to draw from:
${research.keyFacts?.join('\n')}

Return as JSON array:
[
  { "q": "Question?", "a": "Answer text..." },
  ...
]`,
      },
    ],
    { system: SYSTEM, maxTokens: 3000, thinking: false },
  );

  let faqs = [];
  try {
    const jsonMatch = faqResult.text.match(/\[[\s\S]*\]/);
    faqs = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
  } catch {
    faqs = plan.faqQuestions?.map((q) => ({ q, a: 'Answer pending.' })) || [];
  }

  const draft = {
    intro,
    sections: draftSections,
    faqs,
  };

  const wordCount = [intro, ...draftSections.map((s) => s.content + (s.subsections?.map((sub) => sub.content).join(' ') || ''))].join(' ').split(/\s+/).length;

  console.log(`  ✓ Draft complete:`);
  console.log(`    - ~${wordCount} words`);
  console.log(`    - ${draftSections.length} sections`);
  console.log(`    - ${faqs.length} FAQ answers`);

  return { ...state, draft };
}

/**
 * Parse a raw section text that may contain ### subheadings
 * into { mainContent, subsections[] }
 */
function parseSubsections(text) {
  const lines = text.split('\n');
  const subsections = [];
  let currentH3 = null;
  let currentContent = [];
  const mainLines = [];
  let inSubsection = false;

  for (const line of lines) {
    if (line.startsWith('### ')) {
      if (currentH3 !== null) {
        subsections.push({ h3: currentH3, content: currentContent.join('\n').trim() });
        currentContent = [];
      }
      currentH3 = line.replace('### ', '').trim();
      inSubsection = true;
    } else if (inSubsection) {
      currentContent.push(line);
    } else {
      mainLines.push(line);
    }
  }

  if (currentH3 !== null) {
    subsections.push({ h3: currentH3, content: currentContent.join('\n').trim() });
  }

  return {
    mainContent: mainLines.join('\n').trim(),
    subsections,
  };
}
