# Design at the Speed of Adjectives · talk + deck

> Day 3 · July 1, 2026 · 1:30–1:50pm · Design Engineering / Room 2014
> Track tags: Coding Agents · Generative Media / Creative AI
> Paul Bakaus · Founder, Renaissance Geek, Inc.
> Status: **v1 draft** — deck built (`index.html`), this doc is the matching plan + spoken track. Iterate both together.

This is **its own talk**, not a re-cut of "Killing the handoff." The handoff deck can inspire the visual language (Neo Kinpaku brand), but the spine here is the one the abstract sets out: **abstraction altitude**. Pixels too low, prompts too high, adjectives in between. Built self-contained (no external assets), hand-built SVG/CSS, then iterate with `/impeccable` itself.

---

## The argument in one breath

> Every design tool is at the wrong altitude for a world where the designer is also the engineer. Pixel tools (sliders, pickers) are too low. Prompt tools are too high, and dangerous because they look like they're working. Real design starts with a brief, not a prompt. Skip the brief and you get output without intent: competent and empty. The right altitude is the level a creative director already thinks in. Not pixels, not prompts. **Adjectives.** Impeccable is the case study for what that buys you, and what it doesn't.

The whole deck hangs off one recurring visual: the **spectrum** — `PIXELS · ADJECTIVES · PROMPTS`. Introduced empty (slide 4), filled (slide 11), and walked onto at the close (slide 19).

## Thesis card (the photographable slide)

**"Not pixels. Not prompts. Adjectives."** (slide 11) — mirrors the abstract's own cadence. Supporting stings: "The brief comes first" (8) and "Technically competent, strategically empty" (10).

---

## The deck, slide by slide (19 slides · ~17 min content)

