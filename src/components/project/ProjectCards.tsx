"use client";

import React from "react";
import Link from "@/components/common/Link";
import type { EngagementArchetype } from "@/seeds/Project.seeds";

function ProjectCards({
  items,
  subtitle = "What we take on",
  title = "Typical engagements",
  intro,
  showAllCta = false,
}: {
  items: EngagementArchetype[];
  subtitle?: string;
  title?: string;
  intro?: string;
  showAllCta?: boolean;
}) {
  return (
    <section className="tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120">
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <div className="tz-section-subtitle">
            <span className="tz-section-subtitle__line" />
            <h2 className="text-uppercase tz-text-primary">{subtitle}</h2>
          </div>
          <h3 className="tz-section-title tz-display-2 text-uppercase">{title}</h3>
          {intro && (
            <p className="tz-text-l tz-text-neutral6 mx-auto text-center mt-3" style={{ maxWidth: "640px" }}>
              {intro}
            </p>
          )}
        </div>

        <div className="row g-4">
      {items.map((item) => (
        <div className="col-lg-6" key={item.id}>
          <article
            className="p-4 p-lg-5 rounded-4 h-100 d-flex flex-column"
            style={{
              background:
                "linear-gradient(135deg, rgba(32, 32, 42, 0.95) 0%, rgba(18, 18, 22, 0.98) 100%)",
              border: "1px solid rgba(124, 92, 255, 0.25)",
            }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3 gap-3">
              <span
                className="badge rounded-pill"
                style={{ background: "rgba(124, 92, 255, 0.2)", color: "#A78BFA" }}
              >
                {item.industry}
              </span>
              <span className="text-white-50 tz-text-s font-monospace">
                {item.engagementType}
              </span>
            </div>

            <h3 className="text-white mb-3">{item.title}</h3>

            <p className="text-white-50 tz-text-m">
              <strong className="text-white">The problem:</strong> {item.challenge}
            </p>

            <h4 className="tz-text-primary tz-text-m text-uppercase mt-4 mb-2">
              What Vesharo owns
            </h4>
            <ul className="text-white-50 tz-text-m ps-3 mb-4">
              {item.ourRole.map((responsibility) => (
                <li className="mb-2" key={responsibility}>
                  {responsibility}
                </li>
              ))}
            </ul>

            <div className="d-flex flex-wrap gap-2 mt-auto pt-3 border-top border-secondary border-opacity-25">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="badge bg-dark text-white border border-secondary border-opacity-50 font-monospace"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="tz-buttons d-flex flex-wrap gap-2 mt-4">
              <Link
                href={`/portfolio/${item.id}`}
                className="tz-button text-uppercase fw-medium tz-text-m"
              >
                View Blueprint
              </Link>
              <Link
                className="tz-button-circle"
                href={`/portfolio/${item.id}`}
                aria-label={`View architecture blueprint for ${item.title}`}
              >
                <i className="ph ph-arrow-up-right" />
              </Link>
              <Link
                href={`/contact?service=${encodeURIComponent(item.title)}`}
                className="btn btn-outline-secondary text-white-50 px-3 py-2 rounded-pill tz-text-s ms-auto align-self-center"
              >
                Get a Quote
              </Link>
            </div>
          </article>
        </div>
      ))}
        </div>

        {showAllCta && (
          <div className="tz-buttons d-flex flex-wrap justify-content-center mt-5">
            <Link
              href="/portfolio"
              className="tz-button text-uppercase fw-medium tz-text-m"
            >
              View all engagements
            </Link>
            <Link
              className="tz-button-circle"
              href="/portfolio"
              aria-label="View all engagement types"
            >
              <i className="ph ph-arrow-up-right" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectCards;