# The Dark Arts of Skill Engineering · outline

> AI Engineer World's Fair · Workshop track · 60 min · Paul Bakaus
> Status: **outline draft v2** (revised against your notes). Once we lock the thesis + the core six, we build slides.

---

## Revision log (what changed from your notes)

**v9 (latest) · the workshop is buildable:**
- The starter went from "read this" to "build this." It is now a runnable pocket Impeccable: clone `dark-arts/starter`, point it at the included `sample/landing.html` (a deliberately-median page), and assemble five dark arts as the talk climbs.
- Three hands-on checkpoints, in the order you hit them: setup (`context.mjs`, the script-talks-back art), Level 1 (`/spellbook argue sample/landing.html`), Level 6 (wire the hook, watch it fire). Ships complete and runnable so nobody is stuck, with `YOUR TURN` extension points in every art.
- Slides: slide 7 (the climb) now cues "clone to follow along"; the two demo slides carry a gold `YOUR TURN` line tied to the starter; the CTA (51) is reframed from "steal it" to "finish what you built." Stale `talks/dark-arts/` paths corrected to `dark-arts/` (repo root is impeccable-talks).

**v8 · show, don't tell:**
- A workshop should lead with prompts, code, and examples, not descriptions. Audited every dark-art section for telling-where-it-could-show and added a concrete "show" slide to the four that were leaning on prose:
  - **L1 argue:** a three-verdict comparison (`crit3`) that *demonstrates* the two-way detector bias instead of explaining it. Detector noisy → condemns a strong page (false alarm); detector silent → rubber-stamps a generic one; two blind agents → a balanced verdict separating "technically flawed" from "actually bad."
  - **L2 diverge:** a code slide showing the actual anti-attractor technique (name your instinct fonts, eliminate them) plus the `palette.mjs --from` seed.
  - **L3 route:** the routing diagram already carried this (one command → one expert, plus the brand/product register switch); an added router-code slide was later cut as redundant.
  - **L8 compile:** a code slide showing one source (`{{model}}`/`{{config_file}}` placeholders, `<gemini>`/`<codex>` blocks) compiling into distinct `.claude`/`.codex` builds.
- L4 memory, L5 script, L6 hooks, L7 live, L9 weak already showed real artifacts/code/demos; left as-is.
- Also: slide 50 (capability map) lost its "Apache 2.0, steal them" footer (low value; the CTA carries the URL/license). The thesis inequality is lowercase (`prompting < harness engineering`). Slide 7 rail is borderless icon+title, no numbers. Title video is keyboard-skippable. Contrast lifted for projector legibility.
- **50 → 53 slides.** `talk-track.md` re-synced.

