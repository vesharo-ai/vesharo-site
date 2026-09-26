import React from "react";

function SectionTop({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="tz-section-top tz-section-top--centered">
      <div className="tz-section-subtitle">
        <span className="tz-section-subtitle__line" />
        <h4 className="text-uppercase tz-text-primary">{title}</h4>
      </div>
      <div className="tz-section-title tz-display-2 text-uppercase">
        {description}
      </div>
    </div>
  );
}

export default SectionTop;
