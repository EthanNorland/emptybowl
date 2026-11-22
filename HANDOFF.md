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
  - Empty green ceramic bowl emblem mark in cross section facing the viewer ([`icon.svg`](icon.svg)) with enlarged 40px logo and 21px bold wordmark in the universal header, alongside generated 180, 192, 512, and maskable PNG icons.
  - Photographic character portraits for Maya, Marcus, and Evelyn with coordinated sage studio backdrops ([`Maya.jpeg`](Maya.jpeg), [`Marcus.jpeg`](Marcus.jpeg), [`Evelyn.jpeg`](Evelyn.jpeg)), with studio lighting enhanced across Marcus and facial shadow removed and balanced across Evelyn.
- **Interactive Modules:**
- **Interactive Food Insecurity Briefing Quiz:**
  - Integrated 12-question briefing quiz modal directly into [`index.html`](index.html), adapted from [`Food_Insecurity_Quiz.html`](Food_Insecurity_Quiz.html).
  - Automatically pops up on first visit to the Empty Bowl home page via `showModal()`, with immediate, user-friendly dismissal controls: top-right `&times;` button, "Skip for now" header button, "Browse Empty Bowl" footer button, backdrop tap, and Escape key handling (`sessionStorage.getItem("emptybowl_quiz_dismissed")`).
  - Permanent re-launch controls: added a `Quiz 📝` button in the site header actions (`#btn-quiz-toggle`) and an "Interactive Knowledge Check" callout card (`#heroQuizBanner`) in the hero card.
  - 12 rigorous evidence-based questions covering 4 academic domains: Causes & Mechanisms, Definitions & Measures, Populations & Disparities, and Policy & Interventions.
  - Real-time metrics: completion percentage with dynamic progress fill bar, live score calculation, consecutive correct streak, and active filter queue indicator.
  - Topic filters: All Topics (12), 01 Causes (3), 02 Definitions (3), 03 Disparities (3), and 04 Interventions (3), plus "Review Missed" jump button and "Reset Quiz" state clearer.
  - Numbered jump strip (1–12) with real-time status styling: open/unanswered, correct (sage green), missed (brick red), active selection ring (amber gold), and filtered dimming.
  - Detailed debrief panel after every answer with immediate verdict, in-depth empirical explanation, source citation, and embedded data visualizers:
    1. `tradeoffs`: forced budget trade-offs mini-bar chart (utilities, rent, medical).
    2. `la_health`: adjusted odds ratio data table for diabetes and poor mental health (L.A. County Model C).
    3. `predictors_compare`: 2-column sociodemographic predictor comparison (Food vs. Nutrition Insecurity).
    4. `veterans_compare`: Iraq/Afghanistan war veterans food insecurity comparison bar chart.
  - Smooth auto-scroll behavior into debrief explanations on selection and reset to top on navigation.
  - Persistent browser state autosave via `localStorage` (`emptybowl_quiz_state`).
  - Integrated into Searchable Help index (`#helpDialog`) for quick control location.
  - `index.html`: Busted-myth opener + USDA 4-tier food security spectrum explorer paired side-by-side with evocative photography ([`girl dreaming of food.jpeg`](girl%20dreaming%20of%20food.jpeg)) + hub cards with updated volunteer action points.
  - `whofaceshunger.html`: Dynamic demographic profile card inspector featuring 5 photographic selector cards placed directly above each button ([`College & University students.jpeg`](College%20&%20University%20students.jpeg), [`families with children.jpeg`](families%20with%20children.jpeg), [`low-wage workers.jpeg`](low-wage%20workers.jpeg), [`Seniors & fixed incomes.jpeg`](Seniors%20&%20fixed%20incomes.jpeg), [`rural populations.jpeg`](rural%20populations.jpeg)) with refined college barrier and worker impact copy.
  - `causesoffoodinsecurity.html`: Budget elasticity simulation showing how fixed costs squeeze food dollars.
  - `personalstories.html`: 2x2 side-by-side grid layout featuring Maya and Marcus's accounts in row 1, and Evelyn's account paired side by side with the Personal Reflections & Notes interactive journal (with persistent browser autosave) in row 2. Automatically adapts to a single-column stack on mobile/tablet screens.
  - `howyoucanhelp.html`: Dual side-by-side locators grid (`.locators-grid`) pairing the ZIP-activated local pantry & food bank finder section (`#pantryFinderBox`) side by side with the "Find Your Federal & State Legislators" panel (`#repFinderBox`, linking out to Plural Policy's legislator finder tool with description aligned horizontally to the pantry finder description and clean direct lookup button), situated directly above the interactive 7-point community action checklist (with persistent browser state, reset function, and picture export), mutual aid fridge solidarity copy, full 4-pillar photographic action cards ([`financial donation.jpeg`](financial%20donation.jpeg), [`stocking mutual adie fridge.jpeg`](stocking%20mutual%20adie%20fridge.jpeg), [`Choice-Based Volunteering.jpeg`](Choice-Based%20Volunteering.jpeg), [`advocating for policy change.jpeg`](advocating%20for%20policy%20change.jpeg)), and high-resolution clipboard document picture export (`.png`). Responsive single-column stack on mobile/tablet viewports.
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
