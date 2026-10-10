import Link from "@/components/common/Link";
import React from "react";

interface ContactInfoBoxProps {
  icon: string;
  title: string;
  link: string;
  href?: string;
  className?: string;
}

function ContactInfoBox({
  icon,
  title,
  link,
  href,
  className = "",
}: ContactInfoBoxProps) {
  return (
    <div className={`tz-contact-info-box ${className}`}>
      <div className="tz-contact-info-box__icon">
        <i className={`ph ${icon}`} />
      </div>
      <div className="tz-contact-info-box__content">
        <h5 className="tz-contact-info-box__title">{title}</h5>
        {href ? (
          <Link className="tz-text-l tz-contact-info-box__link" href={href}>
            {link}
          </Link>
        ) : (
          <span className="tz-text-l tz-contact-info-box__link">{link}</span>
        )}
      </div>
    </div>
  );
}

export default ContactInfoBox;
