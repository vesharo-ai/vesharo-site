"use client";

import React from "react";
import CountUp from "@/components/common/CountUp";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import Link from "@/components/common/Link";

function About1() {
  return (
    <>
      <section className="tz-about1">
        <img
          src="/images/about/about1-shape2.svg"
          className="tz-about1__shape2"
          alt="shape"
        />
        <div className="container">
          <div className="row g-4 d-flex justify-content-between">
            <div className="col-xl-5">
              <img src="/images/about/about1-img.jpg" alt="img" />
            </div>
            <div className="col-xl-6">
              <div className="tz-section-top text-start">
                <SectionSubtitle subtitle="About Our Agency" />
                <SectionTitle title=" AI-Driven Agency Promote Your Brand’s" />
                <div className="tz-section-title tz-display-2 text-uppercase fw-light">
                  Growth and Success
                </div>
              </div>
              <div className="row g-4 d-flex justify-content-between tz-pt-10 tz-pt-lg-20">
                <div className="col-md-5">
                  <div className="tz-about1-experience tz-text-neutral5">
                    <div className="tz-about1-experience__counter">
                      <h5 className="tz-about1-experience__counter-number tz-cn">
                        <CountUp end={25} enableScrollSpy={true} />
                      </h5>
                      <span className="tz-about1-experience__counter-plus">
                        +
                      </span>
                    </div>
                    <div className="tz-about1-experience__text text-uppercase">
                      Years of Experience
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tz-about1-content">
                    <p className="tz-about1-desc tz-text-l tz-text-neutral6">
                      We’re a team expert designers, web developers and
                      marketers of who’ve been delivering digital success for
                      more than a decade. We excel at marketing websites.
                    </p>
                    <div className="tz-buttons">
                      <Link
                        href="/about"
                        className="tz-button text-uppercase fw-medium tz-text-m"
                      >
                        Explore More
                      </Link>
                      <Link href="/about" className="tz-button-circle">
                        <i className="ph ph-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/about/about1-shape.svg"
          className="tz-about1__shape floating"
          alt="img"
        />
      </section>
    </>
  );
}

export default About1;
