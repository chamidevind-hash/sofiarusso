import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images/blog");

const MIN_SIZE = 450 * 1024;
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 2000;

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (entry.name.toLowerCase().endsWith(".webp")) {
      files.push(fullPath);
    }
  }

  return files;
}

function formatSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

const files = await walk(ROOT);

let totalBefore = 0;
let totalAfter = 0;
let changed = 0;
let skipped = 0;

for (const file of files) {
  try {
    const beforeStat = await fs.stat(file);
    totalBefore += beforeStat.size;

    if (beforeStat.size < MIN_SIZE) {
      totalAfter += beforeStat.size;
      continue;
    }

    // Read the whole source into memory first.
    // This avoids Windows locking the source while we overwrite it.
    const input = await fs.readFile(file);

    const output = await sharp(input)
      .rotate()
      .resize({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
        effort: 6,
        smartSubsample: true,
      })
      .toBuffer();

    if (output.length < beforeStat.size * 0.95) {
      await fs.writeFile(file, output);

      totalAfter += output.length;
      changed++;

      console.log(
        `${path.relative(process.cwd(), file)}: ` +
          `${formatSize(beforeStat.size)} -> ${formatSize(output.length)}`
      );
    } else {
      totalAfter += beforeStat.size;
    }
  } catch (error) {
    skipped++;

    try {
      const stat = await fs.stat(file);
      totalAfter += stat.size;
    } catch {}

    console.error(
      `SKIPPED ${path.relative(process.cwd(), file)}: ${error.code ?? error.message}`
    );
  }
}

console.log("");
console.log(`Optimized files: ${changed}`);
console.log(`Skipped files:   ${skipped}`);
console.log(`Before:          ${formatSize(totalBefore)}`);
console.log(`After:           ${formatSize(totalAfter)}`);
console.log(`Saved:           ${formatSize(totalBefore - totalAfter)}`);