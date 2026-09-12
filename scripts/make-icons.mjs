// Generates favicon.ico, apple-touch-icon.png, icon.svg, and og.png from one SVG mark.
// Run: npm run icons
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const mark = (size, bg = '#6a00ff') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64" rx="14" fill="${bg}"/>
  <path d="M17 36v-6a15 15 0 0 1 30 0v6" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
  <rect x="13" y="34" width="9" height="14" rx="4" fill="#ff80a6"/>
  <rect x="42" y="34" width="9" height="14" rx="4" fill="#ff80a6"/>
</svg>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g1" cx="25%" cy="20%" r="60%"><stop offset="0" stop-color="#6a00ff" stop-opacity="0.55"/><stop offset="1" stop-color="#1c1b29" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="85%" cy="80%" r="50%"><stop offset="0" stop-color="#ff80a6" stop-opacity="0.35"/><stop offset="1" stop-color="#1c1b29" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#1c1b29"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <g transform="translate(90 130) scale(2.2)">
    <rect width="64" height="64" rx="14" fill="#6a00ff"/>
    <path d="M17 36v-6a15 15 0 0 1 30 0v6" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    <rect x="13" y="34" width="9" height="14" rx="4" fill="#ff80a6"/>
    <rect x="42" y="34" width="9" height="14" rx="4" fill="#ff80a6"/>
  </g>
  <text x="90" y="360" font-family="Sora, Inter, Arial, sans-serif" font-size="72" fill="#ffffff">Gulf Coast Silent Disco</text>
  <text x="90" y="430" font-family="Inter, Arial, sans-serif" font-size="34" fill="#b5b4cf">Headphone rentals + DJs · Mobile Bay area</text>
  <text x="90" y="530" font-family="Inter, Arial, sans-serif" font-size="30" fill="#8085ff">gulfcoastsilentdisco.com</text>
</svg>`;

writeFileSync('public/icon.svg', mark(64).trim());
await sharp(Buffer.from(mark(180))).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(og)).png().toFile('public/og.png');

// .ico: a 32px PNG wrapped in an ICO container (browsers accept PNG-in-ICO).
const png32 = await sharp(Buffer.from(mark(32))).png().toBuffer();
const header = Buffer.alloc(6 + 16);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt8(0, 8);
header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync('public/favicon.ico', Buffer.concat([header, png32]));
console.log('icons written');
