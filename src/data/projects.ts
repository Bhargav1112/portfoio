export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  featured: boolean;
  color: string;
  features: string[];
  challenges: string[];
  role: string;
  duration: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "plugsity",
    title: "Plugsity",
    description:
      "Social booking & e-commerce platform enabling users to discover, book, and purchase services and products seamlessly.",
    longDescription:
      "Plugsity is a comprehensive social booking and e-commerce platform that revolutionizes how users discover, book, and purchase services and products. The platform combines social features with powerful e-commerce capabilities, allowing businesses to showcase their offerings while users can easily browse, compare, and make purchases. With integrated payment processing through Stripe and detailed analytics via Chart.js, Plugsity provides a complete business solution.",
    tech: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Shadcn UI",
      "Tailwind CSS",
      "Stripe",
      "Chart.js",
    ],
    category: "E-commerce",
    featured: true,
    color: "from-violet-500 to-purple-600",
    features: [
      "Social booking system with real-time availability",
      "E-commerce marketplace with product listings",
      "Integrated Stripe payment processing",
      "Advanced analytics dashboard with Chart.js",
      "User reviews and ratings system",
      "Business profile management",
      "Search and filter functionality",
      "Mobile-responsive design",
    ],
    challenges: [
      "Implementing real-time booking synchronization",
      "Building a scalable payment integration",
      "Optimizing performance for large product catalogs",
    ],
    role: "Lead Frontend Developer",
    duration: "8 months",
    year: "2023",
  },
  {
    slug: "dtn-jewelry",
    title: "DTN-Jewelry",
    description:
      "Premium e-commerce platform for jewelry and diamonds with advanced filtering and elegant product showcase.",
    longDescription:
      "DTN-Jewelry is a sophisticated e-commerce platform designed specifically for the jewelry and diamond industry. The platform features an elegant design that showcases high-value products with stunning visuals and detailed specifications. Advanced filtering options allow customers to find their perfect piece based on cut, clarity, carat, and color. The responsive design ensures a premium shopping experience across all devices.",
    tech: [
      "React.js",
      "TypeScript",
      "React Query",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    category: "E-commerce",
    featured: true,
    color: "from-amber-500 to-orange-600",
    features: [
      "Advanced diamond filtering (4Cs)",
      "High-resolution product galleries",
      "360-degree product views",
      "Wishlist and comparison features",
      "Secure checkout process",
      "Custom jewelry request forms",
      "Certificate verification",
      "Price calculator tools",
    ],
    challenges: [
      "Implementing complex filtering logic for diamond specifications",
      "Optimizing image loading for high-resolution product photos",
      "Creating an intuitive mobile shopping experience",
    ],
    role: "Senior Frontend Developer",
    duration: "6 months",
    year: "2023",
  },
  {
    slug: "third-party-risk-management",
    title: "Third Party Risk Management",
    description:
      "Enterprise vendor risk management system for assessing and monitoring third-party security risks.",
    longDescription:
      "The Third Party Risk Management System is an enterprise-grade solution designed to help organizations assess, monitor, and mitigate risks associated with their vendor relationships. The platform provides comprehensive risk scoring, compliance tracking, and detailed reporting capabilities. With interactive dashboards powered by Chart.js, stakeholders can quickly understand their risk landscape and take informed decisions.",
    tech: ["React.js", "TypeScript", "Material UI", "Chart.js"],
    category: "Enterprise",
    featured: true,
    color: "from-blue-500 to-cyan-600",
    features: [
      "Vendor risk assessment workflows",
      "Automated compliance tracking",
      "Interactive risk dashboards",
      "Document management system",
      "Audit trail and reporting",
      "Custom risk scoring models",
      "Integration with external data sources",
      "Role-based access control",
    ],
    challenges: [
      "Building complex workflow automation",
      "Implementing real-time risk score calculations",
      "Creating comprehensive reporting system",
    ],
    role: "Frontend Developer",
    duration: "10 months",
    year: "2022",
  },
  {
    slug: "email-template-builder",
    title: "E-mail Template Builder",
    description:
      "Intuitive drag-and-drop email template builder for creating professional marketing emails.",
    longDescription:
      "The Email Template Builder is a powerful drag-and-drop tool that enables marketers and designers to create stunning email templates without any coding knowledge. Built with Craft.js for the drag-and-drop functionality, the builder offers a wide range of pre-built components and customization options. Users can preview their designs across different devices and export production-ready HTML templates.",
    tech: ["React.js", "Tailwind CSS", "Craft.js", "Ant Design"],
    category: "Tool",
    featured: false,
    color: "from-emerald-500 to-green-600",
    features: [
      "Drag-and-drop interface",
      "Pre-built component library",
      "Real-time preview",
      "Responsive design testing",
      "HTML export functionality",
      "Template saving and sharing",
      "Custom branding options",
      "Undo/redo functionality",
    ],
    challenges: [
      "Implementing complex drag-and-drop interactions",
      "Ensuring cross-client email compatibility",
      "Building a responsive preview system",
    ],
    role: "Lead Frontend Developer",
    duration: "4 months",
    year: "2023",
  },
  {
    slug: "influencer-marketplace",
    title: "Influencer Marketplace",
    description:
      "Multi-portal platform connecting brands with influencers, featuring admin, brand, and influencer dashboards.",
    longDescription:
      "The Influencer Marketplace is a comprehensive platform that bridges the gap between brands and influencers. The system features three distinct portals: an admin dashboard for platform management, a brand portal for campaign creation and influencer discovery, and an influencer portal for managing collaborations and earnings. Stripe integration ensures secure and timely payments for all parties.",
    tech: ["React.js", "Tailwind CSS", "TypeScript", "Stripe"],
    category: "Marketplace",
    featured: true,
    color: "from-pink-500 to-rose-600",
    features: [
      "Multi-role dashboard system",
      "Influencer discovery and filtering",
      "Campaign management tools",
      "Performance analytics",
      "Secure payment processing",
      "Contract management",
      "Messaging system",
      "Content approval workflow",
    ],
    challenges: [
      "Building a scalable multi-tenant architecture",
      "Implementing complex permission systems",
      "Creating real-time collaboration features",
    ],
    role: "Team Lead & Frontend Developer",
    duration: "12 months",
    year: "2023",
  },
  {
    slug: "mirone",
    title: "Mirone",
    description:
      "Elegant e-commerce platform for event clothing with sophisticated UI and seamless checkout experience.",
    longDescription:
      "Mirone is a premium e-commerce platform specializing in event clothing and formal wear. The platform features a sophisticated design that reflects the elegance of its products. With Chakra UI providing the component foundation and SCSS for custom styling, the site delivers a unique shopping experience. Stripe integration ensures secure transactions for high-value purchases.",
    tech: ["Next.js", "SCSS", "Chakra UI", "Stripe", "TypeScript"],
    category: "E-commerce",
    featured: false,
    color: "from-indigo-500 to-blue-600",
    features: [
      "Size guide and fitting tools",
      "Virtual try-on suggestions",
      "Event-based collections",
      "Express shipping options",
      "Gift wrapping services",
      "Customer reviews with photos",
      "Related product recommendations",
      "Secure payment processing",
    ],
    challenges: [
      "Creating an elegant, high-end user experience",
      "Implementing complex size recommendation logic",
      "Optimizing for conversion rate",
    ],
    role: "Frontend Developer",
    duration: "5 months",
    year: "2022",
  },
  {
    slug: "ttuu",
    title: "TTUU",
    description:
      "Social media and brand platform combining community features with brand engagement tools.",
    longDescription:
      "TTUU is an innovative social media platform that combines traditional social networking features with powerful brand engagement tools. Users can follow their favorite brands, participate in exclusive communities, and access special promotions. The platform leverages React Query for efficient data management and Shadcn UI for a modern, consistent interface.",
    tech: ["Next.js", "TypeScript", "React Query", "Shadcn UI", "Tailwind CSS"],
    category: "Social",
    featured: false,
    color: "from-cyan-500 to-teal-600",
    features: [
      "Social feed with engagement features",
      "Brand following and notifications",
      "Community forums and discussions",
      "Exclusive brand content access",
      "User profile customization",
      "Direct messaging system",
      "Event discovery and RSVPs",
      "Loyalty rewards program",
    ],
    challenges: [
      "Building scalable real-time features",
      "Optimizing feed algorithm performance",
      "Creating engaging community features",
    ],
    role: "Senior Frontend Developer",
    duration: "7 months",
    year: "2023",
  },
  {
    slug: "graze-app",
    title: "Graze App",
    description:
      "Hybrid social media and e-commerce platform for food enthusiasts to share and shop culinary experiences.",
    longDescription:
      "Graze App is a unique platform that combines social media with e-commerce, specifically designed for food enthusiasts. Users can share their culinary creations, follow food influencers, and purchase ingredients or kitchen products directly through the app. The platform creates a vibrant community around food while providing seamless shopping experiences.",
    tech: ["Next.js", "TypeScript", "React Query", "Shadcn UI", "Tailwind CSS"],
    category: "Social",
    featured: false,
    color: "from-orange-500 to-red-600",
    features: [
      "Recipe sharing and discovery",
      "Food photography features",
      "Ingredient shopping lists",
      "Restaurant recommendations",
      "Cooking tutorials and videos",
      "Community challenges",
      "Chef profiles and following",
      "Meal planning tools",
    ],
    challenges: [
      "Integrating social and e-commerce features seamlessly",
      "Building an engaging content discovery system",
      "Optimizing media-heavy feeds",
    ],
    role: "Frontend Developer",
    duration: "6 months",
    year: "2024",
  },
  {
    slug: "shoorah",
    title: "Shoorah",
    description:
      "Comprehensive admin panel for mental health app featuring analytics, user management, and live sessions.",
    longDescription:
      "Shoorah is a comprehensive admin panel built for a mental health application. The platform provides administrators with powerful tools to manage users, monitor engagement, and facilitate live counseling sessions through Agora integration. D3 Charts power the analytics dashboard, providing deep insights into user wellness journeys and platform performance.",
    tech: ["React.js", "D3 Charts", "TypeScript", "Agora", "Tailwind CSS"],
    category: "Healthcare",
    featured: true,
    color: "from-teal-500 to-emerald-600",
    features: [
      "User wellness tracking dashboard",
      "Live video session management",
      "Advanced analytics with D3 Charts",
      "Content management system",
      "Therapist scheduling tools",
      "Progress report generation",
      "Notification management",
      "Data export and reporting",
    ],
    challenges: [
      "Implementing secure video conferencing",
      "Building HIPAA-compliant data handling",
      "Creating meaningful wellness visualizations",
    ],
    role: "Lead Frontend Developer",
    duration: "9 months",
    year: "2023",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit?: number): Project[] {
  const featured = projects.filter((project) => project.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}

export const categories = [
  "All",
  "E-commerce",
  "Enterprise",
  "Social",
  "Tool",
  "Marketplace",
  "Healthcare",
];
