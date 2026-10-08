/**
 * Central site and brand configuration for Vesharo.
 * All company facts, contact details, and external integrations MUST reside here.
 */

export const site = {
  name: "Vesharo",
  legalName: "Vesharo Technologies",
  tagline: "Software built to grow your business.",
  homeH1: "Custom software, apps and IT consulting that help your business grow.",
  positioning:
    "Custom software, IT consulting and product studio for startups and growing businesses.",
  description:
    "Vesharo is a software engineering, IT consulting, and product development company in Ahmedabad, India. We build custom web apps, mobile apps, enterprise cloud systems, and proprietary digital products.",
  industry: "Software Engineering, IT Consulting & Product Studio",

  contact: {
    email: "contact@vesharo.com",
    phone: "+91 95862 12495",
    phoneRaw: "+919586212495",
    phoneFormatted: "+91 95862 12495",
    whatsappNumber: "919586212495",
    whatsappMessage: "Hi Vesharo team, I would like to discuss a project.",
    whatsappUrl:
      "https://wa.me/919586212495?text=Hi%20Vesharo%20team%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    address: "Ahmedabad, Gujarat, India",
    mapQuery: "Ahmedabad, Gujarat, India",
    coverage: "Ahmedabad, India · Worldwide Remote",
    city: "Ahmedabad",
    region: "Gujarat",
    country: "India",
    countryCode: "IN",
    hours: "Monday to Friday, 9:00 AM to 6:30 PM IST",
    supportResponseTime: "Within 24 business hours",
  },

  social: {
    // Only displayed when URL is non-empty; never links to homepage of the platform
    linkedin: "",
    twitter: "",
    github: "",
  },

  seo: {
    siteUrl: "https://vesharo.com",
    twitterHandle: "",
    defaultOgImage: "/images/brand/og-default.jpg",
  },

  booking: {
    // Show "Book a call" only when this is set via PUBLIC_BOOKING_URL env var
    url: import.meta.env.PUBLIC_BOOKING_URL || "",
  },

  forms: {
    web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    formspreeEndpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || "",
  },

  colors: {
    primary: "#7C5CFF",
    primaryHover: "#A78BFA",
    dark: "#121212",
  },
} as const;

// Alias brand to site for backward-compatibility with existing imports
export const brand = site;
export default site;
