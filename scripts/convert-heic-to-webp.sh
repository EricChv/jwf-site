#!/usr/bin/env bash
set -euo pipefail

# Simple ImageMagick-based HEIC -> WebP converter
# Usage:
#   bash scripts/convert-heic-to-webp.sh [input-folder] [--width=1200] [--quality=80] [--outdir=out]
# Examples:
#   bash scripts/convert-heic-to-webp.sh          # convert files under cwd
#   bash scripts/convert-heic-to-webp.sh public/project-gallery/prj-8 --width=1000 --quality=80
#   bash scripts/convert-heic-to-webp.sh pics --outdir=thumbs
#
# How to run (pick one)
#
# Using ImageMagick (recommended if you have magick + libheif):
#   npm run convert:heic -- public/project-gallery/prj-8 --width=1200 --quality=80

WIDTH=1200
QUALITY=80
OUTDIR=""  # if empty, write next to source file in `thumbs/` subfolder
RECURSIVE=1

# parse args
INPUT_DIR="."
for arg in "$@"; do
  case "$arg" in
    --width=*) WIDTH="${arg#--width=}" ;;
    --quality=*) QUALITY="${arg#--quality=}" ;;
    --outdir=*) OUTDIR="${arg#--outdir=}" ;;
    --no-recursive) RECURSIVE=0 ;;
    --help|-h) echo "Usage: $0 [input-dir] [--width=1200] [--quality=80] [--outdir=thumbs] [--no-recursive]"; exit 0 ;;
    *)
      # assume positional input dir
      INPUT_DIR="$arg" ;;
  esac
done

if [ ! -d "$INPUT_DIR" ]; then
  echo "Input folder not found: $INPUT_DIR" >&2
  exit 1
fi

# Build find expression
if [ "$RECURSIVE" -eq 1 ]; then
  FIND_CMD=(find "$INPUT_DIR" -type f \( -iname '*.heic' -o -iname '*.heif' \) -print0)
else
  FIND_CMD=(find "$INPUT_DIR" -maxdepth 1 -type f \( -iname '*.heic' -o -iname '*.heif' \) -print0)
fi

printf "Converting HEIC/HEIF files in %s (width=%s quality=%s)\n" "$INPUT_DIR" "$WIDTH" "$QUALITY"

count=0
# shellcheck disable=SC2046
while IFS= read -r -d '' file; do
  dir=$(dirname "$file")
  base=$(basename "$file")
  name="${base%.*}"

  if [ -n "$OUTDIR" ]; then
    destdir="$OUTDIR"
    mkdir -p "$destdir"
  else
    destdir="$dir/thumbs"
    mkdir -p "$destdir"
  fi

  outpath="$destdir/${name}.webp"

  # run ImageMagick: resize (keeping aspect), convert to webp
  # note: requires ImageMagick built with HEIC/HEIF support (libheif)
  if magick "$file" -resize "${WIDTH}x" -quality "$QUALITY" "$outpath"; then
    printf "wrote: %s\n" "$outpath"
    count=$((count+1))
  else
    printf "error converting: %s\n" "$file" >&2
  fi

done < <("${FIND_CMD[@]}")

printf "done — converted %d files.\n" "$count"

# Example usage shown after completion
printf "\nQuick verification commands:\n"
printf "  find %s -type f -path '*/thumbs/*' -print\n" "$INPUT_DIR"
printf "  find %s -type f -path '*/thumbs/*' | wc -l\n" "$INPUT_DIR"
