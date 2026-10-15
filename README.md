# The Painted Scroll — Ashutosh & Rakhi

A wedding invitation page in the Mithila (Madhubani) tradition. Mithila artwork
throughout, with Tikuli maroon-and-gold for the nameplate, date badges and buttons.

## Files

- `index.html` — markup and content structure
- `styles.css` — palette, type, layout
- `script.js` — **single content config** (`CONFIG` at the top) plus the intro, scroll
  reveals, scroll-linked baraat, lazy maps and share button
- `assets/gen/` — all artwork, sliced from the generated motif sheet
  (`assets/gen/src/sheet.png`) plus `fish-circle.png` and `varmala.png` from `downloads/`.
  `border-strip.png` / `border-thin.png` are mirror-tiled so they repeat seamlessly;
  `corner.png` has its paper keyed out and is mirrored by CSS for all four corners;
  `paper.jpg` is the page background.
- `ART-PROMPTS.md` — prompts for regenerating any piece at higher resolution
- `assets/favicon.svg`, `assets/og-image.svg` — **og-image needs a raster PNG export** for WhatsApp/Facebook previews

## Editing content

Everything guest-facing lives in `CONFIG` in `script.js`.

## Artwork

Swap any image in `assets/gen/` keeping the file name. The motif tiles are about
220px because they were cut from one sheet; regenerating them individually at
1200px (see `ART-PROMPTS.md`) will make them sharper on high-density phones.
Confirm the right to use the source images (artist credit/licence) before publishing.
