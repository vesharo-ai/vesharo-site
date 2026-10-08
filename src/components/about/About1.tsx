"use client";

import React from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";

function About1() {
  return (
    <>
      <section className="tz-about1">
        <div className="container">
          <div className="row g-4 d-flex justify-content-between">
            <div className="col-xl-5">
              <div
                className="p-4 p-lg-5 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  background: "linear-gradient(135deg, rgba(28, 28, 36, 0.95) 0%, rgba(18, 18, 22, 0.95) 100%)",
                  border: "1px solid rgba(124, 92, 255, 0.2)",
                  minHeight: "360px",
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <span className="badge rounded-pill" style={{ background: "rgba(124, 92, 255, 0.2)", color: "#A78BFA" }}>
                      Engineering Philosophy
                    </span>
                    <i className="ph ph-terminal-window text-primary" style={{ fontSize: "1.5rem", color: "#7C5CFF" }}></i>
                  </div>
                   <div className="fw-bold text-white" style={{ fontSize: "1.125rem" }}>Architecture First. Zero Bloat.</div>
                  <p className="text-white-50 tz-text-m mb-4">
                    We don't throw generic templates at enterprise problems. Every solution is architected with clear domain boundaries, modular APIs, and automated CI/CD pipelines.
                  </p>
                </div>
                <div className="pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                  <span className="tz-text-m text-white-50">Stack Alignment</span>
                  <span className="tz-text-m text-success fw-medium font-monospace">100% Modern Stack</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tz-section-top text-start">
                <SectionSubtitle subtitle="About Vesharo" />
                <SectionTitle title=" We Build Software That Powers Your" />
                <div className="tz-section-title tz-display-2 text-uppercase fw-light">
                  Growth and Scale
                </div>
              </div>
              <div className="row g-4 d-flex justify-content-between tz-pt-10 tz-pt-lg-20">
                <div className="col-md-5">
                  <div className="tz-about1-experience tz-text-neutral5">
                    <div className="tz-about1-experience__counter">
                      <h5 className="tz-about1-experience__counter-number tz-cn">
                        100%
                      </h5>
                    </div>
                    <div className="tz-about1-experience__text text-uppercase">
                      IP &amp; Source Ownership
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tz-about1-content">
                    <p className="tz-about1-desc tz-text-l tz-text-neutral6">
                      We are a dedicated software engineering and IT services partner. From Ahmedabad to global remote teams, we turn complex technical challenges into scalable, high-converting digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About1;
