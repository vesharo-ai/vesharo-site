import { useState } from "react";
import { vesharoProducts } from "@/seeds/Products.seeds";

interface ProductsSectionProps {
  bgClass?: string;
  showSubtitle?: boolean;
}

export default function ProductsSection({
  bgClass = "tz-bg-neutral1",
  showSubtitle = true,
}: ProductsSectionProps) {
  const [activeProductId, setActiveProductId] = useState<string>(vesharoProducts[0].id);

  const activeProduct =
    vesharoProducts.find((p) => p.id === activeProductId) || vesharoProducts[0];

  return (
    <section
      className={`tz-products-section tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 ${bgClass}`}
      aria-labelledby="products-section-heading"
    >
      <div className="container">
        {/* Section Top Heading */}
        <div className="tz-section-top tz-section-top--centered">
          {showSubtitle && (
            <div className="tz-section-subtitle">
              <span className="tz-section-subtitle__line" />
              <span
                className="text-uppercase tz-text-primary fw-semibold"
                style={{ fontSize: "0.8125rem", letterSpacing: "0.12em" }}
              >
                Vesharo Labs &amp; Products
              </span>
            </div>
          )}
          <h2
            id="products-section-heading"
            className="tz-display-2 text-uppercase tz-text-neutral5"
          >
            Product-Based Work &amp; Accelerators
          </h2>
          <p
            className="tz-text-l tz-text-neutral6 mx-auto text-center mt-3"
            style={{ maxWidth: "720px" }}
          >
            We don’t just write code for hire. We design, engineer, and operate proprietary digital products and enterprise accelerators. That firsthand product discipline directly powers every client engagement we undertake.
          </p>
        </div>

        {/* Product Selection Tabs */}
        <div
          className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mb-5"
          role="tablist"
          aria-label="Vesharo In-House Products & Accelerators"
        >
          {vesharoProducts.map((p) => {
            const isActive = p.id === activeProductId;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`product-panel-${p.id}`}
                id={`product-tab-${p.id}`}
                onClick={() => setActiveProductId(p.id)}
                className={`btn d-flex align-items-center gap-2 px-3 py-2 px-md-4 py-md-3 rounded-pill fw-medium transition-all ${
                  isActive
                    ? "btn-primary shadow-lg"
                    : "btn-outline-secondary text-white-50 border-opacity-25"
                }`}
                style={{
                  backgroundColor: isActive ? "#7C5CFF" : "rgba(255, 255, 255, 0.03)",
                  borderColor: isActive ? "#7C5CFF" : "rgba(255, 255, 255, 0.12)",
                  color: isActive ? "#FFFFFF" : "#E2E8F0",
                  fontSize: "0.9375rem",
                }}
              >
                <i className={`ph ${p.icon}`} style={{ fontSize: "1.2rem" }} aria-hidden="true" />
                <span>{p.name.replace("Vesharo ", "")}</span>
                <span
                  className="badge rounded-pill ms-1 d-none d-sm-inline"
                  style={{
                    backgroundColor: isActive ? "rgba(0,0,0,0.25)" : "rgba(124, 92, 255, 0.2)",
                    color: isActive ? "#FFFFFF" : "#A78BFA",
                    fontSize: "0.6875rem",
                  }}
                >
                  {p.category.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Display */}
        <div
          id={`product-panel-${activeProduct.id}`}
          role="tabpanel"
          aria-labelledby={`product-tab-${activeProduct.id}`}
          className="p-4 p-lg-5 rounded-4"
          style={{
            background: "linear-gradient(135deg, rgba(26, 26, 36, 0.95) 0%, rgba(18, 18, 22, 0.98) 100%)",
            border: "1px solid rgba(124, 92, 255, 0.25)",
            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
          }}
        >
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left Column: Product Information & Architecture */}
            <div className="col-lg-7">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span
                  className="badge rounded-pill px-3 py-1"
                  style={{
                    backgroundColor: "rgba(124, 92, 255, 0.2)",
                    color: "#A78BFA",
                    border: "1px solid rgba(124, 92, 255, 0.4)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {activeProduct.category}
                </span>
                <span
                  className="badge rounded-pill px-3 py-1"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#34D399",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    fontSize: "0.75rem",
                  }}
                >
                  <i className="ph ph-check-circle me-1" aria-hidden="true" />
                  {activeProduct.status}
                </span>
              </div>

              <h3 className="tz-display-3 text-white fw-bold mb-2">
                {activeProduct.name}
              </h3>
              <p className="tz-text-m tz-text-primary fw-medium mb-3">
                {activeProduct.tagline}
              </p>
              <p className="tz-text-l text-white-50 mb-4" style={{ lineHeight: "1.7" }}>
                {activeProduct.description}
              </p>

              {/* Architecture Blueprint Note */}
              <div
                className="p-3 rounded-3 mb-4"
                style={{
                  backgroundColor: "rgba(124, 92, 255, 0.08)",
                  borderLeft: "3px solid #7C5CFF",
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-1">
                  <i className="ph ph-cpu text-primary" aria-hidden="true" style={{ color: "#A78BFA" }} />
                  <span className="text-white fw-semibold tz-text-s text-uppercase">
                    Architecture Blueprint
                  </span>
                </div>
                <p className="text-white-50 tz-text-m mb-0">
                  {activeProduct.architectureHighlight}
                </p>
              </div>

              {/* Core Features List */}
              <div className="mb-4">
                <div className="text-white-50 tz-text-s text-uppercase fw-semibold mb-2">
                  Key Capabilities &amp; Specifications:
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  {activeProduct.features.map((feat, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2 text-white tz-text-m">
                      <i
                        className="ph ph-check text-primary mt-1"
                        style={{ color: "#7C5CFF", fontSize: "1rem" }}
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="d-flex flex-wrap align-items-center gap-2 pt-3 border-top border-secondary border-opacity-25">
                <span className="text-white-50 tz-text-s fw-semibold me-2">Engineered with:</span>
                {activeProduct.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="badge px-2 py-1 rounded"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      color: "#E2E8F0",
                      fontSize: "0.8125rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Performance Telemetry & Client Advantage */}
            <div className="col-lg-5">
              <div
                className="p-4 rounded-3 h-100 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <span className="tz-text-s text-uppercase text-white-50 fw-semibold">
                      Performance Telemetry
                    </span>
                    <i className="ph ph-gauge text-primary" style={{ fontSize: "1.4rem", color: "#A78BFA" }} aria-hidden="true" />
                  </div>

                  <div className="row g-3 mb-4">
                    {activeProduct.metrics.map((m, idx) => (
                      <div key={idx} className="col-12">
                        <div
                          className="p-3 rounded-2"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                          }}
                        >
                          <div className="tz-text-s text-white-50 mb-1">{m.label}</div>
                          <div className="text-white fw-bold tz-display-3" style={{ fontSize: "1.5rem" }}>
                            {m.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Value Proposition Box */}
                  <div
                    className="p-3 rounded-2"
                    style={{
                      backgroundColor: "rgba(124, 92, 255, 0.12)",
                      border: "1px solid rgba(124, 92, 255, 0.2)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 mb-1 text-white fw-semibold tz-text-m">
                      <i className="ph ph-lightning text-warning" aria-hidden="true" />
                      Client Advantage:
                    </div>
                    <p className="text-white-50 tz-text-s mb-0" style={{ lineHeight: "1.6" }}>
                      {activeProduct.valueProp}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                  <span className="tz-text-s text-white-50">Intellectual Property</span>
                  <span className="badge bg-success-subtle text-success fw-medium">
                    100% Client Owned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner on Product Mindset */}
        <div
          className="mt-5 p-4 rounded-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3"
          style={{
            backgroundColor: "rgba(124, 92, 255, 0.08)",
            border: "1px solid rgba(124, 92, 255, 0.2)",
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "rgba(124, 92, 255, 0.2)",
                color: "#A78BFA",
                fontSize: "1.4rem",
              }}
            >
              <i className="ph ph-shield-star" aria-hidden="true" />
            </div>
            <div>
              <div className="text-white fw-bold tz-text-l">
                Zero Cold Starts for Client Projects
              </div>
              <div className="text-white-50 tz-text-m">
                When you partner with Vesharo, you get verified architectural building blocks — saving weeks of boilerplate setup without ongoing licensing fees.
              </div>
            </div>
          </div>
          <a
            href="/contact"
            className="tz-button text-uppercase fw-medium tz-text-m flex-shrink-0"
            style={{ padding: "12px 24px" }}
          >
            Leverage Our Accelerators
          </a>
        </div>
      </div>
    </section>
  );
}
