---
name: wireframe-css
description: Build monochrome (grey/slate) HTML wireframes / screen mockups / prototype pages with the wf.css design system. Whenever the user requests a code-based low-fidelity screen — e.g. "와이어프레임 만들어줘", "HTML 목업/화면 시안", "랜딩 페이지 시안", "wf.css로 ~ 화면", "프로토타입 페이지", "로그인/설정/대시보드 화면 짜줘" — use this skill even if wf.css isn't mentioned explicitly. Never hardcode color/typography/spacing as raw hex/px; use wf.css tokens and component classes. (Note: this skill is for HTML/CSS code wireframes only.)
---

# wireframe-css

Build monochrome (grey/slate) **low-fidelity HTML wireframes** fast and consistently with a single `wf.css`.
`wf.css` is a 100% standalone stylesheet extracted and de-branded from the Toss Design System, carrying color/typography/spacing/shadow tokens plus component classes like button/badge/card/list. For the wireframe stage, its brand colors are swapped to neutrals so the output reads as a "black-and-white skeleton" that won't be mistaken for visual design.

## Core principles — do not break these 4

The whole point of this skill is to assemble wireframes **on one token system** instead of re-painting each screen from scratch. That way (1) tone stays consistent across screens, (2) light/dark adapt automatically, (3) changing a color in one place propagates everywhere, and (4) the monochrome low-fi feel is preserved.

1. **Standalone HTML + `<link>` wf.css.** No build, no bundle, no external deps. Copy one file, link it, done.
2. **Local `<style>` for layout only.** Write only the page skeleton (grid/flex, position, size) in local CSS.
3. **Color/typography/spacing via tokens only.** Even inside local CSS, use `var(--wf-text-*)`/`var(--wf-bg-*)` for color, `var(--wf-*-size)`/`.wf-t*` utilities for type, and `var(--wf-space-*)` for spacing. **Never hardcode raw hex, arbitrary px colors, or arbitrary font sizes.**
4. **Reuse component classes for UI.** Use `.wf-*` classes for buttons, badges, cards, lists, chips, inputs, etc. — don't reinvent their styles.

## Workflow

1. **Decide the output location.** Pick the folder where the wireframe HTML will live and copy `wf.css` into it (or into a shared parent) — this skill's `assets/wf.css` is the source. If the project already uses a `wf.css` (e.g. quizn-board), you can just reference that. (Online, the font loads automatically via wf.css's CDN fallback. If you need the identical tone offline, also copy `assets/PretendardVariable.woff2` next to `wf.css`.)
2. **Scaffold.** Start from this skeleton:

   ```html
   <!doctype html>
   <html lang="ko" data-theme="light">
   <head>
     <meta charset="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <title>Screen name (wireframe)</title>
     <link rel="stylesheet" href="wf.css" />
     <style>
       * { box-sizing: border-box; }
       html, body { margin: 0; }
       body {
         font-family: var(--wf-font-family);
         background: var(--wf-bg-base);
         color: var(--wf-text-default);
         -webkit-font-smoothing: antialiased;
       }
       /* ↓ layout only (grid/flex). Color/type/spacing via tokens. */
     </style>
   </head>
   <body>
     <!-- UI goes here, using .wf-* component classes -->
   </body>
   </html>
   ```

3. **Assemble layout + components.** The fastest start for a skeleton (app-style/landing-style) is to copy and adapt one of `examples/`. For individual UI pieces, paste snippets from `references/components.md`.
4. **(Optional) Dark/light toggle.** Flipping `data-theme` switches everything. If you need a toggle button:

   ```html
   <button class="icon-btn" id="themeBtn" title="Toggle theme">◐</button>
   <script>
     themeBtn.onclick = () => {
       const r = document.documentElement;
       r.dataset.theme = r.dataset.theme === 'dark' ? 'light' : 'dark';
     };
   </script>
   ```

   Even without a toggle, OS dark mode applies dark automatically (`prefers-color-scheme`).

## Frequently used tokens — cheat sheet

Full list in `references/tokens.md`. This is roughly enough to build any screen:

| Purpose | Token |
|---|---|
| Page background / card·sheet background | `--wf-bg-base` / `--wf-bg-elevated` |
| Title / body / secondary text | `--wf-text-strong` / `--wf-text-default` / `--wf-text-sub` |
| Accent text·link / disabled | `--wf-text-accent` / `--wf-text-disabled` |
| Primary (buttons etc.) / hover | `--wf-primary` / `--wf-primary-hover` |
| Border / hairline | `--wf-border` / `--wf-border-hairline` |
| State (success·warning·danger) | `--wf-success` / `--wf-warning` / `--wf-danger` |
| Spacing | `--wf-space-4 … --wf-space-128` (4·8·12·16·20·24·32·48·64·…) |
| Radius | `--wf-radius-button`(12) / `-card`(16) / `-chip`(999) / `-full` |
| Shadow | `--wf-shadow-1 … -3`, `--wf-shadow-float` |
| Font family | `--wf-font-family` |

Typography is easiest via utility classes: titles use `.wf-t2`/`.wf-t3`, body uses `.wf-t6`/`.wf-st10`, small text uses `.wf-t7`. Weights are `.wf-bold`/`.wf-semibold`/`.wf-medium`. (Scale table in `references/tokens.md`.)

## Components — quick list

Detailed variants and HTML snippets in `references/components.md`.

