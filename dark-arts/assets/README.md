# dark-arts / assets

Everything the deck (`../index.html`) actually uses lives in the named folders
below. Anything not referenced by the deck is parked in `_unused/` (kept, not
deleted, so it's there if we want it back).

## In use

| Folder | What's in it |
|---|---|
| `slides/` | One image per content slide: `slop`, `gravity-well`, `argue-wizards`, `codex-meme`, `divergence-3up`, `hooks`, `cybertruck-meme`, `rap-sheet`, `one-skill-to-rule`. |
| `accents/` | The eight gold/patina backdrop accents the deck rotates behind beats (`accent-01…11`; the gaps are intentional, the unused ones are in `_unused/accents/`). |
| `logos/` | The ten harness logos on the "compile to every harness" slide. |
| `grimoire/` | `title-cover.png` (title slide) and `thanks-seam.png` (thank-you slide). |
| `brand/` | `impeccable-logo.svg` (the corner mark on every non-full-bleed slide). |
| `video/` | `title-transition.mp4` (the book-opening transition from the title into slide 2). |

If you add a new asset the deck uses, put it in the matching folder and
reference it as `assets/<folder>/<name>`.

## Not in use

`_unused/` holds everything the deck doesn't reference:
- `_unused/generated/`: the GPT-image exploration (slide candidates v01–v04, the
  rap-sheet text tests, grimoire page templates). The finalists were pulled into
  `slides/`.
- `_unused/accents/`: accent variants the deck didn't end up using (03, 09, 10, 12).
- `_unused/logos/`: `aider`, `cline`, `github` (Copilot replaced the GitHub mark).
- `_unused/video-takes/`: earlier transition renders, superseded by `video/title-transition.mp4`.
- `_unused/neo-kinpaku/`: leftover brand textures.
- `_unused/dark-art-open-spread.png`: the old grimoire two-page spread, from before
  the beats were rebuilt as clean layouts (still referenced by a now-dead CSS rule).

Safe to delete `_unused/` entirely if you want a lean repo; nothing the deck
renders depends on it.
