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
                <div className="tz-testimonial1-highlight__avatars">
                  <img
                    src="/images/testimonial/testimonial1-avatar1.png"
                    alt="Client 1"
                    className="tz-testimonial1-highlight__avatar"
                  />
                  <img
                    src="/images/testimonial/testimonial1-avatar2.png"
                    alt="Client 2"
                    className="tz-testimonial1-highlight__avatar"
                  />
                  <span className="tz-testimonial1-highlight__badge tz-text-neutral5 tz-text-m fw-medium">
                    25k
                  </span>
                </div>
                <p className="tz-testimonial1-highlight__text tz-text-xl tz-text-neutral5">
                  More then 25K clients
                  <br />
                  reviews
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
