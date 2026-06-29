# Spellbook · build along

A tiny, **runnable** skill you assemble during the talk. By the end you have a
pocket Impeccable: a real harness extension that critiques and re-imagines a
deliberately-mediocre landing page, using five of the nine dark arts in
miniature.

Everything here works out of the box with nothing but Node and (optionally)
Claude Code. Run it first, then make it yours: every art has a **`YOUR TURN`**
marker where you extend it.

```
starter/
  SKILL.md                     the router + setup (read this first)
  sample/landing.html          the target: a deliberately-median page to fix
  reference/
    argue.md                   DARK ART · make sub-agents argue
    diverge.md                 DARK ART · force divergence
  scripts/
    context.mjs                DARK ART · the script talks back
    hook.mjs                   DARK ART · hooks that fight back
    seed.mjs                   the entropy half of "force divergence"
  .claude-settings.example.json   how to wire the hook
```

## Before the talk (2 minutes)

```bash
git clone https://github.com/pbakaus/impeccable-talks
cd impeccable-talks/dark-arts/starter
node scripts/context.mjs        # should print a DIRECTIVE; follow it
```

Open `sample/landing.html` in a browser. It looks fine. That is the point.

## What you'll build, in three checkpoints

The talk climbs nine dark arts; you build the five that fit in an hour. Three are
hands-on moments (in the order you hit them); the other two you read.

| When | Checkpoint | Run | The art |
|---|---|---|---|
| Setup (do it now) | **1** | `node scripts/context.mjs`, then follow it | the script talks back (named at Level 5) |
| Level 1 · make them argue | **2** | `/spellbook argue sample/landing.html` | two blind sub-agents + synthesis |
| Level 6 · hooks that fight back | **3** | wire the hook, then make a bad edit | runs even when nobody called it |

The two you read along the way: **route** (`SKILL.md` is a thin router) and
**force divergence** (`reference/diverge.md` + `seed.mjs`).

## Checkpoint 1 · the script talks back (setup)

```bash
node scripts/context.mjs
```

It reads your environment (git branch, whether `NOTES.md` exists) and prints a
**directive computed fresh**, not prose you skimmed. If it says `NO_NOTES`, make a
one-line `NOTES.md` and run it again. That computed instruction is the art. (The
talk names this one at Level 5; you used it before you even sat down.)

## Checkpoint 2 · make them argue (Level 1)

In Claude Code (or any harness that can spawn sub-agents):

```
/spellbook argue sample/landing.html
```

Two blind sub-agents review the page, one as a design critic, one running the
deterministic checks, and a forced synthesis weaves them. Then try the other
command:

```
/spellbook diverge sample/landing.html
```

It bans the monoculture (Inter + warm-cream), seeds entropy (`seed.mjs`), and
proposes three genuinely different redesigns.

## Checkpoint 3 · the hook that fights back (Level 6)

```bash
# wire it (one time): copy the hooks block into your project settings
cp .claude-settings.example.json ../.claude/settings.json   # adjust path for your harness

# prove it with no agent at all:
echo '{"tool_input":{"file_path":"sample/landing.html"}}' | node scripts/hook.mjs
```

`hook.mjs` runs after **every** edit and pushes back on a banned pattern, even
when you never invoked the skill. `sample/landing.html` already trips it (it has
an `img:hover { transform: scale }`). In Claude Code, edit any file to add
`TODO: fix later` and watch the guardrail appear in-thread, uninvited.

## Make it yours (the `YOUR TURN` markers)

Grep for them: `grep -rn "YOUR TURN" .`

- **`scripts/hook.mjs`**: add your own banned pattern (a word, a CSS tell).
- **`scripts/seed.mjs`**: add a divergence mood of your own.
- **`reference/argue.md`**: add a third critic lens (accessibility? performance?).
- **`reference/diverge.md`**: add a cliché to the denylist.

## The five arts, and where to look

| Dark art | File | The one idea |
|----------|------|--------------|
| The script talks back | `scripts/context.mjs` | stdout is the instruction, computed fresh in-thread. |
| Route like a model | `SKILL.md` | thin router → load one expert reference on demand. |
| Make them argue | `reference/argue.md` | two blind sub-agents + a forced synthesis. |
| Hooks that fight back | `scripts/hook.mjs` | runs on every edit, even when the skill was never called. |
| Force divergence | `reference/diverge.md` + `scripts/seed.mjs` | ban the monoculture, inject a seed. |

The full versions of all nine arts live in the Impeccable repo (Apache 2.0). This
starter is the teaching cut: build it here, then graduate to `npx impeccable`.
