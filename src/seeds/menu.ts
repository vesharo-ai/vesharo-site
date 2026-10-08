import { MenuSeed } from "./types/menu";

export const menuSeed: MenuSeed = {
  items: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/service-details",
      submenu: [
        { title: "AI Automation", href: "/service-details" },
        { title: "AI Agents & Chatbots", href: "/service-details" },
        { title: "Custom Software Development", href: "/service-details" },
        { title: "Web Development", href: "/service-details" },
        { title: "Mobile App Development", href: "/service-details" },
        { title: "Cloud & DevOps", href: "/service-details" },
        { title: "IT Consulting", href: "/service-details" },
      ],
    },
    {
      title: "Portfolio",
      href: "/portfolio-details",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
