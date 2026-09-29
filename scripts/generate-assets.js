import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  path.join(__dirname, '../public/assets'),
  path.join(__dirname, '../src/assets')
];

for (const d of dirs) {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
}

function generateEditorialSvg(title, subtitle, tag = "EDITORIAL MEMORY ARCHIVE", accent = '#FF4D00') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="100%" height="100%">
  <defs>
    <linearGradient id="darkBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="50%" stop-color="#0D0D0D" />
      <stop offset="100%" stop-color="#040404" />
    </linearGradient>
    <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#FFAE00" stop-opacity="0.05" />
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#181818" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="1200" height="900" fill="url(#darkBg)" />
  <rect width="1200" height="900" fill="url(#grid)" opacity="0.6" />
  
  <!-- Speed Streaks -->
  <path d="M -150 900 L 750 0 L 820 0 L -80 900 Z" fill="${accent}" opacity="0.09" />
  <path d="M 150 900 L 1000 0 L 1070 0 L 220 900 Z" fill="url(#orangeGlow)" opacity="0.25" />
  <circle cx="950" cy="280" r="280" fill="${accent}" opacity="0.07" filter="blur(80px)" />
  
  <!-- Editorial Corner Marks -->
  <line x1="60" y1="60" x2="130" y2="60" stroke="${accent}" stroke-width="2" />
  <line x1="60" y1="60" x2="60" y2="130" stroke="${accent}" stroke-width="2" />
  <line x1="1140" y1="840" x2="1070" y2="840" stroke="${accent}" stroke-width="2" />
  <line x1="1140" y1="840" x2="1140" y2="770" stroke="${accent}" stroke-width="2" />

  <!-- Coordinates & Meta -->
  <text x="60" y="855" font-family="'Space Grotesk', monospace" font-size="12" fill="#555" letter-spacing="3">
    11° 23' N • 77° 42' E • ARCHIVE RECORD
  </text>
  <text x="1140" y="80" font-family="'Space Grotesk', monospace" font-size="12" fill="#555" letter-spacing="3" text-anchor="end">
    SN • 2014 → 2026
  </text>

  <!-- Main Headline -->
  <text x="80" y="440" font-family="'Impact', 'Bebas Neue', 'Anton', sans-serif" font-size="68" font-weight="900" fill="#FFFFFF" letter-spacing="3">
    ${title.toUpperCase()}
  </text>
  <text x="80" y="500" font-family="'Inter', sans-serif" font-size="20" font-weight="600" fill="#999999" letter-spacing="2">
    ${subtitle.toUpperCase()}
  </text>
  <text x="80" y="760" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="${accent}" letter-spacing="5">
    ${tag.toUpperCase()}
  </text>
</svg>`;
}

const imagesToCreate = {
  'subhickshun-hero.jpg': ['FOR THE ATHLETE I REMEMBER', 'SUBHICKSHUN NAREN • 2014 — 2026', 'HERO PHOTOGRAPHY ARCHIVE'],
  'athlete-action-01.jpg': ['THE MOMENT YOU BECAME AN ATHLETE', 'SPEED • FOCUS • INTENSITY', 'ACTION ARCHIVE 01'],
  'subhickshun-featured.jpg': ['KEEP RUNNING', 'NEVER LOSE THE DREAM CHASER', 'FEATURED CINEMATIC MEDIA'],
  'memory-athlete.jpg': ['THE VERSION OF YOU I WILL ALWAYS REMEMBER', 'THE ATHLETE • DEDICATION • DISCIPLINE', 'HERO ATHLETE CARD ARCHIVE'],
  'final-memory.jpg': ['ALWAYS A PLACE IN MY MEMORIES', 'SUBHICKSHUN NAREN • MY BROTHER', 'FINAL DEDICATION ARCHIVE'],
  'memory-01.jpg': ['2014 • 4TH STANDARD', 'WHERE IT ALL STARTED', 'MEMORY ARCHIVE 01'],
  'memory-02.jpg': ['NEIGHBOURHOOD DAYS', 'FRIENDSHIP BEYOND THE DESK', 'MEMORY ARCHIVE 02'],
  'memory-03.jpg': ['11TH GRADE RECONNECT', 'CLASSMATES ONCE AGAIN', 'MEMORY ARCHIVE 03'],
  'memory-04.jpg': ['BUS RIDE MEMORIES', 'ORDINARY RIDES • LIFELONG LAUGHS', 'MEMORY ARCHIVE 04'],
  'memory-05.jpg': ['12TH GRADE BROTHERHOOD', 'TURNING INTO BEST FRIENDS', 'MEMORY ARCHIVE 05'],
  'memory-06.jpg': ['PODIUM VICTORY', 'GOLD MEDAL STANDARD', 'MEMORY ARCHIVE 06'],
  'memory-07.jpg': ['TRACKSIDE BROTHERHOOD', 'SHARED STRIDE & SWEAT', 'MEMORY ARCHIVE 07'],
  'memory-08.jpg': ['SUNSET COOLDOWN', 'AFTER THOUSANDS OF METERS', 'MEMORY ARCHIVE 08'],
  'memory-09.jpg': ['BATTLE SPIKES TIED', 'LOCKED IN BEFORE THE GUN', 'MEMORY ARCHIVE 09'],
  'memory-10.jpg': ['GENUINE LAUGHTER', 'THE BROTHER BEHIND THE ATHLETE', 'MEMORY ARCHIVE 10']
};

for (const [filename, [title, subtitle, tag]] of Object.entries(imagesToCreate)) {
  const svg = generateEditorialSvg(title, subtitle, tag);
  for (const d of dirs) {
    fs.writeFileSync(path.join(d, filename), svg);
  }
}

console.log('All editorial tribute placeholders created successfully!');
