import React from "react";
import { faqItems } from "../../seeds/Faq.seeds";
import FaqAccordion from "./FaqAccordion";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import Link from "@/components/common/Link";

function Faq1({
  backgroundColor = "#121212",
  ctaLabel = "Talk to Vesharo",
}: {
  backgroundColor?: string;
  /** Worded for the page the FAQ is answering questions on. */
  ctaLabel?: string;
}) {
  return (
    <>
      <section
        className="tz-faq2 tz-bg-neutral2 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120"
        style={{ backgroundColor }}
      >
        <div className="container">
          <div className="row g-4 d-flex justify-content-between">
            <div className="col-xl-5">
              <div className="tz-section-top tz-mb-0">
                <SectionSubtitle subtitle="FAQ" />
                <SectionTitle title="Frequently Asked Questions" />
              </div>
              <p className="tz-faq2__desc tz-text-l tz-text-neutral6">
                Straight answers on how we scope, build and support software —
                from first discovery call to long-term maintenance.
              </p>
              <div className="tz-faq2__thumb">
                <span className="tz-faq2__mark" aria-hidden="true">
                  <i className="ph ph-chats-circle" />
                </span>
                <div className="tz-buttons">
                  <Link
                    href="/contact"
                    className="tz-button text-uppercase fw-medium tz-text-m"
                  >
                    {ctaLabel}
                  </Link>
                  <Link className="tz-button-circle" href="/contact" aria-label={ctaLabel}>
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq1;
