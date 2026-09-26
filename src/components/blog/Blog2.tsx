import React from "react";
import Link from "@/components/common/Link";
import { blog2Cards } from "../../seeds/Blog.seeds";
import Blog2Card from "./Blog2Card";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";

function Blog2() {
  return (
    <>
      <div className="tz-blog2">
        <div className="container">
          <div className="tz-section-top">
            <div className="row g-4">
              <div className="col-md-8">
                <div className="row g-4">
                  <div className="col-xl-4">
                    <SectionSubtitle subtitle="OUR BLOG" />
                  </div>
                  <div className="col-xl-7">
                    <SectionTitle title="Latest News &amp; Blog" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
                  <Link
                    href="/blog"
                    className="tz-button text-uppercase fw-medium tz-text-m"
                  >
                    View More
                  </Link>
                  <Link href="/blog" className="tz-button-circle">
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {blog2Cards.map((card, index) => (
              <div className="col-md-6 col-xl-4" key={index}>
                <Blog2Card card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog2;
