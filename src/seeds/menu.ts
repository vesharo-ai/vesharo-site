import { MenuSeed } from "./types/menu";

export const menuSeed: MenuSeed = {
  items: [
    {
      title: "Home",
      href: "/",
      submenu: [
        { title: "Home-1", href: "/" },
        { title: "Home-2", href: "/home-2" },
      ],
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Services",
      href: "#",
      submenu: [
        { title: "Service-1", href: "/service-1" },
        { title: "Service-2", href: "/service-2" },
        { title: "Service Details", href: "/service-details" },
      ],
    },
    {
      title: "Portfolio",
      href: "#",
      submenu: [
        { title: "Portfolio-1", href: "/portfolio-1" },
        { title: "Portfolio-2", href: "/portfolio-2" },
        { title: "Portfolio Details", href: "/portfolio-details" },
      ],
    },
    {
      title: "Pages",
      href: "#",
      isMegaMenu: true,
      columns: [
        [
          { title: "Home-1", href: "/" },
          { title: "Home-2", href: "/home-2" },
          { title: "About", href: "/about" },
          { title: "Service-1", href: "/service-1" },
          { title: "Service-2", href: "/service-2" },
          { title: "Service Details", href: "/service-details" },
        ],
        [
          { title: "Portfolio-1", href: "/portfolio-1" },
          { title: "Portfolio-2", href: "/portfolio-2" },
          { title: "Portfolio Details", href: "/portfolio-details" },
          { title: "FAQ", href: "/faq" },
          { title: "Pricing", href: "/pricing" },
        ],
        [
          { title: "Blog", href: "/blog" },
          { title: "Blog Details", href: "/blog-details" },
          { title: "Team", href: "/team" },
          { title: "Team Details", href: "/team-details" },
          { title: "404", href: "/404" },
          { title: "Contact", href: "/contact" },
        ],
      ],
    },
  ],
};
