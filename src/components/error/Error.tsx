import React from "react";
import Link from "@/components/common/Link";

function Error() {
  return (
    <div className="tz-error h-100">
      <div className="container">
        <h1 className="tz-error__title">404</h1>
        <h2 className="tz-error__subtitle">Oops! Page Not Found</h2>
        <p className="tz-error__desc tz-text-l">
          Sorry, we couldn't find the page you where looking for. We suggest
          that you return to homepage.
        </p>
        <div className="tz-buttons d-flex justify-content-center">
          <Link
            href="/"
            className="tz-button text-uppercase fw-medium tz-text-m"
          >
            Explore More
          </Link>
          <Link href="/" className="tz-button-circle" aria-label="Back to homepage">
            <i className="ph ph-arrow-up-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
