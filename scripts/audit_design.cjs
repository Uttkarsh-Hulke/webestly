const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('src');
const allFiles = [];

function getFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== 'dist') getFiles(full);
    } else if (/\.(jsx?|tsx?|css|html)$/.test(entry.name)) {
      allFiles.push(full);
    }
  }
}
getFiles(srcDir);
allFiles.push(path.resolve('index.html'));
allFiles.push(path.resolve('tailwind.config.js'));

// 1. Hex Colors & Locations
const hexColors = {};
const hexRegex = /#(?:[0-9a-fA-F]{3,4}){1,2}\b/g;

// 2. Font Families & Weights
const fontFamilies = {};
const fontWeights = {};

// 3. Spacing (Paddings, Margins, Gaps)
const spacingValues = {};

// 4. Border Radii
const radiiValues = {};

// 5. Buttons, Inputs, Cards
const buttonVariants = {};
const inputVariants = {};
const cardVariants = {};

// Tailwind spacing map to px and rem
const tailwindSpacingMap = {
  '0': '0px (0rem)',
  '0.5': '2px (0.125rem)',
  '1': '4px (0.25rem)',
  '1.5': '6px (0.375rem)',
  '2': '8px (0.5rem)',
  '2.5': '10px (0.625rem)',
  '3': '12px (0.75rem)',
  '3.5': '14px (0.875rem)',
  '4': '16px (1rem)',
  '5': '20px (1.25rem)',
  '6': '24px (1.5rem)',
  '7': '28px (1.75rem)',
  '8': '32px (2rem)',
  '9': '36px (2.25rem)',
  '10': '40px (2.5rem)',
  '11': '44px (2.75rem)',
  '12': '48px (3rem)',
  '14': '56px (3.5rem)',
  '16': '64px (4rem)',
  '20': '80px (5rem)',
  '24': '96px (6rem)',
  '28': '112px (7rem)',
  '32': '128px (8rem)',
};

for (const file of allFiles) {
  const rel = path.relative(process.cwd(), file);
  const content = fs.readFileSync(file, 'utf-8');

  // Hex colors
  const matches = content.match(hexRegex) || [];
  for (const h of matches) {
    const hex = h.toUpperCase();
    if (!hexColors[hex]) hexColors[hex] = [];
    if (!hexColors[hex].includes(rel)) hexColors[hex].push(rel);
  }

  // Font family
  const ffMatches = content.match(/font-(sans|heading|mono)|font-family:[^;]+|fontFamily:[^}]+/g) || [];
  for (const f of ffMatches) {
    const key = f.replace(/\s+/g, ' ').trim();
    if (!fontFamilies[key]) fontFamilies[key] = 0;
    fontFamilies[key]++;
  }

  // Font weights
  const fwMatches = content.match(/\bfont-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)\b|font-weight:\s*(\d+)/g) || [];
  for (const w of fwMatches) {
    const key = w.trim();
    if (!fontWeights[key]) fontWeights[key] = 0;
    fontWeights[key]++;
  }

  // Spacing (padding, margin, gap)
  const spMatches = content.match(/\b(?:p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-x|space-y)-(?:\[?[a-zA-Z0-9._-]+\]?)\b/g) || [];
  for (const s of spMatches) {
    // extract value part after prefix
    const parts = s.split('-');
    const val = parts.slice(1).join('-');
    if (!spacingValues[val]) spacingValues[val] = 0;
    spacingValues[val]++;
  }

  // Radii
  const radMatches = content.match(/\brounded(?:-[a-zA-Z0-9]+)?\b/g) || [];
  for (const r of radMatches) {
    if (!radiiValues[r]) radiiValues[r] = 0;
    radiiValues[r]++;
  }

  // Button components / usages
  const btnMatches = content.match(/<Button[^>]*>/g) || [];
  for (const b of btnMatches) {
    const variant = (b.match(/variant=[\"\']([^\"\']+)[\"\']/) || ['', 'primary'])[1];
    const size = (b.match(/size=[\"\']([^\"\']+)[\"\']/) || ['', 'md'])[1];
    const key = `Button (variant: ${variant}, size: ${size})`;
    buttonVariants[key] = (buttonVariants[key] || 0) + 1;
  }
}

// Group hex colors by hue
function getHueGroup(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);

  // Greyscale / Monochromatic check
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  if (diff < 15) {
    if (max > 240) return 'White / Off-White';
    if (max < 40) return 'Black / Dark Slate';
    return 'Gray / Slate Neutral';
  }

  // Compute Hue
  let h = 0;
  if (max === r) h = ((g - b) / diff) % 6;
  else if (max === g) h = (b - r) / diff + 2;
  else h = (r - g) / diff + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;

  if (h >= 10 && h <= 45) return 'Orange / Amber';
  if (h > 45 && h <= 70) return 'Gold / Yellow';
  if (h > 70 && h <= 165) return 'Green / Teal';
  if (h > 165 && h <= 260) return 'Blue / Navy';
  if (h > 260 && h <= 340) return 'Purple / Indigo / Violet';
  return 'Red / Rose';
}

const colorsByHue = {};
for (const [hex, files] of Object.entries(hexColors)) {
  const group = getHueGroup(hex);
  if (!colorsByHue[group]) colorsByHue[group] = [];
  colorsByHue[group].push({ hex, count: files.length, sampleFiles: files.slice(0, 3) });
}

console.log(JSON.stringify({
  colorsByHue,
  fontFamilies,
  fontWeights,
  spacingValues,
  radiiValues,
  buttonVariants,
}, null, 2));
