import { Service, Project, BlogPost, Job, Testimonial } from "./types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Modern, fast & scalable web applications.",
    icon: "Code",
    description: "We build production-grade web applications using Next.js, React and Node.js.",
    features: ["Next.js & React", "Node.js APIs", "Headless CMS", "Performance optimization"],
  },
  {
    slug: "app-development",
    title: "App Development",
    shortDesc: "Cross-platform mobile apps that users love.",
    icon: "Smartphone",
    description: "Native-feeling mobile apps built with React Native and Flutter.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store deployment"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Grow your brand with data-driven marketing.",
    icon: "Megaphone",
    description: "SEO, paid ads and social campaigns that convert.",
    features: ["SEO", "Google Ads", "Meta Ads", "Analytics & reporting"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Clean interfaces with delightful experiences.",
    icon: "Palette",
    description: "Design systems, wireframes and prototypes built with user research.",
    features: ["User research", "Wireframes", "Design systems", "Prototyping"],
  },
];

export const projects: Project[] = [
  { id: "p1", title: "E-commerce Platform", category: "web", image: "/images/project1.jpg", client: "ShopEase", description: "A modern storefront with cart & checkout.", tags: ["Next.js", "Stripe"] },
  { id: "p2", title: "Food Delivery App", category: "app", image: "/images/project2.jpg", client: "FoodieHub", description: "Cross-platform delivery app.", tags: ["React Native"] },
  { id: "p3", title: "SaaS Dashboard", category: "web", image: "/images/project3.jpg", client: "CloudMetrics", description: "Analytics dashboard with charts.", tags: ["Next.js", "Charts"] },
  { id: "p4", title: "Brand Campaign", category: "marketing", image: "/images/project4.jpg", client: "NovaBrand", description: "Full-funnel ad campaign.", tags: ["SEO", "Ads"] },
  { id: "p5", title: "Banking UI Kit", category: "uiux", image: "/images/project5.jpg", client: "FinTrust", description: "Design system for a fintech product.", tags: ["Figma"] },
  { id: "p6", title: "Portfolio Website", category: "web", image: "/images/project6.jpg", client: "Ayesha K.", description: "Personal portfolio site.", tags: ["Next.js"] },
];

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
  { id: "t1", name: "Sadia R.", role: "CEO, ShopEase", message: "Their team delivered beyond expectations.", avatar: "/images/u1.jpg" },
  { id: "t2", name: "Imran H.", role: "Founder, FoodieHub", message: "Fast, reliable and creative partner.", avatar: "/images/u2.jpg" },
];

export const jobs: Job[] = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    type: "Full-time",
    location: "Dhaka, BD",
    description: "Build pixel-perfect UIs with Next.js and Tailwind.",
    requirements: ["2+ years React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    type: "Remote",
    location: "Remote",
    description: "Design APIs and scalable services.",
    requirements: ["Node.js", "PostgreSQL", "REST/GraphQL"],
  },
];

export const clients = ["Google", "Microsoft", "Stripe", "Vercel", "Shopify"];