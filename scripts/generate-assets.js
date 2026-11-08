import fs from 'node:fs';
import zlib from 'node:zlib';

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
  
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);
  const ihdrChunk = makeChunk('IHDR', ihdr);

  const raw = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;
  for (let y = 0; y < height; y++) {
    raw.writeUInt8(0, offset++);
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

fs.mkdirSync('public/images', { recursive: true });
fs.mkdirSync('public/projects', { recursive: true });

// 1. profile-dark.png (Adelina deep black background with glowing vibrant violet/purple halo & stylish silhouette)
const profileDark = createPng(512, 512, (x, y, w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const dx = (x - cx) / cx;
  const dy = (y - cy) / cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Background: #07070B to #141322
  let r = 7 + (x / w) * 13;
  let g = 7 + (y / h) * 12;
  let b = 11 + (dist * 25);

  // Vibrant Violet/Purple radial halo
  if (dist < 0.8) {
    const halo = (1 - dist / 0.8);
    r = Math.min(255, r + 139 * halo * 0.55);
    g = Math.min(255, g + 92 * halo * 0.45);
    b = Math.min(255, b + 246 * halo * 0.65);
  }

  // Developer Avatar Head & Body Silhouette
  const hx = (x - cx) / 80;
  const hy = (y - (cy - 40)) / 95;
  const inHead = (hx * hx + hy * hy) <= 1;

  const bx = (x - cx) / 160;
  const by = (y - (cy + 130)) / 100;
  const inBody = (bx * bx + by * by) <= 1 && y >= (cy + 40);

  // Tech spectacles / glow accent
  const gx = Math.abs(x - cx);
  const gy = Math.abs(y - (cy - 50));
  const inVisor = gy < 10 && gx < 50 && gx > 6;

  if (inVisor) {
    return [192, 132, 252, 255]; // Neon lilac glow
  }

  if (inHead || inBody) {
    const shadow = (y / h);
    return [20 + shadow * 20, 18 + shadow * 18, 36 + shadow * 35, 255];
  }

  return [Math.round(r), Math.round(g), Math.round(b), 255];
});
fs.writeFileSync('public/images/profile-dark.png', profileDark);
console.log('Created Adelina-styled profile-dark.png');

// 2. profile-light.png (Clean ivory/studio with vibrant violet/magenta rim highlights)
const profileLight = createPng(512, 512, (x, y, w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const dx = (x - cx) / cx;
  const dy = (y - cy) / cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Background: #FAFAFD to #ECEAFB
  let r = 250 - (dist * 14);
  let g = 250 - (dist * 16);
  let b = 253 - (dist * 6);

  // Soft lilac/purple halo
  if (dist < 0.8) {
    const halo = (1 - dist / 0.8);
    r = Math.min(255, r - 30 * halo * 0.25);
    g = Math.min(255, g - 40 * halo * 0.25);
    b = Math.min(255, b + 20 * halo * 0.25);
  }

  const hx = (x - cx) / 80;
  const hy = (y - (cy - 40)) / 95;
  const inHead = (hx * hx + hy * hy) <= 1;

  const bx = (x - cx) / 160;
  const by = (y - (cy + 130)) / 100;
  const inBody = (bx * bx + by * by) <= 1 && y >= (cy + 40);

  const gx = Math.abs(x - cx);
  const gy = Math.abs(y - (cy - 50));
  const inVisor = gy < 10 && gx < 50 && gx > 6;

  if (inVisor) {
    return [124, 58, 237, 255]; // Deep violet accent
  }

  if (inHead || inBody) {
    const val = 30 + Math.round((y / h) * 40);
    return [val + 5, val, val + 25, 255];
  }

  return [Math.round(r), Math.round(g), Math.round(b), 255];
});
fs.writeFileSync('public/images/profile-light.png', profileLight);
console.log('Created Adelina-styled profile-light.png');

// 3. Project Mockups with Adelina vibrant purple and neon accents
const projectConfigs = [
  { file: 'public/projects/desinio.png', primary: [139, 92, 246], accent: [236, 72, 153], title: 'DESINIO KOLEKSYON' },
  { file: 'public/projects/ricemill.png', primary: [56, 189, 248], accent: [139, 92, 246], title: 'RICE MILL' },
  { file: 'public/projects/barangay.png', primary: [192, 132, 252], accent: [56, 189, 248], title: 'BARANGAY PORTAL' },
  { file: 'public/projects/nexushub.png', primary: [236, 72, 153], accent: [124, 58, 237], title: 'NEXUS HQ' },
];

for (const proj of projectConfigs) {
  const pPng = createPng(640, 360, (x, y, w, h) => {
    let r = 14;
    let g = 14;
    let b = 24;

    if (x % 32 === 0 || y % 32 === 0) {
      r += 10; g += 10; b += 18;
    }

    // Top window bar
    if (y < 42) {
      if (x > 20 && x < 40 && Math.abs(y - 21) < 6) return [239, 68, 68, 255];
      if (x > 50 && x < 70 && Math.abs(y - 21) < 6) return [245, 158, 11, 255];
      if (x > 80 && x < 100 && Math.abs(y - 21) < 6) return [16, 185, 129, 255];
      return [20, 20, 34, 255];
    }

    const inCard1 = x > 35 && x < 265 && y > 60 && y < 325;
    const inCard2 = x > 285 && x < 605 && y > 60 && y < 180;
    const inCard3 = x > 285 && x < 605 && y > 200 && y < 325;

    if (inCard1 || inCard2 || inCard3) {
      if (x === 36 || x === 264 || x === 286 || x === 604 || y === 61 || y === 324 || y === 179 || y === 201) {
        return [...proj.primary, 255];
      }
      return [18, 18, 30, 255];
    }

    return [r, g, b, 255];
  });
  fs.writeFileSync(proj.file, pPng);
  console.log(`Updated ${proj.file}`);
}
