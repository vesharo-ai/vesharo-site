import { useState } from "react";

interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthly: string;
  description: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: "discovery",
    name: "Discovery Sprint",
    subtitle: "MVP & prototype, 4–6 weeks",
    monthly: "From $5,900",
    description: "A fixed-scope sprint with clear milestones, a technical blueprint, and a working prototype.",
    features: [
      "2-week architectural discovery & prototype",
      "Comprehensive technical roadmap & PRD",
      "Database schema & API specifications",
      "Fixed budget & milestone timeline",
      "Full IP ownership & handover",
    ],
  },
  {
    id: "pod",
    name: "Dedicated Pod",
    subtitle: "Continuous delivery, 2-week sprints",
    monthly: "$9,500",
    description: "A senior engineering pod integrated into your team with transparent, sprint-by-sprint delivery.",
    features: [
      "Senior Full-Stack Developer Pod",
      "Two-week sprints with weekly live demos",
      "Automated CI/CD & staging deployments",
      "Direct Slack/Teams channel integration",
      "Continuous code review & QA automation",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Modernisation",
    subtitle: "Cross-functional team, fixed scope",
    monthly: "Custom",
    description: "A dedicated cross-functional team with a solution architect for large-scale platform modernisation.",
    features: [
      "Cross-functional team with Solution Architect",
      "Legacy modernization & cloud migration",
      "Security, compliance & SOC2 audit support",
      "Dedicated Delivery Director",
      "SLA-backed 24/7 production support",
    ],
  },
];

function Pricing1({ bgColor = "#0f0f0f" }: { bgColor?: string }) {
  const [activePlan, setActivePlan] = useState<string>("pod");

  return (
    <>
      <div className="tz-pricing" style={{ backgroundColor: bgColor }}>
        <div className="container">
          <div className="row g-4 align-items-center g-lg-5">
            <div className="col-lg-6">
              <div className="tz-section-top">
                <div className="tz-section-subtitle">
                  <span className="tz-section-subtitle__line" />
                  <h4 className="text-uppercase tz-text-primary">
                    Engagement Models
                  </h4>
                </div>
                <h2 className="tz-display-2 text-uppercase tz-text-neutral5">
                  Transparent Pricing
                </h2>
                <p className="tz-pricing__desc tz-text-l tz-text-neutral6">
                  Every project starts with a fixed-scope discovery sprint. From
                  there you can choose the delivery model that fits your timeline
                  and team size.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tz-pricing__cards">
                {pricingPlans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    className={`
                      tz-pricing__card
                      ${activePlan === plan.id ? "tz-pricing__card--active" : ""}
                    `}
                    onClick={() => setActivePlan(plan.id)}
                    aria-pressed={activePlan === plan.id}
                    aria-label={`Select ${plan.name} plan`}
                  >
                    <span className="tz-pricing__card-name">{plan.name}</span>
                    <span className="tz-pricing__card-subtitle">{plan.subtitle}</span>
                    <span className="tz-pricing__card-price">
                      <span className="tz-price">{plan.monthly}</span>
                      <sub>/ month</sub>
                    </span>
                    <span className="tz-pricing__card-bullet">
                      <i className="ph ph-check" />
                    </span>
                    <span className="tz-pricing__card-arrow">
                      <i className="ph ph-arrow-up-right" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tz-pricing-detail tz-bg-neutral2 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="tz-section-top">
                <div className="tz-section-subtitle">
                  <span className="tz-section-subtitle__line" />
                  <h3 className="text-uppercase tz-text-primary">
                    {pricingPlans.find((p) => p.id === activePlan)?.name}
                  </h3>
                </div>
                <h2 className="tz-pricing-detail__title tz-display-2 tz-text-neutral5">
                  {pricingPlans.find((p) => p.id === activePlan)?.description}
                </h2>
                <ul className="tz-pricing-detail__features">
                  {pricingPlans.find((p) => p.id === activePlan)?.features.map((feature) => (
                    <li key={feature} className="tz-pricing-detail__feature">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="tz-buttons">
                  <a
                    href="/contact"
                    className="tz-button text-uppercase fw-medium tz-text-m"
                  >
                    Get a fixed-scope quote
                  </a>
                  <a
                    href="/contact"
                    className="tz-button-circle"
                    aria-label="Get a fixed-scope quote"
                  >
                    <i className="ph ph-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tz-pricing-detail__aside">
                <p className="tz-pricing-detail__aside-title">
                  How pricing works
                </p>
                <ol className="tz-pricing-detail__aside-steps">
                  <li>We align on scope, timeline, and a fixed budget in a two-week sprint.</li>
                  <li>You approve the technical blueprint before any engineering work begins.</li>
                  <li>Delivery runs on two-week sprints with live demos and transparent reporting.</li>
                  <li>You own 100% of the code, infrastructure, and IP at handover.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing1;
