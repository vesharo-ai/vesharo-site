/**
 * In-House Products & Engineering Accelerators from Vesharo Labs.
 *
 * Alongside bespoke client engineering and IT consulting, Vesharo builds,
 * operates, and maintains its own proprietary software products and developer
 * accelerators.
 *
 * This proves to enterprise buyers that our engineers maintain an authentic
 * product mindset: thinking about uptime, unit economics, observability,
 * and maintainability, rather than just closing sprint tickets.
 */

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: "Enterprise Accelerator" | "Cloud & FinOps" | "AI Platform" | "SaaS Foundation";
  status: "Production Live" | "Enterprise Ready" | "Active Lab";
  description: string;
  valueProp: string;
  architectureHighlight: string;
  features: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  icon: string;
}

export const vesharoProducts: ProductItem[] = [
  {
    id: "coreflow",
    name: "Vesharo CoreFlow",
    tagline: "High-Throughput Event & Webhook Orchestrator",
    category: "Enterprise Accelerator",
    status: "Production Live",
    description:
      "A distributed, high-concurrency event ingestion and webhook orchestration engine built to process millions of async events with zero data loss.",
    valueProp:
      "Eliminates the fragile webhook integration problem. Enables automated retries, signature verification, dead-letter quarantine, and payload transformations.",
    architectureHighlight: "Event-driven micro-broker with distributed Redis queueing and idempotent consumers.",
    features: [
      "Zero-loss dead-letter queue with replay capability",
      "Dynamic payload transformation & JSON schema validation",
      "End-to-end cryptographic signature verification (HMAC SHA-256)",
      "Real-time event delivery telemetry and latency heatmaps",
    ],
    techStack: ["Go", "Node.js", "Redis Streams", "PostgreSQL", "Docker", "Prometheus"],
    metrics: [
      { label: "Throughput", value: "25k+ events/sec" },
      { label: "Delivery Guarantee", value: "At-least-once" },
      { label: "Avg Ingestion Latency", value: "< 12ms" },
    ],
    icon: "ph-git-fork",
  },
  {
    id: "cloudpulse",
    name: "Vesharo CloudPulse",
    tagline: "Multi-Cloud FinOps & Kubernetes Cost Observability",
    category: "Cloud & FinOps",
    status: "Enterprise Ready",
    description:
      "Telemetry and cost-intelligence dashboard giving engineering leaders granular visibility into cloud spending, Kubernetes pod allocations, and idle resources.",
    valueProp:
      "Prevents cloud bill shocks. Automatically correlates deployment events with cost spikes and generates actionable rightsizing recommendations.",
    architectureHighlight: "Lightweight eBPF daemon and Prometheus scraper feeding a TimescaleDB analytical store.",
    features: [
      "Real-time cluster cost attribution by namespace and team",
      "Automated over-provisioning and idle resource alerts",
      "Multi-cloud support across AWS, Google Cloud, and Bare Metal",
      "Predictive spend forecasting based on sprint release cadence",
    ],
    techStack: ["TypeScript", "Next.js", "TimescaleDB", "Kubernetes", "Prometheus", "Grafana API"],
    metrics: [
      { label: "Typical Cost Reduction", value: "28% – 42%" },
      { label: "Data Freshness", value: "Real-time" },
      { label: "Agent Overhead", value: "< 0.5% CPU" },
    ],
    icon: "ph-chart-polar",
  },
  {
    id: "launchengine",
    name: "Vesharo LaunchEngine",
    tagline: "Production-Grade Full-Stack SaaS Accelerator",
    category: "SaaS Foundation",
    status: "Production Live",
    description:
      "Our battle-tested enterprise SaaS starter framework containing hardened auth, multi-tenancy, RBAC, Stripe billing, and audit logging.",
    valueProp:
      "Cuts 6 to 8 weeks off client project kickoffs without proprietary licensing fees. 100% clean code that is handed over to the client on day one.",
    architectureHighlight: "Modular clean architecture with strict domain separation, typed APIs, and automated CI/CD.",
    features: [
      "Enterprise Multi-Tenancy with organization & team workspaces",
      "Auth ready with MFA, Passkeys, OAuth, and SAML/SSO",
      "Stripe customer portal, seat-based and usage-based subscriptions",
      "Immutable audit log compliant with SOC 2 requirements",
    ],
    techStack: ["Next.js / Astro", "React 19", "TypeScript", "Prisma / Drizzle", "PostgreSQL", "TailwindCSS"],
    metrics: [
      { label: "Time Saved", value: "240+ dev hours" },
      { label: "Test Coverage", value: "92% automated" },
      { label: "Client IP", value: "100% Owned" },
    ],
    icon: "ph-rocket",
  },
  {
    id: "documind-ai",
    name: "Vesharo DocuMind AI",
    tagline: "Private Enterprise Document Intelligence & Semantic RAG",
    category: "AI Platform",
    status: "Active Lab",
    description:
      "Secure retrieval-augmented generation (RAG) platform that indexes corporate knowledge bases, contracts, and technical docs with zero data leakage.",
    valueProp:
      "Allows enterprise teams to query private documents with grounded citations, semantic relevance ranking, and strict data residency controls.",
    architectureHighlight: "Hybrid dense-sparse vector search (Qdrant + BM25) with semantic reranking and token guardrails.",
    features: [
      "Zero data training policy — data never leaves customer VPC",
      "Multi-format ingestion (PDF, DOCX, Markdown, OCR scanned files)",
      "Source verification with clickable sentence-level citations",
      "Role-based document permissions and query redacting",
    ],
    techStack: ["Python", "FastAPI", "Qdrant", "Ollama / Claude API", "LangChain", "PostgreSQL pgvector"],
    metrics: [
      { label: "Retrieval Accuracy", value: "96.4%" },
      { label: "Privacy Guarantee", value: "Zero Retention" },
      { label: "Search Latency", value: "< 280ms" },
    ],
    icon: "ph-file-magnifying-glass",
  },
];
