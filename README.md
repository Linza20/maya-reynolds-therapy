# Dr. Maya Reynolds, PsyD — homepage clone & redesign

Next.js 14 (App Router) + Tailwind CSS + TypeScript.

| Route | What it is |
| --- | --- |
| `/clone` | **Part 1.** The Conejo Valley Family Counseling homepage, recreated section for section. |
| `/` | **Parts 2 + 3.** The same layout, re-themed and rewritten for Dr. Maya Reynolds, plus the new *Our Office* section. |

```bash
npm install
npm run dev      # http://localhost:3000  and  /clone
npm run build    # emits a static `out/` folder
```

## Deploying to Netlify

The site is a **static export** — `output: 'export'` in `next.config.mjs`. There
is no Node server, no image optimisation service and no external font request at
runtime (Fraunces, Karla, Marcellus and Jost are self-hosted via `@fontsource`).

**Option A — drag and drop.** Unzip `netlify-drop.zip`, then drop the folder onto
https://app.netlify.com/drop. Live in about ten seconds, no account setup, no
build step.

**Option B — connect the repo.** Push this project to GitHub and point Netlify
at it. `netlify.toml` already sets everything:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

Either way `/` is the redesign and `/clone` is the Part 1 clone. `trailingSlash`
is on, so both resolve as real directories on any static host.

Before you hand the URL over, set `meta.canonical` in `content/maya.ts` to the
actual Netlify domain — it feeds the canonical tag, the Open Graph URL and the
JSON-LD.

---

## The one architectural decision worth explaining

Both routes render **the same section components**. Nothing is duplicated.

```
components/sections/*   ← layout, spacing, grid, responsive behaviour
content/original.ts     ← Part 1 copy + original image assets
content/maya.ts         ← Part 2 copy + new image assets
app/globals.css         ← two token sets: [data-theme="original"] / [data-theme="maya"]
```

`<HomePage content={…} />` sets `data-theme` on a wrapper div, every Tailwind
colour resolves to a CSS variable, and the page re-skins itself. This means
"preserve the layout, change everything else" is enforced by the code rather
than by eyeballing two copies of a file — put the two routes side by side and
only colour, type, copy and imagery differ.

The `Office` and `Faqs` sections render `null` when the content object does not
supply them, which is how the clone stays faithful while the redesign gains the
new section.

Section order (identical on both routes):

```
Header → Hero → Intro → Who I work with → Full-bleed banner → Areas of focus
      → About / approach → Services → [Our Office] → [FAQs] → Booking → Footer
```

---

## Part 2 — theme: "Marine Layer"

Named for the fog that sits over Santa Monica before it burns off. The original
template is warm sand and driftwood; this is deliberately the other temperature —
cool, hushed, oceanic — with exactly one warm note on the page.

| Role | Name | Hex | Where it is used |
| --- | --- | --- | --- |
| **Primary** | Sea ink | `#12343B` | Headings, buttons, footer, banner overlay |
| Primary soft | | `#1E5158` | Button hover, furniture masses in artwork |
| **Secondary** | Sea glass | `#9FBFB8` | Section tints, image ground |
| Secondary soft | Mist | `#DCE6E4` | Alternating section backgrounds |
| **Accent** | Golden hour | `#C99A4E` | Rules, underlines, focus rings, the one warm accent |
| Accent ink | | `#8A6520` | The accent as *text* — AA-safe |
| Surface | Fog | `#F4F7F6` | Page background |
| Ink / Body / Muted | | `#0E2A30` / `#2C4A50` / `#557176` | Type scale |

Contrast (WCAG AA, measured against Fog `#F4F7F6`):

- Headings `#0E2A30` — **13.9:1**
- Body `#2C4A50` — **10.1:1**
- Muted meta `#557176` — **5.2:1**
- Accent text `#8A6520` — **5.4:1** (the raw gold `#C99A4E` is never used for text,
  only for rules and marks, precisely because it would fail)
