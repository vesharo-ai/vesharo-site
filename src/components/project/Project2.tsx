import React from "react";
import Project2Slider from "./Project2Slider";
import Project2Slider1 from "./Project2Slider1";
import Link from "@/components/common/Link";

function Project2() {
  return (
    <>
      <section className="tz-project2">
        <div className="tz-section-top tz-section-top--centered">
          <div className="tz-section-subtitle">
            <span className="tz-section-subtitle__line" />
            <h4 className="text-uppercase tz-text-primary">SELECTED WORKS</h4>
          </div>
          <div className="tz-section-title tz-display-2 text-uppercase">
            Our finished projects
          </div>
        </div>
        <div className="tz-project2__wrapper">
          <h3 className="tz-project2__title text-uppercase">Case Study</h3>
          <Project2Slider1 />
          <Project2Slider />
        </div>
        <div className="tz-project2__footer">
          <div className="tz-buttons d-flex justify-content-center">
            <Link
              href="#"
              className="tz-button text-uppercase fw-medium tz-text-m"
            >
              VIEW ALL PROJECTS
            </Link>
            <Link className="tz-button-circle" href="#">
              <i className="ph ph-arrow-up-right" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project2;
