import React from "react";
import Link from "@/components/common/Link";
import { type BlogPost, blogPosts } from "../../seeds/Blog1.seeds";
import Pagination from "../pagination/Pagination";

function BlogPage({
  blogData,
  backgroundColor = "#171717",
  pagination = false,
}: {
  blogData: BlogPost[];
  backgroundColor?: string;
  pagination?: boolean;
}) {
  return (
    <section
      className="tz-blog-page tz-bg-neutral2 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120"
      style={{ backgroundColor }}
    >
      <div className="container">
        <div className="row g-4">
          {blogData &&
            blogData.map((post, index) => (
              <div key={index} className="col-md-6 col-xl-4">
                <div className="tz-blog1-card">
                  <div className="tz-blog1-card__image">
                    <img src={post.imageSrc} alt={post.title} />
                    <span className="tz-blog1-card__tag tz-text-m text-uppercase">
                      {post.category}
                    </span>
                  </div>
                  <div className="tz-blog1-card__content">
                    <p className="tz-blog1-card__date tz-text-m tz-text-neutral6 fw-light">
                      {post.date}
                    </p>
                    <h4 className="tz-blog1-card__title tz-text-neutral5">
                      {post.title}
                    </h4>
                    <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
                      <Link
                        href={post.link}
                        className="tz-button text-uppercase fw-medium tz-text-m"
                      >
                        View More
                      </Link>
                      <Link href={post.link} className="tz-button-circle">
                        <i className="ph ph-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {pagination && <Pagination />}
      </div>
    </section>
  );
}

export default BlogPage;