- **Button** `.wf-btn` (+ `.is-weak .is-dark .is-light .is-danger` / `.is-small .is-large .is-xlarge .is-block` / `disabled`)
- **Badge** `.wf-badge .c-blue|c-green|c-red|c-yellow|c-teal|c-elephant` (+ `.is-fill .is-small`)
- **Card** `.wf-card` (+ `.is-interactive`)
- **List** `.wf-list` > `.wf-list-row` (+ `.is-clickable .is-disabled`, inner `.wf-list-row__title` `.wf-list-row__desc`)
- **Chip/Tab** `.wf-chip` (+ `.is-selected`)
- **Input** `.wf-field` (+ `.is-error`)
- **Divider** `.wf-divider`(+`.is-thick`) / `.wf-hairline`
- **Avatar** `.wf-avatar` (+ `.is-sm .is-lg`)
- **Toast** `.wf-toast` · **Radio** `.wf-radio`

For parts wf.css has no component for — top bar, sidebar, nav — copy the local CSS patterns from `examples/app.html` (which use tokens only).

## Example skeletons

- **App/dashboard style** (top bar + sidebar + stats·list·form): `examples/app.html`
- **Marketing landing style** (hero·features·pricing·testimonials·footer): `examples/home.html`

Both are finished exemplars of the "layout in local CSS, everything else via tokens/classes" principle. For a new screen, start by cloning the closer one and swapping sections.

## Multiple screens: extract a shared component layer

If you have 2+ screens repeating the same UI (cards·folders·modals·top bar·menus etc.), **do not copy-paste local CSS per screen** — it drifts fast. Put a **project shared layer** on top of wf.css:

- `wf-screen.css` — components shared across screens (top bar·grid·card·modal etc.). Each screen links it with `<link rel="stylesheet" href="wf-screen.css">`.
- If needed, `wf-screen.js` — shared behavior (theme toggle·menu·modal·navigation). Each screen adds `<script src="wf-screen.js">`.
- Principle: **the shared file holds only what multiple screens share**; each screen's own layout stays in that screen's `<style>`. **Fix one place, all screens update.**
- Avoid conflicts: put the screen's inline `<style>` after the `<link>` (= later in the cascade), so per-screen overrides naturally win.
- Keep JS behavior as **event delegation** (one listener on document, branch with `e.target.closest(...)`), so it also attaches to markup injected later.

## Preview·verify — beware the cache trap (important)

Code wireframes **must actually be rendered and checked**. Don't say "looks done from the HTML" — especially verify JS behavior (modal open·click-through·toggle) by **actually clicking**.

- `file://` is often blocked in browsers/automation tools → serve via a **local static server**.
- ⚠️ **Most common trap: the browser caches the external `wf.css`/`wf-screen.css`/`.js`**, so editing the file doesn't change the screen. **Adding `?v=` to the HTML does NOT bust the linked CSS/JS cache.** Block it two ways:
  1. Serve **no-store** (every response sends `Cache-Control: no-store`):
     ```bash
     python3 -c "
     import http.server, socketserver
     class H(http.server.SimpleHTTPRequestHandler):
         def end_headers(self):
             self.send_header('Cache-Control','no-store, must-revalidate'); super().end_headers()
     socketserver.TCPServer.allow_reuse_address=True
     with socketserver.TCPServer(('',8753),H) as s: s.serve_forever()
     "
     ```
  2. If something still stays cached, append a version query to the link (`wf-screen.css?v=2` / `wf-screen.js?v=2`) to invalidate it once (with no-store it stays fresh after that).
- When verifying via automation, open it with playwright etc. and look at the **screenshot**; for toggles/modals/nav, click first and then check the state.

## Interaction·prototype (optional)

Even at low fidelity, **clicking through connected screens** makes review much easier (like a Figma prototype, but real behavior).

- **Screen-to-screen navigation**: put `<a href="next-screen.html">` on buttons·cards, or to make a whole card clickable use `data-href="..."` + JS (event delegation). Exclude buttons·menus inside the card with `e.target.closest('a,button,.menu')` to avoid misfires.
- **Repeated overlays (modals etc.)**: don't copy-paste per screen — **inject once via JS** and trigger via `data-*` attributes (handled in the shared `wf-screen.js`). One modal is shared across screens.
- **Dropdowns·toggles·menus**: handle close-on-outside-click once via document delegation. A toggle switch is `<label><input type="checkbox"><span class="track"></span><span class="knob"></span></label>` + token colors.
- Using `<a>` as a button adds a default underline, so add a local reset `a { color: inherit; text-decoration: none; }`.

## Common mistakes (avoid)

- ❌ Hardcoding `color: #333` / `font-size: 14px` → ✅ `color: var(--wf-text-default)` / `.wf-st11`
- ❌ Rebuilding button/card styles in local CSS → ✅ reuse `.wf-btn` `.wf-card`
- ❌ Painting the wireframe with vivid colors → ✅ stay monochrome; use color sparingly, only for state (badge/success/danger)
- ❌ Linking `wf.css` without placing it in the output folder → ✅ confirm `wf.css` is copied next to the HTML (or to a reachable path)
- ❌ Edited the file but the screen is unchanged (external CSS/JS cache) → ✅ no-store server + `?v=N` if needed, then verify by actually rendering
- ❌ Copy-pasting the same component per screen → ✅ extract to a shared `wf-screen.css`/`.js` layer (so you fix one place)
- ❌ Default underline on `<a>` buttons → ✅ `a { color: inherit; text-decoration: none; }` reset
