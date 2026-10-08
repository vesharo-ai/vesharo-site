"use client";
import React from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import CountUp from "@/components/common/CountUp";
import Link from "@/components/common/Link";

function About2() {
  return (
    <>
      <section className="tz-about2">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-9">
              <div className="row g-4">
                <div className="col-md-9">
                  <div className="tz-section-top">
                    <SectionSubtitle subtitle="About Vesharo" />
                    <SectionTitle title="Our Approach" />
                    <p className="tz-about2__desc tz-text-l tz-text-neutral6 fw-light">
                      We are a team of senior software engineers, architects, and product builders. We combine strategic IT consulting with hands-on engineering to turn complex technical challenges into secure, resilient software platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-5">
                  <div
                    className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(124, 92, 255, 0.2)",
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <i className="ph ph-cpu text-primary" style={{ fontSize: "1.4rem", color: "#A78BFA" }}></i>
                        <span className="text-white fw-bold tz-text-l">Dedicated Pod Model</span>
                      </div>
                      <p className="text-white-50 tz-text-m mb-0">
                        Senior engineers integrated directly into your sprint cycle, pairing on complex architecture and shipping features daily.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 text-primary tz-text-s font-monospace">
                      // sprint velocity + reliability
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tz-about2-content">
                    <div className="tz-about2__title text-uppercase tz-display-3 tz-text-neutral5 lh-1 tz-pb-10">
                      Engineering Partner &amp; Product Studio
                    </div>
                    <p className="tz-about2__desc tz-text-l tz-text-neutral6 fw-light">
                      At Vesharo we don’t just write code — we partner with you. We serve as your strategic IT consultants, engineering delivery pods, and product co-builders. Because we engineer and run our own SaaS products, every decision we make is grounded in real production realities.
                    </p>
                    <div className="row g-2 tz-pt-30 tz-pt-lg-60 tz-pb-20 tz-pb-lg-40">
                      <div className="col-md-6">
                        <h4 className="tz-about2__subtitle tz-text-neutral5 fw-semibold">
                          Collaborative Approach
                        </h4>
                        <p className="tz-about2__desc tz-text-l tz-text-neutral6 fw-light">
                          We work closely with you to understand your goals and
                          deliver solutions that align with your vision.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h4 className="tz-about2__subtitle tz-text-neutral5 fw-semibold">
                          Engineering Excellence
                        </h4>
                        <p className="tz-about2__desc tz-text-l tz-text-neutral6 fw-light">
                          From architecture to automated testing, we combine modern technology with strict quality standards to build reliable platforms.
                        </p>
                      </div>
                    </div>
                    <div className="tz-buttons">
                      <Link
                        href="/portfolio"
                        className="tz-button text-uppercase fw-medium tz-text-m"
                      >
                        See What We Deliver
                      </Link>
                      <Link className="tz-button-circle" href="/portfolio" aria-label="See the engagements we take on">
                        <i className="ph ph-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div
                className="tz-about2-experience p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  background: "linear-gradient(180deg, rgba(32, 32, 42, 0.8) 0%, rgba(18, 18, 22, 0.95) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="ph ph-lock-key-open text-success" style={{ fontSize: "1.4rem" }}></i>
                    <span className="text-white fw-bold tz-text-m">Client Assurance</span>
                  </div>
                  <p className="text-white-50 tz-text-s mb-0">
                    Comprehensive handover documentation, full IP ownership, and zero vendor lock-in.
                  </p>
                </div>
                <div className="tz-about2-experience__counter tz-text-neutral5 tz-pt-30 tz-pt-lg-60">
                  <h5 className="tz-about2-experience__number tz-cn">
                    <CountUp end={100} enableScrollSpy={true} />
                  </h5>
                  <span className="tz-about2-experience__plus">%</span>
                  <p className="tz-about2-experience__text tz-text-l tz-text-neutral5 text-uppercase mt-2">
                    IP &amp; CODE OWNERSHIP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About2;
