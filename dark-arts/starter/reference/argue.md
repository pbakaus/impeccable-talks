# /spellbook argue

DARK ART · *make them argue.* One agent grades its own homework and anchors on
its first guess. Two blind agents plus a forced synthesis beat it.

## Flow

1. **Spawn two sub-agents that never see each other's output.**
   - **Assessment A** (judgement): "Review this work as a senior critic. What is
     weak, generic, or wrong? Be specific."
   - **Assessment B** (evidence): "Run the deterministic checks / tests / linters.
     Report only what is mechanically true."

2. **Order matters (the debiasing trick).** Let A *finish* before B's
   deterministic output enters the synthesis context. The cheap, confident
   signal will anchor judgement if it arrives first, so withhold it.

3. **Synthesize (weave, never concatenate).** Produce one report that notes
   where A and B agree, where B caught something A missed, and where B is a
   false positive. Do not just staple the two lists together.

## Harness wrinkle (portability)

Sub-agents are not portable. On **Codex**, a skill may only spawn one if the
*user* already asked for parallel work. So:

- If sub-agents are available and allowed → spawn A and B.
- If available but not allowed → ask **exactly once**, then STOP until answered.
- If unavailable → do not ask. Run A then B sequentially in this thread, and
  say so: `independence: degraded (sub-agents unavailable)`.

Detect the capability, ask once, degrade loudly. Never assume the runtime.
