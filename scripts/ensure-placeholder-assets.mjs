/**
 * Creates minimal valid placeholder images so Vite imports resolve.
 * Replace files in src/assets with real images anytime.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// 1x1 JPEG (valid)
const jpgB64 =
  "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmZ/9k=";

// 1x1 PNG (valid)
const pngB64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

function writeIfMissing(relPath, b64, encoding = "base64") {
  const full = path.join(root, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  if (fs.existsSync(full)) return;
  fs.writeFileSync(full, Buffer.from(b64, encoding));
}

const jpgFiles = [
  "src/assets/ous.jpg",
  "src/assets/team.jpg",
  "src/assets/hero.jpg",
  "src/assets/service-web.jpg",
  "src/assets/service-mobile.jpg",
  "src/assets/service-uiux.jpg",
  "src/assets/service-marketing.jpg",
  "src/assets/service-ai.jpg",
  "src/assets/service-conseil.jpg",
];

for (const f of jpgFiles) writeIfMissing(f, jpgB64);
writeIfMissing("src/assets/logo.png", pngB64);
writeIfMissing("public/logo.png", pngB64);

console.log("Placeholder assets OK (skipped existing files).");