**v7 · full edutainment rebuild:**
- **Slides complement the talk, they don't duplicate it.** Each dark-art beat decomposed from one dense grimoire spread into a short run of snappy slides (**problem → gag → code → payoff**); one idea per slide, the voice carries the rest. Level 8 also got the real harness story: the "just symlink .claude to .agents" myth (debunked, french-fries aside) and the receipt that `npx skills` gets install wrong so Paul built a harness-specific installer. **28 → 50 slides.**
- **Grimoire is now a motif, not wallpaper:** kept for the title cover, the book-opening transition video, and the Spellbook. Technical beats moved to clean, varied, fully-responsive dark layouts (fixes the `vw`-against-`cover` anchoring bug on non-16:9 ratios). New slide types: `punch`, `code` (code as hero), `poster`, `htable`.
- **Humor wired in** (organizer's "entertain"): Gandalf vs Saruman (argue), LOTR grappling hooks (hooks), the Frodo "One skill to rule them all" poster before the reveal. Image gags carry placeholders + a shot-list of generation prompts.
- **Logo** bumped (was way too small). `talk-track.md` re-synced to the 50-slide structure.

**v6 — restructured into a build narrative:**
- **The deck is now a story, not a catalog.** We build one skill on stage from a prompt (Level 0) to a harness extension (Level 9); each dark art is the fix to the current level's failure. The 4 "movements" are gone; the **Spellbook is a level-up sheet** (a rail ignites a sigil per step; locked at the start, all nine lit at the reveal). New slides: **Level 0 (the spell)** and **the reveal ("This is Impeccable")**. 32 → 28 slides (later rebuilt to 50; see v7).
- **Level 0 = Anthropic's real `frontend-design` skill**, quoted from the **original** (~55 lines of named bans: Inter/Roboto/Arial/system fonts, purple gradients, Space Grotesk), *not* the version on `main` (PR #1293 rewrote it ~55→~250 lines into something distinctly impeccable-shaped — registers, anti-patterns, two-pass process — a few days after Paul showed Anthropic Impeccable). Aside captured as a speaker note in `talk-track.md`.
- **The two Level 0 flaws now drive two arts:** the *over-apply* (banned system fonts for everyone, wrong for native product UI) → **route/register** (Level 3); the *relocation* (a named ban just moves the model to the next cluster) → **force divergence** reframed around **anti-attractors + a user seed** (Level 2), correcting the earlier too-shallow "just denylist it" framing.
- `talk-track.md` fully re-synced to the build; stale "Movement" meta labels cleaned from the deck.

**v5 — build polish + accuracy passes:**
- **Type fixed to the real design system** (not the handoff deck's comments): Alumni Sans **700** for wordmark/labels (was 800, a weight the site never loads), Albert Sans for statement headlines, Pinstripe dropped entirely. Surfaced via the `/impeccable critique` flow against DESIGN.md.
- **Slop self-audit:** ran the real detector over all 32 rendered slides (per-slide, since hidden slides don't lay out). Zero absolute bans; fixed a ghost-card shadow, tight leading, sub-12px labels, and two `border-left` side-stripes I'd introduced.
- **Distill pass:** cut the title eyebrow, the repeated footer title, on-slide demo notes, a duplicate thesis line; trimmed divider/sub copy.
- **DA-8 reworked:** the first slide now leads with *how harnesses actually differ* (behavioral table) instead of pseudo-code; the logos slide carries the compile payoff.
- **Sub-agent fact corrected:** Cursor (and Copilot/Antigravity) have sub-agents too; the interesting diff is the spawn/permission model, not existence. HARNESSES.md is point-in-time (2026-04-28) — verify capabilities live.
- Deck is now **32 slides** (added the live-GIF money-shot + the logos wall). `talk-track.md` re-synced to match.

**v4 — built the deck + added tonight's content:**
- **Catalog grew to 9 arts** (from 8) in four movements. NEW: **DA-7 Live-wire the browser** (the `/impeccable live` deep dive: self-restarting long-poll + SSE + POST, no MCP) and **DA-9 Design for the weakest model** (craft.md non-compressible gates, Codex trigger-happy context, live.md LCD). The old "compile" art is now DA-8 and absorbs the **harness-differences** segment (`HARNESSES.md`) + the model-tells laugh + the `pin.mjs` shim aside.
- **Folded into existing arts:** the **Codex sub-agent gate** (ask-once-then-STOP) into DA-1; **palette.mjs semi-random seed** into DA-3.
- **Built the actual deliverables** in this folder: `index.html` (30-slide deck, full-grimoire kinpaku, all SVG, em-dash-free, screenshot-verified), `demos/` (runbook + median page that flags 12 anti-patterns), `starter/` (runnable mini-skill), `talk-track.md`, `README.md`.
- Accuracy note: the live loop is **SSE (EventSource)** server→browser, not a raw WebSocket; long-poll is agent↔server. Deck + receipts say SSE.

**v3:**
- **Tiers collapsed.** §3 is now one flat catalog of dark arts — no CORE/SECONDARY/SKIP split. All Tier 3 (SKIP) items removed entirely.
- **From the old secondary tier:** kept **pin/shim** (now **DA-8 "Pin the shims"**); dropped structured-output forcing (folded into DA-6) and the interview/question-gating item.
- **Interlude promoted to a real dark art (DA-7 "Compile to every harness").** Per your note: the model-tells comedy isn't the insight — the **multi-harness compile target** is (one source → 10+ provider-specific builds; nobody does this). The per-model overfitting (`<gemini>`/`<codex>` defect patches) becomes the fun *example* and the laugh peak inside it.
- Net: **8 dark arts**, one flat list. See §3.

**v2:**
- **Thesis (§2):** rebuilt around determinism + the harness reframe; later moved to the dark-arts "spell/magic" register (placeholder: "Prompting is the spell. Harnessing is the magic.").
- **Detector as its own art:** dropped; survives only as Assessment B inside DA-1.
- **Force divergence:** merged the denylist + squint-test + radiant re-rank pipeline into one art (DA-3).
- **NEW "The script talks back" (DA-6):** the exit-value/stdout-piped-back trick, verified in `live.mjs` / `context.mjs`.

---

## 0. The brief, restated

A 60-minute **workshop-track** talk. The room is engineers and researchers who build (or want to build) agent skills. They came to a workshop, not a keynote: they expect to leave able to *do* something Monday. The prior talk ("Killing the handoff", `talks/handoff/`) was a 30-min narrative keynote with a brand reveal. **This is a different animal**: less story arc, more "open the hood and show me the wiring." Code on screen. Receipts. Nitpickable.

The raw material is real: every dark art below is pulled from shipping code in `impeccable/`, `agent-reviews/`, or `radiant/`, with file:line citations already gathered. We are not inventing techniques for a talk. We are documenting the ones that already earn their keep.

### Organizer's prep notes, distilled into hard rules for this deck

1. **AI SVGs > AI images. Max 4 slop images total.** Diagrams (router, hook loop, arguing agents) are hand-built SVG/CSS, not Midjourney. This talk is about *systems*, so diagrams beat illustrations anyway.
2. **Be pointy.** One message, a handful of surprising applications > five messages with no examples. → ONE thesis, six dark arts as the surprising applications.
3. **Code on screen.** Engineers want to nitpick. Every dark art gets a real snippet from our repos. Non-negotiable for a workshop track.
4. **Entertain.** The `<gemini>` "never animate images" and `<codex>` letter-spacing blocks are genuinely funny *and* true. Lean into "every model has tells."
5. **ONE thesis card.** The "if you remember one thing" slide. See §2.
6. **ONE viral slide.** Spend 80% of slide-polish time on it. Candidate designs in §6.
7. **Live demo.** A workshop earns it. `/impeccable critique` + the post-edit hook are the candidates (§5).
8. **Design the emotional journey.** Start strong (cold open on median slop), peak in the middle (make-them-argue demo or the model-tells reveal), end strong (the spellbook close).

---

## 1. The core argument (the spine in one breath)

> LLMs have **gravity toward the median**. Left alone, a skill is "a system prompt and a prayer": even a great, heavily-iterated prompt can't reliably beat the median, the model nods and regresses to its defaults. **Prompts matter and you'll iterate them forever** — that's table stakes, not the point. The leverage you're missing is everything *around* the prompt: the dark arts wrap it in machinery the harness actually runs — sub-agents, hooks, scripts, exit codes, routing — so a stochastic model behaves like software. A skill isn't *just* a prompt. It's an extension of your harness. **(Important: the talk must not read as "prose doesn't matter." It does. The harness is the necessary second half, not a replacement.)**

Everything hangs off that. Each dark art is "another way to move the work from prose the model *might* honor into machinery that *forces* the outcome."

---

## 2. The thesis

**LOCKED — the "remember one thing" card:**

> # prompting < harness engineering

The Pocock-style inequality. Dry, pointy, screenshottable, and it *is* the talk's argument in three words. Deliberate contrast: the **thesis line is engineer-dry, the deck's visual world is sorcery** (see §6 — dark kinpaku). The magic lives in the design and the section dividers, not in the headline. That tension ("plain claim, dark theatre") is a feature.

**Why the inequality over the spell/magic line:** the spell line is more quotable but states a vibe, not a claim; the inequality makes an argument an engineer can agree or disagree with on sight, which is what gets it screenshotted in *this* room. The magical register still earns its keep as flavor — divider cards, the reprise, the Spellbook viral slide.

**Runners-up (kept for reuse as divider/reprise lines, not the card):**
- *Spell/magic:* "Prompting is the spell. Harnessing is the magic." → good as an Act 0 spoken hook or a divider.
- *Median:* "Prompting summons the median. Harnessing conjures the rest." → good as the debias divider.

**Supporting roles (regardless of the card):**
- *Spoken setup line* (Act 0, states the goal plainly before the magical reframe): "make a non-deterministic model behave deterministically."
- *Force-divergence divider card* (Act 2, DA-3): **"Real magic isn't generation. It's divergence."**
- *Closing reprise line* (Act 4): **"Don't cast the prompt. Work the magic."** or the plainer **"Don't write it. Run it."**

*(On the "harness" ambiguity raised earlier: lean into it. The skill genuinely IS an extension of the coding harness — hooks, scripts, sub-agent orchestration the base harness lacks. Say that out loud early so it reads as deliberate, not as a naming collision.)*

---

## 3. THE DARK ARTS (the catalog)

**Now a build, not a catalog (v6).** These nine are no longer grouped into "movements" — they're the **build steps** that take one skill from a prompt (Level 0) to a harness extension (Level 9). We start from Anthropic's real frontend-design skill and climb to Impeccable; each art is the fix to a concrete failure of the current level, and the deck's rail ignites one sigil per step. The table below stays the technique reference; the on-stage order and the "current failure → fix" framing live in §4. **D = deep (~5 min), M = medium (~3-4 min).** Cut order if long: quicken Level 9 → fold the Codex-wrinkle into Level 1 → trim Level 3.

Build order (Level 1→Level 9): argue · diverge · route · memory · script-talks-back · hooks · live · compile · weakest-model. Two of the steps (diverge, route) explicitly pay off Level 0's two flaws (relocation, over-apply).

| # | Dark art | Depth | What it actually is | Where it lives | Why it's in |
|---|----------|:--:|--------------------|--------------------|-------------|
| **DA-1** | **Make them argue** | D | `/critique` spawns two sub-agents that must *not* see each other's output — Assessment A (LLM design director) and Assessment B (deterministic detector + browser evidence) — then a forced **synthesis that weaves, never concatenates**, surfacing where they disagree. The detector is "the agent that can't be sweet-talked." **Harness wrinkle (must-cover):** in Codex, sub-agents only run if the *user* asked for them — the only skill-level lever is to **stop and ask permission once**, then degrade gracefully (`Assessment independence: degraded (...)`). | `skill/reference/critique.md:28-40, 7-9, 92-95`; radiant `.claude/commands/shaders.md:134-146` | The headline. Counterintuitive ("why pay for two agents?") and defensible ("one agent anchors on its own first guess"). Killer detail: A finishes *before* the detector enters synthesis context — *"Detector output is deterministic, but it still anchors judgment."* The Codex gate is a perfect "harnesses are not interchangeable" teaser for Level 8 (the compile/harness-differences step). |
| **DA-2** (Level 3) | **Route like a frontier model (MoE)** | M | **Pays off Level 0's over-apply flaw:** Level 0 banned system fonts for *every* project, but a product dashboard should feel native. The fix is **register** (brand vs product, first-match-wins) deciding which rules apply, plus on-demand expert references (23 commands, load one). agent-reviews does the cruder version: 3 skills by reviewer type. | `skill/SKILL.src.md:119-146, 20-21`; `skill/reference/live.md:193-196`; `agent-reviews/skills/resolve-{agent,human}-reviews/SKILL.md` | Grounds MoE in a real Level 0 failure: one rulebook can't serve brand and product. Also answers "won't a giant skill blow my context?" → load only the expert you need. |
| **DA-3** (Level 2) | **Force divergence** | D | **Pays off Level 0's relocation flaw:** a named denylist (ban Inter) just sends the model to the next cluster (Space Grotesk), and so on. The real levers are **anti-attractors** — make the model eliminate its *own* top picks (the 2nd-order reflex check: "if you can still guess the aesthetic from the category alone, rework") — plus a **user/entropy seed** (`palette.mjs`, `Math.random()` or hashed `--from`) so the average isn't reachable. radiant's pipeline (celebrity seed → generate ~50 → sub-agent re-ranks to the most distinct) is the same idea at scale. | `skill/SKILL.src.md` (2nd-order reflex check); `skill/reference/brand.md:28-42`; `skill/scripts/palette.mjs:12-27, 441-476`; `radiant/.claude/commands/shaders.md:134-146` | Cleanest receipt: *you can't teach taste (tested), and you can't denylist your way out — bans relocate the monoculture.* Make the model out-rank itself, from a seed it didn't choose. Carries the punch card "Real magic isn't generation. It's divergence." |
| **DA-4** | **Give them memory** | M | `context.mjs` reads persistent PRODUCT.md/DESIGN.md each session; `/critique` writes a per-target snapshot with score+P0/P1 frontmatter; `/polish` reads the latest snapshot as its **fix backlog**; a trend line ("24 → 28 → 32") restores across sessions from a stable, path-derived slug. | `skill/scripts/critique-storage.mjs:1-26, 43-68, 175-179`; `context.mjs:84-122`; `context-signals.mjs:41-60` | The cross-session handoff (critique → polish) is concrete and visual. "Slug from the *resolved path*, not the user's phrasing" is the non-obvious detail that makes team-shared memory work. Kills "skills are stateless." |
| **DA-5** | **Hooks that fight back** | M | A PostToolUse hook runs the detector after *every* file edit and injects findings as a system-reminder — even when the skill was never invoked. Cursor gets a PreToolUse **write-gate that blocks** bad edits before they land. Re-entrancy guard via `IMPECCABLE_HOOK_DEPTH`; per-harness manifests. | `skill/scripts/hook.mjs:1-14`; `hook-before-edit.mjs:1-11`; `hook-lib.mjs:1-35, 91-104`; `skill/reference/hooks.md` | The spookiest art and a real workshop aha: your skill keeps working when nobody called it. The block-the-write gate is genuinely surprising. Demo-able live. |
| **DA-6** | **The script talks back** | D | The skill's scripts don't just *do* work — their **stdout is the instruction**. `live.mjs` returns a runtime-computed `hint` and a `nextCommand: init\|document`; `context.mjs` prints directives (`NO_PRODUCT_MD`, `UPDATE_AVAILABLE`) and the skill body says *"Follow whatever it prints."* These runtime responses steer the agent **harder than anything static in the skill body** — fresh in-thread, shaped to the exact state. Also the home of env-awareness (the script reads env/git/ports, then writes the instruction back). **Trade-off: defeats prompt caching.** | `skill/scripts/live.mjs:64-90, 126-134`; `context.mjs:15` (& `SKILL.src.md:15`); `context-signals.mjs:13-18`; `live-wrap.mjs:26-59` | The most non-obvious art, and the purest expression of the thesis: the real instruction isn't *written* in the skill, it's *computed and returned* by it. |
| **DA-7** | **Live-wire the browser** *(the impeccable live deep dive)* | D | `/impeccable live` is the first skill to wire the **agent thread directly into the running app** in a live, reactive loop — no MCP. Three channels: a **self-restarting long-poll** (`live-poll.mjs` caps each request at 270s under Node's 300s ceiling, loops on timeout) carries agent↔server; **SSE / EventSource** pushes server→browser (auto-reconnect); **HTTP POST** sends browser→agent (drag a knob, accept). Variants ship coarse knobs as `--p-<id>` CSS vars / `data-p-<id>` attrs so the user tunes with **zero regeneration**; chosen values bake in on accept. | `skill/reference/live.md:11-21, 370-400`; `skill/scripts/live-poll.mjs:23-28, 155-184`; `live-server.mjs:1-7, 88`; `live-browser.js:6078, 6189-6191` | The "nobody does this yet" art. Others reach for MCP; impeccable gets a tighter loop out of three boring web primitives. Deep, visual, and the strongest proof of the thesis: integration is *plumbing you build*, not a prompt you write. |
| **DA-8** | **Compile to every harness** *(+ harness differences; the laugh peak)* | M | Leads by answering *how harnesses actually differ*. The differences that bite are **behavioral**, not paths: sub-agents are widely supported now but **who can spawn one differs** (Claude programmatic · Codex needs user permission · Cursor agent-chosen); Codex can only ask the user in plan mode; **Claude auto-wakes the thread when a background job exits, others don't** (the reason the live loop is shaped the way it is). The response: the build absorbs the *mechanical* gaps (dirs, command syntax, `{{model}}` placeholders, `<codex>`/`<gemini>` blocks → 10+ provider builds via the logos slide); your skill **detect-and-degrades** the behavioral ones at runtime. Laugh payload: per-model overfitting (`<gemini>` no img-hover, `<codex>` letters that touch). Quick aside: `pin.mjs` shims. **Note:** HARNESSES.md's native-subagent table is *impeccable's emission targets* (Claude + Codex), not the support landscape — Cursor/Copilot/Antigravity have sub-agents too (verify live, the doc is point-in-time). | `docs/HARNESSES.md:30-107`; `skill/SKILL.src.md:42-45, 69-71, 100-108`; `scripts/lib/utils.js:694-737`; `scripts/lib/transformers/{providers,index,factory}.js`; `scripts/build.js:441-696`; `skill/scripts/pin.mjs` | The "wait, you can do that?" art. Real insight: treat the skill as **source that targets many runtimes**, because the runtimes genuinely differ. Model-tells are the entertaining proof + laugh peak. |
| **DA-9** | **Design for the weakest model** *(NEW)* | M | A skill runs on Haiku and Codex and "conductor," not just frontier Opus — so you engineer for the **lowest common denominator**. `craft.md` hard-codes **non-compressible gates** ("You must stop at every gate. Shape confirmation alone is NOT a green light to start coding… compressing gates 2-4 is the dominant failure mode"). Codex is **trigger-happy to infer context**, so it gets a custom stop-and-gather strategy. `live.md` is written as explicit step-by-step LCD instructions because Haiku/conductor will skip anything implicit. | `skill/reference/craft.md:9-20`; `skill/reference/codex.md` (context-gathering); `skill/reference/live.md` (explicit step lists); `CLAUDE.md:159, 173, 188` (Haiku as test baseline) | The honest closer: the median problem isn't only the model's *taste*, it's its *obedience*. Most skill authors write for the smartest model in the room; the dark art is writing for the dumbest one you'll actually run on. The honest Level 9 that ends the climb. |

---

## 4. Talk structure (60 min workshop) — the build narrative

**53 slides, three acts** (edutainment cadence: one idea per slide). We build one skill on stage, from a spell (Level 0) to a harness extension (Level 9). Each level is a short run of slides, usually **problem → show → payoff** (the "show" being code, a real artifact, or a side-by-side); the Spellbook rail ignites a sigil per level. Slides are sparse on purpose; the voice carries the substance. Full per-slide spoken track lives in `talk-track.md`; this is the shape.

### ACT I · The spell (~6 min) · slides 1-7
- **01 Title** → **02 "Yeah, AI made that"** (slop image; came from the most popular design skill there is).
- **03-04 Level 0 · Anthropic's frontend-design** (the spell): "a system prompt and a prayer" punch, then the *named bans* code. Plant the two flaws (over-applies; a ban relocates the monoculture). **Optional wink aside:** the skill was rewritten days after I showed Anthropic Impeccable; we start from the original.
- **05 median gravity** → **06 THESIS CARD** ("Prompting < harness engineering") → **07 the locked Spellbook**.

### ACT II · The build (~36 min) · slides 8-47
Each level: *our skill still fails at X* → the dark art → *it levels up* (a sigil ignites; call the level). Each level now leads with a *show* slide (code / artifact / comparison), not a description:
- **Level 1 argue** (D) · 08 problem → 09 gag (Gandalf vs Saruman) → **10 the two-way bias (three verdicts)** → 11 code → 12 payoff; then 13 Codex meme + 14 the `<codex>` gate; **15 demo 1**.
- **Level 2 force divergence** (D), pays off Level 0's *relocation* flaw · 16 problem → 17 diagram (cluster escape) → **18 three ways out** (1 prompt-discard · 2 generate+rank, radiant-only today · 3 `palette.mjs` seed) → 19 "One brief. Three worlds." (3-up image).
- **Level 3 route** (M), pays off the *over-apply* flaw (register: brand vs product) · 20 problem → **21 diagram (routing + register switch)** → 22 payoff. *(The routing diagram is the show; an added router-code slide was cut as redundant with it.)*
- **Level 4 memory** (M) · 23-25 (24 = real snapshot + trend artifact). **Level 5 script talks back** (D) · 26-28 (27 = stdout code).
- **Level 6 hooks** (M) · 29 problem → 30 gag (grappling hooks) → 31 code → 32 payoff; **33 demo 2** (staged thread).
- **Level 7 live-wire the browser** (D) · 34 problem (chat is a bad design tool) → 35 the trick (blocking poll) → 36 loop diagram → 37 live GIF.
- **Level 8 compile to every harness** (M), framed as two axes of difference · 38 cybertruck meme (both axes) → 39 the symlink myth → 40 behavioral-diff table (axis 1: the harness) → **41 MODEL MOST WANTED laugh** (axis 2: the model overfits its own way) → **42 code (one source → per-harness builds; fixes both axes)** → 43 logos → 44 "One skill to rule them all" (Frodo poster, the compile gag) → 45 the receipt ("installers copy, they don't compile").
- **Level 9 design for the weakest model** (M) · 46-48 (47 = non-compressible gates code).

### ACT III · The harness extension (~5 min) · slides 49-53
- **49 The reveal:** "We just built a harness extension. We started from Anthropic's prompt, rewrote every line of it, then did the nine things a prompt *can't*. **This is Impeccable.**" Also voices the close (the standalone "prompts matter" slide is cut, it's implied): "You'll iterate the prose forever, and you should. But what breaks the median is everything around it: the nine things a prompt can't be." (Do **not** say "prompt + dark arts" or "only machinery".) → **50 the capability map** (nine things a prompt can't do, each with its file; merges the old Spellbook; the "Apache 2.0, steal them" line moved to the CTA) → **51 CTA** (carries the Apache 2.0 / repo / impeccable.style line) → **52 Q&A** → **53 thanks**.

The "One skill to rule them all" Frodo poster used to open ACT III as a reveal setup, but the segue from Level 9 was awkward; it's the compile payoff (one skill, every harness), so it now lives in Level 8 beside the logos, and ACT III opens straight on the reveal.

Pacing: deep levels (1, 2, 5, 7) carry more slides; medium ones run problem → show → payoff. The compile level (8) carries the laugh peak. The three show slides (10, 18, 42) are the workshop, cut them last. Cut order if long: quicken Level 9 (drop code slide 47) → fold Codex-wrinkle into Level 1 → trim Level 4/5 payoff slides (25/28) → fold the live-GIF (37) into the loop narration.

---

## 5. Live demo plan (the workshop's earned moment)

Two small demos beat one big risky run:

1. **DA-1 — make them argue.** Run `/impeccable critique` on a deliberately median page in a real harness. Show the two assessments and the synthesis flagging what the LLM missed but the detector caught. **Pre-run the night before** (handoff lesson: narrate real output, don't watch a model think). Warm terminal kept for an encore only.
2. **DA-5 — the hook fights back.** Make one bad edit (an `<img>` hover scale, or a cream bg) in a watched file; show the system-reminder appear *without invoking the skill*. Short, high-impact, low-risk, proves the spookiest claim live.

*Optional third, if it reads well on screen:* **DA-6 — the script talks back.** Run `node context.mjs` (or `live.mjs`) raw in the terminal so the room sees the JSON `hint`/`nextCommand` the agent receives — then show the agent obeying it. This makes the most abstract art tangible. Risk: it's "watch a terminal print JSON," so only if we can stage it cleanly.

**Risk control:** all demos pre-run/rehearsed; fallbacks are screenshots baked into slides; never block the talk on a model.

---

## 6. The viral slide (spend 80% of polish here)

One slide people photograph. Candidates:

1. **"The Spellbook" — the six dark arts as a single periodic-table-style card.** Reuses the impeccable periodic-table visual language. Each art = one tile: name + one-line mechanism + file path. Dense, beautiful, screenshot-bait, *and* useful (it's a reference they'll actually pull up later). ← **my pick.** Doubles as the takeaway card.
2. **"Median vs. Dark Arts" before/after split.** Left: prompt-and-a-prayer output. Right: controlled output. Brutal and emotional, but less novel than the table.
3. **The thesis card itself** (§2) in the kinpaku/Alumni Sans lockup. Clean and quotable, but a pure text card gets photographed less than a dense *systems* card in an engineer room.

**Recommendation:** Build **#1** as the viral/takeaway slide AND reprise the thesis card (#3) as the simpler "remember one thing" beat. Two jobs: thesis card = the line; spellbook = the artifact they screenshot to use.

Visual constraints: SVG/CSS, not AI images. Honor the brand (kinpaku gold, Alumni Sans, lacquer ground) so it reads as part of the impeccable universe without being a pitch.

### Sorcery-in-kinpaku (the brand thread you flagged)

The goal: lean into "dark arts" without cosplaying Hogwarts or breaking the impeccable look. Kinpaku is *already* halfway there — gold leaf on black lacquer reads as alchemical, not cartoon-occult. Ways to push the sorcery motif while staying native:

- **Frame, don't decorate.** Each dark art gets a number rendered as a "sigil" — a restrained gold geometric mark (not a pentagram), in the same Alumni Sans / kinpaku system. Eight arts → eight sigils → they assemble into the Spellbook viral card. The card *is* the grimoire page.
- **Vocabulary, not clip-art.** Sorcery lives in the *words* (incantation / conjure / banish / familiar / grimoire) and the section-divider lines, over a deck that otherwise looks like clean kinpaku. The theatre is in the language; the design stays impeccable.
- **Kintsugi = the spell that repairs.** The handoff deck used kintsugi (gold-seam repair) as its emotional payoff. Here it maps cleanly: the median is the crack; the harness is the gold that fills it. One material, reused, so the two talks rhyme.
- **Restraint rule (lifted from the project's own anti-slop guidance):** no radial accent glows / "magic sparkle" gradients (off-brand for kinpaku — it's a flagged anti-pattern). Sorcery via gold leaf, deep lacquer, sharp type, and a single ember/vermilion accent only where something "breaks." The eat-your-own-dogfood angle is itself a talk beat: the deck obeys impeccable's rules.

**DECISION: full grimoire.** Each dark art is rendered as an illuminated grimoire page — gold sigil for the art number, the technique as the "incantation," the code snippet as the inscribed spell, a kintsugi seam where the median cracks and the harness repairs it. The Spellbook viral card (§6 #1) is the grimoire's cover/contents page. Bold and photographable; the discipline that keeps it from leaving the impeccable universe is the restraint rule above (no sparkle gradients / radial glows — gold leaf, lacquer, sharp type, single ember accent). The deck obeying impeccable's own anti-slop rules while looking like a spellbook is itself a talk beat.

---

## 7. Decisions + remaining open questions

**LOCKED:**
1. **Thesis card:** "Prompting < harness engineering" (engineer-dry line, sorcery staging). §2.
2. **Length:** hard 60 incl. Q&A. Design for tight; DA-8 and the optional DA-6 demo are the first compressions.
3. **Demos:** two — DA-1 `/critique` (arguing agents) + DA-5 hook fires unprompted. Both pre-run, screenshot fallbacks. §5.
4. **Brand:** kinpaku, dark theme (it's dark arts). Open thread: how far to push a sorcery/occult motif without leaving the impeccable universe — see "Sorcery-in-kinpaku" sketch in §6.

5. **DA-6 scope:** keep env-awareness folded into DA-6 ("the script reads the env, then writes the instruction back"). One art, not nine. §3.
6. **Repo weight:** keep lean — radiant co-stars in DA-3, agent-reviews a one-liner in DA-2. impeccable carries the spine. §3.
7. **Sorcery level:** **full grimoire** — each dark art is an illuminated grimoire page; Spellbook viral card is the cover. Bold, photographable. §6.

**STILL OPEN:** none. Outline is decision-complete; next step is slides.

---

## 8. Source receipts (every snippet is real)

- **DA-1 (argue):** `skill/reference/critique.md:28-40` (independent A/B, must not see each other), `:7-9` (A finishes before detector enters synthesis = anti-anchoring), `:92-95` (weave, don't concatenate); `:32-40` (the `<codex>` sub-agent gate: ask once, STOP, degrade). Radiant: `.claude/commands/shaders.md:134-146`.
- **DA-2 (route):** `skill/SKILL.src.md:119-146` (router table), `:20-21` (register first-match-wins), `skill/reference/live.md:193-196` (per-action reference). agent-reviews: `skills/resolve-{agent,human}-reviews/SKILL.md` decision trees.
- **DA-3 (force divergence):** `skill/reference/brand.md:28-42` (reflex-reject lists); `skill/reference/live.md:198-226` (identity lock), `:262-286` (squint test, concrete-noun labels); `skill/scripts/palette.mjs:12-27` (why seed beats frozen palette), `:441-476` (`Math.random()` / hashed `--from`, inverse-frequency hue weighting); `radiant/.claude/commands/shaders.md:134-146` (celebrity → 50 ideas → sub-agent re-rank to 5); `radiant/STYLE.md`.
- **DA-4 (memory):** `skill/scripts/critique-storage.mjs:1-26, 43-68, 175-179`; `context.mjs:84-122`; `context-signals.mjs:41-60`.
- **DA-5 (hooks):** `skill/scripts/hook.mjs:1-14`; `hook-before-edit.mjs:1-11`; `hook-lib.mjs:1-35, 91-104`; `skill/reference/hooks.md`.
- **DA-6 (script talks back):** `skill/scripts/live.mjs:64-90` (`hint`, `nextCommand` computed at runtime), `:126-134` ("the agent decides whether to act"); `skill/SKILL.src.md:15` ("Follow whatever it prints"); `context.mjs` directives (`NO_PRODUCT_MD`, `UPDATE_AVAILABLE`); `context-signals.mjs:13-18` (env probing); `live-wrap.mjs:26-59` (typed fallback shapes).
- **DA-7 (live-wire the browser / live):** `skill/reference/live.md:11-21` (poll loop + reconnect indicator), `:370-400` (param JSON → CSS vars / data attrs, bake-on-accept); `skill/scripts/live-poll.mjs:23-28` (270s cap under Node's 300s ceiling), `:155-184` (self-restarting loop); `live-server.mjs:1-7, 88` (SSE for server→browser, POST for browser→server); `live-browser.js:6078, 6189-6191` (EventSource + auto-reconnect).
- **DA-8 (compile + harness differences):** behavioral diffs — sub-agent spawn/permission `skill/reference/critique.md:32-40`; background-job auto-wake asymmetry `skill/reference/live.md:27-30` (Claude "harness notifies you when it completes"; Codex "background exec sessions do not reliably surface poll stdout"); Codex plan-mode-only questions (codex.md "ask, then STOP and wait" workaround); Cursor sub-agents = cursor.com/docs/subagents (live web, not in HARNESSES.md). Mechanical diffs the build absorbs: `docs/HARNESSES.md:30-107`, `scripts/lib/utils.js:694-737`, `scripts/lib/transformers/index.js:7-16` + `providers.js`, `scripts/build.js:441-696`. Shim aside `skill/scripts/pin.mjs`. ⚠ HARNESSES.md last-verified 2026-04-28; treat as point-in-time, confirm capabilities live.
- **DA-9 (design for the weakest model):** `skill/reference/craft.md:9-20` (non-compressible gates, "you must stop at every gate", "dominant failure mode"); `skill/reference/codex.md` (Codex stop-and-gather context strategy); `skill/reference/live.md` (explicit LCD step lists); `CLAUDE.md:159, 173, 188` (Haiku as the test baseline).
