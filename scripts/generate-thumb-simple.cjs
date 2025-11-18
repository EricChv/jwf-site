'use strict';
/**
 * Simple thumbnail generator for one album.
 *
 * Usage:
 *   node scripts/generate-thumb-simple.cjs <album-folder> [--width=720] [--quality=80] [--force]
 *
 * Commands (copy/paste)
 *
 * Generate thumbs for full album `prj-8` (default width=720, quality=80):
 *   npm run thumb:album -- prj-8
 *
 * Generate thumbs for only one subfolder (e.g. only the "before" folder):
 *   npm run thumb:album -- "prj-8/before"
 *
 * Regenerate and overwrite existing thumbs with custom size/quality:
 *   npm run thumb:album -- prj-8 --width=600 --quality=75 --force
 *
 * What the script does (so you know what to expect)
 *
 * - Scans `public/project-gallery/<album>` recursively (skips existing `thumbs/` folders).
 * - Writes thumbs as WebP into the same subfolder under `thumbs/`, e.g.:
 *     original: public/project-gallery/prj-8/before/1.jpg
 *     thumb:    public/project-gallery/prj-8/before/thumbs/1.webp
 * - It will not overwrite thumbs unless you pass `--force`.
 *
 * How `GallerySection` looks them up
 *
 * The component maps an image path like
 *   /project-gallery/prj-8/before/1.jpg
 * to
 *   /project-gallery/prj-8/before/thumbs/1.webp
 *
 * If a thumb is missing the component falls back to the original full image
 * (so the grid will still show images even before you generate thumbs).
 *
 * Verify thumbs were created
 *
 * Quick list of thumb files for prj-8:
 *   find public/project-gallery/prj-8 -type f -path '*/thumbs/*' -print
 *
 * Count thumbs across the gallery (optional):
 *   find public/project-gallery -type f -path '*/thumbs/*' | wc -l
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_GALLERY = path.resolve(process.cwd(), 'public', 'project-gallery');

function parseArgs(argv) {
  const args = { _: [] };
  argv.slice(2).forEach((a) => {
    if (a.startsWith('--')) {
      const [k, v] = a.slice(2).split('=');
      args[k] = v === undefined ? true : v;
    } else {
      args._.push(a);
    }
  });
  return args;
}

const args = parseArgs(process.argv);
const album = args._[0];
if (!album) {
  console.error('Missing album folder. Usage: node scripts/generate-thumb-simple.cjs <album-folder> [--width=720] [--quality=80] [--force]');
  process.exitCode = 1;
  process.exit();
}

const width = parseInt(args.width || '720', 10) || 720;
const quality = parseInt(args.quality || '80', 10) || 80;
const force = !!args.force;

const allowedExt = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

async function collectFiles(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (e.name === 'thumbs') continue; // skip thumbs folders
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      const nested = await collectFiles(full);
      files.push(...nested);
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (allowedExt.includes(ext)) files.push(full);
    }
  }
  return files;
}

(async () => {
  try {
    const albumPath = path.join(PUBLIC_GALLERY, album);
    if (!fs.existsSync(albumPath) || !fs.statSync(albumPath).isDirectory()) {
      console.error('Album folder not found:', albumPath);
      process.exitCode = 1;
      return;
    }

    console.log(`Scanning album: ${albumPath}`);
    const images = await collectFiles(albumPath);
    console.log(`Found ${images.length} images (excluding thumbs).`);

    for (const img of images) {
      const dir = path.dirname(img);
      const base = path.basename(img, path.extname(img));
      const thumbsDir = path.join(dir, 'thumbs');
      await fs.promises.mkdir(thumbsDir, { recursive: true });
      const outPath = path.join(thumbsDir, `${base}.webp`);

      if (!force && fs.existsSync(outPath)) {
        console.log('skip (exists):', outPath);
        continue;
      }

      try {
        // Use sharp to resize and convert to webp.
        const s = sharp(img, { failOnError: false });
        const metadata = await s.metadata();
        // Only resize down; if image is smaller than width, still convert but do not upscale
        if (metadata.width && metadata.width > width) {
          await s
            .resize({ width, withoutEnlargement: true })
            .webp({ quality })
            .toFile(outPath);
        } else {
          await s.webp({ quality }).toFile(outPath);
        }
        console.log('wrote:', outPath);
      } catch (err) {
        console.error('error processing', img, err && err.message ? err.message : err);
      }
    }

    console.log('done.');
    console.log('Run `npm run thumb:album -- <album-folder>` to generate thumbs for another album.');
    console.log('Example: npm run thumb:album -- prj-1');
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    process.exitCode = 1;
  }
})();
