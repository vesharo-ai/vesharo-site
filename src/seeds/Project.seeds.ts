/**
 * Engagement archetypes.
 *
 * IMPORTANT: these are NOT client case studies. They describe the kinds of
 * problems Vesharo is set up to solve and the shape of a typical engagement.
 * No client names, dates, metrics or outcomes are asserted here, because we
 * only publish verified facts about real engagements.
 *
 * When real, approved case studies become available, add them as a separate
 * `caseStudies` array rather than editing these entries.
 */

export type EngagementArchetype = {
  id: string;
  /** Short label for the delivery model, e.g. "Fixed-scope build". */
  engagementType: string;
  /** Generic description of the product category, never a client name. */
  title: string;
  industry: string;
  categories: string[];
  /** The recurring, generic problem this engagement type solves. */
  challenge: string;
  /** What Vesharo is responsible for in this kind of engagement. */
  ourRole: string[];
  techStack: string[];
};

export const engagementArchetypes: EngagementArchetype[] = [
  {
    id: "logistics-platform",
    engagementType: "Web Platform Build",
    title: "Logistics & Fleet Operations Platform",
    industry: "Supply Chain & Freight",
    categories: ["WEB APP", "CLOUD"],
    challenge:
      "Dispatch, tracking and billing run across spreadsheets and inboxes, so load allocation errors surface late and customers chase updates instead of reading them.",
    ourRole: [
      "Discovery workshops and process mapping with your operations team",
      "Event-driven service architecture and API design",
      "Responsive web front-end for dispatchers and drivers",
      "CI/CD, infrastructure as code, and launch handover",
    ],
    techStack: ["React", "TypeScript", "Node.js or Go", "AWS", "PostgreSQL", "Docker"],
  },
  {
    id: "payments-mobile-app",
    engagementType: "Mobile App Build",
    title: "Payments & Fintech Mobile App",
    industry: "Fintech & Banking",
    categories: ["MOBILE APP", "FINTECH"],
    challenge:
      "Customers expect instant, secure transactions on mobile — which means biometric sign-in, fast transfer flows, and an API layer that is safe to hand to auditors.",
    ourRole: [
      "Cross-platform mobile architecture (React Native or native)",
      "Biometric authentication and secure token handling",
      "Tokenized, PCI-conscious backend services",
      "Store release, crash monitoring, and iteration support",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "Redis", "REST/GraphQL APIs"],
  },
  {
    id: "health-portal",
    engagementType: "UX Rebuild + Portal",
    title: "Patient Healthcare Portal",
    industry: "Healthcare & Telemedicine",
    categories: ["UI/UX", "HEALTHCARE"],
    challenge:
      "Appointment booking and record access are spread across separate tools, and patients drop out of flows that ask them to navigate by internal department names.",
    ourRole: [
      "User research and journey mapping with patients and staff",
      "Accessible interface design (WCAG 2.2 AA) and design system",
      "Portal front-end against your existing scheduling and records APIs",
      "Privacy review support: consent flows, audit logging, retention rules",
    ],
    techStack: ["Next.js", "TailwindCSS", "Node.js", "GraphQL", "Role-based access control"],
  },
  {
    id: "demand-forecasting",
    engagementType: "Data & AI Platform",
    title: "Demand Forecasting & Inventory Analytics",
    industry: "Omnichannel Retail & Distribution",
    categories: ["DATA & AI", "ANALYTICS"],
    challenge:
      "Stockouts and overstock both trace back to the same thing: decisions made on last week's numbers instead of current demand signals.",
    ourRole: [
      "Data pipeline and warehouse design over your existing sources",
      "Forecasting model selection, training, and back-testing",
      "Analytics dashboard and alerting for planners",
      "Monitoring for drift, with a documented retraining process",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Kubernetes", "Redis", "TimescaleDB"],
  },
  {
    id: "cloud-migration",
    engagementType: "Cloud Migration",
    title: "Cloud Migration & Infrastructure Modernisation",
    industry: "Cross-industry",
    categories: ["CLOUD", "DEVOPS"],
    challenge:
      "Growth is constrained by on-premise capacity, manual releases, and no dependable rollback path when something goes wrong.",
    ourRole: [
      "Current-state infrastructure audit and migration plan",
      "Lift-and-shift or re-platform, decided on evidence rather than ideology",
      "Zero-downtime cutover runbook with rehearsed rollback",
      "Observability, alerting, and on-call documentation",
    ],
    techStack: ["AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Prometheus"],
  },
  {
    id: "legacy-modernisation",
    engagementType: "Legacy Modernisation",
    title: "Legacy Application Modernisation",
    industry: "Cross-industry",
    categories: ["ENTERPRISE", "WEB APP"],
    challenge:
      "The system works, but nobody can safely change it: undocumented logic, tightly coupled modules, and a release process that everyone avoids.",
    ourRole: [
      "Codebase and dependency audit with a risk-ranked plan",
      "Incremental strangler-pattern migration, shipped to production continuously",
      "Test coverage added before refactoring, not after",
      "Knowledge transfer and a documented handover to your team",
    ],
    techStack: ["React", "TypeScript", ".NET or Node.js", "SQL Server", "Azure or AWS", "Docker"],
  },
];