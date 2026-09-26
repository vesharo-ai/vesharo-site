import React from "react";
import { type ServiceCardType } from "../../seeds/Service.seeds";
import Link from "@/components/common/Link";

interface Service2CardProps {
  card?: ServiceCardType;
  item?: ServiceCardType;
  index: number;
  activeCard?: number;
  setActiveCard?: React.Dispatch<React.SetStateAction<number>>;
  isActive?: boolean;
}

function Service2Card({
  card,
  item,
  index,
  activeCard,
  setActiveCard,
  isActive,
}: Service2CardProps) {
  const currentCard = card || item;
  if (!currentCard) return null;

  return (
    <div
      className={`tz-service2-card ${isActive || activeCard === index ? "active" : ""}`}
      onMouseEnter={() => setActiveCard && setActiveCard(index)}
    >
      <div className="tz-service2-card__content">
        <img
          src="/images/service/service2-card-shape.svg"
          alt="shape"
          className="tz-service2-card__shape"
        />
        <h4 className="tz-service2-card__number tz-text-neutral6">
          {currentCard.number}
        </h4>
        <div className="tz-service2-card__icon">
          <img src={currentCard.iconSrc} alt="icon" className="svg" />
        </div>
        <h4 className="tz-service2-card__title tz-text-neutral5 text-uppercase">
          {currentCard.title}
        </h4>
        <p className="tz-service2-card__desc tz-text-l tz-text-neutral6">
          {currentCard.description}
        </p>
      </div>
      <div className="tz-service2-card__footer">
        <Link href={currentCard.link || "/service-details"}>
          <div className="row">
            <div className="col-9">
              <h5 className="tz-service2-card__btn mb-0 text-uppercase">
                View Details
              </h5>
            </div>
            <div className="col-3">
              <div className="tz-service2-card__btn-icon d-flex justify-content-end">
                <img
                  src="/images/service/service2-card-arrow.svg"
                  alt="Arrow Icon"
                  className="svg"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Service2Card;
