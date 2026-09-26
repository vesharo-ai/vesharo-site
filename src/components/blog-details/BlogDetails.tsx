import React from "react";
import BlogDetailsTag from "./BlogDetailsTag";
import Link from "@/components/common/Link";
import BlogDetailsRecentPost from "./BlogDetailsRecentPost";
import BlogDetailsTopCategory from "./BlogDetailsTopCategory";
import BlogDetailsSearch from "./BlogDetailsSearch";
import BlogDetailsReview from "./BlogDetailsReview";
import BlogDetailsTagSocial from "./BlogDetailsTagSocial";

function BlogDetails() {
  return (
    <div className="tz-blog-details">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-9">
            <div className="tz-blog-details__image">
              <img src="/images/blog/blog-details-img1.jpg" alt="img" />
            </div>
            <div className="tz-blog-details__meta tz-text-m">
              <span className="tz-blog-details__category tz-text-m tz-text-primary">
                UI Design
              </span>
              <span className="tz-blog-details__date tz-text-m tz-text-neutral6">
                03 May, 2025
              </span>
              <span className="tz-blog-details__duration tz-text-m tz-text-neutral6">
                5 mins read
              </span>
            </div>
            <h1 className="tz-blog-details__subtitle tz-text-neutral5">
              How to Create a Social Media Strategy That Drives Real Results
            </h1>
            <p className="tz-blog-details__desc tz-text-neutral6 tz-text-l fw-light">
              In today’s fast-paced digital landscape, staying ahead of the
              curve is crucial for businesses aiming to thrive. As a leading
              digital agency, we’re always on the lookout for emerging trends
              that can help our clients achieve their goals. In this blog, we’ll
              explore five key trends shaping the future of digital marketing in
              2024 and how your business can leverage them to stay competitive.
            </p>
            <p className="tz-blog-details__desc tz-text-neutral6 tz-text-l fw-light">
              AI is no longer a futuristic concept—it’s here, and it’s
              transforming the way businesses operate. From chatbots that
              provide instant customer support to predictive analytics that
              optimize marketing campaigns, AI is revolutionizing digital
              marketing.
            </p>
            <blockquote className="tz-blog-details__quote tz-text-neutral5 tz-bg-neutral1 text-center tz-mt-lg-60 tz-mt-30">
              I prioritize collaboration to ensure the final product aligns with
              the client’s aspirations. Whether developing a sleek portfolio for
              an artist or a dynamic e-commerce platform for I infuse creativity
              and strategy into every step of the process.
            </blockquote>
            <h1 className="tz-blog-details__subtitle tz-text-neutral5 tz-pt-30 tz-pt-lg-60">
              Sustainability and Ethical Marketing
            </h1>
            <p className="tz-blog-details__desc tz-text-neutral6 tz-text-l fw-light">
              Consumers are becoming more conscious of the environmental and
              social impact of the brands they support. In 2025, businesses that
              prioritize sustainability and ethical practices will have a
              competitive edge. Digital marketing strategies will need to
              reflect these values, from eco-friendly packaging to transparent
              supply chains.
            </p>
            <p className="tz-blog-details__desc tz-text-neutral6 tz-text-l fw-light">
              With the rise of smart speakers and voice assistants like Alexa
              and Siri, voice search is becoming increasingly popular. By 2025,
              it’s estimated that over 50% of all searches will be voice-based.
            </p>
            <div className="row g-4 tz-pt-lg-30 tz-pt-10">
              <div className="col-md-6">
                <div className="tz-blog-details__image">
                  <img src="/images/blog/blog-details-img2.jpg" alt="img" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tz-blog-details__image">
                  <img src="/images/blog/blog-details-img3.jpg" alt="img" />
                </div>
              </div>
            </div>
            <BlogDetailsTagSocial />
            <BlogDetailsReview />
          </div>
          <div className="col-xl-3">
            <BlogDetailsSearch />
            <BlogDetailsTopCategory />
            <BlogDetailsRecentPost />
            <BlogDetailsTag />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
