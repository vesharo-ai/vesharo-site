import React from "react";
import type { BlogPostForList } from "@/lib/blog";
import Link from "@/components/common/Link";

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const BlogCard: React.FC<BlogPostForList> = ({
  image,
  category,
  pubDate,
  title,
  description,
  link,
}) => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="tz-blog1-card">
        <div className="tz-blog1-card__image">
          <img src={image} alt={title} loading="lazy" width={400} height={225} />
          <span className="tz-blog1-card__tag tz-text-m text-uppercase">
            {category}
          </span>
        </div>
        <div className="tz-blog1-card__content">
          <p className="tz-blog1-card__date tz-text-m tz-text-neutral6 fw-light">
            {formatDate(pubDate)}
          </p>
          <h4 className="tz-blog1-card__title tz-text-neutral5">{title}</h4>
          <p className="tz-blog1-card__desc tz-text-s tz-text-neutral6 mb-3">
            {description}
          </p>
          <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
            <Link
              href={link}
              className="tz-button text-uppercase fw-medium tz-text-m"
              aria-label={`Read ${title}`}
            >
              Read article
            </Link>
            <Link
              className="tz-button-circle"
              href={link}
              aria-label={`Read ${title}`}
            >
              <i className="ph ph-arrow-up-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;