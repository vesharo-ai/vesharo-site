import Link from "@/components/common/Link";
import React from "react";

function ServiceSidebar() {
  return (
    <div className="tz-service-details-sidebar">
      {/* Services List Widget */}
      <div className="tz-service-details-sidebar__widget">
        <h4 className="tz-service-details-sidebar__title">All Services</h4>
        <div className="tz-service-details-sidebar__service-list">
          <Link
            href="/service-details"
            className="tz-service-details-sidebar__service-item tz-text-m"
          >
            UI/UX design <i className="ph ph-caret-right" />
          </Link>
          <Link
            href="/service-details"
            className="tz-service-details-sidebar__service-item tz-text-m"
          >
            Web development <i className="ph ph-caret-right" />
          </Link>
          <Link
            href="/service-details"
            className="tz-service-details-sidebar__service-item tz-text-m"
          >
            3D designs <i className="ph ph-caret-right" />
          </Link>
          <Link
            href="/service-details"
            className="tz-service-details-sidebar__service-item tz-text-m"
          >
            Digital marketing design <i className="ph ph-caret-right" />
          </Link>
          <Link
            href="/service-details"
            className="tz-service-details-sidebar__service-item tz-text-m"
          >
            Logos &amp; branding <i className="ph ph-caret-right" />
          </Link>
        </div>
      </div>
      <div className="tz-service-details-sidebar__widget">
        <h4 className="tz-service-details-sidebar__title border-start-0 p-0">
          Book A Free Consultation
        </h4>
        <p className="tz-service-details-sidebar__desc tz-text-m tz-text-neutral6 fw-light">
          We always available to discus with you
        </p>
        <div className="tz-buttons">
          <Link
            href="/contact"
            className="tz-button text-uppercase fw-medium tz-text-m"
          >
            CONTACT US
          </Link>
          <Link className="tz-button-circle" href="/contact">
            <i className="ph ph-arrow-up-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceSidebar;
