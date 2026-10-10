import React from "react";

export interface ServiceFaq {
  id: string;
  question: string;
  answer: string;
}

function ServiceDetailsAccordion({ items }: { items: ServiceFaq[] }) {
  return (
    <div className="tz-faq-accordion-native d-flex flex-column gap-3">
      {items.map((item, index) => (
        <details
          key={item.id}
          className="tz-faq-item p-3 rounded"
          style={{ background: "rgba(17, 24, 39, 0.6)", border: "1px solid rgba(255, 255, 255, 0.08)" }}
          open={index === 0}
        >
          <summary
            className="d-flex align-items-center justify-content-between fw-semibold text-white py-1"
            style={{ listStyle: "none", fontSize: "1.1rem", cursor: "pointer" }}
          >
            <span>{item.question}</span>
            <i
              className="ph ph-caret-down ms-2"
              style={{ color: "var(--vesharo-electric-accent, #00d2ff)", transition: "transform 0.2s ease" }}
              aria-hidden="true"
            />
          </summary>
          <div className="pt-3 tz-text-l text-muted border-top border-secondary border-opacity-25 mt-2">
            <p className="mb-0" style={{ lineHeight: 1.6 }}>
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default ServiceDetailsAccordion;
