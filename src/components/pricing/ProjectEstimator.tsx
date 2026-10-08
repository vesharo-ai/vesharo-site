import { useState, useId } from "react";

interface ServiceOption {
  id: string;
  name: string;
  baseWeeks: number;
  baseCost: string;
  recommendedModel: string;
}

const serviceOptions: ServiceOption[] = [
  {
    id: "web",
    name: "Custom Web App / SaaS",
    baseWeeks: 5,
    baseCost: "$5,900 – $14,500",
    recommendedModel: "Discovery Sprint → Dedicated Pod",
  },
  {
    id: "mobile",
    name: "Mobile App (iOS & Android)",
    baseWeeks: 6,
    baseCost: "$7,500 – $16,000",
    recommendedModel: "Discovery Sprint → Mobile Pod",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps Architecture",
    baseWeeks: 4,
    baseCost: "$4,500 – $11,000",
    recommendedModel: "Fixed-Scope Cloud Sprint",
  },
  {
    id: "enterprise",
    name: "Enterprise Modernization",
    baseWeeks: 8,
    baseCost: "$15,000 – $35,000+",
    recommendedModel: "Enterprise Modernization Pod",
  },
  {
    id: "data-ai",
    name: "Data & AI Engineering",
    baseWeeks: 5,
    baseCost: "$6,500 – $15,000",
    recommendedModel: "Data & AI Sprint",
  },
  {
    id: "ui-ux",
    name: "UI/UX & Design System",
    baseWeeks: 3,
    baseCost: "$3,500 – $7,500",
    recommendedModel: "Product Design Sprint",
  },
];

