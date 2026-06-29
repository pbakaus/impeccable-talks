# Killing the handoff · talk track

Bullets to anchor the spoken track. Voice your own words. Timing is approximate; the slot is 30 minutes, target ~22 min of content so Q&A gets real room.

Total: 35 slides · ~22 min · 5 acts plus close. Demo is PRE-RUN (see checklist at the bottom); the terminal stays warm only as an optional encore.

---

## ACT I · The contract broke (~5 min)

### 01 · Title
*Brand lockup top-left. Real homepage kintsugi hero on the right. Big "Killing the handoff."*

- Open with name, then go straight into the origin story. This is the case-study frame for the whole talk:
  - "A good friend of mine is the lead PM at a climate-certificate trading startup. Fortune 500 customers, they trade EACs. They needed their client experience rebuilt as a modern SaaS platform, and they hired me. One person, instead of a five-to-ten person dev agency."
  - "That meant dozens of pages, states, components. A large surface with a real design system. And the agent failed me over and over. It wouldn't respect the system. It kept sneaking in AI slop. It didn't grok what I wanted."
  - "What I built to survive that project is what this talk is about. But first, the bigger thing it taught me: something quietly broke in design work over the last 18 months."
- Promise the shape: "Five acts, receipts from a real run, then I want your hard questions."

→ click

### 02 · Handoff chain (intact)
*Five circles connected: Figma → Spec → Dev → QA → Ship. Ship in gold.*

- Every product team has lived inside this chain.
- Name each link as you read across. Slow down on QA. That's where work got *seen*.
- "The handoff was how a mockup became a thing that shipped."

→ click

### 03 · "The handoff was the contract."
*Display headline. Body: where work got "seen".*

- The handoff was the *contract* between disciplines.
- Where someone with taste looked at the thing and said "no, again." That moment kept quality up.
- "The handoff was the org chart for design as much as for delivery."

→ click

### 04 · Cadence compression bars
*Three bars: Waterfall (weeks), Agile (days), AI-native (hours, tiny gold).*

- Read the bars left to right. Let the visual do most of the work.
- "Waterfall took weeks. Agile took days. AI-native takes hours."
- "The bar on the right is real. I've watched product teams ship four screens before lunch."

→ click

### 05 · "Product teams ship 10x faster."
*Display headline. Body: handoff doesn't fit a one-day cycle.*

- 10x is not a metaphor.
- "The handoff doesn't fit inside a one-day cycle. So teams quietly stopped doing it."
- Beat.

→ click

### 06 · Chain broken
*Same diagram, but two links snapped with vermilion break marks. Dev highlighted with "+ AI".*

- "Two links snapped quietly. Spec to dev. QA to ship."
- "Dev plus AI now ships direct to production."
- "No one with taste sits between the prompt and the deploy."
- *Remember this slide. It comes back, repaired, at the close.*

→ click

### 07 · Designers stayed on the canvas. Devs moved into the app.
*Two-column diagram: left = empty Figma artboard, right = live code editor with active dot. Vermilion "NO BRIDGE" between.*

- This is the deeper diagnosis. The two disciplines now live in different rooms, and the bridge between them is gone.
- "Designers stayed where they always were. In Figma, Miro, on canvases of the thing."
- "Devs moved into the actual running app, with AI as a copilot."
- "The bridge that used to carry design *into* product is gone. And design's been losing influence ever since."
- This is the slide that sets up the whole rest of the talk: the solution is design moving into the same room as dev.

→ click

### 08 · "Quality silently degrades."
*Display headline. Body: it isn't dramatic, nothing crashes.*

- The hidden cost. No incident report. No alert.
- "You just open the build six months later and notice it looks like every other one."
- Transition: "Let me show you what that looks like."

→ click

---

## ACT II · Receipts (~3 min)

### 09 · 2022 slop, full bleed
*Lumina 2022 page: purple/cyan gradient, glassmorphism, dark hero.*

- Let the audience LOOK.
- "When I say AI slop, you probably picture something like this."
- Beat. Laugh / cringe.

→ click

### 10 · 2022 caption overlay
*Same page dimmed. "You probably think of this."*

- Name the tells: purple-to-cyan gradients, glassmorphism, manifesto copy, six emoji.
- "You knew it on sight."
- Set up the twist.

→ click

### 11 · 2026 slop, full bleed
*Lumina 2026 page: cream, Fraunces italic, "Start free trial" pill, very tasteful.*

- Wait a beat.
- "This is also slop."
- Watch for the room realizing they like the look of this page.

→ click

### 12 · 2026 caption overlay
*"It just wears a suit." Subtitle: tells of 2026 slop.*

