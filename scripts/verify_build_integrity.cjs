const fs = require('fs');
const path = require('path');
const assert = require('assert');

const distDir = path.resolve(process.cwd(), 'dist');
console.log('Verifying build integrity in:', distDir);

// 1. Check all required routes exist
const requiredFiles = [
  'index.html',
  'services/index.html',
  'portfolio/index.html',
  'portfolio/daily-roast/index.html',
  'portfolio/summit-learning/index.html',
  'portfolio/forma-interiors/index.html',
  'pricing/index.html',
  'about/index.html',
  'contact/index.html',
  'privacy/index.html',
  'terms/index.html',
  '404.html',
  'sitemap.xml',
  'robots.txt',
  'og-image.png',
  'favicon.svg',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'apple-touch-icon.png',
  'site.webmanifest'
];

for (const rel of requiredFiles) {
  const full = path.join(distDir, rel);
  assert.ok(fs.existsSync(full), `Missing expected build artifact: ${rel}`);
}
console.log(`✓ All ${requiredFiles.length} critical build files and routes exist.`);

// 2. Check font files exist in dist/fonts
const distFontsDir = path.join(distDir, 'fonts');
assert.ok(fs.existsSync(distFontsDir), 'dist/fonts directory exists');
const fontFiles = fs.readdirSync(distFontsDir);
assert.ok(fontFiles.length >= 8, `Found ${fontFiles.length} self-hosted woff2 font files.`);
console.log(`✓ Found ${fontFiles.length} self-hosted font files in dist/fonts.`);

// 3. Check dist/index.html asset links
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const scriptMatches = [...indexHtml.matchAll(/src="([^"]+\.js)"/g)];
const cssMatches = [...indexHtml.matchAll(/href="([^"]+\.css)"/g)];

for (const match of [...scriptMatches, ...cssMatches]) {
  const assetUrl = match[1];
  const localAssetPath = path.join(distDir, assetUrl.replace(/^\//, ''));
  assert.ok(fs.existsSync(localAssetPath), `Referenced asset does not exist: ${assetUrl}`);
}
console.log(`✓ All ${scriptMatches.length} JS and ${cssMatches.length} CSS references in index.html resolve to existing files.`);

// 4. Verify sitemap.xml validity
const sitemap = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf-8');
assert.ok(sitemap.includes('<urlset'), 'Sitemap has urlset');
assert.ok(sitemap.includes('https://webestly.com/services'), 'Sitemap has services');
assert.ok(sitemap.includes('https://webestly.com/pricing'), 'Sitemap has pricing');
assert.ok(!sitemap.includes('/404'), 'Sitemap excludes 404');
console.log('✓ sitemap.xml is valid and properly excludes 404.');

// 5. Verify robots.txt
const robots = fs.readFileSync(path.join(distDir, 'robots.txt'), 'utf-8');
assert.ok(robots.includes('User-agent: *'), 'robots.txt has user-agent');
assert.ok(robots.includes('Sitemap: https://webestly.com/sitemap.xml'), 'robots.txt points to sitemap');
console.log('✓ robots.txt correctly points to sitemap.');

console.log('ALL BUILD INTEGRITY CHECKS PASSED!');
