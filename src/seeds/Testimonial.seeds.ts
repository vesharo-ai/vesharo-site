export interface TestimonialSlide {
  imageSrc: string;
  text: string;
  title: string;
  designation: string;
}

export const testimonialSlides: TestimonialSlide[] = [
  {
    imageSrc: "/images/project/project1-img1.jpg",
    text: "Vesharo engineered our Android MDM infrastructure with remarkable precision. The offline enforcement mechanisms and low-latency cloud control plane gave our device financing business complete operational security.",
    title: "LockApp Platform",
    designation: "B2B Hardware Financing & MDM",
  },
  {
    imageSrc: "/images/project/project1-img2.jpg",
    text: "Handling 50,000+ gate scans during peak evening festival rushes with zero downtime or scanner sync lag seemed impossible until Vesharo built and deployed NavratriOS. The performance was flawless.",
    title: "NavratriOS",
    designation: "High-Volume Event Infrastructure",
  },
  {
    imageSrc: "/images/project/project1-img3.jpg",
    text: "Wirebench eliminated the API contract regression headaches our microservices teams faced every sprint. The drift detection caught breaking changes before staging deployments.",
    title: "Wirebench",
    designation: "Developer Tooling & API Governance",
  },
];

export type Testimonial2Type = {
  reviewImageSrc: string;
  description: string;
  name: string;
  date: string;
};

export const testimonial2Items: Testimonial2Type[] = [
  {
    reviewImageSrc: "/images/project/project1-img1.jpg",
    description:
      "Vesharo engineered our Android MDM infrastructure with remarkable precision. The offline enforcement mechanisms gave our device financing business complete operational security.",
    name: "LockApp Engineering",
    date: "Verified Enterprise Deployment",
  },
  {
    reviewImageSrc: "/images/project/project1-img2.jpg",
    description:
      "Handling 50,000+ gate scans during peak evening festival rushes with zero downtime or scanner sync lag. The performance was flawless.",
    name: "NavratriOS Infrastructure",
    date: "Verified Production Deployment",
  },
  {
    reviewImageSrc: "/images/project/project1-img3.jpg",
    description:
      "Wirebench eliminated the API contract regression headaches our microservices teams faced every sprint. The drift detection caught breaking changes before staging deployments.",
    name: "Wirebench Systems",
    date: "Verified Product Deployment",
  },
];
