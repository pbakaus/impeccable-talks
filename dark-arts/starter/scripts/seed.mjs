#!/usr/bin/env node
/**
 * DARK ART · "force divergence" (the entropy half).
 *
 * A frozen list of options drifts to safe defaults. A single seed + the model's
 * own composition does not. This is the miniature of Impeccable's palette.mjs.
 *
 * Run:  node scripts/seed.mjs            # random each run
 *       node scripts/seed.mjs --from foo # deterministic: same key → same seed
 */

// A few deliberately un-boring directions. The seed picks a starting point;
// the model composes the rest around it (it is a nudge, not a command).
const SEEDS = [
  { mood: 'darkroom',   note: 'near-black ground, one ember accent like a safelight' },
  { mood: 'cartography', note: 'ink on aged vellum, hairline rules, plate numbers' },
  { mood: 'cockpit',     note: 'instrument greens on graphite, lit readouts' },
  { mood: 'playbill',    note: 'condensed display type, vermilion, paper grain' },
  { mood: 'tidepool',    note: 'wet teals and oxidized copper, soft caustics' },
  { mood: 'foundry',     note: 'cooling-steel oranges on slate, cast edges' },
];

// Tiny string hash → unit interval, so --from is reproducible.
function hashUnit(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 100000) / 100000;
}

const fromArg = process.argv.indexOf('--from');
const key = fromArg !== -1 ? process.argv[fromArg + 1] : null;
const unit = key ? hashUnit(key) : Math.random();   // <- entropy lives here

const pick = SEEDS[Math.floor(unit * SEEDS.length)];
console.log(`seed: ${pick.mood}`);
console.log(`direction: ${pick.note}`);
console.log('\nDIRECTIVE: compose around this seed. Do NOT fall back to the safe default.');
