# Talks

Paul Bakaus's talk decks, speaker notes, and demos. Each talk is a self-contained
folder: a single-file HTML deck plus its assets, an outline, a per-slide talk
track, and any runnable demos or starter code.

| Talk | Folder | What it is |
|---|---|---|
| **The Dark Arts of Skill Engineering** | [`dark-arts/`](dark-arts/) | AI Engineer World's Fair, workshop track. Building one skill from a prompt to a harness extension, live. |
| Killing the handoff | [`handoff/`](handoff/) | Earlier keynote on the design-to-code handoff. |
| adjectives, expedia | [`adjectives/`](adjectives/), [`expedia/`](expedia/) | Older / supporting decks. |

## Running a deck

The decks are plain static HTML. Serve the talk folder and open `index.html`:

```bash
cd dark-arts && python3 -m http.server 8910
# → http://localhost:8910/index.html
```

Each deck is keyboard-driven (arrow keys / space, `f` for fullscreen) and the URL
hash tracks the slide (`#7`).

## Dark Arts specifics

- `dark-arts/index.html` — the deck (data-driven `SLIDES` array + renderers).
- `dark-arts/talk-track.md` — per-slide spoken beats.
- `dark-arts/outline.md` — structure and rationale.
- `dark-arts/starter/` — a runnable mini-skill ("Spellbook") that demonstrates five of the dark arts.
- `dark-arts/demos/` — the live-demo runbook plus a deliberately-median page to critique.

The starter and demos reference the `impeccable` CLI (`npx impeccable …`), published on npm.
