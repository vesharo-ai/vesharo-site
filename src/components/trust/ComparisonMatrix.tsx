import { useState } from "react";

interface ComparisonRow {
  dimension: string;
  vesharo: string;
  traditionalAgency: string;
  bodyShops: string;
}

const comparisonData: ComparisonRow[] = [
  {
    dimension: "Engineering Team",
    vesharo: "Senior engineers and architects actively coding and leading your project",
    traditionalAgency: "Senior pitches the account; junior or offshore interns write the code",
    bodyShops: "Random contractors with unknown skills and high churn",
  },
  {
    dimension: "IP & Code Ownership",
    vesharo: "100% full IP ownership from commit #1; clean repository handover",
    traditionalAgency: "Proprietary boilerplate with vendor lock-in or licensing fees",
    bodyShops: "Unclear ownership, fragmented repos, messy licensing",
  },
  {
    dimension: "Delivery Model",
    vesharo: "Fixed-scope discovery sprints or transparent 2-week agile pod cycles",
    traditionalAgency: "Bloated hourly billing with frequent scope creep surprises",
    bodyShops: "Billing for hours logged regardless of actual working output",
  },
  {
    dimension: "Architecture & Quality",
    vesharo: "Production-grade CI/CD, automated testing, scalable cloud-native design",
    traditionalAgency: "Quick templates and low-code wrappers that struggle under real load",
    bodyShops: "No standardized QA, technical debt pushed to the client",
  },
  {
    dimension: "Product Mindset",
    vesharo: "We challenge assumptions and engineer for business outcomes, not just tickets",
    traditionalAgency: "Executes whatever is asked without technical or business validation",
    bodyShops: "Ticket takers with zero strategic insight into your business domain",
  },
  {
    dimension: "Product Accelerators",
    vesharo: "Hardened in-house SaaS and cloud accelerators (LaunchEngine, CoreFlow) cut build time 40–50% with zero licensing fees",
    traditionalAgency: "Builds boilerplate from scratch on client dime or forces recurring framework royalties",
    bodyShops: "Copies unvetted code snippets with unpredictable license risks and high technical debt",
  },
];

