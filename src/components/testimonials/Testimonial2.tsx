import React from "react";
import Testimonial2Slider from "./Testimonial2Slider";
import BrandSlider1 from "../brand-slider/BrandSlider1";

function Testimonial2({
  backgroundColor = "#121212",
}: {
  backgroundColor?: string;
}) {
  return (
    <>
      <section
        className="tz-testimonial2 tz-bg-neutral3 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120"
        style={{ backgroundColor }}
      >
        <div className="container">
          <div className="tz-section-top">
            <div className="row g-4">
              <div className="col-md-8">
                <div className="row g-4">
                  <div className="col-xl-4">
                    <div className="tz-section-subtitle">
                      <span className="tz-section-subtitle__line" />
                      <h4 className="text-uppercase tz-text-primary">
                        TESTIMONIAL
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-7">
                    <div className="tz-section-title tz-display-2 text-uppercase">
                      What Our clients say about us
                    </div>
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
          <Testimonial2Slider />
          {/* Testimonial Brands */}
          <BrandSlider1 />
        </div>
      </section>
    </>
  );
}

export default Testimonial2;
