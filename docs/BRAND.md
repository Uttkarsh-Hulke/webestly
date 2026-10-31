# WebEstly Brand Design System & Master Guidelines
**Founder-Led Identity:** WebEstly by Uttkarsh Hulke  
**Single Source of Truth:** `webestly_logo.svg`  
**Location:** Pune, Maharashtra, India  

---

## 1. Brand Identity & Positioning

- **Brand Name:** WebEstly
- **Founder:** Uttkarsh Hulke (MERN Stack Developer & Freelance Web Designer; B.E. Artificial Intelligence & Data Science)
- **Positioning:** "I build modern, responsive and affordable websites for businesses and individuals."
- **Brand Character:** Clean, Geometric, Confident, Practical, Modern, Professional.
- **Tone of Voice:** Direct, honest, technical, and transparent. Zero corporate agency buzzwords ("elevate", "seamless", "innovative solutions"). No fake agency team or fabricated awards.

---

## 2. Official Brand Palette

| Role | Color Name | Hex Token | Luminance | Purpose / Allowed Usages |
|---|---|---|---|---|
| Primary Navy | Brand Navy | `#10243A` | 0.0168 | Headings, primary body text, dark sections, button text on primary buttons |
| Primary Accent | Brand Orange | `#FF6500` | 0.3056 | Primary button backgrounds, active interactive accents, brand W stroke |
| Small Accent | Brand Gold | `#FFB000` | 0.4982 | Small facet on W mark, subtle badge details (never body text or large bgs) |
| Light Background | Pure White | `#FFFFFF` | 1.0000 | Primary canvas, cards, light containers |
| Alternate Surface| Warm Off-White | `#F7F8FA` | 0.9472 | Alternate section backgrounds, input fields, subtle panels |
| Secondary Text | Slate Text | `#334155` | 0.0526 | Subtitles, supporting body text, metadata |
| Contrast Orange | Dark Orange | `#C2410C` | 0.1584 | Orange text on white/light backgrounds (WCAG AA compliant) |

### Strict Palette Invariants
1. **Never use `#FF6500` for text on light backgrounds.** Use Dark Orange `#C2410C` instead.
2. **Primary buttons must use `#FF6500` background with `#10243A` Navy text.**
3. **Never use white text on `#FF6500`.** White on `#FF6500` yields only 2.95:1 contrast, failing WCAG AA. Navy on `#FF6500` achieves 5.32:1 (exceeding WCAG AA).
4. **No unrelated accent colors.** No random purple, teal, green, or rainbow gradients.
5. **Gold (`#FFB000`) is restricted to small accents only.**

---

## 3. WCAG AA Accessibility & Contrast Verification

| Text Color | Background Color | Contrast Ratio | WCAG AA Status | Usage |
|---|---|---|---|---|
| Navy `#10243A` | Orange `#FF6500` | **5.32 : 1** | **PASS** (Normal & Large Text) | Primary buttons |
| Navy `#10243A` | White `#FFFFFF` | **14.80 : 1** | **PASS** (Exceeds AAA) | Headings, body text |
| Navy `#10243A` | Warm Off-White `#F7F8FA` | **13.98 : 1** | **PASS** (Exceeds AAA) | Content on alternate sections |
| Slate `#334155` | White `#FFFFFF` | **9.28 : 1** | **PASS** (Exceeds AAA) | Secondary body text |
| Slate `#334155` | Warm Off-White `#F7F8FA` | **8.76 : 1** | **PASS** (Exceeds AAA) | Secondary text on alternate sections |
| Dark Orange `#C2410C` | White `#FFFFFF` | **5.05 : 1** | **PASS** (Normal & Large Text) | Colored accents and links on light |
| Dark Orange `#C2410C` | Warm Off-White `#F7F8FA` | **4.76 : 1** | **PASS** (Normal & Large Text) | Colored badges on light |
| White `#FFFFFF` | Navy `#10243A` | **14.80 : 1** | **PASS** (Exceeds AAA) | Hero banners, footer, dark CTA |
| Gold `#FFB000` | Navy `#10243A` | **8.20 : 1** | **PASS** (Exceeds AAA) | Category tags in dark banners |
| *Prohibited:* White | Orange `#FF6500` | **2.95 : 1** | **FAIL** (Under 4.5:1 / 3:1) | **STRICTLY FORBIDDEN** |

