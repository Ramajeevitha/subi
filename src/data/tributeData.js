/**
 * TRIBUTE DATA - SUBHICKSHUN NAREN BIRTHDAY TRIBUTE
 * ============================================================================
 * An emotional, cinematic documentary tribute celebrating the journey from 4th
 * standard classmates (2014) to brothers (2026 → FOREVER).
 * ============================================================================
 */

import portImg from '../assets/port.jpg';
import firstImg from '../assets/first.jpeg';
import disImg from '../assets/dis.jpeg';
import comImg from '../assets/com.jpg';
import priceImg from '../assets/price.jpg';

export const tributeData = {
  recipient: {
    fullName: "Subhickshun Naren",
    firstName: "Subhickshun",
    initials: "SN",
    title: "More Than A Friend • My Brother",
    tagline: "Classmate. Best Friend. Athlete. Non-Blood Brother."
  },

  navigation: [
    { name: "THE ATHLETE", href: "#hero" },
    { name: "BROTHERHOOD", href: "#more-than-a-friend" },
    { name: "OUR JOURNEY", href: "#our-journey" },
    { name: "ATHLETIC MEMORIES", href: "#memories-archive" },
    { name: "LETTER", href: "#letter" }
  ],

  hero: {
    eyebrow: "A BIRTHDAY TRIBUTE",
    headingLine1: "FOR THE",
    headingLine2: "ATHLETE",
    headingLine3: "I'LL ALWAYS",
    headingLine4: "REMEMBER.",
    nameTag: "SUBHICKSHUN NAREN",
    quote: "Some people become memories. Some memories become inspiration.",
    scrollPrompt: "SCROLL TO EXPLORE",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Subhickshun Naren in athletic focus"
  },

  intro: {
    numberWatermark: "01",
    label: "01 / A MEMORY",
    headlineLine1: "MORE THAN",
    headlineLine2: "AN ATHLETE.",
    statement1: "Maybe this is just a website to everyone else.",
    statement2: "But to me, it's a memory.",
    paragraph: "I wanted to create something that would remind you of the person you were, the athlete you became, and the inspiration you unknowingly gave me.",
    image: portImg,
    imageAlt: "Subhickshun Naren portrait - More Than An Athlete"
  },

  // "MORE THAN A FRIEND" Section
  moreThanAFriend: {
    numberWatermark: "02",
    label: "02 / BROTHERHOOD",
    headingLine1: "YOU ARE",
    headingLine2: "MORE THAN",
    headingLine3: "A FRIEND.",
    revealStatement: "YOU ARE MY NON-BLOOD BROTHER.",
    paragraphLine1: "Some relationships are created by blood.",
    paragraphLine2: "Ours was created by time,\nmemories,\nrandom moments,\nfights,\nlaughs,\nand a thousand little things\nthat somehow became a lifetime."
  },

  // "FROM CLASSMATES TO BROTHERS" (2014 → 2026 → FOREVER)
  brotherhoodJourney: {
    numberWatermark: "03",
    label: "03 / OUR TIMELINE",
    heading: "FROM CLASSMATES TO BROTHERS.",
    timeline: [
      {
        id: "2014",
        year: "2014",
        badge: "01",
        title: "4TH STANDARD CLASSMATES",
        lead: "It started so simply.",
        story: "Just two kids sitting in the same classroom, not knowing that one ordinary school year would become the beginning of a friendship that would last far beyond school.",
        tag: "THE BEGINNING"
      },
      {
        id: "neighbour",
        year: "NEIGHBOUR",
        badge: "02",
        title: "NEIGHBOUR FRIEND",
        lead: "Then somehow, you weren't just a classmate anymore.",
        story: "You became the friend I could see outside the classroom too. From school days to neighbourhood memories, our friendship slowly became a part of everyday life.",
        tag: "EVERYDAY LIFE"
      },
      {
        id: "11th",
        year: "11TH GRADE",
        badge: "03",
        title: "11TH CLASSMATE",
        lead: "Years passed. Different stages. Different versions of us.",
        story: "And somehow, we found ourselves classmates again. By then, you weren't just someone I knew from school. You were already someone important to me.",
        tag: "RECONNECTING"
      },
      {
        id: "bus",
        year: "BUS RIDES",
        badge: "04",
        title: "BUS FRIEND",
        lead: "Then came the bus journeys.",
        story: "Those ordinary rides that probably felt like nothing at the time... but became some of the memories I'll always smile about.",
        tag: "ROADS & LAUGHTER",
        hasRoadAnim: true
      },
      {
        id: "12th",
        year: "12TH GRADE",
        badge: "05",
        title: "12TH — BEST FRIEND",
        lead: "By 12th, you weren't just my classmate.",
        story: "You became my BEST FRIEND. The person behind countless memories, conversations, laughs, and moments I'll never forget.",
        tag: "BEST FRIEND"
      },
      {
        id: "now",
        year: "NOW",
        badge: "06",
        title: "NOW — MY BROTHER",
        lead: "Today, I don't even know how to call you just a friend anymore.",
        story: "You're my BROTHER. Not because we share the same blood... but because years of friendship made us family.",
        tag: "FAMILY FOREVER"
      }
    ],
    typographyTransition: [
      { step: "01", text: "FRIEND" },
      { step: "02", text: "BEST FRIEND" },
      { step: "03", text: "BROTHER" }
    ]
  },

  // "2014 — 2026" / "12 YEARS" / "FOREVER"
  yearsTwelve: {
    numberWatermark: "04",
    yearRange: "2014 — 2026",
    summaryLine1: "12 YEARS.",
    summaryLine2: "COUNTLESS MEMORIES.",
    summaryLine3: "ONE BROTHER.",
    bridge: "And this isn't the end.",
    infinityRange: "2014 → 2026 → ∞",
    foreverTag: "AND FOREVER."
  },

  // "LIFE WILL CHANGE" EMOTIONAL MESSAGE
  emotionalMessage: {
    lines: [
      "Life will change.",
      "You will change.",
      "We will grow.",
      "We may choose completely different paths.",
      "Maybe one day, you'll become something I never imagined.",
      "Maybe you'll become something far beyond the athlete I remember today.",
      "But no matter what you become..."
    ],
    climaxHeadline: "I'LL ALWAYS REMEMBER YOU.",
    tributeEchoes: [
      "Not just as the athlete who became my role model.",
      "Not just as my classmate.",
      "Not just as my neighbour friend.",
      "Not just as my bus friend.",
      "Not just as my best friend.",
      "But as my brother."
    ]
  },

  // ATHLETIC MEMORIES & MOMENTS SECTION
  memoriesArchive: {
    numberWatermark: "05",
    label: "05 / ATHLETIC MEMORIES",
    titleLine1: "THE ATHLETE",
    titleAccent: "MOMENTS.",
    subtitle: "The speed, the sweat, the starting line, and the discipline that inspired me.",
    items: [
      {
        id: "01",
        num: "01",
        year: "STARTING BLOCKS",
        title: "THE FIRST STRIDE",
        description: "Spikes pressed into the track, locked in total focus before the starter's gun. The moment all training turns into speed.",
        src: firstImg,
        alt: "Athlete in starting blocks",
        objectPosition: "center top",
        gridClass: "card-asym-1",
        rotation: -1
      },
      {
        id: "02",
        num: "02",
        year: "DAWN SESSIONS",
        title: "DISCIPLINE BEFORE SUNRISE",
        description: "Empty stadium, morning mist, and the quiet dedication putting in the laps while the world was asleep.",
        src: disImg,
        alt: "Early dawn training session",
        objectPosition: "center top",
        gridClass: "card-asym-2",
        rotation: 1
      },
      {
        id: "03",
        num: "03",
        year: "EXPLOSIVE SPEED",
        title: "MAXIMUM VELOCITY",
        description: "Powering down the straightaway with full stride, chasing every split-second with relentless drive.",
        src: portImg,
        alt: "Subhickshun in maximum velocity",
        objectPosition: "center top",
        gridClass: "card-asym-3",
        rotation: -0.5
      },
      {
        id: "04",
        num: "04",
        year: "RACE DAY",
        title: "THE COMPETITIVE ZONE",
        description: "Lacing up the track spikes, tuning out the noise, and giving everything on the rubber track.",
        src: comImg,
        alt: "Track spikes and race day focus",
        objectPosition: "center top",
        gridClass: "card-asym-4",
        rotation: 1
      },
      {
        id: "05",
        num: "05",
        year: "THE FINISH LINE",
        title: "LEAVING IT ALL ON THE TRACK",
        description: "Crossing the finish line exhausted but proud. That heart and grit taught me what true dedication means.",
        src: priceImg,
        alt: "Athlete crossing the finish line",
        objectPosition: "center top",
        gridClass: "card-asym-5",
        rotation: -1
      }
    ],
    // Final Hero Athlete Card in Archive
    heroCard: {
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1600&auto=format&fit=crop",
      imageAlt: "Subhickshun Naren in maximum velocity sprint",
      label: "THE ATHLETE",
      headlineLead: "THE VERSION OF YOU",
      headlineAccent: "I'LL ALWAYS REMEMBER.",
      p1: "Maybe one day you'll become something completely different.",
      p2: "But this version of you...",
      pHighlight: "The athlete.",
      p3: "Will always have a place in my memory.",
      speedLineText: "KEEP MOVING"
    },
    // Ending Transition after Hero Card
    endingTransition: {
      label: "ONE LAST MEMORY",
      headline: "AND IF I HAD TO KEEP JUST ONE...",
      keepStatement: "I'D KEEP THE ATHLETE.",
      subtext: "Because that was the version of you who taught me something without even trying.",
      watermarkRoleModel: "MY ROLE MODEL."
    }
  },

  // ATHLETIC MOTION
  athleticMotion: {
    tag: "MOTION NEVER STOPPED",
    telemetry: [
      { label: "YEARS COUNT", value: "2014 → 2026", tag: "12 YEARS" },
      { label: "BROTHERHOOD", value: "UNBREAKABLE", tag: "FAMILY" },
      { label: "HEART", value: "STEADY PULSE", tag: "LOYALTY" },
      { label: "MEMORIES", value: "INFINITE", tag: "∞ FOREVER" }
    ]
  },

  // FEATURED IMAGE
  featured: {
    image: "/assets/subhickshun-featured.jpg",
    imageAlt: "Subhickshun sprinting forward",
    headline: "KEEP RUNNING.",
    subtext: "Whatever you become next, I hope you never lose the person who once chased every dream."
  },

  // UPDATED FINAL LETTER
  letter: {
    heading: "A LETTER FROM YOUR FRIEND.",
    recipientGreeting: "Dear Subhickshun,",
    paragraphs: [
      "I don't know where life will take us from here.",
      "Maybe one day you'll become something completely different.",
      "Maybe you'll choose a path that has nothing to do with athletics.",
      "Maybe life will take both of us in completely different directions.",
      "But there is one thing I know.",
      "No matter how much time passes, I'll always remember you as the athlete you were.",
      "Because during that time, you became my role model without even knowing it.",
      "But when I look back at our story, I don't just see an athlete.",
      "I see my 4th standard classmate.",
      "My neighbour friend.",
      "My 11th classmate.",
      "My bus friend.",
      "My best friend in 12th.",
      "And now...",
      "my brother.",
      "Not my brother by blood.",
      "But my brother by years, memories, trust, and everything we've been through together.",
      "From 2014 to 2026, we've gone through so many versions of friendship.",
      "And somehow, through all those versions, you remained.",
      "That's something I'll always be grateful for.",
      "Years from now, you may become anything.",
      "Whatever you become, whatever path you choose, whatever life brings...",
      "I'll still remember the person who was there through all those chapters.",
      "The athlete.\nThe friend.\nThe brother.\nMy non-blood brother.",
      "This website is just a small reminder of a very big friendship.",
      "Happy Birthday, Subhickshun.\nKeep going.\nKeep becoming whoever you're meant to be.",
      "And wherever life takes us...",
      "I'll always be your friend.",
      "Forever."
    ],
    signOff: "YOUR FRIEND,",
    signatureName: "FOREVER."
  },

  // FINAL BLACK SCREEN SEQUENCE
  finalScreen: {
    yearStart: "2014",
    yearRange: "2014 — 2026",
    bridge: "AND STILL...",
    hugeForever: "FOREVER.",
    bloodFamilyQuote: "Some friendships don't need blood to become family.",
    declarationLine1: "MORE THAN A FRIEND.",
    declarationLine2: "MORE THAN A MEMORY.",
    declarationLine3: "MY BROTHER.",
    finalSign: "YOUR FRIEND, FOREVER."
  },

  // FINAL BIRTHDAY MESSAGE
  finalBirthday: {
    heading: "HAPPY BIRTHDAY, SUBHICKSHUN.",
    pillars: [
      "To the athlete who inspired me.",
      "To the friend who stayed.",
      "To the brother I found without sharing blood.",
      "Here's to every chapter we've already lived... and every chapter still waiting for us."
    ],
    timelineTag: "2014 → 2026 → FOREVER",
    signatureTag: "YOUR FRIEND, FOREVER."
  },

  // FINAL CTA & FOOTER
  cta: {
    title: "THE JOURNEY ISN'T OVER.",
    subtitle: "Whatever comes next, keep moving.",
    buttonText: "KEEP GOING →"
  },

  footer: {
    recipientName: "SUBHICKSHUN NAREN",
    tributeQuote: "4th Standard Classmate • Bus Friend • Best Friend • Brother",
    timeline: "2014 → 2026 → FOREVER",
    creator: "YOUR FRIEND, FOREVER."
  }
};
