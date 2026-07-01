# Talks

Paul Bakaus's talk decks, speaker notes, and demos. Each talk is a self-contained
folder: a single-file HTML deck plus its assets, an outline, a per-slide talk
track, and any runnable demos or starter code.

| Talk | Folder | What it is |
|---|---|---|
| **The Dark Arts of Skill Engineering** | [`dark-arts/`](dark-arts/) | AI Engineer World's Fair, workshop track. Building one skill from a prompt to a harness extension, live. |
| **Design at the Speed of Adjectives** | [`adjectives/`](adjectives/) | AI Engineer World's Fair. Why design tools aim at the wrong altitude — pixels vs. prompts — and why the fix is the vocabulary a director already thinks in: adjectives. |
| Killing the handoff | [`handoff/`](handoff/) | Earlier keynote on the design-to-code handoff. |

## Running a deck

The decks are plain static HTML. Serve the talk folder and open `index.html`:

```bash
cd dark-arts && python3 -m http.server 8910
# → http://localhost:8910/index.html
```

Each deck is keyboard-driven (arrow keys / space, `f` for fullscreen) and the URL
hash tracks the slide (`#7`).

## Dark Arts specifics

- `dark-arts/index.html`: the deck (data-driven `SLIDES` array + renderers).
- `dark-arts/talk-track.md`: per-slide spoken beats.
- `dark-arts/outline.md`: structure and rationale.
- `dark-arts/starter/`: a runnable mini-skill ("Spellbook") that demonstrates five of the dark arts.
- `dark-arts/demos/`: the live-demo runbook plus a deliberately-median page to critique.

The starter and demos reference the `impeccable` CLI (`npx impeccable …`), published on npm.

## Adjectives specifics

- `adjectives/index.html`: the deck — 32 sparse beats, several with live embeds (an
  auto-scrolling sample site, play-once recordings, a real WebGL shader).
- `adjectives/talk-track.md`: the spoken half, one section per slide.

## License

The talk materials in this repo (decks, speaker notes, outlines, images) are
All Rights Reserved (see [`LICENSE`](LICENSE)) and published for viewing only.

The one exception is [`dark-arts/starter/`](dark-arts/starter/), the runnable
mini-skill, which is licensed under Apache 2.0 (see
[`dark-arts/starter/LICENSE`](dark-arts/starter/LICENSE)). Clone it, change it,
ship it. The full Impeccable skill it's distilled from is also Apache 2.0 at
[impeccable.style](https://impeccable.style).
