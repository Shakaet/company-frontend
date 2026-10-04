// src/lib/data.ts
// import { Service, Project, BlogPost, Job, Testimonial, PricingPlan, TeamMember } from "./types";
import {
  getJobsFromApi,
  getJobByIdFromApi,
  getRelatedJobsFromApi,
} from "./api/jobs";
// import { getPricingPlansFromApi } from "./api/pricing";

import { getPricingPlansFromApi, getGuaranteesFromApi } from "./api/pricing";

import { Service, Project, BlogPost, Job, Testimonial, PricingPlan, TeamMember, Guarantee, Highlight, Category, CompanyDetails, FounderMessage, WhyChooseUsItem, Partner, TechStackItem, Stat } from "./types";

import { getHighlightsFromApi, getCategoriesFromApi, getProjectsFromApi } from "./api/portfolio";

import { getServicesFromApi, getServiceBySlugFromApi } from "./api/services";

import { getCompanyFromApi, getTeamFromApi, getFounderMessageFromApi } from "./api/about";

import { getTestimonialsFromApi } from "./api/testimonials";

// import {
//   getWhyChooseUsFromApi,
//   getPartnersFromApi,
//   getTechStackFromApi,        // ← add
// } from "./api/homeElements";

import {
  getWhyChooseUsFromApi,
  getPartnersFromApi,
  getTechStackFromApi,
  getStatsFromApi,            // ← add
} from "./api/homeElements";

