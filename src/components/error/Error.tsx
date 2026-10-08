import Link from "@/components/common/Link";

function Error() {
  return (
    <div className="tz-error h-100">
      <div className="container">
        <h2 className="tz-error__title">404</h2>
        <h2 className="tz-error__subtitle">Oops! Page Not Found</h2>
        <p className="tz-error__desc tz-text-l">
          Sorry, the page you are looking for has been moved, renamed, or does not exist.
        </p>
        <div className="tz-buttons d-flex justify-content-center gap-3">
          <Link
            href="/"
            className="tz-button text-uppercase fw-medium tz-text-m"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="tz-button tz-button--style2 text-uppercase fw-medium tz-text-m"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
