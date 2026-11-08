import fs from 'node:fs';

const b64 = fs.readFileSync('public/images/logo.webp').toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <clipPath id="circleClip">
      <circle cx="50" cy="50" r="46" />
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="49" fill="#0B0F19" stroke="#8B5CF6" stroke-width="2.5" />
  <g clip-path="url(#circleClip)">
    <image href="data:image/webp;base64,${b64}" x="-10" y="-10" width="120" height="120" preserveAspectRatio="xMidYMid slice" />
  </g>
</svg>`;

fs.writeFileSync('public/favicon.svg', svg);
console.log('Created circular favicon.svg successfully');
