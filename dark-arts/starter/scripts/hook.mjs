#!/usr/bin/env node
/**
 * DARK ART · "hooks that fight back."
 *
 * A PostToolUse hook. The harness runs it after every Write/Edit, passing the
 * tool event on stdin. We scan the touched file for a banned pattern and, if we
 * find one, inject a system-reminder via hookSpecificOutput.additionalContext.
 *
 * The point: this fires even when nobody invoked the skill. Your guardrail runs
 * on the agent's worst edits, the ones it makes without asking for help.
 *
 * Contract: never break the turn. Always exit 0.
 *
 * Wire it up in .claude/settings.json (see README.md). Then edit any file to
 * contain "TODO: fix later" and watch it push back.
 */
import { readFileSync, existsSync } from 'node:fs';

// A re-entrancy guard so the hook never reacts to its own world. Real skills
// track depth across child processes; here we just read an env flag.
if (process.env.SPELLBOOK_HOOK_DEPTH) process.exit(0);

const BANNED = [
  { re: /TODO:\s*fix later/i, msg: 'Found "TODO: fix later". Name a real follow-up or fix it now.' },
  { re: /console\.log\(/,      msg: 'Left a console.log. Remove debug logging before shipping.' },
  // a design tell: scaling an image (or anything) on :hover adds no information.
  // this is why sample/landing.html trips the hook out of the box.
  { re: /:hover\s*\{[^}]*transform\s*:\s*scale/i, msg: 'Scales on :hover. Motion that adds no information; animate background or shadow instead.' },
  // YOUR TURN: add a banned pattern of your own, a word you hate, a CSS tell, a leaked secret.
];

let raw = '';
try { raw = readFileSync(0, 'utf8'); } catch { process.exit(0); }

let event = {};
try { event = JSON.parse(raw || '{}'); } catch { process.exit(0); }

// Different harnesses shape the event differently; check the common spots.
const file =
  event?.tool_input?.file_path ||
  event?.tool_input?.path ||
  event?.path ||
  null;

if (!file || !existsSync(file)) process.exit(0);

let content = '';
try { content = readFileSync(file, 'utf8'); } catch { process.exit(0); }

const hits = BANNED.filter(b => b.re.test(content)).map(b => b.msg);
if (hits.length === 0) process.exit(0);

const reminder = `[spellbook] ${file} tripped a guardrail:\n- ${hits.join('\n- ')}`;

// Claude Code reads this shape; harmless elsewhere.
console.log(JSON.stringify({
  hookSpecificOutput: { hookEventName: 'PostToolUse', additionalContext: reminder },
}));
process.exit(0);
