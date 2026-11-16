export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'Frontend / UI' | 'AI / Systems' | 'Mobile';
  tags: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; icon?: string; tag: string }[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const PERSONAL_INFO = {
  name: "Alex Morgan",
  title: "Senior Full Stack & Creative Developer",
  status: "Available for new opportunities",
  bio: "I craft high-performance web applications, fluid interfaces, and scalable distributed systems. Passionate about micro-interactions, clean architecture, and delightful user experiences.",
  location: "San Francisco, CA / Remote",
  email: "alex.morgan.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  resumeUrl: "#",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "30+" },
    { label: "Open Source Stars", value: "1.2k" },
    { label: "Client Satisfaction", value: "99%" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-ai",
    title: "Nexus Intelligence",
    tagline: "Autonomous Agent Workflow Engine",
    description: "An enterprise-grade platform orchestration layer that coordinates multi-agent LLM systems with real-time streaming, human-in-the-loop approvals, and distributed execution.",
    category: "AI / Systems",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "Redis"],
    metrics: "10x faster execution",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Sub-50ms reactive streaming UI with WebSocket backplane",
      "Interactive visual dag node-graph builder with drag-and-drop",
      "Integrated rate-limiting, token-budget guardrails and analytics"
    ]
  },
  {
    id: "apex-fintech",
    title: "Apex Horizon",
    tagline: "Real-time Crypto & Asset Dashboard",
    description: "High-frequency cryptocurrency market visualization tool featuring interactive candlestick charts, order book heatmaps, and customizable biometric-style alert thresholds.",
    category: "Full Stack",
    tags: ["Next.js", "React 19", "WebSockets", "Tailwind CSS", "Lightweight Charts"],
    metrics: "$12M+ tracked volume",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Processes 15,000+ live tick messages per second in Web Worker",
      "Ultra-low latency canvas rendering for zero UI lag",
      "Seamless dark-mode glassmorphism with instant alert badges"
    ]
  },
  {
    id: "aura-design-system",
    title: "Aura UI & Motion",
    tagline: "Fluid Component Library & Micro-interactions",
    description: "An open-source design system built from the ground up for high-fidelity animations, accessible primitives, and zero-runtime friction.",
    category: "Frontend / UI",
    tags: ["TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Storybook"],
    metrics: "45k+ weekly downloads",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Over 40 accessible compound components with WCAG AAA compliance",
      "Pre-packaged physics-based hover tilts, springs, and morphing transitions",
      "Interactive documentation with live editable sandbox"
    ]
  },
  {
    id: "pulse-sync",
    title: "PulseSync Cloud",
    tagline: "Distributed Collaborative Whiteboard",
    description: "Infinite collaborative workspace with CRDT-backed real-time multi-cursor collaboration, vector shape manipulation, and automated audio room channels.",
    category: "Full Stack",
    tags: ["Next.js", "WebRTC", "Yjs", "PostgreSQL", "Docker", "Tailwind CSS"],
    metrics: "99.99% uptime",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    highlights: [
      "Conflict-free replicated data types (CRDT) for zero-merge-conflict sync",
      "Peer-to-peer audio streams with WebRTC mesh networking",
      "Vector export engine supporting SVG, PNG, and PDF"
    ]
  },
  {
    id: "zenith-mobile",
    title: "Zenith Habit OS",
    tagline: "Minimalist Focus & Flow Tracker",
    description: "Native cross-platform application designed to eliminate digital fatigue through gamified streaks, circadian rhythm scheduling, and focus haptics.",
    category: "Mobile",
    tags: ["React Native", "Expo", "TypeScript", "Tailwind / NativeWind", "SQLite"],
    metrics: "4.9 ★ App Store rating",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    highlights: [
      "Offline-first architecture with instantaneous local sync",
      "Custom interactive haptic feedback patterns for micro-rewards",
      "Encrypted cloud backup with biometric authentication"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Interface",
    description: "Building responsive, accessible, and reactive user interfaces.",
    skills: [
      { name: "React 19 & Next.js", level: 95, tag: "Framework" },
      { name: "TypeScript", level: 92, tag: "Language" },
      { name: "Tailwind CSS & CSS3", level: 96, tag: "Styling" },
      { name: "Framer Motion & WebGL", level: 88, tag: "Animation" },
      { name: "State & Data Fetching", level: 90, tag: "Architecture" },
    ]
  },
  {
    title: "Backend & Systems",
    description: "Architecting reliable APIs, microservices, and databases.",
    skills: [
      { name: "Node.js & Express", level: 90, tag: "Runtime" },
      { name: "Python / FastAPI", level: 85, tag: "Backend" },
      { name: "PostgreSQL & Prisma", level: 88, tag: "Database" },
      { name: "Redis & WebSockets", level: 86, tag: "Real-time" },
      { name: "GraphQL & REST APIs", level: 92, tag: "API Design" },
    ]
  },
  {
    title: "Cloud & DevSecOps",
    description: "Deploying and scaling modern resilient infrastructure.",
    skills: [
      { name: "Docker & Containers", level: 84, tag: "DevOps" },
      { name: "AWS & Vercel", level: 88, tag: "Cloud" },
      { name: "CI/CD & GitHub Actions", level: 85, tag: "Automation" },
      { name: "Linux & Shell Scripting", level: 86, tag: "Systems" },
      { name: "Testing (Jest / Playwright)", level: 82, tag: "Quality" },
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2023 — Present",
    role: "Lead Full Stack Engineer",
    company: "Vanguard Tech Labs",
    location: "San Francisco, CA (Remote)",
    description: "Directing architectural decisions and engineering high-impact web products. Mentored 8 engineers and spearheaded performance optimizations.",
    achievements: [
      "Decreased Time-to-Interactive (TTI) by 42% across core customer workflows",
      "Spearheaded adoption of Next.js App Router and Edge runtime microservices",
      "Built internal design token pipeline reducing frontend feature turnaround by 30%"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "AWS"]
  },
  {
    period: "2021 — 2023",
    role: "Senior Frontend Developer",
    company: "Synthetix Digital",
    location: "New York, NY",
    description: "Designed and engineered customer-facing SaaS platforms with fluid animations, micro-interactions, and real-time collaborative whiteboarding tools.",
    achievements: [
      "Engineered real-time canvas whiteboard supporting 50+ concurrent users per room",
      "Implemented comprehensive automated testing pipeline with 90%+ code coverage",
      "Co-authored company-wide component library used by 4 product squads"
    ],
    technologies: ["React", "TypeScript", "Framer Motion", "WebSockets", "Jest"]
  },
  {
    period: "2019 — 2021",
    role: "Software Engineer",
    company: "HyperScale Studios",
    location: "Boston, MA",
    description: "Contributed to full-stack e-commerce systems, microservices APIs, and high-converting marketing experiences with pixel-perfect responsive execution.",
    achievements: [
      "Developed headless checkout flow handling over $2M in monthly transactions",
      "Integrated Stripe, PayPal, and custom fraud-detection middleware",
      "Optimized database queries, reducing average API response latency from 320ms to 45ms"
    ],
    technologies: ["Node.js", "Express", "React", "MongoDB", "Redis"]
  }
];

