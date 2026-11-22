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
- **Interactive Food Insecurity Harvest Bowl Quiz (10 Questions & Pottery Bowl):**
  - Integrated the 10-question Harvest Bowl Quiz modal directly into [`index.html`](index.html), replaced from `/Users/ethannorland/Desktop/food insecurity website/10 question quiz.html`.
  - Also deployed as standalone quiz pages at [`quiz.html`](quiz.html) and [`10 question quiz.html`](10%20question%20quiz.html) with universal top navigation linking across all 5 main pages, and updated [`Food_Insecurity_Quiz.html`](Food_Insecurity_Quiz.html) to automatically redirect to `quiz.html`.
  - Automatically loads when a user first visits the Empty Bowl home page (`index.html`), while providing immediate exit controls and persistent "Never show again" choice:
    - **"Never show again" preference options:**
      - Header button: **"Never show again"** (`#btnNeverShowHeader`)
      - Footer checkbox: **"Never show this quiz automatically on future visits"** (`#chkNeverShowAgain`)
      - Footer button: **"Never Show Again"** (`#btnNeverShowFooter`)
      - Persisted permanently via `localStorage.setItem('emptybowl_quiz_never_show', 'true')`
      - When set, `loadQuizOnEntry()` suppresses automatic popups on all future visits
      - Users can still manually launch the quiz at any time using the header `Quiz 📝` button or the hero banner card
    - Dedicated **"Exit Quiz"** button in the modal header
    - Top-right close **`&times;`** button
    - **"Exit Quiz &times;"** button directly inside the question card navigation
    - **"Exit Quiz & Browse Empty Bowl &rarr;"** button in the modal footer
    - **"Exit to Empty Bowl &rarr;"** button on the final summary view
    - Backdrop tap/click outside the dialog and native <kbd>Esc</kbd> key support
    - Re-launch controls remain accessible at all times via the header `Quiz 📝` button and the hero section callout banner.
  - Permanent re-launch controls: added a `Quiz 📝` button in the site header actions (`#btn-quiz-toggle`) and an "Interactive Knowledge Check" callout card (`#heroQuizBanner`) in the hero card.
  - 10 evidence-based questions covering critical food insecurity concepts: 1 in 8 Americans, SNAP nutrition impact, working families & living wages, forced household trade-offs, college food security, pediatric development, health disparities, older adults & fixed incomes, college hunger, and structural roots of hunger.
  - **Dynamic Interactive Brand Logo Harvest Bowl SVG & Gapless Stacking:** Ceramic cross-section bowl styled to match the official Empty Bowl website emblem ([`icon.svg`](icon.svg)), featuring the authentic sage green cut face (`#72a983` -> `#558963` -> `#3a6345`), deep forest cavity (`#365e43` -> `#0e1c12`), floor shadow, polished rim highlights, and foot arch. Fresh food ingredients (Apple, Bread, Carrot, Broccoli, Grain, Tomato, Avocado, Corn, Beans, Greens) drop from high above straight down to the bottom floor of the bowl and physically stack up on top of each other across three structural tiers with zero vertical gaps—each piece touching and resting on top of or nestled into adjacent pieces (Tier 1 floor foundation, Tier 2 middle tier, Tier 3 crowning harvest mound) with realistic drop-and-catch spring physics, dynamic capacity bar (0–100%), and real-time ingredient status chips.
  - Numbered jump strip (01–10) with real-time status styling: open/unanswered, correct (sage green container), missed (tertiary clay container), and active selection outline.
  - Comprehensive question debriefs with verified empirical explanations, correct indicator badges, and source citations.
  - Final summary view displaying total score, 3 key takeaway tiles (Structural Root Causes, Intersectional Impact, Actionable Policy Levers), and full question review list with reset capability.
  - Fully responsive on desktop and mobile viewports with flexible 10-pill rhythm strip and stacked layout.
  - Persistent browser state autosave via `localStorage` (`emptybowl_quiz10_state`).
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
