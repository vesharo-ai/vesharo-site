export type PricingCardType = {
  packageName: string;
  amount: {
    monthly: string;
    quarterly: string;
  };
  duration: string;
  features: string[];
  link: string;
};

export const pricingCards: PricingCardType[] = [
  {
    packageName: "Discovery & MVP",
    amount: {
      monthly: "$5,900",
      quarterly: "$5,400",
    },
    duration: "sprint",
    features: [
      "2-week architectural discovery & prototype",
      "Comprehensive technical roadmap & PRD",
      "Database schema & API specifications",
      "Fixed budget & milestone timeline",
      "Full IP ownership & handover",
    ],
    link: "/contact",
  },
  {
    packageName: "Dedicated Pod",
    amount: {
      monthly: "$9,500",
      quarterly: "$8,500",
    },
    duration: "month",
    features: [
      "Senior Full-Stack Developer Pod",
      "Two-week sprints with weekly live demos",
      "Automated CI/CD & staging deployments",
      "Direct Slack/Teams channel integration",
      "Continuous code review & QA automation",
    ],
    link: "/contact",
  },
  {
    packageName: "Enterprise Scale",
    amount: {
      monthly: "Custom",
      quarterly: "Custom",
    },
    duration: "engagement",
    features: [
      "Cross-functional team with Solution Architect",
      "Legacy modernization & cloud migration",
      "Security, compliance & SOC2 audit support",
      "Dedicated Delivery Director",
      "SLA-backed 24/7 production support",
    ],
    link: "/contact",
  },
];
