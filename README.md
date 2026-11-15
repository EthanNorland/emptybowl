# Food Insecurity

An interactive web instrument exploring the systemic crisis of food insecurity: who faces hunger, root structural causes, lived personal experiences, and actionable pathways for community solidarity.

- **Current Build:** `f00000-001`
- **Live Site:** `https://EthanNorland.github.io/foodinsecurity/` (deploy target)

## Structure
The site is organized across 5 interconnected wings, accessible via top navigation on every page:
1. **Food Insecurity (`index.html`):** The foundational framework and interactive continuum of food security levels.
2. **Who Faces Hunger (`whofaceshunger.html`):** Demographics and disproportionately vulnerable groups (college students, working parents, rural households, seniors).
3. **Causes of Food Insecurity (`causesoffoodinsecurity.html`):** Economic instability, housing/medical cost squeezes, food deserts, and benefits cliffs.
4. **Personal Stories (`personalstories.html`):** Humanizing lived experiences with interactive reflection notes.
5. **How You Can Help (`howyoucanhelp.html`):** High-utility donations, mutual aid, campus pantries, and an interactive action checklist.

## Technical Details
- **Architecture:** Zero-dependency static web app, works offline as an installable PWA.
- **Persistence:** Local browser state for checklists and reflections; no remote databases or tracking.
- **Review Tools:** Includes local in-browser markup review tools in `tools/` (never deployed).

## Credits & License
By Ethan Norland, written with Gemini. Released under the [MIT License](LICENSE).
