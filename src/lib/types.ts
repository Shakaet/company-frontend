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
  company?: string;
  message: string;
  avatar: string;
  rating?: number;
  highlightMetric?: { value: string; label: string };
  projectTag?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  expertise: string[];
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
};


// ─────────────────────────────────────────────
// Banner
// ─────────────────────────────────────────────

/** Clean shape used by components */
export type Banner = {
  id: string;
  image: string;
  alt: string;
};

/** Raw shape from GET /api/v1/banner/ */
export type BannerApiItem = {
  _id: string;
  banner_image: string;
  banner_image_key: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type BannerApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: BannerApiItem[];
};

// ─────────────────────────────────────────────
// Contact / Inquiry
// ─────────────────────────────────────────────

export type ContactPayload = {
  inquiryType: string;       // "New Project" | "General" | etc.
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  requestNda: number;        // API expects 1 or 0 (converted to bool on server)
  status: string;            // "pending" by default
};

export type ContactApiData = ContactPayload & {
  _id: string;
  requestNda: boolean;       // response comes back as boolean
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ContactApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: ContactApiData;
};


// ─────────────────────────────────────────────
// Job (API shape — matches /api/v1/career/jobs)
// ─────────────────────────────────────────────

export type JobDepartment =
  | "Engineering"
  | "Design"
  | "Marketing"
  | "Product"
  | "Operations";

export type JobType =
  | "Full-time"
  | "Part-time"
  | "Remote"
  | "Contract"
  | "Hybrid";

export type JobWorkplaceType = "Remote" | "Hybrid" | "On-site";

export type JobApiItem = {
  _id: string;
  title: string;
  department: string;
  type: string;
  workplaceType: string;
  location: string;
  experience: string;
  salary: string;
  deadline: string;
  postedDate: string;
  featured: boolean;
  urgent: boolean;
  description: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  techStack: string[];
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type JobApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: JobApiItem[];
};

export type JobApiSingleResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: JobApiItem;
};

// ─────────────────────────────────────────────
// Job Application (POST /api/v1/career/apply)
// ─────────────────────────────────────────────

export type ApplicationPayload = {
  fullName: string;
  email: string;
  experience: string;
  noticePeriod: string;
  resumeLink: string;
  agreeConsent: boolean;
  jobTitle: string;      // the job's title text (e.g. "Devops")
  status: string;        // "pending"
};

export type ApplicationApiData = ApplicationPayload & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ApplicationValidationError = {
  path: string;
  message: string;
};

export type ApplicationApiResponse =
  | {
    statusCode: number;
    success: true;
    message: string;
    data: ApplicationApiData;
  }
  | {
    statusCode?: number;
    success: false;
    message: string;
    errorMessages?: ApplicationValidationError[];
  };

// ─────────────────────────────────────────────
// Pricing (GET /api/v1/pricing/plans)
// ─────────────────────────────────────────────

export type PricingApiItem = {
  _id: string;
  name: string;
  badge: string;
  popular: boolean;
  priceMonthly: string;
  priceQuarterly: string;
  period: string;
  tagline: string;
  description: string;
  idealFor: string;
  features: string[];
  notIncluded: string[];
  ctaText: string;
  ctaHref: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type PricingApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: PricingApiItem[];
};

// ─────────────────────────────────────────────
// Pricing Guarantees (GET /api/v1/pricing/guarantees)
// ─────────────────────────────────────────────

export type Guarantee = {
  id: string;
  icon: string;       // "PERN", "MERN", or an icon name
  label: string;
  desc: string;
};

export type GuaranteeApiItem = {
  _id: string;
  icon: string;
  label: string;
  desc: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type GuaranteeApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: GuaranteeApiItem[];
};

// ─────────────────────────────────────────────
// Portfolio Highlights (GET /api/v1/portfolio/highlights)
// ─────────────────────────────────────────────

export type Highlight = {
  id: string;
  value: string;   // "300+"
  label: string;   // "MERN projects done"
};

export type HighlightApiItem = {
  _id: string;
  value: string;
  label: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type HighlightApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: HighlightApiItem[];
};

// ─────────────────────────────────────────────
// Portfolio Categories (GET /api/v1/portfolio/categories)
// ─────────────────────────────────────────────

export type Category = {
  id: string;
  name: string;   // display label: "Web"
  value: string;  // filter value:  "web"
};

export type CategoryApiItem = {
  _id: string;
  name: string;
  value: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type CategoryApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: CategoryApiItem[];
};

// ─────────────────────────────────────────────
// Portfolio Projects (GET /api/v1/portfolio/projects)
// ─────────────────────────────────────────────

