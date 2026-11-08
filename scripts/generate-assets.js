import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

// Minimal PNG encoder in pure Node.js
function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4);
  data.copy(buf, 8);
  const toCrc = Buffer.concat([Buffer.from(type), data]);
  buf.writeUInt32BE(crc32(toCrc), 8 + len);
  return buf;
}

function createPng(width, height, pixelFn) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8-bit depth
  ihdr.writeUInt8(6, 9); // RGBA
  ihdr.writeUInt8(0, 10); // compression
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Raw image data with filter byte 0 at start of each scanline
  const raw = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;
  for (let y = 0; y < height; y++) {
    raw.writeUInt8(0, offset++); // filter type 0 None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = pixelFn(x, y, width, height);
      raw.writeUInt8(r, offset++);
      raw.writeUInt8(g, offset++);
      raw.writeUInt8(b, offset++);
      raw.writeUInt8(a, offset++);
    }
  }

  const compressed = zlib.deflateSync(raw);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Ensure public directories
fs.mkdirSync('public/images', { recursive: true });
fs.mkdirSync('public/projects', { recursive: true });
fs.mkdirSync('public/favicon', { recursive: true });

// 1. Generate profile-dark.png (Dark aesthetic, glowing teal/emerald accents, stylish developer silhouette)
const profileDark = createPng(512, 512, (x, y, w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const dx = (x - cx) / cx;
  const dy = (y - cy) / cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Background gradient: #08090C to #161920
  let r = 8 + (x / w) * 14;
  let g = 9 + (y / h) * 16;
  let b = 12 + (dist * 20);

  // Subtle Emerald radial halo
  if (dist < 0.75) {
    const halo = (1 - dist / 0.75);
    r = Math.min(255, r + 0 * halo * 0.4);
    g = Math.min(255, g + 229 * halo * 0.4);
    b = Math.min(255, b + 168 * halo * 0.4);
  }

  // Developer Avatar Head & Body Silhouette
  // Head
  const hx = (x - cx) / 80;
  const hy = (y - (cy - 40)) / 95;
  const inHead = (hx * hx + hy * hy) <= 1;

  // Body / Shoulders
  const bx = (x - cx) / 160;
  const by = (y - (cy + 130)) / 100;
  const inBody = (bx * bx + by * by) <= 1 && y >= (cy + 40);

  // Glasses / Tech visor detail
  const gx = Math.abs(x - cx);
  const gy = Math.abs(y - (cy - 50));
  const inVisor = gy < 10 && gx < 50 && gx > 6;

  if (inVisor) {
    return [0, 229, 168, 255]; // Neon emerald glow
  }

  if (inHead || inBody) {
    // Stylish dark slate/obsidian outfit with subtle gradient
    const shadow = (y / h);
    return [22 + shadow * 15, 25 + shadow * 20, 32 + shadow * 30, 255];
  }

  return [Math.round(r), Math.round(g), Math.round(b), 255];
});
fs.writeFileSync('public/images/profile-dark.png', profileDark);
console.log('Created profile-dark.png');

// 2. Generate profile-light.png (Light aesthetic, clean studio lighting, teal/emerald accents)
const profileLight = createPng(512, 512, (x, y, w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const dx = (x - cx) / cx;
  const dy = (y - cy) / cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Clean studio background: #F8FAFC to #E2E8F0
  let r = 248 - (dist * 20);
  let g = 250 - (dist * 18);
  let b = 252 - (dist * 14);

  // Soft emerald halo
  if (dist < 0.75) {
    const halo = (1 - dist / 0.75);
    r = Math.min(255, r - 30 * halo * 0.3);
    g = Math.min(255, g + 30 * halo * 0.3);
    b = Math.min(255, b + 10 * halo * 0.3);
  }

  // Developer Silhouette
  const hx = (x - cx) / 80;
  const hy = (y - (cy - 40)) / 95;
  const inHead = (hx * hx + hy * hy) <= 1;

  const bx = (x - cx) / 160;
  const by = (y - (cy + 130)) / 100;
  const inBody = (bx * bx + by * by) <= 1 && y >= (cy + 40);

  // Glasses detail
  const gx = Math.abs(x - cx);
  const gy = Math.abs(y - (cy - 50));
  const inVisor = gy < 10 && gx < 50 && gx > 6;

  if (inVisor) {
    return [5, 150, 105, 255]; // Deep emerald accent
  }

  if (inHead || inBody) {
    // Light mode profile attire
    const val = 40 + Math.round((y / h) * 45);
    return [val, val + 10, val + 25, 255];
  }

  return [Math.round(r), Math.round(g), Math.round(b), 255];
});
fs.writeFileSync('public/images/profile-light.png', profileLight);
console.log('Created profile-light.png');

// 3. Generate Project Mockup Thumbnails
const projectConfigs = [
  { file: 'public/projects/desinio.png', primary: [0, 229, 168], accent: [97, 218, 251], title: 'POS & PRINT' },
  { file: 'public/projects/ricemill.png', primary: [245, 158, 11], accent: [16, 185, 129], title: 'RICE MILL' },
  { file: 'public/projects/barangay.png', primary: [59, 130, 246], accent: [0, 229, 168], title: 'BARANGAY' },
  { file: 'public/projects/nexushub.png', primary: [168, 85, 247], accent: [97, 218, 251], title: 'NEXUS HQ' },
];

for (const proj of projectConfigs) {
  const pPng = createPng(640, 360, (x, y, w, h) => {
    // Base dark canvas
    let r = 18;
    let g = 21;
    let b = 28;

    // Grid lines
    if (x % 32 === 0 || y % 32 === 0) {
      r += 8; g += 10; b += 14;
    }

    // Top window bar
    if (y < 40) {
      if (x > 20 && x < 60 && Math.abs(y - 20) < 6) return [239, 68, 68, 255];
      if (x > 70 && x < 110 && Math.abs(y - 20) < 6) return [245, 158, 11, 255];
      if (x > 120 && x < 160 && Math.abs(y - 20) < 6) return [16, 185, 129, 255];
      return [26, 31, 42, 255];
    }

    // Modern dashboard card blocks
    const inCard1 = x > 40 && x < 280 && y > 60 && y < 320;
    const inCard2 = x > 300 && x < 600 && y > 60 && y < 175;
    const inCard3 = x > 300 && x < 600 && y > 195 && y < 320;

    if (inCard1 || inCard2 || inCard3) {
      // Glow boundary
      if (x === 41 || x === 279 || x === 301 || x === 599 || y === 61 || y === 319 || y === 174 || y === 196) {
        return [...proj.primary, 255];
      }
      return [24, 28, 38, 255];
    }

    return [r, g, b, 255];
  });
  fs.writeFileSync(proj.file, pPng);
  console.log(`Created ${proj.file}`);
}
