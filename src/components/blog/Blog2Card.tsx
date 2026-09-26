import React from "react";
import { Blog2CardType } from "../../seeds/Blog.seeds";
import Link from "@/components/common/Link";

interface Blog2CardProps {
  card: Blog2CardType;
}

function Blog2Card({ card }: Blog2CardProps) {
  return (
    <div className="tz-blog2-card">
      <div className="tz-blog2-card__top">
        <Link href={card.link} className="tz-blog2-card__title tz-text-xl">
          <h3 className="tz-blog2-card__title tz-text-neutral5">
            {card.title}
          </h3>
        </Link>
        <div className="tz-blog2-card__meta tz-text-m">
          <span className="tz-blog2-card__category tz-text-m tz-text-neutral6">
            {card.category}
          </span>
          <span className="tz-blog2-card__date tz-text-m tz-text-neutral6">
            {card.date}
          </span>
          <span className="tz-blog2-card__duration tz-text-m tz-text-neutral6">
            {card.time}
          </span>
        </div>
      </div>
      <div className="tz-blog2-card__image">
        <img src={card.blogImg} alt={card.title} />
      </div>
    </div>
  );
}

export default Blog2Card;
