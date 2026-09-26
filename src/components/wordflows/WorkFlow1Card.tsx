import React from "react";

interface workFlowInterface {
  subtitle: string;
  number: string;
  title: string;
  description: string;
  active: boolean;
}

function WorkFlow1Card({
  subtitle,
  number,
  title,
  description,
  active,
}: workFlowInterface) {
  return (
    <div className="tz-workflow1-card text-center">
      <h5 className="tz-workflow1-card__step tz-text-neutral6">{subtitle}</h5>
      {/* Timeline Track */}
      <div className="tz-workflow1-card__line">
        <span className="tz-workflow1-card__dot" />
      </div>
      {/* Timeline Track */}
      <div className="tz-workflow1-card__content">
        <div className="tz-workflow1-card__number tz-display-1 tz-text-neutral1">
          {number}
        </div>
        <h3 className="tz-workflow1-card__title tz-text-neutral5">{title}</h3>
        <p className="tz-workflow1-card__desc tz-text-l tz-text-neutral6">
          {description}
        </p>
      </div>
    </div>
  );
}

export default WorkFlow1Card;
