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
                    <SectionSubtitle subtitle="ABOUT OUR AGENCY" />
                    <SectionTitle title="Our Approach" />
                    <p className="tz-about2__desc tz-text-l tz-text-neutral6 fw-light">
                      We’re a team expert designers, web developers and
                      marketers of who’ve been delivering digital success for
                      more than a decade. We excel at marketing websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-5">
                  <img src="/images/about/about2-img1.jpg" alt="img" />
                </div>
                <div className="col-md-7">
                  <div className="tz-about2-content">
                    <div className="tz-about2__title text-uppercase tz-display-3 tz-text-neutral5 lh-1 tz-pb-10">
                      We’re More Than Just a Digital Agency
                    </div>
                    <p className="tz-about2__desc tz-text-l tz-text-neutral6 fw-light">
                      At Vesharo we don’t just create websites or run
                      campaigns—we build team of passionate strategists,
                      designers, developers, and marketers of innovation to
                      transform businesses.
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
                          Creative Excellence
                        </h4>
                        <p className="tz-about2__desc tz-text-l tz-text-neutral6 fw-light">
                          From design to development, we combine artistry with
                          technology create experiences.
                        </p>
                      </div>
                    </div>
                    <div className="tz-buttons">
                      <Link
                        href="/portfolio-details"
                        className="tz-button text-uppercase fw-medium tz-text-m"
                      >
                        Our Portfolio
                      </Link>
                      <Link className="tz-button-circle" href="/portfolio-details">
                        <i className="ph ph-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="tz-about2-experience">
                <img src="/images/about/about2-img2.jpg" alt="img" />
                <div className="tz-about2-experience__counter tz-text-neutral5 tz-pt-30 tz-pt-lg-60">
                  <h5 className="tz-about2-experience__number tz-cn">
                    <CountUp end={25} enableScrollSpy={true} />
                  </h5>
                  <span className="tz-about2-experience__plus">+</span>
                </div>
                <p className="tz-about2-experience__text tz-text-l tz-text-neutral5 text-uppercase">
                  YEARS EXPERIENCE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About2;
