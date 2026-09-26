"use client";

import React, { useState } from "react";
import { pricingCards } from "../../seeds/Pricing.seeds";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import Link from "@/components/common/Link";

function Pricing1({ bgColor = "#121212" }: { bgColor?: string }) {
  const [isMonthly, setIsMonthly] = useState(false);

  const handlePeriodToggle = (period: "monthly" | "quarterly") => {
    setIsMonthly(period === "monthly");
  };

  return (
    <>
      <div className="tz-pricing2" style={{ backgroundColor: bgColor }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <div className="tz-section-top">
                <SectionSubtitle subtitle="PRICING PLAN" />
                <SectionTitle title=" Choose your plan" />
              </div>
              <div className="tz-pricing2__toggle">
                <button
                  className={`tz-pricing2__1month ${isMonthly ? "active" : ""}`}
                  onClick={() => handlePeriodToggle("monthly")}
                >
                  01 Monthly
                </button>
                <button
                  className={`tz-pricing2__3month ${
                    !isMonthly ? "active" : ""
                  }`}
                  onClick={() => handlePeriodToggle("quarterly")}
                >
                  03 Monthly
                </button>
              </div>
              <img src="/images/wwa/wwa1-shape.svg" alt="img" />
            </div>
            {pricingCards.map((card, index) => (
              <div className="col-md-6 col-xl-3" key={index}>
                <div className="tz-pricing2-card">
                  <div className="tz-pricing2-card__plan">
                    <p className="tz-pricing2-card__type tz-text-m text-uppercase tz-text-primary">
                      {card.packageName}
                    </p>
                    <div className="tz-pricing2-card__price">
                      <div className="tz-pricing2-card__amount tz-display-3">
                        <span className="tz-price">
                          {isMonthly
                            ? card.amount.monthly
                            : card.amount.quarterly}
                        </span>
                        <sub className="tz-text-xl fw-normal">
                          / {card.duration}
                        </sub>
                      </div>
                    </div>
                  </div>
                  <ul className="tz-pricing2-card__features tz-text-l tz-text-neutral6">
                    {card.features.map((feature, featureIndex) => (
                      <li
                        className="tz-pricing2-card__feature"
                        key={featureIndex}
                      >
                        <i className="ph ph-caret-double-right" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.link}
                    className="tz-button tz-button--style2 tz-textl-l"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing1;
