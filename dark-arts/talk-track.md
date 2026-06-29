# The Dark Arts of Skill Engineering · talk track

Spoken-beat anchors for the **50-slide** deck (`index.html`). The slides are
deliberately sparse now: one idea each. Your voice carries the substance; the
slide is the punctuation. **Don't read the slides.**

Hard 60 incl. Q&A → aim for ~46 min content, ~10 Q&A, ~4 slack. Both demos are
PRE-RUN (see `demos/README.md`); narrate real output, keep terminals warm.

**The spine:** we build one skill on stage, from a *spell* (a prompt) to a
*harness extension*. We start at Level 0 (Anthropic's real frontend-design
skill) and climb to Level 9 (Impeccable). Each dark art is the fix to a concrete
failure of the current level. The Spellbook rail ignites one more sigil per
level, all nine lit by the end.

Thesis (the one card): **Prompting < harness engineering.**

Each beat now runs across a few quick slides, usually **problem → gag → code →
payoff**. Lean on the gag and the code; the problem/payoff slides are one breath
each. Timing column is cumulative and approximate.

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

## ACT II · The build (~34 min) · slides 8-44

Each level: *our skill still fails at X* → the dark art → *it levels up* (a sigil
ignites). Call the level each time ("Level 3 now…").

### Level 1 · Make them argue · `6:00` *(deep)*
**08 · problem**: "Level 0 can review a page. But it grades its own homework:
anchors on its first guess and ships it."
**09 · the gag (Gandalf vs Saruman)**: "You don't fix this with a better prompt.
You fix it with a second, blind opinion. So make them argue." Let the image land.
**10 · code**: "Two sub-agents that never see each other. The non-obvious bit:
the deterministic detector is *withheld* until the human-style review commits, so
the cheap signal can't anchor the expensive one."
**11 · payoff**: "Two blind opinions beat one confident guess. Every time."

### Level 1 · the harness wrinkle · `8:30`
**12 · "…but Codex won't" (meme)**: the "Y U NO let me spawn sub-agents" meme.
"Sub-agents aren't free. On Codex a skill can't spawn one unless the user already
allowed it." Let the meme get the laugh, then turn to the fix.
**13 · code**: Read the `<codex>` gate. "Detect the capability, ask once, then
STOP, degrade loudly. Never assume the runtime you wrote for."

**14 · DEMO 1 · watch them argue** · `9:30` *(pre-recorded GIF)*
- `/impeccable critique` on the median page. "Two assessments independently, then
  a synthesis that flags what the eye missed but the detector caught."

### Level 2 · Force divergence · `11:00` *(deep)*
**15 · problem**: "Level 0 banned Inter, so the model picks Space Grotesk. Ban
that, it picks the next cluster. A named ban relocates the monoculture."
**16 · code**: "Real divergence is two levers: make the model eliminate its OWN
top picks, then seed from the user so the average isn't even on the table."
**17 · "Real magic isn't generation. It's divergence."** *(image: 3 variants)*:
"Anyone can summon the average. The art is conjuring the strange, on purpose."

### Level 3 · Route like a frontier model · `13:30`
**18 · problem**: "Level 0 banned system fonts for everyone. But a product
dashboard should feel native. One rulebook can't serve brand and product."
**19 · diagram (routing)**: one command lights one expert reference, the rest stay
dark. "Register (brand vs product) decides which rules even apply. Each command
loads ONE expert reference, not the whole manual. Mixture-of-experts, for skills."
**20 · payoff**: "Route to the register, not just the command."

### Level 4 · Give them memory · `15:30`
**21 · problem**: "Every run starts from zero, re-finding the same problems.
Stateless is a choice, not a law."
**22 · diagram (snapshot + trend)**: a real `.impeccable/critique/…md` snapshot
(score, P0/P1) beside a 24 → 28 → 32 trend line. "Critique writes the snapshot,
polish reads it as a backlog. The slug is the resolved file path, not the prompt
wording, so a teammate on the same file gets the same memory. The runs compound."
**23 · payoff**: "Make the runs compound."

### Level 5 · The script talks back · `17:30` *(deep)*
**24 · problem**: "Our prompts are sharp, but buried rules still get skimmed,
weak models worst."
**25 · code**: "The skill body literally says 'follow whatever the script
prints.' It reads the environment and writes the next instruction. Steers harder
than anything static. The cost: it breaks prompt caching." (Still prose, just
computed and just-in-time.)
**26 · payoff**: "The exit value is the prompt."

### Level 6 · Hooks that fight back · `20:00`
**27 · problem**: "It only helps when you invoke it. But the agent makes its
worst edits when nobody called the skill at all."
**28 · the gag (grappling hooks)**: "So the hooks come to you." Lean into it.
**29 · code**: "PostToolUse runs the detector on every edit; Cursor's pre-gate
blocks the bad write before it lands. (Honest aside: a static hook scans the file
on disk; runtime-generated UI is a blind spot, so dogfood the rendered page.)"
**30 · payoff**: "Passive guardrails beat a command no one remembers to run."

**31 · DEMO 2 · the hook fires unprompted** · `22:00` *(staged thread animation, built into the slide)*
- The slide animates a faked Claude Code thread: the bad edit lands, then the
  system-reminder appears on its own. Real hooks fire silently, so we dramatize it.
