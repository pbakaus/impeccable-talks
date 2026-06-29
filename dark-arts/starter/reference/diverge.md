# /spellbook diverge

DARK ART · *force divergence.* Ask a model for "three options" and you get one
idea in three outfits. Make the average literally unreachable.

**Target:** the page passed to the command, else `sample/landing.html`. Produce
three genuinely different redesigns of it, none of them the warm-cream original.

## Flow

1. **Ban the monoculture by name.** Keep an explicit denylist of the clichés the
   model reaches for first (in design: Inter + a warm-cream background; in copy:
   "seamless", "robust", "elevate"). Forbid them up front. You cannot teach
   taste, but you can enumerate what to avoid.

2. **Inject entropy.** Seed the work with something the model did not choose:
   a random or hashed value that pushes it off its default. Example:

   ```bash
   node scripts/seed.mjs           # random seed each run
   node scripts/seed.mjs --from X  # deterministic: same X → same seed
   ```

   (The real Impeccable does this with `palette.mjs`: a semi-random brand seed
   with inverse-frequency hue weighting, so "warm-cream default" is not on the
   table.)

3. **Squint test.** Make every variant earn a distinct concrete-noun label
   (exhibition / cockpit / playbill). If two labels rhyme, the variants are too
   close; rework one. This catches "three outfits, one idea" mechanically.

## The receipt

Divergence is the hard part. Every model can hit the average; the skill is
steering one somewhere else.

## YOUR TURN

The denylist in step 1 is the cheap lever. Add the clichés *you* are sick of
seeing, a font, a layout, a phrase, and a new mood to `scripts/seed.mjs`. Every
entry you add is one more exit off the highway to the average.
