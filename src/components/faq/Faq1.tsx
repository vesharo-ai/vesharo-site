import React from "react";
import { faqItems } from "../../seeds/Faq.seeds";
import FaqAccordion from "./FaqAccordion";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import Link from "@/components/common/Link";

function Faq1({ backgroundColor = "#121212" }: { backgroundColor?: string }) {
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
                <SectionTitle title="frequently Asked questions" />
              </div>
              <p className="tz-faq2__desc tz-text-l tz-text-neutral6">
                Frequently asked question (FAQ) pages to find answers.
              </p>
              <div className="tz-faq2__thumb">
                <div className="tz-buttons">
                  <Link
                    href="/contact"
                    className="tz-button text-uppercase fw-medium tz-text-m"
                  >
                    Get in touch
                  </Link>
                  <Link className="tz-button-circle" href="#">
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <img
                  src="/images/banner/banner1-shape2.svg"
                  alt="img"
                  className="tz-faq2__shape floating"
                />
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
