/**
 * ============================================================================
 * SANJEEV SENAPATI — PERSONAL LIFE JOURNEY DATA STORE
 * ============================================================================
 * This file serves as the single source of truth for all personal details,
 * stories, milestones, timeline events, tech stacks, family records, places,
 * and editorial reflections.
 * 
 * You can easily customize any section below. Where information is still being
 * gathered, placeholder tags like "[ADD STORY]" or "[ADD PHOTO]" are provided.
 */

const personalData = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL IDENTITY
  // --------------------------------------------------------------------------
  identity: {
    fullName: "Sanjeev Senapati",
    shortName: "Sanjeev",
    title: "Technology Professional • Husband • Father • Learner • Builder",
    tagline: "My Life. My Journey. My Story.",
    heroBio: "From the quiet coastal heritage of Bhadrak to leading mission-critical financial technology systems across India. A story of family roots, technological curiosity, resilience through challenges, and building a meaningful legacy for tomorrow.",
    dateOfBirth: "1982-03-21", // 21 March 1982
    birthTime: "10:30 PM",
    birthPlace: "Bhadrak, Odisha, India",
    currentCity: "Mumbai, Maharashtra, India",
    primaryPillars: {
      profession: "Technology & Engineering Systems",
      foundation: "Family & Loved Ones"
    },
    closingQuote: {
      lead: "The Story Is Still Being Written.",
      lines: [
        "The past made me.",
        "The present is shaping me.",
        "The future is waiting for me."
      ],
      dreamStatement: "“I want to build a life my children remember not because it was perfect, but because it was full of love, learning, courage and meaningful memories.”"
    }
  },

  // --------------------------------------------------------------------------
  // 2. DYNAMIC METRIC CALCULATORS
  // --------------------------------------------------------------------------
  getMetrics() {
    const now = new Date();
    const dob = new Date(this.identity.dateOfBirth);
    const weddingDate = new Date(this.family.marriage.weddingDate);

    // Calculate age
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
      age--;
    }

    // Calculate marriage years
    let marriageYears = now.getFullYear() - weddingDate.getFullYear();
    const mDiff = now.getMonth() - weddingDate.getMonth();
    if (mDiff < 0 || (mDiff === 0 && now.getDate() < weddingDate.getDate())) {
      marriageYears--;
    }

    return {
      age: age,
      marriageYears: `${marriageYears}+`,
      childrenCount: this.family.children.length,
      citiesCount: this.places.length,
      experienceYears: "20+",
      chaptersCount: 14
    };
  },

  // --------------------------------------------------------------------------
  // 3. FAMILY ROOTS & MEMORIALS
  // --------------------------------------------------------------------------
  familyRoots: {
    sectionTitle: "Where It All Began",
    sectionSubtitle: "The people, values, and home that gave me wings.",
    father: {
      relationship: "Father",
      name: "[Father's Name]",
      memorialYear: 2009,
      status: "Passed away in 2009",
      quote: "“Some people leave our lives, but never leave our story.”",
      story: "My father was the bedrock of our family. His life, discipline, and silent sacrifices laid the foundation upon which everything I have built stands today. Though he left us in 2009, his voice remains my compass in every critical decision.",
      memories: [
        "[Life lessons and values passed down]",
        "[Memories of childhood guidance in Bhadrak]",
        "[Values of honesty, humility, and hard work]"
      ],
      photo: "assets/images/father/father-memorial.jpg"
    },
    mother: {
      relationship: "Mother",
      name: "[Mother's Name]",
      currentAge: 74,
      quote: "“A mother’s prayers are the silent architecture of her children’s destiny.”",
      story: "At 74, my mother embodies unconditional love, perseverance, and warmth. Her presence is a blessing that connects our generation to our deep roots in Odisha.",
      memories: [
        "[Warm memories from our home in Bhadrak]",
        "[Her sacrifices to nurture our education and dreams]",
        "[Her comforting presence across all life chapters]"
      ],
      photo: "assets/images/mother/mother-portrait.jpg"
    },
    siblings: [
      {
        id: "sibling-1",
        name: "[Sibling Name]",
        relationship: "[Brother / Sister]",
        story: "Growing up together in Bhadrak, sharing childhood dreams, games, and the warmth of family bonds that remain unbroken across time and distances.",
        memories: "[ADD MEMORY — Childhood games, shared laughter, and growing up together]",
        photo: "assets/images/siblings/sibling-placeholder.jpg"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. CHILDHOOD & FORMATIVE YEARS
  // --------------------------------------------------------------------------
  childhood: {
    chapterTitle: "Childhood — The Beginning",
    location: "Bhadrak, Odisha",
    period: "1982 – 1990s",
    tagline: "Simplicity, curiosity, and the warmth of an Odia hometown.",
    story: "Born in Bhadrak on 21 March 1982 at 10:30 PM, my childhood unfolded amidst the green landscapes, close-knit neighborhood, and cultural heritage of Odisha. Those early years taught me the value of simple living, enduring friendships, and the thrill of discovering how the world works.",
    aspects: [
      { title: "Childhood Home", desc: "A home filled with warmth, evening stories, and the grounding presence of parents." },
      { title: "Curiosity & Play", desc: "Outdoor games, monsoon rains, and an early fascination with puzzles and building things." },
      { title: "First Dreams", desc: "A youthful wonder about science, mathematics, and the wider world beyond town borders." }
    ],
    photo: "assets/images/childhood/childhood-bhadrak.jpg"
  },

  // --------------------------------------------------------------------------
  // 5. EDUCATION & SCHOOL DAYS
  // --------------------------------------------------------------------------
  education: {
    schoolDays: {
      chapterTitle: "School Days",
      location: "Bhadrak, Odisha",
      story: "School laid the groundwork for discipline, analytical thinking, and lifelong friendships. It was where numbers turned into logic, and teachers inspired belief in one's potential.",
      highlights: [
        { milestone: "First School", detail: "Early lessons in reading, writing, and curiosity." },
        { milestone: "Favorite Subjects", detail: "Mathematics, science, and analytical problem-solving." },
        { milestone: "Teachers & Mentors", detail: "Gurus who instilled discipline and an appetite for learning." },
        { milestone: "Leaving School", detail: "Stepping out with ambition and readiness for college." }
      ],
      photo: "assets/images/school/school-memories.jpg"
    },
    collegeDays: {
      chapterTitle: "College — Becoming Independent",
      collegeName: "[COLLEGE NAME / UNIVERSITY]",
      degree: "[DEGREE IN ENGINEERING / TECHNOLOGY]",
      field: "[COMPUTER SCIENCE / ENGINEERING]",
      years: "[COLLEGE YEARS]",
      story: "College was the bridge from protected childhood into independent adulthood. It brought first encounters with deep computing, system architecture, programming logic, and the realization that software could transform industries.",
      learnings: [
        "First deep dive into algorithms, systems, and programming logic",
        "Learning self-reliance, time management, and collaborative engineering projects",
        "Forming friendships that spanned across personal and professional lives"
      ],
      photo: "assets/images/college/college-journey.jpg"
    }
  },

  // --------------------------------------------------------------------------
  // 6. PROFESSIONAL CHAPTERS & CAREER JOURNEY
  // --------------------------------------------------------------------------
  career: {
    sectionTitle: "Professional Journey & Technology Leadership",
    sectionSubtitle: "20+ years navigating high-stakes enterprise systems, digital currencies, and distributed infrastructure.",
    firstStep: {
      title: "The First Step Into Professional Life",
      story: "Entering the professional world was an exciting transition. From receiving the first salary to holding production responsibility for the very first time, every challenge was a masterclass in accountability, teamwork, and technical rigor.",
      keyTakeaway: "Engineering is not just writing code; it is taking ownership of what you build."
    },
    companies: [
      {
        company: "Visa",
        role: "Senior Staff Software Engineer",
        employmentType: "Full-time",
        period: "Sep 2021 – May 2024 · 2 yrs 9 mos",
        location: "Bengaluru, Karnataka, India · Hybrid",
        badge: "Global Payment Infrastructure",
        summary: "Architecting and engineering high-throughput, mission-critical payment rails, Kubernetes container platforms, SRE practices, and enterprise system reliability.",
        skills: ["Troubleshooting", "Kubernetes", "Payment Infrastructure", "SRE", "Microservices", "Cloud Systems"],
        responsibilities: [
          "High-throughput payment system engineering and troubleshooting",
          "Production-grade Kubernetes cluster management and container orchestration",
          "Site Reliability Engineering (SRE) and high availability monitoring"
        ]
      },
      {
        company: "ADP",
        role: "Architect",
        employmentType: "Full-time",
        period: "Nov 2019 – Sep 2021 · 1 yr 11 mos",
        location: "Greater Hyderabad Area",
        badge: "Cloud Systems & EKS Architecture",
        summary: "Leading cloud architecture design, AWS infrastructure automation, EKS cluster management, and scalable enterprise platform services.",
        skills: ["Amazon Web Services (AWS)", "Amazon EKS", "Cloud Architecture", "Containerization", "DevOps", "SRE"],
        responsibilities: [
          "AWS cloud architecture and Amazon EKS cluster deployment",
          "Automating containerized application environments and DevOps pipelines",
          "Designing high-availability cloud infrastructure and resilience patterns"
        ]
      },
      {
        company: "IMImobile",
        role: "Lead Engineer Cloud",
        employmentType: "Full-time",
        period: "Dec 2016 – Nov 2019 · 3 yrs",
        location: "Hyderabad, Telangana, India",
        badge: "Cloud Platform & Automation",
        summary: "Spearheading cloud platform engineering, containerized services, and automated infrastructure deployments across enterprise messaging and communications platforms.",
        skills: ["AWS", "ECS", "Docker", "NodeJS", "Ansible", "Python", "Bash Shell", "Terraform", "Troubleshooting"],
        responsibilities: [
          "Managing AWS ECS container infrastructure, Docker services, and NodeJS microservices",
          "Writing infrastructure as code (IaC) with Terraform, Ansible, Python, and Bash scripts",
          "Troubleshooting complex production incidents and driving emerging cloud technologies"
        ]
      },
      {
        company: "Pramati Technologies Private Limited",
        role: "Lead System Administrator",
        employmentType: "Full-time",
        period: "Jun 2013 – Jun 2016 · 3 yrs 1 mo",
        location: "Hyderabad, India",
        badge: "AWS Cloud Architecture & System Automation",
        summary: "AWS Cloud Architecting, maintaining enterprise AWS environments, building custom automation tools in Python, Bash, and Ansible, and ensuring zero-downtime operations.",
        skills: ["AWS Cloud Architect", "Python", "Bash", "Ansible", "Linux Administration", "Troubleshooting"],
        responsibilities: [
          "AWS Cloud Architecting, maintaining, and managing enterprise AWS environments",
          "Developing automation tools using Python, Bash shell scripting, and Ansible playbooks",
          "Deep-dive system administration, performance optimization, and incident troubleshooting"
        ]
      },
      {
        company: "Bank of America",
        role: "Sr Analyst - System Support",
        employmentType: "Full-time",
        period: "Feb 2012 – Jun 2013 · 1 yr 5 mos",
        location: "Hyderabad, Telangana, India",
        badge: "Global Banking Infrastructure",
        summary: "Providing core system support for Bank of America infrastructure, creating server instances, enterprise middleware management, and high-availability operations.",
        skills: ["System Support", "Banking Infrastructure", "Server Provisioning", "Troubleshooting", "Incident Response"],
        responsibilities: [
          "System Support for Bank of America infrastructure and mission-critical banking servers",
          "Creating and configuring new server instances, environments, and middleware platforms",
          "Ensuring system stability, high availability, and rapid incident resolution"
        ]
      },
      {
        company: "Prodevans Technologies & Enterprise Consulting",
        role: "Senior Technology Professional / Consultant",
        employmentType: "Consulting",
        period: "2020 – Present",
        location: "Mumbai / Bengaluru",
        badge": "CBDC & Sovereign Fintech Consulting",
        summary: "Consulting on Central Bank Digital Currency (CBDC), OpenShift/Kubernetes platforms, and next-generation financial architectures.",
        skills: ["CBDC / Digital Rupee", "OpenShift", "Kubernetes", "Fintech API Gateways", "Enterprise Payments"],
        responsibilities: [
          "Central Bank Digital Currency (CBDC) & Digital Rupee architectural consulting",
          "OpenShift and Kubernetes cluster reliability, automation, and SRE best practices",
          "High-throughput enterprise payments integration"
        ]
      }
    ],
    cbdcChapter: {
      title: "Building Financial Technology — CBDC & Digital Rupee",
      tagline: "At the frontier of sovereign digital currency and high-throughput financial rails.",
      story: "Having contributed directly within the CBDC (Central Bank Digital Currency) / eRupee ecosystem, Sanjeev has worked on the architecture, operational reliability, and integration pillars of modern digital payment infrastructure.",
      domains: [
        {
          name: "Digital Currency & Wallet Systems",
          desc: "End-to-end transactional workflows including LOAD, PAY / Transfer, and REDEEM cycles."
        },
        {
          name: "Banking Rails Integration",
          desc: "Seamless bridging between Core Banking Systems (CBS), UPI payment interfaces, and digital ledger rails."
        },
        {
          name: "Reconciliation & Settlement",
          desc: "Multi-party financial ledger reconciliation, transaction auditability, and settlement integrity."
        },
        {
          name: "Production Support & Resilience",
          desc: "24/7 disaster recovery (DR) readiness, failover automation, APM monitoring, and high-concurrency performance."
        }
      ],
      notice: "Note: Architecture descriptions are presented at an industry-standard conceptual level to respect enterprise confidentiality."
    },
    skillsMatrix: {
      workedWith: [
        { name: "Java", category: "Backend & Systems" },
        { name: "Go / Golang", category: "High-Performance Services" },
        { name: "Oracle DB", category: "Enterprise Databases" },
        { name: "Linux / Shell", category: "OS & Kernel" },
        { name: "NGINX", category: "Web Servers & Reverse Proxy" },
        { name: "Docker", category: "Containerization" },
        { name: "Kubernetes", category: "Container Orchestration" },
        { name: "OpenShift", category: "Enterprise Cloud" },
        { name: "Microservices", category: "Architecture" },
        { name: "API Gateway", category: "Traffic & Security" },
        { name: "REST APIs", category: "Integrations" },
        { name: "CI / CD", category: "Automation Pipelines" }
      ],
      engineeringAreas: [
        { name: "Financial Technology", desc: "Core banking, digital wallets, transaction engines" },
        { name: "CBDC / Digital Rupee / eRupee", desc: "Central bank digital currency rails & state flows" },
        { name: "Production & Reliability", desc: "SRE principles, zero-downtime deployments, MTTR reduction" },
        { name: "Disaster Recovery (DR)", desc: "Multi-region failover drills, replication verification" },
        { name: "Performance Testing", desc: "JMeter stress testing, throughput bottleneck analysis" },
        { name: "Observability & APM", desc: "Dynatrace, telemetry, real-time alert triage" },
        { name: "Security & TLS", desc: "SSL/TLS certificate lifecycles, encryption at rest and in transit" },
        { name: "Infra Troubleshooting", desc: "Deep packet, heap dump, thread analysis, and root cause diagnosis" }
      ]
    },
    progression: [
      { step: "First Engineering Role", desc: "Solidifying coding fundamentals & systems administration" },
      { step: "Technology Consultant", desc: "Bank of America & global enterprise engagements" },
      { step: "Fintech & Cloud Specialist", desc: "Microservices, OpenShift, Kubernetes, and API gateways" },
      { step: "CBDC / Digital Rupee Rail Architect", desc: "Sovereign digital currency systems & core integrations" },
      { step: "Production & Reliability Lead", desc: "Disaster recovery, observability, high-volume performance" },
      { step: "Today & What Comes Next", desc: "Building scalable, resilient architectures for the future" }
    ]
  },

  // --------------------------------------------------------------------------
  // 7. PLACES THAT SHAPED MY LIFE
  // --------------------------------------------------------------------------
  places: [
    {
      city: "Bhadrak",
      state: "Odisha",
      role: "Birth, Roots & Childhood",
      period: "1982 – Early Years",
      highlight: "Where identity was born",
      story: "My birthplace. The town that gave me my values, my mother tongue, early friendships, and an appreciation for culture and quiet perseverance.",
      lesson: "Roots keep you grounded no matter how far your branches reach.",
      icon: "home"
    },
    {
      city: "Bhubaneswar",
      state: "Odisha",
      role: "Education & Marriage Chapter",
      period: "Formative & 2013",
      highlight: "The City of Temples & Union",
      story: "The state capital where higher educational milestones took shape, and on 04 March 2013, where Swagatika and I tied the knot in front of our families.",
      lesson: "Tradition and progress can harmoniously coexist.",
      icon: "temple"
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      role: "Love & Career Growth",
      period: "2011 Onwards",
      highlight: "Where Love Began",
      story: "A pivotal crossroads. Hyderabad was where I worked on major enterprise technology systems at Bank of America, and most importantly, where I met Swagatika in 2011.",
      lesson: "The best chapters often begin when you least expect them.",
      icon: "heart"
    },
    {
      city: "Bengaluru",
      state: "Karnataka",
      role: "Silicon Valley of India",
      period: "Around 2022",
      highlight: "High-Velocity Tech",
      story: "Immersed in India's technology epicentre, working with modern cloud architectures, microservices, and fast-paced engineering teams.",
      lesson: "Constant innovation is the only sustainable competitive advantage.",
      icon: "code"
    },
    {
      city: "Cuttack",
      state: "Odisha",
      role: "Family & Heritage",
      period: "2023 Onwards",
      highlight: "The Silver City",
      story: "An important family chapter connecting generations, keeping our children rooted in Odia culture and the affection of extended family.",
      lesson: "Family heritage is the greatest gift you can offer your children.",
      icon: "heritage"
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      role: "Financial Capital & Present Chapter",
      period: "Current / 2026",
      highlight: "Energy, Scale & The Future",
      story: "Living and working in India's financial capital, driving CBDC and high-volume financial technology systems amidst the city that never sleeps.",
      lesson: "At high scale, resilience is the only true measure of engineering.",
      icon: "city"
    }
  ],

  // --------------------------------------------------------------------------
  // 8. LOVE STORY & MARRIAGE
  // --------------------------------------------------------------------------
  family: {
    loveStory: {
      chapterTitle: "The Person I Chose",
      partnerName: "Swagatika Pradhan",
      metYear: 2011,
      metCity: "Hyderabad",
      tagline: "Two souls crossing paths in a bustling city, deciding to build a lifetime together.",
      story: "In 2011, amid the fast pace of Hyderabad's technology corridors, I met Swagatika. What began with conversations grew into deep mutual respect, understanding, and love. She became my partner in every sense — supporting my dreams, balancing my worldview, and walking alongside me through every season of life.",
      timeline: [
        { year: "2011", title: "We Met", desc: "First meeting in Hyderabad, planting the seed of a lifelong bond." },
        { year: "2012", title: "Getting to Know Each Other", desc: "Deepening friendship, shared values, and mutual dreams." },
        { year: "2013", title: "Two Lives Unite", desc: "Taking the sacred vows of marriage in Bhubaneswar." }
      ],
      photo: "assets/images/love/love-story.jpg"
    },
    marriage: {
      chapterTitle: "Two Lives. One Journey.",
      weddingDate: "2013-03-04", // 04 March 2013
      weddingPlace: "Bhubaneswar, Odisha",
      partnerName: "Swagatika Pradhan",
      celebrationSummary: "On 04 March 2013, surrounded by our beloved families, traditions, and blessings, Swagatika and I were married in Bhubaneswar. Over 13 years of marriage, we have created a home filled with laughter, weathered storms together, and been blessed with our greatest joy: our children.",
      memories: [
        { title: "The Wedding Day", desc: "Sacred Vedic rituals, laughter of elders, and promising a lifetime of partnership." },
        { title: "First Home Together", desc: "Building our first kitchen, quiet weekend dinners, and learning the rhythm of two lives as one." },
        { title: "13+ Years of Growth", desc: "Navigating cities, careers, parenthood, and growing deeper in love and understanding." }
      ],
      photo: "assets/images/marriage/wedding-ceremony.jpg"
    },

    // ------------------------------------------------------------------------
    // 9. CHILDREN & FATHERHOOD
    // ------------------------------------------------------------------------
    children: [
      {
        id: "aadvika",
        name: "Aadvika Senapati",
        relationship: "Daughter",
        approxAge: 8,
        birthDate: "[ADD DATE — e.g. YYYY-MM-DD]",
        birthPlace: "[Birthplace / City]",
        personality: "Curious, imaginative, compassionate, and full of spirited laughter.",
        quote: "“Watching Aadvika grow teaches me how boundless the world looks through innocent eyes.”",
        favorites: "[Favorite books, drawing, activities, and joyful childhood stories]",
        lessonsToFather: "She taught me the purest form of patience, gentle empathy, and the magic of everyday curiosity.",
        photo: "assets/images/children/aadvika.jpg"
      },
      {
        id: "aadhees",
        name: "Aadhees Senapati",
        relationship: "Son",
        approxAge: 5,
        birthDate: "[ADD DATE — e.g. YYYY-MM-DD]",
        birthPlace: "[Birthplace / City]",
        personality: "Energetic, playful, observant, and bringing unstoppable joy into our home.",
        quote: "“Aadhees reminds me of the simple thrill of building, exploring, and fearlessly learning something new.”",
        favorites: "[Favorite toys, outdoor games, energetic playtime, and superhero stories]",
        lessonsToFather: "He taught me that strength is gentle, and every moment spent playing is an investment in a happy memory.",
        photo: "assets/images/children/aadhees.jpg"
      }
    ],
    fatherhoodReflections: {
      chapterTitle: "The Greatest Chapter: Fatherhood",
      openingQuote: "“Some chapters change your life. Becoming a father changes the way you see life itself.”",
      story: "Fatherhood is the most profound transformation I have ever experienced. It shifted the center of gravity in my universe. The late-night cradles, the first wobbly steps, the questions that make you ponder life's deepest truths — every day with Aadvika and Aadhees is a gift that makes all hard work worthwhile.",
      pillars: [
        { title: "Unconditional Love", desc: "Being their safe haven, where they are always heard, cherished, and valued." },
        { title: "Leading by Example", desc: "Showing them that integrity, hard work, kindness, and resilience matter more than easy shortcuts." },
        { title: "Cultivating Curiosity", desc: "Encouraging them to ask questions, read books, explore nature, and never fear trying." },
        { title: "Building Roots & Wings", desc: "Grounding them in our rich cultural values while empowering them to soar wherever their dreams lead." }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 10. LIFE CHALLENGES & RESILIENCE
  // --------------------------------------------------------------------------
  challenges: {
    sectionTitle: "The Chapters That Tested Me",
    sectionSubtitle: "Resilience, not victimhood. How uncertainty forged clarity and inner strength.",
    story: "Life is rarely a smooth ascent. It has included seasons of heavy uncertainty, demanding career transitions, high-pressure responsibilities, and emotional crossroads. I have learned that difficulties are not roadblocks; they are the forge where character is tested and refined.",
    framework: [
      {
        phase: "The Challenge",
        desc: "Encountering sudden shifts in professional terrain, family losses like my father's passing in 2009, and the weight of balancing high-stakes engineering with personal obligations."
      },
      {
        phase: "What I Did",
        desc: "Stepped back to focus on first principles, maintained composure, protected what truly matters, and kept taking constructive actions every single day."
      },
      {
        phase: "What I Learned",
        desc: "That panic solves nothing, but calm persistence solves everything. That character is revealed when conditions are hardest."
      },
      {
        phase: "How I Changed",
        desc: "Emerging with deeper humility, sharper clarity on what deserves my energy, and a resilient mindset that fears no storm."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 11. PERSONAL VALUES & LIFE LESSONS
  // --------------------------------------------------------------------------
  values: [
    { name: "Family First", desc: "Family gives achievement its true meaning; everything else is built around their well-being.", icon: "heart" },
    { name: "Continuous Learning", desc: "Curiosity must evolve faster than technology. Never stop being a student.", icon: "book" },
    { name: "Quiet Integrity", desc: "Doing the right thing even when no one is watching; keeping promises to oneself and others.", icon: "shield" },
    { name: "Engineering Rigor", desc: "Designing systems and habits that are resilient under pressure, reliable, and built to last.", icon: "cpu" },
    { name: "Grit & Perseverance", desc: "Difficult chapters can become your strongest chapters if you refuse to surrender hope.", icon: "anchor" },
    { name: "Generational Legacy", desc: "Building memories, values, and security that outlive the present moment.", icon: "sparkles" }
  ],

  lifeLessons: [
    { quote: "Keep learning. The moment you stop being curious is the moment you stop growing.", context: "On Technology & Intellect" },
    { quote: "People and circumstances will change. Keep growing your inner anchor.", context: "On Adaptability" },
    { quote: "Family gives achievement its meaning. Without love to share it with, success is hollow.", context: "On Purpose" },
    { quote: "Difficult chapters can become the strongest chapters of your autobiography.", context: "On Resilience" },
    { quote: "Technology changes quickly. Curiosity and problem-solving must change even faster.", context: "On Engineering" },
    { quote: "A career is important, but it is only one chapter of a life.", context: "On Balance" },
    { quote: "The people we love become part of everything we build.", context: "On Legacy" }
  ],

  // --------------------------------------------------------------------------
  // 12. TODAY (2026) & THE FUTURE
  // --------------------------------------------------------------------------
  today: {
    year: "2026",
    currentAge: 44,
    location: "Mumbai, Maharashtra",
    headline: "At 44: Centered, Focused, and Building Forward",
    summary: "Today, Sanjeev stands at a rewarding intersection of life. With more than two decades of deep technology consulting and financial infrastructure experience, a loving marriage of 13+ years, and two spirited children, his focus is sharply tuned to what creates lasting value.",
    currentFocus: [
      "Architecting robust financial technology & CBDC-related mission-critical systems",
      "Mentoring next-generation software engineers in production reliability & resilience",
      "Creating rich, joyful, and memorable experiences for Aadvika and Aadhees",
      "Maintaining physical health, mental equanimity, and lifelong learning"
    ]
  },

  future: {
    chapterTitle: "The Life I Want To Build",
    lead: "Looking ahead with optimism, purposeful ambition, and love.",
    aspirations: [
      {
        area: "Family & Home",
        desc: "Nurturing a warm, peaceful, and joyful home where my wife and children thrive, feel protected, and create unforgettable memories."
      },
      {
        area: "Children's Future",
        desc: "Giving Aadvika and Aadhees the best education, unwavering confidence, high moral values, and the freedom to pursue their own greatness."
      },
      {
        area: "Technology Leadership",
        desc: "Continuing to solve complex, high-scale engineering puzzles and contributing to foundational digital public infrastructure."
      },
      {
        area: "Wisdom & Balance",
        desc: "Living with mindfulness, generosity, gratitude, and staying physically and mentally vibrant for decades to come."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 13. CHRONOLOGICAL TIMELINE (SORTED STRICTLY CHRONOLOGICALLY WITH RICH CHAPTER DATA)
  // --------------------------------------------------------------------------
  timelineEvents: [
    {
      id: "roots-birth",
      year: "1982",
      date: "21 March 1982",
      title: "The Beginning — Birth & Family Roots in Bhadrak",
      category: "life",
      categoryLabel: "Roots & Origin",
      location: "Bhadrak, Odisha",
      tag: "Origins",
      icon: "🏛️",
      thumbnail: "assets/images/mother/mother-portrait.jpg",
      summary: "Born at 10:30 PM in Bhadrak, Odisha, into a family grounded in culture, integrity, hard work, and quiet dignity.",
      quote: "“Our roots do not just hold us in the soil; they give our branches the strength to reach toward the heavens.”",
      statsBadge: "Born 21 Mar 1982 • Mother (Age 74, Born 1952)",
      storyParagraphs: [
        "Sanjeev was born at 10:30 PM on 21 March 1982 in the historic town of Bhadrak, Odisha. His family foundation was built on simple, unshakeable values: honesty, dignity of labor, respect for elders, and a lifelong commitment to education.",
        "His parents nurtured a home filled with warmth and moral clarity. His father instilled discipline and quiet strength, while his mother, now 74 years of age (born 1952), has been the spiritual anchor of the family, embodying endless unconditional love, traditional prayers, and resilience through life's trials.",
        "Growing up with siblings, the household was always alive with stories, festive celebrations of Durga Puja and Ratha Yatra, and the shared understanding that true success is measured by character and contribution."
      ],
      takeaways: [
        "Deep cultural roots from Odisha that continue to guide daily life and ethical decisions",
        "Mother (Age 74) remains the living matriarch and spiritual inspiration of the household",
        "The value of humility: remembering where you started no matter how far you travel"
      ]
    },
    {
      id: "childhood-bhadrak",
      year: "1980s – 1990s",
      date: "Formative Childhood Years",
      title: "Childhood in Bhadrak — Pure Joys & Curiosity",
      category: "life",
      categoryLabel: "Early Life",
      location: "Bhadrak, Odisha",
      tag: "Childhood",
      icon: "🌿",
      thumbnail: "assets/images/childhood/bhadrak-childhood.jpg",
      summary: "A carefree, joyous childhood filled with neighborhood games, monsoon rains, bicycle adventures, and early curiosity about machines.",
      quote: "“The simplicity of a childhood in a small town gives you an imagination that stays with you forever.”",
      statsBadge: "Bhadrak Town • Neighborhood Adventures",
      storyParagraphs: [
        "Childhood in Bhadrak was painted in vibrant, carefree colors. Before the era of smartphones and internet feeds, evenings were spent outdoors playing cricket in dusty fields, cycling down quiet township lanes, and listening to elders recite folklore during power cuts.",
        "Monsoon seasons brought the rhythmic sound of rain on rooftops, paper boats floating down streams, and the warmth of family dinners. Sanjeev developed an early fascination with how things worked—taking apart old battery-operated toys, observing mechanical contraptions, and asking relentless questions.",
        "These unhurried years formed the bedrock of his creativity, emotional stability, and the ability to find deep happiness in life's simplest moments."
      ],
      takeaways: [
        "Unfiltered outdoor childhood fostered resilience, social camaraderie, and problem-solving",
        "Small-town grounding provided an appreciation for authenticity and human connections",
        "Early curiosity paved the way toward engineering and technical disciplines"
      ]
    },
    {
      id: "siblings-bond",
      year: "1980s – Present",
      date: "Lifelong Family Bond",
      title: "Siblings & Family Bond — Sona (40), Rajeev (38) & Meena (36)",
      category: "life",
      categoryLabel: "Roots & Family",
      location: "Bhadrak, Odisha",
      tag: "Siblings Timeline",
      icon: "👨‍👩‍👧‍👦",
      thumbnail: "assets/images/siblings/sibling-placeholder.jpg",
      summary: "Growing up together in Bhadrak with sister Sona (Age 40), brother Rajeev (Age 38), and sister Meena (Age 36). Unbroken family bonds of love and loyalty.",
      quote: "“Siblings are the witnesses of our beginnings, the sharers of our childhood memories, and our lifelong anchors.”",
      statsBadge: "Sona (40) • Rajeev (38) • Meena (36) • 3 Siblings",
      storyParagraphs: [
        "Growing up in Bhadrak, Sanjeev was blessed with three wonderful siblings: **Sona Senapati** (Age 40), **Rajeev Senapati** (Age 38), and **Meena Senapati** (Age 36).",
        "Their household was filled with laughter, festive Durga Puja & Ratha Yatra celebrations, joint studies, outdoor games, and the warmth of a close-knit Odia family.",
        "Explore the sub-timeline branches below to read about each sibling's bond and shared memories."
      ],
      takeaways: [
        "Unbreakable bond built across decades of shared history and mutual support",
        "Deep emotional grounding rooted in childhood memories in Bhadrak",
        "Standing united as a family through every season of life"
      ],
      siblingBranches: [
        {
          id: "sib-sona",
          name: "Sona Senapati",
          relationship: "Sister",
          age: 40,
          icon: "💖",
          tag: "Sister (Age 40)",
          summary: "Elder/loving sister, sharing childhood memories, family festivities, and unwavering sisterly care and wisdom.",
          lessonsToFamily: "Teaches warm compassion, family harmony, and looking after loved ones with boundless care.",
          photo: "assets/images/siblings/sona.jpg"
        },
        {
          id: "sib-rajeev",
          name: "Rajeev Senapati",
          relationship: "Brother",
          age: 38,
          icon: "🤝",
          tag: "Brother (Age 38)",
          summary: "Brother, sharing boyhood adventures, cricket matches, technical curiosity, and lifelong brotherhood.",
          lessonsToFamily: "Teaches loyalty, mutual encouragement, and standing shoulder-to-shoulder through life's milestones.",
          photo: "assets/images/siblings/rajeev.jpg"
        },
        {
          id: "sib-meena",
          name: "Meena Senapati",
          relationship: "Sister",
          age: 36,
          icon: "✨",
          tag: "Sister (Age 36)",
          summary: "Younger sister, bringing energy, joy, warm conversations, and keeping family traditions alive.",
          lessonsToFamily: "Teaches cheerful resilience, festive warmth, and keeping family ties strong across any distance.",
          photo: "assets/images/siblings/meena.jpg"
        }
      ]
    },
    {
      id: "school-education",
      year: "1990s",
      date: "School Years",
      title: "School Days — The Spark for Mathematics & Logic",
      category: "education",
      categoryLabel: "Education",
      location: "Bhadrak, Odisha",
      tag: "School",
      icon: "🎓",
      thumbnail: "assets/images/school/school-memories.jpg",
      summary: "Academic foundations, passionate teachers, discovery of mathematics, and the thrill of systematic problem-solving.",
      quote: "“A great teacher does not just teach formulas; they ignite the curiosity to discover why the world behaves the way it does.”",
      statsBadge: "Academic Excellence • Science & Math",
      storyParagraphs: [
        "School was where Sanjeev's analytical mind began to flourish. Guided by dedicated teachers who took personal interest in their students, he developed a deep love for mathematics and the natural sciences.",
        "He realized early that mathematics was not just abstract numbers on a blackboard, but a universal language of patterns, precision, and logic. Solving a difficult theorem or physics problem brought a distinct sense of accomplishment.",
        "Beyond academics, school taught the discipline of daily preparation, the value of healthy competition, and the importance of helping classmates who struggled with complex concepts."
      ],
      takeaways: [
        "Mathematical rigor established the foundation for future software architecture and systems thinking",
        "Learned the habit of deep focus and disciplined study",
        "Gratitude for inspiring teachers whose guidance shaped his intellectual trajectory"
      ]
    },
    {
      id: "college-engineering",
      year: "2000 – 2004",
      date: "Undergraduate Years",
      title: "Engineering College — Becoming Independent & Coding Logic",
      category: "education",
      categoryLabel: "Education",
      location: "Bhubaneswar / Odisha",
      tag: "College",
      icon: "💻",
      thumbnail: "assets/images/college/college-journey.jpg",
      summary: "Stepping away from home, earning an engineering degree, first deep dives into algorithms, Unix systems, and lifelong friendships.",
      quote: "“College was where abstract logic met real-world capability. Writing code was the first time I felt the power of creating something out of pure thought.”",
      statsBadge: "B.Tech Engineering • Computer Science",
      storyParagraphs: [
        "Moving to college marked the transition into independent adulthood. Living in hostels and student accommodations taught Sanjeev self-reliance, budgeting, and the art of navigating diverse personalities and backgrounds.",
        "Academically, engineering opened the door to computer science, data structures, relational databases, and distributed operating systems. Late-night lab sessions, compiling code, and debugging stubborn runtime exceptions built perseverance and analytical stamina.",
        "The bonds formed with engineering batchmates became lifelong friendships, creating a shared network of peers who would go on to build technology across India and the globe."
      ],
      takeaways: [
        "Mastered foundational computing paradigms, Unix environments, and object-oriented design",
        "Gained self-sufficiency, time management, and project execution capabilities",
        "Formed unbreakable bonds of brotherhood and mutual support"
      ]
    },
    {
      id: "early-career",
      year: "2004 – 2008",
      date: "Early Career Transition",
      title: "First Steps in IT Consulting — Hyderabad & Chennai",
      category: "career",
      categoryLabel: "Career",
      location: "Hyderabad & Chennai",
      tag: "Career",
      icon: "💼",
      thumbnail: "assets/images/career/early-career.jpg",
      summary: "Entering the professional technology industry, first production deployments, learning the rigor of mission-critical systems.",
      quote: "“Your first years in engineering teach you that code on your laptop is easy; keeping production alive for millions of users requires craftsmanship.”",
      statsBadge: "IT Consulting • Enterprise Systems",
      storyParagraphs: [
        "Landing his first professional engineering role and receiving his first salary was a moment of immense personal pride and gratitude toward his parents. Relocating to major IT hubs like Hyderabad and Chennai expanded his worldview.",
        "He was rapidly thrown into real-world production environments where a single misconfiguration could impact business operations. This taught him technical rigor: verifying logs, setting up monitoring, automating rollbacks, and writing clear technical documentation.",
        "Mentors in these early consulting engagements instilled the mindset that an engineer's reputation is built on accountability, calm crisis management, and continuous upskilling."
      ],
      takeaways: [
        "Transitioned from academic theory to enterprise-grade production software delivery",
        "Developed adaptability while living across dynamic Indian metropolises",
        "Cultivated a zero-defect mindset and dedication to client success"
      ]
    },
    {
      id: "father-memorial",
      year: "2009",
      date: "2009 (A Watershed Year)",
      title: "Loss of Father — A Sacred Memorial & Inner Fortitude",
      category: "life",
      categoryLabel: "Memorial & Turning Point",
      location: "Odisha",
      tag: "Memorial",
      icon: "🕯️",
      thumbnail: "assets/images/memorial/father-memorial.jpg",
      summary: "The untimely passing of his beloved father in 2009. A profound loss that forged an unbreakable sense of duty, resilience, and maturity.",
      quote: "“When a father passes away, a son inherits not just his memory, but the duty to carry the family's honor and strength on his own shoulders.”",
      statsBadge: "In Loving Memory • Father (1950–2009)",
      storyParagraphs: [
        "In 2009, the world stood still with the devastating and untimely passing of Sanjeev's father. It was the hardest chapter of his life—a sudden, heartbreaking void that tested his spirit and faith to their absolute limits.",
        "In the wake of this grief, Sanjeev stepped forward to shoulder the responsibilities of his family, ensuring his mother and loved ones were protected, cared for, and comforted. The loss forced him to grow up rapidly, transforming him into the pillars of strength his father always believed he would be.",
        "Every decision he makes today—as a professional, a husband, and a father—is informed by the quiet integrity, sacrifices, and blessing of his father looking down upon him."
      ],
      takeaways: [
        "Turned profound grief into a sacred commitment to family leadership and duty",
        "Deepened reverence for his mother (now 74) as the family's living anchor",
        "Developed emotional resilience: the understanding that life's storms can break your heart, but they can also forge your character"
      ]
    },
    {
      id: "meeting-swagatika",
      year: "2011",
      date: "2011",
      title: "Meeting Swagatika — Destiny & Love in Hyderabad",
      category: "family",
      categoryLabel: "Love & Partnership",
      location: "Hyderabad, Telangana",
      tag: "Love",
      icon: "✨",
      thumbnail: "assets/images/love/love-story.jpg",
      summary: "Meeting Swagatika Pradhan while working in Hyderabad. The spark of genuine understanding, shared values, and life partnership.",
      quote: "“Love is not just looking at each other; it is looking together in the same direction toward a shared future.”",
      statsBadge: "Met 2011 • Hyderabad Chapter",
      storyParagraphs: [
        "In 2011, while living and working in Hyderabad, destiny intervened when Sanjeev met Swagatika Pradhan. From their very first conversations, there was an unmistakable resonance of values, mutual respect, and effortless comfort.",
        "They shared common cultural heritage, a grounded sense of humor, and aligned perspectives on what matters most in life: family harmony, honesty, and emotional loyalty. Over cups of tea, long evening walks, and honest conversations about dreams and struggles, a deep bond blossomed.",
        "Both families recognized the beauty of their connection and wholeheartedly blessed their union, paving the way for their wedding."
      ],
      takeaways: [
        "Found a partner who is a confidante, greatest supporter, and source of emotional grounding",
        "Built a relationship on honest communication, mutual respect, and shared cultural foundations",
        "The start of an enduring journey that would span cities, career leaps, and the joys of parenthood"
      ]
    },
    {
      id: "career-journey-branch",
      year: "2012 – 2026",
      date: "Professional Journey (2012 – 2026)",
      title: "Professional Journey & Career Milestones",
      category: "career",
      categoryLabel: "Career & CBDC",
      location: "Mumbai • Bengaluru • Hyderabad",
      tag: "Career Timeline",
      icon: "💼",
      thumbnail: "assets/images/career/boa-systems.jpg",
      summary: "Explore Sanjeev's complete career progression across 6 premier companies, high-throughput payment architectures, cloud platforms, and enterprise system leadership.",
      quote: "“Engineering is not just writing code; it is taking ownership of what you build and maintaining zero downtime for millions of users.”",
      statsBadge: "6 Companies • 14+ Years Tech Leadership",
      storyParagraphs: [
        "Sanjeev's professional career spans **over 14 years** of high-stakes technology leadership, infrastructure automation, cloud architecture, and financial systems engineering.",
        "Explore the interactive sub-timeline branch below to view details, skills, and accomplishments across **Prodevans**, **Visa**, **ADP**, **IMImobile**, **Pramati Technologies**, and **Bank of America**."
      ],
      takeaways: [
        "14+ years navigating enterprise systems, Kubernetes cloud platforms, and Site Reliability Engineering (SRE)",
        "Proven expertise across sovereign fintech, CBDC / Digital Rupee payment rails, and AWS cloud architecture",
        "Deep hands-on craftsmanship across Linux, Docker, Ansible, Terraform, Python, and high-concurrency payment engines"
      ],
      workBranches: [
        {
          id: "role-prodevans",
          company: "Prodevans Technologies",
          role: "Solutions Architect",
          employmentType: "Full-time",
          period: "Mar 2025 – Jul 2026 · 1 yr 5 mos",
          location: "Navi Mumbai, Maharashtra, India · Hybrid",
          badge: "CBDC & Sovereign Fintech Architect",
          icon: "⚡",
          summary: "Architecting Central Bank Digital Currency (CBDC) / Digital Rupee payment rails, OpenShift/Kubernetes cluster reliability, and high-throughput enterprise fintech integrations.",
          skills: ["CBDC / Digital Rupee", "OpenShift", "Kubernetes", "Fintech API Gateways", "Enterprise Payments", "SRE"]
        },
        {
          id: "role-visa",
          company: "Visa",
          role: "Senior Staff Software Engineer",
          employmentType: "Full-time",
          period: "Sep 2021 – May 2024 · 2 yrs 9 mos",
          location: "Bengaluru, Karnataka, India · Hybrid",
          badge: "Global Payment Infrastructure",
          icon: "💳",
          summary: "Engineering high-throughput, mission-critical payment rails, Kubernetes container platforms, SRE practices, and enterprise system reliability.",
          skills: ["Troubleshooting", "Kubernetes", "Payment Infrastructure", "SRE", "Microservices", "Cloud Reliability"]
        },
        {
          id: "role-adp",
          company: "ADP",
          role: "Architect",
          employmentType: "Full-time",
          period: "Nov 2019 – Sep 2021 · 1 yr 11 mos",
          location: "Greater Hyderabad Area",
          badge: "AWS & EKS Architecture",
          icon: "🏗️",
          summary: "Leading cloud architecture design, AWS infrastructure automation, Amazon EKS cluster management, and scalable enterprise platform services.",
          skills: ["Amazon Web Services (AWS)", "Amazon EKS", "Cloud Architecture", "Containerization", "DevOps", "SRE"]
        },
        {
          id: "role-imimobile",
          company: "IMImobile",
          role: "Lead Engineer Cloud",
          employmentType: "Full-time",
          period: "Dec 2016 – Nov 2019 · 3 yrs",
          location: "Hyderabad, Telangana, India",
          badge: "Cloud Platform & Automation",
          icon: "☁️",
          summary: "Spearheading cloud platform engineering, containerized services, and automated infrastructure deployments across enterprise messaging and communications platforms.",
          skills: ["AWS", "ECS", "Docker", "NodeJS", "Ansible", "Python", "Bash Shell", "Terraform", "Troubleshooting"]
        },
        {
          id: "role-pramati",
          company: "Pramati Technologies Private Limited",
          role: "Lead System Administrator",
          employmentType": "Full-time",
          period: "Jun 2013 – Jun 2016 · 3 yrs 1 mo",
          location: "Hyderabad, India",
          badge: "AWS Cloud Architect & System Automation",
          icon: "⚙️",
          summary: "AWS Cloud Architecting, maintaining enterprise AWS environments, building custom automation tools in Python, Bash, and Ansible, and ensuring zero-downtime operations.",
          skills: ["AWS Cloud Architect", "Python", "Bash", "Ansible", "Linux Administration", "Troubleshooting"]
        },
        {
          id: "role-boa",
          company: "Bank of America",
          role: "Sr Analyst - System Support",
          employmentType": "Full-time",
          period: "Feb 2012 – Jun 2013 · 1 yr 5 mos",
          location: "Hyderabad, Telangana, India",
          badge: "Global Banking Infrastructure",
          icon: "🏛️",
          summary: "Provisioning and configuring new servers for bank infrastructure, creating server instances in cloud environments, and resolving L3 Linux incident tickets for high-availability banking systems.",
          skills: ["System Support", "Banking Infrastructure", "Server Provisioning", "Linux L3 Incident Resolution", "Cloud Environments"]
        }
      ]
    },
    {
      id: "marriage-2013",
      year: "2013",
      date: "04 March 2013",
      title: "Marriage — Two Lives. One Unbreakable Journey.",
      category: "family",
      categoryLabel: "Marriage & Family",
      location: "Bhubaneswar, Odisha",
      tag: "Marriage",
      icon: "💍",
      thumbnail: "assets/images/marriage/family-portrait.jpg",
      summary: "Sanjeev and Swagatika married on 04 March 2013 in Bhubaneswar, beginning a sacred and joyful union of over 13 years.",
      quote: "“Marriage is not the end of independence; it is the beginning of having an unwavering partner by your side in every battle and every joy.”",
      statsBadge: "Married 04 Mar 2013 • 13+ Years Strong",
      storyParagraphs: [
        "On 4th March 2013, surrounded by the blessings of their beloved mother, families, and lifelong friends in Bhubaneswar, Sanjeev and Swagatika tied the knot in a traditional Odia wedding ceremony filled with sacred Vedic chants, laughter, and joy.",
        "That day began a shared voyage of more than 13 beautiful years (4,700+ days together). Through career transitions, city relocations across India, the sleepless nights of raising young children, and the quiet triumphs of daily life, their partnership has grown deeper, sweeter, and more resilient with each passing year.",
        "Swagatika has been his pillar of grace, wisdom, and steadfast love—creating a home full of warmth, peace, and laughter."
      ],
      takeaways: [
        "13+ years of committed, joyful marriage rooted in mutual sacrifice and unwavering love",
        "A true partnership where every challenge is faced as a united front",
        "The cornerstone of family stability that enabled professional growth and flourishing children"
      ]
    },
    {
      id: "children-fatherhood",
      year: "2010s – 2020s",
      date: "Parenthood Milestones",
      title: "Fatherhood — Our Children: Aadvika (Daughter) & Aadhees (Son)",
      category: "family",
      categoryLabel: "Fatherhood & Children",
      location: "India",
      tag: "Children Timeline",
      icon: "👨‍👧‍👦",
      thumbnail: "assets/images/children/aadvika-aadhees.jpg",
      summary: "Becoming a proud father to daughter Aadvika and son Aadhees. Explore the interactive sub-timeline for both children below.",
      quote: "“To be a father is to look at your children and realize that all your hard work, all your dreams, and all your love now have a living heartbeat.”",
      statsBadge: "Aadvika (Daughter) • Aadhees (Son) • Family Joy",
      storyParagraphs: [
        "Nothing in life transforms a man like fatherhood. Holding his daughter **Aadvika** for the first time unlocked a level of tenderness, protective instinct, and unconditional love that words cannot capture.",
        "When his son **Aadhees** arrived, the family circle was complete, bringing boundlessly energetic laughter, curiosity, and playful adventure into their daily routine.",
        "Explore the sub-timeline branches below for dedicated stories, lessons, and memories with **Aadvika** and **Aadhees**."
      ],
      takeaways: [
        "Fatherhood is the ultimate motivator for excellence, integrity, patience, and love",
        "Prioritizing presence over mere provision: creating cherished everyday memories",
        "Building a legacy of confidence, compassion, and resilience in Aadvika and Aadhees"
      ],
      childrenBranches: [
        {
          id: "child-aadvika",
          name: "Aadvika Senapati",
          relationship: "Daughter",
          approxAge: "~8 Years",
          icon: "🌸",
          tag: "Daughter",
          personality: "Curious, imaginative, compassionate, and full of spirited laughter.",
          quote: "“Watching Aadvika grow teaches me how boundless the world looks through innocent eyes.”",
          lessonsToFather: "She taught me the purest form of patience, gentle empathy, and the magic of everyday curiosity.",
          photo: "assets/images/children/aadvika.jpg"
        },
        {
          id: "child-aadhees",
          name: "Aadhees Senapati",
          relationship: "Son",
          approxAge: "~5 Years",
          icon: "🚀",
          tag: "Son",
          personality: "Energetic, playful, observant, and bringing unstoppable joy into our home.",
          quote: "“Aadhees reminds me of the simple thrill of building, exploring, and fearlessly learning something new.”",
          lessonsToFather: "He taught me that strength is gentle, and every moment spent playing is an investment in a happy memory.",
          photo: "assets/images/children/aadhees.jpg"
        }
      ]
    },
    {
      id: "cbdc-fintech",
      year: "2020 – 2025",
      date: "2020 – 2025",
      title: "Pioneering CBDC & Digital Rupee Architecture",
      category: "career",
      categoryLabel: "Fintech Innovation",
      location: "Bengaluru & Mumbai",
      tag: "CBDC",
      icon: "⚡",
      thumbnail: "assets/images/career/sanjeev-kubeday-visa.jpg",
      summary: "Leading architectural consulting, high-throughput digital currency rails, eRupee wallet integrations, Kubernetes cloud reliability, and SRE.",
      quote: "“Central Bank Digital Currency is not just another fintech app; it is the programmable sovereign foundation of national financial infrastructure.”",
      statsBadge: "CBDC • Digital Rupee • Kubernetes / KubeDay • Visa",
      storyParagraphs: [
        "In the modern era of sovereign fintech and cloud-native engineering, Sanjeev has contributed as a senior technology leader on Central Bank Digital Currency (CBDC) / Digital Rupee initiatives and enterprise payment infrastructure.",
        "Active in the cloud-native ecosystem—attending and engaging with Kubernetes communities like KubeDay while consulting at global technology leaders like Visa—he specializes in production-grade OpenShift and Kubernetes cluster reliability, microservices API gateways, and distributed financial state machines.",
        "His work bridges Core Banking Systems (CBS) with next-generation distributed ledgers, automating DR failovers, and ensuring sub-second transaction finality for high-scale financial rails."
      ],
      takeaways: [
        "Deep expertise across Kubernetes, OpenShift, and distributed cloud systems for enterprise finance",
        "At the technological forefront of sovereign digital currency transformation in India",
        "Applying Site Reliability Engineering (SRE) principles to zero-downtime payments infrastructure"
      ]
    },
    {
      id: "resilience-framework",
      year: "2025 – 2026",
      date: "Life Framework",
      title: "The 4-Stage Resilience Framework & Core Values",
      category: "life",
      categoryLabel: "Wisdom & Principles",
      location: "Mumbai",
      tag: "Resilience",
      icon: "🛡️",
      thumbnail: "assets/images/challenges/resilience-journey.jpg",
      summary: "Reflecting on 44 years of life and distilling a personal operating philosophy: Acceptance, Decoupling, Disciplined Action, and Purposeful Rebuilding.",
      quote: "“Resilience is not the absence of difficulty; it is the conscious decision to show up with dignity and purpose, no matter what happens.”",
      statsBadge: "4-Stage Framework • Core Values",
      storyParagraphs: [
        "Over four decades of navigating bereavement, major career transitions, high-stakes system outages, and family milestones, Sanjeev formalized a 4-stage framework for overcoming adversity:",
        "1. **Acknowledge & Accept Reality**: Facing facts without denial or emotional paralysis.\n2. **Decouple Emotion From Problem**: Stepping back to analyze root causes with clarity and calm.\n3. **Disciplined Action Over Inaction**: Breaking monumental challenges into structured, measurable daily steps.\n4. **Extract Wisdom & Rebuild Stronger**: Transforming every obstacle into permanent strength and empathy.",
        "These four pillars, paired with core values of integrity, family commitment, lifelong learning, and deep gratitude, guide his everyday actions."
      ],
      takeaways: [
        "A battle-tested mental model for navigating professional and personal crises with grace",
        "Focusing on the circle of control rather than worrying about external noise",
        "Leading by example for his children and engineering teams"
      ]
    },
    {
      id: "today-2026",
      year: "2026",
      date: "Present (2026 Chapter)",
      title: "Today in Mumbai — At 44: Centered, Grateful & Building",
      category: "life",
      categoryLabel: "Present Milestone",
      location: "Mumbai, Maharashtra",
      tag: "Present",
      icon: "🎯",
      thumbnail: "assets/images/today/sanjeev-portrait.jpg",
      summary: "Living in Mumbai at 44. Grounded in two decades of engineering excellence, a blessed family life, vibrant health, and focused optimism.",
      quote: "“At 44, life is no longer about proving yourself to the world; it is about providing enduring value to the people and missions that truly matter.”",
      statsBadge: "Age 44 • Mumbai Today • Centered & Active",
      storyParagraphs: [
        "In 2026, Sanjeev lives in Mumbai—India's vibrant financial capital. At 44 years of age, he stands at a deeply fulfilling vantage point: healthy, mentally centered, happily married for over 13 years, raising two wonderful children, and continuing to solve high-impact engineering challenges.",
        "His daily routine blends technical architecture consulting, mentoring young engineers, active family time with Swagatika, Aadvika, and Aadhees, and taking care of his mother's well-being.",
        "He approaches each day with profound gratitude for how far the journey has come from his childhood town of Bhadrak, while looking ahead with clear eyes and steady hands."
      ],
      takeaways: [
        "Harmonious balance of family life, health, and enterprise technology consulting",
        "Deep gratitude for the journey, the mentors, the loved ones, and the lessons learned",
        "A grounded, mature perspective that values substance, honor, and genuine relationships"
      ]
    },
    {
      id: "dream-home-shabi",
      year: "2027",
      date: "April 2027 Milestone",
      title: "Dream Home — Shabi Home",
      category: "family",
      categoryLabel: "Dream Home & Legacy",
      location: "India",
      tag: "Dream Home",
      icon: "🏡",
      thumbnail: "assets/images/future/family-vision.jpg",
      summary: "Building and moving into our dream home, named 'Shabi Home' in April 2027. A sanctuary of peace, warmth, laughter, and generational legacy for our family.",
      quote: "“A house is built by hands, but a home is built by heart, love, and family dreams.”",
      statsBadge: "April 2027 Milestone • Shabi Home 🏡",
      storyParagraphs: [
        "In **April 2027**, a long-cherished dream becomes reality with the unveiling of **Shabi Home**—our family's dream haven built on years of hard work, love, and shared ambition.",
        "Designed as a peaceful sanctuary filled with natural light, warm family spaces, a dedicated library/study, and garden corners for mother and children, **Shabi Home** stands as a testament to perseverance, sacrifice, and family unity.",
        "It is a place where **Aadvika** and **Aadhees** will build their childhood memories, where family traditions will flourish, and where every corner echoes with warmth, gratitude, and joy."
      ],
      takeaways: [
        "Achieved a major lifelong milestone of creating a permanent family haven in April 2027",
        "Named 'Shabi Home' in honor of family love, unity, and generational legacy",
        "Created a peaceful, inspiring environment for the growth of children and family harmony"
      ]
    },
    {
      id: "future-vision",
      year: "2027 & Beyond",
      date: "Future Horizons",
      title: "The Life I Want To Build — Legacy & Tomorrow's Dreams",
      category: "life",
      categoryLabel: "Future Aspirations",
      location: "India & Global",
      tag: "Future",
      icon: "🌅",
      thumbnail: "assets/images/future/family-vision.jpg",
      summary: "Looking forward with purposeful ambition: nurturing a joyful home, empowering children with wings, and creating enduring technology.",
      quote: "“The best way to honor the past and cherish the present is to build a tomorrow full of hope, courage, and love.”",
      statsBadge: "Future Horizons • Family & Legacy",
      storyParagraphs: [
        "Looking toward the next decades, Sanjeev's vision is anchored in four meaningful aspirations:",
        "• **Family & Home Sanctuary**: Maintaining a peaceful, joyful, and supportive haven where Swagatika, Aadvika, and Aadhees feel cherished and secure.\n• **Empowering the Next Generation**: Equipping his children with top-tier education, moral courage, critical thinking, and the freedom to pursue their own passions.\n• **Impactful Technology Contributions**: Mentoring engineers, contributing to public digital infrastructure, and architecting resilient distributed systems that serve society.\n• **Spiritual & Physical Longevity**: Practicing mindfulness, generosity, staying physically fit, and giving back to his community.",
        "The story continues to be written—day by day, line by line, with love and purposeful intent."
      ],
      takeaways: [
        "A forward-looking roadmap centered on family legacy and empowerment",
        "Continuing to innovate and mentor in engineering and distributed systems",
        "A life lived with honor, love, and unwavering purpose"
      ]
    }
  ]
};

// Export to window object for standalone browser usage
window.personalData = personalData;
