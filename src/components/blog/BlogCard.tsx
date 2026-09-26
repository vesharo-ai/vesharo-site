import React from "react";
import { BlogPost } from "../../seeds/Blog1.seeds";
import Link from "@/components/common/Link";

const BlogCard: React.FC<BlogPost> = ({
  imageSrc,
  category,
  date,
  title,
  link,
}) => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="tz-blog1-card">
        <div className="tz-blog1-card__image">
          <img src={imageSrc} alt={title} />
          <span className="tz-blog1-card__tag tz-text-m text-uppercase">
            {category}
          </span>
        </div>
        <div className="tz-blog1-card__content">
          <p className="tz-blog1-card__date tz-text-m tz-text-neutral6 fw-light">
            {date}
          </p>
          <h4 className="tz-blog1-card__title tz-text-neutral5">{title}</h4>
          <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
            <Link
              href={link}
              className="tz-button text-uppercase fw-medium tz-text-m"
            >
              View More
            </Link>
            <Link className="tz-button-circle" href="#">
              <i className="ph ph-arrow-up-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
