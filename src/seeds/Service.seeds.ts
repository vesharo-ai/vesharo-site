export type ServiceProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCard1Type = {
  number: string;
  id: string;
  title: string;
  promise: string;
  description: string;
  whoFor: string;
  whatWeDeliver: string[];
  capabilities: string[];
  link: string;
  icon: string;
  concept: string;
  conceptLabel: string;
  engagementNote: string;
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
};

export const serviceCards: ServiceCard1Type[] = [
  {
    number: "01",
    id: "web-development",
    title: "Custom Web Applications",
    promise: "Fast, resilient web platforms engineered to scale seamlessly as your user base expands.",
    description:
      "Modern, cloud-native web applications built for speed, security, and maintainability. We engineer custom SaaS products, customer portals, and internal dashboards using React, Next.js, Astro, Node.js, and Python with automated CI/CD.",
    whoFor:
      "Startups building their core digital product, mid-market businesses replacing spreadsheets, and teams needing a web platform that will not become a bottleneck under traffic growth.",
    whatWeDeliver: [
      "Production-ready web application with modular, type-safe architecture",
      "Robust API integration and database schema design",
      "Automated CI/CD deployment pipelines and staging environment",
      "100% intellectual property, clean Git repository, and runbook handover",
    ],
    capabilities: ["SaaS Platforms", "Customer Portals", "Admin Dashboards", "Progressive Web Apps"],
    link: "/services/web-development",
    icon: "ph-browser",
    concept: "/images/service/concept-web-development.svg",
    conceptLabel: "Composable frontend, typed API, query cache",
    engagementNote: "Discovery sprint first, then dedicated build pod",
    process: [
      {
        step: "01",
        title: "Architecture & Schema",
        description: "Map data flows, user journeys, and component structure before writing code.",
      },
      {
        step: "02",
        title: "Sprint Implementation",
        description: "Two-week agile sprints with working staging builds and automated testing.",
      },
      {
        step: "03",
        title: "Security & Performance",
        description: "Hardening session security, accessibility audits, and Core Web Vitals optimization.",
      },
      {
        step: "04",
        title: "Launch & IP Handover",
        description: "Zero-downtime production deployment, full source handover, and operational training.",
      },
    ],
    faqs: [
      {
        question: "Who owns the code for custom web applications built by Vesharo?",
        answer:
          "You own 100% of the code, intellectual property, repositories, and cloud resources from commit number one. Vesharo never locks clients into proprietary software licenses.",
      },
      {
        question: "What tech stack do you recommend for custom web apps?",
        answer:
          "We primarily engineer in TypeScript with React, Next.js, or Astro for user interfaces, and Node.js, Go, or Python for backend APIs, paired with PostgreSQL and Redis.",
      },
    ],
  },
  {
    number: "02",
    id: "mobile-development",
    title: "Mobile App Development",
    promise: "Intuitive, high-performance mobile apps for iOS and Android that users love opening.",
    description:
      "Native and cross-platform mobile apps engineered with React Native and Flutter. We build responsive, offline-first mobile products with smooth 60fps animations, biometric authentication, and robust store deployment pipelines.",
    whoFor:
      "Founders launching new mobile services, fintech and healthcare companies requiring biometric security, and businesses seeking a cohesive mobile experience across both Apple iOS and Google Android.",
    whatWeDeliver: [
      "Cross-platform or native mobile app compiled for iOS and Android",
      "Secure backend API integration with tokenized authentication",
      "App Store and Google Play compliance review and submission management",
      "Crash reporting, telemetry, and automated release configuration",
    ],
    capabilities: ["iOS & Android Apps", "Fintech & Healthcare", "Real-time Sync", "App Store Deployment"],
    link: "/services/mobile-development",
    icon: "ph-device-mobile",
    concept: "/images/service/concept-mobile-development.svg",
    conceptLabel: "One product surface, every device class",
    engagementNote: "Dedicated engineering pod, two-week sprints",
    process: [
      {
        step: "01",
        title: "UX Flow & Device Design",
        description: "Wireframing touch targets, offline edge cases, and platform-native gestures.",
      },
      {
        step: "02",
        title: "Feature Sprints",
        description: "Iterative feature builds distributed to your team via TestFlight and internal tracks.",
      },
      {
        step: "03",
        title: "Store Policy Hardening",
        description: "Verifying privacy nutrition labels, permissions, and security compliance.",
      },
      {
        step: "04",
        title: "App Store Publishing",
        description: "Handling app store review approval, production rollout, and launch telemetry.",
      },
    ],
    faqs: [
      {
        question: "Do you build native or cross-platform mobile apps?",
        answer:
          "We build with React Native and Flutter for maximum speed and shared code efficiency, alongside native Swift/Kotlin when deep hardware APIs are required.",
      },
      {
        question: "How do you handle App Store and Play Store approvals?",
        answer:
          "We manage the entire submission pipeline, addressing guidelines, security reviews, and privacy nutrition labels until your app is live.",
      },
    ],
  },
  {
    number: "03",
    id: "cloud-devops",
    title: "Cloud Engineering & DevOps",
    promise: "Resilient, automated cloud infrastructure that prevents outages and keeps hosting bills lean.",
    description:
      "Cloud architecture, automated CI/CD pipelines, Kubernetes orchestration, and zero-downtime migrations across AWS, Google Cloud, and Azure. We design infrastructure as code so your environments are reproducible and secure.",
    whoFor:
      "Engineering teams experiencing deployment delays, companies spending too much on unmanaged cloud resources, and organizations migrating off aging servers.",
    whatWeDeliver: [
      "Infrastructure as Code (Terraform / OpenTofu) configuration",
      "Automated CI/CD build, test, and zero-downtime deployment pipelines",
      "Container orchestration (Docker & Kubernetes) with health monitoring",
      "Cloud FinOps cost audit with rightsizing recommendations",
    ],
    capabilities: ["Infrastructure as Code", "Docker & Kubernetes", "CI/CD Automation", "Cost & Security Audits"],
    link: "/services/cloud-devops",
    icon: "ph-cloud",
    concept: "/images/service/concept-cloud-devops.svg",
    conceptLabel: "Commit to build, build to production, automatically",
    engagementNote: "Fixed-scope sprint or phased infrastructure modernization",
    process: [
      {
        step: "01",
        title: "Topology & Audit",
        description: "Assessing current cloud spend, single points of failure, and deployment friction.",
      },
      {
        step: "02",
        title: "IaC Blueprinting",
        description: "Writing declarative Terraform templates for immutable, version-controlled environments.",
      },
      {
        step: "03",
        title: "Pipeline Automation",
        description: "Implementing automated testing gates, container builds, and canary rollouts.",
      },
      {
        step: "04",
        title: "Zero-Downtime Cutover",
        description: "Executing safe production cutovers with live monitoring and instant rollback paths.",
      },
    ],
    faqs: [
      {
        question: "Can you migrate our application to the cloud without customer downtime?",
        answer:
          "Yes. We use dual-run databases, blue/green deployments, and DNS routing to transition active customer traffic with zero downtime.",
      },
      {
        question: "Do you support multi-cloud environments?",
        answer:
          "Yes, we build and manage cloud infrastructure across Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, and bare metal.",
      },
    ],
  },
  {
    number: "04",
    id: "enterprise-solutions",
    title: "Enterprise Modernization",
    promise: "Safely modernize critical legacy systems without halting daily business operations.",
    description:
      "Legacy software modernization, ERP/CRM system integrations, and modular architecture refactoring. Using the Martin Fowler strangler-fig pattern, we replace brittle legacy modules incrementally while existing systems continue running safely.",
    whoFor:
      "Enterprises running mission-critical legacy software that cannot afford a risky 'big-bang' rewrite, and businesses needing modern API layers over legacy databases.",
    whatWeDeliver: [
      "Strangler-fig architecture plan and legacy dependency register",
      "Modern microservices and API gateways sitting in front of legacy data",
      "Automated regression test harness preventing data corruption",
      "Phased operational rollout schedule with zero loss of business continuity",
    ],
    capabilities: ["Legacy Strangler Pattern", "API & ERP Integrations", "Role-Based Access", "High-Compliance Systems"],
    link: "/services/enterprise-solutions",
    icon: "ph-buildings",
    concept: "/images/service/concept-enterprise-solutions.svg",
    conceptLabel: "Modern surface in front, legacy intact behind",
    engagementNote: "Phased modernization programme with a named delivery owner",
    process: [
      {
        step: "01",
        title: "Legacy Assessment",
        description: "Auditing monolithic codebases, undocumented schemas, and security liabilities.",
      },
      {
        step: "02",
        title: "Facade Gateway",
        description: "Deploying an API routing facade that decouples frontend clients from legacy backends.",
      },
      {
        step: "03",
        title: "Incremental Migration",
        description: "Re-engineering isolated domain capabilities into clean services sprint by sprint.",
      },
      {
        step: "04",
        title: "Decommissioning",
        description: "Retiring legacy subsystems only after new services prove 100% operational reliability.",
      },
    ],
    faqs: [
      {
        question: "How does the strangler-fig pattern prevent modernization failures?",
        answer:
          "Instead of a 12-month rewrite where value is delayed, we carve out one business module at a time. Each module ships to production independently, delivering immediate value with zero risk of total system failure.",
      },
      {
        question: "Will our staff need retraining?",
        answer:
          "We build intuitive modern interfaces and provide comprehensive documentation, runbooks, and hands-on walkthroughs for your engineering and operational teams.",
      },
    ],
  },
  {
    number: "05",
    id: "data-ai",
    title: "Data & AI Solutions",
    promise: "Turn scattered operational data and AI capabilities into measurable business advantages.",
    description:
      "Reliable ETL data pipelines, real-time analytics warehouses, and private enterprise LLM / AI integrations. We build secure vector search and automation systems that operate strictly within your cloud perimeter with zero data leakage.",
    whoFor:
      "Organizations sitting on valuable operational data they cannot currently analyze, and businesses looking to automate knowledge search and customer interactions with private AI models.",
    whatWeDeliver: [
      "Automated data extraction and transformation pipelines (ETL/ELT)",
      "Real-time analytical dashboards and reporting datamarts",
      "Private Enterprise RAG (Retrieval-Augmented Generation) document search",
      "Strict data privacy, governance, and audit logging compliance",
    ],
    capabilities: ["Data Warehousing", "Predictive Analytics", "LLM Workflows", "Vector Search & Retrieval"],
    link: "/services/data-ai",
    icon: "ph-brain",
    concept: "/images/service/concept-data-ai.svg",
    conceptLabel: "Raw events in, decisions out",
    engagementNote: "Discovery sprint, then incremental data engineering pod",
    process: [
      {
        step: "01",
        title: "Data Source Audit",
        description: "Mapping database schemas, third-party APIs, and data quality issues.",
      },
      {
        step: "02",
        title: "Pipeline Construction",
        description: "Engineering fault-tolerant ingestion pipelines with automated validation.",
      },
      {
        step: "03",
        title: "Model & Vector Indexing",
        description: "Configuring vector databases and semantic search with citation guardrails.",
      },
      {
        step: "04",
        title: "Operational Dashboard",
        description: "Deploying high-speed reporting views and automated alerting for key metrics.",
      },
    ],
    faqs: [
      {
        question: "Does our proprietary company data get shared with public AI models?",
        answer:
          "Never. We implement zero-retention private AI pipelines within your own VPC or dedicated enterprise instances so your IP and customer data remain strictly confidential.",
      },
      {
        question: "What databases do you work with?",
        answer:
          "We engineer pipelines with PostgreSQL, TimescaleDB, ClickHouse, BigQuery, Snowflake, and vector stores like Qdrant and pgvector.",
      },
    ],
  },
  {
    number: "06",
    id: "ui-ux-design",
    title: "Product & UI/UX Design",
    promise: "Clean, intuitive digital interfaces engineered to turn complex workflows into simple user actions.",
    description:
      "Research-backed user interface design and reusable design systems. We turn complicated enterprise flows and consumer products into accessible, high-converting digital experiences that engineers love building.",
    whoFor:
      "Product founders seeking high-polish UI before development, enterprise platforms needing to simplify confusing screens, and software teams requiring a unified design token system.",
    whatWeDeliver: [
      "Figma design system with reusable components and tokens",
      "Interactive clickable prototypes for user validation and stakeholder sign-off",
      "WCAG 2.1 AA accessibility audit and color contrast verification",
      "Pixel-perfect developer handoff specs with responsive states",
    ],
    capabilities: ["User Flow Mapping", "Interactive Prototyping", "Design Systems", "Usability Testing"],
    link: "/services/ui-ux-design",
    icon: "ph-pencil-ruler",
    concept: "/images/service/concept-ui-ux-design.svg",
    conceptLabel: "Tokens and components, not one-off screens",
    engagementNote: "Design system first, then UI build support",
    process: [
      {
        step: "01",
        title: "User Journey Mapping",
        description: "Uncovering user pain points, drop-off triggers, and primary conversion paths.",
      },
      {
        step: "02",
        title: "Wireframes & Prototyping",
        description: "Iterating low-fidelity screen flows rapidly before high-fidelity visual styling.",
      },
      {
        step: "03",
        title: "Design System Assembly",
        description: "Crafting accessible color palettes, typography scales, and modular UI components.",
      },
      {
        step: "04",
        title: "Engineering Handoff",
        description: "Exporting tokenized design specs directly aligned with frontend component props.",
      },
    ],
    faqs: [
      {
        question: "Do your designers understand frontend engineering constraints?",
        answer:
          "Yes. Our designers design with HTML/CSS semantics, flexbox/grid layouts, and component props in mind, ensuring 100% feasibility during engineering.",
      },
      {
        question: "Are your designs accessible for all users?",
        answer:
          "Every interface is designed to meet or exceed WCAG 2.1 AA accessibility standards, including contrast ratios, focus states, and screen reader structure.",
      },
    ],
  },
];
