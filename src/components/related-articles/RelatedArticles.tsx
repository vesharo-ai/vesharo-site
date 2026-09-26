import React from "react";

function RelatedArticles() {
  return (
    <div className="tz-blog2">
      <div className="container">
        <div className="tz-section-top">
          <div className="row g-4">
            <div className="col-md-8">
              <div className="tz-section-title tz-display-2 text-uppercase">
                Related ArTicles{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
                <a
                  href="#"
                  className="tz-button text-uppercase fw-medium tz-text-m"
                >
                  {" "}
                  View More
                </a>
                <a className="tz-button-circle" href="#">
                  <i className="ph ph-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-xl-4">
            <div className="tz-blog2-card">
              <div className="tz-blog2-card__top">
                <h3 className="tz-blog2-card__title tz-text-neutral5">
                  {" "}
                  The Ultimate Guide to Boosting Your Online Presence in 2025{" "}
                </h3>
                <div className="tz-blog2-card__meta tz-text-m">
                  <span className="tz-blog2-card__category tz-text-m tz-text-neutral6">
                    {" "}
                    UI Design{" "}
                  </span>
                  <span className="tz-blog2-card__date tz-text-m tz-text-neutral6">
                    {" "}
                    03 May, 2025{" "}
                  </span>
                  <span className="tz-blog2-card__duration tz-text-m tz-text-neutral6">
                    {" "}
                    5 mins read{" "}
                  </span>
                </div>
              </div>
              <div className="tz-blog2-card__image">
                <img src="/images/blog/blog2-img1.jpg" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="tz-blog2-card">
              <div className="tz-blog2-card__top">
                <h3 className="tz-blog2-card__title tz-text-neutral5">
                  {" "}
                  How to Use Google Analytics to Track Your Website’s
                  Performance{" "}
                </h3>
                <div className="tz-blog2-card__meta tz-text-m">
                  <span className="tz-blog2-card__category tz-text-m tz-text-neutral6">
                    {" "}
                    UI Design{" "}
                  </span>
                  <span className="tz-blog2-card__date tz-text-m tz-text-neutral6">
                    {" "}
                    03 May, 2025{" "}
                  </span>
                  <span className="tz-blog2-card__duration tz-text-m tz-text-neutral6">
                    {" "}
                    5 mins read{" "}
                  </span>
                </div>
              </div>
              <div className="tz-blog2-card__image">
                <img src="/images/blog/blog2-img2.jpg" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="tz-blog2-card">
              <div className="tz-blog2-card__top">
                <h3 className="tz-blog2-card__title tz-text-neutral5">
                  {" "}
                  Why Your Business Needs a Data-Driven Marketing Approach{" "}
                </h3>
                <div className="tz-blog2-card__meta tz-text-m">
                  <span className="tz-blog2-card__category tz-text-m tz-text-neutral6">
                    {" "}
                    UI Design{" "}
                  </span>
                  <span className="tz-blog2-card__date tz-text-m tz-text-neutral6">
                    {" "}
                    03 May, 2025{" "}
                  </span>
                  <span className="tz-blog2-card__duration tz-text-m tz-text-neutral6">
                    {" "}
                    5 mins read{" "}
                  </span>
                </div>
              </div>
              <div className="tz-blog2-card__image">
                <img src="/images/blog/blog2-img3.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedArticles;
