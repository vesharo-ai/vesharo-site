import React from "react";

function WhoWeAreSocial() {
  return (
    <>
      <div className="tz-wwa1-card__social">
        <div className="tz-wwa1-card__social-links d-flex flex-column align-items-center gap-2">
          <h5 className="tz-wwa1-card__social-follow">
            <a href="#">Follow US</a>
          </h5>
          <div className="tz-wwa1-card__social-line" />
          <div className="tz-wwa1-card__social-logo">
            <a href="#">
              <i className="ph ph-meta-logo" />
            </a>
          </div>
          <div className="tz-wwa1-card__social-logo">
            <a href="#">
              <i className="ph ph-x-logo" />
            </a>
          </div>
          <div className="tz-wwa1-card__social-logo">
            <a href="#">
              <i className="ph ph-pinterest-logo" />
            </a>
          </div>
          <div className="tz-wwa1-card__social-logo">
            <a href="#">
              <i className="ph ph-linkedin-logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAreSocial;
