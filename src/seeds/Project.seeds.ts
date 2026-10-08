export type Project2CardType = {
  image: string;
  tags: string[];
  title: string;
  link: string;
};

export const project2Cards: Project2CardType[] = [
  {
    image: "/images/project/project1-img1.jpg",
    tags: ["Mobile MDM", "Cloud Control"],
    title: "LockApp",
    link: "/portfolio-details",
  },
  {
    image: "/images/project/project1-img2.jpg",
    tags: ["Event Infrastructure", "High-Speed QR"],
    title: "NavratriOS",
    link: "/portfolio-details",
  },
  {
    image: "/images/project/project1-img3.jpg",
    tags: ["API Observability", "Schema Drift"],
    title: "Wirebench",
    link: "/portfolio-details",
  },
];

export type Project2SliderType = {
  projectSrc: string;
  category: string[];
  title: string;
};

export const project2SliderData: Project2SliderType[] = [
  {
    projectSrc: "/images/project/project1-img1.jpg",
    category: ["Mobile MDM", "Cloud Control"],
    title: "LockApp",
  },
  {
    projectSrc: "/images/project/project1-img2.jpg",
    category: ["Event Infrastructure", "High-Speed QR"],
    title: "NavratriOS",
  },
  {
    projectSrc: "/images/project/project1-img3.jpg",
    category: ["API Observability", "Schema Drift"],
    title: "Wirebench",
  },
];

export type ProjectCardType = {
  link: string;
  imageSrc: string;
  year: string;
  title: string;
  categories: string[];
};

export const projectCards: ProjectCardType[] = [
  {
    link: "/portfolio-details",
    imageSrc: "/images/project/project1-img1.jpg",
    year: "2025",
    title: "LockApp",
    categories: ["ENTERPRISE MDM", "B2B SAAS"],
  },
  {
    link: "/portfolio-details",
    imageSrc: "/images/project/project1-img2.jpg",
    year: "2024",
    title: "NavratriOS",
    categories: ["EVENT TICKETING", "QR PLATFORM"],
  },
  {
    link: "/portfolio-details",
    imageSrc: "/images/project/project1-img3.jpg",
    year: "2024",
    title: "Wirebench",
    categories: ["API GOVERNANCE", "DEV TOOLS"],
  },
];
