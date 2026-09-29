/**
 * ATHLETE DATA CONFIGURATION
 * ============================================================================
 * Easily customize all details, statistics, achievements, stories, photos,
 * and contact information for the athlete portfolio here.
 * ============================================================================
 */

export const athleteData = {
  // Brand & Identity
  brand: {
    firstName: "ALEX",
    lastName: "RIVERA",
    fullName: "ALEX RIVERA",
    tagline: "Track & Field • 100m / 200m Sprinter",
    sport: "Athletics (Sprint)",
    nationality: "IND",
    motto: "Born to Compete. Built to Win.",
    statusBadge: "Active Competitor • Olympic Hopeful 2028"
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Performance", href: "#performance" },
    { name: "Journey", href: "#journey" },
    { name: "Gallery", href: "#gallery" },
    { name: "Connect", href: "#connect" },
    { name: "Contact", href: "#contact" }
  ],

  // Hero Section
  hero: {
    eyebrow: "ATHLETE • DISCIPLINE • PERFORMANCE",
    headingLine1: "BUILT",
    headingLine2: "TO",
    headingLine3: "PERFORM.",
    subheading: "Driven by discipline, powered by passion, and constantly pushing beyond the limits.",
    primaryCta: {
      text: "EXPLORE JOURNEY",
      href: "#journey"
    },
    secondaryCta: {
      text: "LET'S CONNECT",
      href: "#connect"
    },
    image: "/assets/athlete-hero.jpg",
    imageAlt: "Alex Rivera in starting blocks at competitive sprint race",
    objectPosition: "center 20%",
    scrollPrompt: "SCROLL TO EXPLORE"
  },

  // Quick Stats Counter
  quickStats: [
    {
      id: "01",
      number: 8,
      suffix: "+",
      label: "YEARS ACTIVE",
      description: "Dedicated elite training"
    },
    {
      id: "02",
      number: 75,
      suffix: "+",
      label: "COMPETITIONS",
      description: "National & international meets"
    },
    {
      id: "03",
      number: 32,
      suffix: "+",
      label: "MEDALS",
      description: "Podium finishes worldwide"
    },
    {
      id: "04",
      number: 10.12,
      suffix: "s",
      decimals: 2,
      label: "PERSONAL BEST",
      description: "Official 100m recorded time"
    }
  ],

  // About Section
  about: {
    sectionNumber: "01 / ABOUT",
    title: "MORE THAN AN ATHLETE.",
    paragraph1: "Alex Rivera is a dedicated sprinter focused on continuous improvement, relentless discipline, and high-level athletic performance. With over eight years on the track, every workout is engineered to shave milliseconds off the clock.",
    paragraph2: "From early dawn track sessions to high-altitude conditioning and biomechanical analysis, his approach marries raw physical explosiveness with mental fortitude. His mission extends beyond podiums: inspiring the next generation of youth athletes to pursue excellence with unwavering integrity.",
    image: "/assets/athlete-about.jpg",
    imageAlt: "Alex Rivera during intense power sprint training session",
    objectPosition: "center 30%",
    quote: "True speed is not just physical velocity; it's the quiet precision of total focus.",
    infoBlocks: [
      { label: "SPORT", value: "Track & Field (Sprint)" },
      { label: "SPECIALITY", value: "100m / 200m / 4x100m" },
      { label: "BASED IN", value: "Bengaluru, India" },
      { label: "COACH", value: "Marcus Vance (High Perf. Coach)" },
      { label: "AFFILIATION", value: "National Athletics Federation" },
      { label: "SPONSORS", value: "Apex Sportswear • HydroPulse" }
    ]
  },

  // Achievements Section
  achievements: {
    sectionNumber: "02 / HONORS",
    title: "THE RESULTS SPEAK.",
    subtitle: "A track record built on thousands of hours of unseen discipline.",
    items: [
      {
        year: "2026",
        medal: "GOLD",
        medalType: "gold",
        competition: "Asian Grand Prix Athletics",
        location: "Tokyo, Japan",
        event: "100m Men's Finals (10.12s PB)",
        highlight: "New Championship Record"
      },
      {
        year: "2025",
        medal: "SILVER",
        medalType: "silver",
        competition: "World Athletics Continental Tour",
        location: "Doha, Qatar",
        event: "200m Men's Sprint (20.48s)",
        highlight: "Podium Finish"
      },
      {
        year: "2025",
        medal: "BRONZE",
        medalType: "bronze",
        competition: "National Senior Athletics Championships",
        location: "Bhubaneswar, India",
        event: "100m Sprint Final (10.21s)",
        highlight: "National Selection"
      },
      {
        year: "2024",
        medal: "GOLD",
        medalType: "gold",
        competition: "South Asian Games Athletics",
        location: "Kathmandu, Nepal",
        event: "4x100m Men's Relay (Anchor Leg)",
        highlight: "Gold Medal Relay Team"
      },
      {
        year: "2023",
        medal: "GOLD",
        medalType: "gold",
        competition: "Inter-State Athletics Championship",
        location: "Chennai, India",
        event: "100m & 200m Double Gold",
        highlight: "Best Male Athlete of the Meet"
      }
    ]
  },

  // Performance Section
  performance: {
    sectionNumber: "03 / METRICS",
    title: "PERFORMANCE BY NUMBERS",
    subtitle: "Precise measurements and benchmarks tracked through every competitive season.",
    metrics: [
      {
        event: "100m Sprint",
        value: "10.12s",
        rawVal: 10.12,
        benchmark: "Sub-10s Target",
        percentage: 95,
        category: "Primary Event",
        note: "Wind legal +1.2 m/s"
      },
      {
        event: "200m Sprint",
        value: "20.48s",
        rawVal: 20.48,
        benchmark: "Continental Elite",
        percentage: 92,
        category: "Speed Endurance",
        note: "Curve acceleration specialist"
      },
      {
        event: "Top Speed",
        value: "42.8 km/h",
        rawVal: 42.8,
        benchmark: "Peak Velocity",
        percentage: 94,
        category: "Radar Tracking",
        note: "Recorded at 60m-80m split"
      },
      {
        event: "Reaction Time",
        value: "0.128s",
        rawVal: 0.128,
        benchmark: "Block Clearance",
        percentage: 96,
        category: "Start Mechanics",
        note: "Pressure sensor validated"
      },
      {
        event: "Standing Long Jump",
        value: "3.42m",
        rawVal: 3.42,
        benchmark: "Lower Body Power",
        percentage: 88,
        category: "Explosive Strength",
        note: "Plyometric benchmark"
      },
      {
        event: "Weekly Training",
        value: "6 DAYS",
        rawVal: 6,
        benchmark: "28+ Hours / Week",
        percentage: 100,
        category: "Dedication",
        note: "Double sessions + recovery"
      }
    ]
  },

  // Athlete Journey Timeline
  journey: {
    sectionNumber: "04 / STORY",
    title: "THE JOURNEY",
    subtitle: "From local grass tracks to the international grand stage — the defining chapters.",
    milestones: [
      {
        year: "2019",
        phase: "THE BEGINNING",
        title: "First Step on the Track",
        description: "Discovered natural sprinting talent in district championships. Committed to full-time competitive athletic coaching under state sports academy.",
        tag: "Grassroots"
      },
      {
        year: "2021",
        phase: "FIRST BREAKTHROUGH",
        title: "National Junior Title",
        description: "Broke the 10.80s barrier at the National Junior Federation Cup, securing the first national gold medal and catching national selectors' eyes.",
        tag: "Breakthrough"
      },
      {
        year: "2023",
        phase: "NATIONAL STAGE",
        title: "Senior Elite Circuit Debut",
        description: "Graduated to senior elite competition, medaling at the National Inter-State Meet and securing a spot on the national relay team.",
        tag: "Elite Circuit"
      },
      {
        year: "2025",
        phase: "MAJOR ACHIEVEMENT",
        title: "International Podium & Sub-10.20",
        description: "Achieved international recognition with a silver medal in Doha and dropped personal best down to 10.15s in front of 30,000 spectators.",
        tag: "International"
      },
      {
        year: "2026",
        phase: "NEXT LEVEL",
        title: "The Road to World Championships",
        description: "Currently training with world-class coaches, targeting sub-10.00s and preparing for upcoming World Championships and 2028 Olympic qualifiers.",
        tag: "Future Target"
      }
    ]
  },

  // Photo Gallery
  gallery: {
    sectionNumber: "05 / MOMENTS",
    title: "INSIDE THE MOMENTS.",
    subtitle: "Training. Competition. Focus. Life beyond the track.",
    caption: "Drag, scroll, or hover through 3D photo archive. Click any card to inspect.",
    images: [
      {
        id: 1,
        src: "/assets/gallery-01.jpg",
        alt: "Intense block start acceleration",
        title: "0.01s Reactions",
        category: "Starts",
        date: "Tokyo 2026"
      },
      {
        id: 2,
        src: "/assets/gallery-02.jpg",
        alt: "Maximum velocity sprint phase",
        title: "Peak Velocity",
        category: "Race Day",
        date: "Doha Tour"
      },
      {
        id: 3,
        src: "/assets/gallery-03.jpg",
        alt: "High resistance weighted sled pull",
        title: "Power Development",
        category: "Training",
        date: "Gym Session"
      },
      {
        id: 4,
        src: "/assets/gallery-04.jpg",
        alt: "Post-race celebration with national flag",
        title: "Podium Glory",
        category: "Victory",
        date: "Asian GP"
      },
      {
        id: 5,
        src: "/assets/gallery-05.jpg",
        alt: "Deep focus and mental preparation in tunnel",
        title: "Tunnel Vision",
        category: "Mindset",
        date: "Pre-Race"
      },
      {
        id: 6,
        src: "/assets/gallery-06.jpg",
        alt: "Track recovery and mobility work",
        title: "Calculated Recovery",
        category: "Protocol",
        date: "Base Camp"
      },
      {
        id: 7,
        src: "/assets/gallery-07.jpg",
        alt: "Spike shoes laced up before warm up",
        title: "Battle Ready",
        category: "Equipment",
        date: "National Meet"
      },
      {
        id: 8,
        src: "/assets/gallery-08.jpg",
        alt: "High speed photo finish at the line",
        title: "Dip for Gold",
        category: "Finish Line",
        date: "Grand Prix"
      },
      {
        id: 9,
        src: "/assets/gallery-09.jpg",
        alt: "Tactical consultation with sprint coach",
        title: "Strategy & Biomechanics",
        category: "Team",
        date: "Trackside"
      },
      {
        id: 10,
        src: "/assets/gallery-10.jpg",
        alt: "Sunset cooldown stretch on stadium track",
        title: "Day Done. Repeat Tomorrow.",
        category: "Discipline",
        date: "Sunset Cooldown"
      }
    ]
  },

  // Featured Cinematic Photo
  featured: {
    image: "/assets/athlete-featured.jpg",
    imageAlt: "Alex Rivera sprinting under night stadium floodlights",
    objectPosition: "center 35%",
    quoteLine1: "EVERY REP.",
    quoteLine2: "EVERY RACE.",
    quoteLine3: "EVERY LIMIT.",
    tagline: "No shortcuts. No excuses. Just unrelenting speed."
  },

  // Mindset Section
  mindset: {
    sectionNumber: "06 / PHILOSOPHY",
    quote: "THE LIMIT IS ONLY THE STARTING POINT.",
    author: "ALEX RIVERA",
    authorTitle: "National Sprinter & Record Contender",
    principles: [
      {
        number: "01",
        title: "Radical Consistency",
        description: "Excellence is not an act, but a relentless daily standard in training, nutrition, and recovery."
      },
      {
        number: "02",
        title: "Uncompromising Focus",
        description: "Eliminate external noise. Total presence in the lane when the starting gun echoes."
      },
      {
        number: "03",
        title: "Millisecond Obsession",
        description: "Respect the margins. Races are won in the micro-adjustments nobody else is willing to grind for."
      }
    ]
  },

  // Social / Connect CTA
  socialConnect: {
    sectionNumber: "07 / COMMUNITY",
    eyebrow: "FOLLOW THE JOURNEY",
    heading: "LET'S CONNECT.",
    description: "Follow the journey, training sessions, competition updates, behind-the-scenes preparation, and youth athlete mentoring.",
    primaryCtaText: "FOLLOW THE JOURNEY",
    primaryCtaHref: "https://instagram.com",
    socials: [
      {
        name: "Instagram",
        handle: "@alexrivera_speed",
        followers: "128K+",
        url: "https://instagram.com",
        icon: "instagram"
      },
      {
        name: "YouTube",
        handle: "Alex Rivera Speed Lab",
        followers: "45K+",
        url: "https://youtube.com",
        icon: "youtube"
      },
      {
        name: "LinkedIn",
        handle: "Alex Rivera (Athlete)",
        followers: "12K+",
        url: "https://linkedin.com",
        icon: "linkedin"
      },
      {
        name: "Facebook",
        handle: "Alex Rivera Official",
        followers: "35K+",
        url: "https://facebook.com",
        icon: "facebook"
      }
    ]
  },

  // Contact Information
  contact: {
    sectionNumber: "08 / GET IN TOUCH",
    title: "REPRESENTATION & INQUIRIES",
    subtitle: "For sponsorship partnerships, brand endorsements, media appearances, speaking engagements, or training clinics.",
    email: "management@alexrivera-athlete.com",
    phone: "+91 98765 43210",
    location: "Bengaluru / New Delhi, India",
    businessHours: "Mon - Fri, 09:00 - 18:00 IST",
    agentName: "Apex Sports Management Group",
    categories: [
      "Brand Sponsorship & Endorsement",
      "Media & Press Interviews",
      "Coaching Clinics & Masterclasses",
      "Keynote & Motivational Speaking"
    ]
  },

  // Footer
  footer: {
    year: "2026",
    athleteName: "ALEX RIVERA",
    copyrightText: "All rights reserved. Official Athlete Brand Portal.",
    signature: "Built with discipline & speed.",
    links: [
      { name: "Instagram", href: "https://instagram.com" },
      { name: "YouTube", href: "https://youtube.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Contact", href: "#contact" }
    ]
  }
};
