# HANDOFF: Empty Bowl (Food Insecurity)

**Current Build:** `f00000-001` (Phase 2 Identity & Voice Refresh Complete)
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
  - Ceramic bowl & wheat grain emblem mark ([`icon.svg`](icon.svg)) with generated 180, 192, 512, and maskable PNG icons.
- **Interactive Modules:**
  - `index.html`: Busted-myth opener + USDA 4-tier food security spectrum explorer.
  - `whofaceshunger.html`: Dynamic demographic profile card inspector.
  - `causesoffoodinsecurity.html`: Budget elasticity simulation showing how fixed costs squeeze food dollars.
  - `personalstories.html`: Narrative switchboard + reflection notes with localStorage autosave.
  - `howyoucanhelp.html`: Interactive action commitments checklist with persistent browser state + downloadable Action Plan text file export (`.txt`).
- **PWA & Offline:** `manifest.webmanifest`, `sw.js` precaching the app shell, responsive design with zero overlap, and version chip `f00000-001 ↻`.
- **Searchable Help:** In-page searchable guide on every screen that locates and highlights controls with a glowing ring.
- **About Panel:** 4-line standard disclosure with raison d'être quote and "All rights reserved" line.
- **Local Review Tools:** `tools/markup-server.py` and `tools/markup-inject.js` installed and gitignored.

## What's Next
- Review screens in browser with markup server (`python3 tools/markup-server.py`).
- Run accessibility, contrast, and mobile viewport check.
- Push to GitHub repository (`EthanNorland/foodinsecurity`) and enable GitHub Pages.

## Rules Learned
1. All navigation buttons must have tooltips under 25 words and clear accessible names.
2. In multi-page apps, each page requires its own active state on the corresponding button.
3. Downloadable text exports should compile both checklist state and reflection text for high utility.