Each entry: **visual** · then *spoken track bullets* (Paul's words, these are anchors).

### ACT I — The wrong altitude (slides 1–7, ~5 min)

**01 · Title.** "Design at the speed of adjectives." Lede: the right control surface for AI design isn't pixels or prompts. Credits.
- Open cold, no bio dump. One line of who-am-I lands later (slide 14). "I want to convince you that every design tool you use is at the wrong altitude, and that the fix is a word you already know."

**02 · Two roles, two speeds.** Designer ▢ ⟶handoff⟶ ▢ Engineer. Caption: every design tool assumes a gap between deciding and building.
- "For thirty years, design tooling assumed two people. A designer who decides on a canvas, an engineer who builds in code. The slider, the picker, the spec, the handoff — all of it lives in that gap."

**03 · One person now.** The two icons collapse to one "design engineer." Display: "Now the designer *is* the engineer."
- "That gap is closing. The designer is the engineer now. Same person, same keyboard, same loop. The roles merged. The tools didn't."

**04 · The spectrum (frame).** `PIXELS —— [ ? ] —— PROMPTS`. Both ends marked wrong, middle a gold "?".
- "Every design tool sits somewhere on this line. The two ends are the two things we ship today. Both are wrong for this new world. The right answer is the middle, and nobody built a tool there."

**05 · Too low. Pixels.** An honest inspector panel (sliders, swatches), rendered muted. Display: "Too low. Pixels."
- "The low end: padding sliders, color pickers, hex fields. You move one property at a time, by hand. Precise, slow, silent about *why*. It's the altitude of handing pixels to an engineer. There's no engineer left to hand them to."

**06 · Too high. Prompts.** *(full-bleed)* A prompt bar — "Build me a landing page for my SaaS startup" — over a **real, full-bleed rendered slop page** (`assets/slop-page.html`: a generic productivity SaaS, "Cadence" — cream, Fraunces, eyebrow caps, icon-tile features, "Start free trial" pill, every 2026 tell). Overlay caption bottom-left: "Too high. Prompts." *(Deliberately a neutral SaaS, not climate — keeps a clean wall between the talk and the 3Degrees engagement.)*
- "The high end: one sentence in, a whole page out. And it arrives looking finished." *(Let the page sit. It looks fine. That's the point.)*

**07 · Looks like it's working.** *(same page, dimmed)* The Cadence page returns under a heavy vignette; overlay: "More dangerous, because it *looks* like it's working."
- "And that's the trap. A slider that does the wrong thing, you catch it. A page this finished, you ship it. The failure is invisible."

*Reuse note: the full-bleed page + dim-and-name-the-tells overlay is lifted from the handoff deck's strongest sequence (`.s-bleed` / `.vignette`). The page is shown, not described.*

### ACT II — The brief (slides 8–10, ~3 min)

**08 · The brief comes first.** Display: "No serious design director hears a prompt and starts pushing pixels."
- "Here's what every prompt tool skips. No director hears a brief and starts pushing pixels. The brief comes first."

**09 · What the brief asks.** Three questions: emotional territory / what it should never feel like / reference & point of view.
- "A brief is three questions. What's the emotional territory? What should this *never* feel like? What's the reference? That's discovery. It's where intent gets decided, and AI tools skip straight past it to pixels on a screen."

**10 · Output without intent.** *(same page, dimmed — callback)* The Cadence page returns once more; overlay: "Technically competent. Strategically empty." Now we name the tells *on the page*: eyebrow caps, tasteful serif, one accent on cream, icon-tile features.
- "Skip the brief and you still get output. The page six other startups also have this week. Output without intent."

### ACT III — The right altitude (slides 11–13, ~4 min)

**11 · The answer (spectrum filled).** Middle goes gold: `ADJECTIVES`. Display / thesis: "Not pixels. Not prompts. Adjectives."
- "The altitude between the extremes is the one a director already works at. Not pixels. Not prompts. Adjectives." *(Hold it. This is the screenshot slide.)*

**12 · The controls a director thinks in.** A full **adjective wall** as the hero — ~21 design adjectives at display scale, with *warmer / leaner / sharper* picked out in gold as the narration anchors. No "Make it ___" stubs (too flat), no slash-commands (those arrive on 14).
- Narrate against the three gold words, pairing each with the fuller director's phrase so the compression *teaches* the thesis: "When I say *strip it to its essence*, I'm turning one dial — leaner. *Add tension* — sharper. The phrase compresses to an adjective." Then sweep a hand across the wall: "and the palette is deep. Every one an intent, not a parameter."

**13 · Why it's the right altitude (quadrant).** 2×2: intent (y) × steerable (x). Slider bottom-right (control, no intent), prompt top-left (a view, but one shot), adjective top-right (gold, both). A dashed vermilion arrow drops from **prompt** straight down into the bottom-left corner — **"cognitive surrender"** (flag + hushed vermilion) — labelled *"accept it."* The drop encodes the thesis: your intent erodes when you can't steer it.
- "Why this level and not the others? A pixel gives you control but no intent. A prompt carries a view — but one shot, no way to steer it home."
- Trace the arrow: "and the moment you accept that one shot, your intent erodes. You drop into the corner with no view and no wheel — cognitive surrender. That's where most AI design actually happens."
- Land the gold: "The adjective is the only one with both — a point of view you can keep steering. The whole talk is about climbing out of that bottom-left corner toward this one."

### ACT IV — Lessons from building it (slides 14–17, ~5 min)

**14 · Impeccable.** Wordmark + double-notch. "24 adjective-level commands, on your real code." Pills: /bolder /quieter /distill +more.
- *(The one-line bio lands here.)* "I spent my career on the interface between people and tools — jQuery UI, DevTools. The latest is this. Impeccable: an open-source design tool, 24 adjective commands, running inside your coding agent on real production code. Adjective in, reviewable diff out."

**15 · An adjective is a control.** Fresh brief — a debut fragrance, "Dusk." **Four cards: a baseline + three adjectives.** The baseline is the model's cream/serif default (deliberately the same slop look as slides 6–10); then /bolder (dark, vermilion, "the hour everything turns"), /quieter (pale, Aesop-restraint), /distill (one word, "Dusk."). Each a richer mini-page (eyebrow / headline / sub / CTA), not a bare card.
- "Here's the proof it's a control and not a vibe. Same brief. One default — what the model ships unasked — and three decisions. Each adjective turns the default into a point of view."
- *Baseline cell added per the handoff comparison: without 'here's the model's default,' the three treatments can't prove they beat the reflex.*

**16 · What worked.** (1) shared vocabulary (2) subtract then add (3) steer in the running product.
- "What worked. One: a shared vocabulary — the same word means the same move to human and model. Two: subtract, then add — strip the defaults before you hand over the words. Three: steer live in the running product, drag instead of re-prompt."

**17 · What didn't.** (1) can't teach taste (2) some adjectives too personal (3) an adjective with no brief is just a nicer prompt.
- "What didn't. One: you can't teach the model taste — we tried, it doesn't move; you remove the tells, you can't install the judgment. Two: some adjectives are too personal — 'warmer' needs a brief behind it or it regresses to the average. Three: an adjective with nothing behind it is just a nicer prompt. The vocabulary only works on top of intent."

### ACT V — The bigger idea (slides 18–19, ~2 min)

**18 · Past the chat box.** Display: "Find the level the expert actually thinks in." Generalizes to any AI interface.
- "This isn't really about design. Any AI interface where intent matters more than parameters has the same problem. The slider is too low, the chat box is too high. The work is to find the level the expert thinks in and build the controls there. For design it's the adjective. Find yours."

**19 · Close.** Spectrum, "you are here" on adjectives. Display: "Direct at the speed of adjectives." Sign-off.
- "Move the human-AI interface past the chat box. Direct at the speed of adjectives. Thank you."

---

## Open questions (decide before we lock)

1. **23 vs 24 commands.** The deck and abstract both say **24** (matching the published abstract). The repo currently ships **23** (`command-metadata.json`). Either land a 24th command before July 1, or change the abstract/slides to 23. The deck currently prints "Twenty-four" on slide 14 and "+18 more" in the pills — both assume 24. *Decide first; it's the one hard number on a slide.*
2. **~~Slide 12 examples~~ — DECIDED.** The abstract's three examples weren't all adjectives ("strip it to its essence" = verb, "add tension" = verb+noun). Rather than defend that, slide 12 now uses three true adjectives — *warmer / leaner / sharper* — with the fuller director's phrase spoken aloud, plus an adjective drift to show range. Fake slash-tags removed. Open sub-question: are *warmer / leaner / sharper* the right three, or swap any (e.g. lead with the real commands *bolder / quieter*)? Easy to change.
3. **Q&A / timing.** Is the 20 min hard-inclusive or is there Q&A after? Deck targets ~17 min content. If there's a hard stop with no Q&A, this is comfortable; if Q&A eats 5, consider cutting slide 02 or merging 06/07.
4. **The cold open.** Currently opens on the argument (slide 1 → 2). Alternative: open *on* a piece of "competent and empty" slop for 5 seconds of silence before any words (stronger hook, costs a slide). Worth trying.
5. **Live demo?** Deck is fully self-contained / narratable. A 10-second live `/live` drag could be the peak for this room, or too risky for a 20-min slot. Default: pre-run, no live demo.
6. **"What worked / what didn't" specifics (slides 16–17).** These are scaffolded with plausible, defensible lessons. Replace with Paul's real, specific receipts from building Impeccable — this is the part only he can give, and the most credible part of the talk.

---

## Production notes

- **`index.html` + `assets/`.** Neo Kinpaku tokens (lacquer ground, kinpaku gold, patina/vermilion, Alumni Sans / Albert Sans). Every diagram is hand-built SVG/CSS and the lacquer grain is an inline SVG turbulence data-URI, so the only binary deps are the two title-hero candidates in `assets/`.
- **Title hero:** full-bleed `assets/kintsugi-hero-diagonal.png` — the canonical homepage/OG hero: mostly black lacquer with a thin diagonal gold+verdigris seam (gold as a rare seam, not a field). Chosen over the v3 gold-leaf variant, which read as too much gold ("Trumpian") on the title. Title text sits in the dark left zone over a left scrim. The v3 ruler variant is still staged (`assets/kintsugi-hero-v3.png`) if we ever want the ruler-rhyme back.
- **Navigation:** → / space / click-right advance, ← / click-left back, Home/End, `#n` deep-links to a slide, gold progress hairline up top.
- **Iterate with `/impeccable` (brand register).** Draft → `/impeccable critique` the deck → `/impeccable bolder` / `/quieter` / `/polish` the weak slides → `/impeccable live` to fine-tune. The deck practices what the talk preaches; worth saying on the day.
- **To present:** open `tmp/talks/adjectives/index.html` in a browser, full-screen (F11 / ⌃⌘F). PDF export later via the same path as the handoff deck if needed.

## Scope guard (what this talk is NOT)

- Not the handoff origin story as the spine (one-line aside at most).
- Not a launch / a16z-round announcement — brand presence stays light; the talk is an idea, not a pitch.
- Not a "what is a coding agent" explainer — this room lives in code.
- Not eight ideas. One: the adjective is the right level of abstraction for AI design.