export type ProjectCategoryRef = {
  _id: string;
  name: string;
  value: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ProjectApiItem = {
  _id: string;
  title: string;
  category: ProjectCategoryRef;
  image: string;
  client: string;
  year: string;
  description: string;
  liveUrl: string;
  tags: string[];
  featured: boolean;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ProjectApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: ProjectApiItem[];
};

// ─────────────────────────────────────────────
// Services (GET /api/v1/services)
// ─────────────────────────────────────────────

export type ServiceBenefit = {
  title: string;
  desc: string;
  _id?: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceApiItem = {
  _id: string;
  title: string;
  slug: string;
  category: string;                 // "Digital Marketing" etc.
  shortDesc: string;
  icon: string;                     // Cloudinary URL, not an icon name
  icon_key?: string;
  description: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  status: "active" | "inactive" | string;
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  badge?: string;
  heroHeadline?: string;
  pricingStartingAt?: string;
  aliases?: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ServiceApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: ServiceApiItem[];
};

// ─────────────────────────────────────────────
// Single Service (GET /api/v1/services/:slug)
// ─────────────────────────────────────────────

export type ServiceApiSingleResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: ServiceApiItem;   // reuses the item type you already added
};

// ─────────────────────────────────────────────
// Service Consultation (POST /api/v1/services/consultations)
// ─────────────────────────────────────────────

export type ConsultationPayload = {
  serviceTitle: string;
  serviceSlug: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
  projectDetails: string;
  status: string;
};

export type ConsultationApiData = ConsultationPayload & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ConsultationValidationError = {
  path: string;
  message: string;
};

export type ConsultationApiResponse =
  | {
    statusCode: number;
    success: true;
    message: string;
    data: ConsultationApiData;
  }
  | {
    statusCode?: number;
    success: false;
    message: string;
    errorMessages?: ConsultationValidationError[];
  };

// ─────────────────────────────────────────────
// About / Company (GET /api/v1/about/company)
// ─────────────────────────────────────────────

export type CompanyStat = {
  value: string;
  label: string;
};

export type CompanyValue = {
  icon: string;    // Lucide icon name, e.g. "Star"
  title: string;
  desc: string;
};

export type CompanyDetails = {
  stats: CompanyStat[];
  story: string[];
  values: CompanyValue[];
  updatedAt?: string;
};

export type CompanyStatApiItem = {
  value: string;
  label: string;
  _id: string;
};

export type CompanyValueApiItem = {
  icon: string;
  title: string;
  desc: string;
  _id: string;
};

export type CompanyApiItem = {
  _id: string;
  stats: CompanyStatApiItem[];
  story: string[];
  values: CompanyValueApiItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type CompanyApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: CompanyApiItem;
};

// ─────────────────────────────────────────────
// Team Members (GET /api/v1/about/team)
// ─────────────────────────────────────────────

export type TeamMemberApiItem = {
  _id: string;
  name: string;
  role: string;
  image: string;
  image_key?: string;
  bio: string;
  status: "active" | "inactive" | string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TeamApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: TeamMemberApiItem[];
};

// ─────────────────────────────────────────────
// Founder Message (GET /api/v1/about/founder-message)
// ─────────────────────────────────────────────

export type FounderStat = {
  value: string;
  label: string;
};

export type FounderMessage = {
  image: string;
  name: string;
  role: string;
  shortDesc: string;
  highlightQuote: string;
  paragraphs: string[];
  commitments: string[];
  stats: FounderStat[];
  message: string;
  updatedAt?: string;
};

export type FounderStatApiItem = {
  value: string;
  label: string;
  _id?: string;
};

export type FounderApiItem = {
  _id: string;
  image: string;
  image_key?: string;
  name: string;
  role: string;
  shortDesc: string;
  stats: FounderStatApiItem[];
  highlightQuote: string;
  paragraphs: string[];
  commitments: any[];
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type FounderApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: FounderApiItem;
};

// ─────────────────────────────────────────────
// Testimonials (GET /api/v1/home-elements/testimonials)
// ─────────────────────────────────────────────

export type TestimonialApiItem = {
  _id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  message: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TestimonialApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: TestimonialApiItem[];
};

// ─────────────────────────────────────────────
// Why Choose Us (GET /api/v1/home-elements/why-choose-us)
// ─────────────────────────────────────────────

export type WhyChooseUsItem = {
  id: string;
  icon: string;      // Lucide icon name: "Shield", "Zap", etc.
  badge?: string;
  title: string;
  desc: string;
  perks: string[];
};

export type WhyChooseUsApiItem = {
  _id: string;
  icon: string;
  badge: string;
  title: string;
  desc: string;
  perks: string[];
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type WhyChooseUsApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: WhyChooseUsApiItem[];
};

// ─────────────────────────────────────────────
// Partners (GET /api/v1/home-elements/partners)
// ─────────────────────────────────────────────

export type Partner = {
  id: string;
  name: string;
  emoji?: string;   // optional — API doesn't return it
};

export type PartnerApiItem = {
  _id: string;
  name: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type PartnerApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: PartnerApiItem[];
};

// ─────────────────────────────────────────────
// Tech Stack (GET /api/v1/home-elements/tech-stack)
// ─────────────────────────────────────────────

export type TechStackItem = {
  id: string;
  name: string;
  color: string;
  bg: string;
  icon: string;
};

export type TechStackApiItem = {
  _id: string;
  name: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TechStackApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: TechStackApiItem[];
};

// ─────────────────────────────────────────────
// Stats (GET /api/v1/home-elements/stats)
// ─────────────────────────────────────────────

export type Stat = {
  id: string;
  label: string;
  value: string;
  icon?: string;   // API doesn't return it
};

export type StatApiItem = {
  _id: string;
  label: string;
  value: string;
  status: "active" | "inactive" | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type StatApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: StatApiItem[];
};