- "I never call the skill. One bad edit, and a system-reminder pops into the
  thread on its own, the moment it hits disk." (If you want a real capture too,
  record the actual hook firing as a fallback; the slide stands on its own.)

### Level 7 · Live-wire the browser · `23:30` *(deep)*
**32 · problem**: "Tuning a visual thing by typing is miserable, 'a little more
padding, no, warmer, less.' The move: make the browser a second input alongside
chat. You grab the real element and adjust it live; the agent iterates with you.
(This isn't a screenshot/validation loop, it's the browser as an input device.)"
**33 · code (the trick)**: walk the four moves. "A tiny server injects a picker
into your dev page. Your agent runs ONE blocking command, `live-poll.mjs`, and
just waits. You drag a knob in the running app; that becomes the event the poll
returns. The agent, same chat thread, edits the file and replies, and the page
updates. No MCP, no plugin, the agent's own thread is the loop."
**34 · the loop diagram**: "You act in the browser, your own agent picks it up and
pushes the change back, live. Three boring web primitives: long-poll (agent↔
server), SSE (server→browser), POST (browser→agent). No MCP."
**35 · "…and it's live."** *(GIF, money shot)*: Drag a knob in the running app,
the agent rewrites the variant, the page updates. "No regeneration." Sells it.

### Level 8 · Compile to every harness · `28:30`
**36 · problem (meme)**: the "IT WORKED ON MY MACHINE" Cybertruck meme. "Great in
your harness, on your model. Hand it to a teammate on Codex or Cursor and it
breaks, and the differences that bite are behavioral, not file paths."
**37 · the symlink myth**: "The advice all over X is 'just symlink .claude to
.agents.' I wish it worked, the way I wish french fries were healthy. But
harnesses don't share a folder, or a behavior."
**38 · the table**: Walk it: who can spawn a sub-agent, plan-mode-only questions,
and the big one, **Claude auto-wakes the thread when a background job exits;
others don't** (why the live loop is built the way it is).
**39 · logos · write once, ship to all**: One source → 10+ provider builds, right
paths and per-model patches. "Your skill is a codebase. Give it a build step."
**40 · the receipt (the real installer)**: "Even `npx skills` copies one folder
and clones it everywhere, not from each harness's own folder. I sent a PR to fix
it; it's still hanging. So I built `npx impeccable skills install`: a
harness-specific build, dropped in each harness's own place."

**41 · "MODEL MOST WANTED"** · `31:30` *(self-contained meme poster, the laugh)*
- The slide says it: GEMINI charged with `img:hover { scale(1.1) }`, CODEX with
  `letter-spacing: -0.06em` (both real detector rules). Let it land, then the
  point: "Because you compile, you can overfit per model, a patch per tell."

### Level 9 · Design for the weakest model · `33:00`
**42 · problem**: "Last reality: it falls apart on a weaker model. It has opinions
just fine; what it loses is the discipline to follow yours."
**43 · code**: "Build for the dumbest model you'll actually run, not frontier
Opus. Non-compressible gates, hard stops, no inference."
**44 · payoff**: "If the gate can be skipped, it will be. Make it un-skippable."

---

## ACT III · The harness extension (~5 min) · slides 45-50

**45 · "One skill to rule them all"** · `35:00` *(the Frodo poster)*
- Let the gag breathe, then turn it: "Coming soon to a harness near you."

**46 · The reveal** · `35:30`
- "We just built a harness extension. We started from Anthropic's prompt, rewrote
  every line of it, then did the nine things a prompt can't. **This is
  Impeccable.**" (Don't say 'only machinery' or 'prompt + arts': none of the
  original survives, and Impeccable still has heavily-iterated prose; the arts
  are what a prompt can't do.)
- Voice the close here too (the standalone slide is cut, it's implied): "You'll
  iterate the prose forever, and you should, I did, heavily. But what breaks the
  median is everything around it. The nine things a prompt can't be."

**47 · The capability map** · `36:30` *(what a prompt can't do + the take-home)*
- The payoff of the build-up: nine concrete powers Impeccable gained, each with the
  file it lives in. "A prompt suggests a design, once. Now it reviews itself,
  escapes the average, routes per surface, remembers, adapts, guards every edit,
  tunes in the browser, runs on any harness, holds on weak models. Every one is
  Apache 2.0, steal them." Let them photograph. (This merges the old Spellbook slide.)

**48 · CTA · try it Monday** · `38:00`
- `npx impeccable skills install`; clone `talks/dark-arts/starter`; run
  `/impeccable critique` on the page you're least proud of.

**49 · Questions** · `39:00` · "Where does this break? What did I get wrong?"

**50 · Thank you** · `~58:00` · impeccable.style · github/pbakaus.

---

## If you're running long (cut order)
1. Quicken Level 9: drop the code slide (43), keep the payoff.
2. Collapse the Codex wrinkle (12-13) into one sentence on Level 1.
3. Trim Level 3: drop the payoff slide (20); the system-fonts line carries it.
4. Fold the live money-shot (35) into the loop-diagram (34) narration.
5. Drop the route/memory/script payoff slides (20, 23, 26); say the line over the
   code instead.

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
