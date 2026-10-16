export type WorkflowCard = {
  subtitle: string;
  number: string;
  title: string;
  description: string;
  active: boolean;
};

export const workflowCards: WorkflowCard[] = [
  {
    subtitle: "Phase 01",
    number: "01",
    title: "Discover",
    description: "1-week architecture sprint analyzing technical requirements, data models, and non-functional constraints.",
    active: true,
  },
  {
    subtitle: "Phase 02",
    number: "02",
    title: "Design",
    description: "Architecting entity schemas, API contracts, private VPC perimeters, and component design tokens.",
    active: false,
  },
  {
    subtitle: "Phase 03",
    number: "03",
    title: "Build",
    description: "Rapid 2-week agile sprints with test-driven development, automated CI/CD builds, and working preview demos.",
    active: false,
  },
  {
    subtitle: "Phase 04",
    number: "04",
    title: "Launch",
    description: "Load testing, security hardening audit, zero-downtime deployment, and full DNS cutover.",
    active: false,
  },
  {
    subtitle: "Phase 05",
    number: "05",
    title: "Support",
    description: "30-day post-launch warranty, full IP and repository transfer, plus optional 24/7 SLA uptime monitoring.",
    active: false,
  },
];
