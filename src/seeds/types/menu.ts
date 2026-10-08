export interface MenuItem {
  title: string;
  href: string;
  submenu?: MenuItem[];
  isMegaMenu?: boolean;
  columns?: MenuItem[][];
  /**
   * Extra path prefixes that should also mark this item as the current page.
   * Used where a parent entry owns child pages that are not beneath its href —
   * "Company" owns /faq and /blog but links to /about.
   */
  activePaths?: string[];
}

export interface MenuSeed {
  items: MenuItem[];
}