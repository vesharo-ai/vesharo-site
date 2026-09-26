import React from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import { teamMembers, TeamMemberType } from "../../seeds/Teams.seeds";
import TeamCard from "./TeamCard";
import Link from "@/components/common/Link";
import SectionTop from "../section-top/SectionTop";

function Team1({
  teamData,
  isInnerPage = false,
}: {
  teamData: TeamMemberType[];
  isInnerPage?: boolean;
}) {
  return (
    <>
      <section className="tz-team1">
        <div className="container">
          {isInnerPage ? (
            <SectionTop
              title="OUR EXPERT TEAM"
              description="Meet the leadership team"
            />
          ) : (
            <div className="tz-section-top">
              <div className="row g-4">
                <div className="col-md-8">
                  <div className="row g-4">
                    <div className="col-xl-4">
                      <SectionSubtitle subtitle="OUR EXPERT TEAM" />
                    </div>
                    <div className="col-xl-7">
                      <SectionTitle title=" Meet the leadership team" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
                    <Link
                      href="/team"
                      className="tz-button text-uppercase fw-medium tz-text-m"
                    >
                      Explore More
                    </Link>
                    <Link className="tz-button-circle" href="/">
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row g-4">
            {teamData &&
              teamData.map((member, index) => (
                <TeamCard key={index} {...member} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team1;
