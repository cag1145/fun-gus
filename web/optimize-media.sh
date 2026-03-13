#!/bin/bash
# Media optimization script for Fun-Gus web platform
# Strips metadata, resizes images, converts to WebP, optimizes videos

set -e

IMAGES_SRC="$HOME/fun-gus/images"
VIDEOS_SRC="$HOME/fun-gus/video"
VISUAL_REF="$HOME/fun-gus/Fungal_Sci-Fi_Journey/Visual_References"
IMG_DEST="$HOME/fun-gus/web/frontend/public/characters"
VID_DEST="$HOME/fun-gus/web/frontend/public/videos"

mkdir -p "$IMG_DEST" "$VID_DEST"

echo "=== OPTIMIZING IMAGES ==="

# Character image mappings (source filename -> dest filename)
declare -A IMG_MAP=(
  ["Fun_Gus"]="fun-gus"
  ["Spora"]="spora"
  ["Truff_Low"]="truff-low"
  ["Lumos"]="lumos"
  ["Chanty"]="chanty"
  ["Morel"]="morel"
  ["Puff"]="puff"
  ["Inky"]="inky"
  ["Stench"]="stench"
  ["Physa"]="physa"
  ["Tardi"]="tardi"
  ["Snapper"]="snapper"
  ["Russula"]="russula"
  ["Birdie"]="birdie"
  ["Rhiza"]="rhiza"
  ["Nitro"]="nitro"
  ["Strepto"]="strepto"
  ["Lacto"]="lacto"
  ["Cyano"]="cyano"
  ["Bacilli"]="bacilli"
  ["Blight"]="blight"
  ["Buzz"]="buzz"
  ["Mantis"]="mantis"
  ["Proto"]="proto"
  ["Virion"]="virion"
  ["Sillium"]="sillium"
  ["Tree-1"]="tree"
  ["fungal-forest"]="fungal-forest"
  ["journey"]="journey"
  ["new_character"]="new-character-1"
  ["new_character_2"]="new-character-2"
)

for src_name in "${!IMG_MAP[@]}"; do
  dest_name="${IMG_MAP[$src_name]}"
  src_file="$IMAGES_SRC/${src_name}.png"

  if [ -f "$src_file" ]; then
    echo "  Processing: $src_name -> $dest_name.webp"
    # Resize to 800px max width, strip ALL metadata, convert to WebP quality 82
    convert "$src_file" \
      -resize '800x800>' \
      -strip \
      -quality 82 \
      "$IMG_DEST/${dest_name}.webp"

    # Also create a smaller thumbnail (200px) for grid views
    convert "$src_file" \
      -resize '200x200>' \
      -strip \
      -quality 75 \
      "$IMG_DEST/${dest_name}-thumb.webp"
  else
    echo "  SKIP (not found): $src_file"
  fi
done

