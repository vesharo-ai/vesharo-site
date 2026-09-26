"use client";

import React, { useState } from "react";
import {
  ServiceAccordionType,
  serviceAccordionData,
} from "@/seeds/ServiceDetails.seeds";

function ServiceDetailsAccordion() {
  const [accordions, setAccordions] =
    useState<ServiceAccordionType[]>(serviceAccordionData);

  const toggleAccordion = (id: string) => {
    setAccordions(
      accordions.map((acc) => ({
        ...acc,
        isOpen: acc.id === id ? !acc.isOpen : false,
      }))
    );
  };

  return (
    <div className="accordion tz-faq2-accordion" id="faqAccordion">
      {accordions.map((item) => (
        <div className="accordion-item border-0 bg-transparent" key={item.id}>
          <h4 className="accordion-header" id={`faqHeading${item.id}`}>
            <button
              className={`accordion-button ${
                !item.isOpen ? "collapsed" : ""
              } bg-transparent shadow-none px-0 d-flex justify-content-between align-items-center`}
              type="button"
              onClick={() => toggleAccordion(item.id)}
            >
              {item.question}
              <i className="ph ph-plus ms-auto icon-plus" />
              <i className="ph ph-minus ms-auto icon-minus" />
            </button>
          </h4>
          <div
            className={`accordion-collapse collapse ${
              item.isOpen ? "show" : ""
            }`}
            id={`faqCollapse${item.id}`}
          >
            <div className="accordion-body px-0 pt-2">
              <p className="tz-text-l mb-0">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceDetailsAccordion;
