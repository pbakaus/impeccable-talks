# Demo runbook, The Dark Arts of Skill Engineering

Two small live demos. Both are **pre-run the night before** so on stage you
narrate real output instead of watching a model think. Keep a warm terminal on a
second desktop for an optional encore. Screenshot fallbacks live in
`demos/fallbacks/` (capture these during the pre-run).

Prereq once: `npx impeccable skills install` in whatever harness you present
from (Claude Code is the safest bet for the demos).

---

## Demo 1, Make them argue (`/impeccable critique`)

**Goal:** show two independent assessments coming back and the synthesis
flagging what the eye missed but the detector caught.

**Target:** `demos/median-page/index.html`, a deliberately median SaaS landing.
It looks fine. That is the point. It hits the 2026 tells: warm-cream bg, Inter,
three identical icon-tile feature cards, one accent pill, "seamless / robust /
empowers" copy.

**Steps**
1. Serve it (so the agent can open it in a browser):
   ```bash
   cd dark-arts/demos/median-page && python3 -m http.server 8920
   ```
2. In the harness:
   ```
   /impeccable critique demos/median-page/index.html
   ```
3. Narrate as it works:
   - Two sub-agents go out **independently** (Assessment A = design director,
     Assessment B = the deterministic detector + browser).
   - The synthesis **weaves** them: where they agree, and where the detector
     caught a tell the prose review glossed.
4. Land the line: *the page didn't look broken. That's the median. The detector
   is the agent that can't be sweet-talked.*

**Quick non-agent fallback** (proves the deterministic half on its own, no API):
```bash
npx impeccable detect dark-arts/demos/median-page/index.html
```
This prints the rule hits (icon-tile-stack ×3, overused-font, tight-leading, …).
Good as a backup if the live agent run is flaky.

> Do **not** add `impeccable-disable` comments to `median-page/index.html`.
> The findings are the demo. Suppressing them breaks it.

---

## Demo 2, The hook fights back (no skill invocation)

**Goal:** prove the spookiest claim live, your skill keeps working when nobody
called it.

You can use the **real Impeccable hook** (if installed) or the tiny **starter
hook** (`dark-arts/starter/scripts/hook.mjs`), which is easier to show
because the trigger is obvious.

### Option A, starter hook (most legible on stage)
1. Wire it: copy the `hooks` block from
   `dark-arts/starter/.claude-settings.example.json` into your project's
   `.claude/settings.json`.
2. In the harness, with **no skill invoked**, ask the agent to edit any file and
   leave a `TODO: fix later` in it.
3. The moment the edit lands, a system-reminder appears in the thread, uninvited:
   *"[spellbook] … tripped a guardrail."*
4. Land the line: *I never called the skill. It watched the edit and pushed back.*

### Option B, real Impeccable hook (design tell)
1. Ensure the hook is installed (`/impeccable hooks` to check/enable).
2. With no skill invoked, have the agent add an obvious tell to a UI file, e.g.
   an image hover-zoom: `img:hover { transform: scale(1.1); }`, or a warm-cream
   body background.
3. The PostToolUse hook runs the detector and injects findings as a
   system-reminder, again, with no command from you.

**Dry-run the hook outside an agent** (sanity check during pre-run):
```bash
printf 'x\nTODO: fix later\n' > /tmp/t.js
echo '{"tool_input":{"file_path":"/tmp/t.js"}}' | node dark-arts/starter/scripts/hook.mjs
# → prints the guardrail JSON
```

---

## Pre-run checklist (night before)
- [ ] `npx impeccable skills install` in the presenting harness.
- [ ] Run Demo 1 end to end; screenshot the critique output → `demos/fallbacks/critique.png`.
- [ ] Run `npx impeccable detect` on the median page; confirm it flags (backup).
- [ ] Wire and fire the hook (Demo 2); screenshot the system-reminder → `demos/fallbacks/hook.png`.
- [ ] Park both terminals on a second desktop for the encore.
- [ ] Confirm the deck serves: `cd dark-arts && python3 -m http.server 8910` → open `http://localhost:8910/`.
