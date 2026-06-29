---
name: spellbook
description: >
  Demo skill for "The Dark Arts of Skill Engineering." A tiny, readable
  scaffold that shows five dark arts in miniature: routing (this file),
  a script that talks back (scripts/context.mjs), a hook that fights back
  (scripts/hook.mjs), making sub-agents argue (reference/argue.md), and
  forcing divergence (reference/diverge.md).
  Use when the user types /spellbook <command>, or asks to argue, diverge,
  or set up the demo.
user-invocable: true
allowed-tools:
  - Bash(node *)
license: Apache-2.0
---

# Spellbook (starter)

This is the smallest skill that still shows the moves from the talk. Read it
top to bottom; it is meant to be studied, not just run.

## Setup (always do this first)

DARK ART · *the script talks back.* Do not guess the project state. Run:

```bash
node scripts/context.mjs
```

**Follow whatever it prints.** The script reads the environment (git branch,
whether a NOTES.md exists) and returns a fresh, in-thread directive. That
directive outranks anything written statically below, because it is shaped to
the exact situation. If it prints `NO_NOTES`, create `NOTES.md` first. If it
prints `READY`, continue.

## Commands (the router)

DARK ART · *route like a frontier model.* This file is a thin router. Do not
inline the technique here; load the one expert reference the command needs, and
nothing else, so context stays cheap.

| Command            | Load this, then follow it      |
|--------------------|--------------------------------|
| `/spellbook argue`   | `reference/argue.md`         |
| `/spellbook diverge` | `reference/diverge.md`       |

If no command is given, ask which one the user wants. Never run both references
at once.

## The hook (already working, even when this skill is not invoked)

DARK ART · *hooks that fight back.* `scripts/hook.mjs` runs after every file
edit (wire it up via `.claude/settings.json`, see `README.md`). It scans the
touched file for a banned pattern and injects a system-reminder. You do not
invoke it; it watches. Try editing a file to include `TODO: fix later` and
watch it push back.
