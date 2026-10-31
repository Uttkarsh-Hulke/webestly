const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 table
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

function generatePng(size) {
  // RGBA buffer (4 bytes per pixel)
  const pixels = Buffer.alloc(size * size * 4);

  function setPixel(x, y, r, g, b, a = 255) {
    if (x < 0 || x >= size || y < 0 || y >= size) return;
    const idx = (y * size + x) * 4;
    pixels[idx] = r;
    pixels[idx + 1] = g;
    pixels[idx + 2] = b;
    pixels[idx + 3] = a;
  }

  // Rounded rectangle background (#10243A)
  const radius = Math.round(size * 0.18);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Check rounded corner distance
      let inside = true;
      if (x < radius && y < radius) {
        inside = (x - radius) ** 2 + (y - radius) ** 2 <= radius ** 2;
      } else if (x >= size - radius && y < radius) {
        inside = (x - (size - radius - 1)) ** 2 + (y - radius) ** 2 <= radius ** 2;
      } else if (x < radius && y >= size - radius) {
        inside = (x - radius) ** 2 + (y - (size - radius - 1)) ** 2 <= radius ** 2;
      } else if (x >= size - radius && y >= size - radius) {
        inside = (x - (size - radius - 1)) ** 2 + (y - (size - radius - 1)) ** 2 <= radius ** 2;
      }

      if (inside) {
        setPixel(x, y, 16, 36, 58, 255); // #10243A
      } else {
        setPixel(x, y, 0, 0, 0, 0); // Transparent
      }
    }
  }

  // Helper to draw filled triangle / polygon
  // For small favicons and apple touch icon, draw the stylized 'W' strokes
  const s = size / 100; // scaling factor
  
  // Left vertical-slant arm (White: #FFFFFF)
  for (let y = Math.round(24 * s); y <= Math.round(76 * s); y++) {
    const t = (y - 24 * s) / (52 * s);
    const leftX = Math.round((20 + 12 * t) * s);
    const width = Math.round(14 * s);
    for (let x = leftX; x < leftX + width; x++) {
      setPixel(x, y, 255, 255, 255, 255);
    }
  }

  // Left center ascending arm (White: #FFFFFF)
  for (let y = Math.round(24 * s); y <= Math.round(76 * s); y++) {
    const t = (y - 24 * s) / (52 * s);
    const leftX = Math.round((46 - 14 * t) * s);
    const width = Math.round(14 * s);
    for (let x = leftX; x < leftX + width; x++) {
      setPixel(x, y, 255, 255, 255, 255);
    }
  }

  // Right center descending arm (Orange: #FF6500)
  for (let y = Math.round(24 * s); y <= Math.round(76 * s); y++) {
    const t = (y - 24 * s) / (52 * s);
    const leftX = Math.round((46 + 18 * t) * s);
    const width = Math.round(14 * s);
    for (let x = leftX; x < leftX + width; x++) {
      setPixel(x, y, 255, 101, 0, 255);
    }
  }

  // Right vertical-slant ascending arm (Gold accent: #FFB000)
  for (let y = Math.round(24 * s); y <= Math.round(76 * s); y++) {
    const t = (y - 24 * s) / (52 * s);
    const leftX = Math.round((80 - 16 * t) * s);
    const width = Math.round(14 * s);
    for (let x = leftX; x < leftX + width; x++) {
      if (y < 50 * s) {
        setPixel(x, y, 255, 176, 0, 255); // Top accent gold
      } else {
        setPixel(x, y, 255, 101, 0, 255); // Lower stroke orange
      }
    }
  }

  // Format PNG
  const rawData = Buffer.alloc(size * (1 + size * 4));
  for (let y = 0; y < size; y++) {
    const rowStart = y * (1 + size * 4);
    rawData[rowStart] = 0; // Filter: None
    pixels.copy(rawData, rowStart + 1, y * size * 4, (y + 1) * size * 4);
  }

  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0);
  ihdrData.writeUInt32BE(size, 4);
  ihdrData[8] = 8; // 8 bit depth
  ihdrData[9] = 6; // RGBA (color type 6)
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdr = makeChunk('IHDR', ihdrData);
  const idat = makeChunk('IDAT', compressed);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

const publicDir = path.resolve(process.cwd(), 'public');

const targets = [
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-16x16.png', size: 16 }
];

targets.forEach(({ file, size }) => {
  const buf = generatePng(size);
  const filePath = path.join(publicDir, file);
  fs.writeFileSync(filePath, buf);
  console.log(`✓ Generated ${file} (${size}x${size}, ${buf.length} bytes)`);
});
