import React from "react";

interface ConsultingAdvisoryProps {
  bgClass?: string;
}

const consultingPillars = [
  {
    icon: "ph-tree-structure",
    title: "Cloud Architecture & FinOps Strategy",
    subtitle: "AWS · GCP · Azure · Bare Metal",
    description:
      "We design resilient, cost-optimized multi-region cloud topologies. Our FinOps audits routinely reduce unmanaged cloud infrastructure spend by 25–40% while hardening security postures.",
    deliverables: [
      "Cloud Architecture Diagrams & IaC Terraform Blueprints",
      "Cost Allocation & Right-Sizing Audit Report",
      "Disaster Recovery (RTO / RPO) Specifications",
    ],
  },
  {
    icon: "ph-git-pull-request",
    title: "Legacy Modernization & Strangler Strategy",
    subtitle: "Zero Downtime · Incremental Rollout",
    description:
      "Avoid catastrophic 'big-bang' rewrites. We apply the Martin Fowler strangler-fig pattern, carving out high-value microservices and modernizing frontends while existing monolithic platforms continue serving revenue.",
    deliverables: [
      "System Dependency & Data Flow Mapping",
      "Strangler Migration Sequence & Risk Register",
      "Coexistence API Gateway & Dual-Write Architecture",
    ],
  },
  {
    icon: "ph-shield-check",
    title: "Technical Due Diligence & Codebase Audits",
    subtitle: "For Investors, Acquirers & Scaling CTOs",
    description:
      "Rigorous, impartial code audits before funding rounds, acquisitions, or enterprise rollouts. We inspect code quality, security vulnerabilities, open-source license risks, and infrastructure scalability.",
    deliverables: [
      "OWASP Top 10 Security & Vulnerability Scan",
      "Technical Debt Scoring & Refactoring Roadmap",
      "Open-Source Licensing Compliance Review",
    ],
  },
  {
    icon: "ph-users-three",
    title: "Fractional CTO & Systems Advisory",
    subtitle: "Strategic Engineering Leadership",
    description:
      "Senior engineering leadership for scale-ups and enterprises navigating pivotal architectural transitions. We help define tech stacks, hire core engineering talent, and establish automated CI/CD and QA standards.",
    deliverables: [
      "Engineering Standards & PR Review Guidelines",
      "Hiring Scorecards & Technical Interview Frameworks",
      "Vendor Evaluation & Build vs. Buy Feasibility Studies",
    ],
  },
];

export default function ConsultingAdvisory({
  bgClass = "tz-bg-neutral2",
}: ConsultingAdvisoryProps) {
  return (
    <section
      className={`tz-consulting-advisory tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 ${bgClass}`}
      aria-labelledby="consulting-heading"
    >
      <div className="container">
        {/* Section Top Header */}
        <div className="tz-section-top tz-section-top--centered">
          <div className="tz-section-subtitle">
            <span className="tz-section-subtitle__line" />
            <span
              className="text-uppercase tz-text-primary fw-semibold"
              style={{ fontSize: "0.8125rem", letterSpacing: "0.12em" }}
            >
              Strategic Advisory
            </span>
          </div>
          <h2
            id="consulting-heading"
            className="tz-display-2 text-uppercase tz-text-neutral5"
          >
            IT Consulting &amp; Architecture Advisory
          </h2>
          <p
            className="tz-text-l tz-text-neutral6 mx-auto text-center mt-3"
            style={{ maxWidth: "700px" }}
          >
            Beyond hands-on implementation, our senior architects consult on the systems you already have. We unblock scaling bottlenecks, evaluate legacy platforms, and provide high-stakes technical direction.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="row g-4 g-lg-4">
          {consultingPillars.map((pillar, idx) => (
            <div key={idx} className="col-md-6">
              <div
                className="p-4 p-lg-5 rounded-4 h-100 d-flex flex-column justify-content-between transition-all"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(124, 92, 255, 0.2)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "rgba(124, 92, 255, 0.15)",
                        color: "#7C5CFF",
                        fontSize: "1.4rem",
                      }}
                      aria-hidden="true"
                    >
                      <i className={`ph ${pillar.icon}`} />
                    </span>
                    <span className="badge rounded-pill text-white-50 bg-secondary bg-opacity-25 tz-text-s">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="tz-display-3 text-white fw-bold mb-2" style={{ fontSize: "1.375rem" }}>
                    {pillar.title}
                  </h3>
                  <p className="tz-text-m text-white-50 mb-4" style={{ lineHeight: "1.65" }}>
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-25">
                  <div className="text-white-50 tz-text-s text-uppercase fw-semibold mb-2">
                    Tangible Deliverables:
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    {pillar.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="d-flex align-items-start gap-2 tz-text-s text-white">
                        <i
                          className="ph ph-check text-primary mt-1"
                          style={{ color: "#A78BFA", fontSize: "0.875rem" }}
                          aria-hidden="true"
                        />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consulting Process & Call to Action */}
        <div
          className="mt-5 p-4 rounded-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(28, 28, 38, 0.95) 0%, rgba(18, 18, 24, 0.95) 100%)",
            border: "1px solid rgba(124, 92, 255, 0.25)",
          }}
        >
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="badge bg-primary text-white">Advisory Engagement</span>
              <span className="text-white fw-bold tz-text-l">
                Need an architectural second opinion?
              </span>
            </div>
            <p className="text-white-50 tz-text-m mb-0">
              We sign mutual NDAs before any codebase or architectural walkthrough. Receive a preliminary risk summary in 48 hours.
            </p>
          </div>
          <div className="d-flex gap-2 flex-shrink-0">
            <a
              href="/contact?subject=IT%20Consulting%20Advisory"
              className="tz-button text-uppercase fw-medium tz-text-m"
              style={{ padding: "12px 24px" }}
            >
              Book Advisory Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
