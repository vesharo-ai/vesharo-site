export type FaqItemType = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItemType[] = [
  {
    id: "One",
    question: "What software development and IT consulting services does Vesharo provide?",
    answer:
      "Vesharo provides custom software development, IT consulting, cloud engineering, and product-based technology solutions. Our two main service tracks are: (1) Custom Product Engineering — full-stack web applications (React, Next.js, Node.js, Python), mobile apps for iOS and Android (React Native and Flutter), SaaS platforms, and product design; and (2) IT Consulting and Systems Architecture — cloud infrastructure (AWS, GCP, Azure), Kubernetes, legacy platform modernization, data pipelines, AI and LLM integrations, and dedicated senior engineering pods. We work with startups, mid-market companies, and enterprises across fintech, healthcare, logistics, eCommerce, and manufacturing.",
  },
  {
    id: "Two",
    question: "Who owns the code and intellectual property when working with Vesharo?",
    answer:
      "You own 100% of the intellectual property from the first line of code — not after a handover, not after a final payment. Source code, database schemas, infrastructure definitions, and design files are pushed to your repositories, under your accounts, on your billing from day one. We sign a contract confirming this before any work begins. There is no vendor lock-in, no proprietary platform, and no licence fee after the engagement ends.",
  },
  {
    id: "Three",
    question: "How is Vesharo different from a traditional software agency or offshore body shop?",
    answer:
      "Vesharo differs from traditional agencies in three critical ways. First, the senior engineers who scope your project are the same people who build it — we do not use juniors or interns once the sale is closed. Second, we deliver against a fixed scope with approved change requests, not open-ended hourly billing that drifts. Third, you own all IP, repositories, and cloud accounts from the start, unlike proprietary platforms with vendor lock-in. Compared to offshore body shops, every engineer is vetted, the process is transparent with bi-weekly demos, and you communicate directly via Slack or Teams — not through a project manager relay.",
  },
  {
    id: "Four",
    question: "How does Vesharo price software engineering engagements?",
    answer:
      "Vesharo offers three transparent engagement models. The Discovery & MVP Sprint starts from $5,900 and covers a two-week architectural discovery, clickable prototype, technical roadmap, PRD, database schema, and API specifications — everything needed to scope and price a build accurately. The Dedicated Engineering Pod starts from $9,500 per month and embeds a senior full-stack engineering team into your sprint cycle with two-week delivery cadences, automated CI/CD, and direct Slack integration. Enterprise Modernization is priced on scope and covers large-scale migrations, ERP integration, SOC2 support, and SLA-backed production support with a named delivery director.",
  },
  {
    id: "Five",
    question: "Can Vesharo rescue or modernize an existing codebase?",
    answer:
      "Yes, legacy system rescue and modernization is one of our most common engagements. We start with a two-week architectural assessment that produces a dependency audit, risk-ranked refactoring plan, and an honest recommendation on whether to refactor, re-platform, or replace. From there we use the strangler-pattern migration approach: modern surfaces shipped to production continuously while the legacy system keeps running. We add automated test coverage before refactoring any module, not after, so the process is verifiable at every step.",
  },
  {
    id: "Six",
    question: "Does Vesharo sign NDAs before technical discussions?",
    answer:
      "Yes. We sign a mutual NDA before reviewing any sensitive requirements, existing codebases, database schemas, or proprietary business logic. You can request an NDA at any point before or during the initial scoping call. We treat all prospective client information as confidential regardless of whether an NDA is in place, but we are happy to put it in writing before any detail is shared.",
  },
  {
    id: "Seven",
    question: "How does Vesharo ensure software quality and production reliability?",
    answer:
      "Vesharo enforces quality across the entire delivery lifecycle. Every pull request goes through code review by a senior engineer. Automated test suites (unit, integration, and end-to-end) are written alongside features, not as an afterthought. Static analysis and dependency vulnerability scanning run in CI. Staging environments are always available and match production configuration. Deployments are zero-downtime with automated rollback. Post-launch, we include an agreed support window in every proposal with defined response times, and ongoing monitoring with alerting via the observability stack we set up during the build.",
  },
  {
    id: "Eight",
    question: "Where is Vesharo based and how do remote projects work?",
    answer:
      "Vesharo is headquartered in Ahmedabad, Gujarat, India, and works with clients in North America, Europe, Australia, and the Middle East. Our engineers work in IST (UTC+5:30) and provide daily overlapping hours with US, UK, and Australian time zones. Communication happens in a dedicated Slack or Microsoft Teams channel. You get a staging environment to check at any time, fortnightly sprint demos, and direct access to the engineers building your product — not a project manager intermediary.",
  },
  {
    id: "Nine",
    question: "Does Vesharo also develop its own software products?",
    answer:
      "Yes. Alongside client engagements, Vesharo has a product engineering track where we design, build, and operate our own SaaS tools and platforms. This means our engineers maintain a product mindset — they think about user adoption, infrastructure cost, and long-term maintainability, not just sprint tickets. When we work on your product, that experience informs every architecture and design decision we make.",
  },
  {
    id: "Ten",
    question: "What happens after a project is delivered?",
    answer:
      "Every Vesharo engagement includes a defined post-launch support window — minimum two weeks, typically 30 to 90 days depending on project size. During this period we monitor production, resolve any issues within the agreed SLA, and complete a handover that includes runbooks, architecture documentation, deployment guides, and a live walkthrough with your team. If you want ongoing support after the handover window, we offer a simple monthly retainer with no lock-in. If you are bringing in an in-house team or another vendor, we treat that as a success and make the transition as smooth as the build.",
  },
];

