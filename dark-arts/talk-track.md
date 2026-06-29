# The Dark Arts of Skill Engineering · talk track

Spoken-beat anchors for the **54-slide** deck (`index.html`). The slides are
deliberately sparse: one idea each, and every dark art now *shows* its mechanism
(code, a real artifact, or a side-by-side) rather than describing it. Your voice
carries the substance; the slide is the punctuation. **Don't read the slides.**

Hard 60 incl. Q&A → aim for ~48 min content, ~8 Q&A, ~4 slack. Both demos are
PRE-RUN (see `demos/README.md`); narrate real output, keep terminals warm. It's
tighter than the old cut; the cut-order list at the bottom is your release valve.

**The spine:** we build one skill on stage, from a *spell* (a prompt) to a
*harness extension*. We start at Level 0 (Anthropic's real frontend-design
skill) and climb to Level 9 (Impeccable). Each dark art is the fix to a concrete
failure of the current level. The Spellbook rail ignites one more sigil per
level, all nine lit by the end.

Thesis (the one card): **prompting < harness engineering.**

Each level runs across a few quick slides: *problem → show it → payoff*. Lean on
the show slide (the code, the artifact, the comparison); the problem and payoff
slides are one breath each. Timing column is cumulative and approximate.

---

## ACT I · The spell (~6 min) · slides 1-7

**01 · Title** · `0:00`
- "I built Impeccable. Tonight I'll build it again, live, from a prompt to a
  harness extension. The climb is the talk."

**02 · "Yeah, AI made that."** · `1:00` *(image: slop)*
- "You can call it on sight, every time. The uncomfortable part: this came out of
  the most popular design skill there is."

**03 · Level 0 · a system prompt and a prayer** · `2:00`
- "Impeccable started as Anthropic's frontend-design skill. Genuinely good
  instincts. And pure prose: ~55 lines of named bans. No scripts, no routing."

**04 · Level 0 · the bans** *(code)*
- Read one aloud: "NEVER use overused fonts, Inter, Roboto, system fonts." Then
  plant the two flaws we pay off later: "it over-applies, and a ban just
  relocates the model to the next cluster."
- **Aside (optional, wink):** "Footnote: this skill got rewritten a few days
  after I showed Anthropic Impeccable. Registers, anti-patterns, a two-pass
  process. Draw your own conclusions. We start from the original."

**05 · "The median is the model's gravity."** · `3:30` *(image)*
- "Even 250 lines of real taste can't out-write it. A great prompt is necessary
  and nowhere near enough. The job: make a non-deterministic model behave like
  deterministic software." (Be clear: prompts matter; the harness is the missing
  half, not a replacement.)

**06 · THESIS CARD** · `4:30`
- The phone-camera moment. Say it twice. Optional: "Prompting is the spell.
  Harnessing is the magic."

**07 · The climb (locked spellbook)** · `5:30`
- "From a spell to a harness. Nine dark arts. By the end, every sigil is lit."
  Point at the nine locked sigils.

---

## ACT II · The build (~36 min) · slides 8-48

Each level: *our skill still fails at X* → the dark art → *it levels up* (a sigil
ignites). Call the level each time ("Level 3 now…").

### Level 1 · Make them argue · `6:00` *(deep)*
**08 · problem**: "Level 0 can review a page. But it grades its own homework:
anchors on its first guess and ships it."
**09 · the gag (Gandalf vs Saruman)**: "You don't fix this with a better prompt.
You fix it with a second, blind opinion. So make them argue." Let the image land.
**10 · the two-way bias (three verdicts)**: the heart of *why*. Same skill, three
runs, side by side. "Hand the LLM the detector and it skews both ways. Detector
noisy: it condemns a strong page over fixable nits, a false alarm. Detector
silent: it rubber-stamps a generic page, a clean bill of health that means
nothing. Only the third run, two blind agents then a synthesis, separates
'technically flawed' from 'actually bad.'" This slide is the argument; spend on it.
**11 · code**: "Here's how. Two sub-agents that never see each other. The
deterministic detector is *withheld* until the design review commits, so the cheap
signal can't anchor the expensive one, in either direction."
**12 · payoff**: "Two blind opinions beat one confident guess. Every time."

### Level 1 · the harness wrinkle · `9:00`
**13 · "…but Codex won't" (meme)**: the "Y U NO let me spawn sub-agents" meme.
"Sub-agents aren't free. On Codex a skill can't spawn one unless the user already
allowed it." Let the meme get the laugh, then turn to the fix.
**14 · code**: Read the `<codex>` gate. "Detect the capability, ask once, then
STOP, degrade loudly. Never assume the runtime you wrote for."

**15 · DEMO 1 · watch them argue** · `10:00` *(pre-recorded GIF)*
- `/impeccable critique` on the median page. "Two assessments independently, then
  a synthesis that flags what the eye missed but the detector caught."

