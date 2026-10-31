const fs = require('fs');
const path = require('path');
const https = require('https');

const fontsDir = path.resolve(process.cwd(), 'public', 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

function fetchText(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchText(res.headers.location, headers).then(resolve, reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBinary(res.headers.location, dest).then(resolve, reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function main() {
  const cssUrl = 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
  console.log('Fetching Google Fonts stylesheet...');
  
  // WOFF2 User-Agent
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  const css = await fetchText(cssUrl, { 'User-Agent': userAgent });

  // Parse font-face rules
  const fontFaceRegex = /@font-face\s*\{([^}]+)\}/g;
  let match;
  let downloadedCount = 0;
  let localCss = '/* Self-hosted fonts for WebEstly (WCAG & Performance optimized) */\n\n';

  while ((match = fontFaceRegex.exec(css)) !== null) {
    const block = match[1];
    const familyMatch = block.match(/font-family:\s*['"]?([^'";]+)['"]?/i);
    const styleMatch = block.match(/font-style:\s*([^;]+);/i);
    const weightMatch = block.match(/font-weight:\s*([^;]+);/i);
    const urlMatch = block.match(/src:\s*url\((https:[^)]+\.woff2)\)/i);
    const unicodeMatch = block.match(/unicode-range:\s*([^;]+);/i);

    if (familyMatch && weightMatch && urlMatch) {
      const family = familyMatch[1].trim();
      const style = styleMatch ? styleMatch[1].trim() : 'normal';
      const weight = weightMatch[1].trim();
      const woff2Url = urlMatch[1].trim();
      const unicodeRange = unicodeMatch ? unicodeMatch[1].trim() : null;

      const safeFamily = family.replace(/\s+/g, '-').toLowerCase();
      const fileName = `${safeFamily}-${weight}-${style}-${downloadedCount + 1}.woff2`;
      const filePath = path.join(fontsDir, fileName);

      console.log(`Downloading ${family} (${weight}) -> ${fileName}...`);
      await downloadBinary(woff2Url, filePath);
      downloadedCount++;

      localCss += `@font-face {\n`;
      localCss += `  font-family: '${family}';\n`;
      localCss += `  font-style: ${style};\n`;
      localCss += `  font-weight: ${weight};\n`;
      localCss += `  font-display: swap;\n`;
      localCss += `  src: url('/fonts/${fileName}') format('woff2');\n`;
      if (unicodeRange) {
        localCss += `  unicode-range: ${unicodeRange};\n`;
      }
      localCss += `}\n\n`;
    }
  }

  const cssOut = path.resolve(process.cwd(), 'src', 'fonts.css');
  fs.writeFileSync(cssOut, localCss.trim() + '\n', 'utf-8');
  console.log(`Successfully downloaded ${downloadedCount} font files and generated ${cssOut}`);
}

main().catch(err => {
  console.error('Font download failed:', err.message);
  process.exit(1);
});
