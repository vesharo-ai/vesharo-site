"use client";

import React from "react";
import BodyOverlay from "./_components/BodyOverlay";
import Offcanvas from "./_components/Offcanvas";
import Nav from "./_components/Nav";
import Link from "@/components/common/Link";
import ThemeToggle from "@/components/common/ThemeToggle";

function Navbar() {
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <BodyOverlay
          showOffcanvas={showOffcanvas}
          setShowOffcanvas={setShowOffcanvas}
        />
        {/* Offcanvas */}
        <Offcanvas
          showOffcanvas={showOffcanvas}
          setShowOffcanvas={setShowOffcanvas}
        />
        <div className={`tz-header1${isSticky ? " sticky" : ""}`}>
          <div className="container">
            <div className="tz-header1__wrapper">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2 d-flex align-items-center">
                  <Link href="/" className="tz-header1__logo d-inline-block" aria-label="Vesharo Home">
                    <img src="/brand/logo.svg" alt="Vesharo" width="148" height="34" className="img-fluid" style={{ maxHeight: "34px", width: "auto" }} />
                  </Link>
                </div>
                <div className="col-6 col-md-8 col-lg-10 text-end d-flex align-items-center justify-content-end justify-content-xl-center">
                  <div className="tz-header__desktop d-none d-xl-block tz-ml-auto tz-mr-auto">
                    <Nav />
                  </div>
                  <div className="d-flex align-items-center justify-content-end gap-2 gap-md-3">
                    <ThemeToggle />
                    <div className="tz-buttons d-none d-md-inline-flex">
                      <Link
                        href="/contact"
                        className="tz-button text-uppercase fw-medium tz-text-m"
                      >
                        Book a free call
                      </Link>
                      <Link className="tz-button-circle" href="/contact" aria-label="Book a free call">
                        <i className="ph ph-arrow-up-right" />
                      </Link>
                    </div>
                    <button
                      type="button"
                      className="tz-button d-inline-flex d-xl-none tz-offcanvas-btn tz-offcanvas-open-btn"
                      onClick={() => setShowOffcanvas(!showOffcanvas)}
                      aria-label="Open mobile menu"
                      aria-expanded={showOffcanvas}
                      aria-controls="mobile-offcanvas-menu"
                      id="mobile-menu-trigger"
                    >
                      <i className="ph ph-list" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </div>
    </>
  );
}

export default Navbar;
