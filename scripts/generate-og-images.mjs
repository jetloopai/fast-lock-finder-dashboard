import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');

const images = [
  { svg: 'og-fastlockfinder.svg', png: 'og-fastlockfinder.png' },
  { svg: 'og-city-locksmith.svg', png: 'og-city-locksmith.png' },
];

for (const { svg, png } of images) {
  const svgData = readFileSync(resolve(publicDir, svg));
  const resvg = new Resvg(svgData, {
    fitTo: { mode: 'width', value: 1200 },
    font: { loadSystemFonts: true },
  });
  const pngData = resvg.render().asPng();
  writeFileSync(resolve(publicDir, png), pngData);
  console.log(`✓ Generated ${png} (${Math.round(pngData.length / 1024)}kb)`);
}
