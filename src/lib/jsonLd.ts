import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  path?: string;
  serviceType?: string;
}

export interface ArticleSchemaData {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Generates schema.org Organization JSON-LD
 */
export function getOrganizationJsonLd(siteUrl: string = siteConfig.url) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    legalName: "Vesharo IT Services & AI Automation",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      url: `${siteUrl}/brand/logo.svg`,
      caption: siteConfig.name,
    },
    image: `${siteUrl}/brand/og-image.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: siteConfig.socials.map((s) => s.href),
  };
}

/**
 * Generates schema.org ProfessionalService / LocalBusiness JSON-LD
 */
export function getProfessionalServiceJsonLd(siteUrl: string = siteConfig.url) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service-business`,
    name: siteConfig.name,
    image: `${siteUrl}/brand/og-image.png`,
    url: siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    sameAs: siteConfig.socials.map((s) => s.href),
  };
}

/**
 * Generates schema.org WebSite JSON-LD with potential search action
 */
export function getWebSiteJsonLd(siteUrl: string = siteConfig.url) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    alternateName: "Vesharo AI & IT Services",
    description: siteConfig.description,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };
}

/**
 * Generates schema.org BreadcrumbList JSON-LD
 */
export function getBreadcrumbJsonLd(items: BreadcrumbItem[], siteUrl: string = siteConfig.url) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${siteUrl}${item.path}`,
    })),
  };
}

/**
 * Generates schema.org Service JSON-LD
 */
export function getServiceJsonLd(data: ServiceSchemaData, siteUrl: string = siteConfig.url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    serviceType: data.serviceType || "IT Services & AI Engineering",
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: "Worldwide",
    url: data.path ? (data.path.startsWith("http") ? data.path : `${siteUrl}${data.path}`) : siteUrl,
  };
}

/**
 * Generates schema.org Article / BlogPosting JSON-LD
 */
export function getArticleJsonLd(data: ArticleSchemaData, siteUrl: string = siteConfig.url) {
  const articleUrl = data.path.startsWith("http") ? data.path : `${siteUrl}${data.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      "@type": "Person",
      name: data.authorName || "Vesharo Engineering Team",
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    image: data.imageUrl || `${siteUrl}/brand/og-image.png`,
  };
}

/**
 * Generates schema.org FAQPage JSON-LD
 */
export function getFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
