"use client";

import React, { useState } from "react";
import { FaqItemType } from "../../seeds/Faq.seeds";

interface FaqAccordionProps {
  items: FaqItemType[];
}

function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeId, setActiveId] = useState<string>("Three"); // Default open item

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? "" : id);
  };

  return (
    <div className="accordion tz-faq2-accordion">
      {items.map((item) => (
        <div className="accordion-item border-0 bg-transparent" key={item.id}>
          <h4
            className="accordion-header"
            onClick={() => toggleAccordion(item.id)}
          >
            <button
              className={`accordion-button ${
                activeId !== item.id ? "collapsed" : ""
              } bg-transparent shadow-none px-0 d-flex justify-content-between align-items-center`}
              type="button"
            >
              {item.question}
              <i className="ph ph-plus ms-auto icon-plus" />
              <i className="ph ph-minus ms-auto icon-minus" />
            </button>
          </h4>
          <div
            className={`accordion-collapse collapse ${
              activeId === item.id ? "show" : ""
            }`}
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

export default FaqAccordion;