- "It just wears a suit."
- Tells in 2026: crisp grid, one accent button, tasteful neutrals, Inter 600.
- "Six other startups have this page right now. It looks fine. It looks familiar. It looks like every other one."
- Key line: "Slop is a moving target. It always was."
- Personal hook: "This is the exact fight I was losing on the climate platform. Tasteful, familiar, wrong."

→ click

### 13 · Catalog wall
*Grid of 40 anti-pattern tiles, no labels. The 12 gold tiles need a model's eye.*

- Let the wall speak first. Then the stats, spoken: "Forty of these patterns in the wild mark an interface as AI-generated. Twenty-eight of these you can catch with deterministic rules. Twelve need a model to look at the page and judge. Those are the gold ones."
- Point to a few that are funny: "hero eyebrow / pill chip", "amputating mobile features".
- *Don't name Impeccable yet. That comes later. This is just "the shape of the problem".*

→ click

---

## ACT III · The asymmetry (~4 min)

### 14 · "Devs are drowning in slop too."
*Display headline. Body: duplicated logic, dead abstractions, tech debt.*

- The pivot out of design-land. Slop is not a design-only phenomenon.
- "Coding agents ship sloppy code the same way they ship sloppy design. Duplicated logic. Dead abstractions. Quiet tech debt."
- "Engineering noticed early. And engineering did something about it."
- Transition: "Here's what 'did something about it' looks like."

→ click

### 15 · Two toolshelves
*Left: dense ENGINEERING shelf. Right: empty DESIGN box.*

