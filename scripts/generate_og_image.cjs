const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 table for PNG chunk checksums
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c >>> 0;
}

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(8 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crc = crc32(buf.subarray(4, 8 + len));
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

const WIDTH = 1200;
const HEIGHT = 630;

// Pixel buffer: 1200 x 630 RGB (3 bytes per pixel)
const pixels = Buffer.alloc(WIDTH * HEIGHT * 3);

// Colors in RGB:
// Navy: #10243A -> (16, 36, 58)
// Darker Navy: #0A1726 -> (10, 23, 38)
// Orange: #FF6500 -> (255, 101, 0)
// Gold: #FFB000 -> (255, 176, 0)
// White: #FFFFFF -> (255, 255, 255)
// Slate: #334155 -> (51, 65, 85)
// Card Bg: #162C46 -> (22, 44, 70)

function setPixel(x, y, r, g, b) {
  if (x < 0 || x >= WIDTH || y < 0 || y >= HEIGHT) return;
  const idx = (y * WIDTH + x) * 3;
  pixels[idx] = r;
  pixels[idx + 1] = g;
  pixels[idx + 2] = b;
}

function fillRect(x0, y0, w, h, r, g, b) {
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) {
      setPixel(x, y, r, g, b);
    }
  }
}

// 1. Fill base background with elegant dark navy gradient
for (let y = 0; y < HEIGHT; y++) {
  const t = y / HEIGHT;
  const r = Math.round(16 * (1 - t * 0.3));
  const g = Math.round(36 * (1 - t * 0.2));
  const b = Math.round(58 * (1 - t * 0.2));
  for (let x = 0; x < WIDTH; x++) {
    setPixel(x, y, r, g, b);
  }
}

// 2. Decorative brand accent top border (4px orange + gold)
fillRect(0, 0, 750, 6, 255, 101, 0); // Orange
fillRect(750, 0, 450, 6, 255, 176, 0); // Gold

// 3. Right-side decorative modern tech composition / card
fillRect(760, 90, 360, 450, 22, 44, 70); // Main card container
// Card border
for (let x = 760; x < 1120; x++) {
  setPixel(x, 90, 51, 65, 85);
  setPixel(x, 539, 51, 65, 85);
}
for (let y = 90; y < 540; y++) {
  setPixel(760, y, 51, 65, 85);
  setPixel(1119, y, 51, 65, 85);
}

// Card inner header mockup bar
fillRect(780, 120, 320, 40, 16, 36, 58);
fillRect(795, 135, 10, 10, 255, 101, 0); // Dot 1
fillRect(815, 135, 10, 10, 255, 176, 0); // Dot 2
fillRect(835, 135, 10, 10, 16, 185, 129); // Dot 3

// Card UI blocks inside mockup
fillRect(780, 180, 320, 120, 26, 52, 82); // Hero preview block inside card
fillRect(800, 210, 180, 18, 255, 101, 0); // Headline bar
fillRect(800, 240, 240, 10, 148, 163, 184); // Text line
fillRect(800, 260, 140, 10, 148, 163, 184); // Text line

// 3 feature pills inside card
fillRect(780, 320, 320, 50, 20, 40, 64);
fillRect(800, 335, 120, 18, 255, 176, 0);
fillRect(780, 385, 320, 50, 20, 40, 64);
fillRect(800, 400, 140, 18, 255, 101, 0);
fillRect(780, 450, 320, 60, 20, 40, 64);
fillRect(800, 470, 160, 18, 16, 185, 129);

// 4. Subtle brand badge box on left side
fillRect(90, 110, 260, 38, 255, 101, 0); // Brand accent badge

// 5. Left side logo mark square (48x48 rounded representation)
fillRect(90, 190, 52, 52, 255, 101, 0);
// Cut inner notch to resemble WebEstly 'W' geometric folding
fillRect(106, 190, 20, 32, 16, 36, 58);

// 6. Draw scanlines for PNG encoder
// Each row starts with filter byte 0x00
const rawData = Buffer.alloc(HEIGHT * (1 + WIDTH * 3));
for (let y = 0; y < HEIGHT; y++) {
  const rowStart = y * (1 + WIDTH * 3);
  rawData[rowStart] = 0; // Filter: None
  pixels.copy(rawData, rowStart + 1, y * WIDTH * 3, (y + 1) * WIDTH * 3);
}

// Compress scanlines with Deflate
const compressed = zlib.deflateSync(rawData, { level: 9 });

// Assemble PNG file
const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

// IHDR chunk
const ihdrData = Buffer.alloc(13);
ihdrData.writeUInt32BE(WIDTH, 0);
ihdrData.writeUInt32BE(HEIGHT, 4);
ihdrData[8] = 8; // 8 bits per channel
ihdrData[9] = 2; // RGB (color type 2)
ihdrData[10] = 0; // Compression Deflate
ihdrData[11] = 0; // Filter 0
ihdrData[12] = 0; // Interlace none
const ihdr = makeChunk('IHDR', ihdrData);

// IDAT chunk
const idat = makeChunk('IDAT', compressed);

// IEND chunk
const iend = makeChunk('IEND', Buffer.alloc(0));

const png = Buffer.concat([signature, ihdr, idat, iend]);

const targetDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
const outPath = path.join(targetDir, 'og-image.png');
fs.writeFileSync(outPath, png);
console.log(`Generated real 1200x630 PNG: ${outPath} (${png.length} bytes)`);
