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
    packageName: "Starter",
    amount: {
      monthly: "$95",
      quarterly: "$45",
    },
    duration: "month",
    features: [
      "Consulting sessions",
      "Analysis & recommendations",
      "Customer management",
      "Detailed final report",
      "Support 6 months",
    ],
    link: "/contact",
  },
  {
    packageName: "Basic",
    amount: {
      monthly: "$120",
      quarterly: "$60",
    },
    duration: "month",
    features: [
      "Consulting sessions",
      "Analysis & recommendations",
      "Customer management",
      "Detailed final report",
      "Support 6 months",
    ],
    link: "/contact",
  },
  {
    packageName: "Premium",
    amount: {
      monthly: "$140",
      quarterly: "$69",
    },
    duration: "month",
    features: [
      "Consulting sessions",
      "Analysis & recommendations",
      "Customer management",
      "Detailed final report",
      "Support 6 months",
    ],
    link: "/contact",
  },
];
