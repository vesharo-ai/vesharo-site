"use client";
import React from "react";
import CountUp from "@/components/common/CountUp";
import SectionTitle from "../section-title/SectionTitle";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import WhoWeAreSocial from "./WhoWeAreSocial";
import Link from "@/components/common/Link";

const WhoWeAre = React.memo(function WhoWeAre({
  backgroundColor = "#121212",
}: {
  backgroundColor?: string;
}) {
  return (
    <>
      <section
        className="tz-wwa1 tz-bg-neutral3 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120"
        style={{ backgroundColor }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-5">
              <div className="tz-section-top">
                <SectionSubtitle subtitle="WHO WE ARE" />
                <SectionTitle title="Our agency knows work dominates our lives" />
              </div>
              <img src="/images/wwa/wwa1-img.jpg" alt="img" />
            </div>
            <div className="col-xl-7">
              <div className="row g-4">
                <div className="col-xl-4 col-md-6">
                  <div className="tz-wwa1-shape">
                    <img src="/images/wwa/wwa1-shape.svg" alt="img" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="tz-wwa1-card">
                    <img
                      src="/images/wwa/wwa1-muted-trishape.svg"
                      alt="img"
                      className="tz-wwa1-card__trishape-muted"
                    />
                    <img
                      src="/images/wwa/wwa1-active-trishape.svg"
                      alt="img"
                      className="tz-wwa1-card__trishape-active"
                    />
                    <div className="tz-wwa1-experience tz-text-neutral5">
                      <div className="tz-wwa1-experience__counter">
                        <h5 className="tz-wwa1-experience__counter-number tz-cn">
                          <CountUp end={25} enableScrollSpy={true} />
                        </h5>
                        <span className="tz-wwa1-experience__counter-plus tz-display-1 fw-light">
                          +
                        </span>
                      </div>
                      <div className="tz-wwa1-experience__text text-uppercase tz-text-xl">
                        YEARS OF AGENCY EXPERIENCE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="tz-wwa1-card">
                    <img
                      src="/images/wwa/wwa1-muted-trishape.svg"
                      alt="img"
                      className="tz-wwa1-card__trishape-muted"
                    />
                    <img
                      src="/images/wwa/wwa1-active-trishape.svg"
                      alt="img"
                      className="tz-wwa1-card__trishape-active"
                    />
                    <div className="tz-wwa1-experience tz-text-neutral5">
                      <div className="tz-wwa1-experience__counter">
                        <h5 className="tz-wwa1-experience__counter-number-stroke tz-cn">
                          <CountUp end={45} enableScrollSpy={true} />
                        </h5>
                        <span className="tz-wwa1-experience__counter-plus tz-display-1 fw-light">
                          +
                        </span>
                      </div>
                      <div className="tz-wwa1-experience__text text-uppercase tz-text-xl">
                        EXPERIENCE ENGINEERING MEMBERS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="tz-wwa1-card">
                    <img
                      src="/images/wwa/wwa1-muted-trishape.svg"
                      alt="img"
                      className="tz-wwa1-card__trishape-muted"
                    />
                    <img
                      src="/images/wwa/wwa1-active-trishape.svg"
                      alt="img"
                      className="tz-wwa1-card__trishape-active"
                    />
                    <div className="tz-wwa1-experience tz-text-neutral5">
                      <div className="tz-wwa1-experience__counter">
                        <h5 className="tz-wwa1-experience__counter-number-stroke">
                          <CountUp end={5} enableScrollSpy={true} />K
                        </h5>
                        <span className="tz-wwa1-experience__counter-plus tz-display-1 fw-light">
                          +
                        </span>
                      </div>
                      <div className="tz-wwa1-experience__text text-uppercase tz-text-xl">
                        EXPERIENCE ENGINEERING MEMBERS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="tz-wwa1-card">
                    <img
                      src="/images/wwa/wwa1-muted-trishape.svg"
                      alt="img"
                      className="tz-wwa1-card__trishape-muted"
                    />
                    <img
                      src="/images/wwa/wwa1-active-trishape.svg"
                      alt="img"
                      className="tz-wwa1-card__trishape-active"
                    />
                    <div className="tz-wwa1-experience tz-text-neutral5">
                      <div className="tz-wwa1-experience__counter">
                        <h5 className="tz-wwa1-experience__counter-number tz-cn">
                          <CountUp end={14} enableScrollSpy={true} />
                        </h5>
                        <span className="tz-wwa1-experience__counter-plus tz-display-1 fw-light">
                          +
                        </span>
                      </div>
                      <div className="tz-wwa1-experience__text text-uppercase tz-text-xl">
                        GOOD AWARD WINING AGENCY
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="tz-wwa1-card__arrow">
                    <Link href="/">
                      <img src="/images/wwa/wwa1-arrow.png" alt="img" />
                    </Link>
                  </div>
                  <WhoWeAreSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default WhoWeAre;
