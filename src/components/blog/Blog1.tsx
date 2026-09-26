import React from "react";
import Link from "@/components/common/Link";
import { type BlogPost, blogPosts } from "../../seeds/Blog1.seeds";
import BlogCard from "./BlogCard";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";

function Blog1({ blogData }: { blogData: BlogPost[] }) {
  return (
    <>
      <section className="tz-blog1">
        <div className="container">
          <div className="tz-section-top">
            <div className="row g-4">
              <div className="col-md-8">
                <div className="row g-4">
                  <div className="col-xl-4">
                    <SectionSubtitle subtitle="OUR BLOG" />
                  </div>
                  <div className="col-xl-7">
                    <SectionTitle title=" Latest News &amp; Blog" />
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
            {blogData &&
              blogData.map((post, index) => <BlogCard key={index} {...post} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog1;
