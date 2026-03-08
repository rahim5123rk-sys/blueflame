#!/usr/bin/env node
/**
 * Blue Flame Article Creation Pipeline — Main Orchestrator
 *
 * 7-stage LLM pipeline that takes a topic and produces a publish-ready
 * React TSX blog article with infographics, videos, screenshots, links, and FAQ.
 *
 * Usage:
 *   node pipeline.js --topic "heat pump installation worcester"
 *   node pipeline.js --topic "gas safety checks landlord" --from-stage 3
 *   node pipeline.js --topic "boiler grants uk 2026" --dry-run
 *   node pipeline.js --resume .pipeline-state/heat-pump-installation-worcester/state.json
 *
 * Environment variables required:
 *   ANTHROPIC_API_KEY — Claude Opus 4.6 API key
 *
 * Environment variables optional:
 *   PIPELINE_STATE_DIR — Where to save state (default: .pipeline-state/)
 */

import { parseArgs } from 'node:util';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATE_ROOT = process.env.PIPELINE_STATE_DIR || path.join(__dirname, '.pipeline-state');

// ── Stage imports ─────────────────────────────────────────────────────────────
import { runResearch } from './stages/1-research.js';
import { runPlan } from './stages/2-plan.js';
import { runDraft } from './stages/3-draft.js';
import { runWrite } from './stages/4-write.js';
import { runHumanize } from './stages/5-humanize.js';
import { runEnhance } from './stages/6-enhance.js';
import { runPublish } from './stages/7-publish.js';

const STAGES = [
  { number: 1, name: 'research',  label: 'Research',  fn: runResearch  },
  { number: 2, name: 'plan',      label: 'Plan',       fn: runPlan      },
  { number: 3, name: 'draft',     label: 'Draft',      fn: runDraft     },
  { number: 4, name: 'write',     label: 'Write',      fn: runWrite     },
  { number: 5, name: 'humanize',  label: 'Humanize',   fn: runHumanize  },
  { number: 6, name: 'enhance',   label: 'Enhance',    fn: runEnhance   },
  { number: 7, name: 'publish',   label: 'Publish',    fn: runPublish   },
];

// ── CLI argument parsing ──────────────────────────────────────────────────────
const { values: args } = parseArgs({
  options: {
    topic:      { type: 'string',  short: 't' },
    resume:     { type: 'string',  short: 'r' },   // path to saved state.json
    'from-stage': { type: 'string', short: 'f' },   // resume from stage N (1-7)
    'only-stage': { type: 'string', short: 'o' },   // run only stage N
    'dry-run':  { type: 'boolean', short: 'd', default: false },
    help:       { type: 'boolean', short: 'h', default: false },
  },
  strict: false,
});

// ── Help ─────────────────────────────────────────────────────────────────────
if (args.help) {
  console.log(`
Blue Flame Article Creation Pipeline
══════════════════════════════════════════

USAGE:
  node pipeline.js --topic "your article topic"

OPTIONS:
  --topic, -t         Article topic to write about (required unless --resume)
  --resume, -r        Path to a saved state.json to resume from
  --from-stage, -f    Resume from stage N (1-7) using the last saved state
  --only-stage, -o    Run only stage N (for debugging individual stages)
  --dry-run, -d       Run pipeline but don't write files to the project
  --help, -h          Show this help

STAGES:
  1  Research   — Web search: facts, YouTube, external sources, screenshots
  2  Plan       — Article outline, infographics, FAQ, SEO metadata
  3  Draft      — Full section-by-section article draft
  4  Write      — Expand every section to maximum depth and detail
  5  Humanize   — Remove AI patterns, add natural voice and personality
  6  Enhance    — SEO optimisation, schema, links, content gap-fill
  7  Publish    — Generate TSX, capture screenshots, update Blog.tsx + App.tsx

EXAMPLES:
  node pipeline.js --topic "heat pump installation worcester"
  node pipeline.js --topic "gas safety checks landlord" --from-stage 4
  node pipeline.js --resume .pipeline-state/boiler-grants/state.json
  node pipeline.js --topic "smart thermostat setup" --only-stage 1 --dry-run

ENVIRONMENT:
  ANTHROPIC_API_KEY   Required — your Claude API key
  PIPELINE_STATE_DIR  Optional — where to save pipeline state (default: .pipeline-state/)
`);
  process.exit(0);
}

// ── Validation ────────────────────────────────────────────────────────────────
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('\n❌ ANTHROPIC_API_KEY environment variable is not set.\n');
  console.error('   Export it before running:');
  console.error('   export ANTHROPIC_API_KEY="sk-ant-..."\n');
  process.exit(1);
}

