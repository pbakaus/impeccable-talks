# Spellbook · starter skill

A tiny, readable skill that demonstrates five of the dark arts from the talk in
miniature. Clone it, read it top to bottom, run the scripts. Everything here is
real and runs with nothing but Node and (optionally) Claude Code.

```
starter/
  SKILL.md                     the router + setup (read this first)
  reference/
    argue.md                   DARK ART · make sub-agents argue
    diverge.md                 DARK ART · force divergence
  scripts/
    context.mjs                DARK ART · the script talks back
    hook.mjs                   DARK ART · hooks that fight back
    seed.mjs                   the entropy half of "force divergence"
  .claude-settings.example.json   how to wire the hook
```

## Run the scripts on their own (no agent needed)

```bash
cd talks/dark-arts/starter

node scripts/context.mjs          # prints a DIRECTIVE shaped to your repo state
node scripts/seed.mjs             # random divergence seed
node scripts/seed.mjs --from acme # deterministic seed (same key → same seed)

# the hook, fed a fake edit event:
echo '{"tool_input":{"file_path":"SKILL.md"}}' | node scripts/hook.mjs
```

`context.mjs` will tell you to create `NOTES.md` the first time. That is the
"script talks back" art working: the instruction is computed, not written.

## Use it as a real skill (Claude Code)

1. Drop this folder where your agent can see skills, or point at it directly.
2. Wire the hook: copy the `hooks` block from `.claude-settings.example.json`
   into your project's `.claude/settings.json` (fix the path if needed).
3. In chat: `/spellbook argue` or `/spellbook diverge`.
4. Then test the hook with no skill call at all: edit any file to contain
   `TODO: fix later` and watch the guardrail push back in-thread.

## The four arts, and where to look

| Dark art | File | The one idea |
|----------|------|--------------|
| The script talks back | `scripts/context.mjs` | stdout is the instruction, computed fresh in-thread. |
| Route like a model | `SKILL.md` | thin router → load one expert reference on demand. |
| Make them argue | `reference/argue.md` | two blind sub-agents + a forced synthesis. |
| Hooks that fight back | `scripts/hook.mjs` | runs on every edit, even when the skill was never called. |
| Force divergence | `reference/diverge.md` + `scripts/seed.mjs` | ban the monoculture, inject a seed. |

The full versions of all nine arts live in the Impeccable repo (MIT). This
starter is the teaching cut.
