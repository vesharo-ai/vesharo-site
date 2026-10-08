import React from "react";
import BrandSlider1 from "../brand-slider/BrandSlider1";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import Testimonial1Slider from "./Testimonial1Slider";

const Testimonial1 = React.memo(function Testimonial1({
  bgClass = "tz-bg-neutral3",
}: {
  bgClass?: string;
}) {
  return (
    <>
      <section
        className={`tz-testimonial1  tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 ${bgClass}`}
      >
        <div className="container">
          <div className="tz-section-top">
            <div className="row g-4">
              <div className="col-md-8">
                <div className="row g-4">
                  <div className="col-xl-4">
                    <SectionSubtitle subtitle="TESTIMONIAL" />
                  </div>
                  <div className="col-xl-7">
                    <SectionTitle title="What Our clients say about us" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tz-testimonial1__shape1 d-md-flex justify-content-end d-none">
                  <img
                    src="/images/testimonial/testimonial1-shape1.svg"
                    className="floating"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 d-flex justify-content-between">
            <div className="col-lg-2 d-flex d-lg-block align-items-center justify-content-between">
              <div className="tz-testimonial1-highlight">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="ph ph-shield-check" style={{ fontSize: "28px", color: "var(--vesharo-electric-accent, #00d2ff)" }} aria-hidden="true" />
                  <span className="tz-text-neutral5 tz-text-m fw-bold">
                    100%
                  </span>
                </div>
                <p className="tz-testimonial1-highlight__text tz-text-m tz-text-neutral5 fw-medium">
                  Verified Client
                  <br />
                  Deployments
                </p>
              </div>
              <div className="tz-testimonial1__shape2 d-flex align-items-end justify-content-center tz-pt-lg-120">
                <img
                  src="/images/testimonial/testimonial1-shape2.svg"
                  alt="shape"
                />
              </div>
            </div>
            <div className="col-lg-9">
              <Testimonial1Slider />
            </div>
          </div>
          <BrandSlider1 />
        </div>
      </section>
    </>
  );
});

export default Testimonial1;
