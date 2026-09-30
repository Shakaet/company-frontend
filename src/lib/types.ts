export type Service = {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  category?: "Development" | "Design" | "Growth" | "Cloud";
  shortDesc: string;
  badge?: string;
  icon: string;
  heroHeadline?: string;
  description: string;
  features: string[];
  deliverables?: string[];
  benefits?: { title: string; desc: string }[];
  techStack?: string[];
  process?: { step: string; title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  pricingStartingAt?: string;
};

export type Project = {
  id: string;
  title: string;
  slug?: string;
  category: "web" | "app" | "marketing" | "uiux";
  categoryLabel?: string;
  image: string;
  client: string;
  year?: string;
  description: string;
  liveUrl?: string;
  tags: string[];
  metrics?: { value: string; label: string };
  featured?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  author: string;
  date: string;
  category: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  priceMonthly: string;
  priceQuarterly?: string;
  period: string;
  tagline: string;
  description: string;
  idealFor: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaHref: string;
};

export type Job = {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Marketing" | "Product" | "Operations";
  type: "Full-time" | "Part-time" | "Remote" | "Contract" | "Hybrid";
  workplaceType: "Remote" | "Hybrid" | "On-site";
  location: string;
  experience: string;
  salary: string;
  deadline: string;
  postedDate: string;
  featured?: boolean;
  urgent?: boolean;
  description: string;
  aboutRole?: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits?: string[];
  techStack?: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  message: string;
  avatar: string;
};