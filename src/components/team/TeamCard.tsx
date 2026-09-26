import { TeamMemberType } from "@/seeds/Teams.seeds";
import Link from "@/components/common/Link";
import React from "react";

const TeamCard: React.FC<TeamMemberType> = ({ imageSrc, name, title }) => {
  return (
    <div className="col-md-6 col-xl-3">
      <div className="tz-team1-card">
        <div className="tz-team1-card__image">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="tz-team1-card__info">
          <p className="tz-team1-card__name tz-text-xl fw-semibold">{name}</p>
          <p className="tz-team1-card__title tz-text-m fw-light mb-0">
            {title}
          </p>
        </div>
        <div className="tz-team1-card__links">
          <Link href="#" className="tz-team1-card__social">
            <i className="ph ph-facebook-logo" />
          </Link>
          <Link href="#" className="tz-team1-card__social">
            <i className="ph ph-x-logo" />
          </Link>
          <Link href="#" className="tz-team1-card__social">
            <i className="ph ph-instagram-logo" />
          </Link>
          <Link href="#" className="tz-team1-card__social">
            <i className="ph ph-linkedin-logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
