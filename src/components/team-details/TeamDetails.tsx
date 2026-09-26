import React from "react";
import TeamProgress from "./TeamProgress";
import TeamContact from "./TeamContact";
import TeamDetailsSocial from "./TeamDetailsSocial";
import TeamDetailsMemberInfo from "./TeamDetailsMemberInfo";

function TeamDetails() {
  return (
    <div className="tz-team-details">
      <div className="container">
        <div className="row g-4 d-flex justify-content-between">
          <div className="col-md-4">
            <div className="tz-team-details__image">
              <img src="/images/team/team-details-img1.jpg" alt="img" />
            </div>
          </div>
          <div className="col-md-7 tz-pt-30 tz-pb-30 tz-pt-lg-60 tz-pb-lg-60">
            <h1 className="tz-team-details__title tz-text-neutral5">
              Darrell Steward
            </h1>
            <p className="tz-team-details__designation tz-text-neutral6 tz-text-xl fw-light">
              Nursing Assistant
            </p>
            <h3 className="tz-team-details__subtitle tz-text-neutral5">
              About Info :
            </h3>
            <p className="tz-team-details__desc tz-text-neutral6 tz-text-l fw-light">
              Exploring diverse opportunities is key to unlocking lasting
              success. By stepping beyond familiar paths and embracing new
              possibilities, you can uncover untapped potential and create
              pathways for growth. Exploring diverse opportunities is key to
              unlocking lasting success.&nbsp;
            </p>
            <h4 className="tz-team-details__subtitle tz-text-neutral5 tz-pt-20 tz-pt-lg-40">
              Details :
            </h4>
            <div className="row g-4">
              <div className="col-md-5">
                <TeamDetailsMemberInfo />
              </div>
            </div>
            <TeamDetailsSocial />
          </div>
        </div>
        <div className="tz-team-details-info">
          <div className="row d-flex justify-content-between">
            <TeamProgress
              title="Experience Area"
              description="Darrell Steward Brown is a seasoned design professional with a and a deep understanding of creative strategies."
              skills={[
                { name: "Web Design", percentage: 95 },
                { name: "Digital Marketing", percentage: 80 },
                { name: "Web Development", percentage: 85 },
              ]}
            />
            <div className="col-md-5">
              <h2 className="tz-team-details__title tz-text-neutral5 text-uppercase">
                MY EXPERTISE
              </h2>
              <p className="tz-team-details__desc tz-text-neutral6 tz-text-l fw-light">
                Darrell Steward is an accomplished design expert with a sharp
                eye for detail and a profound grasp of innovative strategies.
                Beyond his professional endeavors, Joseph is a passionate
                explorer and art lover, finding inspiration in the rich tapestry
                of global cultures and personal adventures to enhance his
                creative vision.
              </p>
              <div className="row ">
                <div className="col-md-6 ">
                  <ul className="tz-team-details-expertise__list d-flex flex-column gap-3">
                    <li className="tz-team-details-expertise__item tz-text-l">
                      <span className="tz-team-details-expertise__list-icon">
                        <i className="ph ph-check" />
                      </span>
                      UI/UX design specialist
                    </li>
                    <li className="tz-team-details-expertise__item tz-text-l">
                      <span className="tz-team-details-expertise__list-icon">
                        <i className="ph ph-check" />
                      </span>
                      Driven by innovation and impact
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 ">
                  <ul className="tz-team-details-expertise__list d-flex flex-column gap-3">
                    <li className="tz-team-details-expertise__item tz-text-l">
                      <span className="tz-team-details-expertise__list-icon">
                        <i className="ph ph-check" />
                      </span>
                      Detail-oriented problem solver
                    </li>
                    <li className="tz-team-details-expertise__item tz-text-l">
                      <span className="tz-team-details-expertise__list-icon">
                        <i className="ph ph-check" />
                      </span>
                      Focused on client success
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TeamContact />
      </div>
    </div>
  );
}

export default TeamDetails;