// ── Main pipeline runner ──────────────────────────────────────────────────────
async function main() {
  let state;
  let stateDir;
  let startFromStage = 1;

  // Load existing state if resuming
  if (args.resume) {
    const statePath = path.resolve(args.resume);
    if (!existsSync(statePath)) {
      console.error(`\n❌ State file not found: ${statePath}\n`);
      process.exit(1);
    }
    state = JSON.parse(await readFile(statePath, 'utf8'));
    stateDir = path.dirname(statePath);
    startFromStage = nextStage(state);
    console.log(`\n▶ Resuming from stage ${startFromStage} (topic: "${state.topic}")`);
  } else {
    // Fresh start
    if (!args.topic) {
      console.error('\n❌ --topic is required. Run with --help for usage.\n');
      process.exit(1);
    }

    const topic = args.topic.trim();
    const slug = slugify(topic);
    stateDir = path.join(STATE_ROOT, slug);
    await mkdir(stateDir, { recursive: true });

    state = { topic, slug };
    console.log(`\n🔥 Blue Flame Article Pipeline`);
    console.log(`   Topic: "${topic}"`);
    console.log(`   Slug:  ${slug}`);
    console.log(`   State: ${stateDir}`);
  }

  // Override start stage if --from-stage given
  if (args['from-stage']) {
    const n = parseInt(args['from-stage'], 10);
    if (n >= 1 && n <= 7) {
      startFromStage = n;
      console.log(`\n▶ Starting from stage ${n} (--from-stage flag)`);
    }
  }

  // Only-stage mode
  const onlyStage = args['only-stage'] ? parseInt(args['only-stage'], 10) : null;
  if (onlyStage) {
    startFromStage = onlyStage;
    console.log(`\n▶ Running only stage ${onlyStage}`);
  }

  const isDryRun = args['dry-run'];
  if (isDryRun) {
    console.log('\n⚠️  DRY RUN — files will NOT be written to the project\n');
  }

  // ── Run stages ─────────────────────────────────────────────────────────────
  const startTime = Date.now();

  for (const stage of STAGES) {
    // Skip stages before start
    if (stage.number < startFromStage) continue;
    // Skip stages after only-stage
    if (onlyStage && stage.number !== onlyStage) continue;

    const stageStart = Date.now();

    try {
      // In dry-run mode, skip the publish stage
      if (isDryRun && stage.number === 7) {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║  STAGE 7 — PUBLISH (skipped: dry-run) ║');
        console.log('╚════════════════════════════════════════╝');
        break;
      }

      state = await stage.fn(state);

      const elapsed = ((Date.now() - stageStart) / 1000).toFixed(1);
      console.log(`\n  ⏱  Stage ${stage.number} took ${elapsed}s`);

      // Persist state after each stage
      await saveState(stateDir, state);

    } catch (err) {
      console.error(`\n❌ Stage ${stage.number} (${stage.label}) failed:`);
      console.error(`   ${err.message}`);
      if (err.stack) console.error(err.stack);

      // Save partial state so we can resume
      await saveState(stateDir, state).catch(() => {});
      console.error(`\n   State saved. Resume with:`);
      console.error(`   node pipeline.js --resume ${stateDir}/state.json\n`);
      process.exit(1);
    }
  }

  const totalElapsed = ((Date.now() - startTime) / 1000).toFixed(0);
  console.log(`\n\n🎉 Pipeline complete in ${totalElapsed}s`);

  if (!isDryRun && !onlyStage) {
    console.log(`\n   Article ready at: src/pages/blog/${state.plan?.componentName || ''}.tsx`);
    console.log(`   URL will be:      /blog/${state.slug}`);
    console.log(`\n   Run: npm run dev  (from project root) to preview`);
    console.log(`   Run: npm run build (from project root) to build for production\n`);
  }

  if (isDryRun) {
    console.log(`\n   State saved to: ${stateDir}/state.json`);
    console.log(`   Review state then run without --dry-run to publish.\n`);
  }
}

// ── Utilities ─────────────────────────────────────────────────────────────────

async function saveState(dir, state) {
  const statePath = path.join(dir, 'state.json');
  await writeFile(statePath, JSON.stringify(state, null, 2), 'utf8');
}

function nextStage(state) {
  if (state.published) return 8; // all done
  if (state.enhanced) return 7;
  if (state.humanized) return 6;
  if (state.written) return 5;
  if (state.draft) return 4;
  if (state.plan) return 3;
  if (state.research) return 2;
  return 1;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

// ── Run ───────────────────────────────────────────────────────────────────────
main().catch((err) => {
  console.error('\n❌ Unexpected error:', err);
  process.exit(1);
});
