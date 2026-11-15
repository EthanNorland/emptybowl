# HANDOFF: Food Insecurity

**Current Build:** `f00000-001` (Phase 1 Walking Skeleton complete)
**Status:** 5 cohesive pages assembled with universal top navigation, offline PWA support, interactive modules, and local review tooling.

## What Works
- **Universal Top Navigation:** All 5 pages have top buttons linking to:
  - `Food Insecurity` (`index.html`)
  - `Who Faces Hunger` (`whofaceshunger.html`)
  - `Causes of Food Insecurity` (`causesoffoodinsecurity.html`)
  - `Personal Stories` (`personalstories.html`)
  - `How You Can Help` (`howyoucanhelp.html`)
- **Interactive Modules:**
  - `index.html`: USDA 4-tier food security spectrum explorer.
  - `whofaceshunger.html`: Dynamic demographic profile card inspector.
  - `causesoffoodinsecurity.html`: Budget elasticity simulation showing how fixed costs squeeze food dollars.
  - `personalstories.html`: Narrative switchboard + reflection notes with localStorage autosave.
  - `howyoucanhelp.html`: Interactive action commitments checklist with persistent browser state.
- **PWA & Offline:** `manifest.webmanifest`, `sw.js` precaching the app shell, responsive design with zero overlap, high-contrast palette (≥4.5:1), and version chip `f00000-001 ↻`.
- **Searchable Help:** In-page searchable guide on every screen that locates and highlights controls with a glowing ring.
- **About Panel:** 4-line standard disclosure with byline and MIT license.
- **Local Review Tools:** `tools/markup-server.py` and `tools/markup-inject.js` installed and gitignored.

## What's Next
- Complete remainder of the interview in `BRIEF.md` (Part 2: Raison d'Être, detailed user persona, core loop refinement).
- Test on mobile width and Safari/Chrome.
- Prepare GitHub repository `EthanNorland/foodinsecurity` and deploy to GitHub Pages.

## Rules Learned
1. All navigation buttons must have tooltips under 25 words and clear accessible names.
2. In multi-page apps, each page requires its own active state on the corresponding button.
3. Autosave for reflection notes and checklists must wrap in `try/catch` to avoid throwing in private browsing modes.