export default function ComparisonMatrix({
  bgClass = "tz-bg-neutral2",
}: {
  bgClass?: string;
}) {
  const [activeTab, setActiveTab] = useState<"vesharo" | "traditionalAgency" | "bodyShops">("vesharo");

  return (
    <section
      className={`tz-comparison tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 ${bgClass}`}
      aria-labelledby="comparison-heading"
    >
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <div className="tz-section-subtitle">
            <span className="tz-section-subtitle__line" />
            <h4 className="text-uppercase tz-text-primary">Why Vesharo</h4>
          </div>
          <h2 id="comparison-heading" className="tz-display-2 text-uppercase tz-text-neutral5">
            How We Compare
          </h2>
          <p className="tz-text-l tz-text-neutral6 mx-auto" style={{ maxWidth: "700px" }}>
            We built Vesharo to be the engineering partner we always wanted to hire: transparent, senior-led, technically rigorous, and completely invested in your product&apos;s success.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="d-none d-lg-block">
          <div className="table-responsive rounded-3 border border-secondary overflow-hidden">
            <table
              className="table table-dark table-striped align-middle mb-0"
              style={{ backgroundColor: "#141414" }}
              aria-label="Comparison: Vesharo vs Traditional Agency vs Freelance Body Shop"
            >
              <thead>
                <tr className="border-bottom border-secondary" style={{ backgroundColor: "#1b1b1b" }}>
                  <th scope="col" className="p-4 tz-text-m text-uppercase tz-text-neutral6" style={{ width: "22%" }}>
                    Dimension
                  </th>
                  <th scope="col" className="p-4 tz-text-m text-uppercase text-white border-start border-primary" style={{ width: "32%", backgroundColor: "rgba(124, 92, 255, 0.12)" }}>
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge bg-primary text-white">VESHARO</span>
                      <span className="tz-text-s tz-text-neutral6">Engineering Partner</span>
                    </div>
                  </th>
                  <th scope="col" className="p-4 tz-text-m text-uppercase tz-text-neutral6" style={{ width: "23%" }}>
                    Traditional Agency
                  </th>
                  <th scope="col" className="p-4 tz-text-m text-uppercase tz-text-neutral6" style={{ width: "23%" }}>
                    Freelance / Body Shop
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.dimension} className="border-bottom border-secondary">
                    <td className="p-4 fw-semibold tz-text-neutral5">{row.dimension}</td>
                    <td className="p-4 border-start border-primary" style={{ backgroundColor: "rgba(124, 92, 255, 0.05)" }}>
                      <div className="d-flex align-items-start gap-2">
                        <i className="ph-fill ph-check-circle tz-text-primary mt-1" style={{ fontSize: "1.2rem", flexShrink: 0 }} aria-hidden="true" />
                        <span className="text-white fw-medium tz-text-m">{row.vesharo}</span>
                      </div>
                    </td>
                    <td className="p-4 tz-text-neutral6 tz-text-m">
                      <div className="d-flex align-items-start gap-2">
                        <i className="ph ph-x-circle text-muted mt-1" style={{ fontSize: "1.1rem", flexShrink: 0 }} aria-hidden="true" />
                        <span>{row.traditionalAgency}</span>
                      </div>
                    </td>
                    <td className="p-4 tz-text-neutral6 tz-text-m">
                      <div className="d-flex align-items-start gap-2">
                        <i className="ph ph-x-circle text-muted mt-1" style={{ fontSize: "1.1rem", flexShrink: 0 }} aria-hidden="true" />
                        <span>{row.bodyShops}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Interactive Card View */}
        <div className="d-block d-lg-none">
          <p id="compare-group-label" className="visually-hidden">Select a column to compare</p>
          <div className="btn-group w-100 mb-4" role="group" aria-labelledby="compare-group-label">
            <button
              type="button"
              className={`btn btn-sm ${activeTab === "vesharo" ? "btn-primary" : "btn-outline-secondary text-white"}`}
              onClick={() => setActiveTab("vesharo")}
              aria-pressed={activeTab === "vesharo"}
            >
              Vesharo
            </button>
            <button
              type="button"
              className={`btn btn-sm ${activeTab === "traditionalAgency" ? "btn-primary" : "btn-outline-secondary text-white"}`}
              onClick={() => setActiveTab("traditionalAgency")}
              aria-pressed={activeTab === "traditionalAgency"}
            >
              Traditional Agency
            </button>
            <button
              type="button"
              className={`btn btn-sm ${activeTab === "bodyShops" ? "btn-primary" : "btn-outline-secondary text-white"}`}
              onClick={() => setActiveTab("bodyShops")}
              aria-pressed={activeTab === "bodyShops"}
            >
              Body Shop
            </button>
          </div>

          <div className="d-flex flex-column gap-3">
            {comparisonData.map((row) => (
              <div key={row.dimension} className="p-3 rounded-3 tz-bg-neutral3 border border-secondary">
                <h5 className="tz-text-primary tz-text-m mb-2">{row.dimension}</h5>
                <p className="text-white tz-text-m mb-0">
                  {activeTab === "vesharo" && (
                    <span className="d-flex align-items-start gap-2">
                      <i className="ph-fill ph-check-circle tz-text-primary mt-1" aria-hidden="true" />
                      <span>{row.vesharo}</span>
                    </span>
                  )}
                  {activeTab === "traditionalAgency" && (
                    <span className="d-flex align-items-start gap-2 text-muted">
                      <i className="ph ph-x-circle mt-1" aria-hidden="true" />
                      <span>{row.traditionalAgency}</span>
                    </span>
                  )}
                  {activeTab === "bodyShops" && (
                    <span className="d-flex align-items-start gap-2 text-muted">
                      <i className="ph ph-x-circle mt-1" aria-hidden="true" />
                      <span>{row.bodyShops}</span>
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="tz-buttons justify-content-center mt-5">
          <a href="/contact" className="tz-button text-uppercase fw-medium tz-text-m">
            Discuss Your Project
          </a>
          <a href="/pricing" className="tz-button-circle" aria-label="Explore pricing and engagement models">
            <i className="ph ph-arrow-up-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
