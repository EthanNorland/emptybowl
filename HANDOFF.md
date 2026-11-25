# HANDOFF: Empty Bowl (Food Insecurity)

**Current Build:** `f00000-001` (HEAD: `310290d` on `main`, synced with `origin/main`)  
**Updated:** 2026-11-24 21:57 EST  
**Live Deployment:** `https://EthanNorland.github.io/emptybowl/`  
**Status:** 5 main pages + standalone quiz pages deployed on Warm Stone / Driftwood (`#2b2520`) theme with 2D editorial cartoon illustrations across 3.75 of the 4 illustrated pages; 1 remaining photo on `howyoucanhelp.html` is queued behind `gemini-3.1-flash-image` quota reset (`2026-11-25T06:26:44Z` / `1:26 AM EST`).

---

## Immediate Priority / What's Next

1. **Convert the remaining photograph on `howyoucanhelp.html` to a 2D cartoon (after `2026-11-25T06:26:44Z` / `1:26:44 AM EST`):**
   - **Target file:** [`advocating for policy change.jpeg`](advocating%20for%20policy%20change.jpeg) (currently still the original `2752×1536` JPEG photograph).
   - **Why incomplete:** The `image-generator` subagent hit `429 Too Many Requests` (`RESOURCE_EXHAUSTED` on `gemini-3.1-flash-image`) reporting quota reset in `3h34m44s` (`2026-11-25T06:26:44Z`).
   - **Action when unblocked:**
     1. Generate a 16:9 (`1376×768` JPEG) hand-drawn 2D editorial cartoon conversion of `advocating for policy change.jpeg` matching the exact ink-outline + muted earthy gouache/watercolor style of [`financial donation.jpeg`](financial%20donation.jpeg), [`stocking mutual adie fridge.jpeg`](stocking%20mutual%20adie%20fridge.jpeg), and [`Choice-Based Volunteering.jpeg`](Choice-Based%20Volunteering.jpeg). Preserve crisp legible lettering for `"Expand SNAP for Community College Students"` on the two witness signs.
     2. Copy over [`advocating for policy change.jpeg`](advocating%20for%20policy%20change.jpeg) and update `width="2752" height="1536"` to `width="1376" height="768"` in [`howyoucanhelp.html`](howyoucanhelp.html#L853).
     3. Verify `howyoucanhelp.html` in headless Chrome (`--user-data-dir=/tmp/chrome-headless-check --dump-dom`), commit, and push to `origin/main`.
2. **Optional follow-ups:**
   - Bump `CACHE_NAME` in [`sw.js`](sw.js) so returning PWA/browser visitors immediately fetch the updated cartoon assets instead of serving older cached JPEGs.
   - Check whether [`causesoffoodinsecurity.html`](causesoffoodinsecurity.html) or any secondary assets need visual updates, and run an end-to-end keyboard navigation, screen-reader accessibility, and mobile viewport audit on GitHub Pages.

---

## Recent Changes (Since Last Handoff)

- **`310290d` — `howyoucanhelp.html` (3 of 4 Action Cards):** Converted [`financial donation.jpeg`](financial%20donation.jpeg), [`stocking mutual adie fridge.jpeg`](stocking%20mutual%20adie%20fridge.jpeg), and [`Choice-Based Volunteering.jpeg`](Choice-Based%20Volunteering.jpeg) to `1376×768` 2D cartoon JPEGs; updated `stocking mutual adie fridge.jpeg` dimensions in [`howyoucanhelp.html`](howyoucanhelp.html#L835) to `1376×768`.
- **`4c16814` — `personalstories.html` Portraits:** Converted [`Maya.jpeg`](Maya.jpeg), [`Marcus.jpeg`](Marcus.jpeg), and [`Evelyn.jpeg`](Evelyn.jpeg) to `1024×1024` 2D cartoon portraits and updated their `alt` attributes (`"2D cartoon portrait of Maya|Marcus|Evelyn"`).
- **`ebc78cb` — `whofaceshunger.html` Demographic Cards:** Converted all 5 selector photographs ([`College & University students.jpeg`](College%20&%20University%20students.jpeg), [`families with children.jpeg`](families%20with%20children.jpeg), [`low-wage workers.jpeg`](low-wage%20workers.jpeg), [`Seniors & fixed incomes.jpeg`](Seniors%20&%20fixed%20incomes.jpeg), [`rural populations.jpeg`](rural%20populations.jpeg)) to `1376×768` 2D cartoon illustrations.
- **`fc35709` — `index.html` Hero Illustration:** Converted [`girl dreaming of food.jpeg`](girl%20dreaming%20of%20food.jpeg) to a matching 2D cartoon illustration.
- **`174a444` — Sitewide Theme Update (Warm Stone / Driftwood):** Switched all 7 HTML files (`index.html`, `whofaceshunger.html`, `causesoffoodinsecurity.html`, `personalstories.html`, `howyoucanhelp.html`, `quiz.html`, `10 question quiz.html`) and [`manifest.webmanifest`](manifest.webmanifest) to the Warm Stone / Driftwood palette (`--bg: #2b2520`, `--panel: #362f29`, `--panel-hover: #413932`, `--border: #524840`, `--card-bg: #3f3730`, `--ink: #f5f0ea`, `--ink-dim: #cfc4b8`, `--accent: #72a681`, `--ring: #e5a93b`).
- **`0219339` — Standalone Quiz & Offline Polish:** Fixed standalone quiz Help/About dialogs, `localStorage` persistence, service worker precaching (`sw.js`), and `file://` guard across `quiz.html` and `10 question quiz.html`.

---

## What Works

- **Universal Top Navigation:** Consistent header on all pages linking to:
  - `Empty Bowl` (`index.html`)
  - `Who Faces Hunger` (`whofaceshunger.html`)
  - `Causes of Food Insecurity` (`causesoffoodinsecurity.html`)
  - `Personal Stories` (`personalstories.html`)
  - `How You Can Help` (`howyoucanhelp.html`)
- **Visual Identity & Illustration Style:**
  - Warm Stone / Driftwood palette (`#2b2520` background, `#362f29` panels, `#f5f0ea` body ink, `#72a681` sage green, `#e5a93b` gold accents).
  - Consistent hand-drawn 2D editorial cartoon / graphic novel artwork (clean dark-ink outlines, soft cel shading, muted earthy gouache/watercolor palette) across `index.html`, `whofaceshunger.html`, `personalstories.html`, and 3 of 4 pillars in `howyoucanhelp.html`.
  - Empty green ceramic bowl emblem ([`icon.svg`](icon.svg)) and generated PWA PNG icons (`icon-180.png`, `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`).
- **Interactive Modules:**
  - **10-Question Harvest Bowl Quiz:** Integrated into `index.html` (auto-opens on first visit unless dismissed permanently via `emptybowl_quiz_never_show`, re-launchable from header `Quiz 📝`) and deployed standalone at [`quiz.html`](quiz.html) and [`10 question quiz.html`](10%20question%20quiz.html) (`Food_Insecurity_Quiz.html` redirects to `quiz.html`). Non-bouncing `FOOD_PHYSICS` drop-to-stack SVG mechanics inside the ceramic bowl emblem, 01–10 jump strip, empirical debriefs, summary takeaways, and `localStorage` state (`emptybowl_quiz10_state`).
  - **`index.html`:** Split `.hero-split` card with USDA definition and cartoon [`girl dreaming of food.jpeg`](girl%20dreaming%20of%20food.jpeg); 4-tier USDA food security spectrum paired with embedded [`Food Security Video.mp4`](Food%20Security%20Video.mp4); navigation hub cards.
  - **`whofaceshunger.html`:** 5 interactive demographic cards with 2D cartoon illustrations (`1376×768` JPEGs) and barrier breakdowns.
  - **`causesoffoodinsecurity.html`:** Split hero card pairing "The Interlocking Drivers of Hunger" with click-to-enlarge [`Root_Causes_of_Food_Insecurity3.png`](Root_Causes_of_Food_Insecurity3.png), Budget Elasticity Simulation, and 4 Structural Pillars.
  - **`personalstories.html`:** 2×2 grid pairing 2D cartoon character portraits ([`Maya.jpeg`](Maya.jpeg), [`Marcus.jpeg`](Marcus.jpeg), [`Evelyn.jpeg`](Evelyn.jpeg)) and narratives with the persistent Personal Reflections & Notes journal.
  - **`howyoucanhelp.html`:** 4 Action Pillars grid (3 cartoon, 1 photo pending), side-by-side Pantry Finder & Plural Policy Legislator Finder (`.locators-grid`), 7-item interactive action checklist, and client-side + pre-rendered [`action-plan-clipboard.png`](action-plan-clipboard.png) / [`action-plan-clipboard.svg`](action-plan-clipboard.svg) exporter.
- **PWA, Help & Review Tooling:** [`manifest.webmanifest`](manifest.webmanifest), [`sw.js`](sw.js) precaching, in-page searchable Help modal on every page, About dialog (`Build f00000-001`), and gitignored `tools/markup-server.py` / `tools/markup-inject.js`.

---

## Operational Notes & Rules Learned

1. All navigation buttons must have tooltips under 25 words and clear accessible names, with an active state corresponding to the current page.
2. When replacing raster images cleanly in place (same filename, e.g., `1376×768` JPEG), update `width`/`height` attributes in the HTML if the source resolution changed (e.g., `2752×1536` -> `1376×768`) to avoid layout shift, and verify `action-grid` / `demo-selector` rendering in headless Chrome.
3. For local headless Chrome checks inside the sandbox, always pass `--user-data-dir=/tmp/chrome-headless-check` so Chrome does not fail trying to write outside the sandboxed user profile directory.
4. `git push origin main` requires unsandboxed execution (`BypassSandbox: true`) for DNS/SSH access to `github.com`.
5. Interactive exports and linear narrative presentation remain core UX constraints across checklist, journal, and personal story modules.
