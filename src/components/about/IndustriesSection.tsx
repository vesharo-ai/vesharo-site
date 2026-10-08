"use client";
import React from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";

/**
 * IndustriesSection — verticals Vesharo serves.
 *
 * Shows the sectors we operate in, with the specific challenge each
 * industry brings. No client names or project outcomes are mentioned.
 */
const industries: {
  icon: string;
  name: string;
  description: string;
  tags: string[];
}[] = [
  {
    icon: "ph-currency-dollar-simple",
    name: "Fintech & Banking",
    description:
      "Payments platforms, lending systems, trading dashboards and digital wallets — built with PCI-conscious backend design, biometric auth, and full audit trails.",
    tags: ["Payments", "Lending", "Trading", "Wallets"],
  },
  {
    icon: "ph-heartbeat",
    name: "Healthcare & Telemedicine",
    description:
      "Patient portals, EHR integrations, appointment scheduling and remote consultation platforms — designed to HIPAA-aware standards with WCAG 2.2 AA accessibility.",
    tags: ["Patient Portals", "EHR", "Telehealth", "HIPAA"],
  },
  {
    icon: "ph-truck",
    name: "Logistics & Supply Chain",
    description:
      "Fleet management, route optimization, load tracking and warehouse operations — event-driven architectures that replace spreadsheets with real-time operational data.",
    tags: ["Fleet Ops", "Route Planning", "Inventory", "Tracking"],
  },
  {
    icon: "ph-storefront",
    name: "eCommerce & Retail",
    description:
      "Headless commerce storefronts, OMS integrations, demand forecasting and loyalty platforms — engineered for traffic spikes and inventory accuracy at scale.",
    tags: ["Headless Commerce", "OMS", "Analytics", "Loyalty"],
  },
  {
    icon: "ph-graduation-cap",
    name: "EdTech & Learning",
    description:
      "Learning management systems, interactive content platforms, progress tracking and certification engines — built for scale from dozens to millions of learners.",
    tags: ["LMS", "Content Delivery", "Assessments", "Certificates"],
  },
  {
    icon: "ph-factory",
    name: "Manufacturing & Industry",
    description:
      "IoT dashboards, production planning tools, quality management systems and ERP modernization — replacing legacy stacks with modern, maintainable platforms.",
    tags: ["IoT", "ERP", "Production", "Quality"],
  },
];

function IndustriesSection() {
  return (
    <section
      className="tz-industries tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 tz-bg-neutral2"
      aria-labelledby="industries-heading"
    >
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <SectionSubtitle subtitle="Industry Experience" />
          <h2
            id="industries-heading"
            className="tz-display-2 text-uppercase tz-text-neutral5"
          >
            Sectors we work in
          </h2>
          <p
            className="tz-text-l tz-text-neutral6 mx-auto text-center mt-3"
            style={{ maxWidth: "660px" }}
          >
            Every industry has domain-specific constraints. We have worked in
            enough of them to understand the rules before the first sprint
            starts — not discover them mid-project.
          </p>
        </div>

        <ul
          className="tz-industries__grid"
          role="list"
          aria-label="Industries served by Vesharo"
        >
          {industries.map((industry) => (
            <li key={industry.name} className="tz-industries__card">
              <div
                className="tz-industries__icon-wrap"
                aria-hidden="true"
              >
                <i className={`ph ${industry.icon}`} />
              </div>
              <h3 className="tz-industries__name">{industry.name}</h3>
              <p className="tz-industries__desc">{industry.description}</p>
              <ul
                className="tz-industries__tags"
                aria-label={`${industry.name} capabilities`}
              >
                {industry.tags.map((tag) => (
                  <li key={tag} className="tz-industries__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default IndustriesSection;
