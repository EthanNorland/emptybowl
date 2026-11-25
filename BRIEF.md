# Project Brief: Empty Bowl (Food Insecurity)

## 1. The Seed

- **What it is (Q1):** An interactive educational web app and instrument examining food insecurity: who faces hunger, root structural causes, lived human experiences, and tangible community solidarity.
- **Medium & Materiality (Q2):** Curated editorial design, data storytelling, lightweight parametric simulations, and personal narrative text, built with responsive layout, warm organic palette, and offline PWA accessibility.
- **Origin / Frustration (Q3):** Real-world volunteer experience organizing a canned food drive for a food bank, coupled with observing meal distribution in a local community park. Noticing firsthand that hunger affects people of all ages, racial backgrounds, and walks of life—shattering the misconception that food insecurity only affects unhoused individuals.
- **Visual Reference:** [`reference/`](file:///Users/ethannorland/foodinsecurity/reference/)

## 2. Raison d'Être

- **What it lets the user do, see, or feel (Q4):** See the true, diverse spectrum of hunger: dispelling the pervasive misconception that food insecurity is exclusive to unhoused individuals, and revealing how working parents, classmates, hourly workers, and seniors silently navigate it in everyday life.
- **The ONE thing it does best (Q5):** Dismantle the stereotype of who experiences hunger: unmistakably demonstrating that food insecurity touches everyday people across all ages, racial backgrounds, professions, and education levels—making hunger visible, human, and relatable rather than foreign or marginalized.
- **Deliberate non-goals / scope boundaries (Q6):** 
  - Not an academic policy textbook: deliberately avoids burying visitors in dry bureaucratic jargon, dense econometric regression tables, or legislative legalese—keeping the presentation immediate, visual, human, and accessible to any student or community member.
  - Not an emergency 911 crisis dispatch hotline or live pantry inventory tracker.
  - No remote accounts, user tracking, or financial payment processing.
- **Core statement / About line (Q7):** *"Empty Bowl exists because hunger isn't confined to a stereotype—it affects people of all ages, backgrounds, and jobs right in our own communities, and we need to see the real human reality behind it."*

## 3. The User

- **Primary User (Q8):** A curious student or general learner on their phone or laptop (spending 5–10 minutes in their dorm, apartment, or between classes) wanting an interactive, eye-opening walkthrough that dismantles stereotypes about hunger and explains the real economic forces behind food insecurity.
- **Secondary User (Q9):** A community volunteer, student organizer, or food drive coordinator on an iPad or laptop (spending 15–20 minutes) seeking dignified storytelling, clear statistics, and high-impact donation guidelines (cash multipliers, essential proteins, hygiene items) to educate donors and run effective drives.
- **Who it is NOT for (Q10):**
  - People seeking an immediate 911 crisis dispatch or acute emergency food hotline.
  - Academic economists seeking raw econometrics tables or statistical regression datasets.

## 4. The Interaction Model

- **Architecture:** 5 interconnected wings linked via universal top button navigation on every screen:
  1. `Empty Bowl / Overview` (`index.html`): The 70% working-poor provocation & interactive USDA 4-tier spectrum explorer.
  2. `Who Faces Hunger` (`whofaceshunger.html`): Demographic profile cards (college students, working families, hourly workers, seniors, rural communities).
  3. `Causes of Food Insecurity` (`causesoffoodinsecurity.html`): Budget elasticity simulator showing the fixed-cost squeeze on food.
  4. `Personal Stories` (`personalstories.html`): Multi-character lived accounts (Maya, Marcus, Evelyn) + persistent reflection notebook.
  5. `How You Can Help` (`howyoucanhelp.html`): Smart Donor Field Guide, persistent 5-point action checklist, and downloadable text export.
- **Primary Input (Q11):** Hybrid touch & trackpad. Generous touch targets (≥ 44px) and tap-friendly tab buttons that respond instantly on phones and iPads, scaling smoothly to multi-column desktop displays with hover states, trackpad scrolling, and accessible keyboard reachability.
- **Core Model (Q12):** Curated Editorial & Guided Exhibit (primary), complemented by lightweight parametric simulations. The site functions as a structured five-wing interactive publication where users navigate through focused chapters to switch perspectives and absorb lived human realities without cognitive overload.
- **First 10 Seconds (Q13):** The visitor is immediately greeted by a bold, high-contrast provocation callout dispelling the working-poor myth ("Over 70% of households that visit food pantries include at least one working adult"), paired with an active, tap-ready USDA spectrum explorer.
- **Core Loop (Q14):** `Encounter a common assumption/stereotype → inspect the interactive evidence & lived human story → understand the actual structural cause`.
- **Export & Output (Q15):** Downloadable Action Plan & Field Guide (`.txt` / `.md`). A clean, formatted export compiling the user's completed action commitments, personal reflection notes, and the smart donor field guide (high-utility staples, what to avoid) to print or bring directly to student clubs, volunteer meetings, or community food drives.

## 5. Prior Art & Research

### Documented Precedents & References

1. **Map the Meal Gap** (Feeding America, 2011–present) — https://map.feedingamerica.org/  
2. **Spent** (McKinney / Urban Ministries of Durham, 2011) — https://playspent.org/  
3. **The Hope Center RealCollege Survey** (Temple University, 2015–present) — https://hope.temple.edu/  
4. **USDA Food Access Research Atlas** (USDA ERS, 2013–present) — https://www.ers.usda.gov/data-products/food-access-research-atlas/  
5. **Freedge / Community Fridge Network** (2014–present) — https://freedge.org/  
6. **Classicery** (Phil Renato, 2024) — https://renato.design/classicery/  
7. **Farm Security Administration (FSA) Photography** (Dorothea Lange, Walker Evans, 1935–1944) — https://www.loc.gov/pictures/collection/fsa/  
8. **"Hunger in America" CBS Reports** (Edward R. Murrow / CBS News, 1968) — https://www.imdb.com/title/tt0286705/  
9. **Improving SNAP for College Students** (Center on Budget and Policy Priorities, 2021) — https://www.cbpp.org/research/food-assistance/improving-snap-for-college-students  

### Comparative Reflection
- **Closest Precedents (Q16):** FSA Documentary Photography (1935–1944) & Freedge Community Fridge Network (2014–present). Synthesizes documentary human dignity across all ages and races with pragmatic mutual-aid guidelines.
- **Precedent to avoid (Q17):** Improving SNAP for College Students (CBPP). Too academic, bureaucratic, and dry—a 40-page legal whitepaper that alienates everyday readers.
- **Techniques borrowed (Q18):** Zero external dependencies / pure vanilla web platform (CSS custom properties, CSS Grid/Flexbox, DOM events, `localStorage` persistence, native SVG vector graphics, standard Service Worker caching).
- **What is Mine:** The synthesis of structural analysis with immediate campus relevance, interactive budget trade-off modeling, a myth-busting loop, and a cohesive five-wing navigation architecture.

## 6. Identity & Visual Language

- **Name (Q19):** `Empty Bowl` (Subtitle: *Food Insecurity*; URL ID: `emptybowl` / `foodinsecurity`). Tactile, grounded, and evocative—referencing the historic grassroots community ceramics and meal tradition to emphasize the physical, daily reality of food access and human dignity.
- **Wordmark Register (Q20):** Warm Craft / Studio Workshop (Exhibition Sign). Sculptural, expressive letterforms with subtle organic warmth reflecting physical craft, ceramics, and human community—avoiding both sterile bureaucratic typography and generic corporate sans.
- **Color Palette (Q21):**
  - Background: Dark roasted walnut (`#181614`)
  - Panels & Cards: Deep warm wood (`#211e1a`, `#26231e`, border `#36312a`)
  - Ink: Unbleached linen (`#f5f0ea`, muted `#aba398` — contrast ≥ 14.5:1)
  - Primary Accent: Sage garden green (`#558963` fill, `#72a681` text — contrast 5.2:1)
  - Secondary Accent / Ring: Ochre harvest gold (`#e5a93b` — contrast 8.6:1)
  - Metaphor: Evokes community gardens, fresh local harvest, wood tables, and honest pantry staples.
- **Voice & Tone (Q22):** Quietly Poetic & Observational. Thoughtful, reflective, calm, and grounded. Invites measured reflection on daily routines, craft, and human care without preachiness, melodrama, or clinical jargon. Tooltips and captions observe the quiet reality of daily math, community tables, and mutual aid.

## 7. Technical Specifications

- **Build Scheme (Q23):** Build counter (`f00000-001`)
- **License (Q24):** All Rights Reserved. Copyright (c) 2026 Ethan Norland.
- **Target Devices & Browsers (Q25):** Everywhere / Universal. Mobile browsers (iOS Safari on iPhone/iPad, Android Chrome) plus all four major desktop browsers (Chrome, Safari, Firefox, Edge). Guaranteed responsive, touch-friendly, and offline-functional.
- **Display Mode (Q26):** Standalone PWA, fully offline-functional via service worker cache.
- **Review Tooling:** Built-in local markup server on `localhost:8765` via `tools/markup-server.py`.

## 8. Milestone Plan

- [x] **Phase 0:** Interview complete; `BRIEF.md` finalized.
- [x] **Phase 1:** Walking Skeleton assembled with 5 interconnected wings, top navigation buttons, offline PWA pair, and markup review tools.
- [ ] **Phase 2 (Active Next):** Identity & Voice Refresh:
  - Apply the Dark Walnut (`#181614`), Unbleached Linen (`#f5f0ea`), Sage Green (`#72a681`), and Ochre Gold (`#e5a93b`) palette across all 5 pages.
  - Update branding and wordmark across all pages to **Empty Bowl** *(Food Insecurity)*.
  - Refine tooltips and text to embody the quietly poetic and observational voice.
  - Update About panels with the finalized Q7 raison d'être statement and "All Rights Reserved" line.
- [ ] **Phase 3:** Data Persistence & Export Testing:
  - Verify `localStorage` quiet recovery across browser restarts and private windows.
  - Test `.txt` Action Plan download across mobile and desktop.
- [ ] **Phase 4:** Interface & Accessibility Gate:
  - Zero-overlap audit at phone width (375px), tablet, and desktop.
  - Confirm WCAG AA contrast on every text element.
  - Test searchable Help ringing on all 5 screens.
- [ ] **Phase 5:** User test with a real student or volunteer; mark up screens using `tools/markup-server.py`.
- [ ] **Phase 6:** Release build tag (`f00000-002`), write `CHANGELOG.md`, and deploy to GitHub Pages (`https://EthanNorland.github.io/emptybowl/`).

## 9. Backlog ("Later" List for Version 2+)
- Spoken-word audio narrative readings of Maya, Marcus, and Evelyn's accounts.
- Interactive grocery basket nutrition calculator.
- User-submitted campus pantry and community fridge directory.