- Surface on Primary (footer, banner) — **13.9:1**

Why not the obvious choice: a therapist site in cream + high-contrast serif +
terracotta is the default anyone would land on, and it is what most of the web
already looks like. Cool fog with a single gold accent is closer to the actual
light in Santa Monica and stays distinct from the template it replaces.

### Typography

- **Fraunces** (display) — a soft, slightly irregular serif; warm without being
  decorative. Carries the headings and the italic emphasis the original
  template uses as its signature.
- **Karla** (body/UI) — a grotesque with enough character to avoid the default
  Inter look, still plain-spoken at paragraph length.
- Fluid `clamp()` type scale in `tailwind.config.ts`; prose capped at `68ch`.

The clone route uses the original's **actual** stack, transcribed from its
`:root`: Cormorant Infant 400 for headings (letter-spacing -0.01em,
line-height 1.4em), Mulish — shipped as "Muli" on the live site — 300 for body
(line-height 1.8em), 15px base, and heading sizes 3.6 / 2.9 / 2.4 / 1.7rem.
The script emphasis word in their hero headline is set in Sacramento.

---

## Part 2 — copy

Everything traces to the profile: PsyD, licensed clinical psychologist, Santa
Monica CA 90401; adults only; anxiety, trauma and burnout; high-achieving
professionals, entrepreneurs and creatives; CBT, EMDR, mindfulness-based and
body-oriented techniques; warm, collaborative, grounded; trauma-informed with
careful pacing and stabilisation; in-person plus secure telehealth across
California; a quiet, private office with natural light and comfortable seating.

The three services are the three the profile names: **Anxiety & Overthinking**,
**Trauma Therapy & EMDR**, **Burnout & Chronic Stress**.

**SEO.** Title and H1 both carry specialty + location
("Anxiety, trauma and burnout therapy in Santa Monica…"). Section H2/H3s repeat
the specialty terms naturally. Locality appears in the intro, About, Our Office,
FAQs, footer and the nearby-neighbourhood line. `lib/seo.ts` emits
`Psychologist` / `LocalBusiness` and `FAQPage` JSON-LD, every image has a real
`alt`, headings run h1 → h2 → h3 → h4 without skips, and `/clone` is
`noindex` so it can never compete with anything in search.

---

## Part 3 — Our Office

`components/sections/Office.tsx`. It reuses the 5/7 grid from the About section,
the same eyebrow treatment, the same hairline rules and the same `py-section`
rhythm, so it reads as original to the site. Content covers the Santa Monica
address, the room itself (natural light, comfortable seating, uncluttered),
in-person vs. telehealth, and privacy — as a definition list beside a
three-image mosaic.

---

## Quality floor

- Responsive at 320px → 1440px+; single-column stacking, 2-up at `sm`, full grid at `lg`.
- Mobile drawer with expandable sub-menus; `body` scroll locked while open.
- FAQ accordion is `<details>/<summary>` — keyboard accessible, works without JS.
- Visible focus ring on the accent colour; skip-to-content link.
- `prefers-reduced-motion` respected. One page-load motion moment (the hero
  settling); no scroll-triggered animation anywhere else.
- Both routes prerender as static HTML.

---

## Images

**Every image slot uses the practice's own photography** — the headshot and the
two office photographs from the profile, cropped per slot by
`scripts/crop-profile-photos.py`. No stock, nothing generic: the room in the
hero is the room you sit in. Crop boxes are at the top of that script if you
want different framing.

`/clone` uses the original site's own assets for comparison.

## Copy fidelity

Every claim on the page traces to the profile. Specifically **not** asserted,
because the profile does not say it: any named degree program, EMDR
certification, continuing-education claims, years in practice, fee information,
or insurance. The only invented string is the placeholder email in the footer —
replace `hello@mayareynoldspsyd.com` before the site goes anywhere real. The
nearby-neighbourhood line in the footer is a local-SEO addition, mirroring the
pattern in the original template.
