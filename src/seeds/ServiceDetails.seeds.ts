export type ServiceAccordionType = {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
};

export const serviceAccordionData: ServiceAccordionType[] = [
  {
    id: "One",
    question: "What services does your agency offer?",
    answer:
      "If you're looking to improve your online presence, reach more customers, or streamline your digital operations, a digital agency can help. Whether you're a startup or an established business, we tailor our services to meet your unique needs.",
    isOpen: false,
  },
  {
    id: "Two",
    question: "What's your process for working with clients?",
    answer:
      "If you're looking to improve your online presence, reach more customers, or streamline your digital operations, a digital agency can help. Whether you're a startup or an established business, we tailor our services to meet your unique needs.",
    isOpen: false,
  },
  {
    id: "Three",
    question: "How do I know if I need a digital agency?",
    answer:
      "If you're looking to improve your online presence, reach more customers, or streamline your digital operations, a digital agency can help. Whether you're a startup or an established business, we tailor our services to meet your unique needs.",
    isOpen: true,
  },
  {
    id: "Four",
    question: "How involved do I need to be in the process?",
    answer:
      "If you're looking to improve your online presence, reach more customers, or streamline your digital operations, a digital agency can help. Whether you're a startup or an established business, we tailor our services to meet your unique needs.",
    isOpen: false,
  },
];
