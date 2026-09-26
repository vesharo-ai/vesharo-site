import React from "react";
import Nav from "./Nav";
import Link from "@/components/common/Link";

function Offcanvas({
  showOffcanvas,
  setShowOffcanvas,
}: {
  showOffcanvas: boolean;
  setShowOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className={`tz-offcanvas ${showOffcanvas ? "opened" : ""}`}>
        <div className="tz-offcanvas__wrapper pt-4">
          {/*  */}
          <div className="tz-offcanvas__top mb-5">
            <div className="row g-0">
              <div className="col-6">
                <Link href="/">
                  <img src="/images/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="col-6 text-end">
                <button
                  className="tz-button d-inline-flex d-xl-none tz-offcanvas-btn tz-offcanvas-close-btn"
                  onClick={() => setShowOffcanvas(false)}
                >
                  <i className="ph ph-x" />
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <h5 className="tz-text-neutral5">Welcome to</h5>
          <h1 className="tz-text-primary">DigiFlow</h1>
          <p className="tz-text-neutral5 tz-text-l">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          {/*  */}
          {/*  */}
          <div className="tz-mobile-menu__wrapper pt-4">
            <nav className="tz-mobile-menu">
              <Nav setShowOffcanvas={setShowOffcanvas} />
            </nav>
          </div>
          {/*  */}
          <div className="tz-offcanvas__bottom mt-4 d-flex align-items-center justify-content-end gap-2">
            <div className="tz-buttons">
              <Link
                href="/contact"
                className="tz-button text-uppercase fw-medium tz-text-m"
              >
                Get Started
              </Link>
              <Link className="tz-button-circle" href="#">
                <i className="ph ph-arrow-up-right" />
              </Link>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Offcanvas;