---

## 4. Typography System

- **Headings:** **Manrope** (`font-heading`, weights `700` Bold, `800` ExtraBold).
- **Body & UI:** **Plus Jakarta Sans** (`font-sans`, weights `400` Regular, `500` Medium, `600` SemiBold).
- **Fallback Font Stack:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
- **Scale (rem / px):**
  - `text-xs`: 0.75rem (12px)
  - `text-sm`: 0.875rem (14px)
  - `text-base`: 1.00rem (16px)
  - `text-lg`: 1.125rem (18px)
  - `text-xl`: 1.25rem (20px)
  - `text-2xl`: 1.50rem (24px)
  - `text-3xl`: 1.875rem (30px)
  - `text-4xl`: 2.25rem (36px)
  - `text-5xl`: 3.00rem (48px)
- **Line Heights:** Headings `1.2`, Body `1.5`, Labels `1.0`.

---

## 5. Logo Assets & Implementation

All assets are located in `public/` and extracted directly from `webestly_logo.svg`:

1. `webestly_logo.svg`: Original logo vector with white background rectangle.
2. `webestly_logo_transparent.svg`: Transparent background version for clean placement on light sections.
3. `webestly_logo_reversed.svg`: Reversed version with white geometry and wordmark for navy `#10243A` containers.
4. `webestly_mark.svg`: Standalone geometric W mark without wordmark or tagline.
5. `favicon.svg`: Vector icon on navy rounded squircle.
6. `favicon-32x32.png` & `favicon-16x16.png`: Binary PNG favicons.
7. `apple-touch-icon.png`: 180x180 PNG on navy rounded container.
8. `og-image.png`: 1200x630 Open Graph preview image for social sharing.

### Sizing and Clear Space Rules
- **Minimum Wordmark Width:** 120px.
- **Minimum Standalone Mark Size:** 24px.
- **Clear Space:** Maintain margin of at least the height of the letter "W" around the logo.
- **Founder Identity Display:**
  ```
  WebEstly
  by Uttkarsh Hulke
  ```
  *(Rendered via semantic HTML; do not modify the raw vector paths of the logo).*

---

## 6. Layout Rhythm & Spacing

- **Max Container Width:** `1200px` (`max-w-[var(--layout-max-width)]`).
- **Container Padding:** 24px desktop (`px-6`), 16px mobile (`px-4`).
- **Section Vertical Rhythm:** 64px desktop (`py-16`), 40-48px mobile (`py-10` to `py-12`).
- **Spacing Scale (4px Base):** Only `0`, `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`. No arbitrary px values.
- **Corner Radii:** Modest 4–8px (`--radius-sm: 4px`, `--radius-md: 6px`, `--radius-lg: 8px`). Cards max 8px.
- **Background Section Sequencing:**
  1. Hero: Pure White (`#FFFFFF`)
  2. What I Build: Warm Off-White (`#F7F8FA`)
  3. Selected Work: Pure White (`#FFFFFF`)
  4. About & Skills: Warm Off-White (`#F7F8FA`)
  5. My Process: Pure White (`#FFFFFF`)
  6. Final CTA & Footer: Deep Navy (`#10243A`)

---

## 7. Motion & Interaction Standards

- **Scroll Reveal:** Powered by `IntersectionObserver` with 24px upward translate and 700ms ease-out fade.
- **Accessibility:** Fully honors `@media (prefers-reduced-motion: reduce)` by immediately displaying content without translation or transition delays.
- **Interactive States:** Subtle 1px translation on button press; border color transitions on cards (`150ms`). No glowing shadows or neon effects.
