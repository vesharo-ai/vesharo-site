"use client";

import React from "react";
import Link from "@/components/common/Link";
import useFollowMouse from "@/hooks/useFollowMouse";

const Banner1 = React.memo(function Banner1() {
  useFollowMouse(".follow-mouse");

  return (
    <>
      <section className="tz-banner1">
        <div className="container">
          <img
            src="/images/banner/banner1-gradient-left.png"
            alt="img"
            className="position-absolute bottom-0 start-0"
          />
          <img
            src="/images/banner/banner1-gradient-right.png"
            alt="img"
            className="position-absolute top-0 end-0"
          />
          <img
            src="/images/banner/banner1-shape1.png"
            alt="img"
            className="tz-banner1__shape1"
          />
          <img
            src="/images/banner/banner1-shape2.svg"
            alt="img"
            className="tz-banner1__shape2 floating"
          />
          <div className="row g-4 d-flex justify-content-between">
            <div className="col-xl-5">
              <h5 className="tz-banner1__title1 text-uppercase tz-text-neutral5 follow-mouse ">
                DIGITAL
              </h5>
              <h5 className="tz-banner1__title2 text-uppercase tz-text-secondary follow-mouse">
                Agency
              </h5>
              <div className="tz-banner1-content">
                <p className="tz-banner1__desc tz-text-l tz-text-neutral6 tz-pb-xl-30 follow-mouse">
                  We're a team of expert designers, web developers and success
                  for more than a decade.
                </p>
                <div className="tz-buttons follow-mouse">
                  <Link
                    href="/portfolio-1"
                    className="tz-button text-uppercase fw-medium tz-text-m"
                  >
                    Our Portfolio
                  </Link>
                  <Link href="/portfolio-1" className="tz-button-circle">
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tz-banner1-info">
                <div className="tz-banner1-content2">
                  <p className="tz-banner1__desc tz-text-l tz-text-neutral6 follow-mouse">
                    We’re a team of expert designers, web developers and success
                    for more than a decade.
                  </p>
                </div>
                <div className="tz-banner1-highlight follow-mouse">
                  <div className="tz-banner1-highlight__avatars ">
                    <img
                      src="/images/banner/banner1-avatar1.png"
                      alt="Client 1"
                      className="tz-banner1-highlight__avatar"
                    />
                    <img
                      src="/images/banner/banner1-avatar2.png"
                      alt="Client 2"
                      className="tz-banner1-highlight__avatar"
                    />
                    <img
                      src="/images/banner/banner1-avatar3.png"
                      alt="Client 2"
                      className="tz-banner1-highlight__avatar"
                    />
                    <span className="tz-banner1-highlight__badge tz-text-neutral5 tz-text-m fw-medium">
                      25k
                    </span>
                  </div>
                  <p className="tz-banner1-highlight__text tz-text-l tz-text-primary">
                    Excellent Reviews
                  </p>
                </div>
              </div>
              <div className="tz-banner1__wrapper">
                <img
                  src="/images/banner/banner1-img.jpg"
                  alt="img"
                  className="tz-banner1__image"
                />
                <Link href="/portfolio-2" className="tz-banner1__circle">
                  <img
                    src="/images/banner/round-text.png"
                    alt=""
                    className="tz-banner1__circle-img"
                  />
                  <div className="tz-banner1__circle-thumb">
                    <span className="tz-banner1__circle-icon">
                      <i className="ph ph-arrow-down" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Banner1;
