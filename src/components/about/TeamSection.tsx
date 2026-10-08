"use client";
import teamData from "@/data/team.json";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  linkedin?: string;
}

export default function TeamSection() {
  const members = teamData as TeamMember[];

  // Golden Rule: When no real team members are supplied in team.json, hide the section completely.
  if (!members || members.length === 0) {
    return null;
  }

  return (
    <section
      className="tz-team tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 tz-bg-neutral3"
      aria-labelledby="team-heading"
    >
      <div className="container">
        <div className="tz-section-top tz-section-top--centered mb-5">
          <SectionSubtitle subtitle="Our People" />
          <h2
            id="team-heading"
            className="tz-display-2 text-uppercase tz-text-neutral5"
          >
            The Engineers Behind Vesharo
          </h2>
          <p className="tz-text-l tz-text-neutral6 mx-auto text-center" style={{ maxWidth: "600px" }}>
            Real engineers, real accountability. The people who architect your systems are the ones who write the code and answer your questions.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {members.map((member, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div
                className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(124, 92, 255, 0.2)",
                }}
              >
                <div>
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-circle mb-3 object-fit-cover"
                      style={{ border: "2px solid #7C5CFF" }}
                    />
                  )}
                  <h3 className="tz-display-3 text-white fw-bold mb-1" style={{ fontSize: "1.25rem" }}>
                    {member.name}
                  </h3>
                  <div className="text-primary fw-medium tz-text-m mb-3" style={{ color: "#A78BFA" }}>
                    {member.role}
                  </div>
                  {member.bio && (
                    <p className="text-white-50 tz-text-m mb-3">{member.bio}</p>
                  )}
                </div>

                {member.linkedin && (
                  <div className="pt-3 border-top border-secondary border-opacity-25">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-50 tz-text-s d-inline-flex align-items-center gap-1"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <i className="ph ph-linkedin-logo text-primary" aria-hidden="true" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
