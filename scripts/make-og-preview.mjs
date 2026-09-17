import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'public', 'og-preview.png');

const width = 1200;
const height = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF8F0"/>
      <stop offset="100%" stop-color="#FFE4E1"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="60" y="60" width="1080" height="510" rx="28" fill="none" stroke="#D81B60" stroke-width="6"/>
  <text x="50%" y="180" text-anchor="middle" font-family="Georgia, serif" font-size="56" fill="#880E4F" font-weight="600">A little wish made with love</text>
  <text x="50%" y="330" text-anchor="middle" font-family="Georgia, serif" font-size="110" fill="#D81B60" font-weight="700">Happy Birthday</text>
  <text x="50%" y="430" text-anchor="middle" font-family="Georgia, serif" font-size="72" fill="#880E4F" font-weight="500">Viba 🎀</text>
  <text x="50%" y="510" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#A64D79">Tap to open your surprise ✨</text>
</svg>
`;

import sharp from 'sharp';

await sharp(Buffer.from(svg))
  .resize(width, height)
  .png()
  .toFile(outPath);

console.log('Generated public/og-preview.png');
