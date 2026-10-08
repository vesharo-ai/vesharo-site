// Define the type for workflow card data
export type WorkflowCard = {
  subtitle: string;
  number: string;
  title: string;
  description: string;
  active: boolean;
};

// 4-Phase Technical Delivery Process
export const workflowCards: WorkflowCard[] = [
  {
    subtitle: "PHASE_01",
    number: "01",
    title: "Discovery & Architecture",
    description:
      "We map system boundaries, data models, and API contracts — establishing the technical blueprint and sprint roadmap.",
    active: true,
  },
  {
    subtitle: "PHASE_02",
    number: "02",
    title: "Sprint Delivery",
    description:
      "Our engineers ship production-grade code in two-week agile cadences with automated CI/CD integration and code reviews.",
    active: false,
  },
  {
    subtitle: "PHASE_03",
    number: "03",
    title: "QA & Security Hardening",
    description:
      "Comprehensive end-to-end testing, static analysis, vulnerability scanning, and performance benchmarking under peak load.",
    active: false,
  },
  {
    subtitle: "PHASE_04",
    number: "04",
    title: "Cloud Deployment & SLA",
    description:
      "Automated infrastructure provisioning, zero-downtime canary rollout, telemetry observability, and ongoing engineering support.",
    active: false,
  },
];

