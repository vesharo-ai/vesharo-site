import React from "react";

interface MemberInfo {
  label: string;
  value: string;
}

const details: MemberInfo[] = [
  { label: "Location", value: "Spain, Barcelona" },
  { label: "Position", value: "Founder & CEO" },
  { label: "Email", value: "sara.cruz@example.com" },
  { label: "Age", value: "42" },
  { label: "Qualification", value: "Master Degree" },
  { label: "Gender", value: "Male" },
];

function TeamDetailsMemberInfo({}) {
  return (
    <div className="col-md-5">
      <ul className="tz-team-details-list tz-text-l">
        {details.map((detail, index) => (
          <li key={index} className="tz-team-details-list__item">
            <span className="tz-team-details-list__label">{detail.label}:</span>
            <span className="tz-team-details-list__value">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamDetailsMemberInfo;
