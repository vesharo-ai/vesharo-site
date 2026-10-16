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
  tagline: "Production iOS & Android apps with React Native & Expo.",
  description:
    "Vesharo engineers production-grade mobile applications for iOS and Android using React Native and Expo, supercharged by intelligent AI automation and scalable cloud backends.",
  company: "Vesharo (by Apptify Solutions)",
  url: "https://vesharo.com",

  contact: {
    email: "vesharo.ai@gmail.com",
    phone: "+91 95862 12495",
    whatsapp: "+919586212495",
    whatsappUrl: "https://wa.me/919586212495",
    bookingUrl: "https://cal.com/vesharo/15min",
    location: "Ahmedabad, Gujarat, India",
    hours: "Mon–Fri 9:00–18:30 IST",
  },

  socials: [
    { name: "GitHub", href: "https://github.com/vesharo-ai", icon: "ph-github-logo" },
  ],

  // 7 Core Real Services (Mobile App Development Primary)
  services: [
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      shortDescription: "Production iOS & Android apps built with React Native & Expo",
      href: "/services/mobile-app-development",
      icon: "ph-device-mobile",
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      shortDescription: "Workflow automation, LLM integration & autonomous pipelines",
      href: "/services/ai-automation",
      icon: "ph-cpu",
    },
    {
      id: "ai-agents-chatbots",
      title: "AI Agents & Chatbots",
      shortDescription: "Custom intelligent assistants, multi-agent frameworks & RAG",
      href: "/services/ai-agents-chatbots",
      icon: "ph-robot",
    },
    {
      id: "custom-software-development",
      title: "Custom Software Development",
      shortDescription: "Scalable enterprise web applications, robust APIs & architectures",
      href: "/services/custom-software-development",
      icon: "ph-code",
    },
    {
      id: "web-development",
      title: "Web Development",
      shortDescription: "High-performance modern web platforms using Astro, Next.js & React",
      href: "/services/web-development",
      icon: "ph-browser",
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      shortDescription: "CI/CD pipelines, containerization, cloud infrastructure & AWS/GCP",
      href: "/services/cloud-devops",
      icon: "ph-cloud",
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      shortDescription: "System audits, technology roadmapping & modern tech strategy",
      href: "/services/it-consulting",
      icon: "ph-chart-line-up",
    },
  ] as ServiceItem[],

  // Real Verified Public Portfolio (Confidential client work strictly excluded from public navigation)
  portfolio: [
    {
      id: "lockapp",
      title: "LockApp",
      tagline: "B2B SaaS for remote Android device management on EMI plans",
      href: "/portfolio/lockapp",
    },
    {
      id: "navratrios",
      title: "NavratriOS",
      tagline: "Multi-tenant festival registration and gate-entry QR SaaS",
      href: "/portfolio/navratrios",
    },
    {
      id: "wirebench",
      title: "Wirebench",
      tagline: "Private API client with contract-drift detection and team changelog",
      href: "/portfolio/wirebench",
    },
  ] as PortfolioItem[],

  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services", hasDropdown: true },
    { title: "Products & Portfolio", href: "/portfolio" },
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
      { label: "Products & Portfolio", href: "/portfolio" },
      { label: "Pricing Models", href: "/pricing" },
      { label: "Insights & Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
};
