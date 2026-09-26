"use client";
import Link from "@/components/common/Link";
import React from "react";
import BannerSocial from "./BannerSocial";
import useFollowMouse from "@/hooks/useFollowMouse";

function Banner2() {
  useFollowMouse(".follow-mouse");
  return (
    <>
      <div className="tz-banner2">
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
            src="/images/banner/banner2-left-shape.png"
            alt="img"
            className="position-absolute top-0 start-0"
          />
          <img
            src="/images/banner/banner2-right-shape.png"
            alt="img"
            className="position-absolute bottom-0 end-0"
          />
          <div className="row gy-4">
            <div className="col-xl-2 d-flex justify-content-between d-xl-block position-relative z-1">
              <p className="tz-banner2__desc tz-text-l follow-mouse">
                Building <br />
                Outstanding <br />
                Design &amp; <br />
                Development
              </p>
              <div className="tz-banner2__arrow">
                <img src="/images/banner/banner2-arrow.png" alt="" />
              </div>
              <div className="tz-banner2__info">
                <div className="tz-banner2-counter follow-mouse">
                  <div className="tz-display-4 tz-text-neutral5 lh-1">
                    2.5<span>M</span>
                  </div>
                </div>
                <p className="tz-banner2__desc tz-text-l follow-mouse">
                  We happy customer <br />
                  word-wide
                </p>
                <div className="tz-banner1-highlight follow-mouse">
                  <div className="tz-banner1-highlight__avatars">
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
                </div>
              </div>
            </div>
            <div className="col-xl-9 position-relative z-1">
              <div className="row g-2">
                <div className="col-md-9">
                  <h5 className="tz-banner2__title tz-text-neutral5 follow-mouse">
                    CREATIVE <br />
                    DIGITAL AGENCY
                  </h5>
                  <p className="tz-banner2__desc tz-text-l follow-mouse">
                    We’re a team of expert designers, web developers and
                    marketers who’ve been delivering a decade.
                  </p>
                </div>
                <div className="col-md-3">
                  <div className="tz-banner2__shape1">
                    <img src="/images/banner/banner2-shape1.svg" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="row g-4 d-flex justify-content-between tz-pt-lg-60">
                <div className="col-md-2">
                  <Link
                    href="about"
                    className="tz-banner2__btn tz-text-m follow-mouse"
                  >
                    <span className="d-flex flex-column align-items-center justify-content-center gap-2 text-center fw-medium">
                      <i className="ph ph-arrow-up-right" />
                      Explore Now
                    </span>
                  </Link>
                </div>
                <div className="col-md-8">
                  <img src="/images/banner/banner2-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/about/about1-shape.svg"
            className="tz-banner2__shape2 floating"
            alt=""
          />
          <div className="tz-banner2__social">
            <BannerSocial />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner2;
