import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMG_BASE = '/Users/kivent/Desktop/shared-horizon-website/public/images';

// Folders to process (as they exist on disk)
const FOLDERS = [
  'Das Boot', 'Details', 'Eventfotos', 'Gesamtansicht',
  'Kulinarisches', 'Production', 'Sport und Wasser', 'Stimmung',
];

function sanitizeName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/:/g, '-')
    .replace(/[\/\\\+\(\)]/g, '')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9_\-\.]/g, '')
    .replace(/_+/g, '_')
    .replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
}

function sanitizeFolderName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9_]/g, '');
}

const mapping = {}; // oldPath → newWebpPath (relative to /public)

for (const folder of FOLDERS) {
  const srcDir = path.join(IMG_BASE, folder);
  if (!fs.existsSync(srcDir)) { console.warn(`SKIP: ${folder} (not found)`); continue; }

  const newFolderName = sanitizeFolderName(folder);
  const destDir = path.join(IMG_BASE, newFolderName);
  if (srcDir !== destDir) fs.mkdirSync(destDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

  for (const file of files) {
    if (file === '0.jpg') { console.log(`  SKIP: ${folder}/${file} (unbekannt)`); continue; }

    const newFileName = sanitizeName(file);
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, newFileName);

    try {
      const meta = await sharp(srcFile).metadata();
      const resize = meta.width > 2400 ? { width: 2400 } : undefined;

      await sharp(srcFile)
        .resize(resize)
        .webp({ quality: 85 })
        .toFile(destFile);

      const stat = fs.statSync(destFile);
      const kb = Math.round(stat.size / 1024);
      console.log(`  ✓ ${folder}/${file} → ${newFolderName}/${newFileName} (${kb} KB)`);

      // Store mapping: old public path → new public path
      const oldPublicPath = `/images/${folder}/${file}`;
      const newPublicPath = `/images/${newFolderName}/${newFileName}`;
      mapping[oldPublicPath] = newPublicPath;

      // Remove original if it differs from dest
      if (srcFile !== destFile) fs.unlinkSync(srcFile);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  // Remove old folder if it was renamed and is now empty
  if (srcDir !== destDir) {
    try { fs.rmdirSync(srcDir); } catch {}
  }
}

// Write mapping for next step
fs.writeFileSync('/tmp/image-mapping.json', JSON.stringify(mapping, null, 2));
console.log('\nMapping saved to /tmp/image-mapping.json');
console.log(`Total: ${Object.keys(mapping).length} images converted`);
