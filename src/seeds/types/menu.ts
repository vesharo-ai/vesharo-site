export interface MenuItem {
  title: string;
  href: string;
  submenu?: MenuItem[];
  isMegaMenu?: boolean;
  columns?: MenuItem[][];
}

export interface MenuSeed {
  items: MenuItem[];
}