export default function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState<string>("web");
  const [complexity, setComplexity] = useState<"mvp" | "scale" | "enterprise">("mvp");
  const [features, setFeatures] = useState<string[]>(["auth", "api"]);
  const typeSelectId = useId();

  const activeService = serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0];

  const toggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter((f) => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  // Dynamic estimate calculations
  let calculatedWeeks = activeService.baseWeeks;
  if (complexity === "scale") calculatedWeeks += 3;
  if (complexity === "enterprise") calculatedWeeks += 6;
  calculatedWeeks += Math.floor(features.length * 0.5);

  const contactUrl = `/contact?service=${encodeURIComponent(activeService.name)}&complexity=${complexity}&features=${features.join(",")}`;

  return (
    <section className="tz-estimator tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 tz-bg-neutral1">
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <div className="tz-section-subtitle">
            <span className="tz-section-subtitle__line" />
            <h4 className="text-uppercase tz-text-primary">Interactive Scope Estimator</h4>
          </div>
          <h2 className="tz-display-2 text-uppercase tz-text-neutral5">
            Estimate Your Project Scope
          </h2>
          <p className="tz-text-l tz-text-neutral6 mx-auto" style={{ maxWidth: "680px" }}>
            Select your technical track and requirements to get a realistic timeline and engagement blueprint before speaking with our engineering team.
          </p>
        </div>

        <div className="row g-4 g-lg-5 align-items-stretch">
          {/* Controls Column */}
          <div className="col-lg-7">
            <div className="p-4 p-lg-5 rounded-3 tz-bg-neutral2 border border-secondary h-100">
              {/* Step 1: Select Type */}
              <div className="mb-4">
                <label htmlFor={typeSelectId} className="tz-text-l text-white fw-medium mb-3 d-block">
                  1. What are you building?
                </label>
                <div className="row g-2">
                  {serviceOptions.map((srv) => (
                    <div key={srv.id} className="col-sm-6">
                      <button
                        type="button"
                        className={`btn w-100 text-start p-3 rounded-2 border ${
                          selectedService === srv.id
                            ? "btn-primary text-white border-primary"
                            : "btn-outline-secondary text-light border-secondary"
                        }`}
                        onClick={() => setSelectedService(srv.id)}
                        aria-pressed={selectedService === srv.id}
                      >
                        <div className="fw-semibold tz-text-m">{srv.name}</div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Complexity Stage */}
              <div className="mb-4">
                <span className="tz-text-l text-white fw-medium mb-3 d-block">
                  2. Project Stage &amp; Scope
                </span>
                <div className="row g-2">
                  <div className="col-sm-4">
                    <button
                      type="button"
                      className={`btn w-100 text-start p-3 rounded-2 border ${
                        complexity === "mvp"
                          ? "btn-primary text-white border-primary"
                          : "btn-outline-secondary text-light border-secondary"
                      }`}
                      onClick={() => setComplexity("mvp")}
                    >
                      <div className="fw-bold tz-text-m">MVP Sprint</div>
                      <div className="tz-text-s opacity-75">4–6 weeks initial release</div>
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <button
                      type="button"
                      className={`btn w-100 text-start p-3 rounded-2 border ${
                        complexity === "scale"
                          ? "btn-primary text-white border-primary"
                          : "btn-outline-secondary text-light border-secondary"
                      }`}
                      onClick={() => setComplexity("scale")}
                    >
                      <div className="fw-bold tz-text-m">Growth / Scaling</div>
                      <div className="tz-text-s opacity-75">Feature expansion pod</div>
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <button
                      type="button"
                      className={`btn w-100 text-start p-3 rounded-2 border ${
                        complexity === "enterprise"
                          ? "btn-primary text-white border-primary"
                          : "btn-outline-secondary text-light border-secondary"
                      }`}
                      onClick={() => setComplexity("enterprise")}
                    >
                      <div className="fw-bold tz-text-m">Enterprise</div>
                      <div className="tz-text-s opacity-75">Multi-system architecture</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3: Architecture Capabilities */}
              <div>
                <span className="tz-text-l text-white fw-medium mb-3 d-block">
                  3. Key Architectural Requirements (Select all that apply)
                </span>
                <div className="row g-2">
                  {[
                    { id: "auth", label: "Secure Auth & RBAC" },
                    { id: "api", label: "REST / GraphQL API Layer" },
                    { id: "payments", label: "Stripe / Payments Gateway" },
                    { id: "realtime", label: "Real-Time Sockets / Events" },
                    { id: "ai", label: "AI / LLM Intelligence Pipeline" },
                    { id: "compliance", label: "SOC2 / HIPAA / GDPR Hardening" },
                  ].map((feat) => {
                    const active = features.includes(feat.id);
                    return (
                      <div key={feat.id} className="col-sm-6">
                        <button
                          type="button"
                          className={`btn w-100 text-start p-2 px-3 rounded-2 border d-flex align-items-center justify-content-between ${
                            active
                              ? "bg-dark text-white border-primary"
                              : "btn-outline-secondary text-muted border-secondary"
                          }`}
                          onClick={() => toggleFeature(feat.id)}
                        >
                          <span className="tz-text-s text-light">{feat.label}</span>
                          <i
                            className={`ph ${active ? "ph-check-square tz-text-primary" : "ph-square text-muted"}`}
                            style={{ fontSize: "1.2rem" }}
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="col-lg-5">
            <div
              className="p-4 p-lg-5 rounded-3 border border-primary h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: "rgba(124, 92, 255, 0.08)" }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary">
                  <span className="badge bg-primary text-white text-uppercase px-3 py-2">
                    Scope Summary
                  </span>
                  <span className="tz-text-s tz-text-neutral6">No Obligation</span>
                </div>

                <div className="mb-4">
                  <span className="tz-text-s text-uppercase tz-text-neutral6 d-block mb-1">
                    Recommended Model
                  </span>
                  <h3 className="tz-text-primary tz-display-4 mb-2">
                    {activeService.recommendedModel}
                  </h3>
                  <p className="tz-text-m tz-text-neutral6 mb-0">
                    Targeted engagement designed to deliver functional milestones in rapid 2-week cycles.
                  </p>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="p-3 rounded-2 tz-bg-neutral2 border border-secondary">
                      <span className="tz-text-s tz-text-neutral6 d-block">Timeline Range</span>
                      <span className="text-white fw-bold tz-text-l">
                        ~{calculatedWeeks} Weeks
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-2 tz-bg-neutral2 border border-secondary">
                      <span className="tz-text-s tz-text-neutral6 d-block">IP Handover</span>
                      <span className="tz-text-primary fw-bold tz-text-l">
                        100% Owned
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="tz-text-s text-uppercase tz-text-neutral6 d-block mb-2">
                    Guaranteed Inclusions
                  </span>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li className="d-flex align-items-center gap-2 tz-text-s text-white">
                      <i className="ph-fill ph-check-circle tz-text-primary" aria-hidden="true" />
                      Senior Engineer pod with Solution Architect
                    </li>
                    <li className="d-flex align-items-center gap-2 tz-text-s text-white">
                      <i className="ph-fill ph-check-circle tz-text-primary" aria-hidden="true" />
                      Automated CI/CD deployment pipelines
                    </li>
                    <li className="d-flex align-items-center gap-2 tz-text-s text-white">
                      <i className="ph-fill ph-check-circle tz-text-primary" aria-hidden="true" />
                      Production code repository &amp; PRD documentation
                    </li>
                    <li className="d-flex align-items-center gap-2 tz-text-s text-white">
                      <i className="ph-fill ph-check-circle tz-text-primary" aria-hidden="true" />
                      Direct Slack/Teams sprint channel
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top border-secondary">
                <a
                  href={contactUrl}
                  className="tz-button tz-button--full tz-text-m text-uppercase fw-semibold"
                >
                  Discuss This Scope With An Engineer
                </a>
                <span className="tz-text-s tz-text-neutral6 text-center d-block mt-2">
                  Written technical assessment within 24 business hours.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