### Level 2 · Force divergence · `11:30` *(deep)*
**16 · problem**: "Level 0 banned Inter, so the model picks Space Grotesk. Ban
that, it picks the next cluster. A named ban relocates the monoculture."
**17 · diagram (the cluster escape)**: "Bans just chase the model around its own
cluster. The escape is sideways: out of the cluster entirely." Trace the arrow
from the median blob to the gold dot.
**18 · code (the technique)**: show it, don't just point at it. "Two levers. One:
make the model name its own instinct fonts, then eliminate all three, out-rank
itself. Two: seed from entropy it didn't pick, `palette.mjs --from`, so the
average isn't even on the table."
**19 · "Divergence is the hard part."** *(image: 3 variants)*: "Anyone can summon
the average. The art is conjuring the strange, on purpose."

### Level 3 · Route like a frontier model · `14:30`
**20 · problem**: "Level 0 banned system fonts for everyone. But a product
dashboard should feel native. One rulebook can't serve brand and product."
**21 · diagram (routing)**: one command lights one expert reference, the rest stay
dark. "Each command loads ONE expert reference, not the whole manual."
**22 · code (the router)**: "And it's literal. SKILL.md is a router table:
`/impeccable critique` loads only `critique.md`. Then the register, brand vs
product, decides which rulebook even applies. Mixture-of-experts, for a skill."
**23 · payoff**: "Route to the register, not just the command."

### Level 4 · Give them memory · `16:30`
**24 · problem**: "Every run starts from zero, re-finding the same problems.
Stateless is a choice, not a law."
**25 · artifact (snapshot + trend)**: a real `.impeccable/critique/…md` snapshot
(score, P0/P1) beside a 24 → 28 → 32 trend line. "Critique writes the snapshot,
polish reads it as a backlog. The slug is the resolved file path, not the prompt
wording, so a teammate on the same file gets the same memory. The runs compound."
**26 · payoff**: "Make the runs compound."

### Level 5 · The script talks back · `18:30` *(deep)*
**27 · problem**: "Our prompts are sharp, but buried rules still get skimmed,
weak models worst."
**28 · code**: "The skill body literally says 'follow whatever the script
prints.' It reads the environment and writes the next instruction. Steers harder
than anything static. The cost: it breaks prompt caching." (Still prose, just
computed and just-in-time.)
**29 · payoff**: "The exit value is the prompt."

### Level 6 · Hooks that fight back · `21:00`
**30 · problem**: "It only helps when you invoke it. But the agent makes its
worst edits when nobody called the skill at all."
**31 · the gag (grappling hooks)**: "So the hooks come to you." Lean into it.
**32 · code**: "PostToolUse runs the detector on every edit; Cursor's pre-gate
blocks the bad write before it lands. (Honest aside: a static hook scans the file
on disk; runtime-generated UI is a blind spot, so dogfood the rendered page.)"
**33 · payoff**: "Passive guardrails beat a command no one remembers to run."

**34 · DEMO 2 · the hook fires unprompted** · `23:00` *(staged thread animation, built into the slide)*
- The slide animates a faked Claude Code thread: the bad edit lands, then the
  system-reminder appears on its own. Real hooks fire silently, so we dramatize it.
- "I never call the skill. One bad edit, and a system-reminder pops into the
  thread on its own, the moment it hits disk."

### Level 7 · Live-wire the browser · `24:30` *(deep)*
**35 · problem**: "Tuning a visual thing by typing is miserable, 'a little more
padding, no, warmer, less.' The move: make the browser a second input alongside
chat. You grab the real element and adjust it live; the agent iterates with you.
(This isn't a screenshot/validation loop, it's the browser as an input device.)"
**36 · code (the trick)**: walk the four moves. "A tiny server injects a picker
into your dev page. Your agent runs ONE blocking command, `live-poll.mjs`, and
just waits. You drag a knob in the running app; that becomes the event the poll
returns. The agent, same chat thread, edits the file and replies, and the page
updates. No MCP, no plugin, the agent's own thread is the loop."
**37 · the loop diagram**: "You act in the browser, your own agent picks it up and
pushes the change back, live. Three boring web primitives: long-poll (agent↔
server), SSE (server→browser), POST (browser→agent). No MCP."
**38 · "…and it's live."** *(GIF, money shot)*: Drag a knob in the running app,
the agent rewrites the variant, the page updates. "No regeneration." Sells it.

