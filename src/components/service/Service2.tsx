"use client";

import React from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import { type ServiceCardType } from "../../seeds/Service.seeds";
import Service2Card from "./Service2Card";
import Link from "@/components/common/Link";
import SectionTop from "../section-top/SectionTop";

function Service2({
  service2Data,
  bgColor = "#121212",
  isInnerPage = false,
}: {
  service2Data: ServiceCardType[];
  bgColor?: string;
  isInnerPage?: boolean;
}) {
  const [activeCard, setActiveCard] = React.useState<number>(2);
  return (
    <>
      <section className="tz-service2" style={{ backgroundColor: bgColor }}>
        <div className="container">
          {isInnerPage ? (
            <SectionTop
              title="All Services"
              description="What We Do"
            />
          ) : (
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <SectionSubtitle subtitle="Services" />
                <SectionTitle title="Transforming Businesses with Design" />
              </div>
              <div className="col-lg-6 text-start text-lg-end">
                <div className="tz-buttons">
                  <Link
                    href="/service-2"
                    className="tz-button text-uppercase fw-medium tz-text-m"
                  >
                    View All Services
                  </Link>
                  <Link className="tz-button-circle" href="/service-2">
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="tz-service2__card-wrapper tz-pt-80">
            <div className="row gy-4">
              {service2Data?.map((item: ServiceCardType, index: number) => {
                const isActive = activeCard === index + 1;
                return (
                  <Service2Card
                    key={index}
                    item={item}
                    index={index}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                    isActive={isActive}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service2;
