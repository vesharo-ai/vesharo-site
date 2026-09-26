"use client";

import React from "react";
import Link from "@/components/common/Link";

import { type ServiceCard1Type, serviceCards } from "../../seeds/Service.seeds";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import ServiceCard from "./ServiceCard";
import SectionTop from "../section-top/SectionTop";

function Service1({
  serviceData,
  backgroundColor = "#171717",
  isInnerPage,
}: {
  serviceData: ServiceCard1Type[];
  backgroundColor?: string;
  isInnerPage?: boolean;
}) {
  const [activeCard, setActiveCard] = React.useState<number>(2);
  return (
    <>
      <section className="tz-service1 " style={{ backgroundColor }}>
        <div className="container">
          {isInnerPage ? (
            <SectionTop
              title="Our Services"
              description="Our exclusive Services"
            />
          ) : (
            <div className="tz-section-top">
              <div className="row g-4">
                <div className="col-md-8">
                  <SectionSubtitle subtitle="Our Services" />
                  <SectionTitle title="Our exclusive Services" />
                </div>
                <div className="col-md-4">
                  <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
                    <Link
                      href="/service-1"
                      className="tz-button text-uppercase fw-medium tz-text-m"
                    >
                      View More
                    </Link>
                    <Link href="/service-1" className="tz-button-circle">
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row g-4">
            {serviceData &&
              serviceData.map((card, index) => (
                <ServiceCard
                  key={index}
                  index={index + 1}
                  {...card}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service1;
