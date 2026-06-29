#!/usr/bin/env node
/**
 * DARK ART · "the script talks back."
 *
 * The agent is told (in SKILL.md): "Follow whatever it prints."
 * So the real instruction is not the static skill body; it is THIS, computed
 * fresh at runtime and shaped to the exact project state. That steers a model
 * harder than prose it skimmed once. The trade-off: it is not in the cached
 * prefix, so it costs a prompt-cache miss. Worth it for control.
 *
 * Run:  node scripts/context.mjs
 */
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

function gitBranch() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
  } catch {
    return null; // not a git repo; fine, we degrade gracefully
  }
}

const branch = gitBranch();
const hasNotes = existsSync('NOTES.md');

// Emit a small, deterministic report the agent can read...
console.log('--- spellbook context ---');
console.log(`git_branch: ${branch ?? '(none)'}`);
console.log(`notes_present: ${hasNotes}`);

// ...then the part that matters: a directive the agent must obey now.
if (!hasNotes) {
  console.log('\nDIRECTIVE: NO_NOTES');
  console.log('Create NOTES.md (a one-line purpose for this project) before any command.');
  process.exit(0);
}

if (branch && branch !== 'main' && branch !== 'master') {
  console.log('\nDIRECTIVE: READY');
  console.log(`You are on feature branch "${branch}". Safe to make edits here.`);
} else {
  console.log('\nDIRECTIVE: READY_ON_DEFAULT');
  console.log('You are on the default branch. Offer to branch before editing.');
}
