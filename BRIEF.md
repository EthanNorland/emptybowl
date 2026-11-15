# Project Brief: Food Insecurity

## 1. The Seed

- **What it is (Q1):** An interactive educational website and instrument examining food insecurity: who faces hunger, root structural causes, lived human experiences, and tangible ways to take action.
- **Medium & Materiality (Q2):** Editorial design, data storytelling, interactive simulations, and personal narrative text, formatted with responsive layout, warm palette, and offline accessibility.
- **Origin / Frustration (Q3):** [PROVISIONAL] Frustration with the superficiality of food insecurity discussions—where hunger is either reduced to abstract dry statistics or dismissed with tropes like the "starving student"—obscuring real systemic barriers and actionable solutions.
- **Visual Reference:** [`reference/`](file:///Users/ethannorland/foodinsecurity/reference/) — [PROVISIONAL]

## 2. Raison d'Être

- **What it lets the user do, see, or feel (Q4):** 
  - Viscerally see why food gets squeezed first when fixed costs (rent, healthcare) spike via the interactive budget simulator.
  - Understand the specific crisis of college student food insecurity without condescension.
  - Explore concrete ways to help (high-utility donations, mutual aid fridges, policy reform) and track personal commitments.
- **The ONE thing it does best (Q5):** Connect macro-level economic realities (housing, grocery redlining, benefit cliffs) directly to micro-level daily choices and human dignity.
- **Deliberate non-goals / scope boundaries (Q6):** 
  - No remote accounts, logins, or user tracking.
  - Not an e-commerce or commercial charity portal with credit card processors.
  - Focuses on deep educational clarity, structural causes, and direct local action.
- **Core statement / About line (Q7):** *"Food Insecurity exists because understanding hunger requires seeing both the systemic math that creates it and the human dignity at its center."*

## 3. The User

- **Primary User (Q8):** [PROVISIONAL] A community college or university student seeking to understand campus and community food insecurity, or someone looking for tangible ways to support local pantries and mutual aid.
- **Secondary User (Q9):** Educators, student organizers, and community volunteers looking for a dignified, well-researched educational resource.
- **Who it is NOT for (Q10):**
  - People seeking an emergency 911 dispatch or acute crisis response hotline.
  - Academic economists looking for raw econometric regression datasets.

## 4. The Interaction Model

- **Architecture:** 5 interconnected wings linked via universal top button navigation on every screen:
  1. `Food Insecurity` (`index.html`) — Overview & USDA Spectrum Explorer
  2. `Who Faces Hunger` (`whofaceshunger.html`) — Interactive Demographic Profiles
  3. `Causes of Food Insecurity` (`causesoffoodinsecurity.html`) — Budget Elasticity Simulator & 4 Pillars
  4. `Personal Stories` (`personalstories.html`) — Multi-voice Narratives & Persistent Reflection Notes
  5. `How You Can Help` (`howyoucanhelp.html`) — Smart Donor Guide & Persistent Action Checklist
- **Primary Input (Q11):** Mouse/trackpad and touch-friendly (generous button hit targets ≥ 44px, clean tabbed switchers, zero keyboard-only traps).
- **Core Model (Q12):** Editorial narrative with parametric/interactive exploration widgets.
- **First 10 Seconds (Q13):** The page opens on a clear definition, followed immediately by an interactive 4-tier spectrum explorer so the user can immediately interact and inspect food security ranges.
- **Core Loop (Q14):** `Navigate topic → Inspect interactive simulation/profile → Read real-world impact → Record reflection / action`.
- **Export & Output (Q15):** Local browser persistent state for reflection notes and the 5-point action checklist.

## 5. Prior Art & Research

- **Comparative References:** USDA Economic Research Service, Hope Center for College Community & Justice, Feeding America.
- **What is Mine:** The synthesis of structural analysis with immediate campus relevance, interactive budget trade-off modeling, and a cohesive five-wing navigation architecture.

## 6. Identity & Visual Language

- **Name (Q19):** `Food Insecurity` (Repo: `foodinsecurity`)
- **Wordmark Register (Q20):** Editorial humanist typography paired with a clean geometric bowl/grain emblem.
- **Color Palette (Q21):**
  - Background: Deep obsidian (`#141416`)
  - Panels: Charcoal (`#1b1b1e`, `#1e1e22`)
  - Ink: Warm parchment (`#f4ede2`, `#a69f95`)
  - Accent: Terracotta clay (`#c25934`)
  - Highlight/Ring: Amber gold (`#f3b060`)
- **Voice & Tone (Q22):** Direct, dignified, educational, and grounded—avoiding melodrama, bureaucratic jargon, and patronizing charity tropes.

## 7. Technical Specifications

- **Build Scheme (Q23):** Build counter (`f00000-001`)
- **License (Q24):** MIT License
- **Target Devices & Browsers (Q25):** Desktop & Mobile Safari, Chrome, Firefox, Edge
- **Display Mode (Q26):** Standalone PWA, fully offline-functional via service worker cache
- **Review Tooling:** Built-in local markup server on `localhost:8765` via `tools/markup-server.py`

## 8. Milestone Plan

- [x] **Phase 0:** Interview seed & initial BRIEF.md
- [x] **Phase 1:** Walking Skeleton: 5 linked pages with top navigation buttons, PWA manifest, service worker, icons, and markup review tools.
- [ ] **Phase 2:** Deepening interactive modules & student-specific focus.
- [ ] **Phase 3:** Persistcore / advanced local storage tests & verified offline mode.
- [ ] **Phase 4:** Polish tooltips, searchable help index verification, and mobile audit.
- [ ] **Phase 5:** User test with a real reader / student.
- [ ] **Phase 6:** Public deploy to `https://EthanNorland.github.io/foodinsecurity/`.