export const services: Service[] = [
  {
    id: "s-web",
    slug: "web-development",
    aliases: ["web"],
    title: "Web Application Development",
    category: "Development",
    badge: "Most Popular",
    icon: "Code",
    heroHeadline: "High-Performance Web Platforms Built for Scale & Speed",
    shortDesc: "Custom, enterprise-grade web applications built with Next.js, React, TypeScript, and robust backend APIs.",
    description: "We architect, build, and deploy production-grade web applications designed for lightning-fast performance, rock-solid security, and effortless scaling. From SaaS platforms to customer portals, we turn complex technical challenges into frictionless user experiences.",
    features: [
      "Next.js App Router & Server Components",
      "High-performance REST & GraphQL APIs",
      "Headless CMS & Database architecture",
      "Sub-second load times & 100/100 Lighthouse score",
    ],
    deliverables: [
      "Production-ready Next.js / React application codebase",
      "Fully documented RESTful or GraphQL API endpoints",
      "Responsive UI tested across 20+ mobile & desktop screen sizes",
      "Automated CI/CD deployment pipelines on Vercel or AWS",
      "Comprehensive unit, integration, and e2e test suite",
      "30 days post-launch hypercare & bug-fixing warranty",
    ],
    benefits: [
      { title: "Lightning Fast Performance", desc: "Edge rendering and intelligent caching ensure sub-second page loads." },
      { title: "SEO & Core Web Vitals Ready", desc: "Structured semantic HTML and metadata optimization for maximum search rankings." },
      { title: "Full Code Ownership", desc: "100% intellectual property transfer with clean, well-commented repository code." },
      { title: "Scalable Architecture", desc: "Built to gracefully handle spikes from hundreds to millions of concurrent users." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Docker"],
    process: [
      { step: "01", title: "Technical Discovery", desc: "We map out user flows, database architecture, third-party APIs, and security requirements." },
      { step: "02", title: "System Blueprint", desc: "Setting up repository, CI/CD, design tokens, and reusable component libraries." },
      { step: "03", title: "Agile Sprints", desc: "Two-week sprints with staging previews, continuous feedback, and live demo sessions." },
      { step: "04", title: "Testing & Launch", desc: "Stress testing, security audits, SEO checks, and production deployment with zero downtime." },
    ],
    faqs: [
      { q: "How long does a custom web development project typically take?", a: "Most projects take between 4 to 10 weeks depending on complexity, third-party integrations, and scope." },
      { q: "Do you provide maintenance and ongoing updates after launch?", a: "Yes, every build includes 30 days of warranty support, and we offer dedicated monthly SLA maintenance packages." },
      { q: "Will I have full access to the source code?", a: "Absolutely. You own 100% of the repository, assets, and deployment credentials from day one." },
    ],
    pricingStartingAt: "$2,500",
  },
  {
    id: "s-mobile",
    slug: "app-development",
    aliases: ["mobile"],
    title: "Mobile App Development",
    category: "Development",
    badge: "Cross-Platform",
    icon: "Smartphone",
    heroHeadline: "Fluid, Native-Quality iOS & Android Apps Users Adore",
    shortDesc: "Cross-platform mobile applications engineered with React Native and Flutter for seamless mobile experiences.",
    description: "We develop high-performing iOS and Android applications that feel fluid, responsive, and native. By leveraging React Native and Flutter, we save up to 40% on engineering costs while shipping simultaneous 5-star experiences to both app stores.",
    features: [
      "Cross-platform iOS & Android from a single codebase",
      "Offline-first data sync & real-time push notifications",
      "Biometric authentication & secure in-app payments",
      "Smooth 60fps native animations and intuitive gestures",
    ],
    deliverables: [
      "Signed iOS (IPA) and Android (AAB/APK) application binaries",
      "Complete App Store and Google Play Store submission handling",
      "Firebase / Supabase backend setup with Push Notification triggers",
      "In-app purchase (Stripe / Apple Pay / Google Pay) integrations",
      "Crashlytics & analytics dashboard integration",
    ],
    benefits: [
      { title: "One Codebase, Two Platforms", desc: "Reduce development cost and feature parity turnaround by up to 50%." },
      { title: "Offline Capabilities", desc: "Local SQLite/WatermelonDB storage allows full app usability without an active connection." },
      { title: "App Store Approval Guarantee", desc: "We guide your application through Apple and Google compliance reviews until live." },
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Firebase", "SQLite", "GraphQL", "Redux Toolkit"],
    process: [
      { step: "01", title: "App Wireframing", desc: "Defining mobile-first tap targets, gestures, navigation bars, and offline states." },
      { step: "02", title: "Native Prototype", desc: "Validating performance, native device bridges (camera, GPS, biometrics)." },
      { step: "03", title: "Sprint Engineering", desc: "Building UI components, state management, and real-time backend sync." },
      { step: "04", title: "App Store Publishing", desc: "Beta testing via TestFlight & Google Play Console, followed by full store release." },
    ],
    faqs: [
      { q: "Do you handle App Store and Google Play submissions?", a: "Yes, our team handles the entire preparation, asset generation, compliance forms, and submission process." },
      { q: "Can the app work offline?", a: "Yes, we architect offline-first caching and sync mechanisms so users can continue work seamlessly." },
    ],
    pricingStartingAt: "$3,200",
  },
  {
    id: "s-design",
    slug: "ui-ux-design",
    aliases: ["design"],
    title: "UI/UX & Product Design",
    category: "Design",
    badge: "Human-Centric",
    icon: "Palette",
    heroHeadline: "Captivating Interfaces Rooted in Research, Designed to Convert",
    shortDesc: "User research, scalable design systems, interactive prototypes, and conversion-optimized interfaces built in Figma.",
    description: "Great design is not just aesthetics — it is your most powerful sales driver. We craft human-centered digital experiences that guide users effortlessly from onboarding to checkout, reducing churn and boosting engagement.",
    features: [
      "In-depth user research & journey mapping",
      "Atomic Figma design systems with interactive variables",
      "High-fidelity clickable prototypes for validation",
      "Full WCAG 2.1 AA accessibility compliance",
    ],
    deliverables: [
      "Comprehensive Figma design system (components, tokens, auto-layout)",
      "Interactive click-through prototype ready for developer handoff",
      "User journey maps, wireframes, and persona documentation",
      "Ready-to-use vector iconography, typography scales, and illustration assets",
    ],
    benefits: [
      { title: "Higher Conversion Rates", desc: "Data-backed UX patterns that remove friction and maximize customer retention." },
      { title: "Seamless Dev Handoff", desc: "Engineers receive pixel-accurate specs, spacing tokens, and component states." },
      { title: "Consistent Brand Identity", desc: "A unified visual language that scales effortlessly across web and mobile products." },
    ],
    techStack: ["Figma", "Design Systems", "Prototyping", "FigJam", "User Testing", "Lottie"],
    process: [
      { step: "01", title: "User Research", desc: "Analyzing competitor gaps, user pain points, and product objectives." },
      { step: "02", title: "Low-Fi Wireframes", desc: "Architecting information hierarchy and screen navigation flow." },
      { step: "03", title: "Visual Design System", desc: "Crafting color palettes, typography, components, and responsive layouts." },
      { step: "04", title: "Handoff & Support", desc: "Interactive prototyping, dev-mode specs, and design QA during engineering." },
    ],
    faqs: [
      { q: "What design tool do you use?", a: "We primarily work in Figma so you have real-time collaborative access to leave comments and review iterations." },
      { q: "Do you design responsive layouts for tablets and phones?", a: "Yes, every screen is designed with responsive mobile, tablet, and widescreen desktop breakpoints." },
    ],
    pricingStartingAt: "$1,800",
  },
  {
    id: "s-marketing",
    slug: "digital-marketing",
    aliases: ["marketing"],
    title: "Digital Marketing & Growth",
    category: "Growth",
    badge: "ROI-Focused",
    icon: "Megaphone",
    heroHeadline: "Data-Driven Acquisition Funnels That Generate Qualified Inbound Leads",
    shortDesc: "Full-funnel digital marketing, technical SEO, performance advertising, and content strategy that converts visitors into customers.",
    description: "Building a great product is only half the battle. We create predictable customer acquisition engines using algorithmic search optimization, high-converting paid ad campaigns, and data-backed marketing funnels.",
    features: [
      "Technical SEO audits & topical authority ranking",
      "High-ROI Google, Meta & LinkedIn paid ad campaigns",
      "Landing page A/B testing & CRO (Conversion Rate Optimization)",
      "Automated email marketing sequences & CRM onboarding",
    ],
    deliverables: [
      "Comprehensive keyword research & competitor gap analysis report",
      "Configured Google Analytics 4, Tag Manager, and Conversion Tracking",
      "Ad creative variations (copy, graphics, video hooks)",
      "Bi-weekly live performance KPI reports and strategy reviews",
    ],
    benefits: [
      { title: "Predictable CAC & ROAS", desc: "Stop guessing your ad spend with structured attribution and conversion tracking." },
      { title: "Long-Term Organic Traffic", desc: "SEO-optimized topical clusters that rank on Google page 1 for high-intent keywords." },
      { title: "Transparent Reporting", desc: "Live dashboard tracking leads, conversion rates, and revenue impact in real time." },
    ],
    techStack: ["Google Ads", "Meta Ads", "Google Analytics 4", "SEMrush", "Ahrefs", "HubSpot"],
    process: [
      { step: "01", title: "Funnel Audit", desc: "Auditing your current traffic sources, bounce points, and tracking setup." },
      { step: "02", title: "Strategy & Creative", desc: "Crafting ad angles, high-intent keyword targets, and conversion landing pages." },
      { step: "03", title: "Campaign Launch", desc: "Deploying targeted campaigns with automated bid optimization." },
      { step: "04", title: "Scale & Optimize", desc: "Doubling down on winning segments while eliminating ad spend waste." },
    ],
    faqs: [
      { q: "How soon can we expect results from paid ads versus SEO?", a: "Paid campaigns begin generating leads within 48-72 hours of launch, while organic SEO builds compounding gains over 3 to 6 months." },
      { q: "Do you supply ad creatives and copywriting?", a: "Yes, our team handles copywriting, visual design, and landing page optimization end-to-end." },
    ],
    pricingStartingAt: "$1,200 / mo",
  },
  {
    id: "s-cloud",
    slug: "cloud-devops",
    aliases: ["cloud"],
    title: "Cloud & DevOps Engineering",
    category: "Cloud",
    badge: "Enterprise Grade",
    icon: "Cloud",
    heroHeadline: "Resilient Cloud Infrastructure, Automated CI/CD & 99.9% Uptime",
    shortDesc: "AWS & Docker cloud architecture, automated deployment pipelines, infrastructure as code, and 24/7 reliability monitoring.",
    description: "Scale with absolute confidence. We design fault-tolerant, automated cloud environments that withstand traffic spikes, protect sensitive data, and empower your development team to ship code 10x faster.",
    features: [
      "AWS, GCP & Vercel multi-region cloud architecture",
      "Docker containerization & Kubernetes cluster orchestration",
      "Automated GitHub Actions CI/CD pipelines",
      "Automated database backups & disaster recovery protocols",
    ],
    deliverables: [
      "Terraform Infrastructure as Code (IaC) configuration",
      "Fully automated testing & deployment CI/CD pipelines",
      "SSL, Web Application Firewall (WAF), and DDoS protection",
      "Datadog / Prometheus uptime monitoring & Slack alert webhooks",
    ],
    benefits: [
      { title: "99.9% Uptime Guarantee", desc: "Auto-scaling groups and multi-AZ deployments prevent costly downtime." },
      { title: "Reduced Cloud Bills", desc: "We audit and right-size compute resources to cut unneeded infrastructure waste." },
      { title: "Instant Rollbacks", desc: "If a deployment contains an error, automated rollbacks restore stability in seconds." },
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "PostgreSQL", "Redis"],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Analyzing current architecture for security vulnerabilities and bottlenecks." },
      { step: "02", title: "Containerization", desc: "Packaging apps with Docker for consistency between local and production." },
      { step: "03", title: "CI/CD Automation", desc: "Configuring automated test runners and deployment pipelines." },
      { step: "04", title: "Monitoring & Handover", desc: "Setting up telemetry, alerting thresholds, and runbook documentation." },
    ],
    faqs: [
      { q: "Which cloud providers do you support?", a: "We specialize in AWS, Google Cloud, DigitalOcean, and serverless platforms like Vercel and Supabase." },
      { q: "Can you help optimize our monthly AWS cloud bill?", a: "Yes, our cloud cost audit typically reduces infrastructure costs by 20% to 45%." },
    ],
    pricingStartingAt: "$1,500",
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "ShopEase Global Storefront",
    slug: "shopease-ecommerce",
    category: "web",
    categoryLabel: "Web Platform",
    client: "ShopEase Retail Inc.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
    description: "A high-performance headless e-commerce storefront with instantaneous search, dynamic carts, and multi-currency Stripe checkout.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "TypeScript", "Algolia"],
    metrics: { value: "+140%", label: "Checkout Conversion" },
    featured: true,
  },
  {
    id: "p2",
    title: "FoodieHub Delivery App",
    slug: "foodiehub-delivery",
    category: "app",
    categoryLabel: "Mobile App",
    client: "FoodieHub Networks",
    year: "2024",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&q=80",
    description: "Cross-platform iOS and Android food delivery ecosystem featuring real-time driver GPS tracking and instant in-app payments.",
    tags: ["React Native", "Node.js", "WebSockets", "Google Maps", "Redux"],
    metrics: { value: "500k+", label: "Active Mobile Downloads" },
    featured: true,
  },
  {
    id: "p3",
    title: "CloudMetrics Analytics SaaS",
    slug: "cloudmetrics-saas",
    category: "web",
    categoryLabel: "SaaS Dashboard",
    client: "CloudMetrics Technologies",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    description: "Multi-tenant cloud analytics dashboard rendering millions of real-time telemetry events with sub-100ms querying.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Docker"],
    metrics: { value: "99.99%", label: "Uptime Availability" },
    featured: true,
  },
  {
    id: "p4",
    title: "FinTrust Digital Banking Design",
    slug: "fintrust-banking-design",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    client: "FinTrust Financial",
    year: "2024",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80",
    description: "Comprehensive Figma design system with 200+ reusable atomic tokens for a next-generation mobile banking experience.",
    tags: ["Figma", "Design System", "WCAG 2.1", "Prototyping"],
    metrics: { value: "4.9 / 5.0", label: "App Store User Rating" },
    featured: false,
  },
  {
    id: "p5",
    title: "NovaBrand Global Acquisition",
    slug: "novabrand-growth-campaign",
    category: "marketing",
    categoryLabel: "Growth & SEO",
    client: "NovaBrand Consumer Group",
    year: "2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    description: "Full-funnel digital growth strategy blending programmatic SEO keyword ranking with high-ROAS paid Meta and Google campaigns.",
    tags: ["Technical SEO", "Google Ads", "Meta Ads", "GA4 Analytics"],
    metrics: { value: "3.8x", label: "Return on Ad Spend" },
    featured: false,
  },
  {
    id: "p6",
    title: "MediConnect Telehealth Suite",
    slug: "mediconnect-telehealth",
    category: "web",
    categoryLabel: "Web Platform",
    client: "MediConnect Health",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    description: "HIPAA-compliant telemedicine web portal enabling encrypted WebRTC video visits, digital prescription management, and appointment sync.",
    tags: ["Next.js", "WebRTC", "HIPAA", "Tailwind CSS", "Node.js"],
    metrics: { value: "45k+", label: "Patient Consultations" },
    featured: false,
  },
  {
    id: "p7",
    title: "FitPulse AI Mobile Coach",
    slug: "fitpulse-mobile-coach",
    category: "app",
    categoryLabel: "Mobile App",
    client: "FitPulse Wellness Corp",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&q=80",
    description: "AI-powered fitness training app featuring computer vision posture analysis, real-time audio guidance, and personalized workout routines.",
    tags: ["React Native", "TensorFlow Lite", "FastAPI", "iOS & Android"],
    metrics: { value: "350k+", label: "Active Mobile Users" },
    featured: true,
  },
  {
    id: "p8",
    title: "Lumina Smart Ecosystem Design",
    slug: "lumina-smart-ecosystem",
    category: "uiux",
    categoryLabel: "UI/UX & IoT",
    client: "Lumina Smart Devices",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
    description: "Intuitive touch dashboard and mobile companion interface designed for smart home automation, climate control, and real-time energy telemetry.",
    tags: ["Figma", "Design Tokens", "Interaction Design", "Dark Mode"],
    metrics: { value: "98.7%", label: "Task Completion Rate" },
    featured: false,
  },
];

export async function getProjects(): Promise<Project[]> {
  return getProjectsFromApi();
}

export const blogs: BlogPost[] = [
  {
    slug: "why-nextjs",
    title: "Why We Choose Next.js in 2025",
    excerpt: "Server components, edge rendering and more.",
    content: "<p>Next.js gives us the best of both worlds...</p>",
    cover: "/images/blog1.jpg",
    author: "Rahim",
    date: "2025-01-12",
    category: "Engineering",
  },
  {
    slug: "seo-basics",
    title: "SEO Basics Every Startup Must Know",
    excerpt: "Rank higher with these fundamentals.",
    content: "<p>SEO is not magic, it is consistency...</p>",
    cover: "/images/blog2.jpg",
    author: "Karim",
    date: "2025-02-04",
    category: "Marketing",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sadia Rahman",
    role: "CEO & Co-Founder",
    company: "ShopEase Retail Inc.",
    message: "ITStartup engineered our headless e-commerce store with Next.js and Stripe. Our site speed improved by 300% and checkout conversions increased by 140%. Their code architecture and speed of delivery are simply phenomenal.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    rating: 5,
    projectTag: "Headless E-Commerce",
    highlightMetric: { value: "+140%", label: "Conversion Lift" },
  },
  {
    id: "t2",
    name: "Imran Hossain",
    role: "Founder & Product Lead",
    company: "FoodieHub Networks",
    message: "We hired their dedicated mobile pod to build our iOS and Android delivery apps with React Native. They delivered ahead of schedule with zero critical bugs. Their asynchronous communication made collaboration effortless.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    rating: 5,
    projectTag: "Mobile Engineering",
    highlightMetric: { value: "500k+", label: "App Downloads" },
  },
  {
    id: "t3",
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "CloudMetrics SaaS",
    message: "The SaaS dashboard they built processes millions of telemetry events with sub-100ms response times. Their mastery over PostgreSQL indexing, Next.js server components, and Docker is world-class.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rating: 5,
    projectTag: "Cloud Analytics SaaS",
    highlightMetric: { value: "99.99%", label: "Uptime SLA" },
  },
  {
    id: "t4",
    name: "Elena Rostova",
    role: "Head of Product Design",
    company: "FinTrust Financial",
    message: "Translating a 200+ component banking design system into accessible, pixel-perfect React components was executed flawlessly by ITStartup. They don't just write code; they care deeply about user experience.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    rating: 5,
    projectTag: "Design Systems & UI/UX",
    highlightMetric: { value: "4.9 / 5.0", label: "UX Rating" },
  },
];

export async function getTestimonials(): Promise<Testimonial[]> {
  return getTestimonialsFromApi();
}

export const jobs: Job[] = [
  {
    id: "frontend-dev",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    type: "Full-time",
    workplaceType: "Hybrid",
    location: "Dhaka, Bangladesh",
    experience: "3+ Years",
    salary: "$1,200 - $2,000 / month",
    deadline: "May 15, 2025",
    postedDate: "3 days ago",
    featured: true,
    urgent: true,
    description: "Lead the frontend architecture of high-performance web applications using Next.js 15, React 19, TypeScript, and modern CSS frameworks.",
    aboutRole: "As a Senior Frontend Engineer at ITStartup, you will lead the creation of responsive, ultra-smooth web applications. You will collaborate closely with UI/UX designers and backend engineers to craft intuitive user experiences that scale to hundreds of thousands of users.",
    responsibilities: [
      "Architect and build reusable, performant React & Next.js components",
      "Optimize web applications for maximum speed, SEO, and accessibility (Core Web Vitals)",
      "Collaborate with backend engineers to integrate RESTful and GraphQL APIs seamlessly",
      "Participate in code reviews, mentor junior frontend developers, and establish code quality standards",
      "Translate Figma design systems into pixel-perfect, responsive components",
    ],
    requirements: [
      "3+ years of professional experience with React, Next.js, and TypeScript",
      "Deep understanding of Tailwind CSS, modern CSS layouts, and micro-interactions",
      "Proven track record with state management, caching, and server components",
      "Strong debugging, profiling, and performance optimization skills",
      "Experience with Git workflows, CI/CD pipelines, and automated testing",
    ],
    niceToHave: [
      "Experience with Framer Motion, GSAP, or canvas animations",
      "Familiarity with Docker and edge deployment platforms like Vercel or AWS",
      "Contributions to open-source libraries or tech blogs",
    ],
    benefits: [
      "Competitive monthly salary with twice-a-year performance reviews",
      "Hybrid work policy (2 days work-from-home per week)",
      "Health & medical allowance for you and immediate family",
      "Latest M-series MacBook Pro and workstation setup allowance",
      "Annual sponsored retreats and bi-monthly team dinners",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API", "Git", "Figma"],
  },
  {
    id: "backend-dev",
    title: "Backend / Cloud Engineer",
    department: "Engineering",
    type: "Full-time",
    workplaceType: "Remote",
    location: "Remote (Global)",
    experience: "4+ Years",
    salary: "$1,500 - $2,400 / month",
    deadline: "May 25, 2025",
    postedDate: "1 week ago",
    featured: true,
    urgent: false,
    description: "Design high-throughput distributed microservices, APIs, and robust database architectures using Node.js, Go, PostgreSQL, and AWS.",
    aboutRole: "We are seeking a talented Backend Engineer to power our core client platforms. You will handle database architecture, API security, queue systems, and multi-tenant SaaS backends with guaranteed 99.9% uptime.",
    responsibilities: [
      "Design, implement, and maintain scalable APIs using Node.js / TypeScript / Go",
      "Architect relational and NoSQL databases (PostgreSQL, Redis, MongoDB) with optimized indexing",
      "Implement authentication, authorization (OAuth2, JWT), and security compliance standards",
      "Containerize services using Docker and orchestrate deployments with AWS / Kubernetes",
      "Monitor application performance and uptime using Datadog, Prometheus, and Grafana",
    ],
    requirements: [
      "4+ years of backend development experience with Node.js / Express / NestJS or Go",
      "Deep knowledge of relational database design, query optimization, and transaction management",
      "Hands-on experience with cloud infrastructure (AWS EC2, S3, RDS, Lambda)",
      "Solid understanding of REST, GraphQL, WebSockets, and Message Queues (RabbitMQ/Kafka)",
      "Self-driven mindset with experience working in asynchronous remote teams",
    ],
    niceToHave: [
      "Familiarity with Terraform / Infrastructure as Code",
      "Experience scaling applications to 100k+ daily active users",
      "Knowledge of microservices communication patterns and gRPC",
    ],
    benefits: [
      "100% remote flexibility from anywhere in the world",
      "Home office setup reimbursement ($600 USD)",
      "Annual learning and certification stipend ($500 USD)",
      "Paid annual leaves + regional public holidays",
      "Profit-sharing bonus based on annual company milestones",
    ],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL"],
  },
  {
    id: "uiux-designer",
    title: "Lead UI/UX Product Designer",
    department: "Design",
    type: "Full-time",
    workplaceType: "Hybrid",
    location: "Dhaka, Bangladesh",
    experience: "3+ Years",
    salary: "$1,000 - $1,800 / month",
    deadline: "May 20, 2025",
    postedDate: "5 days ago",
    featured: false,
    urgent: true,
    description: "Craft modern, delightful, and human-centric user experiences, comprehensive design systems, and prototypes for global tech startups.",
    aboutRole: "As our Lead UI/UX Product Designer, you will turn complex user journeys into elegant, intuitive interfaces. You'll work side-by-side with product managers and engineers to build designs that captivate and convert.",
    responsibilities: [
      "Conduct user research, persona creation, user journey mapping, and wireframing",
      "Build and maintain a scalable Figma design system with components and tokens",
      "Create high-fidelity interactive prototypes for stakeholder testing and validation",
      "Collaborate with frontend engineers to guarantee design integrity during development",
      "Analyze user metrics and feedback to iterate and improve existing UI workflows",
    ],
    requirements: [
      "3+ years of UI/UX design experience for SaaS, web apps, or mobile applications",
      "World-class portfolio demonstrating clean visual design and strong typography",
      "Mastery of Figma, auto-layout, interactive components, and token variables",
      "Deep understanding of design thinking, user-centric methodologies, and accessibility (WCAG)",
      "Excellent communication and presentation skills in English",
    ],
    niceToHave: [
      "Basic understanding of HTML/CSS capabilities and frontend constraints",
      "Experience with motion design using tools like Rive, Lottie, or After Effects",
      "Experience designing complex B2B dashboards or fintech interfaces",
    ],
    benefits: [
      "State-of-the-art Apple workstation with secondary 4K display",
      "Figma Enterprise subscription and premium asset library access",
      "Annual design conference ticket sponsorship",
      "Flexible working hours and hybrid arrangement",
      "Festival bonuses and wellness package",
    ],
    techStack: ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing"],
  },
  {
    id: "fullstack-engineer",
    title: "Full Stack Next.js & Node Developer",
    department: "Engineering",
    type: "Full-time",
    workplaceType: "Remote",
    location: "Remote",
    experience: "2+ Years",
    salary: "$1,100 - $1,700 / month",
    deadline: "June 05, 2025",
    postedDate: "2 weeks ago",
    featured: false,
    urgent: false,
    description: "Build end-to-end client applications leveraging the latest Next.js App Router, Prisma ORM, PostgreSQL, and modern cloud deployment stacks.",
    aboutRole: "We are seeking a versatile Full Stack Developer who loves building complete features from database schema design to responsive client UI. You will ship features quickly while ensuring clean architecture and maintainability.",
    responsibilities: [
      "Develop full-stack web applications using Next.js App Router, Server Actions, and Node.js",
      "Design database models using Prisma / Drizzle with PostgreSQL",
      "Implement secure authentication with NextAuth / Supabase / Clerk",
      "Build responsive, modern UI components with Tailwind CSS",
      "Participate in daily standups and sprint planning sessions",
    ],
    requirements: [
      "2+ years of full-stack JavaScript / TypeScript development experience",
      "Hands-on experience with Next.js (App Router), React, and Node.js",
      "Good knowledge of SQL, ORMs (Prisma / Drizzle), and relational database concepts",
      "Understanding of RESTful API design, state management, and async patterns",
      "Familiarity with version control using Git and GitHub",
    ],
    niceToHave: [
      "Experience with Supabase, Firebase, or Serverless edge functions",
      "Familiarity with Tailwind v4 and modern CSS tooling",
      "Prior experience in an agile agency or product startup setting",
    ],
    benefits: [
      "100% remote freedom with async communication culture",
      "Internet and co-working space stipend",
      "Annual salary review and project milestone incentives",
      "Generous paid vacation and sick leave policy",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "digital-marketing-specialist",
    title: "Growth & Digital Marketing Strategist",
    department: "Marketing",
    type: "Full-time",
    workplaceType: "On-site",
    location: "Dhaka, Bangladesh",
    experience: "2+ Years",
    salary: "$800 - $1,300 / month",
    deadline: "May 30, 2025",
    postedDate: "4 days ago",
    featured: false,
    urgent: false,
    description: "Drive organic and paid growth, execute high-converting digital campaigns, and scale inbound leads for international tech clients.",
    aboutRole: "Join our fast-growing growth team to develop and execute multi-channel digital marketing campaigns. You will oversee SEO, content strategy, paid ad performance, and analytics tracking.",
    responsibilities: [
      "Plan and execute data-driven campaigns across Google Ads, Meta Ads, and LinkedIn Ads",
      "Conduct in-depth keyword research, technical SEO audits, and content optimization",
      "Manage social media presence and craft engaging tech-focused copywriting",
      "Track, analyze, and report on key campaign KPIs using Google Analytics 4 & Search Console",
      "A/B test landing pages, ad creatives, and lead funnels to maximize conversion rates",
    ],
    requirements: [
      "2+ years of hands-on digital marketing or performance marketing experience",
      "Proven track record managing paid campaigns with measurable ROI",
      "Strong proficiency with Google Ads, Meta Business Suite, GA4, and SEO tools (Ahrefs / SEMrush)",
      "Excellent written English communication and copywriting skills",
      "Data-driven mindset with analytical problem-solving abilities",
    ],
    niceToHave: [
      "Experience marketing B2B SaaS products or agency services",
      "Knowledge of basic HTML/CSS or CMS platforms like WordPress/Webflow",
      "Certifications in Google Ads / HubSpot / Meta Blueprint",
    ],
    benefits: [
      "Attractive performance-linked bonuses on campaign targets",
      "Continuous marketing education and training certifications",
      "Vibrant creative office environment with snacks and coffee",
      "Bi-annual appraisals and clear leadership promotion track",
    ],
    techStack: ["Google Ads", "Meta Ads", "SEO", "Google Analytics 4", "SEMrush", "Content Strategy"],
  },
];

export const companyPerks = [
  {
    icon: "Laptop",
    title: "Latest Apple Workstations",
    description: "Every full-time teammate receives the latest M-series MacBook Pro and high-res display for seamless productivity.",
  },
  {
    icon: "Heart",
    title: "Comprehensive Health & Wellness",
    description: "Medical coverage for you and your family, mental health support, and annual wellness allowances.",
  },
  {
    icon: "Globe",
    title: "Flexible & Hybrid Culture",
    description: "Work from our modern collaborative Dhaka hub or work remotely with core collaborative hours.",
  },
  {
    icon: "GraduationCap",
    title: "Learning & Growth Stipend",
    description: "Annual budget for books, online courses, technical certifications, and international tech conferences.",
  },
  {
    icon: "TrendingUp",
    title: "Performance & Festival Bonuses",
    description: "Twice-a-year festival bonuses, annual performance appraisals, and attractive project milestone rewards.",
  },
  {
    icon: "Sun",
    title: "Generous Paid Time Off",
    description: "20+ days of paid time off, parental leave, bereavement leave, and all national public holidays.",
  },
  {
    icon: "Coffee",
    title: "Vibrant Hub & Team Hangouts",
    description: "Unlimited premium coffee, catered lunches, PlayStation arena, and memorable bi-annual company retreats.",
  },
  {
    icon: "Users",
    title: "Mentorship & Flat Hierarchy",
    description: "Collaborate directly with founders, principal architects, and senior peers with zero unnecessary red tape.",
  },
];

export const hiringSteps = [
  {
    step: "01",
    title: "Online Application",
    duration: "10 mins",
    desc: "Submit your resume, portfolio link, and a brief note about why you want to build with us.",
  },
  {
    step: "02",
    title: "Introductory Chat",
    duration: "30 mins",
    desc: "A friendly 30-minute conversation with our talent team to discuss your goals and mutual culture fit.",
  },
  {
    step: "03",
    title: "Technical Review / Task",
    duration: "2 - 3 days",
    desc: "A hands-on practical assignment or system architecture walkthrough tailored to your discipline.",
  },
  {
    step: "04",
    title: "Offer & Welcome",
    duration: "Within 48h",
    desc: "We discuss compensation, perks, and onboarding date to welcome you to the ITStartup family!",
  },
];

// ─────────────────────────────────────────────
// Job helpers — now wired to the live API
// ─────────────────────────────────────────────

export async function getJobs(): Promise<Job[]> {
  return getJobsFromApi();
}

export async function getJobById(id: string): Promise<Job | undefined> {
  return getJobByIdFromApi(id);
}

export async function getRelatedJobs(
  currentId: string,
  department?: string
): Promise<Job[]> {
  return getRelatedJobsFromApi(currentId, department);
}

// ─────────────────────────────────────────────
// Service helpers (still static — API later)
// ─────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  return getServicesFromApi();
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return getServiceBySlugFromApi(slug);
}

export async function getRelatedServices(
  currentSlug: string,
  category?: string
): Promise<Service[]> {
  const normalized = currentSlug.toLowerCase();
  const all = await getServices();
  const currentService = all.find(
    (s) =>
      s.slug === normalized ||
      s.aliases?.some((a) => a.toLowerCase() === normalized)
  );
  const targetCategory = category || currentService?.category;

  const sameCategory = all.filter(
    (s) => s.slug !== normalized && targetCategory && s.category === targetCategory
  );

  if (sameCategory.length >= 2) return sameCategory.slice(0, 3);
  return all.filter((s) => s.slug !== normalized).slice(0, 3);
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "mvp-starter",
    name: "MVP & Prototype",
    badge: "Fast Launch",
    popular: false,
    priceMonthly: "$2,499",
    priceQuarterly: "$2,199",
    period: "per month",
    tagline: "Ideal for early-stage founders seeking a rapid, production-ready MVP.",
    description: "A dedicated senior engineer and UI/UX designer delivering bi-weekly working sprints.",
    idealFor: "Early startups, MVPs & product validation",
    features: [
      "1 Dedicated Senior Fullstack Engineer",
      "Part-time UI/UX Designer & Prototyping",
      "Next.js App Router, React 19 & Tailwind CSS",
      "Node.js, PostgreSQL or Supabase backend",
      "Bi-weekly sprint demos & staging previews",
      "Direct Slack / WhatsApp channel communication",
      "100% Code & Intellectual Property ownership",
      "Basic SEO, analytics & performance setup",
      "30-day post-launch bug warranty",
    ],
    notIncluded: [
      "Dedicated 24/7 DevOps on-call",
      "Custom SOC2 / HIPAA compliance audits",
    ],
    ctaText: "Start MVP Sprint",
    ctaHref: "/contact",
  },
  {
    id: "growth-squad",
    name: "Growth Squad",
    badge: "Most Popular",
    popular: true,
    priceMonthly: "$4,999",
    priceQuarterly: "$4,499",
    period: "per month",
    tagline: "Our flagship engineering pod for scaling products and active roadmaps.",
    description: "A full cross-functional team shipping features continuously with guaranteed sprint velocity.",
    idealFor: "Funded startups, scale-ups & active products",
    features: [
      "2 Dedicated Senior Fullstack Engineers",
      "1 Dedicated UI/UX & Design Systems Lead",
      "1 Dedicated QA & Automation Engineer",
      "Web, iOS & Android (React Native / Flutter)",
      "Automated CI/CD pipelines & Docker orchestration",
      "Daily asynchronous standups & weekly sprint demos",
      "99.9% Uptime SLA & continuous monitoring",
      "Direct CTO / Principal Architect advisory",
      "Unlimited design & code revisions within sprint",
      "60-day post-launch priority support",
    ],
    notIncluded: [],
    ctaText: "Deploy Growth Squad",
    ctaHref: "/contact",
  },
  {
    id: "enterprise-custom",
    name: "Dedicated Pod",
    badge: "Enterprise Scale",
    popular: false,
    priceMonthly: "$8,999",
    priceQuarterly: "$7,999",
    period: "per month",
    tagline: "Autonomous multi-disciplinary team tailored for mission-critical software.",
    description: "High-throughput engineering pods with custom cloud architecture, compliance, and 24/7 monitoring.",
    idealFor: "Enterprises, complex platforms & fintech/healthtech",
    features: [
      "4+ Senior Fullstack & Cloud Engineers",
      "Lead Solutions Architect & Scrum Master",
      "Senior Product Designer & Research Lead",
      "Multi-cloud infrastructure (AWS / GCP / Kubernetes)",
      "Strict 99.99% Uptime SLA with 24/7 on-call",
      "SOC2, ISO 27001 & OWASP security audits",
      "Custom third-party enterprise integrations",
      "Dedicated Account Executive & monthly roadmap reviews",
      "Guaranteed 30-min emergency response SLA",
    ],
    notIncluded: [],
    ctaText: "Talk to Solutions Architect",
    ctaHref: "/contact",
  },
];

export async function getPricingPlans(): Promise<PricingPlan[]> {
  return getPricingPlansFromApi();
}

export async function getGuarantees(): Promise<Guarantee[]> {
  return getGuaranteesFromApi();
}

export const clients = ["Google", "Microsoft", "Stripe", "Vercel", "Shopify"];

export const teamMembers: TeamMember[] = [
  {
    id: "rahim-uddin",
    name: "Rahim Uddin",
    role: "Founder & Chief Executive Officer",
    department: "Executive & Strategy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    bio: "10+ years architecting enterprise software, scaling startups, and leading high-velocity engineering pods across North America and Europe.",
    expertise: ["Product Strategy", "System Architecture", "Venture Scale"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "karim-ahmed",
    name: "Karim Ahmed",
    role: "Chief Technology Officer",
    department: "Engineering Leadership",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    bio: "Distributed systems and cloud architecture specialist with deep mastery in Next.js Server Components, PostgreSQL, and scalable microservices.",
    expertise: ["Distributed Systems", "Next.js", "Docker & Kubernetes"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "sadia-rahman",
    name: "Sadia Rahman",
    role: "Head of Product Design & UI/UX",
    department: "Design & Research",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    bio: "Human-centered design leader crafting intuitive design systems, conversion-driven SaaS dashboards, and delightful mobile experiences.",
    expertise: ["Design Systems", "Figma", "User Research"],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "VP of Mobile Engineering",
    department: "Mobile Development",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    bio: "Pioneering cross-platform mobile apps on React Native and Flutter with real-time WebSockets, offline sync, and sub-second rendering.",
    expertise: ["React Native", "iOS & Android", "Real-Time Sync"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Principal DevOps & Cloud Architect",
    department: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    bio: "Infrastructure-as-code evangelist designing resilient multi-region AWS environments, automated CI/CD pipelines, and 99.99% uptime SLAs.",
    expertise: ["AWS Multi-Region", "Terraform", "Automated CI/CD"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "tanvir-hasan",
    name: "Tanvir Hasan",
    role: "Lead Growth & Performance Strategist",
    department: "Marketing & Growth",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    bio: "Data-driven growth hacker specializing in technical SEO topical clusters, paid Meta & Google ad funnels, and programmatic CAC reduction.",
    expertise: ["Technical SEO", "Full-Funnel CRO", "Paid Acquisition"],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

export async function getTeamMembers(): Promise<TeamMember[]> {
  return getTeamFromApi();
}

export async function getHighlights(): Promise<Highlight[]> {
  return getHighlightsFromApi();
}

export async function getCategories(): Promise<Category[]> {
  return getCategoriesFromApi();
}

export async function getCompany(): Promise<CompanyDetails | null> {
  return getCompanyFromApi();
}

export async function getFounderMessage(): Promise<FounderMessage | null> {
  return getFounderMessageFromApi();
}

export async function getWhyChooseUs(): Promise<WhyChooseUsItem[]> {
  return getWhyChooseUsFromApi();
}

export async function getPartners(): Promise<Partner[]> {
  return getPartnersFromApi();
}

export async function getTechStack(): Promise<TechStackItem[]> {
  return getTechStackFromApi();
}

export async function getStats(): Promise<Stat[]> {
  return getStatsFromApi();
}