import Link from "@/components/common/Link";
import React from "react";

interface SocialLink {
  icon: string;
  url: string;
}

interface TeamDetailsSocialProps {
  title?: string;
  links?: SocialLink[];
}

function TeamDetailsSocial({
  title = "Follow Us :",
  links = [
    { icon: "ph-facebook-logo", url: "#" },
    { icon: "ph-instagram-logo", url: "#" },
    { icon: "ph-twitter-logo", url: "#" },
    { icon: "ph-linkedin-logo", url: "#" },
  ],
}: TeamDetailsSocialProps) {
  return (
    <div className="tz-team-details-social tz-pt-20 tz-pt-lg-40">
      <h4 className="tz-team-details-social__title tz-text-neutral5">
        {title}
      </h4>
      <div className="tz-team-details-social__items">
        {links.map((link, index) => (
          <Link
            key={index}
            className="tz-team-details-social__items-link"
            href={link.url}
          >
            <i className={`ph ${link.icon}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TeamDetailsSocial;
