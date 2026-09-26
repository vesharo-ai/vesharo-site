"use client";
import React from "react";
import CountUp from "@/components/common/CountUp";

function ServiceDetailsCounter() {
  return (
    <div className="tz-service-details-counter">
      <div className="tz-service-details-counter__item">
        <h1 className="tz-service-details-counter__number tz-display-3 tz-text-neutral5">
          <span className="tz-cn">
            <CountUp end={17} enableScrollSpy={true} />
          </span>
          +
        </h1>
        <p className="tz-service-details-counter__desc tz-text-neutral6 tz-text-l fw-light">
          <span>Years of experience this field</span>
        </p>
      </div>
      <div className="tz-service-details-counter__item">
        <h1 className="tz-service-details-counter__number tz-display-3 tz-text-neutral5">
          <span className="tz-cn">
            {" "}
            <CountUp end={40} enableScrollSpy={true} />
          </span>
          K
        </h1>
        <p className="tz-service-details-counter__desc tz-text-neutral6 tz-text-l fw-light">
          <span>Number of projects completed</span>
        </p>
      </div>
      <div className="tz-service-details-counter__item">
        <h1 className="tz-service-details-counter__number tz-display-3 tz-text-neutral5">
          <span className="tz-cn">
            {" "}
            <CountUp end={7} enableScrollSpy={true} />
          </span>
          +
        </h1>
        <p className="tz-service-details-counter__desc tz-text-neutral6 tz-text-l fw-light">
          <span>Number of awards achieved</span>
        </p>
      </div>
    </div>
  );
}

export default ServiceDetailsCounter;
