# The Dark Arts of Skill Engineering

Talk materials for AI Engineer World's Fair (workshop track, 60 min).
Speaker: Paul Bakaus. Thesis: **Prompting < harness engineering.**

## What's here

| Path | What it is |
|------|------------|
| `index.html` | The slide deck. Self-contained (one file). Open it in a browser. |
| `outline.md` | The full outline: thesis, the 9-art catalog with receipts, structure, decisions. |
| `talk-track.md` | Per-slide speaker notes + timing for the live run. |
| `demos/` | The two live demos + a runbook (`demos/README.md`) + a median page to critique. |
| `starter/` | A tiny clone-and-follow skill for attendees (`starter/README.md`). |

## Run the deck

It's one HTML file with no build step. Serve it (file:// is blocked by font/CORS):

```bash
cd talks/dark-arts
python3 -m http.server 8910
# open http://localhost:8910/
```

**Controls:** → / space / click-right = next · ← = back · `Home` / `End` ·
`F` = fullscreen · click a progress dot to jump · `#N` in the URL jumps to slide N.

30 slides, four movements:
1. **Make the model fight itself**, argue, force divergence
2. **The skill is a program**, route, memory, the script talks back
3. **Engineer the harness boundary**, hooks, live integration, compile targets
4. **Engineer for reality**, design for the weakest model

## Imagery: real assets + labelled placeholders

The deck is designed *as if* every image exists, then leaves you a clear slot to
drop the real one in.

- **Real assets already wired up:** the title uses the kintsugi gold-leaf hero
  (`assets/neo-kinpaku/kintsugi-hero-v3.png`), the thank-you uses the seam art,
  and the "compile to every harness" slide uses the real harness logos
  (`assets/logos/`). These render immediately, no action needed.
- **Placeholders for you to fill:** several slides (cold-open collage, the prayer
  candle, the gravity well, the three divergent variants, the live-mode GIF, the
  demo GIFs, the model "rap sheet") show a dashed gold box with a gold `IMAGE` /
  `GIF` tag and a caption describing **exactly what to source and drop in.** They
  are real design slots, not filler.

**To drop in a real image** for a full-bleed image-statement, open `index.html`,
find the slide in the `SLIDES` array, and replace its `ph:'...'` (+ `tag`) with
`bg:'assets/your-image.jpg'`. The headline/sub stay; the photo goes full-bleed
with the gradient + text overlaid. For the demo/art GIF boxes, swap the `media`
caption for an `<img class="media-real" src="...">` (see `.media-real` in CSS).

Max-4-slop-images rule: the *generated* art is all SVG/real-photo; any AI images
you add for the placeholders count against that budget, so prefer real
screenshots and stock.

## Design notes

- Visual system is the Impeccable "kinpaku" palette (gold leaf on black lacquer)
  pushed toward a grimoire register: gold sigils per art, real kintsugi imagery,
  illuminated-initial movement numerals, full-bleed photo statements.
- Code stays on screen for the technical arts (engineers want to nitpick);
  image-statements carry the emotional/funny beats. Every code snippet is real
  and carries a `file:line` citation.
- Copy is em-dash-free (house style).

## Editing the deck

Slide content lives in the `SLIDES` array near the top of the `<script>` block
in `index.html`. Each entry is one object (`type` + fields). Add or reorder
entries; numbering, progress dots, and movement labels update automatically.