- "Engineering filled its toolbench."
- Name a few: Copilot and Cursor to generate, CodeRabbit and Greptile to *review*. "Linters, review agents, CI gates. A whole immune system for code slop. More tools shipping weekly."
- Then the silence: "Design got nothing comparable. A few hand-wringing posts on LinkedIn."
- **The bridge (don't click yet):** "And here's what happens in that vacuum. Engineers shipping UI without a designer in the loop are not villains. They try to be helpful. They turn to the model and type the only design direction they have..."

→ click

### 16 · "A good designer never says 'make it nicer.'"
*Display headline. Body: the well-meaning prompt, then what good direction is.*

- "...'make it nicer.'"
- "And the model shrugs back the page you saw five minutes ago. 'Nicer' isn't direction. It's a shrug in prompt form."
- The lesson: "A good designer never says 'make it nicer.' They give the work *vocabulary*. Constraints. References. A point of view."
- "That's the input the agent has been missing."

→ click

### 17 · Two moves (the bet)
*Display: "You can't make a model better at design." Two columns: − Subtract its bias / + Add the vocabulary.*

- Frame it as the second naive fix. "So if 'make it nicer' doesn't work, the obvious next idea: just make the model great at design."
- Beat.
- "You can't. This is the part that took me a year to learn. Skills can't teach taste. We tested it. Doesn't move the needle."
- "But two things skills *can* do, together, get you most of the way."
- Read the two halves aloud:
  - "Subtract its bias. The 40 patterns we just saw, gone."
  - "Add the vocabulary. Give designers the words to steer with."
- Closing line: "The model isn't suddenly a designer. It's just no longer the default voice in the room, and the designer is back at the wheel."

→ click

### 18 · Vocabulary spread
*40+ design terms: adjectives plus craft terms (vertical rhythm, negative space, optical alignment, hierarchy). 12 in kinpaku gold.*

- "Here's what that vocabulary actually looks like."
- Read a few aloud, varying weight: "restrained. bolder. brutalist. negative space. vertical rhythm. distill. polish."
- "The gold ones we'll meet again in a few minutes. Keep them in mind."

→ click

### 19 · Five passes
*Same brief, five visually distinct cards: baseline / /bolder / /quieter / /distill / /polish.*

- "Here's what 'add the vocabulary' actually buys you."
- "Same brief. Five adjectives. Five outcomes."
- Walk across the cards left to right. Let the cards do the talking.
- Baseline: "this is what the model gives you. Bland."
- /bolder: "magazine cover."
- /quieter: "Aesop, museum spread."
- /distill: "one word, that's it."
- /polish: "production-grade. The only one I'd actually ship."

→ click

---

## ACT IV · Impeccable (~4 min)

### 20 · What is Impeccable (30-second explainer)
*Three-block diagram: 01 Your editor (logos) → 02 A skill (npm install) → 03 A command (/impeccable critique).*

- "Before I name the thing, a 30-second explainer. If you've never used Cursor or Claude Code:"
- Point to block 01: "An AI coding tool is a code editor with an AI built in. You talk to it in English. Cursor, Claude Code, Codex. Same shape."
- Block 02: "A 'skill' is a package the agent loads. Like installing a plugin. Takes one command. Thirty seconds."
- Block 03: "Then you type commands in chat. The agent reads the skill, applies the change to your real code, shows you the result."
- Closing line: "You don't have to be a developer. The vocabulary is yours. The agent is the brush."

→ click

### 21 · Impeccable wordmark (the reveal)
*Big "IMPECCABLE" in solid Alumni Sans gold. D1 double-notch rule beneath. Caption: rule engine + 23 commands.*

- "And the thing is called Impeccable."
- "Two halves of one open-source skill. A rule engine that catches the slop you saw on the catalog wall. Twenty-three adjective commands that give designers the wheel."
- "Runs inside twelve AI coding tools today."

→ click

### 22 · Periodic table (23 commands)
*Grid of 23 command tiles, color-coded by category. Legend top right.*

- "Here are the 23 as a periodic table."
- Quick tour of categories: "Create, Evaluate, Refine, Simplify, Harden, System."
- Pick the ones in the demo: "/critique, /polish, /live, /bolder."
- "Each cell is a domain reference an agent loads on demand."

→ click

### 23 · Two registers + your design system
*Side-by-side: magazine spread (Brand) vs dashboard (Product). Close line below about existing design systems.*

- "Design splits cleanly into two registers."
- Brand: "design IS the product. Marketing, landing, editorial. The bar is distinctiveness."
- Product: "design SERVES the product. Admin, dashboards, tools. The bar is earned familiarity."
- "Impeccable shapes its commands differently per register. /bolder in product is restraint. /bolder in brand is louder."
- **The design-system beat (read the close line, then make it personal):**
  - "And if you already have a design system: setup reads it before touching anything. Your tokens, your DESIGN.md, your component idioms. /extract will reverse-engineer one from UI you already have."
  - "This part is personal. The reason Impeccable exists at all is an agent trampling an existing design system, on that climate platform. The commands steer inside your system, not around it."

→ click

### 24 · Twelve harnesses
*Grid of harness logos.*

- "Wherever your agent already lives, Impeccable runs."
- Name the big ones: Claude Code, Cursor, Codex, Gemini, Copilot.
- "Less common harness? Install via npm or symlink. Works the same."
- "Apache 2.0. No telemetry. No account."

→ click

### 25 · Split-screen (code + browser)
*Left: terminal with /impeccable bolder prompt. Right: live browser.*

- "Now the radical move. Code on the left. The running thing on the right."
- Walk through the agent log: "Scans the page. Picks up the hero. Applies /bolder against the brand register."
- "The browser updates as it goes. Live."

→ click

### 26 · "No canvas. No handoff. No translation."
*Same split-screen, dimmed. Big caption overlay.*

- Slow read.
- "No canvas. No handoff. No translation."
- "Yes, I know how this sounds to designers. The thing you give up is a canvas. The thing you get back is the only surface that actually ships."

→ click

---

## ACT V · The run (~3.5 min, PRE-RUN)

The demo is pre-run the night before. You narrate real output instead of waiting on a model. Keep the terminal open in another desktop only as an encore if Q&A runs light.

### 27 · Demo card "DEMO"
*Gold-leaf chip "Better to show than tell", huge DEMO wordmark in kinpaku, anchor rule below.*

- "Let me show you what this did to the page you just cringed at. I ran this last night so we're not watching a model think."
- Click forward.

→ click

### 28 · Demo preview
*Three numbered cells: 01 /impeccable critique · 02 /impeccable live · 03 chrome extension.*

- "Three passes on the 2026 slop page from earlier."
- One line per beat. On 02, plant the flag for the small-change case: "and the second one is for every designer who's thought 'asking the AI takes longer than doing it myself'."
- "Receipts on the next slide."

→ click

### 29 · Critique receipts (real output)
*Terminal frame with the actual /impeccable critique findings from the 2026 page.*

- "This is real output, unedited."
- Read three findings aloud, slowly. Suggested: icon-tile-stack ("the universal AI feature-card template"), overused-font ("Inter for UI, Fraunces for display, the 2026 default pairing"), cream-palette ("the safe warm off-white, reached for by reflex").
- Land the verdict line: "Eight findings. The page that 'looks fine' fails five distinct rules."
- "The page didn't look broken. That's the point. Slop in a suit."

→ click

### 30 · Before / after
*Three cells: Before (cream slop), After (recovered), Verdict (41/41 detector clean).*

- "Then the fix. /critique told us what's wrong, /distill and /polish did the work, and /impeccable live handled the fine-tuning."
- **The small-change answer (say it explicitly, this question WILL come up):**
  - "/live is the answer to death-by-prompting. You grab one element in the running app, the agent gives you parameters, you drag them like Figma handles, you accept. No prompt ping-pong for a 2px nudge."
- Walk the cells: "Same brief. Same content. Three commands. A page that looks like itself."
- "And the detector that flagged it earlier finds nothing now. 41 out of 41 rules pass. That's the bar."

→ click

---

## CLOSE (~2.5 min)

### 31 · Chain reforged (call-back)
*The slide-6 chain again. Figma and Spec dimmed, the old break joined by a gold kintsugi seam: Dev + AI → Taste → Ship, all in gold.*

- Pause. Let the room recognize the diagram from the opening.
- "Remember this chain? Here's where it ends up."
- "The handoff between spec and dev stays dead. We're not bringing it back, it doesn't fit a one-hour cycle."
- "But the link that actually mattered, someone with taste between the prompt and the deploy, that one comes back. Inside the loop."
- "Kintsugi. You repair the break with gold. The seam is the point."

→ click

### 32 · Takeaway
*Display: "Killing the handoff doesn't mean killing the critique."*

- The thesis sealed.
- Slow, clean.
- "The handoff is gone. The work it did is what we have to rebuild. Inside the loop, not outside it."
- Origin call-back, short: "The climate platform from the start of this talk is where every rule you saw tonight came from. The agent never got better at design. The loop did."
- *(Optional, if you want one more sentence: a one-line update on where that platform is today.)*

→ click

### 33 · Try it this week
*Three steps with code snippets.*

- "Three commands. Ten minutes. Monday morning."
- Read install line aloud: "`npx impeccable skills install`."
- "Then `/impeccable critique` on the page you're least proud of."
- "Then `/impeccable live`."
- "Do those three things before standup and you'll know whether this is real for your team."

→ click

### 34 · Q&A
*"Questions?" in patina.*

- "Now the hard part. Questions, pushback, where does this break."
- Welcome the "I don't buy that" and "but what about".
- Pause. Take the first question.

### 35 · Thank you
*"Thank you." in display. Sign-off with three links.*

- After Q&A wraps.
- "Try it at impeccable.style. Source on GitHub. Email me anything."

---

## Pre-run checklist (night before)

- Run `/impeccable critique` on `slop/2026.html` in a real harness; confirm the findings match slide 29 (the deck's terminal copy mirrors actual detector output: icon-tile-stack ×3, hero-eyebrow-chip, overused-font ×2, cream-palette, tight-leading).
- Run the `/distill` → `/polish` → `/live` recovery pass; screenshot the after-state so slide 30's "After" cell matches what you describe.
- Run `npx impeccable detect` on the recovered page; confirm it's clean so "41/41" is honest on the day.
- Keep the terminal session and recovered page open on a second desktop for the optional live encore.

## Q&A prep

- **"Does it work with an existing design system?"** Yes, and that's the origin story: setup reads PRODUCT.md and DESIGN.md before any command runs, the register field shapes every downstream decision, and `/extract` reverse-engineers tokens and idioms from an existing UI when there's no written system. If the slide-23 beat landed, this question becomes a callback, not a defense.
- **"Small tweaks take more prompts than doing it myself."** Concede it first: if you know exactly which CSS line to change, hand-editing wins, full stop. The honest pitch is the cases around that: `/impeccable live` turns small visual decisions into direct manipulation (drag parameters in the browser, accept once), and the rule engine plus Chrome extension work as guardrails with zero prompting at all. The goal isn't to out-type a designer; it's to make the agent stop undoing their taste.
- **"Anthropic already ships a frontend-design skill."** Perfect bridge to slide 17: you can't make the model better at design; Impeccable subtracts bias and adds vocabulary on top, and it credits Anthropic's skill as the base (see NOTICE.md).
- **"Is this just for designers?"** No; PMs and other non-designers get the most leverage from /critique and the detector, because they ship UI without a designer in the loop at all.

## Notes for the day

- **The two slop slides (09/11) are the only place to let silence work.** Don't fill it.
- **Slide 07 is the new spine.** The spatial divergence ("different rooms, no bridge") is the diagnosis that the rest of the talk solves. Land it.
- **The 15 → 16 → 17 run is one continuous argument.** Empty toolbench → "make it nicer" is the naive fix → "teach the model design" is the second naive fix → the two moves that actually work. Don't let slide boundaries break the sentence; the bridge lines at the end of 15 and the top of 17 carry it.
- **Slide 20 is the audience-rescue slide.** Many designers won't have touched Cursor or Claude Code. Don't skip past it; some people will need this to follow the rest.
- **Slide 31 is the emotional payoff.** Don't rush the reforged chain; it only works if the room remembers slide 6.
- **The origin story is the anti-pitch insurance.** Open with it and the talk is a case study; skip it and the wordmark reveal reads like a launch event.
- **If projector renders too dark:** the lacquer-on-lacquer subtle gradient texture might disappear. Check the slop slide captions for legibility in advance.
