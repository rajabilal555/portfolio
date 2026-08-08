# Design — rbpx.dev

Locked design system. Future Hallmark runs read this file first; pages defer
to it. Amend intentionally — the file is the rule.

## System
- Genre · modern-minimal
- Macrostructure · Bento Grid (home / work / contact)
- Theme · custom (vibe: "karachi dusk · saffron on warm charcoal")
- Axes · dark / grotesk-sans / warm (saffron ~75°)
- Nav · N5 floating pill
- Footer · Ft2 inline single line
- Enrichment · CSS aurora atmosphere (no WebGL)

## Tokens (canonical · `src/styles/tokens.css` is the source of truth)
```css
:root {
  --color-paper:      oklch(12% 0.012 55);
  --color-paper-2:    oklch(16.5% 0.016 55);
  --color-ink:        oklch(95% 0.012 80);
  --color-ink-2:      oklch(78% 0.022 70);
  --color-rule:       oklch(32% 0.022 55);
  --color-accent:     oklch(78% 0.15 75);
  --color-accent-ink: oklch(18% 0.04 55);
  --color-focus:      oklch(80% 0.16 75);
  --color-glow:       oklch(72% 0.12 75 / 0.2);

  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-body:    "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "JetBrains Mono", ui-monospace, monospace;
}
```

## CTA voice
- Primary · filled saffron chip · pill · min-height 44px · dark ink on accent
- Secondary · outlined chip · paper border · saffron on hover
- Tile links · typographic arrow

## Motion stance
- Three primitives only: stagger tile reveal · tile hover lift · pointer spotlight
- Ambient aurora drifts slowly behind the grid
- Reduced-motion · ≤150 ms opacity crossfade · no spotlight · no aurora drift

## Notes
- Previous teal DNA retired — warm charcoal + saffron is the brand signal now.
- Live Pakistan clock (`Asia/Karachi`) is a tiny footer line: Karachi · time · PKT.
- Do not carry over: bounce icons, purple gradients, equal 3-column card grids, Inter-only stack.
- Accent footprint stays under ~5% solid fills; glow is atmospheric, not fill.

## Exports
`src/styles/tokens.css` is the source of truth. Tailwind v4 `@theme inline` lives in `src/styles/global.css`.
