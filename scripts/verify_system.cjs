const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (/\.(jsx?)$/.test(file)) results.push(file);
  });
  return results;
}

const files = walk('src');

// 1. Button variants: only primary, secondary, ghost
const buttonHits = [];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    const match = l.match(/<Button[^>]*variant=["']([^"']+)["']/);
    if (match) {
      const v = match[1];
      if (!['primary', 'secondary', 'ghost'].includes(v)) {
        buttonHits.push({ file: f, line: idx + 1, variant: v, text: l.trim() });
      }
    }
  });
});

console.log('--- NON-TOKEN BUTTON VARIANTS ---');
console.log('Count:', buttonHits.length);
buttonHits.forEach(h => console.log(`${h.file}:${h.line} [${h.variant}] ${h.text}`));

// 2. Disallowed font weights:
// Per Part 4: Headings Manrope 700-800 (font-bold, font-extrabold on font-heading), Body Plus Jakarta Sans 400-500.
// Disallowed: 300 (font-light), font-black, or non-heading bold outside allowed scale.
const fontHits = [];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    // Flag font-thin, font-light, font-black anywhere
    if (/\b(font-thin|font-light|font-black)\b/.test(l)) {
      fontHits.push({ file: f, line: idx + 1, text: l.trim() });
    }
  });
});

console.log('\n--- DISALLOWED FONT WEIGHTS (outside hero) ---');
console.log('Count:', fontHits.length);
fontHits.forEach(h => console.log(`${h.file}:${h.line} ${h.text}`));

// 3. Spacing outside allowed scale:
// Allowed: 0, 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px)
// Disallowed: 0.5, 1.5, 2.5, 3.5, 5, 7, 9, 10, 11, 14, 20, 24, 28, 32, etc. (note: py-10 is mobile 40px which is approved rhythm)
const disallowedSpacingHits = [];
const disallowedPatterns = /\b(p|m|px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr|gap|gap-x|gap-y)-(0\.5|1\.5|2\.5|3\.5|5|7|9|11|14|20|24|28)\b/g;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    // ignore comments
    if (l.trim().startsWith('//') || l.trim().startsWith('*')) return;
    const matches = l.match(disallowedPatterns);
    if (matches) {
      disallowedSpacingHits.push({ file: f, line: idx + 1, matches, text: l.trim() });
    }
  });
});

console.log('\n--- DISALLOWED SPACING SCALE VALUES ---');
console.log('Count:', disallowedSpacingHits.length);
disallowedSpacingHits.forEach(h => console.log(`${h.file}:${h.line} [${h.matches.join(', ')}] ${h.text}`));

// 4. Disallowed radii: rounded-xl, rounded-2xl, rounded-3xl
const radiusHits = [];
const radiusPatterns = /\b(rounded-xl|rounded-2xl|rounded-3xl)\b/g;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    const matches = l.match(radiusPatterns);
    if (matches) {
      radiusHits.push({ file: f, line: idx + 1, matches, text: l.trim() });
    }
  });
});

console.log('\n--- DISALLOWED RADII (max 12px) ---');
console.log('Count:', radiusHits.length);
radiusHits.forEach(h => console.log(`${h.file}:${h.line} [${h.matches.join(', ')}] ${h.text}`));
