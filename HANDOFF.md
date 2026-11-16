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
  - Empty green ceramic bowl emblem mark ([`icon.svg`](icon.svg)) with generated 180, 192, 512, and maskable PNG icons.
  - Custom vector portraits for Maya, Marcus, and Evelyn in the craft palette (`portrait-maya.svg`, `portrait-marcus.svg`, `portrait-evelyn.svg`).
- **Interactive Modules:**
  - `index.html`: Busted-myth opener + USDA 4-tier food security spectrum explorer + hub cards with updated volunteer action points.
  - `whofaceshunger.html`: Dynamic demographic profile card inspector with refined college barrier and worker impact copy.
  - `causesoffoodinsecurity.html`: Budget elasticity simulation showing how fixed costs squeeze food dollars.
  - `personalstories.html`: Stacked linear narrative flow showing all 3 accounts directly on the page with portraits, story titles above character names, and reflection notes with localStorage autosave.
  - `howyoucanhelp.html`: Dedicated address-based local pantry & food bank finder section positioned directly above the interactive 7-point community action checklist (with persistent browser state), mutual aid fridge solidarity copy, and high-resolution clipboard document picture export (`.png`).
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
