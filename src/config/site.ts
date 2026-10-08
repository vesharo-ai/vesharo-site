export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  href: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  tagline: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  hasDropdown?: boolean;
}

export const siteConfig = {
  name: "Vesharo",
  tagline: "IT Services & AI Automation",
  description:
    "Vesharo is a premier IT services and AI automation company delivering custom software, AI agents, mobile applications, and scalable cloud solutions.",
  url: "https://vesharo.com",

  contact: {
    email: "contact@vesharo.com",
    phone: "+91 95862 12495",
    whatsapp: "+919586212495",
    location: "Ahmedabad, Gujarat, India",
    hours: "Mon–Fri 9:00–18:30 IST",
    formRecipientNotice: "Submissions delivered securely to engineering desk.",
  },

  socials: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: "ph-linkedin-logo" },
    { name: "X (Twitter)", href: "https://x.com", icon: "ph-x-logo" },
    { name: "GitHub", href: "https://github.com/vesharo-ai", icon: "ph-github-logo" },
  ],

  // 7 Core Real Services
  services: [
    {
      id: "ai-automation",
      title: "AI Automation",
      shortDescription: "Workflow automation, LLM integration & autonomous pipelines",
      href: "/service-details",
      icon: "ph-cpu",
    },
    {
      id: "ai-agents",
      title: "AI Agents & Chatbots",
      shortDescription: "Custom intelligent assistants, multi-agent frameworks & RAG",
      href: "/service-details",
      icon: "ph-robot",
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      shortDescription: "Scalable enterprise web applications, robust APIs & architectures",
      href: "/service-details",
      icon: "ph-code",
    },
    {
      id: "web-development",
      title: "Web Development",
      shortDescription: "High-performance modern web platforms using Astro, Next.js & React",
      href: "/service-details",
      icon: "ph-browser",
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      shortDescription: "Fluid iOS & Android cross-platform solutions built for scale",
      href: "/service-details",
      icon: "ph-device-mobile",
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      shortDescription: "CI/CD pipelines, containerization, cloud infrastructure & AWS/GCP",
      href: "/service-details",
      icon: "ph-cloud",
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      shortDescription: "System audits, technology roadmapping & modern tech strategy",
      href: "/service-details",
      icon: "ph-chart-line-up",
    },
  ] as ServiceItem[],

  // Real Verified Portfolio
  portfolio: [
    {
      id: "lockapp",
      title: "LockApp",
      tagline: "B2B SaaS for remote Android device management on EMI plans",
      href: "/portfolio-details",
    },
    {
      id: "navratrios",
      title: "NavratriOS",
      tagline: "Multi-tenant festival registration and gate-entry QR SaaS",
      href: "/portfolio-details",
    },
    {
      id: "wirebench",
      title: "Wirebench",
      tagline: "Private API client with contract-drift detection and team changelog",
      href: "/portfolio-details",
    },
  ] as PortfolioItem[],

  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/service-details", hasDropdown: true },
    { title: "Portfolio", href: "/portfolio-details" },
    { title: "About", href: "/about" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],

  cta: {
    label: "Book a free call",
    href: "/contact",
  },

  footerLinks: {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Portfolio", href: "/portfolio-details" },
      { label: "Pricing Models", href: "/pricing" },
      { label: "Insights & Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/faq" },
      { label: "Terms of Service", href: "/faq" },
      { label: "Cookie Policy", href: "/faq" },
    ],
  },
};
