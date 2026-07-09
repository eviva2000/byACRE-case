# byACRE Design Guidelines — for AI-assisted building

> **How to use this file:** give it to your AI coding tool (Claude Code, Codex, Cursor, …) as design
> context when building your case deliverable. It distils byACRE's official Visual Identity (v0.2)
> into tokens and rules an LLM can apply directly. Reference site: **https://byacre.com**.

## 1. Brand essence

byACRE is a **Danish design company** making premium mobility aids — rollators, walking frames,
wheelchairs. The mission: **destigmatize mobility aids**. Products are objects people are *proud* to
own, not clinical devices they hide. Everything we make speaks to **empowered people, not patients**.

**Voice & feel:** design-led, warm, confident, human. Premium but never cold; playful but never
childish. Absolutely **never clinical, medical, or pitying**. Think Scandinavian design brand, not
healthcare supplier.

## 2. Color

### Primary palette (the brand core)

| Token | Hex | Role |
|---|---|---|
| Black | `#000000` | Neutral contrast, text |
| White | `#ffffff` | Base, space, calm |
| **byACRE Red** | `#e62d2b` | Energy, warmth, human presence — the signature accent. Use **sparingly**: logo, key highlights, CTAs, small accents. Never as large background floods. |
| **Light Blue** | `#e0eef5` | The calm, welcoming base — soft section backgrounds, callouts, headers |

Primary colors are used for: the logo (always), main graphics and key visual elements, and
backgrounds/text where byACRE presents itself.

### Secondary palette (from the product colorways — playful, differentiated accents)

| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| Granite Black | `#3f4040` | | Champagne Gold | `#e0ceb5` |
| Royal Blue | `#2a2b57` | | Oyster White | `#e9e6cb` |
| Midnight Blue | `#707b81` | | Glacier Green | `#c7ddd1` |
| British Racing Green | `#323e31` | | Pale Rose | `#f7e4e7` |
| Defender Green | `#77896f` | | Morning Blue | `#bbdce9` |
| Bentley Brown | `#8a796c` | | Rose Gold | `#cdb8b9` |

Secondary colors are for: illustrations and patterns, infographics/icons/diagrams, CTA buttons, and
backgrounds where a more playful or differentiated expression is wanted.

### Practical UI defaults (as used in byACRE's digital material)

```css
--granite: #3f4040;   /* default body-text color (softer than pure black) */
--slate:   #707b81;   /* muted/secondary text */
--red:     #e62d2b;   /* accent, CTAs, highlights — use sparingly */
--light-blue: #e0eef5;/* calm surface / section background / callout */
--bg:      #ffffff;   /* page base */
--border:  #dfe3e6;   /* hairline borders */
```

## 3. Typography

**One typeface: [Raleway](https://fonts.google.com/specimen/Raleway)** — used on all digital and
printed material. (Google Fonts import is fine.)

Weight system (keep a clear hierarchy; don't use the same weight for adjacent levels):

| Weight | Use |
|---|---|
| Regular (400) | Body text |
| Medium (500) | Subheadings, body emphasis |
| SemiBold (600) | Subheadings, text in graphic icons |
| Bold (700) | Highlighting important words inside body text |
| ExtraBold (800) | **Headings** |
| Black (900) | Headings, important information / badges (promotions, key messages) |

Digital conventions seen across byACRE material: generous `line-height` (~1.6–1.8 body), uppercase +
letter-spacing for small section labels, tight letter-spacing on large headings.

## 4. Layout & feel

- **Generous whitespace** — calm, uncluttered, Scandinavian. Let content breathe.
- Light backgrounds (white / light-blue), granite text, red used only where it earns attention.
- Subtle borders and soft shadows over hard lines; modest corner radii (0–6px, not pill-everything).
- Clear visual hierarchy: one strong heading level, restrained accents, consistent spacing rhythm.
- Photography (byacre.com): real people, active lifestyles, natural light — empowering, never
  clinical stock imagery.
- Accessible by default: our customers include older adults — comfortable font sizes (16px+ body on
  web), strong contrast, large tap targets, clear focus states. Accessibility IS on-brand for us.

## 5. Do / Don't

**Do**
- Lead with white/light-blue calm; accent with red precisely and rarely.
- Use Raleway everywhere, leaning on weight (not extra fonts) for hierarchy.
- Write copy in an empowering, human voice ("your Carbon Ultralight", "get moving").
- Design for older users without designing "old": clarity and dignity, premium feel.

**Don't**
- No clinical/medical aesthetics (hospital blues+greys, sterile iconography, wheelchairs-as-pictograms).
- No red floods, no neon, no gradients-for-the-sake-of-it, no dark-mode-by-default.
- No pity language ("patients", "sufferers", "the elderly") — ever.
- Don't mix in other typefaces or heavy drop shadows; don't crowd the layout.

---
*byACRE · IT/NewTech — design context file for the interview case. Derived from byACRE Visual Identity 0.2.*
