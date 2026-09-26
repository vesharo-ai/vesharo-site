// Define the type for workflow card data
export type WorkflowCard = {
  subtitle: string;
  number: string;
  title: string;
  description: string;
  active: boolean;
};

// Create demo data array
export const workflowCards: WorkflowCard[] = [
  {
    subtitle: "STEP_01",
    number: "01",
    title: "Discover & Strategize",
    description:
      "We start by understanding your goals, audience, and challenges.",
    active: true,
  },
  {
    subtitle: "STEP_02",
    number: "02",
    title: "Design & Prototype",
    description:
      "We create visual concepts and interactive prototypes for your project.",
    active: false,
  },
  {
    subtitle: "STEP_03",
    number: "03",
    title: "Develop & Implement",
    description: "We turn designs into functional solutions with clean code.",
    active: false,
  },
  {
    subtitle: "STEP_04",
    number: "04",
    title: "Test & Launch",
    description: "We rigorously test and deploy your solution to the market.",
    active: false,
  },
];