# Also copy from Visual_References (higher quality originals for some chars)
echo ""
echo "=== CHECKING VISUAL REFERENCES ==="
for ref_file in "$VISUAL_REF"/*.png; do
  [ -f "$ref_file" ] || continue
  base=$(basename "$ref_file" .png)
  # Map Visual Reference names
  case "$base" in
    "Fun-Gus") dest="fun-gus" ;;
    "Spora") dest="spora" ;;
    "Truff-Low") dest="truff-low" ;;
    "Sillium_Cavern") dest="sillium-cavern" ;;
    "Tree_Network") dest="tree-network" ;;
    *) dest="" ;;
  esac

  if [ -n "$dest" ] && [ ! -f "$IMG_DEST/${dest}.webp" ]; then
    echo "  Processing visual ref: $base -> $dest.webp"
    convert "$ref_file" -resize '800x800>' -strip -quality 82 "$IMG_DEST/${dest}.webp"
  else
    # Process sillium-cavern and tree-network which are unique to Visual_References
    if [ "$dest" = "sillium-cavern" ] || [ "$dest" = "tree-network" ]; then
      echo "  Processing visual ref: $base -> $dest.webp"
      convert "$ref_file" -resize '800x800>' -strip -quality 82 "$IMG_DEST/${dest}.webp"
    fi
  fi
done

# Generate placeholder SVG for characters without images
echo ""
echo "=== GENERATING PLACEHOLDER ==="
cat > "$IMG_DEST/placeholder.svg" << 'SVGEOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
  <rect width="400" height="400" fill="#0f1a16"/>
  <circle cx="200" cy="160" r="60" fill="#162420" stroke="#22d3b8" stroke-width="2" opacity="0.5"/>
  <path d="M200 100 Q220 80 240 100 Q260 120 240 140 Q220 160 200 140 Q180 160 160 140 Q140 120 160 100 Q180 80 200 100Z" fill="#162420" stroke="#22d3b8" stroke-width="1.5" opacity="0.4"/>
  <text x="200" y="280" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#7a9e8c">Unknown Species</text>
</svg>
SVGEOF

echo ""
echo "=== OPTIMIZING VIDEOS ==="

# Video mappings (source filename -> dest filename)
declare -A VID_MAP=(
  ["fun-gus"]="fun-gus"
  ["spora"]="spora"
  ["truff-low"]="truff-low"
  ["the-sillium"]="the-sillium"
  ["tree"]="tree"
  ["Lumos"]="lumos"
  ["Chanty"]="chanty"
  ["Morel"]="morel"
  ["Puff"]="puff"
  ["Inky"]="inky"
  ["Stench"]="stench"
  ["Physa"]="physa"
  ["Tardi"]="tardi"
  ["Snapper"]="snapper"
  ["Birdie"]="birdie"
  ["Rhiza"]="rhiza"
  ["Nitro"]="nitro"
  ["Strepto"]="strepto"
  ["lacto"]="lacto"
  ["Cyano"]="cyano"
  ["Bacilli"]="bacilli"
  ["Blight"]="blight"
  ["Buzz"]="buzz"
  ["Proto"]="proto"
  ["Virion"]="virion"
  ["journey"]="journey"
  ["new_character_1"]="new-character-1"
  ["new_character_2"]="new-character-2"
)

for src_name in "${!VID_MAP[@]}"; do
  dest_name="${VID_MAP[$src_name]}"
  src_file="$VIDEOS_SRC/${src_name}.mp4"
  dest_file="$VID_DEST/${dest_name}.mp4"

  if [ -f "$src_file" ]; then
    echo "  Processing: $src_name -> $dest_name.mp4"
    # Strip metadata, re-encode with reasonable quality, web-optimized (faststart)
    ffmpeg -y -i "$src_file" \
      -map_metadata -1 \
      -c:v libx264 -crf 28 -preset fast \
      -vf "scale='min(720,iw)':-2" \
      -c:a aac -b:a 96k \
      -movflags +faststart \
      -loglevel error \
      "$dest_file"
  else
    echo "  SKIP (not found): $src_file"
  fi
done

# Process intro video (larger file, optimize more aggressively)
INTRO_SRC="$VIDEOS_SRC/Fun-Gus_ My Fungal Adventure Intro_1080p_caption.mp4"
if [ -f "$INTRO_SRC" ]; then
  echo "  Processing: intro video (this may take a moment...)"
  ffmpeg -y -i "$INTRO_SRC" \
    -map_metadata -1 \
    -c:v libx264 -crf 26 -preset fast \
    -vf "scale='min(1080,iw)':-2" \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    -loglevel error \
    "$VID_DEST/intro.mp4"
fi

echo ""
echo "=== OPTIMIZATION COMPLETE ==="
echo ""
echo "Image sizes:"
du -sh "$IMG_DEST"
echo ""
echo "Video sizes:"
du -sh "$VID_DEST"
echo ""
echo "Total files:"
ls "$IMG_DEST" | wc -l
echo " images"
ls "$VID_DEST" | wc -l
echo " videos"
