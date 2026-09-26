import React from "react";
import BlogDetails from "./BlogDetails";

const BlogDetailsTagSocial = React.memo(function BlogDetailsTagSocial() {
  return (
    <div className="tz-blog-details-tag">
      <div className="tz-blog-details-tag-box">
        <h4 className="tz-blog-details-tag-box__title tz-text-neutral5">
          Tags:
        </h4>
        <a className="tz-text-m tz-blog-details-tag-box__meta" href="#">
          Digital
        </a>
        <a className="tz-text-m tz-blog-details-tag-box__meta" href="#">
          Trendy
        </a>
        <a className="tz-text-m tz-blog-details-tag-box__meta" href="#">
          Environment
        </a>
      </div>
      <div className="tz-blog-details-social">
        <h4 className="tz-blog-details-social__title tz-text-neutral5">
          Follow Us :
        </h4>
        <div className="tz-blog-details-social__items">
          <a className="tz-blog-details-social__items-link" href="#">
            <i className="ph ph-facebook-logo" />
          </a>
          <a className="tz-blog-details-social__items-link" href="#">
            <i className="ph ph-instagram-logo" />
          </a>
          <a className="tz-blog-details-social__items-link" href="#">
            <i className="ph ph-twitter-logo" />
          </a>
          <a className="tz-blog-details-social__items-link" href="#">
            <i className="ph ph-linkedin-logo" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default BlogDetailsTagSocial;
