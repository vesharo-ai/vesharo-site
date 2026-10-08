import { MenuSeed } from "./types/menu";
import { serviceCards } from "./Service.seeds";

/**
 * Navigation Menu per CEO Directives:
 * Simple menu: Home, Services, Work, About, Blog, Contact, plus highlighted "Get a Quote" CTA.
 * Pricing is removed from the menu and replaced with "Get a Quote".
 */
const serviceLinks: MenuSeed["items"] = serviceCards.map((s) => ({
  title: s.title,
  href: `/services/${s.id}`,
}));

export const menuSeed: MenuSeed = {
  items: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
      isMegaMenu: true,
      columns: [
        serviceLinks.slice(0, 3),
        serviceLinks.slice(3),
        [
          { title: "All Services & Advisory", href: "/services" },
          { title: "Work & Case Studies", href: "/portfolio" },
          { title: "Technical FAQs", href: "/faq" },
          { title: "Get a Free Quote", href: "/contact" },
        ],
      ],
    },
    {
      title: "Work",
      href: "/portfolio",
    },
    {
      title: "About",
      href: "/about",
      activePaths: ["/about", "/faq"],
      submenu: [
        { title: "About Vesharo", href: "/about" },
        { title: "Frequently Asked Questions", href: "/faq" },
      ],
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

/** Labels for the persistent header call to action. */
export const headerCta = {
  label: "Get a Quote",
  href: "/contact",
};

/**
 * Contact page labels, reused by the nav CTA, off-canvas menu, and footer.
 */
export const contactCta = {
  primary: "Get a Free Quote",
  emailSubject: "New Project Quote Request",
};