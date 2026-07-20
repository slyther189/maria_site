#!/usr/bin/env python3
"""
make_thumbnails.py
------------------
Generates small, web-optimized thumbnails for the gallery grid from your
full-size photos in images/, and writes them to images-thumb/.

The lightbox (enlarged view) keeps using the originals in images/ — this
script never touches or deletes those.

HOW TO RUN (on a Mac):
1. Open Terminal (Cmd+Space, type "Terminal", hit enter)
2. Install the one dependency, Pillow (only needed once ever):
     pip3 install Pillow
3. Put this script in the same folder as your "images" folder
   (i.e. the root of your website project, next to index.html)
4. Run it:
     python3 make_thumbnails.py
5. It creates an "images-thumb" folder full of small copies.
6. Add "images-thumb" to your GitHub Desktop commit alongside your other
   changes, and push.

You can re-run this any time you add new paintings — it skips images
that already have an up-to-date thumbnail, so it's fast after the first run.
"""

from pathlib import Path
from PIL import Image, ImageOps

SOURCE_DIR = Path("images")
THUMB_DIR  = Path("images-thumb")

# Longest edge of the thumbnail, in pixels. The gallery cards display at
# roughly 260-500px wide depending on screen size and zoom, so 900px covers
# even sharp retina/high-DPI screens with room to spare.
MAX_EDGE = 900

# JPEG quality 1-100. 78-82 is the sweet spot: visually identical to the
# original at this size, but a fraction of the file size.
JPEG_QUALITY = 80

VALID_EXTENSIONS = {".jpg", ".jpeg"}


def needs_rebuild(src: Path, dst: Path) -> bool:
    if not dst.exists():
        return True
    return src.stat().st_mtime > dst.stat().st_mtime


def make_thumbnail(src: Path, dst: Path) -> None:
    with Image.open(src) as img:
        # Respect EXIF orientation (camera photos are often rotated via
        # metadata, not actual pixels — this bakes the rotation in so it
        # displays correctly everywhere).
        img = ImageOps.exif_transpose(img)
        img = img.convert("RGB")  # drop any alpha channel, ensure JPEG-safe
        img.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
        img.save(dst, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)


def main():
    if not SOURCE_DIR.is_dir():
        print(f"Couldn't find '{SOURCE_DIR}/' — run this script from your "
              f"project's root folder (the one with index.html in it).")
        return

    THUMB_DIR.mkdir(exist_ok=True)

    files = [f for f in SOURCE_DIR.iterdir() if f.suffix.lower() in VALID_EXTENSIONS]
    if not files:
        print(f"No .jpg files found in '{SOURCE_DIR}/'.")
        return

    made, skipped, before_total, after_total = 0, 0, 0, 0

    for src in sorted(files):
        dst = THUMB_DIR / src.name
        before_total += src.stat().st_size

        if not needs_rebuild(src, dst):
            skipped += 1
            after_total += dst.stat().st_size
            continue

        make_thumbnail(src, dst)
        made += 1
        after_total += dst.stat().st_size

    print(f"\nDone. Created/updated {made} thumbnail(s), skipped {skipped} already up to date.")
    print(f"Originals total:   {before_total / 1_048_576:.1f} MB")
    print(f"Thumbnails total:  {after_total / 1_048_576:.1f} MB "
          f"(counting only the {made + skipped} matching files)")


if __name__ == "__main__":
    main()
