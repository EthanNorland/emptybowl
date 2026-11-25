# Empty Bowl

An interactive editorial instrument exploring food insecurity: who faces hunger, root structural causes, lived personal experiences, and actionable pathways for community solidarity.

- **Current Build:** `f00000-001`
- **Identity:** *Empty Bowl* (Subtitle: *Food Insecurity*)
- **Live Target:** `https://EthanNorland.github.io/emptybowl/`

## Structure
The site is organized across 5 interconnected wings, accessible via persistent top navigation on every page:
1. **Empty Bowl (`index.html`):** The foundational framework, 70% working-poor provocation, and interactive continuum of USDA food security levels.
2. **Who Faces Hunger (`whofaceshunger.html`):** Demographics and disproportionately vulnerable groups (college students, working parents, hourly workers, seniors, rural communities).
3. **Causes of Food Insecurity (`causesoffoodinsecurity.html`):** Interactive budget elasticity simulator (showing how fixed housing/medical costs squeeze food), living wage gaps, food deserts, and benefits cliffs.
4. **Personal Stories (`personalstories.html`):** Humanizing lived experiences (Maya, Marcus, Evelyn) with a persistent, autosaving reader reflection notebook.
5. **How You Can Help (`howyoucanhelp.html`):** The Smart Donor Field Guide, choice-based mutual aid principles, an interactive 5-point community action checklist, and downloadable `.txt` Action Plan export.

## Technical Details
- **Architecture:** Zero-dependency static web app, works offline as an installable PWA.
- **Palette:** Dark Roasted Walnut (`#181614`), Unbleached Linen (`#f5f0ea`), Sage Garden Green (`#558963` / `#72a681`), and Ochre Harvest Gold (`#e5a93b`). Contrast ratio ≥ 4.5:1 on all text.
- **Persistence:** Local browser state for checklists and reflections; no remote databases or tracking.
- **Review Tools:** Includes local in-browser markup review tools in `tools/` (gitignored, never deployed).

## Credits & License
By Ethan Norland, written with Gemini. All rights reserved. Copyright © 2026 Ethan Norland.
