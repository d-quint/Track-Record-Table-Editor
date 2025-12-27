# Track Record Table Maker

A fully client-side, vanilla JavaScript editor for creating Drag Race-style track record tables. No server required — runs entirely in your browser.

![Track Record Table Editor](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

---

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Core Concepts](#core-concepts)
4. [Painting Placements](#painting-placements)
5. [Auto-Numbering & Visual Variants](#auto-numbering--visual-variants)
6. [Auto-Fill OUT](#auto-fill-out)
7. [Tie Ranking](#tie-ranking)
8. [Borders & Subtexts](#borders--subtexts)
9. [Reordering (Drag & Drop)](#reordering-drag--drop)
10. [Photo Management](#photo-management)
11. [Undo / Redo](#undo--redo)
12. [Table Appearance Settings](#table-appearance-settings)
13. [Groups & Custom Episode Labels](#groups--custom-episode-labels)
14. [All Stars Mode](#all-stars-mode)
15. [Exporting](#exporting)
16. [Project Save / Load](#project-save--load)
17. [Technical Architecture](#technical-architecture)
18. [File Structure](#file-structure)
19. [Browser Compatibility](#browser-compatibility)
20. [Credits](#credits)

---

## Overview

This editor lets you:

- Build track record tables like those seen on Drag Race wiki pages
- Paint placements with click-and-drag
- Automatically number TOP/BTM placements per column
- Auto-fill "Out" cells after elimination
- Compute tie rankings for simultaneous exits
- Add border overlays (Immunity, Chocolate Bar, etc.)
- Add subtext labels (Mini Challenge Winner, Team Captain)
- Reorder contestants and episodes via drag-and-drop
- Upload or paste contestant photos (auto-cropped to square)
- Undo/redo all changes (Ctrl+Z / Ctrl+Y)
- Export to HTML or PNG

Everything runs client-side with no backend or database.

---

## Getting Started

1. Open `index.html` in any modern browser
2. Add contestants in the **Contestants** tab (name, age, location, photo)
3. Add episodes in the **Episodes** tab (challenge names)
4. Select a placement from the **Placements** palette tab
5. Click or drag across cells in the preview table to paint
6. Adjust settings, add borders/subtexts, then export

---

## Core Concepts

### State-Driven Rendering

The entire UI is driven by a single `state` object containing:

- `title` — Table header text
- `contestants[]` — Each with `id`, `name`, `photo`, `age`, `location`, `groupId`, `placements[]`, `borders[]`, `subtexts[]`
- `episodes[]` — Each with `id`, `groupLabel`, `challenge`
- `placementsById{}` / `placementRoots[]` — Hierarchical placement definitions
- `bordersById{}` / `borderRoots[]` — Border add-on definitions
- `subtextsById{}` / `subtextRoots[]` — Subtext add-on definitions
- `groups[]` — Contestant group definitions (for split premieres)
- Settings: `showPhotos`, `showAge`, `showLocation`, `allStarsMode`, `groupsEnabled`, `customEpisodeLabels`, `tableScale`, `tableFont`, `tableFontSize`, `cellPadding`, `photoSize`, `autoFillOut`, `showRankColumn`

Any state change triggers `renderTable()` to rebuild the preview.

---

## Painting Placements

### How It Works

1. Select a placement chip from the palette (e.g., WIN, HIGH, SAFE, BTM, ELIM)
2. Click a cell in the table to apply it
3. Or click-and-drag across multiple cells to paint in one stroke

### Paint Modes

The palette has **tabs** for different placement categories:

| Tab         | Contents                                                      |
|-------------|---------------------------------------------------------------|
| Placements  | WIN, TOP, HIGH, SAFE, LOW, BTM, ELIM, OUT, EMPTY              |
| Finale      | WINNER, RUNNERUP, GUEST, MISSCON, FIN_TOP3/4, LSFTC variants  |
| Events      | RUN, LPRZW (LaLaPaRUZa), DEPT, CUT, BLOCK, RTRN, QUIT, DISQ   |
| Borders     | POTION, BEAVER, CHOCOLATE, SAVED (overlay borders)            |
| Subtexts    | MINI, TEAMCAP (small italic text below placement)             |

### Submenus

Some placements have children (e.g., LSFTC → LSFTC_L1/L2/L3). Click the ▶ arrow to expand/collapse.

---

## Auto-Numbering & Visual Variants

### TOP Auto-Numbering

When multiple contestants have **TOP** in the same column:

- 2 contestants → both display as **TOP2**
- 3 contestants → all display as **TOP3**
- etc.

If a **WIN** exists in the same column, WIN + TOP placements combine (e.g., 1 WIN + 1 TOP = TOP2).

### BTM Auto-Numbering

When multiple contestants have **BTM** in the same column:

- Counts BTM + ELIM placements
- 2 total → **BTM2**, 3 total → **BTM3**, etc.
- If no ELIM exists (everyone was saved), BTM cells turn **hotpink** instead of tomato

### WIN Visual Variant

When 2+ contestants have **WIN** in the same column, the second+ WIN displays as **darkblue** instead of royalblue (automatic visual distinction).

### ELIM Visual Variant

When 2+ contestants have **ELIM** in the same column (double elimination), the second+ ELIM displays as **darkred** instead of red.

---

## Auto-Fill OUT

When **Auto-fill OUT** is enabled (default), any empty cells after a terminal placement automatically render as "Out" (grey background).

Terminal placements that trigger auto-fill:

- `ELIM`, `FELIM`, `EXTM`, `CUT`, `HIGH_CUT`, `DISQ`, `QUIT`

The OUT cells are visual only — they don't overwrite the stored `placements[]` array.

---

## Tie Ranking

The **Rank** column (optional) computes each contestant's final placement:

### Basic Ranking

Contestants are ranked by elimination order (last eliminated = higher rank). The winner is rank 1.

### Tie Detection

Multiple contestants share the same rank when:

1. **Simultaneous Elimination** — 2+ contestants have ELIM/FELIM/EXTM in the same episode
2. **Multiple Runner-Ups** — Multiple RUNNERUP placements (e.g., top 2 finalists)
3. **LSFTC Losers** — Contestants with the same LSFTC_L1/L2/L3 placement share a rank

Example: If 3 contestants lose in the first LSFTC round, they all share 4th place (not 4th, 5th, 6th).

---

## Borders & Subtexts

### Border Add-Ons

Borders are **overlays** — they don't replace the placement, just add a colored border:

| ID        | Name      | Purpose                                     |
|-----------|-----------|---------------------------------------------|
| POTION    | Potion    | Immunity potion (pink border)               |
| BEAVER    | Beaver    | Golden Beaver save (gold border)            |
| CHOCOLATE | Chocolate | Chocolate bar twist (brown border)          |
| SAVED     | Saved     | Generic saved/immunity (yellow border)      |

To apply: Switch to the **Borders** palette tab, select a border, then paint cells.

### Subtext Add-Ons

Subtexts add small italic text below the placement:

| ID      | Display         | Purpose                    |
|---------|-----------------|----------------------------|
| MINI    | Mini Chall. Win | Won the mini challenge     |
| TEAMCAP | Team Captain    | Was team captain           |

To apply: Switch to the **Subtexts** palette tab, select a subtext, then paint cells.

---

## Reordering (Drag & Drop)

### Sidebar Reordering

- **Contestants**: Drag via the ⋮⋮ handle in the Contestants tab
- **Episodes**: Drag via the ⋮⋮ handle in the Episodes tab

### Live Table Reordering

- **Contestants**: Drag from the left gutter (grey bar) in the preview table
- A blue insertion indicator shows where the contestant will be placed

Reordering is **undoable** — Ctrl+Z restores the previous order.

---

## Photo Management

### Adding Photos

1. Click the photo placeholder (in sidebar or table)
2. A dropdown menu appears:
   - **Upload from computer…** — Opens file picker
   - **Paste from clipboard** — Reads image from clipboard (if permitted)

### Clipboard Paste

- If clipboard permission is already granted, paste works instantly
- If not, click "Paste" then press **Ctrl+V** to complete
- On `file://` origins, clipboard API may be blocked — use HTTP server

### Auto-Cropping

All photos are automatically:

- Center-cropped to a square
- Resized to 110×110px
- Converted to JPEG (80% quality) for smaller file size

---

## Undo / Redo

All actions are tracked in a history stack:

| Shortcut       | Action |
|----------------|--------|
| Ctrl+Z         | Undo   |
| Ctrl+Y         | Redo   |
| Ctrl+Shift+Z   | Redo   |

### What's Tracked

- Paint strokes (placements, borders, subtexts)
- Content edits (title, contestant names, episode names)
- Photo changes
- Contestant/episode reordering

### Implementation

Two history types:

1. **Stroke history** — Records cell changes as `{ contestantId, episodeIdx, from, to }` for placements, borders, or subtexts
2. **Fields history** — Records property changes as `{ scope, id, field, from, to }` for title, name, photo, etc.

---

## Table Appearance Settings

Found in the **Settings** tab:

| Setting       | Range     | Description                          |
|---------------|-----------|--------------------------------------|
| Table Scale   | 50–150%   | Overall table zoom                   |
| Font Family   | Dropdown  | Geist, Arial, Times, Verdana, etc.   |
| Font Size     | 50–150%   | Text size within cells               |
| Cell Padding  | 50–150%   | Internal cell spacing                |
| Photo Size    | 50–150%   | Contestant photo dimensions          |

---

## Groups & Custom Episode Labels

### Contestant Groups

Enable **Groups** to assign contestants to groups (useful for split premieres):

- Each group has a name, background color, and text color
- Contestants display a small "(Group X)" label next to their name
- The name cell is styled with the group's colors

### Custom Episode Labels

Enable **Custom Episode Labels** to override the auto-generated "Ep. 1", "Ep. 2" labels with custom text (e.g., "Premiere", "Finale").

---

## All Stars Mode

Toggle **All Stars Mode** to replace Age/Location fields with:

- **Original Season(s)** — e.g., "Season 5, All Stars 2"
- **Original Rank(s)** — e.g., "5th, Runner-Up"

These display in the contestant info column alongside the photo.

---

## Exporting

### Export as HTML

Click **Export HTML** to generate embeddable HTML:

- Includes inline styles (no external CSS required)
- Compatible with wiki platforms (Fandom, MediaWiki)
- Border width reduced to 1px for cleaner wiki display

### Export as PNG

Click **Save as Image** to generate a PNG screenshot:

- Uses `html2canvas` library
- High-resolution output suitable for social media

### Copy to Clipboard

The export modal includes a **Copy** button for quick clipboard copy of HTML.

---

## Project Save / Load

### Save Project

Click **Save Project** to download a `.json` file containing the entire state:

- All contestants, episodes, placements
- All customizations (colors, fonts, settings)
- Photo data (as base64 data URLs)

### Load Project

Click **Load Project** to restore from a saved `.json` file.

### New / Reset

- **New Blank Project** — Start fresh with empty contestants/episodes
- **Reset to Default** — Restore the sample data

---

## Technical Architecture

### Pure Vanilla JavaScript

No frameworks (React, Vue, etc.) — just plain JS, HTML, and CSS:

- **State object** — Single source of truth
- **Render functions** — Rebuild HTML strings from state
- **Event delegation** — Minimal event listeners on container elements

### Key Functions

| Function                  | Purpose                                    |
|---------------------------|--------------------------------------------|
| `renderAll()`             | Rebuild all UI sections                    |
| `renderTable()`           | Rebuild the preview table                  |
| `renderPaintPalette()`    | Rebuild the placement palette              |
| `handlePreviewClick()`    | Handle cell click for painting             |
| `handlePreviewMouseDown()`| Start drag-painting                        |
| `pushHistory()`           | Add action to undo stack                   |
| `undo()` / `redo()`       | Restore previous/next state                |
| `exportAsHtml()`          | Generate embeddable HTML                   |
| `exportAsImage()`         | Generate PNG via html2canvas               |
| `saveProject()`           | Download state as JSON                     |
| `loadProject()`           | Restore state from JSON                    |

### Placement Processing Pipeline

1. **Raw ID** — Stored in `contestant.placements[epIdx]` (e.g., "BTM")
2. **Canonical ID** — Normalized via `canonicalizePlacementId()` (BTM2→BTM)
3. **Visual Placement** — Computed via `computeVisualPlacement()` (BTM→BTM3, color changes)
4. **Auto-Fill** — Empty cells after terminal placements → OUT
5. **Render** — Final HTML with all styles applied

---

## File Structure

```
treditor/
├── index.html      # Main HTML structure, sidebar, modal
├── app.js          # All JavaScript logic (state, render, events)
├── styles.css      # All CSS (layout, theme, components)
└── README.md       # This documentation
```

### External Dependencies

- **html2canvas** (CDN) — For PNG export only
- **Google Fonts** (optional) — Geist font family

---

## Browser Compatibility

| Browser        | Status                                    |
|----------------|-------------------------------------------|
| Chrome 90+     | ✅ Full support                           |
| Firefox 88+    | ✅ Full support                           |
| Safari 14+     | ✅ Full support                           |
| Edge 90+       | ✅ Full support                           |
| IE 11          | ❌ Not supported (uses modern JS)         |

### Known Limitations

- **Clipboard paste on `file://`** — Browser security may block clipboard API; use `http://localhost` instead
- **Large tables** — Performance may degrade with 50+ contestants; consider splitting

---

## Credits

Built with ♥ by [d-quint](https://github.com/d-quint/)

Inspired by the track record tables on [RuPaul's Drag Race Wiki](https://rupaulsdragrace.fandom.com/).

---

## License

MIT License — free to use, modify, and distribute.
