# HANDOFF: Empty Bowl (Food Insecurity)

**Current Build:** `f00000-001` (Markup Review Batch Applied)
**Status:** 5 cohesive pages assembled with universal top navigation, Dark Walnut & Sage Green organic palette, offline PWA support, interactive modules, and local review tooling.

## What Works
- **Universal Top Navigation:** All 5 pages have top buttons linking to:
  - `Empty Bowl` (`index.html`)
  - `Who Faces Hunger` (`whofaceshunger.html`)
  - `Causes of Food Insecurity` (`causesoffoodinsecurity.html`)
  - `Personal Stories` (`personalstories.html`)
  - `How You Can Help` (`howyoucanhelp.html`)
- **Visual Identity & Palette:**
  - Dark Roasted Walnut (`#181614`), Unbleached Linen (`#f5f0ea`), Sage Green (`#72a681`), and Ochre Gold (`#e5a93b`). Contrast ≥ 4.5:1 (AAA on body text).
  - Empty green ceramic bowl emblem mark in cross section facing the viewer ([`icon.svg`](icon.svg)) with generated 180, 192, 512, and maskable PNG icons.
  - Photographic character portraits for Maya, Marcus, and Evelyn with coordinated sage studio backdrops ([`Maya.jpeg`](Maya.jpeg), [`Marcus.jpeg`](Marcus.jpeg), [`Evelyn.jpeg`](Evelyn.jpeg)), with studio lighting enhanced across Marcus and facial shadow removed and balanced across Evelyn.
- **Interactive Modules:**
  - `index.html`: Busted-myth opener + USDA 4-tier food security spectrum explorer paired side-by-side with evocative photography ([`girl dreaming of food.jpeg`](girl%20dreaming%20of%20food.jpeg)) + hub cards with updated volunteer action points.
  - `whofaceshunger.html`: Dynamic demographic profile card inspector featuring 5 photographic selector cards placed directly above each button ([`College & University students.jpeg`](College%20&%20University%20students.jpeg), [`families with children.jpeg`](families%20with%20children.jpeg), [`low-wage workers.jpeg`](low-wage%20workers.jpeg), [`Seniors & fixed incomes.jpeg`](Seniors%20&%20fixed%20incomes.jpeg), [`rural populations.jpeg`](rural%20populations.jpeg)) with refined college barrier and worker impact copy.
  - `causesoffoodinsecurity.html`: Budget elasticity simulation showing how fixed costs squeeze food dollars.
  - `personalstories.html`: Stacked linear narrative flow showing all 3 accounts directly on the page with photographic character portraits, story titles above character names, and reflection notes with localStorage autosave.
  - `howyoucanhelp.html`: Dedicated ZIP-activated local pantry & food bank finder section positioned directly above the interactive 7-point community action checklist (with persistent browser state, showing pantries only once a 5-digit ZIP code is entered), mutual aid fridge solidarity copy, full 4-pillar photographic action cards ([`financial donation.jpeg`](financial%20donation.jpeg), [`stocking mutual adie fridge.jpeg`](stocking%20mutual%20adie%20fridge.jpeg), [`Choice-Based Volunteering.jpeg`](Choice-Based%20Volunteering.jpeg), [`advocating for policy change.jpeg`](advocating%20for%20policy%20change.jpeg)), an interactive Elected Officials Locator (`#repFinderBox`) allowing users to enter their street address and ZIP code to instantly view Federal (U.S. Senate & House) and State (Governor & State Legislature) representatives with direct office phone numbers, email addresses, and web links, and high-resolution clipboard document picture export (`.png`).
- **Tactile Clipboard Picture Export:**
  - High-resolution clipboard document illustration ([`action-plan-clipboard.png`](action-plan-clipboard.png) & [`action-plan-clipboard.svg`](action-plan-clipboard.svg)) styled as a tactile sheet of linen paper attached to a dark roasted walnut clipboard with brushed steel spring clamp, dual rivets, and realistic paper shadows.
  - Features all 7 community action commitments, personal reflection notebook excerpt, 2-column Smart Donor Field Guide (Give vs. Avoid), and wholesale multiplier principle.
  - Interactive client-side canvas exporter dynamically reflects live checkbox completions and reflection notes.
- **PWA & Offline:** `manifest.webmanifest`, `sw.js` precaching the app shell, portrait SVGs, and clipboard picture, responsive design with zero overlap, and version chip `f00000-001 ↻`.
- **Searchable Help:** In-page searchable guide on every screen that locates and highlights controls with a glowing ring.
- **About Panel:** 4-line standard disclosure with raison d'être quote and "All rights reserved" line.
- **Local Review Tools:** `tools/markup-server.py` and `tools/markup-inject.js` installed and gitignored.

## What's Next
- Push commits to GitHub repository (`EthanNorland/foodinsecurity`) and verify GitHub Pages deployment at `https://EthanNorland.github.io/foodinsecurity/`.
- Conduct end-to-end audit for keyboard navigation, screen reader accessibility, and mobile layout.

## Rules Learned
1. All navigation buttons must have tooltips under 25 words and clear accessible names.
2. In multi-page apps, each page requires its own active state on the corresponding button.
3. Downloadable text exports should compile both checklist state and reflection text for high utility.
4. Linear narrative presentation for lived stories creates stronger emotional resonance than tab-hidden views.
