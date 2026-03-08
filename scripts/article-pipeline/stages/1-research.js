/**
 * STAGE 1 — RESEARCH
 *
 * Uses Claude Opus 4.6 with web_search + web_fetch tools to:
 *  - Gather authoritative UK statistics and facts on the topic
 *  - Find relevant YouTube videos to embed
 *  - Identify external authority sites to link and screenshot
 *  - Collect Worcester/Worcestershire local data
 *  - Discover competitor articles for content gap analysis
 *  - Find backlink opportunities (directories, forums, guides)
 */

import { researchWithWebSearch } from '../utils/claude.js';

const SYSTEM = `You are a senior content researcher for Blue Flame Gas Services, a Gas Safe registered heating engineer company based in Worcester, UK.

Your job is to deeply research a given topic so that an expert article can be written for homeowners and landlords in Worcestershire.

ALWAYS search for:
1. UK-specific facts, statistics, regulations (not US data)
2. Worcester/Worcestershire local context wherever relevant
3. Current 2026 prices in British pounds (£)
4. Gas Safe Register regulations and official guidance
5. Energy Saving Trust, Which?, MoneySavingExpert, Citizens Advice data
6. YouTube videos (search for relevant tutorials, explainer videos, or news segments)
7. Authoritative external websites worth linking to or screenshotting
8. Common homeowner questions on Reddit, forums, local Facebook groups
9. Seasonal or time-sensitive angles (if relevant)
10. Backlink opportunities: local directories, trade associations, forums

ALWAYS return well-structured JSON at the end.`;

export async function runResearch(state) {
  const { topic, slug } = state;

  console.log('\n╔════════════════════════════════════════╗');
  console.log('║  STAGE 1 — RESEARCH                   ║');
  console.log('╚════════════════════════════════════════╝');
  console.log(`  Topic: "${topic}"\n`);

  const prompt = `Research the following topic for a Blue Flame Gas Services blog article aimed at homeowners and landlords in Worcester, UK:

TOPIC: "${topic}"

Conduct comprehensive research across multiple searches. You must find:

## Required Research Areas

### 1. Core Facts & Statistics
- Key facts, statistics, and data relevant to this topic in the UK
- Current 2026 figures (prices, efficiency ratings, regulations)
- Government statistics or official body data (Energy Saving Trust, OFGEM, Gas Safe Register, HESA, ONS)
- Any relevant UK legislation or regulations

### 2. Local Worcester/Worcestershire Context
- Any local data, statistics, or specifics for Worcester area
- Local authority guidance or specific regulations
- Local pricing benchmarks

### 3. YouTube Videos
Search YouTube for 3-5 highly relevant videos on this topic. For each find:
- Video title
- Channel name
- YouTube video ID (the part after "watch?v=" in the URL)
- Why it's relevant

### 4. External Authority Websites to Reference & Screenshot
Find 5-8 authoritative websites that cover this topic:
- Government sites (.gov.uk)
- Industry bodies (Gas Safe Register, CORGI, HHIC, BEAMA)
- Consumer advice (Which?, Citizens Advice, MoneySavingExpert)
- Energy bodies (Energy Saving Trust, OFGEM)
- Trade associations (Heating & Hotwater Industry Council)
Include the exact URL and why it's worth referencing.

### 5. Competitor Content Analysis
Search for existing blog articles on this topic. What do they cover? What are they MISSING? What questions remain unanswered?

### 6. Common Homeowner Questions
Find real questions people ask about this topic on:
- Reddit (r/DIYUK, r/HousingUK, r/CasualUK)
- Mumsnet, Netmums
- Local Facebook groups
- Google People Also Ask
- Quora

### 7. Backlink Opportunities
Find 5+ websites where Blue Flame could earn a backlink by contributing to this topic:
- Local directories (Worcester businesses, Trustatrader, Checkatrade)
- Forum threads where we could add expert answers with a link
- Resource pages that link to related services
- Local media sites (Worcester News, Redditch Standard)

### 8. Seasonal/Trending Angles
Any current news, seasonal relevance, or trending concerns around this topic.

---

After all research, respond with ONLY a valid JSON object in this exact structure:

{
  "keyFacts": [
    "UK statistic or fact with source",
    "Another fact..."
  ],
  "localData": {
    "worcesterContext": "Specific Worcester/Worcestershire information",
    "regionalPricing": "Local price data if available",
    "localRegulations": "Any local-specific regulations"
  },
  "statistics": [
    { "stat": "X% of UK homes have...", "source": "Source name", "year": 2024 }
  ],
  "youtubeVideos": [
    {
      "videoId": "dQw4w9WgXcQ",
      "title": "Video title",
      "channelName": "Channel Name",
      "description": "Why this video is relevant and what it covers"
    }
  ],
  "externalSources": [
    {
      "url": "https://example.com/page",
      "title": "Page title",
      "organisation": "Organisation name",
      "description": "What this page covers and why it's authoritative",
      "type": "government|industry|consumer|energy|trade"
    }
  ],
  "screenshotTargets": [
    {
      "url": "https://example.com/page",
      "name": "safe-file-name",
      "caption": "Caption for the screenshot in the article",
      "description": "What the screenshot shows"
    }
  ],
  "competitorGaps": [
    "Important question or angle competitor articles miss"
  ],
  "commonQuestions": [
    "Real question homeowners ask about this topic"
  ],
  "backlinkOpportunities": [
    {
      "site": "Site name",
      "url": "https://example.com",
      "strategy": "How to earn a backlink here"
    }
  ],
  "seasonalAngles": [
    "Any seasonal or trending relevance"
  ],
  "keyInsights": "3-4 sentence summary of the most important research findings for the article writer"
}`;

  const rawText = await researchWithWebSearch(prompt, SYSTEM, { maxTokens: 32000 });

  // Extract JSON from the response
  let research;
  try {
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON found in research response');
    research = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.warn(`  [research] JSON parse failed: ${err.message}`);
    console.warn('  [research] Using raw text as fallback');
    research = {
      keyFacts: [rawText.slice(0, 500)],
      localData: { worcesterContext: 'Worcester, Worcestershire' },
      statistics: [],
      youtubeVideos: [],
      externalSources: [],
      screenshotTargets: [],
      competitorGaps: [],
      commonQuestions: [],
      backlinkOpportunities: [],
      seasonalAngles: [],
      keyInsights: rawText.slice(0, 200),
    };
  }

  console.log(`  ✓ Research complete:`);
  console.log(`    - ${research.keyFacts?.length || 0} key facts`);
  console.log(`    - ${research.statistics?.length || 0} statistics`);
  console.log(`    - ${research.youtubeVideos?.length || 0} YouTube videos`);
  console.log(`    - ${research.externalSources?.length || 0} external sources`);
  console.log(`    - ${research.screenshotTargets?.length || 0} screenshot targets`);
  console.log(`    - ${research.backlinkOpportunities?.length || 0} backlink opportunities`);

  return { ...state, research };
}