### Level 8 · Compile to every harness · `29:30`
**39 · problem (meme)**: the "IT WORKED ON MY MACHINE" Cybertruck meme. "Great in
your harness, on your model. Hand it to a teammate on Codex or Cursor and it
breaks, and the differences that bite are behavioral, not file paths."
**40 · the symlink myth**: "The advice all over X is 'just symlink .claude to
.agents.' I wish it worked, the way I wish french fries were healthy. But
harnesses don't share a folder, or a behavior."
**41 · the table**: Walk it: who can spawn a sub-agent, plan-mode-only questions,
and the big one, **Claude auto-wakes the thread when a background job exits;
others don't** (why the live loop is built the way it is).
**42 · code (one source, every harness)**: the show, and the answer to "why
compile at all." "Forget the model name, that's trivial. The line 'ask the user'
has to become a different *tool* on each harness: AskUserQuestion on Claude,
Codex's structured input tool on Codex, plain chat on Cursor. Hardcode one and
the skill is dead everywhere else. Same for where rules live, CLAUDE.md vs
AGENTS.md vs .cursorrules, plus the `<codex>`/`<gemini>` patch blocks. The build
resolves every integration point per target. Your skill is a codebase; give it a
build step."
**43 · logos · write once, ship to all**: One source → 10+ provider builds, right
paths and per-model patches.
**44 · the receipt (the real installer)**: "Even `npx skills` copies one folder
and clones it everywhere, not from each harness's own folder. I sent a PR to fix
it; it's still hanging. So I built `npx impeccable skills install`: a
harness-specific build, dropped in each harness's own place."
**45 · "MODEL MOST WANTED"** · `32:30` *(self-contained meme poster, the laugh)*
- The slide says it: GEMINI charged with `img:hover { scale(1.1) }`, CODEX with
  `letter-spacing: -0.06em` (both real detector rules). Let it land, then the
  point: "Because you compile, you can overfit per model, a patch per tell."

### Level 9 · Design for the weakest model · `34:00`
**46 · problem**: "Last reality: it falls apart on a weaker model. It has opinions
just fine; what it loses is the discipline to follow yours."
**47 · code**: "Build for the dumbest model you'll actually run, not frontier
Opus. Non-compressible gates, hard stops, no inference."
**48 · payoff**: "If the gate can be skipped, it will be. Make it un-skippable."

---

## ACT III · The harness extension (~5 min) · slides 49-54

**49 · "One skill to rule them all"** · `36:00` *(the Frodo poster)*
- Let the gag breathe, then turn it: "Coming soon to a harness near you."

**50 · The reveal** · `36:30`
- "We just built a harness extension. We started from Anthropic's prompt, rewrote
  every line of it, then did the nine things a prompt can't. **This is
  Impeccable.**" (Don't say 'only machinery' or 'prompt + arts': none of the
  original survives, and Impeccable still has heavily-iterated prose; the arts
  are what a prompt can't do.)
- Voice the close here too: "You'll iterate the prose forever, and you should, I
  did, heavily. But what breaks the median is everything around it. The nine
  things a prompt can't be."

**51 · The capability map** · `37:30` *(what a prompt can't do)*
- The payoff of the build-up: nine concrete powers Impeccable gained, each with the
  file it lives in. "A prompt suggests a design, once. Now it reviews itself,
  escapes the average, routes per surface, remembers, adapts, guards every edit,
  tunes in the browser, runs on any harness, holds on weak models." Let them
  photograph.

**52 · CTA · try it Monday** · `39:00`
- "It's Apache 2.0, every snippet tonight is in the repo, steal it."
  `npx impeccable skills install`; clone `dark-arts/starter`; run
  `/impeccable critique` on the page you're least proud of.

**53 · Questions** · `40:00` · "Where does this break? What did I get wrong?"

**54 · Thank you** · `~58:00` · impeccable.style · github/pbakaus.

---

## If you're running long (cut order)
The four show slides (10, 18, 22, 42) are the workshop; cut them last.
1. Quicken Level 9: drop the code slide (47), keep the payoff.
2. Collapse the Codex wrinkle (13-14) into one sentence on Level 1.
3. Drop the route/memory/script payoff slides (23, 26, 29); say the line over the
   show slide instead.
4. Fold the live money-shot (38) into the loop-diagram (37) narration.
5. Trim Level 3: if truly desperate, drop the route diagram (21) and keep the
   router code (22); the code carries the idea.

## Q&A prep
- **"Isn't this over-engineering?"** For a one-off prompt, yes. The arts earn
  their cost on skills you ship and reuse. Use the art the problem needs.
- **"Sub-agents cost 2x tokens."** Yes; you're buying independence from one
  agent's anchoring. For a critique you'll act on, cheap.
- **"Doesn't script-talks-back kill prompt caching?"** Yes, named on the slide.
  A deliberate trade: cache hit vs. obedience. Pick per call.
- **"MCP exists for the live loop, why not use it?"** You can. Poll + SSE is
  tighter, zero-dependency, works in any harness with a browser tool.
- **"Will this work on my harness?"** That's Level 8: compile the mechanical
  gaps, detect-and-degrade the behavioral ones. Missing capability → say so.
- **"Anthropic already has a frontend-design skill."** That's Level 0, where we
  started. The nine arts are what turn that prompt into a harness extension.
